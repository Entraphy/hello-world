import { PrimaryButton } from "@/components/ui";

export function StandardView() {
  return (
    <div className="space-y-8 pt-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="depth-panel border border-line/45 bg-fg/[0.015] px-6 py-14 md:px-10">
          <p className="mb-4 text-xs tracking-[0.18em] text-muted uppercase">The Turn</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The Failure Was Structural</h2>
          <div className="mt-6 space-y-2 text-base leading-relaxed text-muted">
            <p>We treated trust as identity or configuration.</p>
            <p>Not as a condition of consequence.</p>
            <p>Autonomous systems act before review.</p>
            <p>Governance must precede consequence.</p>
          </div>
        </section>

        <section className="depth-panel border border-line/45 bg-fg/[0.03] px-6 py-14 md:px-10">
          <p className="mb-4 text-xs tracking-[0.18em] text-muted uppercase">Model</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Determine. Bind. Prove.</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article>
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">Determine</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Compute whether trust conditions hold, now.</p>
            </article>
            <article>
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">Bind</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Permit only actions that satisfy authority, policy, and time.</p>
            </article>
            <article>
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">Prove</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Emit verifiable evidence at the moment of consequence.</p>
            </article>
          </div>
        </section>
      </div>

      <section className="depth-panel border border-line/45 bg-fg/[0.015] px-6 py-12 md:px-10">
        <p className="text-base text-muted">Portable verification is emitted at the moment of consequence.</p>
      </section>

      <div className="system-anchor-line" aria-hidden />

      <section className="px-2 pt-1 pb-7 text-center">
        <p className="text-2xl font-semibold tracking-[0.08em] uppercase md:text-3xl">Trust follows verification.</p>
        <div className="mt-8">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
