import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Privacy Policy' })

export default function PrivacyPolicyPage() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-4xl py-10 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: September 24, 2025
        </p>

        <article className="prose dark:prose-invert mt-8 max-w-none">
          <h2 id="introduction">1. Introduction</h2>
          <p>
            Devbrew LLC (“Devbrew,” “we,” “our,” or “us”) respects your privacy. This Privacy Policy
            explains how we collect, use, share, and safeguard personal data when you visit our
            websites, contact us, or work with us as a prospect or client.
          </p>
          <p>
            This Privacy Policy applies to devbrew.ai, subdomains including fintech.devbrew.ai, and
            any related sites, communications, or services that link to this Policy (“Services”). By
            using the Services, you agree to this Privacy Policy.
          </p>

          <h3 id="who-we-are">1.1 Who we are</h3>
          <ul>
            <li>Data Controller: Devbrew LLC, a Wyoming limited liability company</li>
            <li>Registered address: 1027 E 231st St, Apt 2, Bronx, NY, 10466</li>
          </ul>
          <p>
            If we process personal data on behalf of a client under a services agreement, we do so
            as a processor and the client is the data controller. For website visitors and contact
            form submissions, Devbrew is the controller.
          </p>

          <h3 id="policy-changes">1.2 Changes to this Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post updates on this page
            with a new “Last updated” date. Your continued use of the Services means you accept the
            updated Policy.
          </p>

          <h2 id="information-we-collect">2. Information We Collect</h2>
          <p>
            We collect information directly from you, automatically through your use of the
            Services, and from third parties.
          </p>

          <h3 id="data-you-provide">2.1 Data you provide to us</h3>
          <h4 id="contact-business-inquiry">Contact and Business Inquiry Data</h4>
          <p>When you submit our contact form or otherwise reach out, we collect:</p>
          <ul>
            <li>Full name, email address, phone number, job title, company name</li>
            <li>Your service interest selection, expected timeline, and your message</li>
            <li>Consent to be contacted about your request</li>
            <li>
              Anti-spam honeypot field named “website”; if populated, we treat the submission as
              automated and may discard it
            </li>
          </ul>

          <h4 id="client-contract-data">Client and Contract Data</h4>
          <p>
            If you engage Devbrew, we may collect and process additional information to deliver
            services, for example: statement of work details, billing and invoicing data, and
            technical specifications you provide.
          </p>

          <h4 id="voluntary-information">Voluntary information</h4>
          <p>
            Any other information you choose to provide, for example attachments or supporting
            materials.
          </p>

          <h3 id="data-from-use">2.2 Data from your use of the Services</h3>
          <h4 id="usage-and-device">Usage and device data</h4>
          <p>
            We may collect IP address, browser type, device identifiers, operating system, pages
            visited, referring URLs, and timestamps. This helps us operate, secure, and improve the
            Services.
          </p>
          <h4 id="cookies">Cookies and similar technologies</h4>
          <p>
            We use cookies and similar technologies for essential site functionality, analytics, and
            performance. See Section 7 and our Cookie Notice for details and choices.
          </p>

          <h3 id="data-from-third-parties">2.3 Data from third parties</h3>
          <p>
            We may receive information from service providers that support our site and operations,
            for example analytics, error logging, email delivery, and security tools.
          </p>
          <p>
            We do not intentionally collect sensitive personal information through the website.
            Please do not include sensitive information in free-form fields.
          </p>

          <h2 id="how-we-use">3. How We Use Your Information</h2>
          <p>How we use data depends on how you interact with us.</p>

          <h3 id="provide-operate">3.1 Provide and operate the Services</h3>
          <ul>
            <li>Respond to inquiries and provide requested information</li>
            <li>Evaluate service fit, prepare proposals, and manage projects</li>
            <li>Authenticate and secure the Services</li>
            <li>Operate, maintain, and improve site performance and user experience</li>
          </ul>

          <h3 id="communications">3.2 Communications</h3>
          <ul>
            <li>Send operational messages about your request, meetings, or deliverables</li>
            <li>Send service updates, announcements, and administrative notices</li>
          </ul>
          <p>
            You can opt out of non-transactional marketing communications at any time. You cannot
            opt out of transactional or legal notices.
          </p>

          <h3 id="marketing">3.3 Business development and marketing</h3>
          <ul>
            <li>Understand interest in our services and improve positioning</li>
            <li>Measure the effectiveness of site content and campaigns</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h3 id="rdq">3.4 Research, development, and quality</h3>
          <ul>
            <li>Improve reliability, security, and usability</li>
            <li>Debug, monitor performance, and prevent spam or abuse</li>
          </ul>

          <h3 id="legal">3.5 Legal, compliance, and security</h3>
          <ul>
            <li>Comply with applicable laws and respond to lawful requests</li>
            <li>Enforce agreements and protect rights, safety, and property</li>
            <li>Detect, prevent, and investigate fraud, abuse, or security incidents</li>
          </ul>

          <h2 id="legal-bases">4. Legal Bases for Processing</h2>
          <p>
            If you are in the European Economic Area, the United Kingdom, or Switzerland, we process
            your personal data under the following legal bases:
          </p>
          <ul>
            <li>
              <strong>Consent:</strong> For example when you consent to be contacted about your
              request or accept non-essential cookies.
            </li>
            <li>
              <strong>Contract:</strong> To take steps at your request prior to entering into a
              contract and to perform a contract.
            </li>
            <li>
              <strong>Legitimate interests:</strong> For example to operate and secure our site,
              prevent fraud, and improve services.
            </li>
            <li>
              <strong>Legal obligation:</strong> To comply with applicable laws and regulatory
              requirements.
            </li>
          </ul>
          <p>
            You can withdraw consent at any time. Where we rely on legitimate interests, you may
            object to processing.
          </p>

          <h2 id="sharing">5. How We Share Information</h2>
          <p>We do not sell your personal data. We share information only as described below.</p>

          <h3 id="service-providers">5.1 Service providers</h3>
          <p>
            We use trusted vendors under contract who act on our behalf and process data only as
            instructed, for example:
          </p>
          <ul>
            <li>Hosting and infrastructure</li>
            <li>Content delivery networks</li>
            <li>Email and communications delivery</li>
            <li>Web analytics and performance monitoring</li>
            <li>Error logging and security</li>
          </ul>
          <p>
            These providers receive only what is necessary to perform their services and are
            obligated to protect your data.
          </p>

          <h3 id="legal-and-safety">5.2 Legal and safety</h3>
          <p>
            We may disclose information if required by law or in good faith belief that disclosure
            is reasonably necessary to:
          </p>
          <ul>
            <li>Comply with legal process or lawful requests</li>
            <li>Enforce agreements and policies</li>
            <li>Protect the rights, property, or safety of Devbrew, our clients, or others</li>
            <li>Detect and prevent fraud, security, or technical issues</li>
          </ul>
          <p>
            Where permitted, we will attempt to notify you of legal requests that affect your
            information.
          </p>

          <h3 id="business-transfers">5.3 Business transfers</h3>
          <p>
            If Devbrew is involved in a merger, acquisition, financing, or sale of assets, your
            information may be transferred as part of that transaction. The recipient will continue
            to process your data consistent with this Policy.
          </p>

          <h3 id="client-processing">5.4 Client relationship processing</h3>
          <p>
            When we act as a processor for a client, we share or process personal data only as
            directed by the client and according to the applicable agreement.
          </p>

          <h2 id="your-rights">6. Your Choices and Rights</h2>
          <p>
            Your rights depend on your location. We will respond to requests as required by
            applicable law.
          </p>

          <h3 id="access-correction-deletion">6.1 Access, correction, deletion</h3>
          <p>
            You may request access to personal data we hold about you, request correction of
            inaccurate data, or request deletion. See the <a href="#contact">Contact Us</a> section.
          </p>

          <h3 id="restriction-objection">6.2 Restriction and objection</h3>
          <p>
            You may request that we restrict certain processing or object to processing based on our
            legitimate interests.
          </p>

          <h3 id="portability">6.3 Portability</h3>
          <p>
            You may request a copy of personal data you provided in a machine-readable format where
            technically feasible.
          </p>

          <h3 id="marketing-choices">6.4 Marketing choices</h3>
          <p>
            You can opt out of marketing emails by using the unsubscribe link in the email or by
            contacting us. We may still send transactional or legal notices.
          </p>

          <h3 id="ccpa">6.5 California privacy rights</h3>
          <p>
            If you are a California resident, the CCPA provides the rights to know, access, correct,
            delete, and to not be discriminated against for exercising these rights. Devbrew does
            not sell or share personal information for cross-context behavioral advertising as
            defined by the CCPA. To exercise rights, please see the{' '}
            <a href="#contact">Contact Us</a> section and specify you are a California resident
            making a CCPA request.
          </p>
          <p>
            Categories we collect: identifiers, professional or employment information, internet or
            network activity information, geolocation based on IP, and inferences drawn from usage
            for service improvement.
          </p>
          <p>Sources: you, your device, and service providers.</p>
          <p>Purposes: those listed in Sections 3 and 5.</p>
          <p>Retention: described in Section 8.</p>

          <h3 id="eea-uk-swiss">6.6 EEA, UK, and Swiss rights</h3>
          <p>
            If you are in the EEA, UK, or Switzerland, you have the rights of access, rectification,
            erasure, restriction, objection, and portability. You may also lodge a complaint with
            your local supervisory authority.
          </p>

          <h2 id="cookies">7. Cookies and Similar Technologies</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>
              <strong>Essential:</strong> run core site functions and security
            </li>
            <li>
              <strong>Analytics and performance:</strong> understand usage and improve content
            </li>
            <li>
              <strong>Preferences:</strong> remember your choices
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. Blocking some cookies may affect
            site functionality. Where required, we will request consent for non-essential cookies.
          </p>

          <h2 id="retention">8. Data Retention</h2>
          <p>
            We retain personal data for as long as needed to fulfill the purposes described in this
            Policy, including:
          </p>
          <ul>
            <li>
              Contact and inquiry records: typically up to 24 months after last interaction, unless
              you request deletion or a longer period is required by law
            </li>
            <li>
              Contract and billing records: retained as required for legal, tax, and accounting
              purposes
            </li>
            <li>Security and logs: retained for a reasonable period for security and auditing</li>
          </ul>
          <p>
            We may retain aggregated or de-identified information for analytics and improvement.
          </p>

          <h2 id="security">9. Security</h2>
          <p>
            We use reasonable technical and organizational measures designed to protect personal
            data, including encryption in transit, access controls, and monitoring. No method of
            transmission or storage is completely secure. We cannot guarantee absolute security.
          </p>

          <h2 id="international-transfers">10. International Data Transfers</h2>
          <p>
            We process data both inside and outside of the United States and rely on
            legally-provided mechanisms to lawfully transfer data across borders. Countries where we
            process data may have laws which are different from, and potentially not as protective
            as, the laws of your own country.
          </p>

          <h2 id="children">11. Children’s Privacy</h2>
          <p>
            Our Services are not directed to individuals under 18. We do not knowingly collect
            personal data from children. If you believe a child has provided personal data, contact
            us and we will delete it.
          </p>

          <h2 id="third-party-links">12. Third-Party Links</h2>
          <p>
            Our site may link to third-party websites. Those sites have their own privacy policies.
            We are not responsible for their content or privacy practices.
          </p>

          <h2 id="do-not-track">13. Do Not Track</h2>
          <p>
            Some browsers offer a Do Not Track setting. We do not respond to Do Not Track signals at
            this time. You can control cookies using the methods in Section 7.
          </p>

          <h2 id="contact">14. Contact Us</h2>
          <p>
            If you have questions, requests, or complaints regarding this Privacy Policy or our data
            practices, contact us at <a href="mailto:hello@devbrew.ai">hello@devbrew.ai</a>
          </p>

          <h2 id="supplemental-notices">15. Supplemental Notices</h2>
          <h3 id="processor-role">15.1 When Devbrew is a processor</h3>
          <p>
            For client projects where we process personal data on behalf of a client, we do so under
            the client’s instructions and the applicable agreement. Clients are responsible for
            providing appropriate privacy notices and obtaining any required consents from
            individuals.
          </p>

          <h3 id="anti-spam">15.2 Anti-spam and automated abuse</h3>
          <p>
            We use safeguards to prevent spam and automated abuse, including a hidden honeypot field
            in the contact form. Submissions that indicate automation may be blocked or discarded to
            protect our systems and users.
          </p>
        </article>
      </div>
    </SectionContainer>
  )
}
