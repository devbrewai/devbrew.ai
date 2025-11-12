'use client'

import Image from '@/components/Image'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { Button } from '@/components/ui/button'
import { Twitter, Linkedin as LinkedinIcon } from '@/components/social-icons/icons'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import type { Authors } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'

interface AuthorProfileProps {
  author: Authors
  authorContent: {
    name: string
    avatar?: string
    occupation?: string
    twitter?: string
    linkedin?: string
  }
}

export function AuthorProfile({ author, authorContent }: AuthorProfileProps) {
  const router = useRouter()
  return (
    <SectionContainer>
      <div className="py-8 md:py-12">
        {/* Go Back Button */}
        <div className="mb-8">
          <Button
            variant="link"
            asChild
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex cursor-pointer items-center gap-2 text-sm font-medium hover:no-underline"
          >
            <Link href="/blog" onClick={() => router.back()} aria-label="Back to blog">
              &larr; Back to blog
            </Link>
          </Button>
        </div>

        {/* Author Profile - Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[350px_1fr] md:gap-12 lg:gap-16">
          {/* Left Column: Portrait Image */}
          <div>
            {authorContent.avatar && (
              <div className="relative w-full max-w-[350px]">
                <Image
                  src={authorContent.avatar}
                  width={350}
                  height={420}
                  alt={authorContent.name}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column: Author Info & Bio */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-start justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-100">
                {authorContent.name}
              </h1>
              <div className="flex flex-shrink-0 items-center gap-3">
                {authorContent.twitter && (
                  <a
                    href={authorContent.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    aria-label={`${authorContent.name} on Twitter`}
                  >
                    <Twitter className="h-5 w-5 fill-current" />
                  </a>
                )}
                {authorContent.linkedin && (
                  <a
                    href={authorContent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    aria-label={`${authorContent.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="h-5 w-5 fill-current" />
                  </a>
                )}
              </div>
            </div>

            {authorContent.occupation && (
              <div className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                {authorContent.occupation}
              </div>
            )}

            {/* Bio Section */}
            {author.body && (
              <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none">
                <MDXLayoutRenderer code={author.body.code} />
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
