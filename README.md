# ESSIMPLEX — company site

Commercial company homepage for **ESSIMPLEX**. Custom design and hardware products for industry. **Nody Bot** is our first product.

**Nody Bot** is a **product sub-page** of the company site (`nody-bot.html`) — not a separate brand website. Same ESSIMPLEX chrome/nav throughout. Company mark: **EX hexagon monogram** (charcoal E and bronze X forming a hexagon around a small node network) + spaced “ESSIMPLEX” wordmark. Palette sampled from the logo: warm cream (`#FAF6EE` page / `#FFFBF2` cards), charcoal (`#2B2B2D` text / `#3F3F41` logo charcoal), bronze (`#7A5733` buttons & links / `#5E4326` hover / `#8B6440` rules & accents / `#D8B58B` on dark). No green in the company palette; a tiny green “online” dot appears only on the Nody Bot product page.

This repo remains named `nody-box-web` for now. Static GitHub Pages from the repository root. It is **not** the collector / ops dashboard. Product surface: **website + hardware device** (USB / `etctl` provisioning). No mobile apps.

## Local preview

```bash
python3 -m http.server 4173
# or: npx --yes serve -l 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## GitHub Pages

Published at `https://roguespark-04.github.io/nody-box-web/` from branch **`main`** / folder **`/ (root)`**.

- Company: `https://roguespark-04.github.io/nody-box-web/`
- Product: `https://roguespark-04.github.io/nody-box-web/nody-bot.html`

## Design system

- **Type:** Newsreader (variable, optical sizes; display and headings), IBM Plex Sans (body and UI), IBM Plex Mono (spec labels, data). All self-hosted in `assets/fonts/`, `font-display: swap`.
- **Colour:** logo colours only. Cream `#FAF6EE` / paper `#FFFBF2`, charcoal `#2B2B2D` (full-bleed bands) / `#222224` (footer), copper-bronze `#8B6440` (headlines on cream, full-bleed copper bands with `#FFFBF2` text), `#7A5733` links, `#5E4326` hover, `#D8B58B` / `#C99A68` copper on charcoal. The single green `#3E9B4F` is the heartbeat dot on the Nody Bot page.
- **Grid:** 12 columns, section index in columns 1-2, content offset to column 3. Sharp 2px corners throughout.
- **Motion (`app.js` + CSS):** scroll-progress hairline, staggered reveals, hero headline word rise, scroll-linked pulse line (CSS scroll-driven animations, timed fallback), header-mark parallax, and the pinned Nody Bot phone-home sequence (wake, DHCP, POST, 2xx, sleep) that steps as you scroll. Everything is visible without JS; `prefers-reduced-motion` turns motion off.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Company homepage only (Products · About · Contact) |
| `nody-bot.html` | Nody Bot product sub-page (same company chrome; hero, how, why, specs, provisioning, sales) |
| `privacy.html` / `terms.html` | Legal placeholders (ESSIMPLEX) |
| `nody-box.html` | Redirect from the old product URL to `nody-bot.html` |
| `styles.css` | Design system: tokens, grid, bands, components, motion |
| `app.js` | Mobile nav, reveals, phone-home sequence, progress fallback |
| `assets/essimplex-mark.png` / `essimplex-mark-720.png` / `essimplex-mark-sm.png` | EX mark (no wordmark), transparent (full-res / hero / header) |
| `assets/essimplex-mark-sm-light.png` | EX mark reversed (cream E) for the charcoal footer |
| `assets/essimplex-logo-full.png` / `essimplex-logo-full-640.png` | Full lockup (mark + wordmark), transparent |
| `assets/essimplex-logo-original.png` | Original logo artwork (cream background) |
| `assets/favicon-16.png` / `favicon-32.png` / `icon-192.png` / `apple-touch-icon.png` | Favicons (mark on cream tile) |
| `assets/nody-bot-logo-lockup.png` | Nody Bot product mark (product page hero) |
| `screenshots/` | Capture references |
