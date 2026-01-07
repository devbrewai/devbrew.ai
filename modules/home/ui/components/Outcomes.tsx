import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShieldCheck, LineChart, Gauge, Workflow, Zap, Building2 } from 'lucide-react'

export function Outcomes() {
  return (
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
  )
}

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
        <div className="text-muted-foreground mt-1 rounded-sm border p-2">{icon}</div>
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription>{body}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
