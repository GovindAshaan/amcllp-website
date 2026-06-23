'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Monitor, Factory, Heart, Landmark, Truck, ShoppingCart, FileText, Rocket } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'

const industries = [
  { icon: Code, name: 'Technology', description: 'Software, hardware, and emerging tech companies.' },
  { icon: Cloud, name: 'SaaS', description: 'Cloud-based platforms and subscription businesses.' },
  { icon: Monitor, name: 'IT Services', description: 'System integrators, IT consultancies, and outsourcing firms.' },
  { icon: Factory, name: 'Manufacturing', description: 'Automotive, electronics, and industrial manufacturing.' },
  { icon: Heart, name: 'Healthcare', description: 'Hospitals, pharma, biotech, and medical devices.' },
  { icon: Landmark, name: 'BFSI', description: 'Banking, financial services, insurance, and fintech.' },
  { icon: Truck, name: 'Logistics', description: 'Supply chain, warehousing, and transportation.' },
  { icon: ShoppingCart, name: 'E-Commerce', description: 'Online retail, marketplaces, and D2C brands.' },
  { icon: FileText, name: 'Consulting', description: 'Management, strategy, and professional services.' },
  { icon: Rocket, name: 'Startups', description: 'Early-stage to growth-stage ventures across sectors.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 18, stiffness: 120 } },
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            Sector Expertise
          </motion.span>
          <AnimatedText
            text="Industries We Serve"
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
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-navy-50 hover:bg-navy-500 rounded-xl p-6 transition-colors duration-300 text-center cursor-default"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-gold-500/10 group-hover:bg-gold-500 flex items-center justify-center mb-4 transition-all duration-300">
                <industry.icon className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-500 group-hover:text-white mb-1 transition-colors">{industry.name}</h3>
              <p className="text-xs text-navy-300 group-hover:text-navy-200 transition-colors">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
