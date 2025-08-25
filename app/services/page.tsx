import * as React from 'react'
import { ServicesView } from '@/modules/services/ui/views/services-view'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Engineering Services for Fintech',
  description:
    'Build smarter, faster with Devbrew’s AI engineering for Fintech. Choose our 2–4 week AI Prototype Accelerator or 4–6 week AI MVP Launchpad to go from idea to production with secure, scalable solutions.',
}

export default function Page() {
  return <ServicesView />
}
