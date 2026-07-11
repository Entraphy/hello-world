import type { Metadata } from "next";

import { GhostButton, PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Legal | Entraphy Systems",
  description: "Legal information for the Entraphy Systems public site."
};

export default function LegalPage() {
  return (
    <PageWrap>
      <Section title="Legal" eyebrow="Entraphy Systems">
        <p>
          These notices explain how Entraphy handles information submitted through this public site and the terms that apply to using
          the site.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GhostButton href="/legal/privacy">Privacy Notice</GhostButton>
          <GhostButton href="/legal/terms">Terms of Use</GhostButton>
        </div>
      </Section>
    </PageWrap>
  );
}
