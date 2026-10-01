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

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Company homepage only (Products · About · Contact) |
| `nody-bot.html` | Nody Bot product sub-page (same company chrome; hero, how, why, specs, provisioning, sales) |
| `privacy.html` / `terms.html` | Legal placeholders (ESSIMPLEX) |
| `nody-box.html` | Redirect from the old product URL to `nody-bot.html` |
| `styles.css` | Cream + charcoal + bronze + local IBM Plex |
| `app.js` | Mobile nav |
| `assets/essimplex-mark.png` / `essimplex-mark-sm.png` | EX hexagon mark (no wordmark), transparent (full-res / header size) |
| `assets/essimplex-logo-full.png` / `essimplex-logo-full-640.png` | Full lockup (mark + wordmark), transparent |
| `assets/essimplex-logo-original.png` | Original logo artwork (cream background) |
| `assets/favicon-16.png` / `favicon-32.png` / `icon-192.png` / `apple-touch-icon.png` | Favicons (mark on cream tile) |
| `assets/nody-bot-logo-lockup.png` | Nody Bot product mark (product page hero) |
| `screenshots/` | Capture references |
