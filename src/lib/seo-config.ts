import type { Metadata } from 'next'

/* ==================================================================== */
/*  Single source of truth for AMC Venture & Tech Group SEO / entity    */
/* ==================================================================== */

export const SITE_URL = 'https://www.amcllp.co.in'
export const SITE_DOMAIN = 'www.amcllp.co.in'
export const SITE_NAME = 'AMC Venture & Tech Group'
export const SITE_LEGAL_NAME = 'Ashans Management Consultancy LLP'
export const SITE_ALT_NAME = 'AMCLLP'
export const SITE_LOCALE = 'en_IN'

export const CONTACT_EMAIL = 'govind@amcllp.co.in'
export const FOUNDED_YEAR = 2012

/* ------------------------------------------------------------------ */
/*  Founder entity (Govind Ashan)                                       */
/* ------------------------------------------------------------------ */
export const FOUNDER = {
  id: `${SITE_URL}/#govind-ashan`,
  name: 'Govind Ashan',
  alternateName: ['Govind Ashaan', 'askgovind183'],
  url: SITE_URL,
  jobTitle: 'Founder & Managing Partner',
  description:
    'Govind Ashan is the Founder & Managing Partner of AMC Venture & Tech Group (amcllp.co.in) and Ashans Management Consultancy LLP (founded 2012), an IIT Delhi alumnus, engineer, and the author behind ScaleAIHub and The Job Offer Blueprint.',
  alumni: ['Indian Institute of Technology Delhi (IIT Delhi)', 'Guru Gobind Singh Indraprastha University (GGSIPU)'],
  knowsAbout: [
    'Artificial Intelligence',
    'SaaS Architecture',
    'Executive Recruitment',
    'Salary Negotiation',
    'Marketing Funnels',
    'Enterprise Software Engineering',
  ],
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  // ==== sameAs profile URLs (socials / author / product graph) ====
  sameAs: [
    'https://github.com/GovindAshaan',
    'https://scaleaihub.in',
    'https://www.linkedin.com/in/govindashan',
    'https://www.youtube.com/@govindashan',
    'https://x.com/govindashan',
    'https://www.amazon.in/dp/B0D5XXXXXX', // Amazon Author: The Job Offer Blueprint (placeholder)
  ],
} as const

/* ------------------------------------------------------------------ */
/*  Organization entity                                                 */
/* ------------------------------------------------------------------ */
export const ORGANIZATION = {
  id: `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  url: SITE_URL,
  legalName: SITE_LEGAL_NAME,
  founder: FOUNDER,
  subOrganizations: [
    'Ashan AI Labs',
    'Ashan AI Engineering',
    'Prudent Headhunterz',
    'GrowthDesk',
    'Ashans Management Consultancy LLP',
    'TDPro IT Services Pvt. Ltd.',
  ],
} as const

/* ------------------------------------------------------------------ */
/*  Broadcast routes (used by sitemap + indexing)                       */
/* ------------------------------------------------------------------ */
export interface SeoRoute {
  path: string
  title: string
  description: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastModified: string
}

export const SITE_ROUTES: SeoRoute[] = [
  {
    path: '/',
    title: 'Govind Ashan | Founder, AMC Venture & Tech Group',
    description:
      'Govind Ashan, founder of AMC Venture & Tech Group (amcllp.co.in), builds AI products, engineering, executive search, and growth under one roof.',
    priority: 1.0,
    changeFrequency: 'daily',
    lastModified: '2026-11-26',
  },
  {
    path: '/about',
    title: 'About Govind Ashan & AMC Venture & Tech Group',
    description:
      'Govind Ashan, Founder & Managing Partner of AMC Venture & Tech Group. Learn the story, the verticals, and the leadership profile behind amcllp.co.in.',
    priority: 0.9,
    changeFrequency: 'weekly',
    lastModified: '2026-11-26',
  },
  {
    path: '/ai-labs',
    title: 'Ashan AI Labs | AI Products by Govind Ashan',
    description:
      'Ashan AI Labs builds commercial AI by Govind Ashan: ScaleAIHub, BookFulfillment OS, and autonomous SaaS platforms under amcllp.co.in.',
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified: '2026-11-26',
  },
  {
    path: '/engineering',
    title: 'Ashan AI Engineering | Custom AI & SaaS',
    description:
      'Govind Ashan, Ashan AI Engineering: custom enterprise AI, SaaS, and full-stack software engineering delivered under amcllp.co.in.',
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified: '2026-11-26',
  },
  {
    path: '/prudent-headhunterz',
    title: 'Prudent Headhunterz | Executive Search by Govind Ashan',
    description:
      'Govind Ashan, Prudent Headhunterz: executive search, leadership hiring, and HR strategy for AMC Venture & Tech Group clients.',
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified: '2026-11-26',
  },
  {
    path: '/growthdesk',
    title: 'GrowthDesk | Growth Engine by Govind Ashan',
    description:
      'GrowthDesk by Govind Ashan builds done-for-you funnels, Meta ads, and WhatsApp automation to scale revenue for amcllp.co.in clients.',
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified: '2026-11-26',
  },
  {
    path: '/contact',
    title: 'Contact Govind Ashan & AMC Venture & Tech Group',
    description:
      'Contact Govind Ashan and the AMC Venture & Tech Group team at amcllp.co.in. Book a strategy call with the right division.',
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: '2026-11-26',
  },
]

export const SITE_PATHS = SITE_ROUTES.map((r) => r.path)

/* ------------------------------------------------------------------ */
/*  Base site metadata (root layout)                                    */
/* ------------------------------------------------------------------ */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_ROUTES[0].title,
    template: '%s | Govind Ashan - AMC Venture & Tech Group',
  },
  description: SITE_ROUTES[0].description,
  applicationName: SITE_NAME,
  authors: [{ name: FOUNDER.name, url: FOUNDER.url }],
  creator: SITE_LEGAL_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Govind Ashan',
    'Govind Ashaan',
    'askgovind183',
    'AMC Venture & Tech Group',
    'amcllp',
    'amcllp.co.in',
    'Artificial Intelligence',
    'SaaS Development',
    'Executive Search',
    'Growth Marketing',
    'Ashan AI Labs',
    'Ashan AI Engineering',
    'Prudent Headhunterz',
    'GrowthDesk',
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    nocache: false,
  },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_ROUTES[0].title,
    description: SITE_ROUTES[0].description,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Govind Ashan - AMC Venture & Tech Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_ROUTES[0].title,
    description: SITE_ROUTES[0].description,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: { email: false, address: false, telephone: false },
  other: {
    'theme-color': '#0A0F1A',
  },
}

export interface PageMetaInput {
  path: string
  title?: string
  description?: string
  type?: 'website' | 'article' | 'profile'
}

/* Per-route metadata builder: absolute canonical, OG, Twitter, robots, self-referencing. */
export function pageMeta({ path, title, description, type = 'website' }: PageMetaInput): Metadata {
  const route = SITE_ROUTES.find((r) => r.path === path) ?? SITE_ROUTES[0]
  const finalTitle = title ?? route.title
  const finalDesc = (description ?? route.description).slice(0, 158)
  const url = `${SITE_URL}${path === '/' ? '' : path}`

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: { canonical: new URL(url) },
    openGraph: {
      type,
      locale: SITE_LOCALE,
      url: new URL(url),
      siteName: SITE_NAME,
      title: finalTitle,
      description: finalDesc,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: `${finalTitle} - ${SITE_NAME}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDesc,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  }
}