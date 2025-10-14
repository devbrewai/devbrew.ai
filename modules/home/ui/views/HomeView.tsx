import { HeroCentered } from '../components/Hero'
import { IntroSplit } from '../components/IntroSplit'
import { ValueCards } from '../components/ValueCards'
import { Offerings } from '../components/Offerings'
import { ResearchCasesList } from '../components/ResearchCasesList'
import { CTA } from '@/components/CTA'

export default function HomeView() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <HeroCentered />
      <IntroSplit />
      {/* What We Do / Offerings */}
      <Offerings title="What We Do" className="bg-neutral-50" />
      {/* Proof / Case studies */}
      <ResearchCasesList />
      {/* Value */}
      <ValueCards />
      {/* Insights */}
      {/* <Insights /> */}
      {/* CTA */}
      {/* <CTA /> */}
      <CTA />
    </main>
  )
}
