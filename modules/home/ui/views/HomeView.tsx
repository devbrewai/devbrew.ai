import Link from 'next/link'

import { ArrowRight, Clock } from 'lucide-react'

import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { HeroCentered } from '../components/Hero'
import { IntroSplit } from '../components/IntroSplit'
import { ValueCards } from '../components/ValueCards'
import { Offerings } from '../components/Offerings'
import { HowItWorks } from '../components/HowItWorks'

export default function HomeView() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <HeroCentered />

      <IntroSplit />
      {/* What We Do / Offerings */}
      <Offerings title="What We Do" className="bg-neutral-50" />
      {/* Proof / Case studies */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Recent research & case studies
            </h2>
            <Button asChild variant="ghost">
              <Link href="/research">View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseCard
              title="Fraud & sanctions screening for cross‑border payments"
              href="/research/fraud-sanctions-payments"
            />
            <CaseCard
              title="Credit‑builder default risk & limit optimization"
              href="/research/credit-builder-limit-optimization"
            />
            <CaseCard
              title="Claims triage & fraud for P&C and pet"
              href="/research/claims-triage-fraud"
            />
          </div>
        </div>
      </section>
      {/* Value */}
      <ValueCards />
      {/* Outcomes */}
      {/* <Outcomes /> */}

      {/* How it works */}
      <HowItWorks />

      {/* Insights */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Insights</h2>
            <Button asChild variant="ghost">
              <Link href="/insights">View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group overflow-hidden">
                <div className="bg-muted aspect-[16/9] group-hover:opacity-90" />
                <CardContent className="p-6">
                  <CardTitle className="text-base">Sample insight headline {i}</CardTitle>
                  <CardDescription className="mt-2">
                    Short abstract that teases the takeaway in plain English.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted/30 border-y" id="book">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to see a working prototype in weeks, not quarters?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Book a 15‑minute briefing. If we can help, we’ll scope a 2–4 week prototype with clear
            success metrics.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="https://cal.com/your-handle">Book now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/payments">See payments focus</Link>
            </Button>
          </div>
          <div className="text-muted-foreground mt-6 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Typical lead time: 1–2 weeks</span>
          </div>
        </div>
      </section>
    </main>
  )
}

function CaseCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden">
        <div className="bg-muted aspect-[16/9] group-hover:opacity-90" />
        <CardContent className="p-6">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="mt-2">
            Read the approach, see metrics, and watch a short demo.
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" className="pl-0">
            Read case study <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
