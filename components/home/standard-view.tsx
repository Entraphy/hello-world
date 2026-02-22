import { PrimaryButton } from "@/components/ui";

const sectionLabels = ["The Turn", "Model", "Proof"] as const;

export function StandardView() {
  return (
    <div className="pt-8 md:pt-10">
      <div className="grid gap-8 md:grid-cols-[132px_minmax(0,1fr)] md:gap-10">
        <aside className="hidden md:block">
          <div className="sticky top-4">
            <div className="space-y-10">
              {sectionLabels.map((label, index) => (
                <div key={label} className="relative pb-9 last:pb-0">
                  <p className="text-[10px] tracking-[0.2em] text-muted uppercase">{label}</p>
                  <span className="mt-3 inline-block h-1.5 w-1.5 rounded-full border border-line/70 bg-fg/20" />
                  {index < sectionLabels.length - 1 ? (
                    <span aria-hidden className="absolute top-7 left-[3px] h-[calc(100%-12px)] w-px bg-line/45" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8 md:space-y-10">
          <section className="border-l border-line/55 pl-5 md:border-0 md:pl-0">
            <p className="mb-3 inline-flex rounded-full border border-line/55 bg-fg/[0.02] px-2 py-1 text-[10px] tracking-[0.2em] text-muted uppercase md:hidden">
              The Turn
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The Failure Was Structural</h2>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-muted">
              <p>We treated trust as identity or configuration.</p>
              <p>Not as a condition of consequence.</p>
              <p>Autonomous systems act before review.</p>
              <p>Governance must precede consequence.</p>
            </div>
          </section>

          <section className="border-l border-line/55 pl-5 md:border-0 md:pl-0">
            <p className="mb-3 inline-flex rounded-full border border-line/55 bg-fg/[0.02] px-2 py-1 text-[10px] tracking-[0.2em] text-muted uppercase md:hidden">
              Model
            </p>
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

          <section className="border-l border-line/55 pl-5 md:border-0 md:pl-0">
            <p className="mb-3 inline-flex rounded-full border border-line/55 bg-fg/[0.02] px-2 py-1 text-[10px] tracking-[0.2em] text-muted uppercase md:hidden">
              Proof
            </p>
            <p className="text-base text-muted">Portable verification is emitted at the moment of consequence.</p>
          </section>
        </div>
      </div>

      <div className="system-anchor-line mt-10" aria-hidden />

      <section className="px-2 pt-7 pb-7 text-center">
        <p className="text-2xl font-semibold tracking-[0.08em] uppercase md:text-3xl">Trust follows verification.</p>
        <div className="mt-8">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
