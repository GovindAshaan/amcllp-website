import {
  SITE_URL,
  SITE_NAME,
  FOUNDER,
  ORGANIZATION,
} from './seo-config'

/* ==================================================================== */
/*  JSON-LD Entity Graph builders for AMC Venture & Tech Group           */
/* ==================================================================== */

export function personGraph() {
  return {
    '@type': 'Person',
    '@id': FOUNDER.id,
    name: FOUNDER.name,
    alternateName: FOUNDER.alternateName,
    url: SITE_URL,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.description,
    worksFor: { '@id': ORGANIZATION.id },
    alumniOf: FOUNDER.alumni.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    knowsAbout: FOUNDER.knowsAbout,
    address: {
      '@type': 'PostalAddress',
      addressLocality: FOUNDER.address.addressLocality,
      addressRegion: FOUNDER.address.addressRegion,
      addressCountry: FOUNDER.address.addressCountry,
    },
    sameAs: FOUNDER.sameAs,
  }
}

export function organizationGraph() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION.id,
    name: ORGANIZATION.name,
    alternateName: ORGANIZATION.alternateName,
    legalName: ORGANIZATION.legalName,
    url: SITE_URL,
    founder: { '@id': ORGANIZATION.founder.id },
    subOrganization: ORGANIZATION.subOrganizations.map((name) => ({ '@type': 'Organization', name })),
    knowsAbout: FOUNDER.knowsAbout,
  }
}

export function websiteGraph() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: {
      '@id': FOUNDER.id,
    },
  }
}

export function breadcrumbGraph(route: string, segments: { name: string; path: string }[]) {
  const items = segments.map((seg, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: seg.name,
    item: `${SITE_URL}${seg.path}`,
  }))
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${route === '/' ? '' : route}#breadcrumb`,
    itemListElement: items,
  }
}

/* Full unified @graph for the Homepage and About founder profile. */
export function entityGraph(route: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personGraph(),
      organizationGraph(),
      websiteGraph(),
      breadcrumbGraph(route, [
        { name: 'Home', path: '/' },
        { name: route === '/' ? 'Govind Ashan' : SITE_NAME, path: route },
      ]),
    ],
  }
}

/* Lightweight @graph for inner vertical pages (Organization + WebSite + Breadcrumb). */
export function innerPageGraph(route: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationGraph(),
      websiteGraph(),
      breadcrumbGraph(route, [
        { name: 'Home', path: '/' },
        { name, path: route },
      ]),
    ],
  }
}