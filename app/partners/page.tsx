import Image from "next/image";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Partner With Us | Entraphy Systems",
  description: "Entraphy is opening selected conversations with strategic partners and pilot candidates preparing for trusted autonomy.",
  alternates: {
    canonical: "https://www.entraphy.com/partners"
  },
  openGraph: {
    title: "Partner With Us | Entraphy Systems",
    description: "Entraphy is opening selected conversations with strategic partners and pilot candidates preparing for trusted autonomy.",
    type: "website",
    url: "https://www.entraphy.com/partners",
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
    title: "Partner With Us | Entraphy Systems",
    description: "Entraphy is opening selected conversations with strategic partners and pilot candidates preparing for trusted autonomy.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const engagementTypes = [
  {
    title: "Strategic Partners",
    body: "For institutions and platforms shaping what trusted autonomy will require before scale.",
    icon: "stack"
  },
  {
    title: "Pilot Candidates",
    body: "For high-consequence environments preparing for private evaluation.",
    icon: "target"
  },
  {
    title: "Institutional Advisors",
    body: "For selected experts who can sharpen category, posture, and private development.",
    icon: "person"
  }
];

const steps = [
  {
    title: "Request access.",
    body: "Choose the path that best matches your context."
  },
  {
    title: "Entraphy reviews manually.",
    body: "Every request is reviewed with care and discretion."
  },
  {
    title: "Qualified conversations may proceed.",
    body: "Qualified organizations may be invited to a private briefing."
  }
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function PartnerMark() {
  return (
    <span aria-hidden className="relative block h-14 w-14 text-signal">
      <span className="absolute left-2 top-3 h-7 w-11 rotate-[-24deg] border border-current opacity-55" />
      <span className="absolute left-4 top-5 h-7 w-11 rotate-[-24deg] border border-current opacity-85" />
      <span className="absolute left-6 top-7 h-7 w-11 rotate-[-24deg] border border-current opacity-42" />
    </span>
  );
}

function EngagementIcon({ type }: { type: string }) {
  if (type === "target") {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute inset-2 rounded-full border border-current" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
        <span className="absolute left-7 top-3 h-px w-5 rotate-[-38deg] bg-current" />
      </span>
    );
  }

  if (type === "person") {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-2 left-1/2 h-6 w-8 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  return <PartnerMark />;
}

export default function PartnersPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,5,5)_0%,rgba(4,5,5,0.96)_42%,rgba(8,15,12,0.72)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content lg:min-h-[39rem] lg:grid-cols-[0.58fr_0.42fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <Eyebrow>Selected conversations</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Partner with us before the category is obvious.</h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Entraphy is opening a small number of private conversations with strategic partners and pilot candidates operating where trusted
                autonomy carries institutional consequence.
              </p>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Product details remain private. Qualified conversations begin through the request access path.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/request-partner-access?type=partner">Request Partner Access</ButtonLink>
                <ButtonLink href="/request-partner-access?type=pilot" variant="secondary">
                  Pilot Candidate Access
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden border-t border-white/10 lg:border-t-0">
            <Image src="/images/entraphy-threshold-doorway.png" alt="" fill priority className="object-cover object-center opacity-80" sizes="(min-width: 1024px) 42vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,5,0.58),rgba(4,5,5,0.08)_42%,rgba(4,5,5,0.36)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,5,0.06),rgba(4,5,5,0.52))]" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(8,10,10)]">
        <div className="mx-auto w-full max-w-content px-6 py-10 lg:py-12">
          <div className="border-l border-signal/80 py-1 pl-7">
            <div className="max-w-3xl space-y-5">
              <Eyebrow>Not a broad partner program</Eyebrow>
              <p className="text-base leading-8 text-muted">
                Entraphy is operating in private development. We are interested in disciplined conversations with organizations that understand the
                importance of trust, discretion, and institutional-grade adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="mb-7">
            <Eyebrow>Who should engage</Eyebrow>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {engagementTypes.map((item) => (
              <article
                key={item.title}
                className="min-h-72 border border-white/22 bg-[linear-gradient(180deg,rgba(18,34,28,0.5),rgba(4,7,6,0.78))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
              >
                <EngagementIcon type={item.icon} />
                <h2 className="mt-7 font-display text-3xl leading-tight text-fg">{item.title}</h2>
                <p className="mt-5 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(6,8,8)]">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="mb-8">
            <Eyebrow>How engagement begins</Eyebrow>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="space-y-7">
                <div className="flex items-center gap-5 text-signal">
                  <p className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-signal/52 font-display text-3xl leading-none">0{index + 1}</p>
                  <span className="h-px flex-1 bg-gradient-to-r from-signal/75 via-signal/42 to-transparent" />
                  {index < steps.length - 1 ? <span className="h-1.5 w-1.5 rounded-full bg-signal/85" /> : null}
                </div>
                <div className="max-w-xs space-y-3">
                  <h2 className="font-display text-2xl leading-tight text-fg">{step.title}</h2>
                  <p className="text-sm leading-7 text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm leading-7 text-muted/72">Additional confidentiality steps may be required before deeper materials are shared.</p>
          <div className="mt-8 border border-white/22 bg-black/18 p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="border-l border-signal/80 pl-7">
                <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Begin a partner conversation.</h2>
                <p className="mt-3 text-base leading-7 text-muted">Request access to start the process.</p>
              </div>
              <ButtonLink href="/request-partner-access?type=partner">Request Partner Access</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
