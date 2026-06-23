'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ParallaxWrapper({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const directionMap = {
    up: { y: [100 * speed, -100 * speed], x: [0, 0] },
    down: { y: [-100 * speed, 100 * speed], x: [0, 0] },
    left: { x: [100 * speed, -100 * speed], y: [0, 0] },
    right: { x: [-100 * speed, 100 * speed], y: [0, 0] },
  }

  const x = useTransform(scrollYProgress, [0, 1], directionMap[direction].x)
  const y = useTransform(scrollYProgress, [0, 1], directionMap[direction].y)

  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}
