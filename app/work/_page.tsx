import CardListLayout from '@/layouts/CardListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allWorks } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 6

export const metadata = genPageMetadata({ title: 'Work' })

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
      description="Explore our work showing how applied AI solves high-cost problems in fintech and payments, reducing losses, improving decisions, and delivering measurable value."
      showCTA={true}
      ctaProps={{
        eyebrow: 'You have seen the outcomes',
        title: 'Now create yours',
        description:
          'If you run cross border payments, you know how much impact AI can have. We help teams reduce losses, improve routing, and ship production AI fast.',
        buttonText: 'Start Now',
        buttonHref: '/get-started',
      }}
    />
  )
}
