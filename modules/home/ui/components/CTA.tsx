import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-20 text-neutral-900"
      id="book"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_45%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(40%_35%_at_80%_120%,rgba(59,130,246,0.08),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold text-blue-700">Ready to get started?</p>
          <h2 className="text-4xl font-medium tracking-tighter sm:text-5xl">
            Turn AI potential into measurable results
          </h2>
          <p className="mt-4 text-balance text-neutral-700">
            Stop wondering if AI can work for your business. We’ll help you identify high‑impact
            opportunities, implement proven solutions, and deliver outcomes that stand up to the
            CFO.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-blue-600 px-8 text-white hover:bg-blue-700"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
