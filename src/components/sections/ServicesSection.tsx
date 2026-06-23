'use client'

import { motion } from 'framer-motion'
import { Crown, UserCog, Users, Briefcase, ClipboardCheck, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'
import AnimatedText from '../ui/AnimatedText'

const services = [
  { icon: Crown, title: 'Executive Search', description: 'Identify, attract, and secure C-suite, board-level, and senior leadership talent who drive transformational change.', benefit: 'Fill critical leadership roles with proven industry leaders within 60-90 days.' },
  { icon: UserCog, title: 'Leadership Hiring', description: 'Specialized recruitment for VP, Director, and Senior Management roles across functions and industries.', benefit: 'Reduce time-to-fill by 40% while improving quality of hire and cultural alignment.' },
  { icon: Users, title: 'Talent Acquisition', description: 'End-to-end hiring support for mid-level to senior professionals, from sourcing to onboarding.', benefit: 'Scale your team efficiently with a pipeline of pre-qualified, motivated candidates.' },
  { icon: Briefcase, title: 'Recruitment Process Outsourcing', description: 'Full or partial outsourcing of your recruitment function to our expert team of consultants.', benefit: 'Lower cost-per-hire by up to 35% while improving candidate experience and brand perception.' },
  { icon: ClipboardCheck, title: 'HR Consulting', description: 'Strategic HR advisory including compensation benchmarking, organizational design, and policy development.', benefit: 'Build HR frameworks that attract, retain, and motivate top-tier talent.' },
  { icon: TrendingUp, title: 'Workforce Strategy', description: 'Long-term workforce planning, talent mapping, and succession planning for sustainable growth.', benefit: 'Ensure leadership continuity and reduce business risk from unexpected talent departures.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 100 } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            Our Services
          </motion.span>
          <AnimatedText
            text="Premium Services for Ambitious Organizations"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <TiltCard tiltAmount={6}>
                <div className="group bg-white rounded-xl border border-navy-100 shadow-md hover:shadow-xl transition-all duration-300 p-7 hover:border-gold-500/30 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-5 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-500 mb-3">{service.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                  <div className="pt-4 border-t border-navy-100">
                    <p className="text-sm font-medium text-gold-600">
                      <span className="text-gold-500">→</span> {service.benefit}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
