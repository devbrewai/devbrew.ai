import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allAuthors, allBlogs, allResearch, allCaseStudies } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { sortPosts } from 'pliny/utils/contentlayer'
import { AuthorView } from '@/modules/authors/ui/views/AuthorView'
import siteMetadata from '@/data/siteMetadata'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata | undefined> {
  const { slug } = await params
  const author = allAuthors.find((p) => p.slug === slug) as Authors

  if (!author) {
    return
  }

  return {
    title: `${author.name} | ${siteMetadata.title}`,
    description: author.occupation || `Articles by ${author.name}`,
    openGraph: {
      title: author.name,
      description: author.occupation || `Articles by ${author.name}`,
      images: author.avatar ? [siteMetadata.siteUrl + author.avatar] : [],
    },
  }
}

function getAuthorPosts(authorSlug: string) {
  const allPosts = [
    ...allBlogs.filter((p) => p.authors?.includes(authorSlug) && p.draft !== true),
    ...allResearch.filter((p) => p.authors?.includes(authorSlug) && p.draft !== true),
    ...allCaseStudies.filter((p) => p.authors?.includes(authorSlug) && p.draft !== true),
  ]

  return sortPosts(allPosts).map((post) => ({
    path: post.path,
    title: post.title,
    summary: post.summary,
    date: post.date,
    images: post.images,
    type: post._raw.sourceFileDir.split('/')[0], // 'blog', 'research', or 'case-studies'
  }))
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = allAuthors.find((p) => p.slug === slug) as Authors

  if (!author) {
    return notFound()
  }

  const authorContent = coreContent(author)
  const authorPosts = getAuthorPosts(slug)

  return <AuthorView author={author} authorContent={authorContent} posts={authorPosts} />
}
