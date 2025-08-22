import * as React from 'react'
import { CheckCircle2 } from 'lucide-react'

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" />
      {children}
    </li>
  )
}
