# Sol Jeong Portfolio

React + TypeScript + Vite 기반 개인 포트폴리오 웹사이트

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Router:** React Router DOM v7
- **Font:** Pretendard

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Parse markdown data (generates src/data/portfolio.ts)
npm run build:data

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview  # Preview production build
```

## Deployment

### GitHub Pages

This repository is configured for automatic deployment via GitHub Actions.

**Setup:**

1. Go to repository **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` branch to trigger deployment

**Manual deployment:** You can also trigger the workflow manually from **Actions** tab.

The site will be available at: `https://<username>.github.io/aauhsoj_port/`

### Vercel

1. Import project from GitHub at [vercel.com/new](https://vercel.com/new)
2. Build settings are auto-detected from `vercel.json`:
   - Build Command: `npm run build:data && npm run build`
   - Output Directory: `dist`
   - Framework Preset: Vite
3. Deploy

SPA routing is configured with rewrites in `vercel.json`.

## Data Management

Portfolio data is parsed from `aauhsoj_port_scraped.md`:

```bash
# Regenerate portfolio.ts from markdown
npm run build:data
```

The script (`scripts/parse-md-to-data.ts`) extracts:
- Basic info
- Skills (categorized)
- Timeline (Education & Experience)
- Side Projects
- Research Projects
- Publications

## Project Structure

```
.
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml
├── public/
│   └── favicon.svg
├── scripts/
│   └── parse-md-to-data.ts # MD parsing script
├── src/
│   ├── components/         # React components
│   ├── data/
│   │   └── portfolio.ts    # Auto-generated data
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ProjectDetail.tsx
│   ├── types/
│   │   └── portfolio.ts    # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── aauhsoj_port_scraped.md # Source data
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

## Features

- Responsive design (mobile-first)
- Dark theme with mint/cyan accent
- Smooth scroll animations (Framer Motion)
- RotatingText hero animation
- Categorized Tech Stack with filter tabs
- Project detail pages with routing
- SEO meta tags & Open Graph

## License

MIT
