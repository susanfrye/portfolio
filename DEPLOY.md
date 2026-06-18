# Deploying the site + Shiny apps

Two separate pieces:
1. **The website** (this `site/` folder) → GitHub Pages (free, static)
2. **The 4 Shiny apps** → shinyapps.io (free tier), then embedded into the Work page

---

## Part 1 — Deploy the 4 Shiny apps to shinyapps.io

### One-time setup
1. Create a free account at <https://www.shinyapps.io>.
2. In R:
   ```r
   install.packages("rsconnect")
   ```
3. On shinyapps.io: **Account → Tokens → Show → Copy to clipboard**, then paste
   the `rsconnect::setAccountInfo(...)` line it gives you into your R console once.

### Deploy each app
Each app must be in its **own folder** named `app.R` (shinyapps.io convention).
From the project root in R:

```r
library(rsconnect)

# App A — Species at Risk
dir.create("deploy_sar"); file.copy("app_a_gbif_sar.R", "deploy_sar/app.R")
deployApp("deploy_sar", appName = "ontario-species-at-risk")

# App B — Breeding Bird Survey
dir.create("deploy_bbs"); file.copy("app_b_bbs_trends.R", "deploy_bbs/app.R")
deployApp("deploy_bbs", appName = "ontario-bbs-trends")

# App C — Toronto Trees
dir.create("deploy_tree"); file.copy("app_c_toronto_trees.R", "deploy_tree/app.R")
deployApp("deploy_tree", appName = "toronto-urban-forest")

# App D — iNaturalist
dir.create("deploy_inat"); file.copy("app_d_inat_phenology.R", "deploy_inat/app.R")
deployApp("deploy_inat", appName = "inaturalist-phenology")
```

> **Important — caching & data:** Apps B and C download large datasets the first time
> they run. shinyapps.io has limited disk and resets between sessions, so for production
> it's best to **pre-build the `cache_*.rds` files locally and copy them into the deploy
> folder** alongside `app.R` before deploying. That way the app loads instantly and never
> needs to re-download. Example:
> ```r
> file.copy("cache_bbs_ontario.rds", "deploy_bbs/")   # do this before deployApp()
> ```

Each `deployApp()` prints a URL like:
`https://yourname.shinyapps.io/ontario-species-at-risk/`

### Wire the URLs into the website
Open `site/work.html`, find the `APP_URLS` block near the top, and paste each URL:

```js
const APP_URLS = {
  sar:  "https://yourname.shinyapps.io/ontario-species-at-risk/",
  bbs:  "https://yourname.shinyapps.io/ontario-bbs-trends/",
  tree: "https://yourname.shinyapps.io/toronto-urban-forest/",
  inat: "https://yourname.shinyapps.io/inaturalist-phenology/"
};
```

The page automatically swaps each "Coming soon" placeholder for a live embedded iframe
and turns on the "View live app ↗" links. Leave any URL blank to keep its placeholder.

---

## Part 2 — Deploy the website to GitHub Pages

1. Create a free GitHub account and a new **public** repository, e.g. `susan-frye-portfolio`.
2. Put the **contents** of this `site/` folder in the repo root (so `index.html` is at the top level).
3. Push:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/susan-frye-portfolio.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
5. After ~1 minute your site is live at:
   `https://USERNAME.github.io/susan-frye-portfolio/`

### Custom domain (optional)
If you buy a domain (e.g. `susanfrye.ca`), add it under **Settings → Pages → Custom domain**
and create a `CNAME` file in the repo containing just your domain name.

---

## Files at a glance
```
site/
├── index.html        Home / hero
├── services.html     Services (3 cards)
├── work.html         Portfolio — 4 app cards + iframe embeds  ← paste URLs here
├── about.html        About + skills
├── contact.html      Contact — get in touch (Formspree)
├── intake.html       Start a Project — quote/intake form (Formspree)
├── css/style.css     Shared styles
├── js/main.js        Nav toggle + scroll animations
└── DEPLOY.md         This file
```
