import type { Metadata } from "next";

import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy | Entraphy",
  description: "Privacy placeholder for Entraphy public site."
};

export default function PrivacyPage() {
  return (
    <PageWrap>
      <Section title="Privacy" eyebrow="Legal">
        <p>This is a placeholder privacy notice. Full policy text will be published before production launch.</p>
      </Section>
    </PageWrap>
  );
}
