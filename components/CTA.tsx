'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reusable CTA (Call-to-Action) component with customizable content
 *
 * @example
 * // Default usage (home page)
 * <CTA />
 *
 * @example
 * // Case study page
 * <CTA
 *   eyebrow="Interested in similar results?"
 *   title="Let's discuss your AI transformation"
 *   description="See how we can help you achieve measurable results with AI solutions tailored to your business needs."
 *   buttonText="Schedule a Consultation"
 *   buttonHref="/contact"
 *   variant="compact"
 * />
 *
 * @example
 * // Research/Insights page
 * <CTA
 *   eyebrow="Want to learn more?"
 *   title="Stay ahead with AI insights"
 *   description="Subscribe to our newsletter for the latest AI trends and case studies."
 *   buttonText="Subscribe Now"
 *   buttonHref="/newsletter"
 *   variant="compact"
 * />
 */
interface CTAProps {
  /** Small text above the title */
  eyebrow?: string
  /** Main heading text */
  title?: string
  /** Supporting description text */
  description?: string
  /** Button label */
  buttonText?: string
  /** Button destination URL */
  buttonHref?: string
  /** Visual variant - 'default' for large text, 'compact' for smaller text */
  variant?: 'default' | 'compact'
}

export function CTA({
  eyebrow = 'Ready to get started?',
  title = 'Turn AI potential into ROI in weeks',
  description = 'We help fintech leaders build AI solutions that accelerate growth and deliver measurable returns.',
  buttonText = 'Get Started',
  buttonHref = '/get-started',
  variant = 'default',
}: CTAProps) {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  const isCompact = variant === 'compact'

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white text-neutral-900 ${
        isCompact ? 'py-16' : 'py-24'
      }`}
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
          className={`mx-auto space-y-6 text-center ${isCompact ? 'max-w-2xl' : 'max-w-3xl'}`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-2">
            {eyebrow && (
              <motion.p variants={item} className="mb-2 text-sm font-semibold text-blue-700">
                {eyebrow}
              </motion.p>
            )}
            <motion.h2
              variants={item}
              className={`font-medium tracking-tighter text-balance ${
                isCompact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-6xl'
              }`}
            >
              {title}
            </motion.h2>
          </div>
          {description && (
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-sm text-balance text-neutral-700 sm:text-base"
            >
              {description}
            </motion.p>
          )}
          <motion.div variants={item}>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-blue-600 px-8 text-white hover:bg-blue-700"
            >
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
