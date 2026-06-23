import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AMCLLP | Executive Search & Leadership Hiring in India',
  description: 'Ashans Management Consultancy LLP - Premier executive search, leadership hiring, and talent acquisition services for ambitious organizations. Build high-performing teams that drive business growth.',
  keywords: 'Executive Search Firm India, Leadership Hiring India, Recruitment Consultancy, Talent Acquisition Services, HR Consulting India, Executive Search, Headhunting, C-Suite Recruitment, Board Recruitment, Management Consulting',
  authors: [{ name: 'Ashans Management Consultancy LLP' }],
  creator: 'Ashans Management Consultancy LLP',
  publisher: 'Ashans Management Consultancy LLP',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.amcllp.co.in',
    siteName: 'AMCLLP - Ashans Management Consultancy LLP',
    title: 'AMCLLP | Executive Search & Leadership Hiring in India',
    description: 'Premier executive search, leadership hiring, and talent acquisition services for ambitious organizations.',
    images: [
      {
        url: 'https://www.amcllp.co.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AMCLLP - Executive Search and Leadership Hiring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMCLLP | Executive Search & Leadership Hiring in India',
    description: 'Premier executive search, leadership hiring, and talent acquisition services for ambitious organizations.',
    images: ['https://www.amcllp.co.in/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.amcllp.co.in',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ashans Management Consultancy LLP',
              alternateName: 'AMCLLP',
              url: 'https://www.amcllp.co.in',
              logo: 'https://www.amcllp.co.in/logo.png',
              description: 'Premier executive search, leadership hiring, and talent acquisition consultancy in India.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'info@amcllp.co.in',
                availableLanguage: ['English', 'Hindi'],
              },
              sameAs: [
                'https://www.linkedin.com/company/amcllp',
                'https://twitter.com/amcllp',
              ],
              areaServed: 'IN',
              serviceType: ['Executive Search', 'Leadership Hiring', 'Talent Acquisition', 'HR Consulting', 'Recruitment Process Outsourcing'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Ashans Management Consultancy LLP',
              image: 'https://www.amcllp.co.in/logo.png',
              '@id': 'https://www.amcllp.co.in',
              url: 'https://www.amcllp.co.in',
              telephone: '+91-0000000000',
              email: 'info@amcllp.co.in',
              priceRange: '₹₹₹',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '20.5937',
                longitude: '78.9629',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AMCLLP',
              url: 'https://www.amcllp.co.in',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.amcllp.co.in/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
