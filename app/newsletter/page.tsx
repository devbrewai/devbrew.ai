import { genPageMetadata } from 'app/seo'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = genPageMetadata({ title: 'Newsletter' })

export default function Newsletter() {
  return (
    <div className="flex min-h-screen items-center bg-neutral-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Stay Updated with AI Insights
            </h1>
            <p className="text-lg text-balance text-gray-600">
              Subscribe to our newsletter for the latest AI trends, case studies, and insights for
              fintech and finance.
            </p>
          </div>

          <div className="w-full">
            <NewsletterForm title="" />
          </div>

          <div className="space-y-4 text-center text-sm text-balance text-gray-500">
            <p>We respect your privacy. Unsubscribe at any time.</p>
            <p>
              By subscribing, you agree to receive emails from Devbrew about AI engineering
              insights, case studies, and product updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
