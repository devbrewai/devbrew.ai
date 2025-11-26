import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Browse all tags' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Dark Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tags
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg md:text-xl">
              Browse all tags
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-lg flex-wrap">
            {tagKeys.length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              return (
                <div key={t} className="mt-2 mr-5 mb-2">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {` (${tagCounts[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
