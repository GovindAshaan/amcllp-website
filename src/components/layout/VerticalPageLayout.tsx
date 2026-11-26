import type { ReactNode } from 'react'
import ConversionRoutingForm from '@/components/sections/ConversionRoutingForm'

export default function VerticalPageLayout({ children, showRouting = true }: { children: ReactNode; showRouting?: boolean }) {
  return (
    <main className="min-h-screen">
      {children}
      {showRouting && <ConversionRoutingForm />}
      <div className="h-16" />
    </main>
  )
}
