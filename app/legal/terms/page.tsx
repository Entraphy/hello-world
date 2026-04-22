import type { Metadata } from "next";

import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms | Entraphy Systems",
  description: "Terms placeholder for Entraphy Systems public site."
};

export default function TermsPage() {
  return (
    <PageWrap>
      <Section title="Terms" eyebrow="Legal">
        <p>This is a placeholder terms page. Full terms will be published before production launch.</p>
      </Section>
    </PageWrap>
  );
}
