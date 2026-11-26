'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'

const testimonials = [
  { id: 1, name: 'Vikram Mehta', role: 'Founder & CEO', company: 'TechVenture Solutions Pvt. Ltd.', content: 'AMCLLP transformed our leadership team within 90 days. Their understanding of our culture and strategic needs was exceptional. They did not just send resumes  -  they presented leaders who genuinely fit our vision. Our CTO placement has been transformational.', rating: 5 },
  { id: 2, name: 'Priya Sharma', role: 'CHRO', company: 'Global Pharma Industries', content: 'Working with AMCLLP on our C-suite search was a game-changer. Their rigorous assessment process and deep market insights gave us confidence in every candidate they presented. The quality of our leadership bench has improved significantly.', rating: 5 },
  { id: 3, name: 'Rajesh Kumar', role: 'Managing Director', company: 'SteelCorp Manufacturing', content: 'We had struggled to fill our VP Operations role for six months. AMCLLP identified the right candidate within three weeks  -  someone who was not even actively looking. Their network and approach are truly world-class.', rating: 5 },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => { setDirection(1); setActiveIndex((prev) => (prev + 1) % testimonials.length) }
  const prev = () => { setDirection(-1); setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length) }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  }

  return (
    <section id="testimonials" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3 block text-center"
          >
            Success Stories
          </motion.span>
          <AnimatedText
            text="What Our Clients Say"
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

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-navy-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />
              <div className="absolute -top-8 -right-8 opacity-5">
                <Quote className="w-40 h-40 text-gold-500" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                  </motion.div>
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-navy-500 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-500">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-navy-300">{testimonials[activeIndex].role}</p>
                  <p className="text-sm text-gold-500">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center hover:bg-navy-500 hover:text-white hover:border-navy-500 transition-all bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i) }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-gold-500 w-8' : 'bg-navy-200 hover:bg-navy-300 w-2.5'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center hover:bg-navy-500 hover:text-white hover:border-navy-500 transition-all bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
