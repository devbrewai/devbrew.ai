# Devbrew.ai — AI Engineering for Fintech and Finance

Devbrew is an AI engineering firm. We partner with fintech founders and product teams to design and build custom AI applications. This site is built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Contentlayer](https://www.contentlayer.dev/) to publish our work and thinking.

Sections:

- Research (public)
- Insights (currently private)
- Case Studies (currently private)

While Insights and Case Studies are private, routes live in private folders (`app/_insights`, `app/_case-studies`) and are excluded from the sitemap, RSS, and tags.

When you are ready to publish these sections, follow the publish checklist near the bottom of this file.

## Overview

Devbrew partners with fintech founders and product teams to design and build custom AI applications. This site communicates our thinking and showcases selected work.

Core pillars of the site:

- Research: long‑form technical and product analysis (public)
- Insights: shorter POV notes (currently private)
- Case Studies: selected client outcomes (currently private)

## Architecture

- Next.js App Router (TypeScript)
- Tailwind CSS
- Contentlayer + MDX for type‑safe content
- Pliny utilities (MDX renderer, search helpers, TOC)

Key conventions:

- Private folders: any `app/_folder` is not routed by Next.js (used for Insights/Case Studies while in draft/private).
- Social sharing: posts include LinkedIn and X share buttons with UTM parameters for basic attribution.
- SEO: Open Graph and Twitter metadata are generated per post; OG images prefer per‑post images and fall back to `socialBanner`.

## Local Development

Prerequisites:

- Node 20+ (we use Bun, but Node/npm/yarn also work)

Install & run:

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Build & Deploy

```bash
bun run build
bun run serve
```

The build will:

- Generate Contentlayer types and local search index (`public/search.json`).
- Produce an RSS feed via `scripts/rss.mjs`.
- Pre‑render static routes (SSG) and output `.next` for deployment.

## Content Model

Defined in `contentlayer.config.ts`:

- `Research` (public)
- `Insight` (private for now)
- `CaseStudy` (private for now)
- `Authors`

Frontmatter (excerpt):

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list, defaults to `default`)
layout (optional, one of `PostLayout`, `PostSimple`, `PostBanner`)
canonicalUrl (optional)
```

Authoring flow:

- Add MDX under `data/research/` (or `insights/`, `case-studies/` when publishing those sections).
- Use valid frontmatter. Prefer absolute OG image URLs or paths that resolve against `siteUrl`.
- For draft content, set `draft: true` to exclude from sitemap/RSS.

## How to add a Research article

1. Create a new MDX file
   - Path: `data/research/your-slug.mdx`
   - Use lowercase kebab-case for `your-slug`. The final route will be `/research/your-slug`.

2. Add frontmatter

```mdx
---
title: 'How LLMs Change Risk Ops'
date: '2025-09-06'
summary: 'Practical patterns to augment compliance, fraud, and KYC flows with LLMs.'
tags: ['ai', 'fintech', 'risk']
authors: ['default']
images:
  - '/static/images/research/how-llms-change-risk-ops/og.png'
layout: PostLayout
canonicalUrl: 'https://www.devbrew.ai/research/how-llms-change-risk-ops'
draft: false
---
```

3. Write the content body

```mdx
## Why this matters now

Your intro paragraph...

### Pattern 1: Intelligent document intake

Details, code blocks, diagrams, etc.
```

4. Add images (optional)
   - Place files under `public/static/images/research/your-slug/`.
   - Reference them with absolute paths (e.g. `/static/images/research/your-slug/chart.png`).

Example MDX image usage with the site `Image` component:

```mdx
import Image from '@/components/Image'

<Image
  src="/static/images/research/how-llms-change-risk-ops/chart.png"
  alt="Risk scoring pipeline"
  width={1200}
  height={640}
/>
```

5. Authors
   - Default author is configured in `data/authors/default.mdx`.
   - To attribute a different author, add a new file in `data/authors/` and use that filename in the `authors` list.

6. Run locally and verify
   - `bun run dev` will regenerate Contentlayer types and your article will appear at `/research/your-slug`.
   - Tags will automatically show on `/tags` and create `/tags/<tag>` pages if new.

7. Social cards and SEO
   - The first item in `images` is used as the OG image (falls back to `data/siteMetadata.js:socialBanner`).
   - Set `canonicalUrl` if this article is cross-posted elsewhere.

8. Drafts and scheduling
   - Use `draft: true` to hide a post from the sitemap, RSS, and tags.
   - Use an ISO `date` (YYYY-MM-DD). Posts sort by `date` and `lastmod`.

## Routing & Visibility

- Public sections
  - `app/research/` – list, pagination, and dynamic article routes.
  - `app/tags/` – tag index and per‑tag pagination.

- Private sections (hidden routes)
  - `app/_insights/`
  - `app/_case-studies/`

Private folders are ignored by Next.js routing. We still keep code and content in place for later publishing.

## Search, Tags, Sitemap, RSS

- Search: a local index is generated post‑build from all public documents.
- Tags: currently aggregate only Research while other sections are private.
- Sitemap: `app/sitemap.ts` includes public routes only.
- RSS: `scripts/rss.mjs` emits a consolidated feed (Research only while others are private).

## Social Sharing & UTM Parameters

`layouts/PostLayout.tsx` adds share links for LinkedIn and X with UTM parameters for attribution:

- `utm_source`: linkedin | x
- `utm_medium`: social
- `utm_campaign`: content_share
- `utm_content`: post

## Environment Variables

See `.env.example` for typical values. Common areas:

- Analytics (Umami/Plausible/Posthog/etc.)
- Comments (Giscus)
- Contentlayer/Pliny defaults (none required for basic usage)

## Code Style & Linting

- TypeScript strictness is enforced during build.
- ESLint + Prettier are configured. Run:

```bash
yarn lint
```

## Project Scripts

- `bun run dev` – Start dev server
- `bun run build` – Build (SSG), generate search index, RSS
- `bun run serve` – Start production server

## Repository Structure (selected)

- `app/` – App Router pages (public + private folders)
- `components/` – UI and MDX components
- `layouts/` – Article/list layouts
- `data/` – MDX sources (`research/`, `insights/`, `case-studies/`, `authors/`)
- `scripts/` – postbuild and RSS feed generator
- `public/` – static assets and generated search index

## Publish Checklist (Insights / Case Studies)

When you’re ready to publish Insights or Case Studies:

1. Rename private folders to public routes:
   - `app/_insights/` → `app/insights/`
   - `app/_case-studies/` → `app/case-studies/`
2. Update `app/sitemap.ts` to include the sections.
3. Update `scripts/rss.mjs` to include them in the feed.
4. Update `app/tags/[tag]/` pages to aggregate across all sections.
5. Run a fresh build to regenerate Contentlayer types and verify routes.
6. Optional: re‑enable corresponding navigation links.

## Contact

Devbrew — AI Engineering for Fintech and Finance

– Website: https://www.devbrew.ai
– Email: hello@devbrew.ai (if applicable)
