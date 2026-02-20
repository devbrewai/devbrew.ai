interface NavLink {
  href: string
  title: string
  children?: { href: string; title: string }[]
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Insights' },
  {
    href: '/work',
    title: 'Work',
    children: [{ href: '/work/sentinel', title: 'Sentinel' }],
  },
  // { href: '/#services', title: 'Services' },
  { href: '/#about', title: 'About' },
  { href: '/contact', title: 'Contact' },
]

export type { NavLink }
export default headerNavLinks
