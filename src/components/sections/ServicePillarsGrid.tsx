'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { AccentKey } from '@/lib/verticals'
import { accents } from '@/lib/verticals'

export interface Pillar {
  icon: React.ReactNode
  title: string
  description: string
  points: string[]
}

interface ServicePillarsGridProps {
  accentKey: AccentKey
  pillars: Pillar[]
  eyebrow: string
  title: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
}

export default function ServicePillarsGrid({ accentKey, pillars, eyebrow, title }: ServicePillarsGridProps) {
  const accent = accents[accentKey]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#070A13]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className={cn('text-xs font-semibold tracking-widest uppercase', accent.text)}>{eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[40px] font-display font-bold text-white text-balance leading-tight">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 overflow-hidden hover:border-white/20 transition-colors duration-300"
            >
              <div className={cn('absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[90px] opacity-0 group-hover:opacity-20 transition-opacity duration-500', accent.bgSoft)} />
              <div className="relative">
                <div className={cn('w-13 h-13 w-14 h-14 rounded-xl flex items-center justify-center border mb-6', accent.iconBg)}>
                  <span className={cn('w-6 h-6', accent.text)}>{pillar.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-display">{pillar.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed mb-5">{pillar.description}</p>
                <ul className="space-y-2.5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/55">
                      <Check className={cn('w-4 h-4 mt-0.5 shrink-0', accent.text)} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
