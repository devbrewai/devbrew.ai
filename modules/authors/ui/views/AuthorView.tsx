import { AuthorProfile } from '../components/AuthorProfile'
import { AuthorArticles } from '../components/AuthorArticles'
import type { Authors } from 'contentlayer/generated'

interface AuthorPost {
  path: string
  title: string
  summary?: string
  date: string
  images?: string[] | string | null
  type: string
}

interface AuthorViewProps {
  author: Authors
  authorContent: {
    name: string
    avatar?: string
    occupation?: string
    twitter?: string
    linkedin?: string
  }
  posts: AuthorPost[]
}

export function AuthorView({ author, authorContent, posts }: AuthorViewProps) {
  return (
    <>
      <AuthorProfile author={author} authorContent={authorContent} />
      <AuthorArticles authorName={authorContent.name} posts={posts} />
    </>
  )
}
