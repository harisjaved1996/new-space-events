---
name: frontend-design
description: Design and update UI for Play Space Events — a static single-page website (index.html) built with plain HTML, embedded CSS, and vanilla JS. Uses Archivo Black display font, oklch brand colors (navy, lime, blue, orange, purple), inline SVGs for icons, and images from the images/ folder. Use this skill whenever the user asks to design, build, create, redesign, improve, or style any section, component, or layout of the website.
disable-model-invocation: false
---

# Play Space Events — Frontend Design Skill

You are updating `index.html` — a single self-contained file with all HTML, CSS (in `<style>`), and JS (in `<script>`). No separate files, no frameworks, no build tools.

---

## Stack

| Layer | Detail |
|-------|--------|
| HTML | Semantic HTML5, single file (`index.html`) |
| CSS | Embedded `<style>` — CSS custom properties, oklch colors, mobile-first |
| JS | Embedded `<script>` — ES6 vanilla, no libraries |
| Fonts | Google Fonts CDN: `Archivo Black` (display) + `Inter` (body) |
| Icons | Inline SVG only — Lucide-compatible paths |
| Images | `images/` folder — JPG photos + PNG icon assets |

---

## Color Tokens

Always use these CSS custom properties — never hardcode color values:

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `oklch(0.22 0.10 275)` | Navbar bg, hero bg |
| `--navy-deep` | `oklch(0.16 0.09 275)` | Pricing strip, deep accents |
| `--brand-blue` | `oklch(0.66 0.18 240)` | Darts header, blue badges |
| `--brand-blue-soft` | `oklch(0.94 0.04 240)` | Function hire card bg |
| `--brand-lime` | `oklch(0.78 0.22 135)` | Snooker header, CTA buttons, nav phone button |
| `--brand-lime-soft` | `oklch(0.95 0.06 135)` | Contact card bg |
| `--brand-orange` | `oklch(0.72 0.18 50)` | Table tennis header, discount badge |
| `--brand-purple` | `oklch(0.55 0.22 295)` | PS5 gaming header |
| `--brand-yellow` | `oklch(0.88 0.18 95)` | Collage badge ring outline |
| `--border` | `oklch(0.92 0.01 250)` | Dividers, outlines |
| `--muted-fg` | `oklch(0.45 0.03 250)` | Muted text (footer copyright) |

Color utility classes: `.bg-blue`, `.bg-lime`, `.bg-orange`, `.bg-purple`

---

## Typography

- **Display (`.fd`)**: `font-family: "Archivo Black", "Inter", system-ui, sans-serif; letter-spacing: -0.01em`
  - Applied to: all headings, nav links, badges, labels, card titles, button text
- **Body**: `font-family: "Inter", system-ui, sans-serif`
  - Applied to: paragraph text, small copy
- Font scale: `0.75rem` → `0.875rem` → `1rem` → `1.25rem` → `1.5rem` → `2.75rem` → `5rem`
- All headings UPPERCASE with `letter-spacing: 0.04em–0.25em`

---

## Layout System

- **Wrapper**: `.wrap` — `max-width: 80rem`, auto-centered, `padding: 0 1rem` (↑ `2rem` at 768px+)
- **Breakpoints**: `640px`, `768px`, `1024px` (mobile-first)
- **Grid gaps**: `0.5rem`–`1.5rem`
- **Border radius**: `0.625rem` (cards) · `0.75rem` (large cards) · `9999px` (pills/circles)

---

## Section Reference

### Navbar (`.site-header`)
- `position: sticky; top: 0; z-index: 50`
- Background: `color-mix(in oklch, var(--navy) 95%, transparent)` + `backdrop-filter: blur(8px)`
- Logo: text-based (`PLAY SPACE EVENTS` with lime `L`)
- Desktop links: hidden below 1024px, shown with `.nav-links`
- Phone CTA: `var(--brand-lime)` pill, hidden below 768px
- Mobile: hamburger button toggles `.mobile-drawer.open` via JS

### Hero (`#home`)
- Background: `var(--navy)`, white text
- Layout: 1-col mobile → 2-col desktop (left: copy, right: image collage)
- Title: `.hero-title.fd` — `PLAY. / SPACE. / EVENTS.` with lime accents and blue EVENTS badge
- Collage: `.collage-grid` — 2×2 grid, fixed row heights (`190px`), images rotated ±3°, `outline: 3px solid #fff`
- Badge: `.collage-badge` — circular, `var(--brand-blue)` bg, `var(--brand-yellow)` outline, centered overlay
- Confetti: absolute-positioned inline SVGs (plus signs, circles, squiggles) in navy/lime/orange
- Bottom divider: SVG curved white shape (`M0,80 C360,0 1080,0 1440,80`)

**Hero images** (from `images/`):
- `hero-pool-table.jpg` (top-left, rotate -3°)
- `hero-dartboard.jpg` (top-right, rotate +3°)
- `hero-carrom.jpg` (bottom-left, rotate +3°)
- `hero-snooker.jpg` (bottom-right, rotate -3°)

### Perfect For (`#about`)
- 4-item grid: 2-col mobile → 4-col desktop with dividers
- Each item: colored circle icon (80×80px) + uppercase label
- Icon colors: blue (community), lime (businesses), orange (sports), purple (events)
- Section header uses squiggle SVG decorators flanking the title

### Services (`#services`)
- Grid: 2-col mobile → 4-col desktop, `gap: 0.75rem` / `1rem`
- `.svc-card`: `border-radius: 0.75rem`, `box-shadow`, hover lift
- `.svc-head`: colored bar with PNG icon + title (`.fd`)
- `.svc-img-wrap img`: `height: 180px` (↑ `200px` sm, `190px` lg), `object-fit: cover`

**Service card colors & icons**:
| Card | Header color | Icon |
|------|-------------|------|
| SNOOKER & POOL | `var(--brand-lime)` | Black "8" ball div |
| DARTS | `var(--brand-blue)` | `images/Darts.png` |
| PS5 GAMING | `var(--brand-purple)` | `images/Playstation.png` |
| TABLE TENNIS | `var(--brand-orange)` | `images/TableTennis.png` |

**Service images**: `images/service-snooker.jpg`, `images/service-darts.jpg`, `images/service-ps5.jpg`, `images/service-tabletennis.jpg`

Board Games pill: centered below grid, white bg, `box-shadow`, dice SVG icon + `.fd` label

### Function & Contact (`#facilities` / `#contact`)
- 2-col desktop grid
- `.fn-card`: `var(--brand-blue-soft)` bg — checklist items with lime checkmark SVGs + balloons SVG decor
- `.ct-card`: `var(--brand-lime-soft)` bg — phone + email links with lime icon circles + paddle SVG decor

### Pricing Strip
- `.pricing-strip`: 1-col mobile → 3-col desktop, `var(--navy-deep)` bg, `border-radius: 1rem`
- Block 1: "HOURLY RATE" + `var(--brand-blue)` badge "FROM £25 PER HOUR"
- Block 2: Party popper icon + "PARTY / BLOCK BOOKINGS" + `var(--brand-orange)` badge
- Block 3: `.pr-cta` — `var(--brand-lime)` button, calendar SVG + "BOOK NOW / 07975 740702"

### Footer (`.site-footer`)
- Two lime dots flanking "FLEXIBLE HIRE OPTIONS AVAILABLE" (`.fd`)
- Copyright year set dynamically via JS: `document.getElementById('footerYear').textContent`

---

## JavaScript (Embedded)

Keep JS minimal — currently only two functions:

```js
// Mobile menu toggle
menuBtn.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  iMenu.style.display  = open ? 'none'  : 'block';
  iClose.style.display = open ? 'block' : 'none';
});

// Close on nav link click
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => { /* close drawer */ });
});

// Footer year
document.getElementById('footerYear').textContent =
  `© ${new Date().getFullYear()} Play Space Events. All rights reserved.`;
```

---

## Design Principles

- **Mobile-first**: default styles target mobile, `@media (min-width: ...)` enhances upward
- **No magic numbers**: use `rem` units, reference tokens for colors, stay on an 8px rhythm
- **Inline SVG for icons**: copy Lucide SVG paths directly — no CDN, no external requests
- **Images from `images/`**: never reference `src/assets/` in `index.html`
- **UPPERCASE display text**: all `.fd` headings and labels use uppercase
- **Hover feedback**: cards lift with `transform: translateY(-4px)`, CTAs scale with `transform: scale(1.02–1.05)`
- **Smooth scroll**: `html { scroll-behavior: smooth }`

---

## Anti-Patterns

- Do not use Bootstrap, Tailwind, or any CSS framework
- Do not add Font Awesome or any icon CDN — use inline SVG
- Do not use hardcoded hex or rgb colors — always use `var(--token-name)`
- Do not reference `src/` folder in `index.html`
- Do not create separate `.css` or `.js` files unless explicitly requested
- Do not use `px` for font sizes — use `rem`
- Do not add jQuery or any JS library
