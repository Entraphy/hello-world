import type { Metadata } from "next";

import { ConceptualDiagram } from "@/components/conceptual-diagram";
import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Architecture | Entraphy",
  description: "High-level architecture principles for reality-bound systems.",
  openGraph: {
    title: "Architecture | Entraphy",
    description: "Authority, policy, and time govern consequence before it occurs."
  }
};

export default function ArchitecturePage() {
  return (
    <PageWrap>
      <Section title="Architecture" eyebrow="High level">
        <p>
          Entraphy architectures are designed so consequential actions must satisfy authority, policy, and time before
          execution. The objective is deterministic governance under autonomous speed.
        </p>
      </Section>

      <Section title="Principles" eyebrow="Credibility">
        <ul className="space-y-2">
          <li>Consequence is gated by explicit authorization context.</li>
          <li>Policy is evaluated at decision time, not deferred.</li>
          <li>Temporal validity is first-class.</li>
          <li>Verification artifacts are portable and inspectable.</li>
        </ul>
      </Section>

      <Section title="Conceptual flow" eyebrow="Diagram">
        <ConceptualDiagram />
      </Section>
    </PageWrap>
  );
}
