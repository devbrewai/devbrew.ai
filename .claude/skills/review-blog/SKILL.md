---
name: review-blog
description: Review and evaluate Devbrew blog posts for claim accuracy, source quality, link integrity, audience value, and conversion effectiveness. Use when asked to review, audit, evaluate, score, or QA a blog post. Works on draft posts before publishing or existing published posts.
---

# Devbrew Blog Post Review and Evaluation

This skill performs verification and evaluation of Devbrew blog posts. It does not create or rewrite content. It produces a structured review report with specific pass/fail results, a composite score, and prioritized action items.

This skill evaluates against the standards defined in the `write-blog` skill. Cross-reference that skill's quality checklist, voice rules, and content framework for the creation standards this review validates against.

## Review workflow

### Step 1: Load the post and content brief

Accept two inputs:

1. **Blog post**: A file path to an `.mdx` file in `data/blog/`, a slug (resolve to `data/blog/{slug}.mdx`), or a draft pasted directly into the conversation. Read the full file. Parse YAML frontmatter separately from the MDX body.
2. **Content brief**: The original brief used to write the post. This should contain: topic, target audience, problem, solution, common mistakes, business outcome, and Devbrew repositioning. The brief provides the baseline for evaluating whether the post delivers on its intent.

If either input is missing, ask before proceeding. Both are required for a complete review.

### Step 2: Structural and metadata review

Validate all frontmatter fields against the rules in the `write-blog` skill's [references/blog-metadata.md](../write-blog/references/blog-metadata.md). Check every item below:

- `slug` is present and matches the filename (without `.mdx`)
- `title` is title case
- `summary` follows the headline formula (result + objection + timeframe) and is sentence case
- `tags` are 6-7 maximum, checked against `app/tag-data.json` for existing tag reuse, and include at least one AI-related tag (`ai`, `machine-learning`, or `applied-ai`)
- `authors` is `['joe-kariuki']`
- `layout` is `PostLayout`
- `ogTitle` mirrors `title` exactly
- `ogDescription` mirrors `summary` exactly
- `images` path follows `/static/images/blog/{slug}/og.png`
- No escaped `$` or `%` in frontmatter fields
- `$` and `%` are properly escaped in body content (for LaTeX rendering)
- Em dash rule applied correctly (see below)
- Word count is 1,000-1,200 (report actual count)
- Subheadings appear every 200-300 words, in sentence case
- No paragraph longer than 4 lines
- All 8 content framework sections are present (core mechanism, system steps, common mistakes, quantified outcomes, hidden difficulty, action steps, Devbrew's solution, soft CTA)
- "Devbrew" is spelled correctly (not "DevBrew")
- Short intro: 3-5 sentences maximum

#### Em dash rule

The ban is on em dashes (—) used as sentence punctuation, where a comma, period, or semicolon should be used instead. Hyphens in compound words are always allowed:

- **Allowed:** "pre-trained models," "real-time scoring," "end-to-end pipeline," "Series B-D or mid-market"
- **Not allowed:** "The system processes payments — even cross-border ones — in real time." Replace with: "The system processes payments, even cross-border ones, in real time."

When an em dash is found as sentence punctuation, flag it and recommend replacing with a comma or period.

### Step 3: Claim validation

Extract every factual claim, numerical assertion, and statistical reference from the body. For each claim:

1. **Identify the claim text** and the source link (if any).
2. **Classify the claim:**
   - **Sourced claim**: Has a linked citation. Use WebFetch to retrieve the source page and verify the specific number or fact matches what the source actually says. Check for: exact number match, context accuracy (is the stat used in the right context?), and recency (is the source current or outdated?).
   - **Mathematical derivation**: Calculated from other numbers in the post (e.g., "500,000 x $120 x 22% = $13.2M"). Verify the arithmetic independently.
   - **Unsourced claim**: A number or factual assertion with no linked citation. Flag as needing a source, unless it is a general knowledge statement or a logical deduction clearly derived from sourced data in the same post.

3. **Output for each claim:** The claim text, source URL (or "unsourced"), verification result (PASS / FAIL / NEEDS SOURCE), and a brief note if failed explaining what the source actually says or what the correct calculation is.

### Step 4: Link integrity check

Extract all links from the post (markdown link syntax). Categorize and check each:

- **External links** (https://...): Run `curl -sL -o /dev/null -w "%{http_code}" {url}` to check HTTP status. PASS = 200-299. FAIL = 4xx/5xx. WARN = 3xx (redirects, note the destination). If a site blocks curl or times out, note "unable to verify" rather than marking as FAIL.
- **Internal links** (/blog/{slug}): Verify the target file exists at `data/blog/{slug}.mdx` and that `draft` is not `true` in that file's frontmatter. Do not link to draft posts.
- **Cal.com links**: Verify the link follows the UTM template from the `write-blog` skill's [references/utm-tracking.md](../write-blog/references/utm-tracking.md). Check: `utm_source=blog`, `utm_medium=post`, `utm_campaign` follows the slug naming convention, `problem` and `stake` parameters are present and URL-encoded.
- **Email links** (mailto:joe@devbrew.ai): Verify format.

### Step 5: Source quality assessment

For every external source link, classify it by tier using [references/source-tier-classification.md](references/source-tier-classification.md).

Calculate the Tier 1-2 percentage across all cited sources. Target: 80%+ at Tier 1-2.

For each Tier 3 source, note whether a Tier 1-2 alternative exists for the same data point. If the Tier 3 source cites a Tier 1 primary source, recommend linking to the primary source directly.

### Step 6: Value and conversion assessment

This is the qualitative evaluation. Score each criterion using the detailed rubric in [references/scoring-rubric.md](references/scoring-rubric.md). Evaluate against the content brief provided in Step 1.

**Brief alignment:**

- Does the post address the problem stated in the content brief?
- Does it target the audience specified in the brief?
- Does it present the solution described in the brief?
- Does it cover the common mistakes from the brief?
- Does it deliver the business outcome from the brief?
- Does the Devbrew repositioning match the brief's intent?
- Flag any significant drift from the original brief.

**Audience value** (1-5 per criterion):

- Does the post address a specific pain point for a specific role?
- Is the target audience within Devbrew's TAM (Series B-D or mid-market U.S.-based payments companies)?
- Does it provide actionable insights the reader can use immediately?
- Does the reader learn something they did not know before?
- Is the technical depth appropriate for the target audience?

**Conversion effectiveness** (1-5 per criterion):

- Does the 8-step framework flow naturally toward seeing Devbrew as the implementation partner?
- Is the "hidden difficulty" section convincing without being manipulative?
- Is the soft CTA genuinely value-based (evaluation/audit/walkthrough, not a demo or sales call)?
- Does the post build trust through transparency (explaining the system, not hiding the concept)?
- Does it position custom AI as the core solution?
- Is the Cal.com link present with proper UTM tracking?

**Voice compliance** (1-5):

- Written WITH the reader (conversational, second person)?
- No banned words ("revolutionize," "game-changer," "cutting-edge," "world-class," "leverage")?
- Em dash rule followed (no em dashes as sentence punctuation)?
- Active voice, present tense?
- 8th grade reading level (unless technical depth required)?
- No fabricated case studies, client testimonials, or unsourced metrics?

### Step 7: Qualitative content review

After completing the scored evaluation (Steps 1-6), perform a qualitative content review using [references/qualitative-review.md](references/qualitative-review.md).

This step evaluates the post as a piece of writing, not just as a checklist. It assesses voice consistency, narrative arc, audience alignment, conversion logic, and consistency with published posts. It does not change the 100-point score.

To perform this step:

1. Read the post once through without scoring. Note your overall impression.
2. Read 2-3 of the most recently published posts (by `date` field, where `draft: false`) from `data/blog/` for comparison.
3. Work through each dimension in the qualitative review reference, answering the specific questions.
4. Write the qualitative assessment in the format specified in the reference.
5. Add any editorial recommendations to the action items section.

## Output format

Produce the review report in this exact structure:

```markdown
# Blog Review: {post title}

**Reviewed:** {date}
**File:** data/blog/{slug}.mdx
**Overall Score:** {X}/100

---

## 1. Metadata and structure ({X}/20)

| Check                              | Result    | Notes             |
| ---------------------------------- | --------- | ----------------- |
| Slug present and matches filename  | PASS/FAIL |                   |
| Title is title case                | PASS/FAIL |                   |
| Summary follows headline formula   | PASS/FAIL |                   |
| Tags: 6-7, existing tags preferred | PASS/FAIL |                   |
| ogTitle mirrors title              | PASS/FAIL |                   |
| ogDescription mirrors summary      | PASS/FAIL |                   |
| Images path correct                | PASS/FAIL |                   |
| No escaped $/% in frontmatter      | PASS/FAIL |                   |
| $/% escaped in body                | PASS/FAIL |                   |
| Em dash rule followed              | PASS/FAIL |                   |
| Word count 1,000-1,200             | PASS/FAIL | Actual: {N} words |
| Subheadings every 200-300 words    | PASS/FAIL |                   |
| 8-step framework sections present  | PASS/FAIL | Missing: {list}   |
| Devbrew spelled correctly          | PASS/FAIL |                   |

**Section score:** {passed}/{total} checks = {X}/20

---

## 2. Claim validation ({X}/25)

| #   | Claim          | Source        | Verification           | Notes |
| --- | -------------- | ------------- | ---------------------- | ----- |
| 1   | "{claim text}" | [source](url) | PASS/FAIL/NEEDS SOURCE |       |
| 2   | "{claim text}" | unsourced     | NEEDS SOURCE           |       |

**Claims verified:** {N}
**Passed:** {N} | **Failed:** {N} | **Needs source:** {N}
**Math checks:** {N} verified, {N} errors found
**Section score:** {X}/25

---

## 3. Link integrity ({X}/15)

| #   | Link text     | URL         | Type     | Status | Result |
| --- | ------------- | ----------- | -------- | ------ | ------ |
| 1   | "text"        | url         | External | 200    | PASS   |
| 2   | "text"        | /blog/slug  | Internal | Exists | PASS   |
| 3   | "Book a call" | cal.com/... | CTA      | 200    | PASS   |

**Links checked:** {N}
**Passed:** {N} | **Failed:** {N} | **Warnings:** {N}
**Cal.com UTM compliance:** PASS/FAIL
**Section score:** {X}/15

---

## 4. Source quality ({X}/15)

| #   | Source          | Domain             | Tier   | Notes             |
| --- | --------------- | ------------------ | ------ | ----------------- |
| 1   | Federal Reserve | federalreserve.gov | Tier 1 | Primary           |
| 2   | McKinsey        | mckinsey.com       | Tier 2 | Industry research |

**Source distribution:** Tier 1: {N} | Tier 2: {N} | Tier 3: {N} | Tier 4: {N}
**Tier 1-2 percentage:** {X}% (target: 80%+)
**Section score:** {X}/15

---

## 5. Audience value ({X}/15)

**Target audience identified:** {role at company type}
**Content brief alignment:** {summary of alignment or drift}

| Criterion                             | Score (1-5) | Assessment         |
| ------------------------------------- | ----------- | ------------------ |
| Specific pain point for specific role | {N}         | {brief assessment} |
| Within Devbrew's TAM                  | {N}         | {brief assessment} |
| Actionable insights                   | {N}         | {brief assessment} |
| Novel information                     | {N}         | {brief assessment} |
| Technical depth appropriate           | {N}         | {brief assessment} |

**Section score:** {sum}/25 normalized to {X}/15

---

## 6. Conversion effectiveness ({X}/10)

| Criterion                            | Score (1-5) | Assessment         |
| ------------------------------------ | ----------- | ------------------ |
| Framework flows to Devbrew naturally | {N}         | {brief assessment} |
| Hidden difficulty is convincing      | {N}         | {brief assessment} |
| Soft CTA is value-based              | {N}         | {brief assessment} |
| Builds trust through transparency    | {N}         | {brief assessment} |
| Custom AI positioned as solution     | {N}         | {brief assessment} |
| Cal.com link with UTM present        | {N}         | {brief assessment} |

**Section score:** {sum}/30 normalized to {X}/10

---

## 7. Qualitative content review

### Content quality

{2-4 sentence assessment}
**Strongest section:** {section name and why}
**Weakest section:** {section name and why}
**Recommendation:** {specific action or "No changes needed"}

### Target audience alignment

**Target reader:** {role at company type, from content brief}
**Self-identification test:** {(a), (b), or (c) with explanation}
**Recommendation:** {specific action or "No changes needed"}

### Conversion effectiveness

**Funnel logic:** {Does the "I could do this / but I can't" sequence land?}
**Differentiation:** {Is the "why Devbrew" case clear?}
**Objections addressed:** {list which ones are handled, which are missed}
**Recommendation:** {specific action or "No changes needed"}

### Cross-post consistency

**Compared against:** {2-3 post slugs}
**Voice consistent:** Yes/No {brief note if No}
**Quality baseline met:** Yes/No {brief note if No}
**Positioning consistent:** Yes/No {brief note if No}

---

## Summary

| Dimension                | Score  | Weight   | Weighted    |
| ------------------------ | ------ | -------- | ----------- |
| Metadata and structure   | {X}/20 | 20%      | {X}         |
| Claim validation         | {X}/25 | 25%      | {X}         |
| Link integrity           | {X}/15 | 15%      | {X}         |
| Source quality           | {X}/15 | 15%      | {X}         |
| Audience value           | {X}/15 | 15%      | {X}         |
| Conversion effectiveness | {X}/10 | 10%      | {X}         |
| **Total**                |        | **100%** | **{X}/100** |

## Action items

### Must fix (score impact > 5 points)

1. {specific action item}

### Should fix (score impact 2-5 points)

1. {specific action item}

### Consider (score impact < 2 points)

1. {specific action item}

### Editorial (qualitative review)

1. {specific editorial recommendation from the qualitative review}

### Source upgrade opportunities

1. {Tier 3 source that could be upgraded to Tier 1-2, with suggested alternative}
```

## Scoring weights

| Dimension                | Weight | Rationale                                                                                                                                                                                    |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claim Validation         | 25%    | Highest weight. The target audience (analytical finance buyers at Series B-D or mid-market payments companies) verifies claims. A false number destroys credibility.                         |
| Metadata & Structure     | 20%    | Structural compliance ensures the post builds correctly, renders properly, and follows the 8-step framework.                                                                                 |
| Source Quality           | 15%    | Primary sources build authority. Vendor whitepapers undermine Devbrew's positioning as an independent engineering firm.                                                                      |
| Link Integrity           | 15%    | Broken links damage UX and SEO. Dead sources undermine cited claims.                                                                                                                         |
| Audience Value           | 15%    | The post must serve the target audience's actual needs and align with the content brief.                                                                                                     |
| Conversion Effectiveness | 10%    | Lowest weight. Devbrew's strategy is "explain the system, sell the implementation." Value comes first, conversion follows naturally. Overweighting conversion incentivizes salesier content. |

## Score thresholds

- **90-100**: Publish-ready. No action items, or only "consider" items.
- **75-89**: Needs minor revisions. Fix "should fix" items before publishing.
- **60-74**: Needs significant revisions. Multiple "must fix" items.
- **Below 60**: Major rewrite needed. Fundamental issues with claims, sources, or audience fit.
