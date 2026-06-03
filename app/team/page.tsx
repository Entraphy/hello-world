import Image from "next/image";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Join the Team | Entraphy Systems",
  description:
    "Entraphy is assembling a small early team to help build a patent-pending foundation for trusted autonomy in AI-native systems.",
  alternates: {
    canonical: "https://www.entraphy.com/team"
  },
  openGraph: {
    title: "Join the Team | Entraphy Systems",
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
    title: "Join the Team | Entraphy Systems",
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

function ClosingMark() {
  return (
    <span aria-hidden className="block h-20 w-px bg-signal/80" />
  );
}

export default function TeamPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative min-h-[38rem] overflow-hidden border-b border-white/12">
        <Image src="/images/entraphy-signal-field.png" alt="" fill priority className="object-cover object-center opacity-28" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,5,5)_0%,rgba(4,5,5,0.96)_36%,rgba(4,5,5,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(196,157,84,0.12),transparent_32%),linear-gradient(180deg,rgba(4,5,5,0.06),rgba(4,5,5,0.68))]" />
        <div className="relative mx-auto flex min-h-[38rem] w-full max-w-content items-center px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-7">
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
            <ButtonLink href="/request-access?type=builder">Introduce Yourself -&gt;</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(8,10,10)]">
        <div className="mx-auto w-full max-w-content px-6 py-10 sm:py-12">
          <div className="border-l border-signal/80 py-1 pl-7">
            <Eyebrow>Not a standard startup role</Eyebrow>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              This is early company-formation work. The first people in the room will help shape product direction, operating discipline, partner
              posture, and the way Entraphy shows up in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="mb-6">
            <Eyebrow>Who we&apos;re looking for</Eyebrow>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {archetypes.map((archetype, index) => (
              <article key={archetype.title} className="min-h-72 border border-white/22 bg-black/18 p-6 transition hover:border-signal/48 hover:bg-white/[0.025]">
                <ArchetypeIcon index={index} />
                <h2 className="mt-6 font-display text-2xl leading-tight text-fg">{archetype.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{archetype.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(6,8,8)]">
        <div className="mx-auto w-full max-w-content px-6 py-10 sm:py-12">
          <div className="mb-6">
            <Eyebrow>How we work</Eyebrow>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle, index) => (
              <div key={principle} className="border-white/18 lg:border-r lg:pr-7 lg:last:border-r-0">
                <RuleIcon index={index} />
                <p className="mt-2 max-w-40 text-sm leading-6 text-fg/82">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5,7,7),rgb(8,12,11))]" />
        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-stretch lg:py-16">
          <div className="max-w-xl space-y-6">
            <Eyebrow>What to expect</Eyebrow>
            <p className="text-base leading-8 text-muted">Small team. High trust. Real consequence.</p>
            <p className="text-base leading-8 text-muted">
              You won&apos;t find big titles or public roadmaps here. You will find meaningful problems, careful execution, and the chance to help build a
              category-defining company.
            </p>
            <p className="text-base leading-8 text-muted">We move slowly in public so we can move decisively in private.</p>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden">
            <Image src="/images/entraphy-threshold-doorway.png" alt="" fill className="object-cover object-center opacity-70" sizes="(min-width: 1024px) 48vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.7),rgba(5,7,7,0.08),rgba(5,7,7,0.44))]" />
          </div>

          <div id="introduce" className="scroll-mt-24 border border-white/22 bg-black/18 p-7 sm:p-9 lg:col-span-2">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex gap-7">
                <ClosingMark />
                <div>
                  <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Help build what comes next.</h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                    If you operate with judgment, discretion, and builder energy, we invite you to introduce yourself.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <ButtonLink href="/request-access?type=builder">Introduce Yourself -&gt;</ButtonLink>
                <p className="text-xs leading-5 text-muted">For early builders&nbsp;&nbsp;/&nbsp;&nbsp;Request Builder Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
