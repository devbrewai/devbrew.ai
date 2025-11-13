import { ReactNode } from 'react'

import { CoreContent } from 'pliny/utils/contentlayer'

import type { Blog, Authors } from 'contentlayer/generated'

import Link from '@/components/Link'

import PageTitle from '@/components/PageTitle'

import SectionContainer from '@/components/SectionContainer'

import Image from '@/components/Image'

import Tag from '@/components/Tag'

import siteMetadata from '@/data/siteMetadata'

import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import TableOfContents from '@/components/TableOfContents'

import BackButton from '@/components/BackButton'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function BlogPostLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { path, date, title, tags, readingTime } = content
  const basePath = path.split('/')[0]
  const readingTimeText = readingTime?.text || '5 min read'

  return (
    <SectionContainer>
      {/* <ScrollTopAndComment /> */}
      <article>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-[250px_1fr] xl:grid-cols-[280px_1fr_280px]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <BackButton />

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="space-y-4">
                  {authorDetails.map((author) => {
                    const twitterUsername = author.twitter
                      ?.replace('https://twitter.com/', '')
                      .replace('https://x.com/', '')
                      .replace('@', '')
                    const followIntentUrl = twitterUsername
                      ? `https://twitter.com/intent/follow?screen_name=${twitterUsername}`
                      : author.twitter

                    return (
                      <div className="flex items-start space-x-3" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={48}
                            height={48}
                            alt="avatar"
                            className="h-12 w-12 rounded-full"
                          />
                        )}
                        <div className="text-sm">
                          {author.twitter ? (
                            <Link
                              href={followIntentUrl || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                            >
                              {author.name}
                            </Link>
                          ) : (
                            <div className="font-medium text-gray-900 dark:text-gray-100">
                              {author.name}
                            </div>
                          )}
                          {author.occupation && (
                            <div className="text-gray-600 dark:text-gray-400">
                              {author.occupation}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Metadata
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{readingTimeText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <main className="min-w-0">
              <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                  {title}
                </h1>
              </header>
              <div className="prose dark:prose-invert max-w-none">{children}</div>
            </main>

            <aside className="hidden xl:block">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>

          <footer className="mt-12 border-t border-gray-200 pt-8 lg:hidden dark:border-gray-700">
            <div className="space-y-6">
              <BackButton />

              <hr className="border-gray-200 dark:border-gray-700" />

              <div className="space-y-4">
                {authorDetails.map((author) => {
                  const twitterUsername = author.twitter
                    ?.replace('https://twitter.com/', '')
                    .replace('https://x.com/', '')
                    .replace('@', '')
                  const followIntentUrl = twitterUsername
                    ? `https://twitter.com/intent/follow?screen_name=${twitterUsername}`
                    : author.twitter

                  return (
                    <div className="flex items-start space-x-3" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={48}
                          height={48}
                          alt="avatar"
                          className="h-12 w-12 rounded-full"
                        />
                      )}
                      <div className="text-sm">
                        {author.twitter ? (
                          <Link
                            href={followIntentUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                          >
                            {author.name}
                          </Link>
                        ) : (
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {author.name}
                          </div>
                        )}
                        {author.occupation && (
                          <div className="text-gray-600 dark:text-gray-400">
                            {author.occupation}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Metadata
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{readingTimeText}</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
