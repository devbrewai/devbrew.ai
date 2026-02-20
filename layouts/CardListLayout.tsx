'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, CaseStudy, Research, Work } from 'contentlayer/generated'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { CTA } from '@/components/CTA'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface CardListLayoutProps {
  posts: CoreContent<Blog | CaseStudy | Research | Work>[]
  title: string
  description?: string
  initialDisplayPosts?: CoreContent<Blog | CaseStudy | Research | Work>[]
  pagination?: PaginationProps
  showCTA?: boolean
  ctaProps?: {
    eyebrow?: string
    title?: string
    description?: string
    buttonText?: string
    buttonHref?: string
  }
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-700">
      <div className="flex flex-1 justify-start">
        {prevPage ? (
          <Button variant="outline" asChild>
            <Link
              href={
                currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
              }
              rel="prev"
            >
              ← Previous
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            ← Previous
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className="flex flex-1 justify-end">
        {nextPage ? (
          <Button variant="outline" asChild>
            <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
              Next →
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}

export default function CardListLayout({
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
  showCTA = false,
  ctaProps,
}: CardListLayoutProps) {
  const reduce = useReducedMotion()
  const [searchValue, setSearchValue] = useState('')

  const filteredPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // Use initialDisplayPosts if no search, otherwise use filtered results
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredPosts

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

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

            {/* Search Bar */}
            <div className="mt-8 max-w-lg">
              <div className="relative">
                <input
                  aria-label={`Search ${title.toLowerCase()}`}
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={`Search ${title.toLowerCase()}...`}
                  className="block w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 pl-11 text-white backdrop-blur-sm transition-colors placeholder:text-blue-200 focus:border-white/40 focus:bg-white/20 focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
                <Search className="absolute top-3.5 left-3 h-5 w-5 text-blue-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-neutral-50 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!displayPosts.length && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                {searchValue
                  ? `No ${title.toLowerCase()} found matching your search.`
                  : `No ${title.toLowerCase()} available.`}
              </p>
            </div>
          )}

          {displayPosts.length > 0 && (
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {displayPosts.map((post) => {
                const { path, title: postTitle, summary, tags } = post

                // Type guard for CaseStudy properties
                const isCaseStudy = (
                  p: CoreContent<Blog | CaseStudy | Research | Work>
                ): p is CoreContent<CaseStudy | Work> => 'clientLogo' in p
                const clientLogo = isCaseStudy(post) ? post.clientLogo : undefined
                const clientName = isCaseStudy(post) ? post.clientName : undefined
                const images = 'images' in post ? (post.images as string[]) : []

                // Determine image source and mode
                let imageSrc = '/static/images/devbrew-white.svg'
                let imageMode: 'logo' | 'cover' = 'logo'
                let altText = 'Devbrew'

                if (clientLogo) {
                  imageSrc = clientLogo
                  imageMode = 'logo'
                  altText = clientName || 'Client logo'
                } else if (images && images.length > 0) {
                  imageSrc = images[0]
                  // Heuristic: SVGs are typically logos, other formats are likely cover images
                  imageMode = imageSrc.toLowerCase().endsWith('.svg') ? 'logo' : 'cover'
                  altText = postTitle
                }

                return (
                  <motion.article
                    key={path}
                    variants={item}
                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                  >
                    <Link href={`/${path}`} className="flex h-full flex-col">
                      {/* Card Header */}
                      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 transition-all group-hover:from-slate-800 group-hover:via-blue-800 group-hover:to-slate-800 sm:h-40 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
                        {/* Radial gradient overlay (only visible if not covered) */}
                        {imageMode === 'logo' && (
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />
                        )}

                        {/* Image Container */}
                        <div className="relative flex h-full w-full items-center justify-center p-6">
                          {imageMode === 'logo' ? (
                            <Image
                              src={imageSrc}
                              alt={altText}
                              width={60}
                              height={20}
                              className="h-8 w-auto object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <Image
                              src={imageSrc}
                              alt={altText}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-1 flex-col p-6">
                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="mb-3 flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs uppercase">
                                {tag.split(' ').join('-')}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="mb-3 text-xl leading-tight font-semibold tracking-tight text-gray-900 transition-colors dark:text-gray-100">
                          {postTitle}
                        </h2>

                        {/* Summary */}
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
                          {summary}
                        </p>

                        {/* Read More Link */}
                        <div className="text-primary mt-auto flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </motion.div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && !searchValue && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}

          {/* Show count */}
          {displayPosts.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                Showing {displayPosts.length} of {searchValue ? filteredPosts.length : posts.length}{' '}
                {posts.length === 1 ? title.slice(0, -1) : title.toLowerCase()}
                {searchValue && ` matching "${searchValue}"`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {showCTA && (
        <CTA
          eyebrow={ctaProps?.eyebrow || 'Ready to get started?'}
          title={ctaProps?.title || 'Turn AI potential into measurable results'}
          description={
            ctaProps?.description ||
            'Start building your AI solution today with our expert team and achieve ROI in weeks.'
          }
          buttonText={ctaProps?.buttonText || 'Get Started'}
          buttonHref={ctaProps?.buttonHref || '/get-started'}
          variant="default"
        />
      )}
    </div>
  )
}
