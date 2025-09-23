'use client'

import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

export function ResearchCasesList() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }
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
    <section className="bg-background" id="research">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <motion.div
            className="w-full max-w-xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={item}
              className="text-4xl leading-tight font-medium tracking-tighter text-balance sm:text-5xl lg:text-5xl"
            >
              Research That Proves ROI
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-balance text-neutral-700">
              Explore case studies showing how applied AI solves high-cost problems in fintech and
              finance, reducing losses, improving decisions, and delivering measurable value.
            </motion.p>

            {showNav && (
              <motion.div variants={item} className="mt-6 hidden md:block">
                <Button asChild variant="ghost">
                  <Link href="/research">View all</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>

          <div className="w-full pt-12 sm:pt-0">
            <motion.ul
              className="flex flex-col gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((itemData) => (
                <motion.li key={itemData.href} className="w-full" variants={item}>
                  <Link
                    href={itemData.href}
                    className="block rounded-lg border from-blue-400/15 to-blue-600/20 p-4 transition hover:bg-gradient-to-tr hover:text-blue-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base leading-snug font-medium sm:text-lg">
                          {itemData.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-xs text-balance">
                          {itemData.description}
                        </p>
                      </div>
                      <Button asChild size="icon" variant="ghost" className="shrink-0">
                        <span>
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
