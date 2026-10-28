# Md Afzal Khan — Portfolio

Personal portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5180
```

## Build

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve the build locally
```

## Editing content

All text — experience, projects, skills, achievements, links — lives in `src/data.js`.
The photo and résumé are in `public/`.

## Structure

```
src/
  data.js            content
  hooks.js           typing, count-up, reveal-on-scroll, tilt, scroll-spy
  index.css          all styles
  components/        one component per section
public/              profile.jpg, résumé PDF
```

## Deploy

`dist/` is a static site — drop it on Netlify, Vercel, or GitHub Pages.
`vite.config.js` uses `base: "./"`, so it works from any sub-path.
