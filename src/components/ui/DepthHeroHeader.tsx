'use client'

import { type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'
import { useTheme } from '../providers/ThemeProvider'

interface DepthHeroHeaderProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  crumbLabel?: string
  crumbHref?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

/* Transparent inner-page hero: depth-layered typography overlaps the route's floating 3D
   centerpiece (rendered by the single global canvas behind this section). */
export default function DepthHeroHeader({
  eyebrow,
  title,
  subtitle,
  crumbLabel,
  crumbHref,
  primaryCta,
  secondaryCta,
}: DepthHeroHeaderProps) {
  const { theme } = useTheme()

  /* Mouse parallax on the oversized depth text. */
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 60, damping: 18 })
  const sy = useSpring(py, { stiffness: 60, damping: 18 })
  const textX = useTransform(sx, [-1, 1], [16, -16])
  const textY = useTransform(sy, [-1, 1], [12, -12])
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    px.set((e.clientX / window.innerWidth) * 2 - 1)
    py.set((e.clientY / window.innerHeight) * 2 - 1)
  }

  return (
    <section
      onMouseMove={onMove}
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-28"
    >
      {/* Oversized depth-layered display typography (behind the global 3D object) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: textX, y: textY }}
          className="select-none text-center leading-none font-bold uppercase tracking-tighter whitespace-nowrap font-display"
        >
          <span
            className="block"
            style={{ fontSize: 'clamp(4rem, 26vw, 24rem)', color: theme.text, opacity: 0.1, filter: 'blur(3px)' }}
          >
            {theme.giantWord}
          </span>
          <span
            className="block"
            style={{
              fontSize: 'clamp(4rem, 26vw, 24rem)',
              marginTop: '-0.86em',
              WebkitTextStroke: `1.5px ${theme.text}`,
              color: 'transparent',
              opacity: 0.9,
            }}
          >
            {theme.giantWord}
          </span>
        </motion.div>
      </div>

      {/* Top ambient fade for the nav bar */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {crumbLabel && (
            <a
              href={crumbHref ?? '/'}
              className="inline-flex items-center gap-2 text-xs text-white/45 hover:text-white/80 transition-colors mb-7 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              {crumbLabel}
            </a>
          )}

          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
            style={{ color: theme.text, borderColor: `${theme.glow}55`, backgroundColor: `${theme.glow}14` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.glow, boxShadow: `0 0 10px ${theme.glow}` }} />
            {eyebrow}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-bold text-white text-balance leading-[1.05] tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl">{subtitle}</p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <MagneticButton strength={0.22}>
                  <a
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[15px] text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${theme.glow} 0%, ${theme.from} 100%)` }}
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </MagneticButton>
              )}
              {secondaryCta && (
                <MagneticButton strength={0.22}>
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[15px] text-white/80 border border-white/20 hover:text-white hover:border-white/35 transition-colors"
                  >
                    {secondaryCta.label}
                  </a>
                </MagneticButton>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}