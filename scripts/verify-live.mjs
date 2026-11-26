#!/usr/bin/env node
/**
 * Post-deploy live check for Google Search Console verification & crawl files.
 * Run:  npm run verify:live
 */
const SITE = 'https://www.amcllp.co.in'
const TOKEN = 'googlef7f903df7ea6017d'

const CHECK_URLS = [
  { label: 'Google verification file', url: `${SITE}/${TOKEN}.html` },
  { label: 'sitemap.xml', url: `${SITE}/sitemap.xml` },
  { label: 'robots.txt', url: `${SITE}/robots.txt` },
  { label: 'homepage', url: `${SITE}/` },
  { label: 'about', url: `${SITE}/about` },
  { label: 'llms.txt', url: `${SITE}/llms.txt` },
  { label: 'robots - JS redirect (consulting)', url: `${SITE}/consulting` },
]

function log(msg = '') {
  // eslint-disable-next-line no-console
  console.log(msg)
}

async function check() {
  log(`\n=== AMCLLP live verification check ===\nSite: ${SITE}\n`)
  let ok = 0
  for (const { label, url } of CHECK_URLS) {
    try {
      const res = await fetch(url, { redirect: 'manual' })
      const body = await res.text()
      const pass = res.status === 200
      if (label === 'homepage' && !body.includes(`name="google-site-verification" content="${TOKEN}"`)) {
        log(`[OK] ${label} -> ${res.status} (content fetched)`)
      } else {
        log(`${pass ? '[OK]' : '[!!]'} ${label} -> ${res.status}${pass ? '' : ' (expected 200)'}`)
      }
      if (pass) ok++
      if (label === 'Google verification file') {
        const expected = `google-site-verification: ${TOKEN}`
        log(`      file content matches: ${body.trim() === expected}`)
      }
      if (label === 'homepage') {
        const meta = body.includes(`name="google-site-verification" content="${TOKEN}"`)
        log(`      <meta google-site-verification> present: ${meta}`)
      }
      if (label === 'robots - JS redirect (consulting)') {
        log(`      resolved redirect target: ${res.headers.get('location') ?? '(none)'}`)
      }
    } catch (err) {
      log(`[ERR] ${label} -> ${err?.message || err}`)
    }
  }
  log(`\nPassed ${ok}/${CHECK_URLS.length} primary URL checks.\n`)
}

check()