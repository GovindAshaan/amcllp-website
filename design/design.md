# AMCLLP Website Design

## Global Concept
Premium single-page website for Ashans Management Consultancy LLP (AMCLLP), a high-end executive search and talent acquisition consulting firm. The design evokes the gravitas of McKinsey, Deloitte, and Korn Ferry — authoritative, clean, and trust-inspiring. The goal is lead generation from C-suite executives and founders.

## Color System
- Primary: Navy Blue `#0B1F3A` — authority, trust, premium feel
- Accent: Gold `#C8A24D` — excellence, achievement, warmth
- Background: White `#FFFFFF` — clarity, openness
- Text: Navy `#0B1F3A` for headings, Slate `#475569` for body
- Light surfaces: Navy-50 `#E8ECF1` for subtle backgrounds

## Typography
- Headings: Inter, semibold to bold (600-700), tight tracking (-0.02em)
- Body: Inter, regular (400), relaxed leading (1.7)
- Labels/CTAs: Inter, medium (500), uppercase for nav and buttons
- Scale: Hero 48-56px, H2 36-42px, H3 24-28px, Body 16-18px

## Animation Language
- Entrance: `fadeInUp` with staggered delays (0.1s per item)
- Scroll-triggered: IntersectionObserver at 10% threshold, one-shot triggers
- Hover: Subtle scale (1.02) and shadow elevation on cards
- Counters: Number counting animation over 2s on viewport entry
- Process: Connecting line draws as user scrolls through timeline
- Smooth scroll: `scroll-behavior: smooth` on html

## Responsive Strategy
- Mobile-first: Stack sections vertically, full-width cards
- Tablet: 2-column grids, centered content
- Desktop: Multi-column layouts, max-width 1280px container
- Navbar: Hamburger menu on mobile, full nav on desktop

## Section Map
1. Navbar (sticky, transparent → solid on scroll)
2. Hero (full-width, two-column on desktop, CTAs + trust indicators)
3. Pain Points (6-card grid, dark navy background)
4. About (text + image, mission-focused)
5. Services (6 service cards with icons, gold accent hover)
6. Industries (10-item grid, icon + label)
7. Why Choose (6 icon cards, alternating layout)
8. Process (7-step vertical timeline)
9. Testimonials (3 premium cards with quotes)
10. Metrics (4 animated counters)
11. FAQ (accordion, 10 items)
12. Lead Form (form + contact info side by side)
13. Contact (full-width, dark navy, contact details + CTAs)
14. Footer (multi-column links, social icons, copyright)

## Dependencies
- next, react, react-dom, typescript
- tailwindcss, postcss, autoprefixer
- framer-motion (scroll animations, entrance effects)
- lucide-react (icons)
- clsx, tailwind-merge (conditional classes)

## Component Architecture
- Shared: `Navbar`, `Footer`, `AnimatedCounter`, `SectionHeading`, `CTAButton`
- Sections: `HeroSection`, `PainPointsSection`, `AboutSection`, `ServicesSection`, `IndustriesSection`, `WhyChooseSection`, `ProcessSection`, `TestimonialsSection`, `MetricsSection`, `FAQSection`, `LeadFormSection`, `ContactSection`
- All sections accept `className` and use `id` props for anchor linking

## SEO
- Full metadata in layout.tsx
- Open Graph tags
- Structured data (LocalBusiness schema)
- Semantic HTML with proper heading hierarchy
- Alt text on all images
- Canonical URL

## File Structure
```
src/
  app/
    layout.tsx         — Root layout with metadata, fonts
    page.tsx           — Single page composing all sections
    globals.css        — Tailwind directives, custom utilities
  components/
    ui/                — Reusable UI primitives
      Navbar.tsx
      Footer.tsx
      SectionHeading.tsx
      AnimatedCounter.tsx
      CTAButton.tsx
    sections/          — Page sections
      HeroSection.tsx
      PainPointsSection.tsx
      AboutSection.tsx
      ServicesSection.tsx
      IndustriesSection.tsx
      WhyChooseSection.tsx
      ProcessSection.tsx
      TestimonialsSection.tsx
      MetricsSection.tsx
      FAQSection.tsx
      LeadFormSection.tsx
      ContactSection.tsx
```

## Performance Notes
- `next/image` with unoptimized for static export
- Lazy load below-fold sections with `whileInView` animations
- Minimal JS bundle, no heavy external libraries beyond Framer Motion
- CSS animations for simple effects, JS only for complex interactions
