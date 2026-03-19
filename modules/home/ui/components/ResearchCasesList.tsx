'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type Project = {
  title: string
  tag: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    title: 'AI Support Agent for Fintech',
    tag: 'AI Agent',
    description:
      'A conversational AI that handles account questions, transaction disputes, and onboarding, embedded directly in a fintech product.',
    href: '/work/sentinel',
  },
  {
    title: 'AI Document Intake for SaaS',
    tag: 'Document AI',
    description:
      'Intelligent document processing that extracts, validates, and structures data from uploads inside a B2B platform.',
    href: '/work',
  },
  {
    title: 'AI Workflow Agent for Operations',
    tag: 'Intelligent Automation',
    description:
      'An agent that monitors events, makes decisions, and takes action across tools, embedded in an operations product.',
    href: '/work',
  },
]

export function ResearchCasesList() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: reduce ? 'none' : 'blur(0px)' },
  }

  return (
    <section className="bg-white" id="work">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            What we've shipped.
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Link
                href={project.href}
                className="group flex h-full flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <span className="bg-primary/10 text-primary inline-block self-start rounded-full px-3 py-1 text-xs font-medium">
                  {project.tag}
                </span>
                <h3 className="font-heading group-hover:text-primary mt-4 text-lg font-semibold text-neutral-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>
                <span className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                  View project <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
