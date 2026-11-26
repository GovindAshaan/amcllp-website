// Central brand data for the four operating companies of AMC Venture & Tech Group.

export type AccentKey = 'indigo' | 'cyan' | 'emerald' | 'amber'

export type VerticalSlug = 'ai-labs' | 'engineering' | 'prudent-headhunterz' | 'growthdesk'

export interface Vertical {
  slug: VerticalSlug
  name: string
  shortName: string
  route: string
  tag: string
  headline: string
  subtext: string
  accent: AccentKey
  cta: string
  ctaHref: string
}

export interface AccentTheme {
  // Tailwind color handlers (kept as raw classes so Tailwind can statically scan them)
  text: string
  softText: string
  border: string
  bgSoft: string
  chipBg: string
  gradient: string
  glow: string
  iconBg: string
  bar: string
}

export const accents: Record<AccentKey, AccentTheme> = {
  indigo: {
    text: 'text-electric-indigo-400',
    softText: 'text-electric-indigo-300',
    border: 'border-electric-indigo-500/30',
    bgSoft: 'bg-electric-indigo-500/10',
    chipBg: 'bg-electric-indigo-500/15 border-electric-indigo-500/25',
    gradient: 'from-electric-indigo-500 to-electric-indigo-400',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.25)]',
    iconBg: 'bg-electric-indigo-500/20 border-electric-indigo-500/25',
    bar: 'bg-electric-indigo-400',
  },
  cyan: {
    text: 'text-venture-cyan-400',
    softText: 'text-venture-cyan-300',
    border: 'border-venture-cyan-500/30',
    bgSoft: 'bg-venture-cyan-500/10',
    chipBg: 'bg-venture-cyan-500/15 border-venture-cyan-500/25',
    gradient: 'from-venture-cyan-500 to-venture-cyan-400',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    iconBg: 'bg-venture-cyan-500/20 border-venture-cyan-500/25',
    bar: 'bg-venture-cyan-400',
  },
  emerald: {
    text: 'text-venture-emerald-400',
    softText: 'text-venture-emerald-300',
    border: 'border-venture-emerald-500/30',
    bgSoft: 'bg-venture-emerald-500/10',
    chipBg: 'bg-venture-emerald-500/15 border-venture-emerald-500/25',
    gradient: 'from-venture-emerald-500 to-venture-emerald-400',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    iconBg: 'bg-venture-emerald-500/20 border-venture-emerald-500/25',
    bar: 'bg-venture-emerald-400',
  },
  amber: {
    text: 'text-venture-amber-400',
    softText: 'text-venture-amber-300',
    border: 'border-venture-amber-500/30',
    bgSoft: 'bg-venture-amber-500/10',
    chipBg: 'bg-venture-amber-500/15 border-venture-amber-500/25',
    gradient: 'from-venture-amber-500 to-venture-amber-400',
    glow: 'shadow-[0_0_30px_rgba(249,115,22,0.25)]',
    iconBg: 'bg-venture-amber-500/20 border-venture-amber-500/25',
    bar: 'bg-venture-amber-400',
  },
}

export const verticals: Vertical[] = [
  {
    slug: 'ai-labs',
    name: 'Ashan AI Labs',
    shortName: 'AI Labs',
    route: '/ai-labs',
    tag: 'PROPRIETARY AI PRODUCT STUDIO',
    headline: 'Autonomous SaaS Built to Eliminate Operational Bottlenecks.',
    subtext:
      'Our internal venture lab designs, builds, and scales production-grade AI software products for high-impact commercial markets.',
    accent: 'indigo',
    cta: 'Explore Ashan AI Labs',
    ctaHref: '/ai-labs',
  },
  {
    slug: 'engineering',
    name: 'Ashan AI Engineering',
    shortName: 'AI Engineering',
    route: '/engineering',
    tag: 'CUSTOM AI & SOFTWARE ENGINEERING',
    headline: 'Production-Grade AI Systems, Custom SaaS, and Agentic Workflows.',
    subtext:
      'We turn complex operational problems into scalable, production-ready code  -  without bloated agency overhead.',
    accent: 'cyan',
    cta: 'View Engineering Services',
    ctaHref: '/engineering',
  },
  {
    slug: 'prudent-headhunterz',
    name: 'Prudent Headhunterz',
    shortName: 'Prudent Headhunterz',
    route: '/prudent-headhunterz',
    tag: 'PREMIER HR CONSULTING & EXECUTIVE SEARCH',
    headline: 'Precision Leadership Hiring Grounded in Real Domain Mastery.',
    subtext:
      'Technology and strategy only scale as fast as the leaders running them. Prudent Headhunterz identifies, vets, and closes top-tier engineering, product, and C-suite talent.',
    accent: 'emerald',
    cta: 'Partner With Prudent Headhunterz',
    ctaHref: '/prudent-headhunterz',
  },
  {
    slug: 'growthdesk',
    name: 'GrowthDesk',
    shortName: 'GrowthDesk',
    route: '/growthdesk',
    tag: 'PERFORMANCE MARKETING & FUNNEL ENGINE',
    headline: 'Predictable Customer Acquisition Engineered for Measurable ROI.',
    subtext:
      'GrowthDesk designs high-converting funnels, manages data-driven paid campaigns, and deploys automated follow-up systems that turn ad spend into qualified pipeline.',
    accent: 'amber',
    cta: 'Scale With GrowthDesk',
    ctaHref: '/growthdesk',
  },
]

export function getVerticalAccent(slug: string): AccentTheme {
  const vertical = verticals.find((v) => v.slug === slug)
  return accents[vertical?.accent ?? 'indigo']
}
