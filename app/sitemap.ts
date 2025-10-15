import { MetadataRoute } from 'next'
import { allResearch, allCaseStudies } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const researchRoutes = allResearch
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const caseStudyRoutes = allCaseStudies
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  // TODO: Add 'research' and 'insights' to routes when the pages become available
  const routes = ['', 'about', 'case-studies', 'services', 'tags', 'contact'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...researchRoutes, ...caseStudyRoutes]
}
