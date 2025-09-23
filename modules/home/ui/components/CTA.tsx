'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

export function CTA() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24 text-neutral-900"
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
        <motion.div
          className="mx-auto max-w-3xl space-y-6 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-2">
            <motion.p variants={item} className="mb-2 text-sm font-semibold text-blue-700">
              Ready to get started?
            </motion.p>
            <motion.h2
              variants={item}
              className="text-4xl font-medium tracking-tighter text-balance sm:text-6xl"
            >
              Turn AI potential into ROI in weeks
            </motion.h2>
          </div>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-sm text-balance text-neutral-700 sm:text-base"
          >
            We help fintech leaders build AI solutions that accelerate growth and deliver measurable
            returns.
          </motion.p>
          <motion.div variants={item}>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-blue-600 px-8 text-white hover:bg-blue-700"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
