# Case Studies Documentation

This guide explains how to create and manage case studies for the Devbrew website.

## Adding a New Case Study

1. Create a new `.mdx` file in `/data/case-studies/`
2. Add the required frontmatter fields:

```yaml
---
title: 'Your Case Study Title'
date: '2025-01-15'
lastmod: '2025-01-15'
tags: ['ai', 'fintech', 'relevant-tags']
draft: false
summary: 'A brief summary of the case study'
images: ['/static/images/case-studies/your-case-study-slug/og.png']
authors: ['default']
layout: PostLayout
canonicalUrl: 'https://www.devbrew.ai/case-studies/your-case-study-slug'
clientLogo: '/static/images/logos/client-logo.svg' # Optional: Client logo path
clientName: 'Client Name' # Optional: Client name for alt text
---
```

## Client Logos

### Adding a Client Logo

1. Place the client logo in `/public/static/images/logos/`
2. Supported formats: SVG (preferred), PNG, or JPG
3. Recommended size: 120x48px or similar aspect ratio
4. Logo should work well on dark backgrounds (the card header uses a dark gradient)

### Logo Guidelines

- **For client case studies**: Add the client's logo using `clientLogo` and `clientName` fields
- **For Devbrew case studies**: Either omit these fields or use `/static/images/logo.svg`
- **Logo colors**: Ensure logos are visible on dark blue/slate gradient backgrounds
- **White/light logos**: Work best on the dark gradient header

### Example with Client Logo

```yaml
clientLogo: '/static/images/logos/acme-corp.svg'
clientName: 'Acme Corporation'
```

### Example without Client Logo (Devbrew default)

If you omit `clientLogo` and `clientName`, the card will display "Devbrew" with a default badge.

## Card Display

Case study cards feature:

- **Dark gradient header** (matching individual case study pages)
- **Client logo** (or Devbrew branding) in the center
- **Tags** below the header
- **Title and summary** in the card body
