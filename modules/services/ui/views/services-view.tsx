import * as React from 'react'
import Link from 'next/link'
import { Bot, Brain, Zap, Lightbulb } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Assistants',
    description:
      'Conversational AI that lives inside your product and helps your users get things done. Customer support agents, onboarding assistants, internal copilots, or domain-specific advisors.',
    useCases: [
      'Support agent that resolves tickets using your knowledge base',
      'Onboarding assistant that walks new users through setup',
      'Internal copilot that answers team questions from company data',
    ],
    timeline: '2-3 weeks',
  },
  {
    icon: Brain,
    title: 'LLM Integration & RAG',
    description:
      "Connect large language models to your product's data so users get accurate, contextual answers instead of generic AI output. We handle embeddings, retrieval, prompt engineering, evaluation, and production deployment.",
    useCases: [
      'Search that understands what users mean, not just what they type',
      'Q&A over documents, knowledge bases, or product data',
      "Content generation grounded in your company's data and style",
    ],
    timeline: '2-3 weeks',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description:
      'Replace manual workflows with AI that reads, classifies, routes, and acts. Document processing, intake automation, smart notifications, and decision engines.',
    useCases: [
      'Document upload that extracts and validates data automatically',
      'Lead scoring and routing based on conversation analysis',
      'Compliance checks that run automatically on new submissions',
    ],
    timeline: '2-4 weeks',
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy & Evaluation',
    description:
      "Not sure where AI fits in your product? We'll audit your product, identify the highest-impact opportunities, and give you a concrete build plan. If you already have AI features, we'll evaluate performance and recommend improvements.",
    useCases: [
      'Product audit: where does AI create the most value for your users?',
      'LLM evaluation: is your current model the right choice? Are your prompts optimized?',
      'Build vs. buy analysis for AI features',
    ],
    timeline: '1 week',
  },
]

export function ServicesView() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            AI engineering that ships.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            We build AI features that integrate into your product, your codebase, your
            infrastructure. No black boxes. No six-month timelines. Production AI in weeks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="bg-primary/10 text-primary mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="mb-2 text-sm font-medium text-neutral-700">Example use cases:</p>
                  <ul className="space-y-1.5 text-sm text-neutral-600">
                    {service.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-2">
                        <span className="bg-primary mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  Typical timeline: <span className="font-medium">{service.timeline}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              How pricing works
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              We price by project, not by hour. Most engagements fall between $5K and $20K depending
              on scope and complexity. We scope everything upfront so there are no surprises.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Every project includes a clear deliverable, a fixed timeline, and full ownership of
              everything we build. Code, models, data — it's all yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-2xl border bg-white p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to add AI to your product?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Tell us what you're building. We'll tell you where AI fits and how fast we can ship it.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 text-white">
              <Link href="/get-started">Get started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
