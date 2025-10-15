'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import { useRouter } from 'next/navigation'
import type { Authors, Research, Insight, CaseStudy } from 'contentlayer/generated'
import Link from '@/components/Link'
import { Linkedin as LinkedinIcon, X as XIcon } from '@/components/social-icons/icons'
// import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
// import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { Button } from '@/components/ui/button'
import TableOfContents from '@/components/TableOfContents'
import { CTA } from '@/components/CTA'

const buildShareTargetUrl = (path: string, source: 'linkedin' | 'x') =>
  `${siteMetadata.siteUrl}/${path}?utm_source=${source}&utm_medium=social&utm_campaign=content_share&utm_content=post`

const linkedinShareUrl = (path: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(buildShareTargetUrl(path, 'linkedin'))}`

const xShareUrl = (path: string, title: string) =>
  `https://x.com/intent/tweet?url=${encodeURIComponent(buildShareTargetUrl(path, 'x'))}&text=${encodeURIComponent(title)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  // weekday: 'long', Uncomment if you want the weekday to be displayed
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Research | Insight | CaseStudy>
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
  const router = useRouter()
  const { filePath, path, slug, date, title, tags, summary } = content
  const lastmod = 'lastmod' in content ? content.lastmod : null
  const basePath = path.split('/')[0]
  // Format the label: remove hyphens and capitalize words
  const backLabel = basePath
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <>
      {/* <ScrollTopAndComment /> */}
      <article>
        {/* Hero Section with Dark Gradient Background */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

          <SectionContainer>
            <div className="relative py-12 md:py-16 lg:py-20">
              {/* Go Back Button */}
              <div className="mb-8">
                <Button
                  variant="link"
                  onClick={() => router.back()}
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-200 transition-colors hover:text-white hover:no-underline"
                  aria-label={`Back to ${backLabel}`}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Go back
                </Button>
              </div>

              {/* Title and Summary */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                <div className="space-y-8 lg:col-span-2">
                  <div className="space-y-6">
                    <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                      {title}
                    </h1>
                    {summary && (
                      <p className="max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
                        {summary}
                      </p>
                    )}
                  </div>

                  {/* Author and Date Info */}
                  <div className="flex flex-col gap-4 text-blue-200 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-6">
                      {authorDetails.map((author, index) => (
                        <div key={author.name} className="flex items-center gap-3">
                          {author.avatar && (
                            <Image
                              src={author.avatar}
                              width={40}
                              height={40}
                              alt={author.name}
                              className="rounded-full ring-2 ring-white/20"
                            />
                          )}
                          <div>
                            <div className="font-medium text-white">{author.name}</div>
                            {author.occupation && (
                              <div className="text-sm text-blue-200">{author.occupation}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      {lastmod && lastmod !== date ? (
                        <div className="flex flex-col gap-1 text-right">
                          <time dateTime={lastmod} className="font-medium text-white">
                            Last updated:{' '}
                            {new Date(lastmod).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                          <time dateTime={date} className="text-xs text-blue-300">
                            Published:{' '}
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                        </div>
                      ) : (
                        <time dateTime={date}>
                          Published:{' '}
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      )}
                    </div>
                  </div>
                </div>

                {/* Client/Company Logo or Badge */}
                {/* <div className="flex items-start justify-start lg:justify-end">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold uppercase text-sm tracking-wider">
                      {basePath}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </SectionContainer>
        </div>

        {/* Main Content Section */}
        <SectionContainer>
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
              {/* Main Content */}
              <div className="space-y-8 lg:col-span-3">
                <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>

                {/* Share Section */}
                <div className="border-t border-gray-200 pt-8 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <a
                      href={linkedinShareUrl(path)}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="dark:hover:text-primary-400 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-600"
                      aria-label="Share on LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5 fill-current" />
                      <span>Share on LinkedIn</span>
                    </a>
                    <a
                      href={xShareUrl(path, title)}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="dark:hover:text-primary-400 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-600"
                      aria-label="Share on X"
                    >
                      <XIcon className="h-5 w-5 fill-current" />
                      <span>Share on X</span>
                    </a>
                  </div>
                </div>

                {/* Footer Section */}
                <footer>
                  <div className="divide-y divide-gray-200 text-sm leading-5 font-medium dark:divide-gray-700">
                    {/* TODO: Uncomment Tags when we have more tags and content */}
                    {/* {tags && tags.length > 0 && (
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
                    )} */}

                    {/* Related Content */}
                    {related.length > 0 && (
                      <div className="py-4 xl:py-8">
                        <h2 className="mb-6 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Related {basePath === 'case-studies' ? 'Case Studies' : 'Content'}
                        </h2>
                        <ul className="space-y-6">
                          {related.slice(0, 4).map((item) => (
                            <li key={item.path} className="space-y-2">
                              <Link
                                href={`/${item.path}`}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 block text-lg font-medium"
                              >
                                {item.title}
                              </Link>
                              {item.summary && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {item.summary}
                                </p>
                              )}
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
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

                    {/* Previous/Next Navigation */}
                    {(next || prev) && (
                      <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                        {prev && prev.path && (
                          <div>
                            <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                              Previous {basePath === 'case-studies' ? 'Case Study' : 'Article'}
                            </h2>
                            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                              <Link href={`/${prev.path}`}>{prev.title}</Link>
                            </div>
                          </div>
                        )}
                        {next && next.path && (
                          <div>
                            <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                              Next {basePath === 'case-studies' ? 'Case Study' : 'Article'}
                            </h2>
                            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                              <Link href={`/${next.path}`}>{next.title}</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* TODO: Uncomment 'Back to Top and Back to List' button if need be */}
                  {/* <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between xl:pt-8">
                    <Link
                      href={`/${basePath}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex cursor-pointer items-center gap-2 text-sm font-medium"
                      aria-label={`Back to ${backLabel}`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      View {backLabel}
                    </Link>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex cursor-pointer items-center gap-2 text-sm font-medium"
                      aria-label="Scroll to top"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      Back to top
                    </button>
                  </div> */}
                </footer>
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden space-y-8 lg:col-span-1 lg:block">
                <div className="sticky top-24">
                  <TableOfContents />
                </div>
              </aside>

              {/* Original Sidebar - Commented out for future use */}
              {/* <PostSidebar
                basePath={basePath}
                authorDetails={authorDetails}
                date={date}
                tags={tags}
                next={next}
                prev={prev}
              /> */}
            </div>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CTA
          eyebrow="Interested in similar results?"
          title="Let's discuss your AI transformation"
          description="See how we can help you achieve measurable results with AI solutions tailored to your business needs."
          buttonText="Get Started"
          buttonHref="/contact"
          variant="compact"
        />
      </article>
    </>
  )
}
