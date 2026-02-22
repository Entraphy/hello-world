import type { Metadata } from "next";

import { Callout, PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Proof | Entraphy",
  description: "Portable verification and offline proof concepts for reality-bound systems.",
  openGraph: {
    title: "Proof | Entraphy",
    description: "Verification that can be carried, inspected, and checked independent of runtime context."
  }
};

export default function ProofPage() {
  return (
    <PageWrap>
      <Section title="Proof" eyebrow="Verification">
        <p>
          Verification is useful only if it remains valid outside the original execution context. Proof must move with
          consequence.
        </p>
      </Section>

      <Section title="Portable verification" eyebrow="Property">
        <p>A verifier should be able to inspect evidence without needing privileged access to internal infrastructure.</p>
      </Section>

      <Section title="Offline confidence" eyebrow="Property">
        <p>Evidence should remain checkable in disconnected or delayed-review environments.</p>
      </Section>

      <Section title="Operational outcome" eyebrow="Result">
        <Callout>
          Proof transforms review from trust assertions to verifiable state: what was allowed, when, and under which
          governing constraints.
        </Callout>
      </Section>
    </PageWrap>
  );
}
