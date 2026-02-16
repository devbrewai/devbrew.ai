'use client'

import { useState, useRef, useCallback } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import type { NavLink } from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import { Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

function NavDropdown({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }, [])

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }, [])

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="hover:text-primary-500 dark:hover:text-primary-400 m-1 inline-flex items-center gap-1 font-medium text-gray-900 dark:text-gray-100"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {link.title}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <Transition
        show={open}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute top-full left-0 z-50 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          {link.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={() => setOpen(false)}
            >
              {child.title}
            </Link>
          ))}
        </div>
      </Transition>
    </div>
  )
}

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
                src="/static/images/devbrew-black.svg"
                alt={`${siteMetadata.headerTitle} logo`}
                width={100}
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
              .map((link) => {
                if (link.children) {
                  return <NavDropdown key={link.title} link={link} />
                }
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                )
              })}
          </div>
          <div className="hidden sm:block">
            <Link
              href="/get-started"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className:
                  'border-primary-500 text-primary-600 hover:bg-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 hover:text-white',
              })}
            >
              Get in touch
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
