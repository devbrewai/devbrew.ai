# Cal.com UTM link generation framework

## Base link structure

```
https://cal.com/joekariuki/devbrew?[UTM_PARAMETERS]&[PREFILL_PARAMETERS]
```

## UTM parameters

| Content Type | utm_source | utm_medium          | utm_campaign        |
| ------------ | ---------- | ------------------- | ------------------- |
| Blog post    | blog       | post                | `{post_slug}`       |
| Case study   | case-study | page                | `{case_study_slug}` |
| Landing page | website    | landing             | `{page_slug}`       |
| Email        | email      | newsletter          | `{email_topic}`     |
| Social media | social     | linkedin or twitter | `{post_topic}`      |

## Pre-filled booking questions

Two fields auto-populate the booking form for context capture:

- `problem` - One sentence describing the specific pain point. Technical but clear. Lead with the business symptom, include 2-3 technical root causes. Use industry terminology.
- `stake` - One sentence describing business impact. Lead with revenue/cost impact, include operational burden, end with strategic consequences. Frame in terms VPs and C-suite care about.

Both must be URL-encoded.

## Blog post template

```
https://cal.com/joekariuki/devbrew?utm_source=blog&utm_medium=post&utm_campaign={post_slug}&problem={url_encoded_problem}&stake={url_encoded_stake}
```

**Example (KYC blog post):**

```
https://cal.com/joekariuki/devbrew?utm_source=blog&utm_medium=post&utm_campaign=kyc_dropoff_30d&problem=KYC%20drop%20off%20from%20slow%20onboarding%2C%20manual%20review%2C%20and%20non%20adaptive%20verification%20paths&stake=Lost%20customers%2C%20higher%20CAC%2C%20slower%20growth%2C%20and%20compliance%20teams%20burning%20time%20on%20low%20risk%20cases
```

## Slug naming convention

Format: `{topic}_{subtopic}_{timeframe}`

Rules:

- Lowercase only
- Underscores separate words
- Keep under 30 characters
- Use abbreviations: kyc, aml, kyb, fx, etc.

Examples: `kyc_dropoff_30d`, `fraud_detection_coldstart`, `settlement_float_recovery`, `treasury_cashflow_60d`

## Problem statement format

Structure: `{primary_issue} from {root_causes}`

Examples:

- "KYC drop off from slow onboarding, manual review, and non adaptive verification paths"
- "AML alert fatigue from high false positive rates and rule-based detection systems"
- "Treasury management blind spots from delayed reporting and manual reconciliation"
- "Settlement float losses from slow clearing cycles and lack of predictive timing models"

## Stake statement format

Structure: `{immediate_costs}, {operational_impact}, and {strategic_consequences}`

Examples:

- "Lost customers, higher CAC, slower growth, and compliance teams burning time on low risk cases"
- "Regulatory fines, investigation overhead, and good customers blocked by false positives"
- "Cash flow uncertainty, delayed strategic decisions, and CFO unable to forecast accurately"
- "Trapped liquidity, unnecessary prefunding costs, and missed investment opportunities"

## Generation steps

When generating a Cal.com link:

1. Identify content type (blog post, case study, landing page, etc.)
2. Extract or create slug using naming convention
3. Craft problem statement from the content's core pain point
4. Craft stake statement from the content's business impact section
5. URL-encode both problem and stake
6. Select appropriate template
7. Substitute values
8. Verify link follows all conventions

## URL encoding reference

- Space = `%20`
- Comma = `%2C`
- Slash = `%2F`
- Ampersand = `%26`
- Question mark = `%3F`
