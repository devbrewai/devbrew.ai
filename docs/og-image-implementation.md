# Dynamic OG Image Implementation

## Overview

Dynamic Open Graph (OG) images have been implemented for case studies and research articles. When shared on social media platforms (Twitter, LinkedIn, Facebook, etc.), each article now generates a beautiful, branded OG image featuring:

- **Title** - The article/case study title
- **Description** - A short summary (truncated to 150 characters)
- **DevBrew Logo** - Brand text in the footer
- **Gradient Background** - Matching the site's design (slate-900 to blue-900)
- **Badge** - "Case Study" or "Research" label

## Implementation Details

### Technology Stack

- **@vercel/og** - Next.js Image Generation API for dynamic OG images
- **Edge Runtime** - Fast, globally distributed image generation

### Files Created

1. **`/app/api/og/case-study/route.tsx`**
   - API route for generating case study OG images
   - Accepts `title` and `description` query parameters
   - Returns 1200x630 PNG image

2. **`/app/api/og/research/route.tsx`**
   - API route for generating research article OG images
   - Same functionality as case study route with "Research" badge

### Files Modified

1. **`/app/work/[...slug]/page.tsx`**
   - Updated `generateMetadata` function to use dynamic OG image URL
   - Removed static image fallback logic

2. **`/app/research/[...slug]/page.tsx`**
   - Updated `generateMetadata` function to use dynamic OG image URL
   - Removed static image fallback logic

## How It Works

### URL Structure

```
https://www.devbrew.ai/api/og/case-study?title=YOUR_TITLE&description=YOUR_DESCRIPTION
https://www.devbrew.ai/api/og/research?title=YOUR_TITLE&description=YOUR_DESCRIPTION
```

### Example

For the case study "AI Fraud Detection & Sanctions Screening for Cross-Border Payments":

```
https://www.devbrew.ai/api/og/case-study?title=AI%20Fraud%20Detection%20%26%20Sanctions%20Screening%20for%20Cross-Border%20Payments&description=An%20open-source%20reference%20implementation...
```

### Metadata Generation

The OG image URL is automatically generated in the `generateMetadata` function:

```typescript
const ogImageUrl = `${siteMetadata.siteUrl}/api/og/case-study?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.summary || '')}`
```

This URL is then used in both OpenGraph and Twitter metadata:

```typescript
openGraph: {
  images: [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: post.title,
    },
  ],
}
```

## Testing

### Local Testing

1. Start the dev server: `bun run dev`
2. Visit the OG image URL directly in your browser:
   ```
   http://localhost:3000/api/og/case-study?title=Test%20Title&description=Test%20Description
   ```
3. You should see the generated OG image

### Social Media Testing

Use these tools to test how the OG images appear on social media:

- **Twitter/X Card Validator**: https://cards-dev.twitter.com/validator
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Simply paste your case study or research article URL and these tools will show you the OG image preview.

## Design Specifications

### Image Dimensions

- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1 (optimal for all social platforms)

### Colors

- **Background**: `#0f172a` (slate-900)
- **Gradient Overlay**: Radial gradients with blue-600 and indigo-600
- **Title**: White (`#ffffff`)
- **Description**: Light blue (`#bfdbfe`)
- **Badge Background**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Badge Border**: `rgba(255, 255, 255, 0.2)`

### Typography

- **Title**: 56px, bold, white
- **Description**: 28px, light blue
- **Logo**: 42px, bold, white
- **Badge**: 24px, semi-bold, uppercase, white

## Future Enhancements

### Client Logos for Case Studies

To add client logos to case study OG images in the future:

1. **Add logo field to frontmatter**:

   ```yaml
   ---
   title: 'Case Study Title'
   clientLogo: '/static/images/clients/company-logo.png'
   ---
   ```

2. **Update the API route** (`/app/api/og/case-study/route.tsx`):
   - Accept a `logo` query parameter
   - Fetch and render the logo image in the OG image
   - Position it in the top-right or bottom-left corner

3. **Update metadata generation**:
   ```typescript
   const ogImageUrl = `${siteMetadata.siteUrl}/api/og/case-study?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.summary || '')}&logo=${encodeURIComponent(post.clientLogo || '')}`
   ```

### Custom Backgrounds

For special case studies, you could add custom gradient colors or patterns:

- Add `bgColor` and `accentColor` query parameters
- Allow per-case-study customization via frontmatter

## Troubleshooting

### OG Image Not Updating

Social media platforms cache OG images aggressively. To force a refresh:

1. Use the platform's debugging tool (links above)
2. Click "Fetch new information" or "Scrape again"
3. Wait a few minutes and try sharing again

### Image Not Generating

1. Check that `@vercel/og` is installed: `bun add @vercel/og`
2. Verify the API route is accessible: `curl http://localhost:3000/api/og/case-study?title=Test`
3. Check the browser console for errors

### Encoding Issues

Make sure titles and descriptions are properly URL-encoded using `encodeURIComponent()`.

## Resources

- [Next.js OG Image Generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- [Vercel OG Documentation](https://vercel.com/docs/functions/edge-functions/og-image-generation)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
