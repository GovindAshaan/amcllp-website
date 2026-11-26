'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'

/* Unified persistent chrome (navbar, scroll bar, footer) plus fluid AnimatePresence
   page transitions keyed by pathname. Rendered once in the root layout. */
export default function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/'

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative z-10 min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}