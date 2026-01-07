'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BrainCircuit, Wrench, Layers3, Repeat2, ArrowRight, SearchCode } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export type Offering = {
  title: string
  subhead: string
  body: string
  icon?: ReactNode
}

const offerings: Offering[] = [
  {
    title: 'AI Advisory',
    subhead: 'Priorities and a roadmap you can execute',
    body: 'Surface high-impact use cases, validate technical and compliance fit, and follow a phased plan with milestones, timelines, and KPIs.',
    icon: <BrainCircuit className="h-6 w-6" />,
  },
  {
    title: 'AI Product Engineering',
    subhead: 'Production in weeks.',
    body: 'Custom production grade AI applications delivered fast, with documented APIs, robust tests, and a clean handoff aligned to your standards.',
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: 'Model Evaluation & Calibration',
    subhead: 'Evidence-based selection',
    body: 'Head-to-head tests on your data; we tune thresholds and prompts and hand back the recommended model and config.',
    icon: <SearchCode className="h-6 w-6" />,
  },
  {
    title: 'AI Systems Implementation',
    subhead: 'Built to your standards',
    body: 'End to end pipelines and services aligned to your cloud and IAM controls, with logging, metrics, and alerts from day one.',
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    title: 'Managed AI Operations',
    subhead: 'Stable and cost-aware',
    body: 'Continuous monitoring, drift mitigation, A/B tests, and spend control with updates tied to KPIs.',
    icon: <Repeat2 className="h-6 w-6" />,
  },
]

export function Offerings({
  title = 'What We Do',
  className,
}: {
  title?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }
  return (
    <section className={cn('relative w-full text-neutral-900', className)} id="services">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item} className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-balance text-neutral-700">
              More than code or slides, we act as your embedded AI partner to design, build, and
              launch solutions that stick.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((itm) => (
              <motion.div key={itm.title} variants={item}>
                <Card
                  className={cn(
                    'h-full rounded-sm border border-neutral-200 bg-white p-6 text-neutral-900 shadow-sm',
                    'transition-shadow hover:shadow-md'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'mt-1 flex items-center justify-center rounded-xs p-2',
                        'bg-gradient-to-tr from-blue-400/15 to-blue-600/20',
                        'text-blue-700'
                      )}
                    >
                      {itm.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{itm.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-neutral-900">{itm.subhead}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{itm.body}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Sixth CTA tile */}

            <motion.div variants={item}>
              <Card className="flex h-full flex-col justify-between rounded-sm border border-neutral-200 bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">From Use Case to Production</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    See how initiatives move from a scoped use case to a compliant, scalable system
                    with KPIs.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link href="/get-started">
                      Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Offerings
