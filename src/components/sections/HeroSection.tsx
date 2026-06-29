'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowRight, Activity, Users, Zap, Sparkles, ChevronDown } from 'lucide-react'

const floatingMetrics = [
  {
    label: 'Live Placements',
    value: '1,284',
    change: '+12%',
    icon: Users,
    color: 'from-cyber-cyan-400/20 to-cyber-cyan-500/10',
    border: 'border-cyber-cyan-500/20',
    glow: 'shadow-cyber-cyan-500/10',
  },
  {
    label: 'Time-to-Hire',
    value: '8.2d',
    change: '-32%',
    icon: Zap,
    color: 'from-electric-indigo-400/20 to-electric-indigo-500/10',
    border: 'border-electric-indigo-500/20',
    glow: 'shadow-electric-indigo-500/10',
  },
  {
    label: 'Active Roles',
    value: '347',
    change: '+8%',
    icon: Activity,
    color: 'from-cyber-cyan-400/15 to-electric-indigo-500/10',
    border: 'border-cyber-cyan-500/15',
    glow: 'shadow-cyber-cyan-500/8',
  },
]

const roleTags = [
  'Senior AI Architect',
  'Staff Rust Engineer',
  'VP of Platform Engineering',
  'Principal Data Scientist',
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 30, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) / 25
    const y = (e.clientY - rect.top - rect.height / 2) / 25
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070A13]"
    >
      {/* ====== VOID BACKGROUND LAYERS ====== */}

      {/* Deep ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-electric-indigo-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyber-cyan-500/8 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-electric-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Geometric grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-60" />

      {/* Horizontal scan line */}
      <div className="scan-line-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-[#070A13]/80 pointer-events-none" />

      {/* ====== MAIN CONTENT ====== */}
      <motion.div
        style={{ y, opacity, scale }}
        className="container-custom relative z-20 pt-32 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* ====== LEFT: TYPOGRAPHY ====== */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pane-light text-xs font-semibold tracking-widest uppercase text-cyber-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan-500" />
                </span>
                Elite Talent Acquisition Intelligence
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[0.95] tracking-tight"
              >
                <span className="text-white">Hire the architects</span>
                <br />
                <span className="text-gradient-cyan">of tomorrow, today</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed"
              >
                We combine human expertise with AI-powered intelligence to place
                the top <span className="text-white/70">0.1% of India's talent</span> at
                the nation's most ambitious organizations.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="btn-kinetic-primary px-8 py-4 text-base gap-2 group"
              >
                <Sparkles className="w-5 h-5" />
                <span>Initiate Search</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#talent-feed"
                className="btn-kinetic-indigo px-8 py-4 text-base gap-2 group"
              >
                <Activity className="w-5 h-5" />
                <span>Live Talent Feed</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Trusted by / live counter strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {[
                  { label: 'Placements', value: '500+' },
                  { label: 'Enterprise Clients', value: '100+' },
                  { label: 'Avg. Time-to-Hire', value: '8.2d' },
                  { label: 'Satisfaction', value: '98%' },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="h-8 w-px bg-gradient-to-b from-electric-indigo-500/40 to-transparent hidden md:block first:hidden" />
                    <div>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/30 tracking-wider uppercase">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ====== RIGHT: FLOATING GLASS METRICS PANEL ====== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative"
            >
              {/* Main Glass Panel */}
              <div className="glass-pane-strong rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden">
                {/* Glowing top accent line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-electric-indigo-400/60 to-transparent" />

                {/* Panel Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric-indigo-500/20 flex items-center justify-center border border-electric-indigo-500/20">
                      <Activity className="w-4 h-4 text-electric-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Live Intelligence</p>
                      <p className="text-[10px] text-white/30 tracking-wider uppercase">Real-time Recruitment Stream</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] text-cyber-cyan-400/60 tracking-wider uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-cyan-500" />
                    </span>
                    Live
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03]" />

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {floatingMetrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                      className="space-y-2"
                    >
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${metric.color} border ${metric.border} ${metric.glow}`}>
                        <metric.icon className="w-4 h-4 text-white/80" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">{metric.value}</p>
                        <p className="text-[10px] text-white/30 tracking-wider uppercase truncate">{metric.label}</p>
                      </div>
                      <span className={`inline-block text-[10px] font-semibold ${
                        metric.change.startsWith('+') ? 'text-cyber-cyan-400' : 'text-cyber-cyan-400'
                      }`}>
                        {metric.change}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03]" />

                {/* Active Role Ticker */}
                <div className="space-y-3">
                  <p className="text-[10px] text-white/30 tracking-wider uppercase flex items-center gap-2">
                    <Zap className="w-3 h-3 text-electric-indigo-400" />
                    Priority Roles
                  </p>
                  <div className="space-y-2">
                    {roleTags.map((role, i) => (
                      <motion.div
                        key={role}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                        className="group flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] hover:border-electric-indigo-500/20 transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors truncate">
                          {role}
                        </span>
                        <span className="text-[10px] font-medium text-electric-indigo-400/60 group-hover:text-electric-indigo-400 ml-2 flex-shrink-0">
                          Active
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbiting decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-3 -right-3 w-16 h-16 border border-electric-indigo-500/10 rounded-full pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-electric-indigo-400/40" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 border border-cyber-cyan-500/8 rounded-full pointer-events-none"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyber-cyan-400/30" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ====== BOTTOM SCROLL INDICATOR ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
        <p className="text-[10px] text-white/15 tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  )
}
