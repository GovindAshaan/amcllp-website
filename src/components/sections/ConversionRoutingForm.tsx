'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Code2, Users, TrendingUp, Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { VerticalSlug } from '@/lib/verticals'

const options = [
  { key: 'ai-labs' as VerticalSlug, label: 'Ashan AI Labs', sublabel: 'ScaleAIHub / BookFulfillment OS', icon: Boxes, route: '/ai-labs' },
  { key: 'engineering' as VerticalSlug, label: 'Ashan AI Engineering', sublabel: 'Custom AI / SaaS Build', icon: Code2, route: '/engineering' },
  { key: 'prudent-headhunterz' as VerticalSlug, label: 'Prudent Headhunterz', sublabel: 'Executive & Tech Hiring', icon: Users, route: '/prudent-headhunterz' },
  { key: 'growthdesk' as VerticalSlug, label: 'GrowthDesk', sublabel: 'Performance Marketing & Funnels', icon: TrendingUp, route: '/growthdesk' },
]

const accentText: Record<VerticalSlug, { border: string; text: string; bg: string }> = {
  'ai-labs': { border: 'border-electric-indigo-500', text: 'text-electric-indigo-300', bg: 'bg-electric-indigo-500' },
  engineering: { border: 'border-venture-cyan-500', text: 'text-venture-cyan-300', bg: 'bg-venture-cyan-500' },
  'prudent-headhunterz': { border: 'border-venture-emerald-500', text: 'text-venture-emerald-300', bg: 'bg-venture-emerald-500' },
  growthdesk: { border: 'border-venture-amber-500', text: 'text-venture-amber-300', bg: 'bg-venture-amber-500' },
}

export default function ConversionRoutingForm() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="routing" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-electric-indigo-500/8 blur-[160px] rounded-full" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pane-light text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-5">
            Let&apos;s route you to the right team
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight">
            Which Part of Your Business Are You <span className="text-gradient-venture">Scaling Next?</span>
          </h2>
          <p className="text-white/40 mt-5 text-base md:text-lg max-w-xl mx-auto">
            Tell us your primary objective and our team will route you to the division best positioned to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              {options.map((opt) => {
                const accent = accentText[opt.key]
                const isSelected = selected === opt.key
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelected(opt.key)}
                    className={cn(
                      'group text-left flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300',
                      isSelected
                        ? 'bg-white/[0.04] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)]'
                        : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03]'
                    )}
                  >
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors',
                        isSelected ? cn(accent.bg, 'border-white/20') : 'bg-white/[0.03] border-white/[0.08]'
                      )}
                    >
                      <opt.icon className={cn('w-5 h-5', isSelected ? 'text-white' : 'text-white/50')} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{opt.label}</p>
                      <p className="text-xs text-white/40 mt-0.5">{opt.sublabel}</p>
                    </div>
                    <span
                      className={cn(
                        'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all',
                        isSelected ? 'border-white/40 bg-white/10' : 'border-white/20'
                      )}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </span>
                  </button>
                )
              })}
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={cn('text-center text-sm mt-6', selected ? 'text-white/80' : 'text-venture-amber-300')}
              >
                {selected
                  ? `Great  -  routing you to ${options.find((o) => o.key === selected)?.label}. A specialist will reach out.`
                  : 'Please select an objective above to continue.'}
              </motion.p>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <button type="submit" className="btn-kinetic-primary w-full sm:w-auto px-8 py-4 text-base gap-2 group">
                Continue
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              {selected && (
                <a
                  href={options.find((o) => o.key === selected)?.route}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  or go straight to {options.find((o) => o.key === selected)?.label} →
                </a>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
