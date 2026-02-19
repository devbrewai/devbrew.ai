'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Case study configuration
 *
 * To enable a case study:
 * 1. Uncomment the case study object in the caseStudies array
 * 2. Ensure the logo file exists at the specified path
 * 3. Ensure the case study page exists at the specified slug
 */

type CaseStudy = {
  id: string
  title: string
  tagline: string
  description: string
  logo: string
  logoAlt: string
  metrics: Array<{
    value: string
    label: string
  }>
  caseStudyUrl: string
  demoUrl?: string
  status: 'published' | 'coming-soon'
}

const caseStudies: CaseStudy[] = [
  // Sentinel - PUBLISHED
  {
    id: 'sentinel',
    title: 'Sentinel',
    tagline: 'AI fraud detection & sanctions screening',
    description:
      'Stop fraud faster and stay compliant with ML-powered transaction scoring. Sentinel combines LightGBM-based fraud detection with real-time OFAC sanctions screening, delivering explainable decisions in under 30ms.',
    logo: '/static/images/logos/sentinel-logo-emblem.svg',
    logoAlt: 'Sentinel logo',
    metrics: [
      { value: '55%', label: 'Cost reduction' },
      { value: '30ms', label: 'API latency' },
      { value: '97.5%', label: 'Sanctions precision' },
    ],
    caseStudyUrl: '/case-studies/sentinel',
    demoUrl: 'https://sentinel.devbrew.ai',
    status: 'published',
  },

  // Veritas - COMING SOON (uncomment when ready to publish)
  // {
  //   id: 'veritas',
  //   title: 'Veritas',
  //   tagline: 'KYC/AML automation & risk scoring',
  //   description:
  //     'Automate customer onboarding verification by processing KYC documents, screening against sanctions and adverse media, and assigning risk tiers in seconds instead of days.',
  //   logo: '/static/images/logos/veritas-logo-emblem.svg',
  //   logoAlt: 'Veritas logo',
  //   metrics: [
  //     { value: '4 sec', label: 'Processing time' },
  //     { value: '65%', label: 'Cost reduction' },
  //     { value: '95%', label: 'Accuracy' },
  //   ],
  //   caseStudyUrl: '/case-studies/veritas',
  //   demoUrl: 'https://veritas.devbrew.ai',
  //   status: 'coming-soon',
  // },

  // Meridian - COMING SOON (uncomment when ready to publish)
  // {
  //   id: 'meridian',
  //   title: 'Meridian',
  //   tagline: 'Multi-corridor liquidity forecasting',
  //   description:
  //     'Forecast transaction volumes across payment corridors and optimize capital pre-positioning to reduce trapped cash and emergency FX conversion costs.',
  //   logo: '/static/images/logos/meridian-logo-emblem.svg',
  //   logoAlt: 'Meridian logo',
  //   metrics: [
  //     { value: '30%', label: 'Capital freed' },
  //     { value: '$180K', label: 'FX savings (90 days)' },
  //     { value: '7-90d', label: 'Forecast horizon' },
  //   ],
  //   caseStudyUrl: '/case-studies/meridian',
  //   demoUrl: 'https://meridian.devbrew.ai',
  //   status: 'coming-soon',
  // },
]

export function ResearchCasesList() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  const publishedCases = caseStudies.filter((cs) => cs.status === 'published')
  const isSingleCase = publishedCases.length === 1

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
              {isSingleCase ? 'Featured case study' : 'Case studies'}
            </p>
            {isSingleCase && publishedCases[0] && (
              <>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src={publishedCases[0].logo}
                    alt={publishedCases[0].logoAlt}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <h2 className="text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
                    {publishedCases[0].title}
                  </h2>
                </div>
                <p className="mt-1 text-lg text-neutral-600">{publishedCases[0].tagline}</p>
              </>
            )}
            {!isSingleCase && (
              <h2 className="mt-2 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
                Production AI for Payments
              </h2>
            )}
          </motion.div>

          {/* Case study cards */}
          <div className="grid gap-6 lg:grid-cols-1">
            {publishedCases.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                variants={item}
                className="rounded-sm border bg-gradient-to-br from-neutral-50 to-white p-6 sm:p-8"
              >
                {!isSingleCase && (
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.logoAlt}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{caseStudy.title}</h3>
                      <p className="text-sm text-neutral-600">{caseStudy.tagline}</p>
                    </div>
                  </div>
                )}

                <p className="text-balance text-neutral-700">{caseStudy.description}</p>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  {caseStudy.metrics.map((metric) => (
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
                    <Link href={caseStudy.caseStudyUrl}>
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {caseStudy.demoUrl && (
                    <Button asChild variant="outline">
                      <a href={caseStudy.demoUrl} target="_blank" rel="noopener noreferrer">
                        Try live demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
