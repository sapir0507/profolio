# Sapir Shahar — Portfolio

Personal portfolio site built with **React + TypeScript + Vite**, deployed to **GitHub Pages** via GitHub Actions.

**Live:** https://sapir0507.github.io

## Features

- Dark, developer-themed design with a typing hero and code-style intro card
- Sections: About · Tech stack · Experience · Projects · Contact
- Live list of public GitHub repositories (fetched from the GitHub API)
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`
- All content in one file: [`src/data/profile.ts`](src/data/profile.ts)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Deploy to GitHub Pages

1. Create a repo named **`sapir0507.github.io`** (for the root URL) — or any name, e.g. `portfolio`
   (the site will then live at `sapir0507.github.io/portfolio/`).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` rebuilds and redeploys automatically.

## Customizing

- Text, skills, experience, projects, contact details → `src/data/profile.ts`
- Add a CV: drop `Sapir_Shahar_CV.pdf` into `public/` and set `resumeUrl: './Sapir_Shahar_CV.pdf'`
- Hide a repo from the GitHub section → add its name to `hiddenRepos`
- Colors → CSS variables at the top of `src/styles.css`
