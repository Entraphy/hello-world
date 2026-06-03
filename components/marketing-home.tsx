import Image from "next/image";

import { ButtonLink } from "@/components/marketing-primitives";

const accessPaths = [
  {
    title: "Strategic Partners",
    body: "For institutions shaping trusted autonomy where institutional confidence matters."
  },
  {
    title: "Pilot Candidates",
    body: "For high-consequence environments preparing for selected conversations."
  },
  {
    title: "Advisors",
    body: "For experts who can help sharpen category, posture, and private development."
  },
  {
    title: "Early Builders",
    body: "For people ready to help build before the category is obvious."
  }
];

const partnerSignals = [
  {
    title: "Who should engage",
    body: "Strategic partners and pilot candidates operating in high-consequence environments where trust must be earned before scale."
  },
  {
    title: "Why selective",
    body: "Entraphy is still in private development. Selected conversations protect focus, confidentiality, and institutional confidence."
  },
  {
    title: "How to begin",
    body: "Request private access. Entraphy reviews context manually before sharing deeper materials."
  }
];

const teamArchetypes = [
  {
    title: "Systems Builders",
    body: "People who can turn ambiguity into secure, reliable, usable systems."
  },
  {
    title: "Design Engineers",
    body: "People who believe powerful technology should feel precise, restrained, and inevitable."
  },
  {
    title: "Strategic Operators",
    body: "People who can shape early partnerships, confidential access, and disciplined market entry."
  },
  {
    title: "Infrastructure Stewards",
    body: "People who understand that trust begins with operational discipline."
  }
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function AccessIcon({ index }: { index: number }) {
  const variants = ["after:h-4 after:w-8", "after:h-8 after:w-8 after:rounded-full", "after:h-8 after:w-8 after:rounded-full", "after:h-8 after:w-8"];

  return (
    <span
      aria-hidden
      className={`relative block h-10 w-10 border-t border-signal/70 before:absolute before:inset-x-2 before:bottom-1 before:h-px before:bg-signal/60 after:absolute after:left-1/2 after:top-1/2 after:block after:-translate-x-1/2 after:-translate-y-1/2 after:border after:border-signal/70 ${variants[index]}`}
    />
  );
}

export function HomePageContent() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden border-b border-white/12">
        <Image src="/images/entraphy-signal-field.png" alt="" fill priority className="object-cover object-center opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,5,5)_0%,rgba(4,5,5,0.95)_22%,rgba(4,5,5,0.52)_58%,rgba(4,5,5,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,5,0.18),rgba(4,5,5,0.58))]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-content items-center px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-7">
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Trust cannot be self-prescribed.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Entraphy is building a patent-pending foundation for trusted autonomy in AI-native systems.
            </p>
            <Eyebrow>Private development. Selective access. Patent pending.</Eyebrow>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href="/access">Request Private Access -&gt;</ButtonLink>
              <ButtonLink href="#team" variant="secondary">
                Join the Early Team -&gt;
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="scroll-mt-24 border-b border-white/12 bg-[rgb(8,11,10)]">
        <div className="grid min-h-[23rem] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[18rem] overflow-hidden border-b border-white/12 lg:border-b-0 lg:border-r">
            <Image src="/images/entraphy-threshold-doorway.png" alt="" fill className="object-cover object-center opacity-[0.82]" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,5,0.28),rgba(4,5,5,0.05),rgba(4,5,5,0.42))]" />
          </div>
          <div className="flex items-center bg-[linear-gradient(90deg,rgb(15,27,22),rgb(8,13,12))] px-6 py-12 sm:px-10 lg:px-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>The world we are working toward</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Imagine if trust could move at the speed of intelligence.</h2>
              <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                <p>
                  The next era will ask systems to act inside decisions that carry real consequence. Capability alone will not give institutions the
                  confidence to let that happen.
                </p>
                <p>Trust cannot be granted by announcement, branding, or optimism. It has to be earned before action becomes consequence.</p>
                <p>
                  Entraphy begins from that standard: quiet work, careful access, and a foundation for trusted autonomy built to serve institutions
                  before it seeks attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:py-16">
          <div className="space-y-6">
            <Eyebrow>Selected conversations</Eyebrow>
            <h2 className="max-w-xl font-display text-3xl leading-tight text-fg sm:text-4xl">
              Strategic partners and pilot candidates should begin with private access.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted">
              Entraphy is engaging institutions and high-consequence environments where trusted autonomy will require institutional confidence before
              public scale.
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted">
              The work remains selective because deeper materials are private while the foundation is still in development.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <ButtonLink href="/access?type=partner">Request Partner Access -&gt;</ButtonLink>
              <ButtonLink href="/access?type=pilot" variant="secondary">
                Pilot Candidate Access -&gt;
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {partnerSignals.map((signal, index) => (
              <article
                key={signal.title}
                className="min-h-64 border border-white/18 bg-black/18 p-5 transition duration-150 hover:border-signal/45 hover:bg-white/[0.025]"
              >
                <p className="font-mono text-[10px] tracking-[0.24em] text-signal uppercase">0{index + 1}</p>
                <h3 className="mt-6 font-display text-2xl leading-tight text-fg">{signal.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="access" className="scroll-mt-24 border-b border-white/12 bg-[linear-gradient(90deg,rgb(5,7,7),rgb(13,22,18))]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-16">
          <div className="space-y-6">
            <Eyebrow>Manual review</Eyebrow>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">One private access path, reviewed manually.</h2>
            <p className="max-w-md text-sm leading-7 text-muted">
              The role-aware intake at /access routes selected partners, pilot candidates, advisors, early builders, and careful inquiries through
              one controlled desk.
            </p>
            <p className="max-w-md text-sm leading-7 text-muted">Deeper materials remain private.</p>
            <ButtonLink href="/access">Request Private Access -&gt;</ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {accessPaths.map((path, index) => (
              <article key={path.title} className="min-h-56 border border-signal/28 bg-black/20 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                <AccessIcon index={index} />
                <h3 className="mt-6 font-mono text-[11px] tracking-[0.24em] text-fg uppercase">{path.title}</h3>
                <p className="mt-5 text-xs leading-6 text-muted">{path.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative scroll-mt-24 overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_100%,rgba(196,157,84,0.16),transparent_26%),linear-gradient(90deg,rgb(5,7,7),rgb(8,15,13))]" />
        <div className="absolute -left-20 bottom-0 h-64 w-96 rounded-full border border-signal/30 opacity-45" />
        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-16">
          <div className="space-y-5">
            <Eyebrow>Build before the category has a name</Eyebrow>
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-fg sm:text-4xl">This is early company-formation work, not a standard startup role.</h2>
            <p className="max-w-xl text-base leading-8 text-muted">
              The first people in the room will help shape product judgment, design restraint, operating discipline, and the way Entraphy shows up in
              the world.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Lean in if you can build with discretion, make sharp choices in ambiguity, and care about foundations more than noise.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href="/access?type=builder">Introduce Yourself -&gt;</ButtonLink>
              <ButtonLink href="/team" variant="secondary">
                Read Team Invitation -&gt;
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {teamArchetypes.map((archetype) => (
              <article key={archetype.title} className="min-h-48 border border-white/18 bg-black/20 p-5 transition duration-150 hover:border-signal/45 hover:bg-white/[0.025]">
                <h3 className="font-display text-2xl leading-tight text-fg">{archetype.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{archetype.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[linear-gradient(90deg,rgb(6,8,8),rgb(15,27,22))]">
        <div className="mx-auto grid w-full max-w-content gap-8 px-6 py-10 sm:grid-cols-[8rem_1fr] sm:items-center">
          <div className="flex items-center gap-8 text-signal">
            <span className="block h-16 w-12 border-l-2 border-current opacity-80" aria-hidden />
            <span className="hidden h-16 w-px bg-white/24 sm:block" aria-hidden />
          </div>
          <div className="max-w-3xl space-y-3">
            <p className="font-display text-3xl leading-tight text-fg sm:text-4xl">A new category is forming quietly.</p>
            <p className="text-base leading-8 text-muted sm:text-lg">Entraphy is building for the systems that must prove when they should be trusted.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
