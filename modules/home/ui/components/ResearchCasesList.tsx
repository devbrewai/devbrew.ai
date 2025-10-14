'use client'

import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
      title: 'AI Fraud Detection & Sanctions Screening for Cross‑Border Payments',
      description:
        'Detect and prevent fraud in card-not-present transactions while screening against OFAC sanctions lists. Reduced fraud loss by 38%, cut false positives by 60% with sub-200ms latency.',
      href: '/case-studies/ai-fraud-detection-cross-border-payments',
      status: 'in-progress' as const,
    },
    {
      title: 'AI Credit Risk & Underwriting Optimization',
      description:
        'Predict borrower default risk and enable AI-driven credit approvals with fairness and explainability. 44% more approvals, 36% lower APR, 53% fewer defaults.',
      href: '/case-studies/ai-credit-builder-limit-optimization',
      status: 'coming-soon' as const,
    },
    {
      title: 'AI-Enhanced Compliance & AML Risk Monitoring',
      description:
        'Detect money-laundering typologies and automate KYC/KYB document verification with explainable AI. 70% fewer false positives, 50% faster investigations.',
      href: '/case-studies/ai-enhanced-compliance-aml-risk-monitoring',
      status: 'coming-soon' as const,
    },
  ]

  const showNav = items.length > 3

  return (
    <section className="bg-background" id="case-studies">
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
              Case Studies That Proves ROI
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-balance text-neutral-700">
              Explore case studies showing how applied AI solves high-cost problems in fintech and
              finance, reducing losses, improving decisions, and delivering measurable value.
            </motion.p>

            {showNav && (
              <motion.div variants={item} className="mt-6 hidden md:block">
                <Button asChild variant="ghost">
                  <Link href="/case-studies">View all</Link>
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
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base leading-snug font-medium sm:text-lg">
                            {itemData.title}
                          </h3>
                          <Badge
                            variant={itemData.status === 'in-progress' ? 'default' : 'secondary'}
                            className="text-[10px] sm:text-xs"
                          >
                            {itemData.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mt-2 text-xs">{itemData.description}</p>
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
