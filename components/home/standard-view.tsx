import { AdoptionPattern } from "@/components/home/adoption-pattern";
import { CoverageMap } from "@/components/home/coverage-map";
import { PrimaryButton } from "@/components/ui";

const sectionLabels = ["The Turn", "Doctrine", "Model", "Adoption", "Coverage", "Proof"] as const;

const doctrineItems = [
  {
    numeral: "I",
    title: "Consequence Precedes Trust.",
    body: "Trust is not assumed. It is established at the moment consequence becomes possible."
  },
  {
    numeral: "II",
    title: "Authority Must Be Explicit.",
    body: "Identity is context. Authority is constraint."
  },
  {
    numeral: "III",
    title: "Policy Must Bind in Time.",
    body: "Rules evaluated after execution are reports, not governance."
  },
  {
    numeral: "IV",
    title: "Proof Must Travel With Consequence.",
    body: "Verification is not archival. It is emitted."
  }
] as const;

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

          <section id="doctrine-section" className="border-l border-line/55 pl-5 md:pl-6">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Foundational Doctrine</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Doctrine</h2>
            <ol className="mt-6 space-y-7" aria-label="Foundational doctrine">
              {doctrineItems.map((item) => (
                <li key={item.numeral} className="space-y-2">
                  <p className="text-base leading-relaxed text-fg md:text-lg">
                    <span aria-hidden className="mr-2 inline-block text-lg text-fg md:text-xl">
                      {item.numeral}.
                    </span>
                    <span className="sr-only">{item.numeral}. </span>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted md:text-base">{item.body}</p>
                </li>
              ))}
            </ol>
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

          <section className="border-l border-line/55 bg-fg/[0.02] px-5 py-5 md:border md:border-line/45 md:px-6">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">ADOPTION PATTERN</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">How Enterprises Adopt Reality-Bound Systems</h2>
            <AdoptionPattern className="mt-6" />
          </section>

          <section className="border-l border-line/55 bg-fg/[0.02] px-5 py-5 md:border md:border-line/45 md:px-6">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">COVERAGE MAP</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">From One Consequence Point to Enterprise Coverage</h2>
            <p className="mt-3 text-sm text-muted">Coverage expands as more workflows are brought under authority, policy, and time.</p>
            <CoverageMap className="mt-6" phase={1} />
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
