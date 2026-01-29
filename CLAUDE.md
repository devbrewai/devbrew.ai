# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start development server at localhost:3000
bun run build        # Production build (includes Contentlayer + RSS generation)
bun run serve        # Start production server
bun run lint         # ESLint with auto-fix
bun run analyze      # Bundle size analysis
```

Pre-commit hooks (Husky + lint-staged) automatically format staged files.

## Architecture

**Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Contentlayer2 (MDX)

**Content Types:** Three MDX document types with shared frontmatter structure:

- `data/blog/` - Blog posts (Insights)
- `data/case-studies/` - Case studies
- `data/authors/` - Author metadata

**Key Directories:**

- `app/` - Next.js App Router pages and API routes
- `components/` - React components (`/ui` contains shadcn/ui components)
- `layouts/` - Article layouts (PostLayout, ListLayout, CardListLayout)
- `modules/` - Feature-specific logic (home, contact, services)
- `lib/utils.ts` - `cn()` helper for Tailwind class merging

**API Routes:**

- `/api/contact` - Contact form (Resend email)
- `/api/newsletter` - Newsletter subscription (Convertkit)
- `/api/og/blog`, `/api/og/case-study`, `/api/og/research` - Dynamic OG image generation

## Content Publishing

MDX frontmatter structure:

```yaml
title: 'Article Title'
date: '2025-12-26'
tags: ['ai', 'fintech']
summary: 'Brief description'
authors: ['joe-kariuki']
images: ['/static/images/blog/slug/og.png']
layout: PostLayout
draft: false # Set true to hide from site
```

- File names use kebab-case and become URL slugs
- Update `app/tag-data.json` when adding posts with new or existing tags
- OG images go in `public/static/images/blog/<slug>/og.png`

## Patterns

- Server components by default; use `'use client'` for interactive components
- Path aliases: `@/components`, `@/data`, `@/layouts`, `@/lib`, `@/modules`
- Folders prefixed with `_` (e.g., `app/_insights`) don't create routes
- Site config centralized in `data/siteMetadata.js`

## Git Conventions

Follow Angular commit conventions:

```
<type>(<scope>): <subject>

- Bullet point descriptions
- Use proper capitalization
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Rules:**

- Do not include "Co-Authored-By" or any AI-generated attribution comments
- Use bullet points in the commit body to describe changes
- Keep commits atomic: one logical change per commit
- Commit methodically: stage and commit related changes together
