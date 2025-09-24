import React from 'react'

import SectionContainer from '@/components/SectionContainer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Terms of Service' })

export default function TermsOfServicePage() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-4xl py-10 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: September 24, 2025
        </p>

        <article className="prose dark:prose-invert mt-8 max-w-none">
          <h2 id="introduction">1. Introduction</h2>
          <h3 id="contract">1.1 Contract</h3>
          <p>
            By accessing or using Devbrew’s websites or contacting us through the “Get Started” form
            or other channels, you agree to these Terms of Service (“Terms”). If you do not agree,
            do not use the Services. You may stop using the Services at any time. Note: “Get
            Started” should not be treated as creating an account.
          </p>
          <h3 id="services">1.2 Services</h3>
          <p>
            These Terms apply to devbrew.ai and related subdomains (including fintech.devbrew.ai and
            any Labs or demo pages), as well as any related communications and materials that
            reference these Terms (“Services”). Your personal data is handled under our Privacy
            Policy.
          </p>
          <h3 id="changes">1.3 Changes</h3>
          <p>
            We may modify these Terms and our Privacy Policy from time to time. If we make material
            changes, we will notify you through the Services or by other means before the changes
            take effect. Your continued use of the Services after notice means you accept the
            updated terms.
          </p>

          <h2 id="obligations">2. Obligations</h2>
          <h3 id="eligibility">2.1 Service Eligibility</h3>
          <ul>
            <li>You must be at least 18 years old to use the Services.</li>
            <li>You may not use our Services if previously restricted or banned by Devbrew.</li>
          </ul>
          <h3 id="interactions">2.2 Interactions With Us</h3>
          <p>
            You agree to provide accurate information when you contact us and to use the Services in
            compliance with applicable laws and these Terms.
          </p>
          <h3 id="notices">2.3 Notices and Messages</h3>
          <p>
            We may send you notices related to your inquiry or our Services via the contact details
            you provide (e.g., email). Keep your contact information current.
          </p>
          <h3 id="submissions">2.4 Submissions</h3>
          <p>
            If you provide content or materials to us (e.g., via the contact form), you represent
            you have the right to share them and they don’t contain unlawful or harmful content.
          </p>

          <h2 id="rights">3. Rights and Limits</h2>
          <h3 id="license">3.1 Your License to Devbrew</h3>
          <p>
            You retain ownership of content you submit to us. You grant Devbrew a non-exclusive,
            worldwide license to use, reproduce, and process such content solely to operate,
            evaluate, and improve the Services; respond to your inquiries; perform work under an
            agreement with you; or as otherwise agreed in writing. This license ends when we delete
            the content or when you request deletion, except to the extent content has been
            incorporated into deliverables or is retained to comply with law or enforce our rights.
          </p>
          <h3 id="availability">3.2 Service Availability</h3>
          <p>
            We may change, suspend, or discontinue any part of the Services. We do not guarantee
            continuous availability. We are not a data storage provider and may delete materials
            submitted through the Services according to our data retention practices.
          </p>
          <h3 id="third-party">3.3 Other Content, Sites, and Apps</h3>
          <p>
            We are not responsible for content posted by others, or for third-party sites or apps
            linked to through our Services.
          </p>
          <h3 id="limits">3.4 Limits</h3>
          <p>
            Devbrew may restrict, suspend, or terminate accounts that violate these Terms,
            applicable law, or misuse the Services.
          </p>
          <h3 id="ip">3.5 Intellectual Property</h3>
          <p>
            All rights in Devbrew’s trademarks, logos, software, and other IP remain with Devbrew.
            Except as expressly stated, no rights are granted by implication or estoppel.
          </p>

          <h3 id="beta">3.6 Demos and Beta Features</h3>
          <p>
            Any demos, prototypes, or beta features are provided for informational purposes only,
            may be modified or discontinued at any time, and may contain errors or inaccuracies. Do
            not rely on demos or beta features for production use.
          </p>

          <h2 id="disclaimer">4. Disclaimer and Limitation of Liability</h2>
          <h3 id="no-warranty">4.1 No Warranty</h3>
          <p>
            Devbrew provides Services on an “as is” and “as available” basis, without warranties of
            uninterrupted or error-free service. To the fullest extent allowed by law, we disclaim
            implied warranties of merchantability, fitness for purpose, non-infringement, and
            accuracy of data.
          </p>
          <h3 id="liability">4.2 Exclusion of Liability</h3>
          <p>
            To the fullest extent permitted by law, Devbrew and its affiliates will not be liable
            for:
          </p>
          <ul>
            <li>Lost profits, revenue, or business opportunities.</li>
            <li>Loss of data, reputation, or use.</li>
            <li>Indirect, incidental, consequential, or punitive damages.</li>
          </ul>
          <p>
            Our total aggregate liability for all claims relating to the Services shall not exceed
            the greater of (a) the fees you paid to Devbrew for the Services in the twelve (12)
            months before the event giving rise to liability or (b) USD $1,000.
          </p>
          <h3 id="exceptions">4.3 Exceptions</h3>
          <p>
            These limits do not apply in cases of fraud, gross negligence, intentional misconduct,
            or where liability cannot be excluded by law.
          </p>

          <h3 id="no-professional-advice">4.4 No Professional Advice</h3>
          <p>
            Content provided through the Services, including demos, research case studies, blog
            posts, and other materials, is for informational purposes only. Devbrew does not provide
            legal, tax, financial, investment, or compliance advice through the Services. Any
            decisions made based on such content are at your own discretion, and you should obtain
            professional advice tailored to your situation before acting on information from the
            Services.
          </p>

          <h3 id="indemnification">4.5 Indemnification</h3>
          <p>
            You will indemnify and hold Devbrew harmless from claims, damages, liabilities, costs,
            and expenses (including reasonable attorneys’ fees) arising from your use of the
            Services or violation of these Terms.
          </p>

          <h2 id="termination">5. Termination</h2>
          <p>
            Both you and Devbrew may terminate this Agreement at any time with notice. Upon
            termination, you lose the right to access the Services. The following will survive
            termination:
          </p>
          <ul>
            <li>Feedback rights</li>
            <li>Liability limitations</li>
            <li>Indemnification</li>
            <li>Dispute resolution terms</li>
            <li>Any accrued obligations</li>
          </ul>

          <h2 id="law">6. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming, USA, excluding conflict of
            laws rules. Disputes will be resolved exclusively in the federal or state courts located
            in Wyoming, USA, and both parties consent to jurisdiction there.
          </p>

          <h2 id="general">7. General Terms</h2>
          <ul>
            <li>If any provision is found unenforceable, the rest remain in effect.</li>
            <li>Failure to enforce is not a waiver.</li>
            <li>
              You may not assign this Agreement without Devbrew’s consent; Devbrew may assign it to
              affiliates or successors.
            </li>
            <li>
              This Agreement, along with referenced policies, is the entire agreement between you
              and Devbrew.
            </li>
          </ul>

          <h3 id="export-compliance">7.4 Export Compliance</h3>
          <p>
            You agree to comply with U.S. export, re-export, and sanctions laws. You will not use
            the Services in embargoed countries or for prohibited end-uses.
          </p>

          <h2 id="policies">8. Devbrew Policies</h2>
          <h3 id="agree-to">8.1 You agree to:</h3>
          <ul>
            <li>Follow applicable laws (privacy, IP, tax, export controls).</li>
            <li>Provide accurate, updated information.</li>
            <li>Use your real name.</li>
            <li>Use Services in a professional manner.</li>
          </ul>
          <h3 id="agree-not-to">8.2 You agree not to:</h3>
          <ul>
            <li>Create false identities or accounts.</li>
            <li>Scrape, copy, or misuse Service data.</li>
            <li>Upload malicious code.</li>
            <li>Reverse engineer or resell Services without consent.</li>
            <li>Infringe others’ or Devbrew’s IP rights.</li>
            <li>Interfere with Service operations.</li>
          </ul>

          <h3 id="testimonials-case-studies">8.3 Testimonials and Case Studies</h3>
          <p>
            With your written permission, we may publish testimonials or case studies referencing
            your name, company, and project details.
          </p>

          <h2 id="complaints">9. Complaints Regarding Content</h2>
          <p>
            We respect intellectual property rights. Please report infringing or abusive content to
            us.
          </p>
          <h2 id="contact">10. Contact Us</h2>
          <p>
            For inquiries or legal notices, please contact us at{' '}
            <a href="mailto:hello@devbrew.ai">hello@devbrew.ai</a>
          </p>

          <p>
            Related Policies: Please also review our <a href="/privacy-policy"> Privacy Policy</a>{' '}
            for information on how we collect and process personal data.
          </p>
        </article>
      </div>
    </SectionContainer>
  )
}
