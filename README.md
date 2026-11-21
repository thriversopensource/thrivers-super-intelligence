# Thrivers Super Intelligence (TSI) — Research Website

The official website of **Thrivers Super Intelligence**, an independent AI research and engineering
initiative working towards independent foundation-model research (programme 2026–2029).

Built with **Angular 21** (standalone components, signals, new control flow, lazy routes) and SCSS.
No UI framework dependencies.

## Requirements

| Tool        | Version  |
| ----------- | -------- |
| Node.js     | 24.x     |
| npm         | 12.x     |
| Angular CLI | 21.2.x   |

## Getting started

```powershell
npm install
npm start
```

Open http://localhost:4200. The dev server reloads on file changes.

> npm 12 blocks dependency install scripts by default. The build works without them; if you see
> esbuild or file-watcher warnings, review them with `npm install-scripts ls`.

## Scripts

| Command         | Purpose                                             |
| --------------- | --------------------------------------------------- |
| `npm start`     | Development server on port 4200                     |
| `npm run build` | Production build to `dist/tsi-website/browser`      |
| `npm test`      | Unit tests (Vitest)                                 |
| `npm run watch` | Development build in watch mode                     |

## Deployment

The output in `dist/tsi-website/browser` is a static single-page app. Configure the host to serve
`index.html` for unknown paths (SPA fallback) so that direct links such as `/roadmap?year=2` or
`/projects/tsi-gpt` work.

## Routes

| Path            | Page                                                   |
| --------------- | ------------------------------------------------------ |
| `/`             | Home — hero, mission, pillars, progression, vision     |
| `/about`        | Organisation, mission & vision, philosophy, principles |
| `/research`     | Five research pillars (deep-linkable via `#id`)        |
| `/roadmap`      | Interactive three-year timeline (`?year=1\|2\|3`)      |
| `/projects`     | Flagship projects with status filter                   |
| `/projects/:id` | Project detail                                         |
| `/technology`   | Layered technology stack, filterable by roadmap year   |
| `/join`         | Contributor profiles, philosophy, introduction builder |

All feature routes are lazy-loaded. Page titles and meta descriptions are set from route config by
`SeoTitleStrategy`.

## Project structure

```
src/app/
  core/
    layout/        navbar, footer
    models/        typed content interfaces
    services/      SeoTitleStrategy
  shared/components/
    hero, cta, research-pillar, timeline, milestone, project-card,
    status-badge, technology-grid, progression, transformer-diagram, brand-mark
  features/        one folder per route (home, about, research, roadmap, projects, technology, join)
  data/            all site content as typed TypeScript data
src/styles.scss    design tokens, typography, layout primitives
```

## Editing content

All copy lives in `src/app/data/`:

- `site.data.ts` — brand, navigation, mission, principles, progression, **contact**
- `research.data.ts` — research pillars
- `roadmap.data.ts` — three-year phases and milestones
- `projects.data.ts` — flagship projects and their **status**
- `technology.data.ts` — technology stack

### Keep it honest

- **Project status** (`planned` / `in-progress` / `completed`) must reflect actual progress. All
  projects start as `planned`; update them only as work verifiably lands.
- Roadmap content is presented as proposed targets, not achievements.
- Do not add performance figures until they are produced and documented.

### Publishing a contact address

Set `CONTACT.email` in `src/app/data/site.data.ts`. The Join page then shows a direct mail link
automatically. Until then it shows an introduction builder that copies a structured message to the
clipboard (nothing is sent or stored).

## Design system

Tokens are CSS custom properties in `src/styles.scss`: colour (`--c-*`), type (`--f-*`, `--fs-*`),
spacing (`--s-1`…`--s-10`), layout (`--container`, `--gutter`, `--nav-h`) and motion. Breakpoints:
40rem, 48rem, 64rem, 80rem. Fonts use system stacks (no web-font requests). All motion respects
`prefers-reduced-motion`.
