'use client'

import { useState } from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { Button } from '@/components/ui/button'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface AuthorPost {
  path: string
  title: string
  summary?: string
  date: string
  images?: string[] | string | null
  type: string
}

interface AuthorArticlesProps {
  authorName: string
  posts: AuthorPost[]
}

export function AuthorArticles({ authorName, posts }: AuthorArticlesProps) {
  const [displayCount, setDisplayCount] = useState(3)
  const POSTS_PER_PAGE = 3

  const displayedPosts = posts.slice(0, displayCount)
  const hasMorePosts = displayCount < posts.length

  function handleShowMore() {
    setDisplayCount((prev) => prev + POSTS_PER_PAGE)
  }

  if (posts.length === 0) {
    return null
  }

  return (
    <SectionContainer>
      <div className="py-12 md:py-16">
        <div className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Articles by {authorName}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedPosts.map((post) => {
              const postImage =
                post.images && Array.isArray(post.images) && post.images.length > 0
                  ? post.images[0]
                  : null
              // Use image as-is: relative paths work with Next.js Image, absolute URLs are handled by remotePatterns
              const imageSrc = postImage || siteMetadata.socialBanner

              return (
                <article
                  key={post.path}
                  className="group overflow-hidden rounded-lg border-2 border-gray-200/60 transition-all hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600"
                >
                  {postImage && (
                    <Link href={`/${post.path}`} aria-label={`Link to ${post.title}`}>
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          alt={post.title}
                          src={imageSrc}
                          className="object-cover object-center transition-transform group-hover:scale-105"
                          width={544}
                          height={306}
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          siteMetadata.locale,
                          postDateTemplate
                        )}
                      </time>
                      <span className="mx-2">•</span>
                      <span className="capitalize">{post.type.replace('-', ' ')}</span>
                    </div>
                    <h3 className="mb-3 text-xl leading-8 font-bold tracking-tight">
                      <Link
                        href={`/${post.path}`}
                        className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100"
                        aria-label={`Link to ${post.title}`}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    {post.summary && (
                      <p className="mb-4 text-gray-600 dark:text-gray-400">{post.summary}</p>
                    )}
                    <Link
                      href={`/${post.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                      aria-label={`Link to ${post.title}`}
                    >
                      Read the story →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Show More Button */}
          {hasMorePosts && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleShowMore}
                variant="secondary"
                size="lg"
                className="cursor-pointer"
              >
                Show More
              </Button>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
