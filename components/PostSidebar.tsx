import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PostSidebarProps {
  basePath: string
  authorDetails: Array<{
    name: string
    company?: string
  }>
  date: string
  tags?: string[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostSidebar({
  basePath,
  authorDetails,
  date,
  tags,
  next,
  prev,
}: PostSidebarProps) {
  return (
    <aside className="space-y-8 lg:col-span-1">
      {/* Client Info Card */}
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-6 dark:border-gray-800 dark:from-slate-900 dark:to-blue-900/30">
        <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
          {basePath.charAt(0).toUpperCase() + basePath.slice(1)} Details
        </h3>
        <dl className="space-y-4">
          {authorDetails[0]?.company && (
            <div>
              <dt className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Location
              </dt>
              <dd className="text-sm font-medium text-gray-900 dark:text-white">
                {authorDetails[0].company}
              </dd>
            </div>
          )}
          {date && (
            <div>
              <dt className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Published
              </dt>
              <dd className="text-sm font-medium text-gray-900 dark:text-white">
                {new Date(date).toLocaleDateString(siteMetadata.locale, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </dd>
            </div>
          )}
          {tags && tags.length > 0 && (
            <div>
              <dt className="mb-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Industry
              </dt>
              <dd className="text-sm font-medium text-gray-900 dark:text-white">{tags[0]}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Tags */}
      {tags && tags.length > 1 && (
        <div>
          <h3 className="mb-3 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      {(next || prev) && (
        <div className="space-y-6">
          {prev && prev.path && (
            <div>
              <h3 className="mb-2 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Previous Article
              </h3>
              <Link
                href={`/${prev.path}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
              >
                {prev.title}
              </Link>
            </div>
          )}
          {next && next.path && (
            <div>
              <h3 className="mb-2 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Next Article
              </h3>
              <Link
                href={`/${next.path}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
              >
                {next.title}
              </Link>
            </div>
          )}
        </div>
      )}
    </aside>
  )
}
