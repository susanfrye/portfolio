# Susan Frye — Ecological Data Consulting

Portfolio website for ecological data analysis, R/Shiny dashboards, and spatial
mapping services. Static site (HTML/CSS/JS), hosted on GitHub Pages.

## Pages
- `index.html` — Home
- `services.html` — Services
- `work.html` — Portfolio (embeds live Shiny dashboards)
- `about.html` — About
- `contact.html` — Contact

## Live Shiny dashboards
The Work page embeds R/Shiny apps deployed to shinyapps.io. To update or add an
app, edit the `APP_URLS` block near the top of `work.html`.

| # | App | shinyapps.io |
|---|-----|--------------|
| 01 | Ontario Species at Risk (GBIF) | ontario-species-at-risk |
| 02 | Breeding Bird Survey trends | ontario-bbs-trends |
| 03 | Toronto Urban Forest | toronto-urban-forest |
| 04 | iNaturalist Phenology | *not yet deployed (free-tier app limit)* |

## Deploying
See `DEPLOY.md` for full GitHub Pages + shinyapps.io instructions.

## Local preview
Open `index.html` in a browser, or run a simple server:
```bash
python3 -m http.server 5500
```
