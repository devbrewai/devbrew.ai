import HomeView from '@/modules/home/ui/views/HomeView'

import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Devbrew | AI Infrastructure & Agents for Cross-Border Payments',
})

export default async function Page() {
  return <HomeView />
}
