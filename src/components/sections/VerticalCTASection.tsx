'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { AccentKey } from '@/lib/verticals'
import { accents } from '@/lib/verticals'

interface VerticalCTASectionProps {
  accentKey: AccentKey
  eyebrow: string
  title: string
  description: string
  cta: string
}

export default function VerticalCTASection({ accentKey, eyebrow, title, description, cta }: VerticalCTASectionProps) {
  const accent = accents[accentKey]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      <div className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-15', accent.bgSoft)} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className={cn('text-xs font-semibold tracking-widest uppercase', accent.text)}>{eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-white/40 text-base md:text-lg max-w-xl mx-auto">{description}</p>
          <a href="/contact" className={cn('btn-kinetic-primary mt-8 px-8 py-4 text-base gap-2 group', accent.glow)}>
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
