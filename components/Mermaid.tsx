'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import mermaid from 'mermaid'
import { X, ZoomIn } from 'lucide-react'

interface MermaidProps {
  children?: string
  className?: string
}

const Mermaid = ({ children = '', className = '' }: MermaidProps) => {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const mermaidRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
  }, [])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  useEffect(() => {
    if (!isClient || !children || !mounted) return

    const diagramId = `mermaid-${Math.random().toString(36).substring(2, 9)}`

    // Determine theme based on current theme
    const mermaidTheme = resolvedTheme === 'dark' ? 'dark' : 'default'

    // Initialize Mermaid with theme support
    mermaid.initialize({
      startOnLoad: false,
      theme: mermaidTheme,
      securityLevel: 'loose',
      fontFamily: 'inherit',
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 50,
        rankSpacing: 50,
        padding: 15,
      },
      themeVariables: {
        primaryColor: resolvedTheme === 'dark' ? '#3b82f6' : '#3b82f6',
        primaryTextColor: resolvedTheme === 'dark' ? '#e5e7eb' : '#1f2937',
        primaryBorderColor: resolvedTheme === 'dark' ? '#4b5563' : '#d1d5db',
        lineColor: resolvedTheme === 'dark' ? '#6b7280' : '#9ca3af',
        secondaryColor: resolvedTheme === 'dark' ? '#1e40af' : '#dbeafe',
        tertiaryColor: resolvedTheme === 'dark' ? '#1e293b' : '#f3f4f6',
      },
    })

    // Render the diagram
    mermaid
      .render(diagramId, children.trim())
      .then((result) => {
        setSvg(result.svg)
        setError(null)
      })
      .catch((err) => {
        console.error('Mermaid rendering error:', err)
        setError(err.message || 'Failed to render diagram')
        setSvg('')
      })
  }, [isClient, children, mounted, resolvedTheme])

  if (!isClient || !mounted) {
    return (
      <div className={`mermaid-container ${className} my-8 flex justify-center`}>
        <div className="flex items-center justify-center rounded-lg bg-gray-50 p-8 dark:bg-gray-900">
          <div className="text-gray-500 dark:text-gray-400">Loading diagram...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`mermaid-container ${className} my-8`}>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-600 dark:text-red-400">Error rendering diagram: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={`mermaid-container ${className} group relative my-8 flex justify-center`}>
        <div
          ref={mermaidRef}
          className="mermaid-diagram cursor-pointer transition-all duration-200 hover:opacity-90"
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsModalOpen(true)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Click to enlarge diagram"
          dangerouslySetInnerHTML={{ __html: svg }}
          style={{
            minWidth: '100%',
            maxWidth: '100%',
          }}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="rounded-full bg-black/50 p-3 text-white backdrop-blur-sm">
            <ZoomIn className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram view"
        >
          <button
            className="absolute inset-0 h-full w-full"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          />
          <button
            className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="relative z-10 max-h-[95vh] max-w-[95vw] overflow-auto rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-900">
            <div
              className="mermaid-diagram-enlarged"
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{
                minWidth: '600px',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Mermaid
