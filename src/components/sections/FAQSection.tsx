'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'

const faqs = [
  { question: 'How does the executive search process work?', answer: 'Our executive search process begins with a deep discovery session to understand your business strategy, culture, and role requirements. We then conduct comprehensive market research, proactively reach out to qualified candidates, conduct rigorous assessments, and manage the entire interview and offer process until successful placement.' },
  { question: 'What is the typical timeline for a leadership search?', answer: 'Most executive searches are completed within 60-90 days from kickoff to offer acceptance. The timeline depends on role complexity, industry, and location. We provide weekly progress updates and can accommodate urgent requirements with expedited processes.' },
  { question: 'How do you charge for your services?', answer: 'We offer flexible fee structures including retained search, contingency search, and project-based pricing. For executive and leadership roles, we typically work on a retained basis with a percentage of annual compensation. We provide transparent fee proposals upfront with no hidden costs.' },
  { question: 'Do you offer a replacement guarantee?', answer: 'Yes, all our placements come with a replacement guarantee. For executive searches, we offer a 6-month guarantee. If the placed candidate leaves or is terminated for cause within the guarantee period, we will conduct a replacement search at no additional fee.' },
  { question: 'Can you handle confidential searches?', answer: 'Absolutely. We specialize in confidential and discreet searches for sensitive roles, including replacements, new market entries, and competitive hires. We use non-disclosure agreements, blind profiles, and secure communication channels to protect your interests.' },
  { question: 'What industries do you specialize in?', answer: 'We have deep expertise across Technology, SaaS, IT Services, Manufacturing, Healthcare, BFSI, Logistics, E-Commerce, and Consulting. Our practice leaders have dedicated experience in each sector, ensuring industry-specific knowledge and networks.' },
  { question: 'Do you work with startups and SMEs?', answer: 'Yes, we work with organizations of all sizes — from early-stage startups to Fortune 500 companies. We tailor our approach based on your stage, budget, and hiring needs, offering scalable solutions for growing companies.' },
  { question: 'What is your candidate assessment process?', answer: 'Our assessment includes competency-based interviews, psychometric evaluations, reference checks, and cultural fit analysis. We use validated tools and structured interviews to ensure objective evaluation. Every candidate is assessed against your specific success criteria.' },
  { question: 'How do you ensure cultural fit?', answer: 'Cultural fit is integral to our process. We conduct organizational culture audits, develop detailed cultural fit criteria, and use behavioral interviews to assess alignment. We also involve key stakeholders in the evaluation process to ensure consensus.' },
  { question: 'Can you help with workforce planning and strategy?', answer: 'Yes, our Workforce Strategy consulting helps organizations plan for future talent needs, build succession pipelines, optimize organizational structure, and develop employer branding strategies. We take a long-term view of your talent ecosystem.' },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            FAQ
          </motion.span>
          <AnimatedText
            text="Frequently Asked Questions"
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

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-navy-100 rounded-xl overflow-hidden bg-white hover:border-navy-200 transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="font-semibold text-navy-500 text-left">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-navy-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 text-navy-300 leading-relaxed pl-13">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
