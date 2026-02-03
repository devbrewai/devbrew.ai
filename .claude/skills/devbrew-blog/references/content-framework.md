# Devbrew content framework: explain the system, sell the implementation

This is the detailed reference for the 8-step framework. Follow these steps in order for every blog post.

## Step 1: Start with the core mechanism

Explain the underlying idea in clear, simple language. Reveal the logic, not the proprietary execution. This builds authority and educates the reader.

**Example:**
"Every cross-border onboarding flow has two variables you must optimize at the same time. Risk tolerance and conversion. Most teams hard-code both, so the system never adapts. The fix is to let the model tune friction per user."

**Guidelines:**

- Lead with the problem the reader already feels
- Explain the concept so a smart non-technical executive would understand
- Do not hide the core idea. Transparency builds trust.

## Step 2: Break down the system into steps

Show the architecture, but not the engineering. Outline the workflow so the reader understands the concept but would not be able to ship it without an AI engineering team.

**Example:**

1. Collect the right features
2. Score risk in real time
3. Route the user into one of three flows
4. Feed outcomes back into training
5. Monitor performance over time

**Guidelines:**

- Keep steps at 4-6 items
- Use plain language, not engineering jargon
- This shows clarity of thought, which sells competence

## Step 3: Highlight the mistakes fintech and payments teams make

This is where expertise becomes obvious. Explain common failure patterns that the target audience will immediately recognize.

**Example:**
"Most teams treat KYC like a fixed wall. They apply the same friction to every user. They also wait until fraud spikes to change the process. These mistakes cap conversion and force Risk Ops to drown in manual checks."

**Guidelines:**

- Name 2-3 specific mistakes (not vague generalities)
- Use language the audience uses internally ("manual checks," "false positives," "alert fatigue")
- This creates demand for the fix without being salesy

## Step 4: Show the outcome that matters in numbers

This shifts the content from "interesting idea" to "high-value system." Quantify the business impact with credible sources.

**Example:**
"Adaptive risk scoring typically increases verified user conversion by 20 to 30 percent. It also reduces manual reviews by up to half. The impact compounds every day because fewer good users leak out of your funnel."

**Guidelines:**

- Use a single specific number when possible ("$47K" not "$40-80K")
- Every number must be traceable to a credible source (Federal Reserve, McKinsey, PYMNTS, IBM Security, FSB, Adyen, etc.)
- Frame outcomes in terms that matter to the target role: revenue for CFOs, operational load for Treasury Managers, risk exposure for Compliance
- NEVER fabricate or estimate numbers without sourcing

## Step 5: Explain why most teams cannot implement it internally

This is the bridge to Devbrew, without selling. Make the limitations obvious so the reader draws their own conclusion.

**Example:**
"Most teams do not have the ML engineering capacity, data observability, or training pipelines needed to run this in production. The hard part is not the model. It is the system behind it."

**Guidelines:**

- Be honest about what is genuinely hard (data pipelines, monitoring, retraining, production infrastructure)
- Do not exaggerate difficulty. The audience is technical enough to detect that.
- Reveal the complexity without hiding the concept

## Step 6: Give action steps

Provide concrete steps the reader can take within a defined time period. The time period should connect back to what is in the headline.

**Guidelines:**

- Make steps specific and achievable ("Audit your top 3 transaction corridors" not "Think about your data")
- Tie to the headline's timeframe (e.g., "In the next 30 days, here is what you can do")
- 3-5 action items is the sweet spot
- Each action should be something the reader's team can actually do without Devbrew
- This builds trust because you are genuinely helping, not gatekeeping

## Step 7: Show how Devbrew solves the hard part

Connect Devbrew's capability to the implementation challenge. This should feel like a natural next step, not a sales pitch.

**Example:**
"At Devbrew we build these adaptive systems end to end. Data pipelines, risk scoring models, routing logic, real-time decision APIs, monitoring. We do the engineering that lets your team plug this into your existing flow without slowing down the roadmap."

**Guidelines:**

- Position Devbrew as AI engineers who build production systems, not consultants who recommend tools
- Emphasize "custom AI trained on YOUR data" and end-to-end implementation
- Keep it to 2-3 sentences. Do not oversell.
- Frame as capability, not a pitch

## Step 8: Offer a soft CTA

Always light, always optional, always value-based. Position Devbrew as a thought partner, not a vendor.

**Example:**
"If you want to see how this would map to your own onboarding flow, we can walk you through a simple evaluation. No pitch. Just clarity on where you are leaking revenue."

**Guidelines:**

- One sentence, maybe two
- Offer value (evaluation, audit, walkthrough), not a demo or sales call
- Include the Cal.com booking link with UTM tracking (see references/utm-tracking.md)
- Alternative: direct to joe@devbrew.ai for a conversation
- "No pitch" language reduces friction

## Common pitfalls to avoid

- **Too broad:** One topic per post. "Working capital management" is too broad. "How settlement float costs you $47K per quarter" is specific.
- **Too technical for the audience:** If targeting CFOs, do not write like you are explaining to engineers.
- **Ranges instead of specifics:** "$47K" converts better than "$40-80K."
- **Missing sources:** Every data point needs a credible citation. Analytical finance buyers verify claims.
- **Lecture tone:** Write WITH the reader. "You already know your settlement cycle is slow" not "Companies often have slow settlement cycles."
- **Hiding behind jargon:** If a simpler word works, use it.
- **Multiple pain points in one post:** Dilutes impact. Pick one and go deep.
