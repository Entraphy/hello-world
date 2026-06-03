import Image from "next/image";

import { ButtonLink } from "@/components/marketing-primitives";

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

export function HomePageContent() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden border-b border-white/12">
        <Image src="/images/entraphy-signal-field.png" alt="" fill priority className="object-cover object-center opacity-85" sizes="100vw" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(196,157,84,0.18),transparent_32%),linear-gradient(90deg,rgb(4,5,5)_0%,rgba(4,5,5,0.96)_24%,rgba(4,5,5,0.56)_62%,rgba(4,5,5,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,5,0.08),rgba(4,5,5,0.62))]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-content items-center px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl space-y-8">
            <h1 className="font-display text-5xl leading-[0.96] text-fg sm:text-7xl lg:text-8xl">Trust cannot be self-prescribed.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Entraphy is building a patent-pending foundation for the systems that must earn trust before they act.
            </p>
            <Eyebrow>Private development. Selective access. Patent pending.</Eyebrow>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/request-access">Request Private Access</ButtonLink>
              <ButtonLink href="/team" variant="secondary">
                Join the Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="scroll-mt-24 border-b border-white/12 bg-[rgb(8,11,10)]">
        <div className="grid min-h-[30rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[22rem] overflow-hidden border-b border-white/10 lg:min-h-[30rem] lg:border-b-0">
            <Image src="/images/entraphy-threshold-doorway.png" alt="" fill className="object-cover object-center opacity-[0.82]" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,5,0.28),rgba(4,5,5,0.05),rgba(4,5,5,0.42))]" />
          </div>
          <div className="flex items-center bg-[linear-gradient(90deg,rgb(15,27,22),rgb(8,13,12))] px-6 py-14 sm:px-10 lg:px-20 lg:py-20">
            <div className="max-w-2xl space-y-6">
              <Eyebrow>The world we are working toward</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Imagine if trust could move at the speed of intelligence.</h2>
              <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                <p>
                  The next generation of systems will not wait for human review before they reason, connect, and act. They will move through
                  institutions, infrastructure, markets, missions, and machines {"\u2014"} carrying consequence with them.
                </p>
                <p>The old model asks us to trust too early and discover too late.</p>
                <p>
                  Entraphy is working toward a different future: one where intelligent systems earn trust before they act, and autonomy becomes more
                  governable as it becomes more powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="foundation" className="scroll-mt-24 border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="space-y-5">
            <Eyebrow>A new foundation is required.</Eyebrow>
            <p className="max-w-md text-base leading-8 text-muted">
              The next era will not be defined only by more capable models. It will be defined by whether those models, systems, and institutions can
              operate with confidence when action carries consequence.
            </p>
            <p className="text-base leading-8 text-fg/82">Entraphy begins there.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-[7rem_1fr] sm:items-center">
            <div className="relative h-20 w-24 text-signal">
              <span className="absolute left-3 top-2 h-10 w-16 rotate-[-25deg] border border-current opacity-60" />
              <span className="absolute left-6 top-6 h-10 w-16 rotate-[-25deg] border border-current opacity-85" />
              <span className="absolute left-9 top-10 h-10 w-16 rotate-[-25deg] border border-current opacity-45" />
            </div>
            <div className="space-y-4">
              <Eyebrow>Private development</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Our first product remains in private development.</h2>
              <p className="text-base leading-8 text-muted">Public details are limited by design.</p>
              <p className="max-w-md text-sm leading-7 text-muted">Deeper materials remain available only through private access.</p>
              <ButtonLink href="/request-access">Request Private Access</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(6,8,8)]">
        <div className="mx-auto grid w-full max-w-content gap-8 px-6 py-12 sm:grid-cols-[8rem_1fr] sm:items-center lg:py-14">
          <div className="flex items-center gap-8 text-signal">
            <span className="block h-16 w-12 border-l-2 border-current opacity-80" aria-hidden />
            <span className="hidden h-16 w-px bg-white/24 sm:block" aria-hidden />
          </div>
          <div className="max-w-3xl space-y-3">
            <p className="font-display text-3xl leading-tight text-fg sm:text-4xl">A new category is forming quietly.</p>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">Entraphy is building for the systems that must prove when they should be trusted.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
