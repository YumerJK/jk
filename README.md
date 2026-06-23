# Usta Kapı & Mobilya

Modern, animated, mobile-friendly bilingual website for a carpentry business that builds home doors, kitchen furniture, cabinets, and custom furniture.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.


## GitHub Pages

This repository also includes `index.html` and `site.css` at the repository root so GitHub Pages can serve the finished static site immediately at `/jk/` when Pages is configured to publish from the branch root.

For a Next.js static export, build with:

```bash
GITHUB_PAGES=true npm run build
```


### If GitHub Pages still shows the old README

The live URL updates only after this branch is merged into the branch that GitHub Pages publishes. This repo now includes three compatible publishing options:

1. **GitHub Actions**: set Pages source to **GitHub Actions** and run the `Deploy static site to GitHub Pages` workflow.
2. **Deploy from branch root**: set Pages source to the branch root; `index.html` will be served first.
3. **Deploy from `/docs`**: set Pages source to `/docs`; the same static site is mirrored there.
