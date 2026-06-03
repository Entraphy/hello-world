import Image from "next/image";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Team | Entraphy Systems",
  description:
    "Entraphy is assembling a small early team to help build a patent-pending foundation for trusted autonomy in AI-native systems.",
  alternates: {
    canonical: "https://www.entraphy.com/team"
  },
  openGraph: {
    title: "Team | Entraphy Systems",
    description:
      "Entraphy is assembling a small early team to help build a patent-pending foundation for trusted autonomy in AI-native systems.",
    type: "website",
    url: "https://www.entraphy.com/team",
    siteName: "Entraphy Systems",
    locale: "en_US",
    images: [
      {
        url: "/brand/entraphy-og-image.png",
        width: 1200,
        height: 675,
        alt: "Entraphy Systems"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | Entraphy Systems",
    description:
      "Entraphy is assembling a small early team to help build a patent-pending foundation for trusted autonomy in AI-native systems.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const archetypes = [
  {
    title: "Systems Builders",
    body: "For people who can turn ambiguity into secure, reliable, usable systems."
  },
  {
    title: "Design Engineers",
    body: "For people who believe powerful technology should feel precise, restrained, and inevitable."
  },
  {
    title: "Strategic Operators",
    body: "For people who can help shape early partnerships, confidential access, and disciplined market entry."
  },
  {
    title: "Infrastructure Stewards",
    body: "For people who understand that trust begins with operational discipline."
  }
];

const principles = [
  "Discretion over noise.",
  "Judgment over credentials.",
  "Precision over spectacle.",
  "Foundation over hype.",
  "Trust must be practiced before it is promised."
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function RuleIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute inset-2 border border-current" />
        <span className="absolute left-3 top-3 h-4 w-px rotate-45 bg-current" />
        <span className="absolute right-3 top-3 h-4 w-px -rotate-45 bg-current" />
      </span>
    );
  }

  if (index === 1) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-1 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (index === 2) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-1/2 top-1 h-8 w-8 -translate-x-1/2 rotate-45 border border-current" />
        <span className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rotate-45 border border-current" />
      </span>
    );
  }

  if (index === 3) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-2 top-2 h-3 w-6 rotate-[-24deg] border border-current" />
        <span className="absolute left-2 top-4 h-3 w-6 rotate-[-24deg] border border-current" />
        <span className="absolute left-2 top-6 h-3 w-6 rotate-[-24deg] border border-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-10 w-10 text-signal">
      <span className="absolute left-1/2 top-1 h-8 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-1 top-1/2 h-px w-8 -translate-y-1/2 bg-current" />
      <span className="absolute left-[0.45rem] top-[0.45rem] h-px w-7 rotate-45 bg-current" />
      <span className="absolute bottom-[0.45rem] left-[0.45rem] h-px w-7 -rotate-45 bg-current" />
    </span>
  );
}

function ArchetypeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-3 top-1 h-5 w-7 rotate-[24deg] border border-current" />
        <span className="absolute left-3 top-3 h-5 w-7 rotate-[24deg] border border-current" />
        <span className="absolute left-3 top-5 h-5 w-7 rotate-[24deg] border border-current" />
      </span>
    );
  }

  if (index === 1) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute inset-2 border border-current" />
        <span className="absolute left-1 top-1 h-3 w-3 border-l border-t border-current" />
        <span className="absolute right-1 top-1 h-3 w-3 border-r border-t border-current" />
        <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-current" />
        <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-current" />
      </span>
    );
  }

  if (index === 2) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-2 top-2 h-8 w-8 rounded-full border border-current" />
        <span className="absolute left-6 top-6 h-px w-5 rotate-[-42deg] bg-current" />
        <span className="absolute left-5 top-4 h-3 w-3 rounded-full border border-current bg-bg" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-12 w-12 text-signal">
      <span className="absolute left-2 top-2 h-9 w-8 border-x border-b border-current" />
      <span className="absolute left-2 top-2 h-px w-8 bg-current" />
      <span className="absolute left-1/2 top-2 h-8 w-px -translate-x-1/2 bg-current" />
    </span>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <Image src="/images/entraphy-signal-field.png" alt="" fill priority className="object-cover object-center opacity-28" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,5,5)_0%,rgba(4,5,5,0.95)_38%,rgba(4,5,5,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,5,0.1),rgba(4,5,5,0.72))]" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 overflow-hidden lg:block">
          <div className="absolute right-[-8rem] top-[-4rem] h-[34rem] w-[34rem] rounded-full border border-signal/38" />
          <div className="absolute right-12 top-16 h-72 w-72 border border-white/[0.05]" />
          <div className="absolute right-10 top-10 h-px w-20 bg-white/18" />
          <div className="absolute right-20 top-0 h-20 w-px bg-white/18" />
          <div className="absolute right-36 top-36 h-px w-24 bg-white/14" />
          <div className="absolute right-48 top-28 h-24 w-px bg-white/14" />
        </div>
        <div className="relative mx-auto w-full max-w-content px-6 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>Join the early team</Eyebrow>
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Build before the category has a name.</h1>
            <div className="h-px w-10 bg-signal" />
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Entraphy is assembling a small early team to help turn a patent-pending foundation for trusted autonomy into a company worthy of the
              systems it intends to serve.
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted">
              We are looking for people with unusual judgment, discretion, and builder energy.
            </p>
            <ButtonLink href="/access?type=builder">Introduce Yourself -&gt;</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(8,10,10)]">
        <div className="mx-auto w-full max-w-content px-6 py-8 sm:py-10">
          <div className="border-l border-signal/80 py-1 pl-7">
            <Eyebrow>Not a standard startup role.</Eyebrow>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              This is early company-formation work. The first people in the room will help shape product direction, operating discipline, partner
              posture, and the way Entraphy shows up in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto w-full max-w-content px-6 py-12">
          <div className="mb-6">
            <Eyebrow>Who we need now.</Eyebrow>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {archetypes.map((archetype, index) => (
              <article key={archetype.title} className="min-h-64 border border-white/22 bg-black/18 p-6 transition hover:border-signal/48 hover:bg-white/[0.025]">
                <ArchetypeIcon index={index} />
                <h2 className="mt-6 font-display text-2xl leading-tight text-fg">{archetype.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{archetype.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(6,8,8)]">
        <div className="mx-auto w-full max-w-content px-6 py-8 sm:py-10">
          <div className="mb-6">
            <Eyebrow>How we work.</Eyebrow>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle, index) => (
              <div key={principle} className="border-white/18 lg:border-r lg:last:border-r-0">
                <RuleIcon index={index} />
                <p className="mt-2 max-w-40 text-sm leading-6 text-fg/82">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="introduce" className="scroll-mt-24 border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <div className="border border-white/20 bg-black/18 p-6 sm:p-8">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Private access path.</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Introduce yourself through private access.</h2>
              <p className="text-base leading-8 text-muted">
                Entraphy reviews early-builder introductions through the same private access path used for selected partners, advisors, and pilot
                candidates.
              </p>
              <ButtonLink href="/access?type=builder">Introduce Yourself -&gt;</ButtonLink>
            </div>
          </div>
          <aside className="border-t border-white/18 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-12">
            <div className="space-y-7">
              <span aria-hidden className="relative block h-16 w-16 text-signal">
                <span className="absolute inset-x-2 top-0 h-14 rounded-b-[1.75rem] border border-current" />
                <span className="absolute left-1/2 top-7 h-5 w-5 -translate-x-1/2 rounded-sm border border-current" />
                <span className="absolute left-1/2 top-5 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
                <span className="absolute left-1/2 top-10 h-2 w-px -translate-x-1/2 bg-current" />
              </span>
              <div className="space-y-4">
                <Eyebrow>Expectations.</Eyebrow>
                <p className="text-base leading-8 text-muted">
                  Submitting an introduction does not create an employment relationship or guarantee a response.
                </p>
              </div>
              <div className="border-t border-white/14 pt-7">
                <p className="text-base leading-8 text-muted">Private development.</p>
                <p className="text-base leading-8 text-muted">Selective access.</p>
                <p className="text-base leading-8 text-muted">Patent pending.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
