'use client'

import { motion } from 'framer-motion'
import { Blocks, Boxes, Users, Compass } from 'lucide-react'
import { cn } from '@/lib/cn'

const proof = [
  { Icon: Compass, value: '14+', label: 'Years', text: 'Enterprise Consulting & Tech Entrepreneurship' },
  { Icon: Boxes, value: '2', label: 'Flagship SaaS', text: 'Commercial AI Platforms in Market' },
  { Icon: Users, value: '100+', label: 'Clients', text: 'Served Across Technology & Executive Search' },
  { Icon: Blocks, value: '360°', label: 'Execution', text: 'Product, Engineering, Talent & Growth' },
]

export default function AMCAdvantageSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-electric-indigo-500/6 blur-[160px] rounded-full" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">The AMC Advantage</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[42px] font-display font-bold text-white text-balance leading-tight">
              Traditional Vendors Work in Silos.{' '}
              <span className="text-gradient-venture">We Connect the Entire Growth Loop.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-white/45 leading-relaxed text-base md:text-lg"
          >
            <p>
              Software agencies don&apos;t understand customer acquisition. Recruiters don&apos;t understand modern AI
              architectures. Marketing agencies don&apos;t understand product unit economics.
            </p>
            <p className="text-white/60">
              Founded by software engineers turned serial entrepreneurs, AMC Venture &amp; Tech Group unites{' '}
              <span className="text-white/80 font-semibold">Code</span>,{' '}
              <span className="text-white/80 font-semibold">Talent</span>, and{' '}
              <span className="text-white/80 font-semibold">Revenue</span> under one roof. Every vertical reinforces the
              others.
            </p>
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {proof.map((p) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 overflow-hidden text-center hover:border-white/20 transition-colors duration-300"
            >
              <div className={cn('absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-electric-indigo-500')} />
              <div className="relative">
                <div className="w-12 h-12 mx-auto rounded-xl bg-electric-indigo-500/15 border border-electric-indigo-500/25 flex items-center justify-center mb-5">
                  <p.Icon className="w-5 h-5 text-electric-indigo-400" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-white">{p.value}</p>
                <p className="text-white/40 text-xs md:text-sm font-medium mt-1">{p.label}</p>
                <p className="text-white/30 text-[11px] leading-relaxed mt-3 max-w-[200px] mx-auto">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
