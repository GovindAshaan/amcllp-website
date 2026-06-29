'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp, TrendingUp, Clock, Target, Zap, Activity } from 'lucide-react'

const metrics = [
  {
    value: '98',
    suffix: '%',
    label: 'Fill Rate',
    description: 'Successfully placed roles within target timeline',
    trend: '+3.2%',
    trendUp: true,
    icon: Target,
    color: 'from-cyber-cyan-400 to-cyber-cyan-500',
  },
  {
    value: '8.2',
    suffix: 'd',
    label: 'Avg. Time-to-Hire',
    description: 'Industry average is 42 days',
    trend: '-32%',
    trendUp: false,
    icon: Clock,
    color: 'from-electric-indigo-400 to-electric-indigo-500',
  },
  {
    value: '347',
    suffix: '',
    label: 'Active Engagements',
    description: 'Concurrent talent searches in progress',
    trend: '+12%',
    trendUp: true,
    icon: Activity,
    color: 'from-cyber-cyan-400 to-electric-indigo-500',
  },
  {
    value: '99',
    suffix: '%',
    label: 'Retention Rate',
    description: 'Placements retained beyond 12 months',
    trend: '+1.8%',
    trendUp: true,
    icon: Zap,
    color: 'from-electric-indigo-400 to-cyber-cyan-500',
  },
]

// Mini sparkline SVG generator
function MiniSparkline({ trendUp, color }: { trendUp: boolean; color: string }) {
  const points = trendUp
    ? [
        [0, 40], [10, 35], [20, 38], [30, 28], [40, 32],
        [50, 22], [60, 18], [70, 10], [80, 14], [90, 5], [100, 8],
      ]
    : [
        [0, 5], [10, 10], [20, 8], [30, 18], [40, 14],
        [50, 22], [60, 28], [70, 20], [80, 32], [90, 35], [100, 40],
      ]

  const pathD = points.map((p, i) =>
    i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`
  ).join(' ')

  const glowId = `glow-${trendUp ? 'up' : 'down'}-${Math.random().toString(36).slice(2, 8)}`

  return (
    <svg
      width="100%"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      className="overflow-visible"
    >
      <defs>
        <linearGradient id={glowId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(99,102,241,0)" />
          <stop offset="50%" stopColor="rgba(99,102,241,0.15)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d={`${pathD} L100,44 L0,44 Z`}
        fill={`url(#${glowId})`}
        className="opacity-50"
      />
      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke={trendUp ? 'rgba(0,240,255,0.6)' : 'rgba(99,102,241,0.6)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r="3"
        fill={trendUp ? '#00F0FF' : '#6366F1'}
        className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]"
      />
      {/* Pulse ring */}
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r="6"
        fill="none"
        stroke={trendUp ? '#00F0FF' : '#6366F1'}
        strokeWidth="0.5"
        className="opacity-40"
      >
        <animate
          attributeName="r"
          values="3;10;3"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '100%', '100%'])

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-[#070A13]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-electric-indigo-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-cyan-500/4 rounded-full blur-[150px]" />
      </div>

      {/* Geometric grid */}
      <div className="absolute inset-0 geo-grid opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pane-light text-[10px] font-semibold tracking-[0.2em] uppercase text-cyber-cyan-400 mb-6"
          >
            <TrendingUp className="w-3 h-3" />
            Real-Time Performance Metrics
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Precision talent intelligence
            <br />
            <span className="text-gradient-cyan">in numbers</span>
          </h2>

          <p className="text-white/30 text-base max-w-2xl mx-auto">
            Measurable outcomes that redefine how elite organizations scale their technical and
            leadership teams.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-40 h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              <motion.div
                style={{ width: lineWidth }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-indigo-400/50 to-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <div
                className={`
                  glass-card p-6 md:p-7 h-full flex flex-col
                  hover:border-opacity-20
                  transition-all duration-500 ease-out
                `}
              >
                {/* Glow on hover */}
                <div
                  className={`
                    absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl
                    transition-opacity duration-500 bg-gradient-to-br ${metric.color}/10
                    pointer-events-none
                  `}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${metric.color}/10 border border-white/[0.05]`}>
                      <metric.icon className="w-4 h-4 text-white/70" />
                    </div>
                    <span className={`flex items-center gap-1 text-[11px] font-semibold ${
                      metric.trendUp ? 'text-cyber-cyan-400' : 'text-electric-indigo-400'
                    }`}>
                      <ArrowUp className={`w-3 h-3 ${!metric.trendUp && 'rotate-180'}`} />
                      {metric.trend}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {metric.value}
                    </span>
                    {metric.suffix && (
                      <span className="text-lg font-semibold text-white/40">
                        {metric.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium text-white/60 mb-1">{metric.label}</p>

                  {/* Description */}
                  <p className="text-xs text-white/25 mb-4 flex-grow">{metric.description}</p>

                  {/* Sparkline */}
                  <div className="mt-auto h-11">
                    <MiniSparkline trendUp={metric.trendUp} color={metric.color} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-white/15 mt-10 tracking-wider uppercase"
        >
          Verified data from Q1 2026 · Enterprise client portfolio
        </motion.p>
      </div>
    </section>
  )
}
