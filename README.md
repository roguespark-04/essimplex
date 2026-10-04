# ESSIMPLEX — company site

Commercial company homepage for **ESSIMPLEX**. Custom design and hardware products for industry. **Nody Bot** is our first product.

**Nody Bot** is a **product sub-page** of the company site (`nody-bot.html`) — not a separate brand website. Same ESSIMPLEX chrome/nav throughout. Company mark: **EX hexagon monogram** (charcoal E and bronze X forming a hexagon around a small node network) + spaced “ESSIMPLEX” wordmark. Palette sampled from the logo: warm cream (`#FAF6EE` page / `#FFFBF2` cards), charcoal (`#2B2B2D` text / `#3F3F41` logo charcoal), bronze (`#7A5733` buttons & links / `#5E4326` hover / `#8B6440` rules & accents / `#D8B58B` on dark). No green in the company palette; a tiny green “online” dot appears only on the Nody Bot product page.

Repo `essimplex`, published at https://roguespark-04.github.io/essimplex/. Static GitHub Pages from the repository root. It is **not** the collector / ops dashboard. Product surface: **website + hardware device** (USB / `etctl` provisioning). No mobile apps.

## Local preview

```bash
python3 -m http.server 4173
# or: npx --yes serve -l 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## GitHub Pages

Published at `https://roguespark-04.github.io/essimplex/` from branch **`main`** / folder **`/ (root)`**.

- Company: `https://roguespark-04.github.io/essimplex/`
- Product: `https://roguespark-04.github.io/essimplex/nody-bot.html`

## Design system

Corporate infrastructure/hardware look (modelled on sites such as applieddigital.com): dark full-bleed hero, bold grotesk headlines, solid CTA buttons, stat band, card grids, copper contact band.

- **Type:** Manrope (variable 400-800, self-hosted `assets/fonts/manrope-var.woff2`, SIL OFL) for headlines, body and UI. IBM Plex Mono (`plex-mono-400.woff2`) only for small technical labels and code. `font-display: swap`.
- **Colour:** logo colours only. Charcoal `#1E1E20` (hero, stat band, footer) / `#2B2B2D` (product + how-it-works bands) / `#3F3F41`; copper-bronze `#8B6440` (contact band, rules), `#7A5733` (links/eyebrows on cream), `#C99A68` (primary buttons) / `#D8B58B` (accents on dark); cream `#FAF6EE` and white. The single green `#3E9B4F` is the heartbeat dot on the Nody Bot page.
- **Hero background:** CSS grid + inline SVG routed cable traces with one copper glow line and a travelling packet. No photos.
- **Motion (`app.js` + CSS, transform/opacity only):** hero entrance, reveal on scroll, animated counters on the fact stats, card/button hover states, sticky nav that turns solid on scroll, home check-in strip that draws on enter, home check-in diagram packets, and the Nody Bot check-in sequence (wake, DHCP, POST, 2xx, sleep) that steps as you scroll. Everything is visible without JS; `prefers-reduced-motion` turns motion off.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Company homepage (hero · capabilities · Nody Bot · facts · how it works · company · contact) |
| `nody-bot.html` | Nody Bot product sub-page (hero · facts · how it works · why · specs · provisioning · contact) |
| `privacy.html` / `terms.html` | Legal placeholders (ESSIMPLEX) |
| `nody-box.html` | Redirect from the old product URL to `nody-bot.html` |
| `styles.css` | Design system: tokens, type, bands, components, motion |
| `app.js` | Sticky nav state, mobile nav, reveals, counters, phone-home sequence |
| `assets/essimplex-mark.png` / `essimplex-mark-720.png` / `essimplex-mark-sm.png` | EX mark (no wordmark), transparent (full-res / hero / header) |
| `assets/essimplex-mark-sm-light.png` | EX mark reversed (cream E) for the charcoal footer |
| `assets/essimplex-logo-full.png` / `essimplex-logo-full-640.png` | Full lockup (mark + wordmark), transparent |
| `assets/essimplex-logo-original.png` | Original logo artwork (cream background) |
| `assets/favicon-16.png` / `favicon-32.png` / `icon-192.png` / `apple-touch-icon.png` | Favicons (mark on cream tile) |
| `assets/nody-bot-logo-lockup.png` | Nody Bot product mark (product page hero) |
| `screenshots/` | Capture references |
