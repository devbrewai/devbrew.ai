'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function IntroSplit() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }
  return (
    <section className="relative w-full bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left: Headline + CTA */}
          <motion.div
            className="md:col-span-6 lg:col-span-7"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={item}
              className="text-4xl leading-tight font-medium tracking-tighter text-balance sm:text-5xl lg:text-5xl"
            >
              We build AI that ships, scales, and drives ROI.
            </motion.h1>
            <motion.p variants={item} className="mt-4 max-w-xl text-neutral-700">
              Devbrew is a founder-led AI engineering firm. We help fintech startups and financial
              institutions design, build, and deploy production AI systems.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex gap-3">
              <Button size="lg" variant="outline" className="cursor-pointer">
                <Link href="/about" className="flex items-center justify-between gap-4">
                  About Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Content blocks */}
          <motion.div
            className="space-y-8 md:col-span-6 lg:col-span-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            {/* <div>
              <h2 className="text-base font-semibold text-neutral-700">Why Devbrew</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
                <li>Founder-led with hands-on involvement</li>
                <li>Lean, high-caliber engineering team</li>
                <li>Proven track record shipping AI to production</li>
              </ul>
            </div> */}

            <motion.div variants={item}>
              <h2 className="text-base font-semibold text-neutral-700">How to think of us</h2>
              <p className="mt-2 text-neutral-700">
                We are not an agency. We are your out-of-the-box AI engineering partner,
                laser-focused on delivering production systems.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-base font-semibold text-neutral-700">What makes us different</h2>
              <p className="mt-2 text-neutral-700">
                We combine deep technical expertise with direct execution. We don't just advise, we
                build alongside you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
