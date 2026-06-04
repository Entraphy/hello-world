import type { Metadata } from "next";
import Image from "next/image";

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

function HeroValueIcon({ type }: { type: "consequence" | "team" | "quiet" }) {
  if (type === "team") {
    return (
      <span aria-hidden className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-signal/80 text-signal">
        <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-2 left-1/2 h-4 w-6 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (type === "quiet") {
    return (
      <span aria-hidden className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-signal/80 text-signal">
        <span className="absolute left-1/2 top-2 h-6 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-2 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-signal/80 text-signal">
      <span className="absolute inset-2 rounded-full border border-current" />
      <span className="absolute left-1/2 top-1 h-8 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-1 top-1/2 h-px w-8 -translate-y-1/2 bg-current" />
    </span>
  );
}

function HeroValue({ type, title, body }: { type: "consequence" | "team" | "quiet"; title: string; body: string }) {
  return (
    <div className="grid max-w-[16rem] grid-cols-[2.5rem_1fr] gap-4">
      <HeroValueIcon type={type} />
      <div className="space-y-2">
        <p className="font-mono text-[10px] tracking-[0.22em] text-signal uppercase">{title}</p>
        <p className="text-xs leading-6 text-muted">{body}</p>
      </div>
    </div>
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(4,9,8,0.96)_44%,rgba(4,7,7,0.55)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-full opacity-80 lg:w-[62%]">
          <Image
            src="/images/entraphy-signal-field.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_44%,rgba(196,157,84,0.14),transparent_32%),linear-gradient(90deg,rgb(4,7,7)_0%,rgba(4,7,7,0.72)_34%,rgba(4,7,7,0.18)_68%,rgba(4,7,7,0.62)_100%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[42rem] w-full max-w-content items-center px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-8">
            <div className="max-w-2xl space-y-6">
              <Eyebrow>Join the early team</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
                Build before the category has a name.
              </h1>
              <div className="h-px w-11 bg-signal" />
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>Entraphy is assembling a small team with unusual judgment, discretion, and builder energy.</p>
                <p>
                  This is not a standard startup role. The first people in the room will help shape product judgment, operating discipline, partner
                  posture, and the way Entraphy shows up in the world.
                </p>
              </div>
            </div>
            <div className="grid gap-5 pt-4 sm:grid-cols-3">
              <HeroValue type="consequence" title="Real consequence" body="The work we do will outlive our first product." />
              <HeroValue type="team" title="Small team" body="You will have outsized impact from day one." />
              <HeroValue type="quiet" title="Quiet by design" body="We move carefully and build for the long term." />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(4,7,7),rgb(7,15,12)_56%,rgb(3,5,5))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(196,157,84,0.025)_58%,transparent)]" />

        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.42fr)_minmax(19rem,0.58fr)] lg:py-16">
          <div>
            <TeamIntakeForm initialType={searchParams?.type} />
          </div>

          <aside className="border-t border-white/10 pt-8 lg:border-t-0 lg:pl-4 lg:pt-0">
            <div className="sticky top-28 space-y-5">
              <div className="relative space-y-6 border border-white/12 bg-black/20 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
                <PeopleMark />
                <div className="space-y-4">
                  <h2 className="max-w-[13rem] font-mono text-[0.78rem] leading-7 tracking-[0.28em] text-signal uppercase">
                    The first people in the room
                  </h2>
                  <div className="h-px w-10 bg-signal" />
                </div>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  We are looking for people who can operate before the lane is fully defined.
                </p>
                <ul className="space-y-4 pt-1 text-sm leading-6 text-muted">
                  {["Judgment before structure.", "Discretion before visibility.", "Ownership before permission."].map((item) => (
                    <li key={item} className="grid grid-cols-[0.9rem_1fr] gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full border border-signal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative border border-white/10 bg-black/16 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />
                <h2 className="font-mono text-[0.78rem] leading-7 tracking-[0.28em] text-signal uppercase">Expectations</h2>
                <div className="mt-4 h-px w-10 bg-signal" />
                <div className="mt-5 space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  <p>Submitting an introduction does not create an employment relationship or guarantee a response.</p>
                  <p>
                    Entraphy reviews early-builder introductions manually. We move slowly in public so we can move decisively in private.
                  </p>
                </div>
              </div>

              <div className="relative border border-white/10 bg-black/16 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />
                <h2 className="font-mono text-[0.78rem] leading-7 tracking-[0.28em] text-signal uppercase">What we value</h2>
                <div className="mt-4 h-px w-10 bg-signal" />
                <ul className="mt-6 space-y-5">
                  {["Judgment before structure", "Discretion before visibility", "Ownership before permission"].map((item, index) => (
                    <li key={item} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 text-sm leading-6 text-muted">
                      <ExpectationIcon index={index} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
