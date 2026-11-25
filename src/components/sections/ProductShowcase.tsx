'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { AccentKey } from '@/lib/verticals'
import { accents } from '@/lib/verticals'

export interface Product {
  eyebrow: string
  name: string
  tagline: string
  description: string
  features: string[]
  cta: string
  href: string
  external?: boolean
}

interface ProductShowcaseProps {
  accentKey: AccentKey
  products: Product[]
  eyebrow: string
  title: string
  subtitle: string
}

export default function ProductShowcase({ accentKey, products, eyebrow, title, subtitle }: ProductShowcaseProps) {
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
          <p className="mt-4 text-white/40 text-base md:text-lg">{subtitle}</p>
        </motion.div>

        <div className="space-y-6">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              id={product.name.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className={cn('relative rounded-3xl border bg-white/[0.02] overflow-hidden p-8 md:p-12', accent.border)}
            >
              <div className={cn('absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[130px] opacity-10', accent.bgSoft)} />

              <div className={cn('grid gap-10 items-center', i % 2 === 1 ? 'md:grid-cols-[1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1fr]')}>
                {/* Content */}
                <div className="relative">
                  <span className={cn('inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase', accent.bgSoft, accent.border, accent.text)}>
                    {product.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-display font-bold text-white text-balance">{product.name}</h3>
                  <p className={cn('mt-1 text-sm font-medium', accent.text)}>{product.tagline}</p>
                  <p className="mt-4 text-white/50 leading-relaxed">{product.description}</p>

                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className={cn('mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0', accent.bgSoft)}>
                          <Check className={cn('w-3 h-3', accent.text)} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.href}
                    target={product.external ? '_blank' : undefined}
                    rel={product.external ? 'noopener noreferrer' : undefined}
                    className={cn('inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors', accent.text, 'hover:brightness-125')}
                  >
                    {product.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Visual panel */}
                <div className={cn('relative hidden md:block rounded-2xl border bg-white/[0.02] p-8 overflow-hidden', accent.border)}>
                  <div className="absolute inset-0 bg-grid-white opacity-30" />
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={cn('px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase', accent.bgSoft, accent.text)}>
                        {product.name}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-venture-emerald-400/80 uppercase tracking-wider">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', accent.bar)} />
                          <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', accent.bar)} />
                        </span>
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[['Auto', 'Modules'], ['In', 'Production'], ['User', 'Ready']].map(([a, b]) => (
                        <div key={a} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                          <p className="text-xs font-semibold text-white/80">{a}</p>
                          <p className="text-[10px] text-white/35">{b}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[64, 82, 57].map((w) => (
                        <div key={w}>
                          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                            <div className={cn('h-full rounded-full', accent.bar)} style={{ width: `${w}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
