'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'
import AnimatedText from '../ui/AnimatedText'

const metrics = [
  { end: 500, suffix: '+', label: 'Successful Placements' },
  { end: 100, suffix: '+', label: 'Clients Served' },
  { end: 15, suffix: '+', label: 'Industries Covered' },
  { end: 95, suffix: '%', label: 'Client Satisfaction' },
]

export default function MetricsSection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-3 block text-center"
          >
            Our Impact
          </motion.span>
          <AnimatedText
            text="Results That Speak for Themselves"
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight text-center"
            type="words"
            tag="h2"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 h-1 w-20 bg-gold-400 rounded-full mx-auto origin-center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', damping: 20 }}
              className="text-center p-8 rounded-2xl bg-navy-600/30 border border-navy-400/20 backdrop-blur-sm hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="relative">
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-500 mb-2"
                  whileInView={{ scale: [0.8, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  <AnimatedCounter
                    end={metric.end}
                    suffix={metric.suffix}
                    label={metric.label}
                  />
                </motion.div>
              </div>
              <p className="text-navy-200 text-sm md:text-base font-medium group-hover:text-white transition-colors">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
