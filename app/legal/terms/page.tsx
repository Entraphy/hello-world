import type { Metadata } from "next";

import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms | Entraphy Systems",
  description: "Terms of use for the Entraphy Systems public site."
};

const effectiveDate = "July 11, 2026";

export default function TermsPage() {
  return (
    <PageWrap>
      <Section title="Terms of Use" eyebrow="Legal">
        <p>Effective date: {effectiveDate}</p>
        <p className="mt-5">
          These terms apply to your use of the Entraphy Systems public website. By using the site or submitting information, you agree
          to these terms.
        </p>
      </Section>

      <Section title="Site Purpose">
        <p>
          This site provides limited public information about Entraphy and offers private intake paths for selected partner, pilot,
          advisor, and early-team conversations. The site does not provide a public product, customer portal, investment offering, or
          professional advice.
        </p>
      </Section>

      <Section title="Submissions">
        <p>
          You are responsible for the accuracy of information you submit. Please do not submit confidential, proprietary, regulated, or
          sensitive personal information unless Entraphy has separately agreed in writing to receive it. A submission does not create a
          partnership, employment relationship, advisory relationship, customer relationship, nondisclosure obligation, or guarantee of a
          response.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <p>
          You may not misuse the site, attempt unauthorized access, interfere with site operation, submit malicious content, scrape the
          site at unreasonable volume, or use the site in violation of applicable law.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          The site, including its text, design, marks, and other materials, is owned by Entraphy or its licensors and is protected by
          applicable intellectual property laws. You may not copy, modify, or reuse site materials except as permitted by law or with our
          written permission.
        </p>
      </Section>

      <Section title="No Warranties">
        <p>
          The site is provided as is and as available. Entraphy does not warrant that the site will be uninterrupted, error-free, secure,
          or that any information on the site will remain current or complete.
        </p>
      </Section>

      <Section title="Limitation Of Liability">
        <p>
          To the maximum extent permitted by law, Entraphy will not be liable for indirect, incidental, consequential, special, exemplary,
          or punitive damages arising from your use of the site or submission of information.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:support@entraphy.com" className="text-signal hover:text-fg">
            support@entraphy.com
          </a>
          .
        </p>
      </Section>
    </PageWrap>
  );
}
