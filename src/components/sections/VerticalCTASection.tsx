'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { AccentKey } from '@/lib/verticals'
import { accents } from '@/lib/verticals'
import { useTheme } from '@/components/providers/ThemeProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'

interface VerticalCTASectionProps {
  accentKey: AccentKey
  eyebrow: string
  title: string
  description: string
  cta: string
}

export default function VerticalCTASection({ accentKey, eyebrow, title, description, cta }: VerticalCTASectionProps) {
  const accent = accents[accentKey]
  const { theme } = useTheme()

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-15', accent.bgSoft)} />

      <div className="container-custom relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <span className={cn('text-xs font-semibold tracking-widest uppercase', accent.text)}>{eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-white/50 text-base md:text-lg max-w-xl mx-auto">{description}</p>

          <MagneticButton strength={0.24} className="inline-block mt-8">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${theme.glow} 0%, ${theme.from} 100%)` }}
            >
              {cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
