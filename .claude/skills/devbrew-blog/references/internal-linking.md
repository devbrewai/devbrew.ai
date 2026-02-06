# Internal linking and cross-referencing guide

## Why internal linking matters

Internal links between Devbrew blog posts serve three purposes:

1. **SEO**: Search engines use internal links to understand site structure and distribute page authority. More internal links to a post signal that it is important.
2. **Reader retention**: Related links keep readers on the site longer and build a deeper understanding of Devbrew's expertise.
3. **Authority building**: Referencing your own prior analysis shows depth of thought and a growing body of work.

## How to scan for related posts

### Blog content location

Blog posts are stored in `data/blog/` as `.mdx` files. Each file contains YAML frontmatter followed by the post body.

If the directory is not found at `data/blog/`, check these alternatives: `content/blog/`, `src/content/blog/`, or use `find . -name "*.mdx" -path "*/blog/*"` to locate them.

### Scanning process

1. **List all blog files**: Read the `data/blog/` directory to get all `.mdx` files.
2. **Read frontmatter**: For each file, extract the `title`, `slug`, `tags`, and `summary` fields from the YAML frontmatter.
3. **Match by relevance**: Compare the current post's topic and tags against existing posts. Look for:
   - Overlapping tags (especially specific tags, not just broad ones like `payments` or `ai`)
   - Related sub-topics (e.g., a post about settlement float is related to a post about treasury management)
   - Complementary angles (e.g., a post about fraud detection pairs with a post about false positive reduction)
4. **Shortlist 1-3 posts**: Select the most relevant posts. Do not try to link everything.
5. **Read the body**: For shortlisted posts, read the full content to find specific insights, data points, or quotes worth referencing.

### When to scan

Scan BEFORE writing the draft (Step 2 in the workflow). This way, internal references can be woven in naturally during drafting rather than bolted on after.

## How to reference existing posts

### Inline contextual links (preferred)

Weave the reference naturally into a sentence. The link text should describe what the reader will learn, not just say "click here" or "read more."

**Good examples:**

"Your settlement cycle is not just a timing issue. As we broke down in [How Settlement Float Costs You $47K Per Quarter](/blog/settlement-float-recovery), the real cost is the liquidity trapped between clearing and funding."

"This connects directly to the false positive problem. Most rule-based AML systems flag 95% legitimate transactions, which we covered in [Reducing AML False Positives Without Increasing Risk](/blog/aml-false-positive-reduction)."

"If your team is still routing 80% of volume through a single provider, the [FX cost analysis we published last month](/blog/fx-cost-reduction-routing) shows exactly how much margin you are leaving on the table."

**Bad examples:**

"For more information, click here." (vague, no context)

"We wrote about this before (link)." (lazy, does not tell the reader what they will get)

"Related: [Post Title](/blog/slug)" (too generic, not woven into the narrative)

### Brief quotes from existing posts

When an existing post has a specific data point, insight, or framework that supports the current argument, quote it briefly and link to the source.

**Format:**
"As we noted in [Post Title](/blog/slug), '{brief quote or paraphrased insight}.'"

**Good example:**

"As we noted in [Payment Reliability for Lean Teams](/blog/payment-reliability-lean-teams), 'the downstream cost is not just the fee markup. It is the settlement delay, the reconciliation overhead, and the FX exposure you did not hedge.'"

**Rules for quoting:**

- Keep quotes to 1-2 sentences maximum
- Always link to the source post
- Paraphrasing is fine (and often better than exact quotes for flow)
- Only quote when the original phrasing adds genuine impact

### Related reading section (optional)

For posts with 2-3 strong related links, you can add a short section near the end of the post, before the CTA.

**Format:**

```markdown
## Keep reading

- [How Settlement Float Costs You $47K Per Quarter](/blog/settlement-float-recovery)
- [Reducing AML False Positives Without Increasing Risk](/blog/aml-false-positive-reduction)
```

Use this sparingly. Inline contextual links are stronger for both SEO and reader engagement. The "keep reading" section is a supplement, not a replacement.

## Rules and guardrails

### Do

- Reference posts that genuinely add value to the current topic
- Use descriptive link text that tells the reader what they will learn
- Weave references into the natural flow of the argument
- Prioritize recent, high-performing posts
- Link to posts with overlapping target audiences

### Do not

- Force links where they do not fit naturally
- Link more than 3 existing posts per article (diminishing returns)
- Reference a post just because it exists on the same broad topic
- Use the same link anchor text repeatedly
- Link to draft posts (check that `draft: false` in the referenced post)
- Break the reading flow to insert a reference

### Internal link title formatting

**Always use sentence case** for internal link anchor text. This maintains reading continuity within paragraphs and sentences.

- Convert the original title to sentence case when linking
- Paraphrase or adapt when it improves flow (optional, but often better)
- The goal is natural reading, not preserving the original title formatting

**Examples:**

Original title: "How Settlement Float Costs You $47K Per Quarter"

- Using title in sentence case: "We covered this in [how settlement float costs you $47K per quarter](/blog/settlement-float-recovery)."
- Adapted for flow (often better): "We covered this in [our analysis of settlement float costs](/blog/settlement-float-recovery)."
- Paraphrased for context: "As we explained in [how settlement float quietly drains working capital](/blog/settlement-float-recovery), the real cost is liquidity trapped between clearing and funding."

**Do not use title case** in anchor text, even if that's how the original post title is formatted. Title case breaks reading flow within sentences.

### Link format

All internal blog links use the pattern: `/blog/{slug}`

Example: A post with slug `settlement-float-recovery` links as `/blog/settlement-float-recovery`

### Prioritizing which posts to reference

When multiple posts are related, prioritize:

1. Posts that provide data or analysis supporting the current argument
2. Posts targeting the same audience role (e.g., Treasury Manager to Treasury Manager)
3. Recent posts (within the last 30-60 days) for freshness signals
4. Posts with higher tag overlap (3+ shared tags)
5. Posts that cover a prerequisite or deeper dive on a sub-topic
