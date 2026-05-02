# Play Space Events — Claude Project Context

## Project Overview
**Play Space Events** is a single-page marketing website for an entertainment venue hire business offering games (snooker, pool, darts, PS5, table tennis, board games) for community groups, businesses, sports teams, and events.

- **Type**: Static single-page website — no backend, no build step
- **Entry point**: `index.html` at the project root
- **Assets**: `images/` folder at the project root
- **Source (reference only)**: `src/` — original TypeScript/React source; do not edit or run

---

## File Structure

```
events/
├── index.html          # The entire website — HTML + embedded CSS + embedded JS
├── images/             # All image and icon assets
│   ├── hero-*.jpg      # Hero collage photos
│   ├── service-*.jpg   # Service section photos
│   ├── Darts.png       # Service icon — darts header
│   ├── Playstation.png # Service icon — PS5 header
│   ├── TableTennis.png # Service icon — table tennis header
│   ├── Pool.png        # Service icon — pool/snooker header
│   ├── playspace-logo.png
│   └── Wave_0*.png     # Decorative wave assets
└── src/                # Original React/TS source (reference only)
```

**All code lives in `index.html`.** Do not create separate CSS or JS files unless explicitly asked.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Markup | HTML5 | Semantic, single file |
| Styles | Plain CSS (embedded `<style>`) | CSS custom properties, no preprocessors |
| Scripts | Vanilla JS (embedded `<script>`) | ES6+, no frameworks or jQuery |
| Fonts | Google Fonts CDN | Archivo Black (display), Inter (body) |
| Icons | Inline SVG | Lucide-style paths, no icon font CDN |
| Images | `images/` folder | PNG icons + JPG photos |

No npm. No Webpack. No Tailwind. No Bootstrap. No jQuery. Keep it that way.

---

## Brand Colors

All colors use `oklch()`. Always reference via CSS custom properties — never hardcode.

```css
:root {
  --navy:            oklch(0.22 0.10 275);   /* main hero/navbar bg */
  --navy-deep:       oklch(0.16 0.09 275);   /* pricing strip, dark accents */
  --brand-blue:      oklch(0.66 0.18 240);   /* blue service header, badges */
  --brand-blue-soft: oklch(0.94 0.04 240);   /* function hire card bg */
  --brand-lime:      oklch(0.78 0.22 135);   /* snooker header, CTA buttons, lime accents */
  --brand-lime-soft: oklch(0.95 0.06 135);   /* contact card bg */
  --brand-orange:    oklch(0.72 0.18 50);    /* table tennis header, discount badge */
  --brand-purple:    oklch(0.55 0.22 295);   /* PS5 header */
  --brand-yellow:    oklch(0.88 0.18 95);    /* collage badge ring */
  --border:          oklch(0.92 0.01 250);
  --muted-fg:        oklch(0.45 0.03 250);
}
```

---

## Typography

- **Display font** (`.fd` class): `"Archivo Black"` — used for all headings, labels, badges, and nav items
- **Body font**: `"Inter"` — used for body text and small copy
- Both loaded from Google Fonts CDN

---

## Page Sections

| Section | Nav ID | Description |
|---------|--------|-------------|
| Navbar | — | Sticky, navy bg, logo + desktop links + phone CTA + mobile hamburger |
| Hero | `#home` | Navy bg, left copy + right 2×2 image collage, confetti SVG accents, curved white divider |
| Perfect For | `#about` | 4 icon circles: Community Groups, Businesses, Sports Teams, Events |
| Services | `#services` | 4 cards (Snooker & Pool, Darts, PS5 Gaming, Table Tennis) + Board Games pill |
| Function & Contact | `#facilities` / `#contact` | Two-column: Function Hire card (blue-soft bg) + Call Us card (lime-soft bg) |
| Pricing Strip | — | Dark navy strip: hourly rate / party bookings / Book Now CTA |
| Footer | — | "Flexible hire options available" + copyright year (JS) |

---

## CSS Conventions

- **Container**: `.wrap` — `max-width: 80rem`, centered, `padding: 0 1rem` (2rem on md+)
- **Font utility**: `.fd` — applies `font-family: var(--font-display)`
- **Color utilities**: `.bg-blue`, `.bg-lime`, `.bg-orange`, `.bg-purple`
- **Breakpoints**: mobile-first — `640px`, `768px`, `1024px`
- All CSS is embedded in `<style>` inside `<head>`

---

## Key Content & Contact

- **Phone**: 07975 740702 — `href="tel:07975740702"`
- **Email**: info@playspaceevents.co.uk — `href="mailto:info@playspaceevents.co.uk"`
- **Pricing**: From £25/hr · Save 10% for 3+ hours

---

## What to Avoid

- Do not create separate `.css` or `.js` files unless explicitly asked
- Do not add Bootstrap, Tailwind, jQuery, or any CDN framework
- Do not use Font Awesome — use inline SVG for icons
- Do not reference files from `src/` in `index.html` — use `images/` only
- Do not use hardcoded color values — always use CSS custom properties
- Do not create `.md` documentation files unless explicitly asked
- Do not add comments that describe *what* the code does — only when the *why* is non-obvious
