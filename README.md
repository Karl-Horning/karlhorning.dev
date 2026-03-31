# KarlHorning.dev — Developer portfolio

![GitHub Pages Deploy](https://img.shields.io/github/deployments/Karl-Horning/Karl-Horning.github.io/github-pages?label=GitHub%20Pages\&logo=github)
![Lighthouse Performance 99](https://img.shields.io/badge/Lighthouse_Performance-99-brightgreen)
![Lighthouse Accessibility 100](https://img.shields.io/badge/Lighthouse_Accessibility-100-brightgreen)
![Lighthouse Best Practices 100](https://img.shields.io/badge/Lighthouse_Best_Practices-100-blue)
![Lighthouse SEO 100](https://img.shields.io/badge/Lighthouse_SEO-100-blueviolet)
![MIT License](https://img.shields.io/badge/License-MIT-green)

## Overview

**KarlHorning.dev** is a statically generated developer portfolio built with Next.js, TypeScript, and Tailwind CSS, covering projects, blog posts, and professional background.

## Screenshot

![Dark-themed portfolio homepage with a hero section, profile photo, four highlight cards (Accessibility-first, API-driven, EdTech expertise, Performance & DX), and a skills row showing JavaScript, Node.js, React, GraphQL, SQL, and Tailwind](public/img/projects/karlhorning-dev.webp)

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **UI:** React 19 + Tailwind CSS
- **Tooling:** ESLint + Prettier (Tailwind plugin)
- **Icons:** React Icons
- **Images:** Sharp for optimisation
- **Deployment:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions (linting, type checks, build, and export)

## Installation

```bash
git clone https://github.com/Karl-Horning/Karl-Horning.github.io.git
cd Karl-Horning.github.io
npm install
```

## Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start local development with Turbopack      |
| `npm run build`      | Build for production                        |
| `npm start`          | Serve static build locally                  |
| `npm run lint`       | Run ESLint checks                           |
| `npm run build:data` | Regenerate JSON data (projects, posts, RSS) |

## Tests

Accessibility tests run with [Playwright](https://playwright.dev/) and [axe-core](https://github.com/dequelabs/axe-core) against all routes in headless Chromium.

```bash
npm run test
```

## Live site

**URL:** [karlhorning.dev — live site](https://www.karlhorning.dev)

### Lighthouse scores (16 Oct 2025)

| Metric         | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 97     | 99      |
| Accessibility  | 100    | 100     |
| Best Practices | 100    | 100     |
| SEO            | 100    | 100     |

## Licence

MIT © 2025 Karl Horning
