interface NavLink {
  href: string
  title: string
  children?: { href: string; title: string }[]
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/work', title: 'Work' },
  { href: '/services', title: 'Services' },
  { href: '/blog', title: 'Blog' },
]

export type { NavLink }
export default headerNavLinks
