# Blog OG Image Implementation

## Overview

Dynamic Open Graph (OG) images are now automatically generated for all blog posts using Next.js's `ImageResponse` API.

## How It Works

### 1. OG Image API Route

**Location:** `/app/api/og/blog/route.tsx`

This edge function generates a 1200x630px image with:

- Blog post title
- Description/summary
- Devbrew logo
- "BLOG" badge
- Gradient background with radial overlays

**Usage:**

```
https://devbrew.ai/api/og/blog?title={encodedTitle}&description={encodedDescription}
```

### 2. Automatic Integration

**Location:** `/app/blog/[...slug]/page.tsx`

The `generateMetadata` function automatically:

1. Checks if the blog post has custom images in frontmatter
2. If yes: Uses those custom images
3. If no: Generates a dynamic OG image URL with the post's title and description

### 3. Blog Post Frontmatter

Blog posts can optionally override the OG image by adding an `images` field:

```yaml
---
title: 'My Blog Post'
summary: 'This is a great post'
images: ['/static/images/custom-og.png'] # Optional: Use custom image
ogTitle: 'Custom OG Title' # Optional: Override title for OG
ogDescription: 'Custom OG description' # Optional: Override description for OG
---
```

If `images` is not provided, the dynamic OG image will be generated automatically.

## Design

The OG image design matches the existing case study and research OG images:

- **Background:** Dark blue gradient (#0f172a to radial overlays)
- **Typography:**
  - Title: 56px, bold, white
  - Description: 28px, light blue (#bfdbfe)
- **Badge:** "BLOG" in uppercase with glassmorphism effect
- **Logo:** Devbrew wordmark in white

## Testing

To test the OG image locally:

1. Start the dev server: `bun run dev`
2. Visit: `http://localhost:3000/api/og/blog?title=Test+Title&description=Test+Description`
3. You should see a 1200x630px image rendered

To verify it's working on a blog post:

1. Open a blog post page
2. View page source
3. Look for `<meta property="og:image"` tags
4. The content should point to `/api/og/blog?title=...`

## Social Media Preview

When sharing blog post URLs on:

- **Twitter/X:** Shows as a large summary card
- **LinkedIn:** Shows as a rich preview with image
- **Facebook:** Shows as a link preview with image
- **Slack/Discord:** Shows as an embedded preview

## Performance

- **Runtime:** Edge function for fast global delivery
- **Caching:** Automatically cached by Next.js and CDN
- **Generation Time:** < 100ms per image
