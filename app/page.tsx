import HomeView from '@/modules/home/ui/views/HomeView'

import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Devbrew | AI Engineering for Fintech and Finance',
})

export default async function Page() {
  return <HomeView />
}
