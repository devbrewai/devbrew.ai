# Qualitative content review

This reference adds an interpretive review layer to the blog evaluation. It runs after the mechanical scoring (Steps 1-6) is complete. The qualitative review does not change the 100-point score. It produces a separate narrative assessment that identifies what works, what does not, and what would make the post stronger.

Evaluate against the creation standards in the `write-blog` skill: the 8-step content framework, voice rules, and quality checklist. Those define what the post should be. This review evaluates how well it achieves that standard.

## How to use this review

Read the full post once before answering any questions. Then work through each dimension below. For every dimension, answer the specific questions, then write a 2-4 sentence assessment. End each dimension with a concrete recommendation (or "No changes needed" if the dimension is strong).

The output is narrative, not scores. The goal is actionable editorial feedback.

---

## Dimension 1: Content quality

Evaluate the post as a piece of writing, independent of its marketing function.

### Voice consistency

- Does the tone stay consistent from the first sentence to the last?
- Are there sections where the voice shifts (e.g., conversational intro then lecture-style middle, or practitioner voice that suddenly turns into vendor pitch)?
- Does the post maintain second-person "you" throughout, or does it slip into third-person or passive constructions?
- Would you notice a tone break if you read it aloud?

### Narrative arc

- Does the post build toward something? Is there a clear progression from problem to insight to action?
- Does each section earn the next? Or do sections feel like isolated blocks stitched together?
- Where is the strongest moment in the post (the sentence or paragraph where the reader thinks "I need to pay attention")?
- Where is the weakest moment (the section where energy drops or the argument gets vague)?

### Specificity vs. generality

- Count the number of specific, concrete details (exact numbers, named tools, named roles, real scenarios) versus generic statements ("many companies struggle with...").
- **Substitution test:** Could you replace the company type (payments) with another industry (healthcare, logistics) and the post still works? If yes, it is too generic.
- Are the mistakes section and action steps specific enough that a reader could act on them this week without asking for clarification?

### Section-by-section assessment

For each major section (map to the 8-step framework), note:

- Does this section pull its weight? Could the post survive without it?
- Is this section the right length relative to its importance?
- Does this section contain the post's best or worst writing?

---

## Dimension 2: Target audience alignment

Evaluate whether the post speaks to a specific person, not a demographic.

### Reader recognition

- In the first 3 sentences, would the target reader (named in the content brief) think "this is about me"?
- Does the post use language the reader uses internally? (e.g., "false positives" and "alert fatigue" for risk ops, "burn rate" and "path to profitability" for a CFO, "loaded cost" and "queue backlog" for ops leaders)
- Are the scenarios described ones the reader has personally experienced, or are they textbook examples?

### Persona-specific needs

Does the post address what this specific role cares about, not what the company cares about in general?

- **CFO:** dollar impact, margin, board metrics, capital efficiency
- **VP of Engineering:** feasibility, integration complexity, team capacity
- **Head of Risk/Compliance:** regulatory exposure, false positive rates, audit readiness
- **Treasury Manager:** float, settlement timing, FX exposure, liquidity
- **Ops Leader:** cost per transaction, headcount efficiency, queue throughput, consistency

Would a person in a different role at the same company find this equally relevant? If yes, the targeting may be too broad.

### Stage and size signaling

- Does the post signal that it understands the reader's company stage?
  - **Series B-D or mid-market:** constrained engineering resources, board scrutiny on spend, need to show ROI before building, competing priorities
  - **NOT enterprise:** unlimited budget, dedicated AI teams, 18-month roadmaps
  - **NOT seed/Series A:** pre-product, no transaction data, survival mode
- Are the examples and numbers scaled to the right company size? (A \$500M annual volume example fits mid-market. A \$50B example does not.)
- Does the post avoid enterprise-only language ("digital transformation," "center of excellence," "AI governance framework") that signals the wrong audience?

### Self-identification test

Answer honestly: If you handed this post to the target reader described in the content brief, would they:

- **(a)** Forward it to a colleague?
- **(b)** Read it and move on?
- **(c)** Skim the headline and close?

If the answer is not (a), explain what would need to change.

---

## Dimension 3: Conversion effectiveness

Evaluate whether the post earns the right to mention Devbrew. The mechanical rubric checks whether the framework sections exist. This evaluates whether they work.

### Funnel logic

- Trace the reader's mental journey from the first sentence to the CTA. At each section boundary, does the reader have a reason to keep reading?
- Is there a moment where the reader thinks "I could do this myself" followed by a moment where they think "but I probably cannot"? That sequence is the conversion mechanism. Does the post execute it?
- Does the "hidden difficulty" section feel honest or manufactured? Would a technical reader agree with the difficulties described, or would they think "that is not actually that hard"?

### Competitive differentiation

- After reading the post, can the reader articulate why Devbrew (not a competitor, not an in-house team, not an off-the-shelf tool) is the right choice?
- Does the post differentiate against:
  - **Build-it-yourself:** the hidden complexity argument
  - **Generic automation tools:** the "custom AI trained on your data" argument
  - **Consulting firms:** the speed, cost, and specialization argument
- Is the differentiation shown (through content structure) or told (through explicit claims)?

### Objection handling

What objections would the target reader have after reading? Common ones:

- "We do not have enough data for ML"
- "Our engineering team is already stretched"
- "We tried automation before and it did not work"
- "This sounds expensive"
- "We can build this in-house"
- "How do we explain this to regulators?"

Does the post preemptively address at least 2 of these? Which ones does it miss?

### CTA proportionality

- Is the CTA proportional to the value delivered in the post? A post that gives away substantial insight earns a stronger CTA.
- Does the CTA match the reader's likely stage of awareness? (A reader who just learned about a problem is not ready for "book a call." They might be ready for "here is a framework to evaluate this.")
- Is the transition from the Devbrew section to the soft CTA smooth, or does it feel like a gear shift?

### Section transition quality

- Read the last sentence of each section and the first sentence of the next. Do they connect logically?
- Are there transitions that feel like "now let me talk about something else" rather than "and here is why that matters"?
- Does the post flow as one continuous argument, or as 8 separate mini-posts stapled together?

---

## Cross-post consistency

Compare the post under review against 2-3 recent published posts in `data/blog/`. Check for:

- **Voice consistency across the blog.** Does this post sound like it was written by the same author as the others? Flag any voice deviations.
- **Quality baseline.** Is this post at least as strong as the most recent published posts in specificity, narrative flow, and audience targeting?
- **Positioning consistency.** Does the Devbrew value proposition sound the same as in other posts? (Custom AI, trained on your data, end-to-end implementation, production systems not demos.)
- **CTA pattern consistency.** Does the CTA section follow the same pattern as other posts? (Value-based offer, no pitch language, Cal.com link, email alternative.)

To do this: read the 2-3 most recently published posts (by date, excluding drafts) and note any significant differences in tone, structure, or positioning.

---

## Output format

Add the qualitative review as Section 7 in the review report, after Section 6 and before the Summary table.

```markdown
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
```

Add editorial recommendations to the action items section under a new priority level:

```markdown
### Editorial (qualitative review)

1. {specific editorial recommendation from the qualitative review}
```

Place "Editorial" items after "Consider" items. They are not score-impacting but improve content quality.
