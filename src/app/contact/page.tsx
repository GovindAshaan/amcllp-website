'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CalendarClock, Loader2, ExternalLink } from 'lucide-react'
import Navbar from '@/components/ui/Navbar'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import Footer from '@/components/ui/Footer'

const CALENDLY_URL = 'https://calendly.com/amcventure/amc-venture-meeting'
const WEB3FORMS_ACCESS_KEY = '42913500-91da-4ab1-b64d-8e971968643a'

const verticalOptions = [
  'Ashan AI Labs — ScaleAIHub / BookFulfillment OS',
  'Ashan AI Engineering — Custom AI / SaaS Build',
  'Prudent Headhunterz — Executive & Tech Hiring',
  'GrowthDesk — Performance Marketing & Funnels',
  'Not sure yet',
]

const contactChannels = [
  { Icon: Mail, label: 'Email', value: 'govind@amcllp.co.in', href: 'mailto:govind@amcllp.co.in' },
  { Icon: Phone, label: 'Phone', value: '+91-00000-00000', href: 'tel:+910000000000' },
  { Icon: MapPin, label: 'Headquarters', value: 'New Delhi, India', href: undefined },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    objective: verticalOptions[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const updateField = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      // Build Calendly URL with pre-filled name + email
      const calendlyURL = new URL(CALENDLY_URL)
      if (form.name.trim()) calendlyURL.searchParams.set('name', form.name)
      if (form.email.trim()) calendlyURL.searchParams.set('email', form.email)

      // Send to Web3Forms (emails ashanlearninghub@gmail.com)
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('company', form.company)
      formData.append('objective', form.objective)
      formData.append('message', form.message)
      formData.append('from_name', 'AMC Venture & Tech Group Website')
      formData.append('subject', `New Lead from ${form.name || 'Website Visitor'} — ${form.objective || 'Consultation Request'}`)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()

      if (!result.success) {
        setStatus('error')
        setError(result.message || 'Failed to send your request. Please try again.')
        return
      }

      setStatus('success')
      setSubmitted(true)

      // Open Calendly in new tab with pre-filled details
      setTimeout(() => {
        window.open(calendlyURL.toString(), '_blank', 'noopener,noreferrer')
      }, 1200)
    } catch {
      setStatus('error')
      setError('Could not reach the server. Please check your connection and try again.')
    }
  }

  return (
    <main className="min-h-screen bg-[#070A13]">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#070A13]">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-electric-indigo-500/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-venture-emerald-500/6 rounded-full blur-[140px]" />
        </div>
        <div className="absolute inset-0 geo-grid opacity-50" />

        <div className="container-custom relative z-10 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
            ← Back to the ecosystem
          </a>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white max-w-3xl mx-auto text-balance leading-tight">
            Book a <span className="text-gradient-venture">Strategy Call</span>
          </h1>
          <p className="mt-5 text-white/45 text-lg max-w-xl mx-auto">
            Tell us which part of your business you&apos;re scaling next and a specialist from the right division will
            reach out within one business day.
          </p>
        </div>
      </section>

      {/* Form + channels */}
      <section className="relative pb-24 overflow-hidden bg-[#070A13]">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact channels */}
            <div className="lg:col-span-2 space-y-4">
              {contactChannels.map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="w-11 h-11 rounded-xl bg-electric-indigo-500/15 border border-electric-indigo-500/25 flex items-center justify-center shrink-0">
                    <c.Icon className="w-5 h-5 text-electric-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-white/80 hover:text-white transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white/80">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-3xl border border-venture-emerald-500/25 bg-venture-emerald-500/10 p-10 text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-venture-emerald-500/20 border border-venture-emerald-500/30 flex items-center justify-center mb-5">
                    <CalendarClock className="w-6 h-6 text-venture-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">Request received.</h2>
                  <p className="text-white/50 mt-3 max-w-md mx-auto">
                    Thanks for reaching out — your details have been sent to the AMC venture team. We&apos;ve opened our
                    scheduling calendar so you can lock in your strategy call right away.
                  </p>
                  <a
                    href={`${CALENDLY_URL}?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-kinetic-primary inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base mt-6 group"
                  >
                    Open My Scheduling Calendar
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="text-xs text-white/35 mt-4">
                    If the calendar didn&apos;t open automatically, click the button above.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={updateField('name')}
                        className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-indigo-500/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={updateField('email')}
                        className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-indigo-500/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={updateField('company')}
                      className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-indigo-500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Primary Objective</label>
                    <select
                      value={form.objective}
                      onChange={updateField('objective')}
                      className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-indigo-500/40 transition-colors bg-[#0B101C]"
                    >
                      {verticalOptions.map((o) => (
                        <option key={o} value={o} className="bg-[#0B101C] text-white">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">How can we help?</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your project, search, or growth goal..."
                      value={form.message}
                      onChange={updateField('message')}
                      className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-indigo-500/40 transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-kinetic-primary w-full justify-center px-8 py-4 text-base gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending your request...
                      </>
                    ) : (
                      <>
                        Schedule Partner Consultation
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
