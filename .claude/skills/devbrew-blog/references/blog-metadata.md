# Blog post metadata reference

## Frontmatter template

Every blog post starts with this YAML frontmatter block:

```yaml
---
title: 'Title Case Headline Here'
date: 'YYYY-MM-DD'
lastmod: 'YYYY-MM-DD'
slug: 'short-seo-friendly-slug'
tags: ['tag-one', 'tag-two', 'tag-three', 'tag-four', 'tag-five', 'tag-six']
draft: false
summary: 'Short SEO-optimized subtitle that captures the core value proposition and target pain point. This is typically the subtitle.'
images: ['/static/images/blog/{slug}/og.png']
authors: ['joe-kariuki']
layout: PostLayout
ogTitle: 'Title Case Headline Here. This is optional.'
ogDescription: 'Short SEO-optimized subtitle that captures the core value proposition and target pain point. This is optional.'
---
```

## Field-by-field rules

### title

- Title case (capitalize major words)
- Must match the blog post headline
- Mirrors `ogTitle` exactly

### date and lastmod

- Format: `YYYY-MM-DD`
- `date` is the publish date
- `lastmod` starts as the same date, updated when content is revised

### slug

- Short, SEO-friendly, lowercase, hyphen-separated
- Should be contextual and obvious for the blog topic and target audience intent
- Omit filler words (no "how-to", "the", "a", "and" unless essential for clarity)
- Target 3-5 words
- Match the core search intent of the reader

**Good slugs:**

- `payment-reliability-lean-teams`
- `settlement-float-recovery`
- `kyc-dropoff-adaptive-verification`
- `nostro-account-optimization`
- `fx-cost-reduction-routing`

**Bad slugs:**

- `how-to-reduce-your-fx-costs-using-ai-in-60-days` (too long)
- `blog-post-about-payments` (too generic)
- `post-16` (not descriptive)

### tags

- **6-7 tags maximum.** Never exceed 7.
- ALWAYS read the project's `tag-data.json` file before selecting tags to check what already exists.
- **Strongly prefer existing tags** over creating new ones. Reuse keeps the taxonomy clean and helps readers browse related content.
- Only create a new tag if the post covers a genuinely new topic area with no existing tag that fits.
- New tags: lowercase, hyphen-separated, specific but not overly narrow.
- Include a mix of: broad category tags (e.g., `payments`, `ai`, `fintech`) and specific topic tags (e.g., `settlement-float`, `fraud-detection`, `nostro-optimization`).
- Every post should include at least one of: `ai`, `machine-learning`, or `applied-ai` to reinforce Devbrew's AI positioning.

**Tag selection priority:**

1. High-frequency existing tags that fit the topic (e.g., `payments`, `ai`, `fintech`, `cross-border-payments`)
2. Specific existing tags for the sub-topic (e.g., `treasury`, `fraud-detection`, `compliance`)
3. A new specific tag only if nothing existing covers the topic

### draft

- Set to `false` for published posts
- Set to `true` only for work-in-progress

### summary

The summary is the **subtitle** of the blog post. It appears below the title and uses the headline formula.

**Headline formula:** `[Result they want] + [Objection] + [Time frame]`

- **Sentence case** (capitalize only the first word and proper nouns)
- 1-2 sentences maximum
- Must complement the title, not repeat it
- Include a specific number or outcome
- Mirrors `ogDescription` exactly

**Good summaries (follow the formula):**

- "Turn your AI idea into ROI in 30 days, even if nothing is built yet."
  - Result: ROI | Objection: nothing built | Timeframe: 30 days
- "Stop losing $100K to unpredictable settlements and free 35% of your buffer in 60 days, without switching banks."
  - Result: stop losing $100K | Objection: without switching banks | Timeframe: 60 days
- "Recover 2 to 5 basis points in FX margin with applied AI, even if your pricing already looks efficient."
  - Result: recover 2-5 bps | Objection: pricing looks efficient | Timeframe: implied (with AI)

**Bad summaries:**

- "A blog post about payment reliability." (too vague, no formula)
- "In this article we discuss..." (generic, wastes characters)
- "The $100K Cost of Unpredictable Settlements" (just repeats title)

### images

- Path pattern: `/static/images/blog/{slug}/og.png`
- Use the same slug as the `slug` field
- This is the Open Graph image for social sharing

### authors

- Always `['joe-kariuki']`

### layout

- Always `PostLayout`

### ogTitle and ogDescription

- `ogTitle` mirrors `title` exactly
- `ogDescription` mirrors `summary` exactly
- These control how the post appears when shared on LinkedIn, X, and other platforms

## Example: complete metadata

```yaml
---
title: 'How Settlement Timing Prediction Saves Treasury Teams $47K Per Quarter'
date: '2026-02-03'
lastmod: '2026-02-03'
slug: 'settlement-timing-prediction'
tags:
  [
    'ai',
    'treasury',
    'settlement-float',
    'payments',
    'cross-border-payments',
    'capital-efficiency',
    'machine-learning',
  ]
draft: false
summary: 'Recover $47K per quarter in trapped settlement float using predictive timing models that optimize clearing cycles across your payment corridors.'
images: ['/static/images/blog/settlement-timing-prediction/og.png']
authors: ['joe-kariuki']
layout: PostLayout
ogTitle: 'How Settlement Timing Prediction Saves Treasury Teams $47K Per Quarter'
ogDescription: 'Recover $47K per quarter in trapped settlement float using predictive timing models that optimize clearing cycles across your payment corridors.'
---
```
