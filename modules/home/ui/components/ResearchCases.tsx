import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ResearchCases() {
  return (
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
