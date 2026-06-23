'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Building, Briefcase, Mail, Phone, MessageSquare, MessageCircle } from 'lucide-react'
import CTAButton from '../ui/CTAButton'
import AnimatedText from '../ui/AnimatedText'

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '', company: '', designation: '', email: '', phone: '', requirement: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-xl border border-navy-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
            >
              <Send className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-navy-500 mb-3">Thank You!</h3>
            <p className="text-navy-300 mb-6">
              Your consultation request has been received. Our team will reach out to you within 24 hours to discuss your hiring requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/919873512552?text=Hello%20AMCLLP,%20I%20just%20submitted%20a%20consultation%20request%20and%20would%20like%20to%20connect%20on%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 bg-green-500 hover:bg-green-600 text-white shadow-lg px-7 py-3 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Connect on WhatsApp
              </a>
              <CTAButton variant="secondary" onClick={() => setSubmitted(false)}>
                Submit Another Request
              </CTAButton>
            </div>
            <p className="text-sm text-navy-300">
              WhatsApp: <span className="font-semibold text-navy-500">+91-98735-12552</span>
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            Get Started
          </motion.span>
          <AnimatedText
            text="Let's Build Your Next High-Performing Team"
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

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-navy-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <User className="w-4 h-4 inline mr-1" /> Full Name *
                </label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <Building className="w-4 h-4 inline mr-1" /> Company Name *
                </label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-1" /> Designation *
                </label>
                <input type="text" name="designation" required value={formData.designation} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="CEO, CHRO, etc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" /> Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="john@company.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" /> Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="+91 98765 43210" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy-500 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" /> Hiring Requirement *
                </label>
                <select name="requirement" required value={formData.requirement} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white">
                  <option value="">Select a service...</option>
                  <option value="executive-search">Executive Search</option>
                  <option value="leadership-hiring">Leadership Hiring</option>
                  <option value="talent-acquisition">Talent Acquisition</option>
                  <option value="rpo">Recruitment Process Outsourcing</option>
                  <option value="hr-consulting">HR Consulting</option>
                  <option value="workforce-strategy">Workforce Strategy</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton variant="primary" size="lg" fullWidth className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </CTAButton>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://wa.me/919873512552?text=Hello%20AMCLLP,%20I%20would%20like%20to%20discuss%20our%20hiring%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Prefer WhatsApp? Connect directly at +91-98735-12552
              </a>
            </div>
            <p className="text-center text-xs text-navy-300 mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
