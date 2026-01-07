import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HowItWorks() {
  return (
    <section id="how">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How the AI Prototype Accelerator works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StepCard
            step="01"
            title="Scope & success metric"
            body="Define the use case and acceptance criteria. Agree on data access and privacy."
          />
          <StepCard
            step="02"
            title="Data snap‑in"
            body="Secure sample or synthetic data, build feature store primitives, set baselines."
          />
          <StepCard
            step="03"
            title="Iterate & calibrate"
            body="Train, evaluate, and calibrate. Tune to your business cost function."
          />
          <StepCard
            step="04"
            title="Demo & next steps"
            body="Ship API + mini dashboard. Review KPIs and map MVP build."
          />
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/services/ai-prototype-accelerator">
              See full service <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="rounded-sm">
            {step}
          </Badge>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{body}</CardDescription>
      </CardHeader>
    </Card>
  )
}
