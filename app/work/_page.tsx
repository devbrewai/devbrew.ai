import CardListLayout from '@/layouts/CardListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allWorks } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 6

export const metadata = genPageMetadata({
  title: 'Our Work',
  description:
    "AI features we've built for B2B startups. Agents, RAG systems, document AI, and workflow automation.",
})

export default async function WorkPage() {
  const posts = allCoreContent(sortPosts(allWorks))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
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
