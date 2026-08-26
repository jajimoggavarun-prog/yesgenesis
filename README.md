# Yes Genesis Fintech — Website

Production Next.js 14 (App Router) + TypeScript + Tailwind implementation of
the Figma design at:
https://www.figma.com/design/lMoE2wzCMRuumOcINcvdFb/Untitled?node-id=1-2420

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS (utility classes only — no component library)
- No backend included. Forms call a clearly-marked placeholder function.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # eslint
```

The build has been verified in this environment: `npx tsc --noEmit`, `next
lint`, and `next build` all pass cleanly (21 routes, all static/SSG).

## ⚠️ Images — action required before shipping

This sandbox could not reach `figma.com` or any Figma asset host (network
egress here is restricted to an allowlist of package registries), so the
real image bytes could not be downloaded into `/public/assets` for you.

Every image in the site currently points at a **temporary Figma export URL**
(`https://www.figma.com/api/mcp/asset/<uuid>.png`). Figma guarantees these
links for roughly **7 days** after they were generated (today). After that
they will 404.

All image URLs are centralized in one file: **`lib/assets.ts`**.

To finish:

1. Open `lib/assets.ts` — every image the site uses is listed there, grouped
   by section (hero, stats, branches, partner logos, testimonials, awards
   gallery, footer).
2. Download each URL (they're plain HTTPS image links, so `curl` or a
   browser both work) and save it under `/public/assets/` with a sensible
   filename.
3. Replace the URL strings in `lib/assets.ts` with the local paths, e.g.:
   ```ts
   // before
   heroBackground: "https://www.figma.com/api/mcp/asset/c235....png",
   // after
   heroBackground: "/assets/hero-background.png",
   ```
4. Once every value in `lib/assets.ts` is a local `/assets/...` path, remove
   the `remotePatterns` entry for `www.figma.com` in `next.config.mjs` —
   it's only there to allow `next/image` to optimize the temporary URLs.

Nothing else in the codebase needs to change — every component imports
images from `lib/assets.ts`, never a hardcoded URL.

## CIBIL Score

Per the client's requirement, the "free CIBIL Score" feature has been fully
removed: it does not appear in the navigation, footer, or anywhere else, and
there is no CIBIL API stub or placeholder route.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, global <head> metadata
  page.tsx               Homepage (assembles all sections)
  sitemap.ts / robots.ts SEO
  loans/[slug]/          Personal / Business / Home / Mortgage / Car / Education loan pages
  emi-calculator/        Interactive EMI calculator
  contact/, apply/, dsa-partner/, about/, franchise/,
  privacy-policy/, terms-conditions/, disclaimer/
components/
  Navbar.tsx             Sticky header, Loans dropdown, mobile hamburger menu
  Hero.tsx
  StatsSection.tsx / StatCard.tsx        "Our Journey in Numbers"
  BranchesSection.tsx / BranchCard.tsx   10 branch cards
  PartnersSection.tsx / PartnerCard.tsx  Banking partner logos + stats bar
  TestimonialsSection.tsx / TestimonialCard.tsx
  AwardsSection.tsx      "Proud Moments of Recognition" + auto-scrolling gallery
  Footer.tsx
  EnquiryForm.tsx / FormField.tsx   Validated lead form (see "Forms" below)
  EmiCalculator.tsx
  Button.tsx, SectionHeading.tsx, SimplePageLayout.tsx
lib/
  data.ts     All site copy/content (nav links, stats, branches, testimonials, footer)
  assets.ts   All image URLs (see "Images" above)
```

## Forms

`EnquiryForm` includes full client-side validation (required fields, phone
format, email format) and is used on `/contact`, `/apply`, `/dsa-partner`,
`/franchise`, and every `/loans/[slug]` page.

**No backend is wired up.** The submit handler is isolated in
`components/EnquiryForm.tsx` as `submitEnquiryPlaceholder()` — replace that
one function with a real `fetch()` call to your API/CRM endpoint. It is
intentionally the only place a network call would need to be added.

## Responsive breakpoints

Built and spot-checked with Tailwind's default breakpoints at:
1440px / 1280px (lg-xl), 1024px / 768px (md-lg), and 390px / 375px (mobile).
All layouts use Flexbox/Grid — there is no absolute-positioned "pixel
pushing" carried over from the Figma export.

## Known follow-ups

- Swap temporary Figma image URLs for local assets (see above).
- Wire `EnquiryForm`'s placeholder submit handler to a real backend.
- Legal pages (privacy policy, terms, disclaimer) contain placeholder copy
  marked as such — replace with reviewed legal text before launch.
- Add real social links in `lib/data.ts` (`socialLinks`) — currently point
  at the generic platform homepages.
