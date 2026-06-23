# AMCLLP Website

**Ashans Management Consultancy LLP (AMCLLP)** — A premium single-page website for executive search, leadership hiring, and talent acquisition services.

> 🏷️ Tagline: *"Empowering Growth. Engineering Success."*

## Tech Stack

- **Next.js 15** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#0B1F3A` | Navy Blue — authority, trust |
| Accent | `#C8A24D` | Gold — excellence, achievement |
| Background | `#FFFFFF` | White — clarity |
| Text | `#0B1F3A` | Headings |
| Body | `#475569` | Body text |

## Sections

1. Sticky Navbar
2. Hero Section
3. Client Pain Points
4. About AMCLLP
5. Services (6 cards)
6. Industries Served (10 sectors)
7. Why Choose AMCLLP
8. Process Timeline (7 steps)
9. Testimonials (carousel)
10. Success Metrics (animated counters)
11. FAQ (10 accordion items)
12. Lead Generation Form
13. Contact Section
14. Footer

## SEO

- Full metadata (title, description, keywords, author)
- Open Graph tags
- Twitter Card
- Canonical URL
- Structured Data (Organization, LocalBusiness, WebSite)
- Semantic HTML with proper heading hierarchy

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

The static export is generated in the `out/` directory, ready for deployment to Vercel, Netlify, or any static hosting platform.

## Project Structure

```
amcllp-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout + SEO metadata
│   │   ├── page.tsx        # Single page composing all sections
│   │   └── globals.css     # Tailwind + custom styles
│   └── components/
│       ├── ui/             # Reusable UI components
│       └── sections/       # Page section components
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

This project is configured for **static export** (`output: 'export'`).

### Vercel
1. Push to GitHub
2. Import into Vercel
3. Set framework preset to **Next.js**
4. Deploy

### Static Hosting
1. Run `npm run build`
2. Upload the `out/` directory to your hosting provider

---

© 2025 Ashans Management Consultancy LLP. All rights reserved.
