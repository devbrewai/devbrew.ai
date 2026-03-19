import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/get-started', label: 'Get Started' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {/* Left: nav links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-4 md:justify-start"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center: copyright + legal */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            <div>&copy; {new Date().getFullYear()} Devbrew LLC. All rights reserved.</div>
            <div className="mt-1 flex justify-center gap-3">
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Right: social icons */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
            <SocialIcon kind="x" href={siteMetadata.x} size={4} />
            <SocialIcon kind="github" href={siteMetadata.github} size={4} />
          </div>
        </div>
      </div>
    </footer>
  )
}
