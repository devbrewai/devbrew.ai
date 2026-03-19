import HomeView from '@/modules/home/ui/views/HomeView'

import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Devbrew | AI Engineering for B2B Startups',
  description:
    'We build AI agents, LLM integrations, and intelligent automations that become part of your product. Production AI shipped in weeks.',
})

export default async function Page() {
  return <HomeView />
}
