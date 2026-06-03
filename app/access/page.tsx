import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ButtonLink } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Private Access | Entraphy Systems",
  description: "Private access entry for approved Entraphy partners, pilot customers, advisors, and early builders.",
  alternates: {
    canonical: "https://www.entraphy.com/access"
  },
  openGraph: {
    title: "Private Access | Entraphy Systems",
    description: "Private access entry for approved Entraphy partners, pilot customers, advisors, and early builders.",
    type: "website",
    url: "https://www.entraphy.com/access",
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
    title: "Private Access | Entraphy Systems",
    description: "Private access entry for approved Entraphy partners, pilot customers, advisors, and early builders.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const knownRequestTypes = new Set(["partner", "pilot", "advisor", "builder", "other"]);

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function AccessSeal() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden border border-signal/40 bg-[linear-gradient(135deg,rgba(17,34,28,0.88),rgba(4,7,6,0.96))] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
      <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/55 to-transparent" />
      <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_56%_46%,transparent_0,transparent_5.5rem,rgba(196,157,84,0.1)_5.55rem,transparent_5.6rem,transparent_9rem,rgba(196,157,84,0.075)_9.05rem,transparent_9.1rem,transparent_12.5rem,rgba(255,255,255,0.045)_12.55rem,transparent_12.6rem)] opacity-70" />
      <div className="relative grid min-h-[20rem] place-items-center">
        <div className="grid h-28 w-28 place-items-center rounded-full border border-signal/65 bg-black/25 shadow-[0_0_40px_rgba(196,157,84,0.12)]">
          <span aria-hidden className="relative block h-12 w-12 text-signal">
            <span className="absolute bottom-2 left-1/2 h-7 w-8 -translate-x-1/2 rounded-sm border border-current" />
            <span className="absolute left-1/2 top-1 h-7 w-6 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
            <span className="absolute left-1/2 top-8 h-2.5 w-px -translate-x-1/2 bg-current" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PrivateAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  if (searchParams?.type && knownRequestTypes.has(searchParams.type)) {
    redirect(`/request-access?type=${searchParams.type}`);
  }

  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7),rgb(7,12,10)_58%,rgb(8,10,8))]" />
        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[0.9fr_0.8fr] lg:items-center lg:py-20">
          <div className="max-w-2xl space-y-6">
            <Eyebrow>Approved entry</Eyebrow>
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Private Access</h1>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Approved briefing materials are available only to selected partners, pilot customers, advisors, and early builders.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Sign-in access is not yet publicly open. If you have not been approved, request access for manual review.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/request-access">Request Access</ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Return Home
              </ButtonLink>
            </div>
            <p className="font-mono text-[10px] leading-5 tracking-[0.24em] text-signal uppercase">
              Private development. Selective access. Patent pending.
            </p>
          </div>
          <AccessSeal />
        </div>
      </section>
    </div>
  );
}
