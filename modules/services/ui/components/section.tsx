import * as React from 'react'
import { cn } from '@/lib/utils'

export function Section({
  children,
  className = '',
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('container mx-auto max-w-6xl px-4', className)} {...props}>
      {children}
    </section>
  )
}
