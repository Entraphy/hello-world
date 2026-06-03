import Image from "next/image";
import type { Metadata } from "next";

import { TeamIntakeForm } from "@/components/team-intake-form";

export const metadata: Metadata = {
  title: "Introduce Yourself | Entraphy Systems",
  description: "Introduce yourself to Entraphy’s early team path.",
  alternates: {
    canonical: "https://www.entraphy.com/introduce-yourself"
  },
  openGraph: {
    title: "Introduce Yourself | Entraphy Systems",
    description: "Introduce yourself to Entraphy’s early team path.",
    type: "website",
    url: "https://www.entraphy.com/introduce-yourself",
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
    title: "Introduce Yourself | Entraphy Systems",
    description: "Introduce yourself to Entraphy’s early team path.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function PeopleMark() {
  return (
    <span aria-hidden className="relative block h-16 w-16 text-signal">
      <span className="absolute left-1/2 top-0 h-14 w-12 -translate-x-1/2 rounded-b-[1.75rem] border border-current" />
      <span className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full border border-current" />
      <span className="absolute left-4 top-8 h-3 w-3 rounded-full border border-current opacity-70" />
      <span className="absolute right-4 top-8 h-3 w-3 rounded-full border border-current opacity-70" />
      <span className="absolute left-1/2 top-9 h-5 w-7 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
    </span>
  );
}

function ExpectationIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span aria-hidden className="relative block h-9 w-9 text-signal">
        <span className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-1 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (index === 1) {
    return (
      <span aria-hidden className="relative block h-9 w-9 text-signal">
        <span className="absolute bottom-1 left-1/2 h-6 w-7 -translate-x-1/2 rounded-sm border border-current" />
        <span className="absolute left-1/2 top-1 h-6 w-5 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
        <span className="absolute left-1/2 top-6 h-2 w-px -translate-x-1/2 bg-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-9 w-9 text-signal">
      <span className="absolute inset-1 rounded-full border border-current" />
      <span className="absolute left-1/2 top-2 h-5 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-current" />
    </span>
  );
}

export default function TeamAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(5,10,9,0.96)_52%,rgba(6,8,7,0.82)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content lg:min-h-[38rem] lg:grid-cols-[0.56fr_0.44fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl space-y-6">
              <Eyebrow>Join the early team</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">
                Introduce yourself before the category has a name.
              </h1>
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>Entraphy is assembling a small early team with unusual judgment, discretion, and builder energy.</p>
                <p>
                  This is not a standard startup role. The first people in the room will help shape product judgment, operating discipline, partner
                  posture, and the way Entraphy shows up in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden border-t border-white/10 lg:border-t-0">
            <Image
              src="/images/entraphy-threshold-doorway.png"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-82"
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,7,0.64),rgba(4,7,7,0.05)_42%,rgba(4,7,7,0.38)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,7,0.04),rgba(4,7,7,0.52))]" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(4,7,7),rgb(7,15,12)_56%,rgb(3,5,5))]" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full border border-signal/10 opacity-50" />
        <div className="absolute bottom-16 right-24 h-[24rem] w-[24rem] rounded-full border border-white/8 opacity-45" />

        <div className="relative mx-auto grid w-full max-w-content gap-12 px-6 py-12 lg:grid-cols-[1.28fr_0.72fr] lg:py-16">
          <div>
            <TeamIntakeForm initialType={searchParams?.type} />
          </div>

          <aside className="border-t border-white/10 pt-8 lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="relative sticky top-28 space-y-8 border border-white/12 bg-black/18 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
              <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
              <div className="space-y-6">
                <PeopleMark />
                <div className="space-y-4">
                  <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">The first people in the room</h2>
                  <div className="h-px w-10 bg-signal" />
                </div>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  We are looking for people who can operate with judgment before structure, discretion before visibility, and ownership before
                  permission.
                </p>
              </div>

              <div className="border-t border-white/12 pt-7">
                <ul className="space-y-5">
                  {["Small team.", "High trust.", "Real consequence."].map((item, index) => (
                    <li key={item} className="grid grid-cols-[1rem_2.5rem_1fr] items-center gap-4 text-sm leading-6 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      <ExpectationIcon index={index} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/12 pt-7">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl leading-tight text-fg">Expectations</h2>
                  <div className="h-px w-10 bg-signal" />
                </div>
                <div className="mt-5 space-y-5 text-sm leading-7 text-muted">
                  <p>Submitting an introduction does not create an employment relationship or guarantee a response.</p>
                  <p>Entraphy reviews early-builder introductions manually. We move slowly in public so we can move decisively in private.</p>
                </div>
              </div>

              <div className="border-t border-white/12 pt-7">
                <p className="text-sm leading-7 text-muted">
                  Private development. <span className="mx-5 text-white/30">Selective access.</span> <span className="text-signal">Patent pending.</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
