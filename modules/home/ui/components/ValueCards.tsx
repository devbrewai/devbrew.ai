'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export function ValueCards({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  const cards = [
    {
      title: 'Accelerated Delivery',
      body: 'Decrease time to magic with AI. From rapid prototyping to end to end AI product development, we help you go from idea to production in months instead of years.',
      Illustration: IllustrationAccelerated,
    },
    {
      title: 'Derisked Deployments',
      body: 'We were building AI products long before it was cool. We specialize in AI and our customers benefit from our experience building hundreds of AI products for large enterprises.',
      Illustration: IllustrationDerisked,
    },
    {
      title: 'Real Business Value',
      body: 'We are committed to building AI applications that deliver ROI. From technical approach to business model implications, we deliver outcomes not people.',
      Illustration: IllustrationROI,
    },
  ] as const

  return (
    <section className={cn('relative w-full bg-neutral-50 text-neutral-900', className)}>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-12 md:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item} className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Why Devbrew</h2>
            <p className="mt-4 max-w-2xl text-balance text-neutral-700">
              Accelerated delivery, derisked deployments, and measurable business value, the
              principles we bring to every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {cards.map(({ title, body, Illustration }) => {
              const headingId = `card-${title.toLowerCase().replace(/\s+/g, '-')}`
              return (
                <motion.div key={title} variants={item}>
                  <Card
                    role="article"
                    aria-labelledby={headingId}
                    className={cn(
                      'flex h-full flex-col',
                      'rounded-none',
                      'border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-shadow hover:shadow-md'
                    )}
                  >
                    <CardHeader className="p-5 lg:p-6">
                      <CardTitle
                        id={headingId}
                        className="text-xl font-semibold tracking-tight text-neutral-900"
                      >
                        <h3>{title}</h3>
                      </CardTitle>
                      <CardDescription className="mt-2 text-neutral-700">{body}</CardDescription>
                    </CardHeader>

                    <CardContent className={cn('p-5 pt-0 lg:p-6 lg:pt-0')}>
                      <div
                        className={cn(
                          'mt-2 aspect-[16/9] w-full rounded-xs bg-gradient-to-tr from-blue-400/15 to-blue-600/20'
                        )}
                      >
                        <Illustration className="h-full w-full text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* Inline SVGs — minimal, geometric, use currentColor for themeability */
function IllustrationAccelerated({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 225" role="img" preserveAspectRatio="xMidYMid meet">
      <title>Accelerated delivery pipeline</title>
      <defs>
        <linearGradient id="devbrew-g1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Track */}
      <rect x="20" y="150" width="360" height="12" rx="1" fill="url(#devbrew-g1)" />

      {/* Stages */}
      {[60, 150, 240, 330].map((x, i) => (
        <g key={i} transform={`translate(${x},100)`} aria-hidden="true">
          <rect x="-18" y="-18" width="36" height="36" rx="2" fill="currentColor" opacity="0.08" />
          <circle cx="0" cy="0" r="6" fill="currentColor" />
        </g>
      ))}

      {/* Speed arrow (simple arrowhead, aligned) */}
      <path
        d="M40 80 H258"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="butt"
      />
      <path
        d="M260 80 L248 68 M260 80 L248 92"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* trailing motion blur */}
      <path
        d="M40 80 H160"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.08"
        filter="url(#soft)"
      />
    </svg>
  )
}

function IllustrationDerisked({ className = '' }: { className?: string }) {
  const rowsY = [90, 118, 146]
  return (
    <svg className={className} viewBox="0 0 400 225" role="img" preserveAspectRatio="xMidYMid meet">
      <title>Derisked deployments</title>

      {/* Shield */}
      <path
        d="M200 40 l80 24 v56c0 58-80 85-80 85s-80-27-80-85V64z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M200 48 l70 21 v51c0 50-70 74-70 74s-70-24-70-74V69z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Checklist rows */}
      {rowsY.map((y, i) => (
        <g key={i} transform={`translate(150, ${y})`} aria-hidden="true">
          <rect x="0" y="0" width="150" height="12" rx="1" fill="currentColor" opacity="0.1" />
          <path d="M10 6 l6 6 l12 -12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </g>
      ))}
    </svg>
  )
}

function IllustrationROI({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 225" role="img" preserveAspectRatio="xMidYMid meet">
      <title>Real business value</title>

      {/* Axes */}
      <path d="M40 180 H360" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M60 40 V180" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Bars */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={80 + i * 60}
          y={140 - i * 18}
          width="34"
          height={40 + i * 18}
          rx="1"
          fill="currentColor"
          opacity={0.12 + i * 0.06}
        />
      ))}

      {/* Growth line */}
      <path
        d="M70 155 L140 140 L200 120 L260 95 L330 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default ValueCards
