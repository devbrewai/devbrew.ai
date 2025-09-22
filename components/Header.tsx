'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'w-full bg-white dark:bg-gray-950'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/static/images/logo.svg"
                alt={`${siteMetadata.headerTitle} logo`}
                width={24}
                height={24}
                priority
              />
            </div>
            {/* {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )} */}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/' && link.href !== '/contact')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <div className="hidden sm:block">
            <Link
              href="/contact"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className:
                  'border-primary-500 text-primary-600 hover:bg-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 hover:text-white',
              })}
            >
              Get Started
            </Link>
          </div>
          {/* <SearchButton /> */}
          {/* <ThemeSwitch /> */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
