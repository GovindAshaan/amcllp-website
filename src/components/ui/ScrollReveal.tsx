'use client'

import type { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: 'div' | 'section' | 'article'
}

const ease = [0.22, 0.61, 0.36, 1] as const

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}: ScrollRevealProps) {
  const Comp = as === 'section' ? motion.section : as === 'article' ? motion.article : motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ type: 'spring', damping: 22, stiffness: 110, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 110, ease } },
}

export { cn }