import CaseStudiesListLayout from '@/layouts/CaseStudiesListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allCaseStudies } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 6

export const metadata = genPageMetadata({ title: 'Case Studies' })

export default async function CaseStudiesPage() {
  const posts = allCoreContent(sortPosts(allCaseStudies))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <CaseStudiesListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Case Studies"
    />
  )
}
