'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { Vertical } from '@/lib/verticals'
import { accents } from '@/lib/verticals'

interface VerticalHeroSectionProps {
  vertical: Vertical
  eyebrow?: string
  subtext?: string
  badgeIcon?: React.ReactNode
}

export default function VerticalHeroSection({ vertical, eyebrow, subtext, badgeIcon = <Layers className="w-3.5 h-3.5" /> }: VerticalHeroSectionProps) {
  const accent = accents[vertical.accent]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#070A13] pt-24">
      {/* Ambient glows */}
      <div className="absolute inset-0">
        <div className={cn('absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-20', accent.bgSoft)} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 bg-white/5" />
      </div>
      <div className="absolute inset-0 geo-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-[#070A13]/70 pointer-events-none" />

      <div className="container-custom relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <a href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
                ← Back to the ecosystem
              </a>
              <span
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase',
                  accent.bgSoft,
                  accent.border,
                  accent.text
                )}
              >
                {badgeIcon}
                {vertical.tag}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-bold leading-[1.02] tracking-tight text-white text-balance"
            >
              {eyebrow ?? vertical.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed"
            >
              {subtext ?? vertical.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="/contact" className="btn-kinetic-primary px-8 py-4 text-base gap-2 group">
                {vertical.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/#routing" className="btn-kinetic px-8 py-4 text-base gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30">
                Explore All Divisions
              </a>
            </motion.div>
          </div>

          {/* Right visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className={cn('relative glass-pane-strong rounded-3xl p-8 overflow-hidden border', accent.border)}>
              <div className="absolute inset-0 bg-grid-white opacity-40" />
              <div className={cn('absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[100px] opacity-25', accent.bgSoft)} />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className={cn('px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase', accent.bgSoft, accent.text, accent.border)}>
                    {vertical.shortName}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/40 tracking-wider uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', accent.bar)} />
                      <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', accent.bar)} />
                    </span>
                    Active
                  </div>
                </div>

                {/* Abstract stat tiles */}
                <div className="grid grid-cols-3 gap-3">
                  {[['Production', 'Grade'], ['Commercial', 'Focus'], ['Deployed', 'At Scale']].map(([a, b], i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <p className="text-xs font-semibold text-white/80">{a}</p>
                      <p className="text-[10px] text-white/35">{b}</p>
                    </div>
                  ))}
                </div>

                {/* Fake progress bars */}
                <div className="space-y-3">
                  {[72, 46, 88].map((w, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/30 mb-1">
                        <span>Capability</span>
                        <span>{w}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className={cn('h-full rounded-full', accent.bar)} style={{ width: `${w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
