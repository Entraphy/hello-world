import type { Metadata } from "next";

import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Reality-Bound Systems | Entraphy",
  description: "A concise thesis for systems where consequence is bound to verified authority, policy, and time.",
  openGraph: {
    title: "Reality-Bound Systems | Entraphy",
    description: "Consequence bound to verified authority, policy, and time."
  }
};

export default function RealityBoundSystemsPage() {
  return (
    <PageWrap>
      <Section title="Reality-Bound Systems" eyebrow="Category">
        <p>
          This category defines systems where consequential actions are impossible unless verification is satisfied at
          the moment of decision.
        </p>
      </Section>

      <Section title="Implied trust failed because timing changed." eyebrow="Contrast">
        <p>Legacy controls assumed delay and review windows. Autonomous decisions removed both.</p>
      </Section>

      <Section title="Identity alone is not governance." eyebrow="Shift">
        <p>Who requested an action is useful context. It is not sufficient authority for irreversible consequence.</p>
      </Section>

      <Section title="Policy must be enforceable at action time." eyebrow="Constraint">
        <p>Rules that evaluate after execution are reports, not controls.</p>
      </Section>

      <Section title="Verification must travel with consequence." eyebrow="Proof">
        <p>Portable proof closes the gap between operation and audit.</p>
      </Section>

      <Section title="Doctrine anchors" eyebrow="Doctrine">
        <p>Nothing is trusted until it is proven.</p>
        <p className="mt-1">Trust follows verification.</p>
      </Section>
    </PageWrap>
  );
}
