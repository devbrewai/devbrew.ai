# Source tier classification

Use this taxonomy to classify every external source cited in a Devbrew blog post. The tier determines whether the source meets Devbrew's credibility standards.

## Tier 1: Primary sources (gold standard)

These are original data producers. Always prefer Tier 1 when available.

**U.S. government agencies:**

- Federal Reserve (federalreserve.gov)
- U.S. Treasury (treasury.gov)
- Financial Crimes Enforcement Network, FinCEN (fincen.gov)
- Office of the Comptroller of the Currency, OCC (occ.gov)
- Consumer Financial Protection Bureau, CFPB (consumerfinance.gov)
- Securities and Exchange Commission, SEC (sec.gov)
- Federal Deposit Insurance Corporation, FDIC (fdic.gov)

**International bodies:**

- Bank for International Settlements, BIS (bis.org)
- Financial Stability Board, FSB (fsb.org)
- Financial Action Task Force, FATF (fatf-gafi.org)
- World Bank (worldbank.org)
- International Monetary Fund, IMF (imf.org)

**Standards and clearing bodies:**

- NACHA (nacha.org)
- PCI Security Standards Council (pcisecuritystandards.org)
- SWIFT (swift.com, when citing own network data)
- The Clearing House (theclearinghouse.org)

**Academic and research:**

- Peer-reviewed academic journals
- Original research papers with methodology disclosed
- University research centers with published methodology

**Regulatory filings:**

- SEC filings (10-K, 10-Q, 8-K)
- Enforcement actions and consent orders
- Published regulatory guidance and examination manuals

## Tier 2: Authoritative industry research (acceptable)

These are established research organizations and industry bodies with rigorous methodology. Acceptable sources, preferred when Tier 1 is unavailable for the specific data point.

**Management consulting and research firms:**

- McKinsey & Company (mckinsey.com)
- Boston Consulting Group, BCG (bcg.com)
- Deloitte (deloitte.com)
- PricewaterhouseCoopers, PwC (pwc.com)
- Ernst & Young, EY (ey.com)
- Accenture (accenture.com)
- Gartner (gartner.com)
- Forrester (forrester.com)

**Payments and fintech research:**

- PYMNTS Intelligence (pymnts.com)
- Nilson Report (nilsonreport.com)
- Aite-Novarica Group (aite-novarica.com)
- Juniper Research (juniperresearch.com)

**Security research:**

- IBM Security, including X-Force and Cost of a Data Breach Report (ibm.com/security)
- Verizon Data Breach Investigations Report, DBIR (verizon.com/dbir)
- Ponemon Institute (ponemon.org)

**Industry associations:**

- Association of Certified Fraud Examiners, ACFE (acfe.com)
- American Bankers Association, ABA (aba.com)
- Electronic Transactions Association, ETA (electran.org)
- SWIFT Institute (swiftinstitute.org)
- Payments Association (thepaymentsassociation.org)

**Risk and compliance research:**

- LexisNexis Risk Solutions (risk.lexisnexis.com)
- Chainalysis (chainalysis.com)
- Dow Jones Risk & Compliance (dowjones.com)

**Major payment networks and processors (when citing own data):**

- Visa (visa.com)
- Mastercard (mastercard.com)
- Adyen (adyen.com)
- Stripe (stripe.com)

Note: Payment networks and processors are Tier 2 only when citing their own transaction data or network statistics. They are the primary source for that specific data. If they are making claims about the broader market, treat as Tier 3.

## Tier 3: Secondary sources (flag for upgrade)

These sources are acceptable only when Tier 1-2 sources are unavailable for the same data point. Always flag Tier 3 sources and note whether a primary alternative exists.

**What qualifies as Tier 3:**

- Vendor whitepapers and vendor-sponsored research
- News articles summarizing primary research (Reuters, Bloomberg, TechCrunch, etc.)
- Industry blogs from companies selling competing or adjacent products
- Conference presentations without published methodology
- Statista, unless it cites the original source (link to the original instead)
- Trade publications summarizing studies (American Banker, PaymentsJournal, etc.)

**Rules for Tier 3 sources:**

- If the Tier 3 source cites a Tier 1-2 source, link to the Tier 1-2 source directly
- If only a Tier 3 source is available, use it but note the limitation in the review
- Flag every Tier 3 source as a potential upgrade opportunity

## Tier 4: Unacceptable sources

Never cite these. Flag any Tier 4 source as a "must fix" item.

- Wikipedia
- Medium posts (unless by a recognized domain expert with independently verifiable, sourced data)
- Substack newsletters (same exception as Medium)
- Social media posts (LinkedIn, X/Twitter, Reddit)
- Anonymous or unattributed sources
- Reports older than 3 years for market size data, transaction volume, or financial statistics (regulatory and structural data has a longer shelf life)
- AI-generated content or AI summaries without original sourcing
- Company press releases making unverified claims about their own performance (distinct from SEC filings or audited data)
- Quora, forums, or community Q&A sites

## Classification rules

1. **When a Tier 2 source cites a Tier 1 source**, prefer linking to the Tier 1 source directly. Example: If McKinsey cites a Federal Reserve report, link to the Federal Reserve report.

2. **When only a Tier 3 source is available**, note the limitation and flag as an upgrade opportunity. Include a brief note about what primary source might exist for the same data.

3. **Age matters for market data.** Financial statistics, market sizes, transaction volumes, and fraud rates older than 2 years should be flagged. Regulatory frameworks, structural analyses, and compliance requirements have a longer shelf life (5+ years is often fine if no superseding regulation exists).

4. **Self-referential data is Tier 1 for the entity itself.** Visa citing its own network transaction volume is a primary source for that data. The Federal Reserve citing its own Fedwire statistics is Tier 1. Adyen citing its own platform data is Tier 2 (they are an authoritative but commercial source for their own data).

5. **Sponsored research requires scrutiny.** A McKinsey report sponsored by a vendor is still Tier 2 for the research methodology, but flag any conclusions that clearly favor the sponsor's product.

6. **Multiple tiers for the same organization.** An organization can produce content at different tiers. Example: IBM Security's Cost of a Data Breach Report (Tier 2, rigorous methodology) vs. an IBM sales blog post about their own security products (Tier 3, vendor content).
