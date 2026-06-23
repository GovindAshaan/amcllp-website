'use client'

import { motion } from 'framer-motion'
import { Clock, UserX, TrendingDown, Hourglass, AlertTriangle, XCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'
import AnimatedText from '../ui/AnimatedText'

const painPoints = [
  { icon: Clock, title: 'Leadership Positions Remaining Open', description: 'Critical C-suite and senior roles left unfilled for months, stalling strategic initiatives.' },
  { icon: UserX, title: 'Difficulty Finding Quality Talent', description: 'Struggling to identify candidates with the right mix of skills, experience, and cultural fit.' },
  { icon: TrendingDown, title: 'High Attrition Rates', description: 'Losing top performers due to poor hiring decisions and lack of strategic workforce planning.' },
  { icon: Hourglass, title: 'Slow Recruitment Process', description: 'Lengthy hiring cycles that cause organizations to lose top candidates to competitors.' },
  { icon: AlertTriangle, title: 'Skill Gaps Impacting Performance', description: 'Teams lacking critical competencies needed to execute business strategy and stay competitive.' },
  { icon: XCircle, title: 'Poor Candidate Fit', description: 'Misaligned hires that underperform and create disruption within teams and leadership.' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
}

export default function PainPointsSection() {
  return (
    <section className="section-padding bg-navy-500 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <AnimatedText
            text="Hiring Challenges Slowing Your Growth?"
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight"
            type="words"
            tag="h2"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 h-1 w-20 bg-gold-500 rounded-full origin-left"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {painPoints.map((point) => (
            <motion.div key={point.title} variants={cardVariants}>
              <TiltCard className="group">
                <div className="relative bg-navy-600/50 rounded-xl p-6 border border-navy-400/30 hover:border-gold-500/50 transition-all duration-300 h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <point.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">{point.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            <span className="text-gold-400 font-semibold">AMCLLP</span> helps organizations overcome these challenges through{' '}
            <span className="text-white font-medium">strategic talent acquisition</span> and{' '}
            <span className="text-white font-medium">workforce solutions</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
