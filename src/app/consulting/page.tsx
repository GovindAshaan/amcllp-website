import type { Metadata } from 'next'
import PermanentRedirect from '@/components/seo/PermanentRedirect'
import { SITE_URL } from '@/lib/seo-config'

const TARGET = '/prudent-headhunterz'

export const metadata: Metadata = {
  title: 'Consulting | Prudent Headhunterz',
  description: 'Executive search and HR consulting by Govind Ashan. Redirecting to the Prudent Headhunterz vertical.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}${TARGET}` },
}

export default function ConsultingPage() {
  return <PermanentRedirect to={TARGET} />
}