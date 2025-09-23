import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ResearchCasesList() {
  // Same sample items as the card layout for visual comparison
  const items = [
    {
      title: 'Fraud & sanctions screening for cross‑border payments',
      description:
        'Read select case studies from our applied research work. Metrics, approach, and short demos inside.',
      href: '/research/fraud-sanctions-payments',
    },
    {
      title: 'Credit‑builder default risk & limit optimization',
      description:
        'Read select case studies from our applied research work. Metrics, approach, and short demos inside.',
      href: '/research/credit-builder-limit-optimization',
    },
    {
      title: 'Claims triage & fraud for P&C and pet',
      description:
        'Read select case studies from our applied research work. Metrics, approach, and short demos inside.',
      href: '/research/claims-triage-fraud',
    },
  ]

  const showNav = items.length > 3

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="w-full max-w-xl">
            <h2 className="text-4xl leading-tight font-medium tracking-tighter text-balance sm:text-5xl lg:text-5xl">
              Research That Proves ROI
            </h2>
            <p className="mt-4 text-balance text-neutral-700">
              Explore case studies showing how applied AI solves high-cost problems in fintech and
              finance, reducing losses, improving decisions, and delivering measurable value.
            </p>

            {showNav && (
              <div className="mt-6 hidden md:block">
                <Button asChild variant="ghost">
                  <Link href="/research">View all</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="w-full pt-12 sm:pt-0">
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    className="block rounded-lg border from-blue-400/15 to-blue-600/20 p-4 transition hover:bg-gradient-to-tr hover:text-blue-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base leading-snug font-medium sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-xs text-balance">
                          {item.description}
                        </p>
                      </div>
                      <Button asChild size="icon" variant="ghost" className="shrink-0">
                        <span>
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
