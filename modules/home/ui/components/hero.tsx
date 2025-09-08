'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Hero() {
  const logos = false
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[86vh] sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-7xl"
        >
          <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-7xl">
            AI Engineering for Fintech
          </h1>
          <p className="text-muted-foreground mx-auto mt-5 max-w-7xl text-base sm:mt-6 sm:text-lg">
            We partner with U.S-based fintech startups to design and deliver custom AI solutions
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="px-10 shadow-lg">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Optional: logos strip (hidden for now) */}
          {logos && (
            <div className="mt-12 pt-8">
              <p className="text-muted-foreground text-center text-xs tracking-widest uppercase">
                Trusted by leading companies
              </p>
              <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-muted h-8 rounded" />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
