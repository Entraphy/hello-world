import type { Metadata } from "next";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import { TriadModel } from "@/components/triad-model";
import { PageWrap, PrimaryButton } from "@/components/ui";

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
      <section className="relative overflow-hidden rounded-3xl border border-line/80 px-8 py-24 md:px-12 md:py-32">
        <ConstraintFieldBackground />
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          <span className="block">Machines now decide in zero time.</span>
          <span className="mt-2 block">Across zero distance.</span>
        </h1>

        <div className="mt-10 space-y-2">
          <p className="text-2xl font-semibold">Entraphy</p>
          <p className="text-sm tracking-[0.16em] text-muted uppercase">Reality-Bound Systems</p>
        </div>

        <p className="mt-8 text-lg text-fg">Nothing is trusted until it is proven.</p>

        <div className="mt-10">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">The Failure Was Structural.</h2>
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>We treated trust as identity or configuration — not as a condition of consequence.</p>
          <p>Autonomous systems act before review. Governance must precede consequence.</p>
        </div>
      </section>

      <section className="py-32 md:py-36">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Determine. Bind. Prove.</h2>
        <div className="mt-14">
          <TriadModel />
        </div>
        <p className="mt-14 text-lg text-fg">Trust follows verification.</p>
      </section>

      <section className="py-32 md:py-36">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Reality-Bound Systems</h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          Systems in which consequential actions cannot occur unless authority, policy, and temporal constraints are
          satisfied — and provable.
        </p>
      </section>

      <section className="py-24 md:py-32">
        <p className="text-3xl font-semibold tracking-tight md:text-4xl">Trust follows verification.</p>
        <div className="mt-10">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>
    </PageWrap>
  );
}
