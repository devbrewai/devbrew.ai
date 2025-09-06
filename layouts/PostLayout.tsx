import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors, Research } from 'contentlayer/generated'
import Link from '@/components/Link'
import { Linkedin as LinkedinIcon, X as XIcon } from '@/components/social-icons/icons'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const buildShareTargetUrl = (path: string, source: 'linkedin' | 'x') =>
  `${siteMetadata.siteUrl}/${path}?utm_source=${source}&utm_medium=social&utm_campaign=content_share&utm_content=post`

const linkedinShareUrl = (path: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(buildShareTargetUrl(path, 'linkedin'))}`

const xShareUrl = (path: string, title: string) =>
  `https://x.com/intent/tweet?url=${encodeURIComponent(buildShareTargetUrl(path, 'x'))}&text=${encodeURIComponent(title)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog | Research>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  related?: Array<{
    path: string
    title: string
    summary?: string
    tags?: string[]
    date: string
  }>
  children: ReactNode
}

export default function PostLayout({
  content,
  authorDetails,
  next,
  prev,
  related = [],
  children,
}: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]
  const backLabel = basePath === 'blog' ? 'blog' : basePath

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        {(author.occupation || author.company) && (
                          <dd className="text-gray-600 dark:text-gray-300">
                            {author.occupation}
                            {author.occupation && author.company ? ', ' : ''}
                            {author.company}
                          </dd>
                        )}
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-4">
                  <a
                    href={linkedinShareUrl(path)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2"
                    aria-label="Share on LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 fill-current" />
                    <span>Share on LinkedIn</span>
                  </a>
                  <a
                    href={xShareUrl(path, title)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2"
                    aria-label="Share on X"
                  >
                    <XIcon className="h-5 w-5 fill-current" />
                    <span>Share on X</span>
                  </a>
                </div>
              </div>
              {related.length > 0 && (
                <div className="pt-6 pb-6">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Related content
                  </h2>
                  <ul className="mt-4 space-y-6">
                    {related.slice(0, 4).map((item) => (
                      <li key={item.path} className="space-y-2">
                        <div>
                          <Link
                            href={`/${item.path}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium"
                          >
                            {item.title}
                          </Link>
                        </div>
                        {item.summary && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.summary}</p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap">
                            {item.tags.map((t) => (
                              <Tag key={t} text={t} />
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Back to the ${backLabel}`}
                >
                  &larr; Back to the {backLabel}
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
