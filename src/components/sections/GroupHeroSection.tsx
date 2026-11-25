'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles, Boxes, Code2, Users, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/cn'
import { verticals, accents } from '@/lib/verticals'

const heroBadges = [
  { label: 'Ashan AI Labs', icon: Boxes },
  { label: 'Ashan AI Engineering', icon: Code2 },
  { label: 'Prudent Headhunterz', icon: Users },
  { label: 'GrowthDesk', icon: TrendingUp },
]

export default function GroupHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#070A13]">
      {/* Ambient layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-electric-indigo-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-venture-cyan-500/8 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-venture-amber-500/6 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 geo-grid opacity-60" />
      <div className="scan-line-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-[#070A13]/70 pointer-events-none" />

      <motion.div style={{ y, opacity }} className="container-custom relative z-20 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 rounded-full glass-pane-light text-xs font-semibold tracking-widest uppercase text-white/60">
                <Sparkles className="w-3.5 h-3.5 text-electric-indigo-400" />
                AMC Venture &amp; Tech Group
                <span className="text-white/30">•</span>Build
                <span className="text-white/30">•</span>Hire
                <span className="text-white/30">•</span>Scale
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-display font-bold leading-[1.02] tracking-tight text-balance"
            >
              <span className="text-white">
                We Build AI Products, Engineer Custom Software, Hire Leadership, and{' '}
              </span>
              <span className="text-gradient-venture">Scale Revenue.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed"
            >
              AMC Venture &amp; Tech Group is an integrated technology and business acceleration house. From
              proprietary SaaS platforms at <span className="text-white/70">Ashan AI Labs</span> and bespoke systems at{' '}
              <span className="text-white/70">Ashan AI Engineering</span>, to executive search via{' '}
              <span className="text-white/70">Prudent Headhunterz</span> and ROI-obsessed acquisition at{' '}
              <span className="text-white/70">GrowthDesk</span> — we provide the complete infrastructure to build and
              scale modern companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="#operating-companies" className="btn-kinetic-primary px-8 py-4 text-base gap-2 group">
                Explore Our Ecosystem
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/contact" className="btn-kinetic px-8 py-4 text-base gap-2 border border-white/15 text-white/80 hover:text-white hover:border-white/30">
                Schedule a Partner Consultation
              </a>
            </motion.div>

            {/* Pill badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <span className="text-xs text-white/30 tracking-wider uppercase">Explore:</span>
              {heroBadges.map((badge) => (
                <a
                  key={badge.label}
                  href="#operating-companies"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pane-light text-xs font-medium text-white/60 hover:text-white hover:border-white/20 transition-all duration-300 group"
                >
                  <badge.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70" />
                  {badge.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: ecosystem visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative glass-pane-strong rounded-3xl p-7 space-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white opacity-30" />
              <div className="flex items-center justify-between relative">
                <p className="text-sm font-semibold text-white">The Ecosystem</p>
                <span className="flex items-center gap-1.5 text-[10px] text-venture-emerald-400/80 tracking-wider uppercase">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-venture-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-venture-emerald-500" />
                  </span>
                  4 Operating Cos
                </span>
              </div>
              <div className="relative space-y-3">
                {verticals.map((v, i) => {
                  const Icon = heroBadges[i]?.icon ?? Boxes
                  return (
                    <a
                      key={v.slug}
                      href={v.route}
                      className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/25 transition-all duration-300 overflow-hidden"
                    >
                      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center border shrink-0', accents[v.accent].iconBg)}>
                        <Icon className={cn('w-5 h-5', accents[v.accent].text)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white">{v.name}</p>
                        <p className="text-[11px] text-white/40 truncate">{v.tag}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
        <p className="text-[10px] text-white/15 tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  )
}
