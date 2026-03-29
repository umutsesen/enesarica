# Enes Arıca Kişisel Site — Agent Context

> Personal brand website for Uzman Fizyoterapist Enes Arıca.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion (minimal, whileInView only) |
| Blog/Content | MDX (remark + remark-html) |
| Sitemap | next-sitemap |
| Font | Inter (next/font/google) |

## Design System

- **Primary dark:** navy-900 (`#1C1C2E`)
- **Accent:** copper-500 (`#B87333`)
- **Background:** warm-50 (`#FAFAF8`)
- **Buttons:** bg-navy-900 or bg-copper-500, rounded-lg
- **Hero:** Dark (bg-navy-900), copper kicker text, white heading
- **Section kickers:** `text-copper-500 text-xs font-semibold tracking-[0.2em] uppercase`
- **Cards:** rounded-2xl p-8 border border-gray-100

## Domain

enesarica.com (all canonical URLs use this)

## Phone

+90 544 662 12 45 (NOT 554)

## Pages

- `/` — Homepage (Hero, TrustBar, Specializations, AboutPreview, Testimonials, CTA, LatestArticles)
- `/hakkimda` — Biography, timeline, certifications, philosophy
- `/tedavi-alanlari` — 8 treatment listing
- `/tedavi-alanlari/[slug]` — MDX treatment detail + sidebar CTA + FAQ
- `/blog` — Article listing
- `/blog/[slug]` — MDX article + author card + related
- `/hasta-deneyimleri` — Testimonial grid
- `/iletisim` — Contact form + 4 branch cards

## Hard Rules

- All domain refs: `https://www.enesarica.com`
- Social links: instagram.com/fizyones, youtube.com/@fizyones, facebook.com/fizyones
- Author: "Fzt. Enes Arıca" (not "Fizyones")
- Branch names: Yalova Merkez, Yalova Çiftlikköy (NOT Çınarcık), İzmir Alsancak, İstanbul Bahçelievler (NOT Ataşehir)
- Floating buttons: right side (WhatsApp + Phone)
- No pill badges, no gradient text, no glow
- Prose styling in globals.css for MDX content

## Verification

```bash
npx next build   # Must succeed
```

## Content

- 8 treatment MDX files in content/tedaviler/
- 2 blog MDX files in content/blog/
- Treatment data in src/data/treatments.js
- Testimonials in src/data/testimonials.js
- Branches in src/data/branches.js
- Certifications in src/data/certifications.js
