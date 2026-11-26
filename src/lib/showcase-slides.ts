// Hero slide configuration for the AMC Venture & Tech Group interactive 3D showcase.
// All colors are hex so they can be used directly as inline CSS colors and Three.js material values.

export type SlideCenterpiece = 'ai-core' | 'server-cube' | 'gold-rings' | 'funnel-turbine' | 'obsidian-core'
export type OrbitKey =
  | 'code'
  | 'chip'
  | 'doc'
  | 'node'
  | 'api'
  | 'cloud'
  | 'prism'
  | 'briefcase'
  | 'shield'
  | 'arrow'
  | 'chat'
  | 'dial'
  | 'connector'
  | 'ring'

export interface ShowcaseSlideAccent {
  from: string
  to: string
  // Emissive / glow color used by both the 3D scene and the CSS ambient overlays.
  glow: string
  // Soft text / caption accent color.
  textHex: string
}

export interface ShowcaseSlide {
  id: string
  index: number
  route: string
  shortName: string
  eyebrow: string
  giantWord: string
  caption: string
  cta: string
  ctaHref: string
  accent: ShowcaseSlideAccent
  centerpiece: SlideCenterpiece
  orbit: OrbitKey[]
}

export const heroSlides: ShowcaseSlide[] = [
  {
    id: 'ai-labs',
    index: 1,
    route: '/ai-labs',
    shortName: 'AI Labs',
    eyebrow: 'Ashan AI Labs · Venture Product Studio',
    giantWord: 'AILABS',
    caption: 'Autonomous SaaS Platforms: ScaleAIHub & BookFulfillment OS',
    cta: 'Explore AI Labs',
    ctaHref: '/ai-labs',
    accent: {
      from: '#5B4B9E',
      to: '#3E2F7A',
      glow: '#A595FF',
      textHex: '#C9BEFF',
    },
    centerpiece: 'ai-core',
    orbit: ['code', 'chip', 'doc', 'node', 'chip', 'node'],
  },
  {
    id: 'engineering',
    index: 2,
    route: '/engineering',
    shortName: 'Engineering',
    eyebrow: 'Ashan AI Engineering · Technology Studio',
    giantWord: 'SYSTEMS',
    caption: 'Custom Enterprise AI & Full-Stack Software Engineering',
    cta: 'Book Architecture Call',
    ctaHref: '/engineering',
    accent: {
      from: '#2E6F40',
      to: '#1B4327',
      glow: '#58E3A0',
      textHex: '#A5F3C0',
    },
    centerpiece: 'server-cube',
    orbit: ['api', 'cloud', 'prism', 'api', 'connector', 'prism'],
  },
  {
    id: 'talent',
    index: 3,
    route: '/prudent-headhunterz',
    shortName: 'Talent',
    eyebrow: 'Prudent Headhunterz · Executive Search',
    giantWord: 'TALENT',
    caption: 'Executive Search, Leadership Hiring & HR Strategy',
    cta: 'Hire Leadership',
    ctaHref: '/prudent-headhunterz',
    accent: {
      from: '#C87D28',
      to: '#8C5214',
      glow: '#FFBF4D',
      textHex: '#FFE2A8',
    },
    centerpiece: 'gold-rings',
    orbit: ['briefcase', 'shield', 'arrow', 'dial', 'briefcase', 'arrow'],
  },
  {
    id: 'growth',
    index: 4,
    route: '/growthdesk',
    shortName: 'Growth',
    eyebrow: 'GrowthDesk · Performance Marketing Engine',
    giantWord: 'GROWTH',
    caption: 'Done-For-You Funnels, Meta Ads & WhatsApp Automation',
    cta: 'Scale Revenue',
    ctaHref: '/growthdesk',
    accent: {
      from: '#2563EB',
      to: '#1E3A8A',
      glow: '#7CB3FF',
      textHex: '#BFDBFF',
    },
    centerpiece: 'funnel-turbine',
    orbit: ['chat', 'dial', 'connector', 'chat', 'ring', 'node'],
  },
]