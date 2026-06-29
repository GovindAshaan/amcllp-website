'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Globe, MapPin, Calendar, MessageCircle } from 'lucide-react'
import CTAButton from '../ui/CTAButton'
import AnimatedText from '../ui/AnimatedText'

export default function ContactSection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-3 block"
            >
              Contact Us
            </motion.span>
            <AnimatedText
              text="Get in Touch with AMCLLP"
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight"
              type="words"
              tag="h2"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 h-1 w-20 bg-gold-400 rounded-full origin-left"
            />

            <p className="text-navy-200 leading-relaxed mt-8 mb-10">
              Ready to transform your leadership team? Reach out to our consultants for a confidential discussion about your hiring needs. We respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'govind@amcllp.co.in', href: 'mailto:govind@amcllp.co.in' },
                { icon: Globe, label: 'Website', value: 'www.amcllp.co.in', href: 'https://www.amcllp.co.in' },
                { icon: MapPin, label: 'Location', value: 'India', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-300">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-gold-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            <div className="bg-navy-600/40 rounded-2xl p-8 border border-navy-400/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Quick Actions</h3>
              <p className="text-navy-200 mb-6">Choose the best way to connect with us:</p>
              <div className="space-y-4">
                <CTAButton href="tel:+910000000000" variant="primary" fullWidth>
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </CTAButton>
                <CTAButton href="https://wa.me/919873512552?text=Hello%20AMCLLP,%20I%20would%20like%20to%20connect." variant="outline-white" fullWidth>
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </CTAButton>
                <CTAButton href="#" variant="outline-white" fullWidth>
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Meeting
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
