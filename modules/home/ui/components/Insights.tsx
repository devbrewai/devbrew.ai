import Link from 'next/link'

import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Insights() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Insights</h2>
          {/* <Button asChild variant="ghost">
            <Link href="/insights">View all</Link>
          </Button> */}
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
  )
}
