#!/usr/bin/env node
/**
 * Automated search engine indexing for AMC Venture & Tech Group (amcllp.co.in).
 *
 * 1. Authenticates with ./google-service-account.json (Google Search Console API scope).
 * 2. Submits https://www.amcllp.co.in/sitemap.xml to Search Console.
 * 3. Runs the URL Inspection API for primary pages and prints an index table.
 * 4. Pings IndexNow (Bing + AI search) for instant discovery.
 *
 * Run:  npm run seo:submit
 */
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { google } from 'googleapis'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const KEY_FILE = path.join(__dirname, '..', 'google-service-account.json')

const SITE_URL = 'https://www.amcllp.co.in'
const SITE_DOMAIN = 'www.amcllp.co.in'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`
const KEY = process.env.INDEXNOW_KEY || 'PUT_YOUR_INDEXNOW_KEY_HERE'

const SITE_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/about`,
  `${SITE_URL}/ai-labs`,
  `${SITE_URL}/engineering`,
  `${SITE_URL}/consulting`,
  `${SITE_URL}/growth`,
  `${SITE_URL}/contact`,
]

function log(msg = '') {
  // eslint-disable-next-line no-console
  console.log(msg)
}

async function getAuthClient() {
  if (!existsSync(KEY_FILE)) {
    throw new Error(
      `Missing service account key at ${KEY_FILE}. Export your GSC service account JSON to this path.`
    )
  }
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  })
  return auth.getClient()
}

async function submitSitemap(webmasters) {
  const attempts = [process.env.GSC_SITE || `sc-domain:${SITE_DOMAIN}`, SITE_URL]
  for (const siteUrl of attempts) {
    try {
      await webmasters.sitemaps.submit({ siteUrl, feedpath: SITEMAP_URL })
      log(`[sitemap] submitted -> siteUrl=${siteUrl} feed=${SITEMAP_URL}`)
      return
    } catch (err) {
      log(`[sitemap] attempt failed for siteUrl=${siteUrl}: ${err?.message || err}`)
    }
  }
  throw new Error('Could not submit sitemap to any Search Console site resource.')
}

async function inspectUrls(client) {
  const rows = []
  for (const inspectionUrl of SITE_URLS) {
    try {
      const { data } = await client.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl,
          siteUrl: process.env.GSC_SITE || `sc-domain:${SITE_DOMAIN}`,
        },
      })
      const r = data?.inspectionResult || {}
      rows.push({
        url: inspectionUrl,
        indexStatus: r?.indexStatusResult?.verdict ?? 'n/a',
        coverage: r?.indexStatusResult?.coverageState ?? 'n/a',
        lastCrawl: r?.indexStatusResult?.lastCrawlTime ?? 'n/a',
        indexingState: r?.indexStatusResult?.indexingState ?? 'n/a',
      })
    } catch (err) {
      rows.push({ url: inspectionUrl, indexStatus: 'error', coverage: err?.message || 'error', lastCrawl: 'n/a' })
    }
  }
  return rows
}

async function pingIndexNow() {
  const body = {
    host: SITE_DOMAIN,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: SITE_URLS,
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  if (!res.ok && res.status !== 202) {
    throw new Error(`IndexNow responded ${res.status}: ${res.statusText}`)
  }
  log(`[indexnow] pinged ${SITE_URLS.length} URLs -> ${res.status} ${res.statusText}`)
}

async function main() {
  log(`\n=== AMCLLP automated indexing ===\nSite: ${SITE_URL}`)
  log(`Key file: ${existsSync(KEY_FILE) ? KEY_FILE : 'MISSING'}\n`)

  // 1 - 3: Google Search Console
  try {
    await getAuthClient()
    log('[auth] Google service account authenticated.\n')

    const webmasters = google.webmasters({ version: 'v3', auth: await getAuthClient() })
    await submitSitemap(webmasters)

    const sc = google.searchconsole({ version: 'v1', auth: await getAuthClient() })
    const rows = await inspectUrls(sc)
    log('\n=== URL Inspection API ===')
    const pad = (s, n = 46) => String(s).padEnd(n)
    log(pad('URL') + pad('Verdict', 18) + pad('Coverage', 22) + 'Last Crawl')
    for (const r of rows) {
      log(pad(`${r.url} (${r?.indexingState ?? ''})`) + pad(r.indexStatus, 18) + pad(r.coverage, 22) + (r.lastCrawl || 'n/a'))
    }
  } catch (err) {
    log(`\n[search-console] skipped: ${err?.message || err}`)
    log('Ensure ./google-service-account.json exists and the GSC property is added.')
  }

  // 4 - IndexNow (Bing + AI crawlers)
  try {
    await pingIndexNow()
  } catch (err) {
    log(`[indexnow] failed: ${err?.message || err}`)
    log('Set INDEXNOW_KEY env var and publish the key file at /<KEY>.txt on the host.')
  }

  log('\nDone.')
}

main()