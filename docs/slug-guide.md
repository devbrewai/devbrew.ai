# Slug and URL Management Guide

## Overview

This project uses a custom slug system for blog posts, case studies, and research articles. Slugs are short, SEO-friendly URL identifiers that make content easier to share and remember.

## Slug Best Practices

### Length Guidelines

- **Ideal**: 2 words (e.g., `fraud-detection`, `merchant-risk`)
- **Maximum**: 3 words (e.g., `ai-data-pipelines`)
- **Format**: Lowercase words separated by hyphens

### Examples

**Good slugs:**

- `fraud-detection` (for "AI Fraud Detection & Sanctions Screening")
- `merchant-risk` (for "AI Merchant Risk Scoring & Portfolio Optimization")
- `ai-data-pipelines` (for "How AI-Ready Data Pipelines Cut Reconciliation Time...")

**Bad slugs:**

- `ai-ready-data-pipelines-cross-border-payments` (too long)
- `fraud_detection` (use hyphens, not underscores)
- `FraudDetection` (use lowercase)

## How to Use Slugs

### Adding a Slug to Content

In your MDX frontmatter, add a `slug` field:

```yaml
---
title: 'Your Article Title'
date: '2025-11-12'
slug: 'short-slug' # Add this line
tags: ['ai', 'payments']
# ... other fields
---
```

### URL Generation

With a custom slug, your URLs will be:

- **Blog**: `https://devbrew.ai/blog/short-slug`
- **Case Studies**: `https://devbrew.ai/case-studies/short-slug`
- **Research**: `https://devbrew.ai/research/short-slug`

Without a custom slug, the system falls back to the filename (minus the content type prefix).

## Canonical URLs

### What is a Canonical URL?

A canonical URL tells search engines which version of a page is the "main" one. This prevents duplicate content issues.

### When to Use `canonicalUrl`

**Use `canonicalUrl` ONLY when:**

- Republishing content that was originally published elsewhere
- Syndicating content to multiple platforms
- You want to explicitly point to a different URL as the authoritative source

**Example:**

```yaml
---
title: 'Article Title'
slug: 'article-slug'
canonicalUrl: 'https://originalpublisher.com/article' # Points to original
---
```

### Default Behavior

If you **don't** specify a `canonicalUrl`, the system automatically generates one:

```
https://devbrew.ai/{content-type}/{slug}
```

This is the correct behavior for original content.

## Implementation Details

### Contentlayer Configuration

The slug system is implemented in `contentlayer.config.ts`:

1. **Frontmatter field**: Optional `slug` field in document types
2. **Computed slug**: Uses custom slug if provided, otherwise extracts from filename
3. **Computed path**: Combines content type with slug for full path

```typescript
slug: {
  type: 'string',
  resolve: (doc) => {
    if (doc.slug) {
      return doc.slug  // Use custom slug
    }
    return doc._raw.flattenedPath.replace(/^.+?(\/)/, '')  // Fallback to filename
  },
}
```

### Metadata Generation

In `app/blog/[...slug]/page.tsx` (and similar pages):

```typescript
alternates: {
  canonical: post.canonicalUrl || `${siteMetadata.siteUrl}/${post.path}`,
}
```

This ensures:

- Custom `canonicalUrl` is used if specified
- Otherwise, auto-generates from the slug-based path

## Migration Guide

If you have existing content without slugs:

1. **Review existing URLs**: Check what URLs are currently in use
2. **Add slugs gradually**: Start with new content, then migrate old content
3. **Set up redirects**: If changing URLs, add redirects in `next.config.js`
4. **Update internal links**: Search for hardcoded paths and update them

## SEO Benefits

Short, descriptive slugs improve:

- **User experience**: Easier to read and remember
- **Social sharing**: Cleaner URLs in social media posts
- **Search rankings**: Keywords in URLs can help SEO
- **Analytics**: Easier to track and report on specific content

## Questions?

For implementation details, see:

- `contentlayer.config.ts` - Slug computation logic
- `app/blog/[...slug]/page.tsx` - URL routing and metadata
- `layouts/PostLayout.tsx` - How slugs are used in components
