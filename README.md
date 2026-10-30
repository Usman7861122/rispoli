# Westside Interventional Pain & Physiatry

Astro (static) + React islands + Tailwind v4 + Framer Motion.

```
npm install
npm run dev     # http://localhost:4321
npm run check
npm run build
```

- Content lives in `src/data/*` (site, services, conditions, local, press). Pages only render data.
- All Book buttons use `site.bookingUrl`.
- React islands: Header, SpineRail, ContactForm, Reveal (`src/components/react`).
- Design tokens are placeholders in `src/styles/global.css`.
