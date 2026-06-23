'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  type?: 'words' | 'chars' | 'lines'
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
}

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150,
    },
  },
}

export default function AnimatedText({
  text,
  className = '',
  once = true,
  delay = 0,
  type = 'words',
  tag: Tag = 'h2',
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const items = type === 'chars' ? text.split('') : text.split(' ')
  const variants = type === 'chars' ? charVariants : wordVariants

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ delayChildren: delay }}
        className="flex flex-wrap"
        style={{ perspective: '1000px' }}
      >
        {items.map((item, i) => (
          <motion.span
            key={i}
            variants={variants}
            className={className}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {item}{type === 'words' && i < items.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
