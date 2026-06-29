'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  ChevronRight,
  Sparkles,
  Zap,
  ChevronDown,
  Filter,
} from 'lucide-react'

interface TalentRole {
  id: string
  title: string
  company: string
  location: string
  salaryRange: string
  type: 'Direct Hire' | 'Contract' | 'Executive Search'
  urgency: 'Critical' | 'High' | 'Standard'
  posted: string
  applicants: number
  tags: string[]
}

const talentRoles: TalentRole[] = [
  {
    id: '1',
    title: 'Senior AI / ML Architect',
    company: 'Stealth AI Startup (Series C)',
    location: 'Remote / Bengaluru',
    salaryRange: '₹65L - ₹1.2Cr',
    type: 'Direct Hire',
    urgency: 'Critical',
    posted: '2h ago',
    applicants: 12,
    tags: ['PyTorch', 'Kubernetes', 'LLMs', 'MLOps'],
  },
  {
    id: '2',
    title: 'Staff Rust Systems Engineer',
    company: 'High-Frequency Trading Firm',
    location: 'Mumbai / Singapore',
    salaryRange: '₹80L - ₹1.5Cr',
    type: 'Direct Hire',
    urgency: 'Critical',
    posted: '4h ago',
    applicants: 8,
    tags: ['Rust', 'Low-Latency', 'Distributed Systems'],
  },
  {
    id: '3',
    title: 'VP of Platform Engineering',
    company: 'Fortune 100 Fintech',
    location: 'Delhi NCR',
    salaryRange: '₹1Cr - ₹2Cr+',
    type: 'Executive Search',
    urgency: 'High',
    posted: '1d ago',
    applicants: 5,
    tags: ['Cloud Native', 'Kubernetes', 'Team Leadership'],
  },
  {
    id: '4',
    title: 'Principal Data Scientist',
    company: 'Leading E-Commerce Unicorn',
    location: 'Bengaluru / Hybrid',
    salaryRange: '₹50L - ₹90L',
    type: 'Direct Hire',
    urgency: 'High',
    posted: '3h ago',
    applicants: 21,
    tags: ['Deep Learning', 'NLP', 'Recommendation Systems'],
  },
  {
    id: '5',
    title: 'Head of Developer Experience',
    company: 'Global SaaS Platform',
    location: 'Remote (India)',
    salaryRange: '₹60L - ₹1Cr',
    type: 'Executive Search',
    urgency: 'Standard',
    posted: '6h ago',
    applicants: 14,
    tags: ['DevTools', 'CLI', 'Documentation', 'Open Source'],
  },
  {
    id: '6',
    title: 'Senior Security Engineer - Red Team',
    company: 'Cyber Security Unicorn',
    location: 'Bengaluru / Pune',
    salaryRange: '₹45L - ₹80L',
    type: 'Direct Hire',
    urgency: 'High',
    posted: '8h ago',
    applicants: 9,
    tags: ['Penetration Testing', 'Cloud Security', 'Zero Trust'],
  },
]

const urgencyColors = {
  Critical: 'bg-red-500/10 text-red-400 border-red-500/20',
  High: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Standard: 'bg-white/[0.03] text-white/40 border-white/[0.05]',
}

const typeColors = {
  'Direct Hire': 'bg-cyber-cyan-500/10 text-cyber-cyan-400 border-cyber-cyan-500/20',
  'Contract': 'bg-electric-indigo-500/10 text-electric-indigo-400 border-electric-indigo-500/20',
  'Executive Search': 'bg-white/[0.05] text-white/60 border-white/[0.08]',
}

const filters = ['All Roles', 'Engineering', 'AI/ML', 'Executive', 'Security', 'Infrastructure']

export default function LiveTalentFeed() {
  const [activeFilter, setActiveFilter] = useState('All Roles')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRoles = talentRoles.filter((role) => {
    if (activeFilter !== 'All Roles') {
      const filterMap: Record<string, string[]> = {
        Engineering: ['Staff Rust Systems Engineer', 'VP of Platform Engineering', 'Senior Security Engineer - Red Team', 'Head of Developer Experience'],
        'AI/ML': ['Senior AI / ML Architect', 'Principal Data Scientist'],
        Executive: ['VP of Platform Engineering', 'Head of Developer Experience'],
        Security: ['Senior Security Engineer - Red Team'],
        Infrastructure: ['VP of Platform Engineering'],
      }
      if (!filterMap[activeFilter]?.includes(role.title)) return false
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return (
        role.title.toLowerCase().includes(q) ||
        role.company.toLowerCase().includes(q) ||
        role.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return true
  })

  return (
    <section
      id="talent-feed"
      className="relative py-28 md:py-36 overflow-hidden bg-[#0A0F1A]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyber-cyan-500/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-indigo-500/4 rounded-full blur-[150px]" />
      </div>
      <div className="absolute inset-0 geo-grid opacity-20" />
      <div className="scan-line-overlay" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pane-light text-[10px] font-semibold tracking-[0.2em] uppercase text-cyber-cyan-400 mb-4"
              >
                <Zap className="w-3 h-3" />
                Live Intelligence Feed
              </motion.span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                Active talent radar
              </h2>
              <p className="text-white/30 text-base max-w-xl">
                Curated open roles from our elite client portfolio. Updated in real-time.
              </p>
            </div>

            {/* Live counter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 glass-pane-light rounded-xl px-5 py-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-cyan-500" />
              </span>
              <div>
                <p className="text-lg font-bold text-white">{talentRoles.length}</p>
                <p className="text-[10px] text-white/30 tracking-wider uppercase">Active Mandates</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              placeholder="Search roles by title, company, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111625]/40 backdrop-blur-xl border border-white/[0.05] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-electric-indigo-500/30 focus:ring-1 focus:ring-electric-indigo-500/20 transition-all duration-300"
            />
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap
                  transition-all duration-300 flex items-center gap-1.5
                  ${
                    activeFilter === filter
                      ? 'bg-electric-indigo-500/15 text-electric-indigo-400 border border-electric-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                      : 'bg-[#111625]/20 text-white/30 border border-white/[0.03] hover:border-white/[0.08] hover:text-white/50'
                  }
                `}
              >
                {filter === 'All Roles' && <Filter className="w-3 h-3" />}
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 mb-2">
          <div className="col-span-3 flex items-center gap-2">
            <Briefcase className="w-3 h-3 text-white/20" />
            <span className="text-[10px] text-white/20 tracking-wider uppercase font-semibold">Role & Company</span>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <MapPin className="w-3 h-3 text-white/20" />
            <span className="text-[10px] text-white/20 tracking-wider uppercase font-semibold">Location</span>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <DollarSign className="w-3 h-3 text-white/20" />
            <span className="text-[10px] text-white/20 tracking-wider uppercase font-semibold">Compensation</span>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] text-white/20 tracking-wider uppercase font-semibold">Type / Urgency</span>
          </div>
          <div className="col-span-3">
            <span className="text-[10px] text-white/20 tracking-wider uppercase font-semibold">Skills & Tags</span>
          </div>
        </div>

        {/* Talent List */}
        <div className="space-y-2">
          <AnimatePresence>
            {filteredRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(role.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative cursor-pointer"
              >
                {/* Main card */}
                <div
                  className={`
                    relative grid md:grid-cols-12 gap-4 px-4 md:px-6 py-5 rounded-2xl
                    transition-all duration-500 ease-out
                    ${
                      hoveredId === role.id
                        ? 'bg-[#111625]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(99,102,241,0.08)]'
                        : 'bg-[#111625]/20 border border-white/[0.03] hover:bg-[#111625]/40'
                    }
                  `}
                >
                  {/* Hover glow */}
                  <div
                    className={`
                      absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl
                      transition-opacity duration-500 bg-gradient-to-br from-electric-indigo-500/5 via-transparent to-cyber-cyan-500/5
                      pointer-events-none
                    `}
                  />

                  <div className="relative z-10 col-span-3">
                    <div className="flex items-start gap-3">
                      <div className={`
                        w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                        transition-all duration-500 ease-out
                        ${hoveredId === role.id
                          ? 'bg-gradient-to-br from-electric-indigo-500/20 to-cyber-cyan-500/10 border border-electric-indigo-500/20'
                          : 'bg-white/[0.03] border border-white/[0.05]'
                        }
                      `}>
                        <span className="text-xs font-bold text-white/40">
                          {role.title.split(' ').map(w => w[0]).slice(0, 2).join('')}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors truncate">
                          {role.title}
                        </p>
                        <p className="text-xs text-white/30 mt-0.5 truncate">{role.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 col-span-2 flex items-center">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-white/20 flex-shrink-0" />
                      <span className="text-xs text-white/40 truncate">{role.location}</span>
                    </div>
                  </div>

                  <div className="relative z-10 col-span-2 flex items-center">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3 h-3 text-white/20 flex-shrink-0" />
                      <span className="text-xs font-medium text-white/60">{role.salaryRange}</span>
                    </div>
                  </div>

                  <div className="relative z-10 col-span-2 flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-1 rounded-md border ${typeColors[role.type]}`}>
                      {role.type}
                    </span>
                    <span className={`text-[10px] font-medium px-2 py-1 rounded-md border ${urgencyColors[role.urgency]}`}>
                      {role.urgency}
                    </span>
                  </div>

                  <div className="relative z-10 col-span-3 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 min-w-0 flex-1">
                      {role.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-white/30 border border-white/[0.05] truncate"
                        >
                          {tag}
                        </span>
                      ))}
                      {role.tags.length > 3 && (
                        <span className="text-[10px] text-white/20 px-1">
                          +{role.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Reveal on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: hoveredId === role.id ? 1 : 0, x: hoveredId === role.id ? 0 : -5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 flex-shrink-0"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-white/20">
                        <Clock className="w-3 h-3" />
                        {role.posted}
                      </div>
                      <ChevronRight className="w-4 h-4 text-electric-indigo-400/60" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filteredRoles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Sparkles className="w-8 h-8 text-white/10 mx-auto mb-3" />
              <p className="text-sm text-white/20">No roles match your filter criteria</p>
            </motion.div>
          )}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-between"
        >
          <p className="text-xs text-white/15 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan-500/40" />
            Showing {filteredRoles.length} of {talentRoles.length} active mandates
          </p>
          <button className="text-xs text-electric-indigo-400/60 hover:text-electric-indigo-400 transition-colors flex items-center gap-1">
            View all mandates
            <ChevronDown className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}