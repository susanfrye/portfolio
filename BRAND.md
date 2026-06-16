# Brand Profile — Susan Frye Consulting

A quick-reference style guide for the website and any future materials
(business cards, slide decks, reports, social profiles).

---

## Colour palette

### Core
| Role | Hex | Use |
|------|-----|-----|
| Primary / Teal | `#0d9488` | Brand colour, links, primary accents |
| Teal (dark) | `#0f766e` | Hover states, depth |
| Ink / Near-black | `#0a0a0a` | Headings, body text, dark buttons |
| Gray | `#6b7280` | Secondary text, captions |
| Border | `#e5e7eb` | Card outlines, dividers |
| Off-white | `#f8fafb` | Subtle section backgrounds |
| White | `#ffffff` | Page background |

### Accent colours (one per service / project for visual identity)
| Role | Hex | Used for |
|------|-----|----------|
| Amber | `#e07b39` | Service 2 / Project 02 (BBS) |
| Forest green | `#3a7d44` | Service 3 / Project 03 (Trees) |
| Purple | `#7c3aed` | Project 04 (iNaturalist) |
| Teal | `#0d9488` | Service 1 / Project 01 (SAR) |

**System:** teal-anchored neutral base + three warm/cool accents. High contrast,
professional, with per-card accent colours for differentiation.

---

## Typography

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Headings / display | **Space Grotesk** | 400, 500, 600, 700, 800 | Google Fonts |
| Body / UI | **Inter** | 400, 500, 600 | Google Fonts |

- **Space Grotesk** — geometric sans with character. All headings (h1–h4), nav,
  buttons, labels, big numbers. Tight letter-spacing (`-0.025em`) on headings.
- **Inter** — clean, legible workhorse for paragraphs, captions, small UI text.
- **Pairing logic:** one font with personality for what people *notice*, one
  neutral font for what people *read*.

**Google Fonts embed:**
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap
```

**CSS variables:**
```css
--font-h: 'Space Grotesk', sans-serif;  /* headings */
--font-b: 'Inter', sans-serif;          /* body */
```

### Type scale (as used on the site)
| Element | Size | Weight |
|---------|------|--------|
| Hero h1 | clamp(2.8rem → 5rem) | 800 |
| Page h1 | clamp(2.4rem → 3.8rem) | 800 |
| Section h2 | clamp(1.75rem → 2.4rem) | 800 |
| Card h3 | 1.1rem | 700 |
| Body | 1rem (16px base) | 400 |
| Eyebrow / labels | 0.72rem, uppercase, letter-spacing 0.14em | 700 |

---

## Logo / wordmark
- Text wordmark: **"Susan Frye."** in Space Grotesk 700, with the period in teal (`#0d9488`).

---

## Voice & tone
- Clear, credible, no jargon-for-jargon's-sake.
- Leads with the client's problem, then the deliverable.
- Professional but warm — suited to conservation authorities, municipalities,
  forestry, and environmental NGOs.

---

## Motion / interaction
- Buttons: lift on hover + subtle diagonal sheen sweep.
- Service cards: lift + accent-colour top-bar wipe + floating "seed" dots that
  scatter (ecology-themed micro-interaction).
- Scroll: gentle fade-up as sections enter the viewport.
- Optional barely-there dot-grid background texture (`<body class="textured">`).

---

## Domains
- Primary: `susanfrye.com`
- Secondary (redirect): `susanfrye.ca`
