import type { SlideCenterpiece, OrbitKey } from './showcase-slides'

// Route-aware brand theming for the AMC Venture & Tech Group flagship experience.
// Colors are hex so they can be used directly as CSS colors and Three.js material values.

export type RouteThemeKey =
  | 'home'
  | 'ai-labs'
  | 'engineering'
  | 'prudent-headhunterz'
  | 'growthdesk'
  | 'about'
  | 'contact'

export interface SiteTheme {
  key: RouteThemeKey
  name: string
  from: string
  to: string
  glow: string
  text: string
  giantWord: string
  centerpiece: SlideCenterpiece
  orbits: OrbitKey[]
}

const obsidianCenter: SlideCenterpiece = 'obsidian-core'

export const routeThemes: Record<string, SiteTheme> = {
  '/': {
    key: 'home',
    name: 'Group',
    from: '#1B2140',
    to: '#070A13',
    glow: '#A595FF',
    text: '#C9BEFF',
    giantWord: 'AMC',
    centerpiece: obsidianCenter,
    orbits: ['node', 'ring', 'prism', 'shield'],
  },
  '/ai-labs': {
    key: 'ai-labs',
    name: 'AI Labs',
    from: '#5B4B9E',
    to: '#3E2F7A',
    glow: '#A595FF',
    text: '#C9BEFF',
    giantWord: 'AILABS',
    centerpiece: 'ai-core',
    orbits: ['code', 'chip', 'doc', 'node'],
  },
  '/engineering': {
    key: 'engineering',
    name: 'Engineering',
    from: '#2E6F40',
    to: '#1B4327',
    glow: '#58E3A0',
    text: '#A5F3C0',
    giantWord: 'SYSTEMS',
    centerpiece: 'server-cube',
    orbits: ['api', 'cloud', 'prism', 'connector'],
  },
  '/prudent-headhunterz': {
    key: 'prudent-headhunterz',
    name: 'Talent',
    from: '#C87D28',
    to: '#8C5214',
    glow: '#FFBF4D',
    text: '#FFE2A8',
    giantWord: 'TALENT',
    centerpiece: 'gold-rings',
    orbits: ['briefcase', 'shield', 'arrow', 'dial'],
  },
  '/growthdesk': {
    key: 'growthdesk',
    name: 'Growth',
    from: '#2563EB',
    to: '#1E3A8A',
    glow: '#7CB3FF',
    text: '#BFDBFF',
    giantWord: 'GROWTH',
    centerpiece: 'funnel-turbine',
    orbits: ['chat', 'dial', 'connector', 'ring'],
  },
  '/about': {
    key: 'about',
    name: 'About',
    from: '#171B27',
    to: '#0A0E16',
    glow: '#A595FF',
    text: '#CBCFE4',
    giantWord: 'AMC',
    centerpiece: obsidianCenter,
    orbits: ['ring', 'prism', 'shield', 'node'],
  },
  '/contact': {
    key: 'contact',
    name: 'Contact',
    from: '#1A1E2B',
    to: '#0A0E16',
    glow: '#FFBF4D',
    text: '#EAE4F2',
    giantWord: 'CONNECT',
    centerpiece: obsidianCenter,
    orbits: ['chat', 'dial', 'node', 'ring'],
  },
}

export const fallbackTheme: SiteTheme = routeThemes['/']

export function routeKeyForPath(pathname: string): string {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (routeThemes[p]) return p
  if (p.startsWith('/ai-labs')) return '/ai-labs'
  if (p.startsWith('/engineering')) return '/engineering'
  if (p.startsWith('/prudent-headhunterz')) return '/prudent-headhunterz'
  if (p.startsWith('/growthdesk')) return '/growthdesk'
  if (p.startsWith('/about')) return '/about'
  if (p.startsWith('/contact')) return '/contact'
  return '/'
}

export function themeForRoute(pathname: string): SiteTheme {
  return routeThemes[routeKeyForPath(pathname)] ?? fallbackTheme
}