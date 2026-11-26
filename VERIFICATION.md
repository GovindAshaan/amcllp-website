# Google Search Console Verification & Indexing Guide

This site is :material-goh: **statically exported** (`output: 'export'`). Everything you need
to verify ownership and get listed is already wired up. This doc tells you the exact clicks.

---

## 1. What is already in place

| Item | Location | Purpose |
| --- | --- | --- |
| HTML verification file | `public/googlef7f903df7ea6017d.html` | Serves at `/googlef7f903df7ea6017d.html` (survives static export) |
| Meta-tag token | `.env.local` → `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Injected into every `<head>` by Next metadata |
| `sitemap.xml` | `app/sitemap.ts` | All 7 routes, priorities + lastmod |
| `robots.txt` | `app/robots.ts` | Allows Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot |
| `llms.txt` | `public/llms.txt` | AI-search crawler summary |
| Submit + inspect | `scripts/submit-indexing.mjs` | Sitemap submission + URL Inspection + IndexNow |
| Live check | `scripts/verify-live.mjs` | Verifies deployed verification + crawl files |

---

## 2. Build & deploy

```bash
npm run build        # exports static site to /out
# deploy /out to your host (Netlify / Vercel / any static host)
```

After deploying, confirm the file is live:
- `https://www.amcllp.co.in/googlef7f903df7ea6017d.html` -> must return `200`
- `https://www.amcllp.co.in/` -> `<head>` contains
  `<meta name="google-site-verification" content="googlef7f903df7ea6017d">`

You can run the automated check:

```bash
npm run verify:live
```

---

## 3. Verify ownership in Google Search Console

1. Go to <https://search.google.com/search-console>
2. **Add property** -> enter **`https://www.amcllp.co.in/`** (URL-prefix) — or `amcllp.co.in` (domain)
3. Choose verification method. **Two options already work:**
   - **HTML file**: Google downloads `/googlef7f903df7ea6017d.html` (already live) — click **VERIFY**
   - **HTML tag**: the meta tag is already in `<head>` — click **VERIFY** and it will pass
4. Ensure `www.amcllp.co.in` is the resource added (canonical is `https://www.amcllp.co.in`).

> Tip: also add the bare-domain `sc-domain:amcllp.co.in` later for broader coverage.

---

## 4. Submit the sitemap & monitor indexing

Once verified, the script can submit + inspect programmatically:

```bash
# 1. Place your Google Service Account JSON at the repo root: google-service-account.json
#    (it is already git-ignored)
# 2. Add the SA email to Search Console as a user (Settings > Users & permissions)
# 3. (optional) set INDEXNOW_KEY and publish /<KEY>.txt
npm run seo:submit
```

The script:
1. Submits `https://www.amcllp.co.in/sitemap.xml`
2. Runs the **URL Inspection API** for all 7 routes and prints index status
3. Pings **IndexNow** (Bing + AI) for instant discovery

**Verify it works:**
- GSC > Sitemaps -> shows `sitemap.xml` as "Success"
- URL Inspection for any route -> returns coverage (INDEXED / CRAWLABLE / etc.)

---

## 5. Manual shortcuts (no script)

- In GSC, **URL Inspection** on `https://www.amcllp.co.in/` -> click **Request Indexing**
- In **Bing Webmaster Tools**, paste the sitemap URL
- In **IndexNow**, upload `https://www.amcllp.co.in/sitemap.xml`

---

## 6. Ranking expectation

The entity graph (Person `Govind Ashan` + `alternateName: ["Govind Ashaan"]`), single-h1 semantics,
founder bio (IIT Delhi, AMC LLP), and `sameAs` profiles give Google strong signals to rank
**"Govind Ashan"** / **"Govind Ashaan"** #1 for this brand. Verification unlocks Search Console data so
you can watch crawl, Core Web Vitals, and ranking progress.

---

### Checklist before you press VERIFY
- [ ] `npm run build` passes (site exported)
- [ ] `/out/googlef7f903df7ea6017d.html` exists
- [ ] `/out/index.html` contains the `google-site-verification` meta tag
- [ ] Site is deployed and the URL above is live
- [ ] `npm run verify:live` reports the verification file returns 200