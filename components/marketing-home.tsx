import Image from "next/image";

import { ButtonLink } from "@/components/marketing-primitives";

const accessPaths = [
  {
    title: "Strategic Partners",
    body: "For institutions shaping what trusted autonomy will require before scale."
  },
  {
    title: "Pilot Customers",
    body: "For high-consequence environments preparing for private evaluation."
  },
  {
    title: "Advisors",
    body: "For experts who can sharpen category, posture, and private development."
  },
  {
    title: "Early Builders",
    body: "For people who want to help build before the category is obvious."
  }
];

const teamArchetypes = [
  {
    title: "Systems Builders",
    body: "Turn ambiguity into secure, reliable, usable systems."
  },
  {
    title: "Design Engineers",
    body: "Make powerful technology feel precise, restrained, and inevitable."
  },
  {
    title: "Strategic Operators",
    body: "Shape early partnerships, confidential access, and disciplined market entry."
  },
  {
    title: "Infrastructure Stewards",
    body: "Ensure trust is practiced before it is promised."
  }
];

const creedItems = [
  "Discretion over noise.",
  "Judgment over credentials.",
  "Precision over spectacle.",
  "Foundation over hype.",
  "Trust must be practiced before it is promised."
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function AccessIcon({ index }: { index: number }) {
  const variants = ["after:h-4 after:w-8", "after:h-8 after:w-8 after:rounded-full", "after:h-8 after:w-8 after:rounded-full", "after:h-8 after:w-8"];

  return (
    <span
      aria-hidden
      className={`relative block h-10 w-10 border-t border-signal/80 drop-shadow-[0_0_12px_rgba(196,157,84,0.16)] before:absolute before:inset-x-2 before:bottom-1 before:h-px before:bg-signal/70 after:absolute after:left-1/2 after:top-1/2 after:block after:-translate-x-1/2 after:-translate-y-1/2 after:border after:border-signal/80 ${variants[index]}`}
    />
  );
}

function CreedMark({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span aria-hidden className="relative block h-8 w-8 text-signal">
        <span className="absolute inset-1 border border-current" />
        <span className="absolute left-2 top-2 h-4 w-px rotate-45 bg-current" />
        <span className="absolute right-2 top-2 h-4 w-px -rotate-45 bg-current" />
      </span>
    );
  }

  if (index === 1) {
    return (
      <span aria-hidden className="relative block h-8 w-8 text-signal">
        <span className="absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-1 left-1/2 h-4 w-6 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (index === 2) {
    return (
      <span aria-hidden className="relative block h-8 w-8 text-signal">
        <span className="absolute left-1/2 top-1 h-6 w-6 -translate-x-1/2 rotate-45 border border-current" />
        <span className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border border-current" />
      </span>
    );
  }

  if (index === 3) {
    return (
      <span aria-hidden className="relative block h-8 w-8 text-signal">
        <span className="absolute left-1 top-2 h-2.5 w-6 rotate-[-24deg] border border-current" />
        <span className="absolute left-1 top-3.5 h-2.5 w-6 rotate-[-24deg] border border-current" />
        <span className="absolute left-1 top-5 h-2.5 w-6 rotate-[-24deg] border border-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-8 w-8 text-signal">
      <span className="absolute left-1/2 top-1 h-6 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-1 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
      <span className="absolute left-[0.35rem] top-[0.35rem] h-px w-5 rotate-45 bg-current" />
      <span className="absolute bottom-[0.35rem] left-[0.35rem] h-px w-5 -rotate-45 bg-current" />
    </span>
  );
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
              <ButtonLink href="/access">Request Private Access</ButtonLink>
              <ButtonLink href="/#team" variant="secondary">
                Join the Early Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="scroll-mt-24 border-b border-white/12 bg-[rgb(8,11,10)]">
        <div className="grid min-h-[30rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[22rem] overflow-hidden border-b border-white/12 lg:min-h-[30rem] lg:border-b-0 lg:border-r">
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
                  institutions, infrastructure, markets, missions, and machines, carrying consequence with them.
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

      <section id="partners" className="scroll-mt-24 border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-14 lg:grid-cols-[0.86fr_0.08fr_1.06fr] lg:items-center lg:py-20">
          <div className="space-y-5">
            <Eyebrow>A new foundation is required.</Eyebrow>
            <p className="max-w-md text-base leading-8 text-muted">
              The next era will not be defined only by more capable models. It will be defined by whether those models, systems, and institutions can
              operate with confidence when action carries consequence.
            </p>
            <p className="text-base leading-8 text-fg/82">Entraphy begins there.</p>
          </div>
          <div className="hidden h-40 w-px bg-white/18 lg:block" />
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
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="scroll-mt-24 border-b border-white/12 bg-[linear-gradient(90deg,rgb(5,7,7),rgb(13,22,18))]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-16">
          <div className="space-y-6">
            <Eyebrow>Private access is reviewed, not opened.</Eyebrow>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">
              Selected partners, pilot customers, advisors, and early builders enter through one controlled path.
            </h2>
            <p className="max-w-md text-sm leading-7 text-muted">
              Deeper materials are available only through the private briefing room. Not every request will move forward. The work requires
              discretion, timing, and alignment before more is shared.
            </p>
            <ButtonLink href="/access">Request Private Access</ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {accessPaths.map((path, index) => (
              <article
                key={path.title}
                className="group relative min-h-60 overflow-hidden border border-white/18 bg-[linear-gradient(180deg,rgba(23,38,31,0.82),rgba(4,7,6,0.9))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] transition duration-200 hover:border-signal/50 hover:bg-[linear-gradient(180deg,rgba(28,45,36,0.88),rgba(5,8,7,0.92))]"
              >
                <span aria-hidden className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-signal/55 to-transparent" />
                <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(196,157,84,0.09),transparent_38%)] opacity-80 transition group-hover:opacity-100" />
                <div className="relative">
                  <AccessIcon index={index} />
                  <h3 className="mt-6 font-mono text-[11px] tracking-[0.24em] text-fg uppercase">{path.title}</h3>
                  <p className="mt-5 text-xs leading-6 text-muted">{path.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative scroll-mt-24 overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_100%,rgba(196,157,84,0.16),transparent_26%),linear-gradient(90deg,rgb(5,7,7),rgb(8,15,13))]" />
        <div className="absolute -left-20 bottom-0 h-64 w-96 rounded-full border border-signal/30 opacity-45" />
        <div className="relative mx-auto w-full max-w-content px-6 py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="space-y-5">
              <Eyebrow>Build before the category has a name</Eyebrow>
              <h2 className="max-w-3xl font-display text-3xl leading-tight text-fg sm:text-4xl">This is early company-formation work, not a standard startup role.</h2>
              <p className="max-w-xl text-base leading-8 text-muted">
                Entraphy is looking for a small number of early builders with unusual judgment, discretion, and taste{" "}
                {"\u2014"} people who can help shape the company before the market fully understands the category.
              </p>
              <p className="max-w-xl text-sm leading-7 text-muted">
                The first people in the room will influence product judgment, operating discipline, partner posture, and the way Entraphy shows up in
                the world.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <ButtonLink href="/access?type=builder">Introduce Yourself</ButtonLink>
                <ButtonLink href="/team" variant="secondary">
                  Read Team Invitation
                </ButtonLink>
              </div>
            </div>
            <div className="relative overflow-hidden border border-signal/34 bg-[linear-gradient(180deg,rgba(20,35,29,0.82),rgba(3,7,6,0.9))] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.36)] sm:p-8">
              <span aria-hidden className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />
              <span aria-hidden className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-signal/34 to-transparent" />
              <span aria-hidden className="absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-signal/22 to-transparent" />
              <div className="relative">
                <Eyebrow>Founding criteria</Eyebrow>
                <div className="mt-6 border-y border-white/14">
                  {teamArchetypes.map((archetype, index) => (
                    <article key={archetype.title} className="grid gap-4 border-b border-white/12 py-5 last:border-b-0 sm:grid-cols-[3.5rem_1fr_0.9fr] sm:items-center">
                      <AccessIcon index={index} />
                      <h3 className="font-display text-2xl leading-tight text-fg">{archetype.title}</h3>
                      <p className="text-sm leading-7 text-muted">{archetype.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/12 pt-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[9rem_repeat(5,1fr)] lg:items-center">
              <Eyebrow>How we work</Eyebrow>
              {creedItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 border-white/14 lg:border-l lg:pl-5">
                  <CreedMark index={index} />
                  <p className="text-sm leading-6 text-fg/82">{item}</p>
                </div>
              ))}
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
