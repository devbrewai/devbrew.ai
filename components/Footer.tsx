import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
          {/* Left: legal links */}
          <div className="order-2 flex justify-center md:order-1 md:justify-start">
            <nav aria-label="Footer legal" className="flex items-center gap-4 text-xs">
              <Link
                href="/terms-of-service"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Center: copyright */}
          <div className="order-1 text-center text-xs text-gray-500 md:order-2 dark:text-gray-400">
            © {new Date().getFullYear()} Devbrew LLC. All rights reserved.
          </div>

          {/* Right: social icons */}
          <div className="order-3 flex flex-wrap justify-center gap-4 md:justify-end">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={4} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
            <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
          </div>
        </div>
      </div>
    </footer>
  )
}
