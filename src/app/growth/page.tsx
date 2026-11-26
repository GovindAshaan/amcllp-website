import type { Metadata } from 'next'
import PermanentRedirect from '@/components/seo/PermanentRedirect'
import { SITE_URL } from '@/lib/seo-config'

const TARGET = '/growthdesk'

export const metadata: Metadata = {
  title: 'Growth | GrowthDesk',
  description: 'Performance marketing and growth engine by Govind Ashan. Redirecting to the GrowthDesk vertical.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}${TARGET}` },
}

export default function GrowthPage() {
  return <PermanentRedirect to={TARGET} />
}