'use client'

import { motion } from 'framer-motion'
import { Compass, Search, Award, Zap, Crown, HeadphonesIcon } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'
import TiltCard from '../ui/TiltCard'

const reasons = [
  { icon: Compass, title: 'Strategic Hiring Approach', description: 'We align every search with your business strategy, ensuring hires contribute directly to organizational goals and long-term vision.' },
  { icon: Search, title: 'Deep Market Research', description: 'Our consultants leverage proprietary intelligence and industry networks to uncover passive candidates invisible to traditional recruiters.' },
  { icon: Award, title: 'Quality-First Screening', description: 'Rigorous multi-stage assessment including behavioral interviews, competency mapping, and cultural fit analysis before any candidate introduction.' },
  { icon: Zap, title: 'Faster Hiring Cycles', description: 'Streamlined processes and pre-mapped talent networks reduce average time-to-fill by 40% without compromising quality.' },
  { icon: Crown, title: 'Leadership Hiring Expertise', description: 'Dedicated practice leaders with decades of C-suite and board-level search experience across every major industry vertical.' },
  { icon: HeadphonesIcon, title: 'Dedicated Consulting Support', description: 'A single point of contact from intake through onboarding, ensuring continuity, accountability, and white-glove service.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 100 } },
}

export default function WhyChooseSection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-3 block text-center"
          >
            The AMCLLP Difference
          </motion.span>
          <AnimatedText
            text="Why Organizations Choose AMCLLP"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={cardVariants}>
              <TiltCard tiltAmount={5}>
                <div className="group bg-navy-600/40 rounded-xl p-6 border border-navy-400/20 hover:border-gold-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
