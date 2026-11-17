# How2Tech.in

Static magazine-style tech blog built with Astro. No backend, no database. Deploys to GitHub Pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Add an article
Create `src/content/blog/my-article-title.md` (the filename becomes the URL: `/my-article-title/`):
```md
---
title: "My Article Title"
description: "One-sentence summary used for SEO and cards."
category: "Technology"        # Technology | How-To | AI & Tools | Internet & Security | Explained
tags: ["AI", "Tips"]
author: "How2Tech Editorial Team"
publishedAt: 2026-11-20
updatedAt: 2026-11-20
featuredImage: "/images/my-article-title.webp"   # file in public/images/ (1200x675 recommended)
featuredImageAlt: "Describe the image"
featured: false   # true = homepage grid and ticker (top 5 are shown)
popular: false    # true = Popular posts widget and footer
draft: false      # true = hidden everywhere
---
Article body in Markdown. Use ## and ### headings; the table of contents is automatic.
```
Thumbnails: also add `public/images/my-article-title-sm.webp` (640x360). Cards use it.

## Replace demo content
Delete the 12 files in `src/content/blog/` and their images in `public/images/`. Each category page only exists while it has at least one article.

## Settings
- `src/data/site.ts`: social links (empty = hidden), newsletter form endpoint, contact email, posts per page.
- `src/data/categories.ts`: names, colours, descriptions. (If you rename a category, update the enum in `src/content/config.ts`.)
- Ads: paste your ad code inside `src/components/Advertisement.astro`.
- Legal pages (`privacy-policy`, `disclaimer`, `terms`) are starter text with `[PLACEHOLDERS]`. Edit before publishing.

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo, branch `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`; `.github/workflows/deploy.yml` builds and deploys.
4. Settings → Pages → Custom domain: `how2tech.in`, then tick **Enforce HTTPS**.
5. At your DNS provider: `A` records for the apex to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` to `<your-user>.github.io`. (Confirm these in GitHub's current docs.)

`public/CNAME` already contains `how2tech.in`.
