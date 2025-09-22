import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
        {/* Copyright on the left for desktop, below icons for mobile */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Devbrew LLC. All rights reserved.
        </div>

        {/* Icons on the right for desktop, above copyright for mobile */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
      </div>
    </footer>
  )
}
