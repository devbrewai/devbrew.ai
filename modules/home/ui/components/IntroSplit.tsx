'use client'

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
    <section className="relative w-full bg-neutral-50 text-neutral-900" id="about">
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
              From pilot to production in 4–6 weeks. We embed with your team, ship weekly, and align
              on measurable KPIs, so you see impact fast.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex gap-3">
              {/*
              <Button size="lg" variant="outline" className="bg-white">
                <Link href="/#about" className="flex items-center justify-between gap-4">
                  About Us
                </Link>
              </Button>
              */}
              <span
                className="inline-flex items-center justify-center rounded-sm border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
                aria-hidden="true"
              >
                About Us
              </span>
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
                We are an applied AI engineering firm for mid-market cross-border payments
                companies.
              </p>
              <p className="mt-2 text-neutral-700">
                We build AI systems that help payments companies detect fraud, automate KYC, and
                forecast liquidity at a fraction of the cost and timeline of building in-house.
              </p>
              {/* <p className="mt-2 text-neutral-700">
                We work with founders and risk, compliance, and finance leaders at companies
                processing $100M–$2B in annual transaction volume—companies where fraud, compliance,
                and treasury are critical problems but building AI in-house means competing for
                scarce talent and spending years before seeing ROI.
              </p> */}
            </motion.div>
            <motion.div variants={item}>
              <h2 className="text-base font-semibold text-neutral-700">What makes us different</h2>
              {/* <p className="mt-2 text-neutral-700">
                We don&apos;t sell you software or lend you engineers. We solve the problem and
                guarantee the outcome.
                
              </p> */}
              <p className="mt-2 text-neutral-700">
                {/* We price on outcomes, not engineering hours. If we don't deliver measurable results, you don't pay. */}
                We build and deploy production AI in weeks. An onboarding fee gets things started;
                the rest you only pay when we hit the success metrics we define together.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h2 className="text-base font-semibold text-neutral-700">Where we drive impact</h2>
              <p className="mt-2 text-neutral-700">
                We deliver AI infrastructure and agents for three critical functions in cross-border
                payments:
              </p>
              <ul className="mt-3 space-y-3 text-sm text-neutral-700">
                <li>
                  <span className="font-semibold text-neutral-900">
                    Fraud detection & sanctions screening
                  </span>{' '}
                  — 55% cost reduction vs. legacy vendors, sub-30ms scoring latency, real-time OFAC
                  screening with 97.5% precision.
                </li>
                {/* <li>
                  <span className="font-semibold text-neutral-900">KYC/AML Automation</span>{' '}
                  — 48-hour manual reviews compressed to 4 seconds, 65% cost reduction, 95%
                  document accuracy.
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">Liquidity Forecasting</span>{' '}
                  — 30% reduction in trapped capital across payment corridors, 7-to-90-day forecast
                  horizons.
                </li> */}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
