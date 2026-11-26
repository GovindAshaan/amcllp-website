'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TiltGlassCardProps {
  children: ReactNode
  className?: string
  tint?: string
  tiltAmount?: number
}

/* Interactive 3D tilt glassmorphic card with a specular border glow that follows the cursor. */
export default function TiltGlassCard({ children, className, tint = '#A595FF', tiltAmount = 9 }: TiltGlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x, { stiffness: 160, damping: 18 })
  const my = useSpring(y, { stiffness: 160, damping: 18 })

  const rotateX = useTransform(my, [-0.5, 0.5], [`${tiltAmount}deg`, `-${tiltAmount}deg`])
  const rotateY = useTransform(mx, [-0.5, 0.5], [`-${tiltAmount}deg`, `${tiltAmount}deg`])
  const glareX = useTransform(mx, [-0.5, 0.5], ['-60%', '160%'])
  const glareY = useTransform(my, [-0.5, 0.5], ['-60%', '160%'])
  const glareBg = useMotionTemplate`radial-gradient(220px circle at ${glareX} ${glareY}, ${tint}33, transparent 60%)`

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        'relative rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden',
        'shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-500 hover:border-white/20',
        className
      )}
    >
      {/* Specular border glow following the cursor */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glareBg }} />
      {children}
    </motion.div>
  )
}