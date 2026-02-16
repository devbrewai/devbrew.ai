import CardListLayout from '@/layouts/CardListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allCaseStudies } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allCaseStudies.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allCaseStudies))
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
      title="Case Studies"
      description="Explore case studies showing how applied AI solves high-cost problems in fintech and finance, reducing losses, improving decisions, and delivering measurable value."
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
