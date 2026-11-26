'use client'

import { useEffect } from 'react'
import Link from 'next/link'

/* Client-side 301-equivalent redirect used for canonical legacy aliases in static export. */
export default function PermanentRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#070A13] text-white px-6">
      <div className="text-center">
        <p className="text-white/50">This page has moved permanently.</p>
        <Link href={to} className="inline-block mt-4 text-electric-indigo-400 hover:text-electric-indigo-300 underline">
          Continue to {to}
        </Link>
      </div>
    </main>
  )
}