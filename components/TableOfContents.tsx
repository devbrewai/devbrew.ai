'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export default function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Get all headings from the article content
    const article = document.querySelector('article')
    if (!article) return

    const headings = article.querySelectorAll('h2, h3, h4')
    const tocItems: TocItem[] = []

    headings.forEach((heading) => {
      // Skip headings that are inside the CTA section
      const isInCTA = heading.closest('section[id="book"]')
      if (isInCTA) return

      // Skip headings that are inside the footer section (Related/Next/Previous navigation)
      const isInFooter = heading.closest('footer')
      if (isInFooter) return

      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''

      // Add id to heading if it doesn't have one
      if (!heading.id && id) {
        heading.id = id
      }

      if (id) {
        tocItems.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1)),
        })
      }
    })

    setToc(tocItems)
  }, [])

  useEffect(() => {
    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [toc])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      // Update URL without triggering navigation
      window.history.pushState(null, '', `#${id}`)
      setActiveId(id)
    }
  }

  if (toc.length === 0) {
    return null
  }

  return (
    <nav className={`space-y-1 ${className}`}>
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white">
        Content
      </h3>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => {
          const isActive = activeId === item.id
          const paddingLeft = (item.level - 2) * 16 // Indent based on heading level

          return (
            <li key={item.id} style={{ paddingLeft: `${paddingLeft}px` }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`hover:text-primary-600 dark:hover:text-primary-400 block border-l-2 py-1 pl-3 transition-colors ${
                  isActive
                    ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400 font-medium'
                    : 'border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400'
                }`}
              >
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
