'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Research, Blog, CaseStudy } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Research | Blog | CaseStudy>[]
  title: string
  description?: string
  initialDisplayPosts?: CoreContent<Research | Blog | CaseStudy>[]
  pagination?: PaginationProps
  basePath?: string
  allLabel?: string
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const paginationBasePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${paginationBasePath}/`
                : `/${paginationBasePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${paginationBasePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
  basePath = 'blog',
  allLabel = 'All Articles',
}: ListLayoutProps) {
  const reduce = useReducedMotion()
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Dark Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? 'none' : 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg md:text-xl">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen max-w-[280px] min-w-[280px] flex-wrap overflow-auto border border-neutral-200 bg-white pt-5 sm:flex dark:bg-gray-900/70 dark:shadow-gray-800/40">
              <div className="px-6 py-4">
                {pathname.startsWith(`/${basePath}`) ? (
                  <h3 className="text-primary-500 font-bold uppercase">{allLabel}</h3>
                ) : (
                  <Link
                    href={`/${basePath}`}
                    className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
                  >
                    {allLabel}
                  </Link>
                )}
                <ul>
                  {sortedTags.map((t) => {
                    return (
                      <li key={t} className="my-3">
                        {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                          <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                            {`${t} (${tagCounts[t]})`}
                          </h3>
                        ) : (
                          <Link
                            href={`/tags/${slug(t)}`}
                            className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
                            aria-label={`View posts tagged ${t}`}
                          >
                            {`${t} (${tagCounts[t]})`}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {displayPosts.map((post) => {
                  const { path, date, title, summary, tags, readingTime } = post
                  return (
                    <li key={path} className="py-5">
                      <article className="flex flex-col space-y-2 xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="flex items-center text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                            <time dateTime={date} suppressHydrationWarning>
                              {formatDate(date, siteMetadata.locale)}
                            </time>
                            {readingTime?.text && (
                              <span className="ml-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                                &bull; {readingTime.text}
                              </span>
                            )}
                          </dd>
                        </dl>
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <h2 className="text-2xl leading-8 font-bold tracking-tight">
                              <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags?.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
              {pagination && pagination.totalPages > 1 && (
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
