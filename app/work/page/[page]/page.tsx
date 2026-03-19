import CardListLayout from '@/layouts/CardListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allWorks } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allWorks.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allWorks))
  const pageNumber = parseInt(params.page as string)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <CardListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Work"
      description="AI features we've built for B2B startups. Agents, RAG systems, document AI, and workflow automation."
      showCTA={true}
      ctaProps={{
        eyebrow: 'Like what you see?',
        title: 'Want something like this for your product?',
        description:
          "Tell us what you're building. We'll tell you where AI fits and how fast we can ship it.",
        buttonText: 'Get Started',
        buttonHref: '/get-started',
      }}
    />
  )
}
