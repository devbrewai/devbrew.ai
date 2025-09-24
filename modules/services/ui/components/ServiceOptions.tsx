'use client'

import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const SERVICE_OPTIONS = [
  'AI Advisory',
  'AI Prototype Accelerator',
  'AI Deployment',
  'AI Scale Partnership',
] as const

export type ServiceOption = (typeof SERVICE_OPTIONS)[number]

export function ServiceOptions({
  className,
  onSelect,
  title = 'Service Options',
  subtitle,
}: {
  className?: string
  onSelect?: (service: ServiceOption) => void
  title?: string
  subtitle?: string
}) {
  return (
    <section className={cn('relative w-full text-neutral-900', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p> : null}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICE_OPTIONS.map((opt) => (
            <ServiceOptionCard key={opt} option={opt} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceOptionCard({
  option,
  onSelect,
  className,
}: {
  option: ServiceOption
  onSelect?: (service: ServiceOption) => void
  className?: string
}) {
  const clickable = typeof onSelect === 'function'
  return (
    <Card
      role="article"
      aria-labelledby={`svc-${slugify(option)}`}
      className={cn(
        'flex h-full flex-col rounded-none border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-shadow hover:shadow-md',
        clickable && 'cursor-pointer',
        className
      )}
      onClick={() => clickable && onSelect?.(option)}
    >
      <CardHeader className="p-5 lg:p-6">
        <CardTitle id={`svc-${slugify(option)}`} className="text-lg font-semibold tracking-tight">
          <h3>{option}</h3>
        </CardTitle>
        <CardDescription className="mt-2 text-neutral-700">
          {/* Add a short description later if desired */}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-5 pt-0 lg:p-6 lg:pt-0">
        {/* Placeholder for future illustrations or details */}
        <div className="h-8" />
      </CardContent>
    </Card>
  )
}

function slugify(s: string) {
  return s.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
}
