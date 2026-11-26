import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import GlobalBackgroundCanvas from '@/components/three/GlobalBackgroundCanvas'
import PageShell from '@/components/layout/PageShell'

import { siteMetadata } from '@/lib/seo-config'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-display' })

export const metadata: Metadata = siteMetadata

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
