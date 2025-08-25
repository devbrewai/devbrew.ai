'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
          <Cpu className="h-4 w-4" />
          <span>AI engineering for FinTech</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Services</h1>
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
          Two focused offers that get you from idea to production. Choose a fast prototype or a
          production ready MVP.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="#packages">Compare packages</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Book a discovery call</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
