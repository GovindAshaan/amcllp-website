/**
 * Serialize arbitrary structured data into a safe, single-line JSON string.
 * Angle brackets and ampersands are escaped so the output can never break
 * out of a <script type="application/ld+json"> block.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}