'use client'

import { motion } from 'framer-motion'
import { Target, Search, Users, BarChart3, Lightbulb, Shield } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'
import ParallaxWrapper from '../ui/ParallaxWrapper'
import AnimatedText from '../ui/AnimatedText'

const focusAreas = [
  { icon: Search, title: 'Executive Search', desc: 'Identifying and attracting C-suite and board-level leaders who transform organizations.' },
  { icon: Target, title: 'Leadership Hiring', desc: 'Precision-focused senior management recruitment for critical business functions.' },
  { icon: Users, title: 'Workforce Planning', desc: 'Strategic talent mapping aligned with your business objectives and growth roadmap.' },
  { icon: BarChart3, title: 'Talent Mapping', desc: 'Comprehensive market intelligence on talent availability, compensation, and competition.' },
  { icon: Lightbulb, title: 'Recruitment Consulting', desc: 'Expert advisory on hiring strategy, employer branding, and talent acquisition optimization.' },
  { icon: Shield, title: 'Long-Term Talent Strategy', desc: 'Building sustainable talent pipelines that reduce time-to-hire and improve quality.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block"
            >
              About AMCLLP
            </motion.span>

            <AnimatedText
              text="Your Strategic Talent Acquisition Partner"
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-navy-500 leading-tight"
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

            <div className="mt-8 space-y-5 text-navy-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                At <strong className="text-navy-500">Ashans Management Consultancy LLP</strong>, we don't just fill positions — we build the leadership backbone that powers organizational success. We position ourselves as your <strong className="text-navy-500">business growth partner</strong> rather than a conventional recruitment agency.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                With deep expertise in executive search, leadership hiring, and workforce strategy, we understand that the right talent is not just a resource — it is the engine that drives competitive advantage, innovation, and sustainable growth.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Our consultants combine industry expertise with rigorous assessment methodologies to identify leaders who don't just meet the job description, but who elevate the entire organization.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 p-6 bg-navy-50 rounded-xl border-l-4 border-gold-500"
            >
              <p className="text-navy-500 font-semibold italic">
                "We don't just find candidates. We architect leadership teams that shape the future of your business."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ perspective: '1000px' }}
              >
                <TiltCard tiltAmount={8}>
                  <div className="bg-white rounded-xl border border-navy-100 shadow-md hover:shadow-xl transition-all duration-300 p-5 group h-full">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-500 group-hover:text-white transition-all">
                      <area.icon className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-navy-500 mb-1">{area.title}</h4>
                    <p className="text-sm text-navy-300 leading-relaxed">{area.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
