import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/modules/contact/ui/components/ContactForm'

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    "Tell us what you're building. We'll tell you where AI fits and how fast we can ship it.",
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return (
    <section className="min-h-screen bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Tell us what you're building.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            We'll get back to you within 24 hours with thoughts on where AI fits and how we can
            help.
          </p>
          <p className="mt-8 text-sm text-neutral-500">
            Prefer to book a call directly?{' '}
            <Link
              href="https://cal.com/joekariuki/devbrew"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
            >
              Schedule 15 minutes here.
            </Link>
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
