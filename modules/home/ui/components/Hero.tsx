'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-6 lg:py-32">
        <div className="grid items-center justify-items-center gap-8 lg:grid-cols-12 lg:justify-items-start lg:gap-12">
          {/* Left: Copy */}
          <motion.div
            className="w-full max-w-2xl text-center lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? 'none' : 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* <div className="mx-auto mb-4 inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur-sm lg:mx-0">
              <span className="h-2 w-2 bg-blue-500" />
              Fintech focused AI engineering
            </div> */}

            <h1 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl lg:text-6xl">
              AI Engineering for Fintech Leaders
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-base">
              We help U.S. fintech startups and financial institutions design and deliver AI
              solutions that drive results in as little as 4 weeks.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="group inline-flex items-center justify-between rounded-none bg-blue-600 px-10 text-sm font-semibold text-white hover:bg-blue-700 sm:justify-center sm:bg-blue-600 sm:text-white"
              >
                <Link href="/get-started" className="flex w-full items-center justify-center">
                  Get started
                </Link>
              </Button>
              <Button size="lg" variant="ghost">
                <Link href="/case-studies" className="flex items-center justify-center">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Mockup Panel */}
          <motion.div
            className="hidden lg:col-span-6 lg:block"
            initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? 'none' : 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative mx-auto w-full max-w-2xl rounded-md border border-neutral-200 bg-white p-4 shadow-2xl md:rounded-none">
              <div className="absolute -top-8 -left-8 hidden h-16 w-16 rotate-12 rounded-md bg-blue-500/10 blur-2xl sm:block" />
              <div className="absolute -right-10 -bottom-8 hidden h-16 w-16 -rotate-12 rounded-md bg-purple-500/10 blur-2xl sm:block" />

              {/* Mock dashboard header */}
              {/* <div className="flex items-center justify-between rounded-xs border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-neutral-600">
                  Devbrew • AI Ops Dashboard
                </span>
              </div> */}

              {/* Mock dashboard body */}
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <PanelCardLight title="Risk Scoring" value="98.7 AUC" trend="▲ 3.2" />
                <PanelCardLight title="Approvals" value="2.3x" trend="▲ 18%" />
                <ChartPlaceholderLight label="Transactions" />
                <ListPlaceholderLight
                  title="Latest Decisions"
                  items={['Auto approve: 42%', 'Manual review: 7%', 'Declines: 3%']}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function HeroCentered() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-6 lg:py-32">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? 'none' : 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-medium tracking-tighter text-balance text-neutral-900 sm:text-5xl lg:text-6xl">
            AI Engineering for Fintech & Finance
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-balance text-neutral-700 sm:text-base">
            We help U.S. fintech startups and financial institutions design and deploy custom AI
            solutions.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
            <Button
              size="lg"
              className="group inline-flex items-center justify-between rounded-none bg-blue-600 px-10 text-sm font-semibold text-white hover:bg-blue-700 sm:justify-center sm:bg-blue-600 sm:text-white"
            >
              <Link href="/get-started" className="flex w-full items-center justify-center">
                Get started
              </Link>
            </Button>
            <Button size="lg" variant="ghost">
              <Link href="/case-studies" className="flex items-center justify-center">
                View Case Studies
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LogoPlaceholderLight({ label }: { label: string }) {
  return (
    <div
      className="flex h-8 items-center justify-center rounded-md border border-neutral-300 bg-white px-3 text-xs font-semibold text-neutral-500"
      aria-label={`${label} logo placeholder`}
      role="img"
    >
      {label}
    </div>
  )
}

function PanelCardLight({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <div className="border border-neutral-200 bg-neutral-50 p-4">
      <p className="text-xs text-neutral-500">{title}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-neutral-900">{value}</p>
        <span className="text-xs font-medium text-emerald-600">{trend}</span>
      </div>
      <div className="mt-3 h-2 w-full bg-neutral-200">
        <div className="h-2 w-2/3 bg-blue-500" />
      </div>
    </div>
  )
}

function ChartPlaceholderLight({ label }: { label: string }) {
  return (
    <div className="border border-neutral-200 bg-neutral-50 p-4">
      <p className="text-xs text-neutral-500">{label}</p>
      <div className="mt-3 h-36 w-full bg-gradient-to-tr from-blue-500/10 to-purple-400/10">
        <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="2"
            points="0,100 40,95 80,80 120,70 160,75 200,55 240,60 280,45 320,35 360,25 400,20"
          />
        </svg>
      </div>
    </div>
  )
}

function ListPlaceholderLight({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-neutral-200 bg-neutral-50 p-4">
      <p className="text-xs text-neutral-500">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
