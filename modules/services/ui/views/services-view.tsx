import * as React from 'react'
import Link from 'next/link'
import { Timer, Gauge } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Bullet } from '../components/bullet'
import { Section } from '../components/section'
import { Hero } from '../components/hero'

export function ServicesView() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      {/* Hero */}
      <Section className="pt-20 pb-10">
        <Hero />
      </Section>

      {/* Packages */}
      <Section id="packages" className="pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Packages</h2>
          <p className="text-muted-foreground text-sm">Transparent scopes. Clear timelines.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Prototype Accelerator */}
          <Card className="relative">
            <CardHeader>
              <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-2 py-0.5 text-xs">
                <Timer className="h-3.5 w-3.5" /> 2 to 4 weeks
              </div>
              <CardTitle className="mt-2">AI Prototype Accelerator</CardTitle>
              <div className="text-muted-foreground mt-1 text-sm">
                Investor ready demo built fast
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <Bullet>Scope workshop and success criteria</Bullet>
                <Bullet>Data ingestion and quick evaluation harness</Bullet>
                <Bullet>FastAPI backend or serverless endpoints</Bullet>
                <Bullet>Next.js front end with a clean UI</Bullet>
                <Bullet>Recorded demo and handoff walkthrough</Bullet>
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-muted-foreground text-sm">Typical engagement: fixed scope</div>
                <Button asChild>
                  <Link href="#contact">Start scoping</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* MVP Launchpad */}
          <Card className="relative">
            <CardHeader>
              <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-2 py-0.5 text-xs">
                <Gauge className="h-3.5 w-3.5" /> 4 to 6 weeks
              </div>
              <CardTitle className="mt-2">AI MVP Launchpad</CardTitle>
              <div className="text-muted-foreground mt-1 text-sm">
                Production ready build with core features
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <Bullet>Architecture, security, and data design</Bullet>
                <Bullet>Model evaluation and monitoring basics</Bullet>
                <Bullet>Pipelines for training and inference</Bullet>
                <Bullet>CI and deployment on your cloud</Bullet>
                <Bullet>Docs, handover, and training session</Bullet>
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  Optional support: monthly retainer
                </div>
                <Button variant="outline" asChild>
                  <Link href="#contact">See timeline</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What is included */}
      <Section className="py-4">
        <div className="bg-card rounded-2xl border p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 font-medium">Quality by default</div>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>Secure auth and basic RBAC</Bullet>
                <Bullet>Telemetry and error reporting</Bullet>
                <Bullet>Clean, documented code you can own</Bullet>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-medium">Tech stack</div>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>FastAPI or Python services</Bullet>
                <Bullet>Next.js front end</Bullet>
                <Bullet>Postgres or your data warehouse</Bullet>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-medium">Security minded</div>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>Secrets management and least privilege</Bullet>
                <Bullet>PII handling patterns</Bullet>
                <Bullet>Basic compliance awareness</Bullet>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Add ons */}
      <Section className="py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Add ons</h2>
          <p className="text-muted-foreground text-sm">Extend your build with focused extras</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Observability and analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>Feature flags and A or B flows</Bullet>
                <Bullet>Model metrics and dashboards</Bullet>
                <Bullet>Usage analytics for PMs</Bullet>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Cloud deployment hardening</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>IaC templates for your cloud</Bullet>
                <Bullet>Staging and prod environments</Bullet>
                <Bullet>Backups and rollbacks</Bullet>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Compliance support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground grid gap-2 text-sm">
                <Bullet>Data maps and retention policy</Bullet>
                <Bullet>Vendor and API review</Bullet>
                <Bullet>Security checklist alignment</Bullet>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Process</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>1. Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Define success, datasets, and constraints. Align on a crisp brief.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Build</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ship the prototype or MVP. Weekly updates and milestones.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Launch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Deploy, measure, and iterate. Handover with docs and training.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What does pricing look like</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Fixed scope builds are priced simply. Many clients start with a fixed prototype then
              add a monthly support retainer for ongoing improvements. Exact pricing depends on
              scope and complexity.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Who owns the IP</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You own the code and assets we build for you. We hand over the repository, infra
              templates, and documentation at the end of the engagement.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Can you work with our data and security rules
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Yes. We follow least privilege access, secrets management, and clear data boundaries.
              We can deploy into your cloud and align with your policies.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-12" id="contact">
        <div className="bg-card rounded-2xl border p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to scope your build</h3>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
            Book a short call to compare packages, align on goals, and leave with a clear plan.
          </p>
          <div className="mt-5">
            <Button asChild size="lg">
              <Link href="/contact">Book a discovery call</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
