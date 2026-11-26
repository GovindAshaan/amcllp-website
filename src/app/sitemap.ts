import type { MetadataRoute } from 'next'
import { SITE_URL, SITE_ROUTES } from '@/lib/seo-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path === '/' ? '' : r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}