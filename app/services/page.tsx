import * as React from 'react'
import { ServicesView } from '@/modules/services/ui/views/services-view'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI agents, LLM integration, RAG, document processing, and workflow automation for B2B startups. Fixed scope. Fixed timeline. You own everything.',
}

export default function Page() {
  return <ServicesView />
}
