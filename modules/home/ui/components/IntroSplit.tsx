'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Brain, Search, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Conversational agents that handle support, onboarding, and operations inside your product.',
  },
  {
    icon: Brain,
    title: 'LLM Integrations',
    description:
      'Connect large language models to your data and workflows so your product gets smarter.',
  },
  {
    icon: Search,
    title: 'RAG & Search',
    description:
      'Give your users answers from your data, not hallucinations. Retrieval-augmented generation built right.',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Replace manual workflows with AI that reads, routes, decides, and acts.',
  },
]

export function IntroSplit() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  return (
    <section className="relative w-full bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            AI features your users will actually use.
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={item}
              className="rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
