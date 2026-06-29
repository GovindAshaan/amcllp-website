'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Globe,
  Building2,
  Users,
  Cpu,
  Shield,
  Cloud,
  Brain,
  Code2,
  Database,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

interface MarketSector {
  id: string
  title: string
  description: string
  icon: typeof Globe
  gradient: string
  borderGlow: string
  stats: { label: string; value: string }[]
  talent: string[]
}

const marketSectors: MarketSector[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Placing frontier-model researchers and ML engineers at top AI labs and applied-AI startups.',
    icon: Brain,
    gradient: 'from-purple-500/10 to-electric-indigo-500/5',
    borderGlow: 'shadow-electric-indigo-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$320K' },
      { label: 'Placements', value: '89' },
      { label: 'Time-to-Hire', value: '14d' },
    ],
    talent: ['LLM Researchers', 'MLOps Engineers', 'Data Scientists', 'AI Architects'],
  },
  {
    id: 'fintech',
    title: 'Fintech & Trading',
    description: 'Sourcing quant developers, risk analysts, and engineering leaders for high-frequency trading and digital banking.',
    icon: Shield,
    gradient: 'from-amber-500/10 to-orange-500/5',
    borderGlow: 'shadow-amber-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$450K' },
      { label: 'Placements', value: '124' },
      { label: 'Time-to-Hire', value: '21d' },
    ],
    talent: ['Quant Developers', 'Risk Analysts', 'Blockchain Engineers', 'Trading Strategists'],
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure',
    description: 'Delivering platform engineers, SREs, and cloud architects for hyperscaler migration and zero-downtime operations.',
    icon: Cloud,
    gradient: 'from-cyan-500/10 to-blue-500/5',
    borderGlow: 'shadow-cyan-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$280K' },
      { label: 'Placements', value: '156' },
      { label: 'Time-to-Hire', value: '18d' },
    ],
    talent: ['Platform Engineers', 'SREs', 'Cloud Architects', 'Kubernetes Specialists'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Identifying top-tier security talent — from red-team operators to CISO-level leadership.',
    icon: Shield,
    gradient: 'from-red-500/10 to-rose-500/5',
    borderGlow: 'shadow-red-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$340K' },
      { label: 'Placements', value: '67' },
      { label: 'Time-to-Hire', value: '25d' },
    ],
    talent: ['Security Architects', 'Penetration Testers', 'CISOs', 'GRC Specialists'],
  },
  {
    id: 'data-platform',
    title: 'Data & Analytics',
    description: 'Connecting companies with data engineers, analytics leaders, and platform architects driving data-first transformations.',
    icon: Database,
    gradient: 'from-green-500/10 to-emerald-500/5',
    borderGlow: 'shadow-green-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$260K' },
      { label: 'Placements', value: '98' },
      { label: 'Time-to-Hire', value: '16d' },
    ],
    talent: ['Data Engineers', 'Analytics Engineers', 'Data Architects', 'BI Leaders'],
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools & DevOps',
    description: 'Recruiting for the companies building the tools that power modern engineering organizations.',
    icon: Code2,
    gradient: 'from-sky-500/10 to-indigo-500/5',
    borderGlow: 'shadow-sky-500/10',
    stats: [
      { label: 'Avg. Salary', value: '$240K' },
      { label: 'Placements', value: '73' },
      { label: 'Time-to-Hire', value: '12d' },
    ],
    talent: ['DevTools Engineers', 'CI/CD Specialists', 'Test Automation', 'Developer Experience'],
  },
]

export default function HorizontalMarketMap() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress to horizontal translation
  // The container is 3x the viewport wide, so we translate up to ~66%
  const x = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ['5%', '0%', '-45%', '-50%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-[#070A13]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-electric-indigo-500/6 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-cyber-cyan-500/4 rounded-full blur-[180px]" />
      </div>
      <div className="absolute inset-0 geo-grid opacity-20" />

      <div className="relative z-10">
        {/* Section Header (stays in place) */}
        <div className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pane-light text-[10px] font-semibold tracking-[0.2em] uppercase text-cyber-cyan-400 mb-4"
            >
              <Globe className="w-3 h-3" />
              Market Intelligence
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Specialized talent ecosystems
            </h2>
            <p className="text-white/30 text-base max-w-2xl">
              We maintain deep talent pools across critical technology and leadership domains.
              Scroll to explore each sector.
            </p>
          </motion.div>
        </div>

        {/* Horizontally Scrolling Cards */}
        <div className="relative overflow-x-visible">
          <motion.div
            style={{ x }}
            className="flex gap-5 md:gap-6 pl-4 sm:pl-6 lg:pl-[calc((100%-1280px)/2)]"
          >
            {marketSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
              >
                <div
                  className={`
                    glass-card p-6 md:p-8 h-full
                    group relative overflow-hidden
                    transition-all duration-500 ease-out
                    morph-card
                  `}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 bg-gradient-to-br ${sector.gradient}
                      pointer-events-none
                    `}
                  />

                  {/* Sector icon */}
                  <div className="relative z-10 mb-5">
                    <div className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br ${sector.gradient}
                      border border-white/[0.05] group-hover:border-white/[0.12]
                      transition-all duration-500
                    `}>
                      <sector.icon className="w-6 h-6 text-white/70" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-sm text-white/30 group-hover:text-white/40 transition-colors mt-2 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {sector.stats.map((stat) => (
                        <div key={stat.label} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/[0.03]">
                          <p className="text-sm font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] text-white/25 mt-0.5 truncate">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Talent tags */}
                    <div className="pt-2">
                      <p className="text-[10px] text-white/20 tracking-wider uppercase mb-2 flex items-center gap-1.5">
                        <Users className="w-3 h-3" />
                        Talent Pool
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sector.talent.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] text-white/40 border border-white/[0.05] group-hover:border-white/[0.1] group-hover:text-white/60 transition-all duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[141px] h-[141px] bg-gradient-to-br from-transparent via-transparent to-white/[0.03] rotate-45 translate-x-10 -translate-y-10" />
                  </div>

                  {/* Bottom glow line on hover */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-electric-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}

            {/* Extra spacer for last card visibility */}
            <div className="flex-shrink-0 w-8 sm:w-12" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="h-px w-12 bg-gradient-to-l from-white/[0.08] to-transparent" />
          <div className="flex items-center gap-2 text-xs text-white/20">
            <Sparkles className="w-3 h-3" />
            <span>Scroll to explore sectors</span>
            <ArrowRight className="w-3 h-3 animate-pulse" />
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}