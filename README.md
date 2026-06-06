# Scoreify

Marketing landing page for Scoreify — trusted Meta ad accounts for LegitScript-certified
health & wellness brands (GLP-1, men's health, pharmacy, supplements). The page structure mirrors
base44.com: sticky navbar → hero with product visual → trust strip → stats → numbered feature
showcase → "levels of trust" → 3-step process → feature grid → account-health service section →
comparison table → FAQ → closing CTA → footer.

Tone is clinical and trust-forward to appeal to medical/founder audiences. All imagery and client
logos are intentionally left as blank placeholders.

## Stack

- Next.js (App Router) + React
- Tailwind CSS v3
- No external UI libraries; icons are inline SVG (`components/Icons.jsx`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

- `app/` — layout, global styles, single landing page (`page.js`)
- `components/` — one component per page section, composed in `app/page.js`

## Editing content

All copy lives inline in each section component. Swap blank placeholders (`<Placeholder />` in
`components/Hero.jsx`, the "Logo" tiles in `components/LogoStrip.jsx`) for real assets when available.

## Deploy

Deploy to Vercel under the **`misterfilips`** account (verify with `npx vercel whoami`).
