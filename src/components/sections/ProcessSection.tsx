'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Map, Search, ClipboardCheck, Users, FileSignature, PartyPopper } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'

const steps = [
  { icon: ClipboardList, number: '01', title: 'Discovery & Workforce Planning', description: 'Deep-dive into your business strategy, culture, and role requirements to define the ideal candidate profile.' },
  { icon: Map, number: '02', title: 'Talent Mapping', description: 'Comprehensive market research to identify potential candidates, competitors, and compensation benchmarks.' },
  { icon: Search, number: '03', title: 'Executive Search', description: 'Proactive outreach to passive and active candidates through our extensive network and targeted sourcing.' },
  { icon: ClipboardCheck, number: '04', title: 'Candidate Assessment', description: 'Multi-stage evaluation including competency interviews, psychometric assessments, and reference checks.' },
  { icon: Users, number: '05', title: 'Interview Coordination', description: 'Seamless scheduling and preparation support for both client and candidate throughout the interview process.' },
  { icon: FileSignature, number: '06', title: 'Offer Management', description: 'Strategic negotiation support to secure top candidates while maintaining positive relationships with all parties.' },
  { icon: PartyPopper, number: '07', title: 'Joining Success', description: 'Post-placement support including onboarding guidance, 90-day check-ins, and replacement guarantee.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            How We Work
          </motion.span>
          <AnimatedText
            text="Our Proven Search Process"
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-navy-500 leading-tight text-center"
            type="words"
            tag="h2"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 h-1 w-20 bg-gold-500 rounded-full mx-auto origin-center"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex gap-6 md:gap-8 mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute left-[22px] md:left-[26px] top-14 w-0.5 h-[calc(100%+16px)] bg-gradient-to-b from-gold-500 to-navy-200 origin-top"
                />
              )}

              {/* Number Badge */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 z-10 relative"
                >
                  <span className="text-white font-bold text-sm md:text-base">{step.number}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-gold-500" />
                  <h3 className="text-xl font-bold text-navy-500">{step.title}</h3>
                </div>
                <p className="text-navy-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
