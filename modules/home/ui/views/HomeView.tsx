import Link from 'next/link'

import {
  ShieldCheck,
  LineChart,
  Gauge,
  Building2,
  Workflow,
  Zap,
  ArrowRight,
  Clock,
} from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { HeroCentered } from '../components/Hero'
import { IntroSplit } from '../components/IntroSplit'
import { ValueCards } from '../components/ValueCards'

export default function HomeView() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <HeroCentered />

      <IntroSplit />
      {/* Value */}
      <ValueCards />
      {/* Outcomes */}
      <section className="border-t" id="outcomes">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Business outcomes we target
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <OutcomeCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Catch more fraud with fewer false positives"
              body="CNP detection, sanctions screening, velocity checks, and explainable risk scores tuned to chargeback tolerance."
            />
            <OutcomeCard
              icon={<LineChart className="h-5 w-5" />}
              title="Reduce chargebacks & operational load"
              body="Proactive chargeback forecasting and workflows to deflect disputes before they start."
            />
            <OutcomeCard
              icon={<Gauge className="h-5 w-5" />}
              title="Right‑size credit limits for thin‑file users"
              body="Probability of default models and contribution‑margin limit policies for credit‑builder products."
            />
            <OutcomeCard
              icon={<Workflow className="h-5 w-5" />}
              title="Automate claims triage & routing"
              body="Complexity scoring and fraud propensity to cut adjuster touches while keeping precision high."
            />
            <OutcomeCard
              icon={<Zap className="h-5 w-5" />}
              title="Ship AI safely to production"
              body="Latency budgets, model monitoring, security notes, and a step‑by‑step integration plan."
            />
            <OutcomeCard
              icon={<Building2 className="h-5 w-5" />}
              title="Prove ROI fast"
              body="Clear success metrics, backtests, and a go‑to‑MVP plan in weeks—not quarters."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
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
// --- Local components ---
function OutcomeCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3">
        <div className="text-muted-foreground mt-1 rounded-md border p-2">{icon}</div>
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription>{body}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

function StepCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="rounded-md">
            {step}
          </Badge>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{body}</CardDescription>
      </CardHeader>
    </Card>
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
