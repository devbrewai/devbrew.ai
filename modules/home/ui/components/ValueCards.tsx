'use client'

import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Discovery',
    description:
      'We look at your product, your stack, and where AI creates the most value for your users. One call. No decks.',
  },
  {
    number: '2',
    title: 'Build',
    description:
      'We design and build the AI feature, integrated into your codebase and your infrastructure. Weekly demos so you see progress in real time.',
  },
  {
    number: '3',
    title: 'Ship',
    description:
      'We deploy to production, hand over everything, and make sure your team can maintain it. You own all the code, models, and data.',
  },
]

export function ValueCards() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  return (
    <>
      {/* How We Work */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              From first call to production in weeks.
            </h2>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={item} className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="font-heading mt-4 text-xl font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-12 text-center text-sm font-medium text-neutral-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Most projects take 2-4 weeks from kickoff to production.
          </motion.p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for B2B startups.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              We work with founders building B2B software who want AI in their product but don't
              want to spend months hiring and figuring it out internally. Our sweet spot is pre-seed
              to Series A startups with a working product and real users.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Fintech, healthtech, legaltech, HR tech, SaaS infrastructure, or something we haven't
              seen before. If your product can get smarter with AI, we should talk.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ValueCards
