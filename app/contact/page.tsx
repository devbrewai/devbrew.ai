import { Metadata } from 'next'
import ContactForm from '@/modules/contact/ui/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Tell us about your needs. We'll review and reply within one business day. Book a quick briefing or send details and we’ll scope a rapid prototype.",
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-primary-500 mb-3 text-sm font-medium tracking-widest uppercase">
            Get Started
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Tell us about your needs
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Thanks for your interest. Share a bit about your project, goals, and timeline. We’ll
            follow up within one business day to schedule a short call and discuss next steps.
          </p>
        </div>
        <div className="rounded-none border bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
