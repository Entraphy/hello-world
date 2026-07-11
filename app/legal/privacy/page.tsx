import type { Metadata } from "next";

import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy | Entraphy Systems",
  description: "Privacy notice for the Entraphy Systems public site."
};

const effectiveDate = "July 11, 2026";

export default function PrivacyPage() {
  return (
    <PageWrap>
      <Section title="Privacy Notice" eyebrow="Legal">
        <p>Effective date: {effectiveDate}</p>
        <p className="mt-5">
          Entraphy Systems operates this public website to share limited company information and receive selective partner, pilot,
          advisor, and early-team introductions.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          If you submit a request or signal, we collect the information you choose to provide, such as your name, email address,
          organization, role, website or profile links, selected access path, and written context. We also use a hidden anti-spam field
          to help detect automated submissions.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>
          We use submitted information to review fit, respond when appropriate, protect the site from abuse, maintain internal records,
          and operate basic business communications. Submitting information does not guarantee access, partnership, employment
          consideration, or a response.
        </p>
      </Section>

      <Section title="Service Providers">
        <p>
          The site is hosted on Vercel. Form notifications are sent through Microsoft 365 and Microsoft Graph. These providers process
          information as needed to host the site and deliver email notifications.
        </p>
      </Section>

      <Section title="Sharing">
        <p>
          We do not sell personal information submitted through this site. We may share information with service providers, advisors, or
          team members who help us evaluate submissions, operate the company, comply with law, or protect our rights.
        </p>
      </Section>

      <Section title="Retention And Choices">
        <p>
          We keep submissions for as long as reasonably useful for review, business records, security, and legal purposes. To request
          deletion or correction of information you submitted, contact us at{" "}
          <a href="mailto:support@entraphy.com" className="text-signal hover:text-fg">
            support@entraphy.com
          </a>
          .
        </p>
      </Section>

      <Section title="Security">
        <p>
          We use reasonable administrative and technical measures to protect submitted information. No internet transmission or storage
          system can be guaranteed completely secure.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update this notice as the site, company, or legal requirements change. The effective date above reflects the latest
          published version.
        </p>
      </Section>
    </PageWrap>
  );
}
