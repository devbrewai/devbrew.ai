'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

export function ResearchCasesList() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  const metrics = [
    { value: '30ms', label: 'API latency' },
    { value: '97%', label: 'Sanctions precision' },
    { value: '$225K', label: 'Demonstrated savings' },
  ]

  return (
    <section className="bg-background" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="max-w-xl" variants={item}>
            <p className="text-sm font-medium tracking-wider text-neutral-500 uppercase">
              Featured case study
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Image
                src="/static/images/logos/sentinel-logo-emblem.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h2 className="text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
                Sentinel
              </h2>
            </div>
            <p className="mt-1 text-lg text-neutral-600">
              AI fraud detection & sanctions screening for cross-border payments
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-sm border bg-gradient-to-br from-neutral-50 to-white p-6 sm:p-8"
          >
            <p className="text-balance text-neutral-700">
              Stop fraud faster and stay compliant with ML-powered transaction scoring. Sentinel
              combines LightGBM-based fraud detection with real-time OFAC sanctions screening,
              delivering explainable decisions in under 200ms.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/case-studies/sentinel">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://sentinel.devbrew.ai" target="_blank" rel="noopener noreferrer">
                  Try live demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
