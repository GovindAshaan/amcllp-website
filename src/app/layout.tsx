import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import GlobalBackgroundCanvas from '@/components/three/GlobalBackgroundCanvas'
import PageShell from '@/components/layout/PageShell'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-display' })

export const metadata: Metadata = {
  title: 'AMC Venture & Tech Group | Build AI Products, Engineer Software, Hire Talent, Scale Revenue',
  description:
    'AMC Venture & Tech Group is an integrated technology and business acceleration house - proprietary AI products at Ashan AI Labs, custom software at Ashan AI Engineering, executive search via Prudent Headhunterz, and performance marketing at GrowthDesk.',
  keywords:
    'AI Products, Custom Software, SaaS Development, Agentic AI, Executive Search, Leadership Hiring, Performance Marketing, Funnels, Growth Agency, AMC Venture and Tech Group, AMCLLP',
  authors: [{ name: 'AMC Venture & Tech Group' }],
  creator: 'Ashans Management Consultancy LLP',
  publisher: 'AMC Venture & Tech Group',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://amcllp.com',
    siteName: 'AMC Venture & Tech Group',
    title: 'AMC Venture & Tech Group | Build • Hire • Scale',
    description:
      'Proprietary AI products, custom AI engineering, executive search, and growth marketing - all under one accelerated technology holding company.',
    images: [
      {
        url: 'https://amcllp.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AMC Venture & Tech Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMC Venture & Tech Group | Build • Hire • Scale',
    description:
      'Proprietary AI products, custom AI engineering, executive search, and growth marketing - all under one roof.',
    images: ['https://amcllp.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://amcllp.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-transparent">
        <ThemeProvider>
          <GlobalBackgroundCanvas />
          <PageShell>{children}</PageShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
