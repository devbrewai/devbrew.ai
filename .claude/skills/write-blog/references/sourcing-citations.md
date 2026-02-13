# Sourcing and citations guide

Devbrew blog posts use two distinct citation patterns depending on whether the source is external or internal.

## External sources: MDX footnote citations

Any stat, data point, or claim from an outside source gets a footnote citation. This keeps the body text clean while giving readers full traceability.

### In-text markers

Place a `[^N]` marker at the end of the sentence containing the claim, after the period.

```mdx
Gartner found that 30\% of GenAI projects get abandoned after proof of concept.[^1]
```

When multiple sources support the same paragraph, use separate markers for each claim.

```mdx
RAND research shows 80\% of AI projects fail.[^2] And BCG's 2025 study found only 5\% generate AI value at scale.[^3]
```

### Footnote definitions

Place all footnote definitions at the bottom of the file, after the CTA section. Number them sequentially starting from `[^1]`.

Each definition follows this format:

```mdx
[^1]:
    Organization, "Document Title."
    https://full-url-to-source
```

**Rules:**

- Organization name first, then document title in quotes
- Bare URL on the next line (no markdown link syntax)
- Indent the body with four spaces
- One blank line between footnote definitions
- Keep the same order as they appear in the text

### Full example

Body text:

```mdx
Gartner found that 30\% of GenAI projects get abandoned after proof of concept.[^1] RAND research shows 80\% of AI projects fail, at twice the rate of non-AI IT projects.[^2]
```

Bottom of file:

```mdx
[^1]:
    Gartner, "Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept by End of 2025."
    https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025

[^2]:
    RAND Corporation, "Identifying and Mitigating the Risks of AI."
    https://www.rand.org/pubs/research_reports/RRA2680-1.html
```

### When to use footnotes

- Any specific number, percentage, or dollar figure from an external source
- Claims attributed to a named organization or study
- Industry benchmarks or survey results

### When footnotes are not needed

- General industry knowledge ("payments companies face fraud")
- Devbrew's own analysis or frameworks
- Internal blog references (use inline links instead, see below)

### Source quality

Follow the source quality rules in SKILL.md: prefer primary sources over secondary, use credible organizations (Federal Reserve, U.S. Treasury, PYMNTS Intelligence, IBM Security, McKinsey, FSB, Adyen, etc.), and verify the original data when citing secondary sources.

## Internal sources: inline embedded links

References to other Devbrew blog posts use inline links woven naturally into the text. They do NOT use footnotes.

```mdx
AI-powered payment routing can [cut costs 18 to 25\%](/blog/payment-routing-optimization) without renegotiating provider terms.
```

For the full internal linking guide (scanning process, anchor text rules, formatting), read [internal-linking.md](internal-linking.md).

## Summary

| Source type                       | Citation method      | Example                                                      |
| --------------------------------- | -------------------- | ------------------------------------------------------------ |
| External (studies, reports, data) | MDX footnote `[^N]`  | `80\% of AI projects fail.[^2]`                              |
| Internal (Devbrew blog posts)     | Inline embedded link | `[cut costs 18 to 25\%](/blog/payment-routing-optimization)` |
