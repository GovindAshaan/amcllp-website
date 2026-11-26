import type { ReactNode } from 'react'
import { serializeJsonLd } from './serialize'

/**
 * Server-rendered JSON-LD <script> injector.
 * Escapes HTML-injectable characters so the payload is always valid
 * structured data and never able to break out of the script tag.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}

/** Convenience wrapper for rendering multiple JSON-LD nodes beside page content. */
export function JsonLdScripts({ data }: { data: unknown[] }): ReactNode {
  return (
    <>
      {data.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
    </>
  )
}