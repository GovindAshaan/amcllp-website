'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Code2, Users, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/cn'
import { verticals, accents } from '@/lib/verticals'

const icons = {
  'ai-labs': Boxes,
  engineering: Code2,
  'prudent-headhunterz': Users,
  growthdesk: TrendingUp,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 90 } },
}

export default function OperatingCompaniesGrid() {
  return (
    <section id="operating-companies" className="relative py-20 md:py-28 overflow-hidden">
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
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40">The Operating Companies</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[40px] font-display font-bold text-white text-balance leading-tight">
            Four divisions. <span className="text-gradient-venture">One growth loop.</span>
          </h2>
          <p className="mt-4 text-white/40 text-base md:text-lg max-w-xl">
            Each operating company is a specialist. Together they form a complete build, hire, and scale engine.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {verticals.map((v, i) => {
            const accent = accents[v.accent]
            const Icon = icons[v.slug]
            const large = i < 2
            return (
              <motion.a
                key={v.slug}
                variants={cardVariants}
                href={v.route}
                className={cn(
                  'group relative rounded-3xl border bg-white/[0.02] overflow-hidden transition-all duration-500 hover:bg-white/[0.035] block',
                  large ? 'md:row-span-1 p-8 md:p-10' : 'p-8 md:p-10',
                  accent.border
                )}
              >
                <div className={cn('absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[120px] opacity-15 group-hover:opacity-30 transition-opacity duration-700', accent.bgSoft)} />
                <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase', accent.bgSoft, accent.border, accent.text)}>
                      <Icon className="w-3.5 h-3.5" />
                      {v.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-[28px] font-display font-bold text-white text-balance leading-tight mb-4">
                    {v.headline}
                  </h3>
                  <p className="text-white/45 text-sm md:text-base leading-relaxed mb-6 flex-1">{subCopy(v.slug)}</p>

                  <span className={cn('inline-flex items-center gap-2 text-sm font-semibold transition-colors', accent.text)}>
                    {v.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function subCopy(slug: string): string {
  switch (slug) {
    case 'ai-labs':
      return 'ScaleAIHub  -  an end-to-end career acceleration and placement ecosystem powered by 12 specialized AI modules. BookFulfillment OS  -  a multi-tenant B2B publishing engine generating KDP-ready manuscripts, chapter-wise audiobooks, and print-ready covers.'
    case 'engineering':
      return 'We architect custom multi-tenant SaaS platforms, RAG knowledge pipelines, autonomous voice calling agents, CRM integrations, and browser extensions  -  built by engineers with deep enterprise pedigree.'
    case 'prudent-headhunterz':
      return 'Building on over a decade of enterprise recruitment pedigree, Prudent Headhunterz identifies, vets, and closes top-tier engineering, product, and C-suite talent for startups and enterprises.'
    default:
      return 'GrowthDesk designs high-converting webinar and B2B acquisition funnels, runs data-driven Meta and Google campaigns, and deploys automated WhatsApp and email follow-up that turns spend into pipeline.'
  }
}
