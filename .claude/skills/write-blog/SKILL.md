---
name: write-blog
description: Write blog posts and social media promotion content for Devbrew, an AI engineering firm serving fintech and payments companies. Use when asked to write, draft, create, or edit a blog post, article, LinkedIn post, X/Twitter post, or any marketing content for devbrew.ai. Also use when asked to promote a blog post on social media, generate a Cal.com tracking link, or create content following the Devbrew content framework.
---

# Devbrew Blog Content Creation

## Company identity

Devbrew is an AI engineering and applied research firm helping Series A-C U.S.-based (or have operations in the U.S) payments companies solve their pain points with custom AI (designing and deploying custom AI solutions) that fit within their existing workflows.

**Core positioning:** "Explain the system, sell the implementation." Give away technical insights freely to build trust. Position why professional implementation matters. Make readers think "we need custom AI" and see Devbrew as the team to build it.

**Contact:** joe@devbrew.ai | https://cal.com/joekariuki/devbrew

## Voice and style rules

- Write WITH the reader, not AT them. Conversational, not instructional.
- Professional but approachable. Technical but explains clearly.
- Confident without hype. Direct, no fluff.
- NEVER use em dashes (--). Use commas, periods, or restructure the sentence.
- NEVER use: "revolutionize," "game-changer," "cutting-edge," "world-class," "leverage."
- Active voice. Present tense when possible. Second person "you" focused.
- 8th grade reading level unless technical depth is required for the audience.
- Sentence case for all subheadings. Title case for the main title ONLY.
- Company name is "Devbrew" (not "DevBrew").
- Every number and outcome must be mathematically verifiable and transparently sourced.
- NEVER fabricate case studies, client testimonials, or unsourced metrics. Devbrew has not worked with clients yet. All content avoids fabricated social proof.
- Source stats from: Federal Reserve, U.S. Treasury, PYMNTS Intelligence, IBM Security, McKinsey, FSB, Adyen, or equivalent credible, citable sources.
- **Prefer primary sources over secondary sources.** Use original research, government reports, and regulatory filings over vendor whitepapers, news articles summarizing studies, or competitor content. If citing a secondary source, verify the original data and link to the primary source when possible.
- **Citation anchor text must be short**: Use 2-5 words for linked text, not entire sentences. Good: "costs [vary by corridor](url)". Bad: "[the number of intermediaries and fees depend on the currencies involved](url)".
- Always anchor AI and machine learning as the core solution. Emphasize "custom AI trained on YOUR data" rather than generic automation.

## Blog post workflow

### Step 1: Gather inputs

Before writing, confirm you have:

- Topic and specific pain point (hyper-specific treasury/payments topics work best)
- Target audience (specific role: CFO, Treasury Manager, VP of Risk, etc.)
- Key research, data points, or source material
- Desired reader action after reading

If any are missing, ask before proceeding.

### Step 2: Scan for related existing blog posts

Before writing, scan the blog content directory for posts related to the current topic. For detailed instructions on how to scan, reference, and link, read [references/internal-linking.md](references/internal-linking.md).

Quick process:

1. Scan `data/blog/` for all existing `.mdx` or `.md` files
2. Read the frontmatter (title, slug, tags, summary) of each post
3. Identify posts with overlapping tags or related topics
4. Note 1-3 related posts to reference naturally in the new article
5. Read the body of those related posts to find quotable insights or data points

Only reference posts that genuinely add value. Do not force internal links.

### Step 3: Craft the title

The main title is SEO-friendly, contextual, and speaks directly to the target audience. It does not need to follow a formula. If the content brief or topic already includes a title, use that as the blog title.

- **Title case** (capitalize major words)
- Hook the reader with curiosity, a specific number, or a counterintuitive statement
- Create emotional response with words like "steal," "lost," "missed," "hidden," "trap"
- The title is your TAM (total addressable market)
- Keep it concise (under 70 characters ideal)

**Good titles:**

- "The FX Trap"
- "Show ROI First. Build Later"
- "The $100K Cost of Unpredictable Settlements"
- "Frictionless Onboarding Is Not a Feature"

### Step 4: Write using the 8-step content framework

Follow the Devbrew "Explain the System, Sell the Implementation" framework. For detailed instructions with examples, read [references/content-framework.md](references/content-framework.md).

The 8 steps in order:

1. **Core mechanism** - explain the underlying idea in clear, simple language
2. **System steps** - show the architecture/workflow, not the engineering
3. **Common mistakes** - highlight failure patterns fintech and payments teams make
4. **Quantified outcomes** - specific numbers backed by credible sources
5. **Hidden difficulty** - why most teams cannot implement this internally
6. **Action steps** - what the reader can start doing in a defined timeframe (tied to headline)
7. **Devbrew's solution** - connect Devbrew's capability to the hard part naturally
8. **Soft CTA** - light, optional, value-based. Thought partner, not vendor.

### Step 5: Format the blog post

- Target 5-6 minute read (1,000-1,200 words). Shorter articles get better completion rates.
- Subheadings every 200-300 words (sentence case, not title case)
- Short intro paragraph: 2-3 sentences maximum
- No paragraph longer than 3-4 lines on screen
- One core problem, one solution per post
- Include credible sources with specific citations
- Reference a clear implementation timeframe (e.g., 60 days)
- End with one specific, low-friction next step

### Step 6: Self-edit passes

Run three editing passes before delivering:

**Conciseness:** Cut 30% of words without losing meaning. Remove filler: "very," "really," "actually," "just," "that" (when unnecessary). Replace "in order to" with "to," "due to the fact that" with "because," "at this point in time" with "now."

**Clarity:** Replace jargon with plain language (unless the audience expects specific terminology). Break sentences over 20 words. One idea per sentence. Vary sentence length for rhythm.

**Readability:** No paragraphs over 3-4 lines. Transitions between ideas. Line breaks for breathing room. Read it aloud mentally. Every sentence must earn its place.

### Step 7: Generate blog post metadata

Every blog post requires YAML frontmatter metadata. For the full template and field-by-field rules, read [references/blog-metadata.md](references/blog-metadata.md).

Key rules:

- **NEVER escape `$` or `%` in frontmatter**: Use plain characters in title, summary, and all YAML fields. Escaping causes build errors. Write `title: "The $40 Hidden Tax"` not `title: "The \$40 Hidden Tax"`. Only escape these characters in the blog body content.
- **slug** (REQUIRED): Short, SEO-friendly, lowercase, hyphen-separated. Must match the filename without `.mdx`. This field is required by Contentlayer and the build will fail without it.
- **summary**: This doubles as the subtitle. Write it as a short, SEO-optimized sentence that captures the core value proposition. Speaks directly to the pain point and outcome.
- **tags**: 6-7 tags maximum. ALWAYS read the project's `tag-data.json` file first to check existing tags. Prefer reusing existing tags over creating new ones. Only create a new tag if no existing tag fits.
- **authors**: Always `['joe-kariuki']`
- **layout**: Always `PostLayout`
- **ogTitle**: Mirrors the title exactly
- **ogDescription**: Mirrors the summary exactly
- **images**: Follow the path pattern `/static/images/blog/{slug}/og.png`

### Step 8: Generate the Cal.com tracking link

Every blog post needs a UTM-tracked Cal.com booking link for the CTA. For the full framework with templates and examples, read [references/utm-tracking.md](references/utm-tracking.md).

Quick reference:

```
https://cal.com/joekariuki/devbrew?utm_source=blog&utm_medium=post&utm_campaign={post_slug}&problem={url_encoded_problem}&stake={url_encoded_stake}
```

Slug rules: `{topic}_{subtopic}_{timeframe}`, lowercase, underscores, under 30 characters. Use abbreviations for common terms (kyc, aml, kyb, etc.).

## Social media promotion workflow

When asked to write LinkedIn or X posts (often after writing a blog post), read [references/social-promotion.md](references/social-promotion.md) for the full AIDA framework and platform-specific rules.

Quick reference:

**LinkedIn posts:**

- 80-100 words maximum. Posts over 147 words get zero engagement.
- Prose format only. NO bullet points. Bullets signal "scan this" not "engage."
- Single specific pain point. Single specific number (not a range).
- Line breaks every 1-2 sentences for mobile readability.
- End with a question or direct CTA.
- Follow the AIDA formula: Attention, Interest, Desire, Action.

**X/Twitter posts:**

- Under 280 characters. 30-50 words ideal.
- Single hook + single insight + CTA.
- No threads. Single posts perform better.
- Best days: Monday through Thursday. Friday kills X reach.

## Quality checklist

Before delivering any content:

- [ ] Written WITH the reader, not AT them (conversational, not lecture-style)
- [ ] No em dashes anywhere in the content
- [ ] No fabricated claims, stats, case studies, or client references
- [ ] All numbers sourced from credible, citable data
- [ ] Stats and data sourced from primary sources (not vendor whitepapers or news summaries)
- [ ] AI/ML positioned as the core solution throughout
- [ ] Emphasizes "custom AI trained on YOUR data" (not generic automation)
- [ ] Devbrew spelled correctly (not "DevBrew")
- [ ] CTA is soft, value-based, positions Devbrew as thought partner
- [ ] Summary follows the headline formula (result + objection + timeframe) and is sentence case
- [ ] Blog metadata frontmatter is complete and valid YAML
- [ ] No escaped `$` or `%` in frontmatter (only escape in body content)
- [ ] Slug is short, SEO-friendly, and matches the topic intent
- [ ] Summary complements the title (not a repeat or truncation)
- [ ] Tags are 6-7 max, checked against tag-data.json, existing tags preferred
- [ ] Scanned existing blog posts for related content
- [ ] 1-3 internal links included where genuinely relevant (not forced)
- [ ] Internal links use descriptive anchor text and correct /blog/{slug} format
- [ ] Cal.com link generated with proper UTM parameters
- [ ] Blog is 1,000-1,200 words (5-6 min read)
- [ ] LinkedIn post is 80-100 words, prose, no bullets
- [ ] X post is under 280 characters
