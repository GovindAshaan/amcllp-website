import type { ReactNode } from 'react'
import Navbar from '@/components/ui/Navbar'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import Footer from '@/components/ui/Footer'
import ConversionRoutingForm from '@/components/sections/ConversionRoutingForm'

export default function VerticalPageLayout({ children, showRouting = true }: { children: ReactNode; showRouting?: boolean }) {
  return (
    <main className="min-h-screen bg-[#070A13]">
      <ScrollProgressBar />
      <Navbar />
      {children}
      {showRouting && <ConversionRoutingForm />}
      <Footer />
    </main>
  )
}
