import type { Metadata } from "next";
import Link from "next/link";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import { TriadModel } from "@/components/triad-model";
import { Callout, GhostButton, PageWrap, PrimaryButton, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Entraphy | Reality-Bound Systems",
  description: "Architectures where consequential actions must satisfy authority, policy, and time — before they can occur.",
  openGraph: {
    title: "Entraphy | Reality-Bound Systems",
    description: "Nothing is trusted until it is proven."
  }
};

export default function HomePage() {
  return (
    <PageWrap>
      <div className="relative overflow-hidden rounded-3xl border border-line/80 p-8 md:p-12">
        <ConstraintFieldBackground />
        <p className="text-sm text-muted">There was a time when trust was implied.</p>
        <p className="mt-2 text-sm text-muted">A password was enough.</p>
        <p className="mt-2 text-sm text-muted">A firewall was enough.</p>
        <p className="mt-2 text-xl font-semibold md:text-2xl">That time is over.</p>
        <p className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Machines now decide in zero time. Across zero distance.
        </p>

        <div className="mt-8 space-y-1 border-l border-accent/70 pl-4">
          <p className="text-xl font-semibold">Entraphy</p>
          <p className="text-sm tracking-[0.16em] text-muted uppercase">Reality-Bound Systems</p>
          <p className="text-sm">Nothing is trusted until it is proven.</p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          Architectures where consequential actions must satisfy authority, policy, and time — before they can occur.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <GhostButton href="#ontology">Explore the Ontology</GhostButton>
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </div>

      <Section title="The Failure Was Structural" eyebrow="Structural mismatch">
        <ul className="space-y-2">
          <li>It wasn’t bad firewalls.</li>
          <li>It wasn’t weak encryption.</li>
          <li>It was this: we treated trust as identity or configuration — not as a condition of consequence.</li>
        </ul>
        <p className="mt-4 text-fg">Autonomous systems act before review. Governance must precede consequence.</p>
      </Section>

      <Section id="ontology" title="Determine. Bind. Prove." eyebrow="Model">
        <TriadModel />
        <p className="mt-5 text-fg">Trust follows verification.</p>
      </Section>

      <Section title="Reality-Bound Systems" eyebrow="Category">
        <Callout>
          Systems in which consequential actions cannot occur unless authority, policy, and temporal constraints are
          satisfied at decision time — and provable.
        </Callout>
      </Section>

      <div className="pt-6">
        <Link href="/reality-bound-systems" className="text-sm text-accent underline underline-offset-4">
          Continue to category thesis
        </Link>
      </div>
    </PageWrap>
  );
}
