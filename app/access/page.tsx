import type { Metadata } from "next";

import { AccessIntakeForm } from "@/components/access-intake-form";

export const metadata: Metadata = {
  title: "Private Access | Entraphy Systems",
  description: "Request private access to Entraphy briefing materials for selected partners, pilot customers, advisors, and early builders.",
  alternates: {
    canonical: "https://www.entraphy.com/access"
  },
  openGraph: {
    title: "Private Access | Entraphy Systems",
    description: "Request private access to Entraphy briefing materials for selected partners, pilot customers, advisors, and early builders.",
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
    description: "Request private access to Entraphy briefing materials for selected partners, pilot customers, advisors, and early builders.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const accessPaths = [
  {
    title: "Strategic Partners",
    body: "For organizations and platforms confronting AI-native trust, autonomy, and institutional confidence at scale."
  },
  {
    title: "Pilot Customers",
    body: "For high-consequence environments preparing to evaluate stronger foundations for trusted autonomy."
  },
  {
    title: "Advisors",
    body: "For selected experts helping shape category, strategy, governance, legal foundation, and market entry."
  },
  {
    title: "Early Builders",
    body: "For builders who want to help define the trust layer before the category is obvious."
  }
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function AccessPathIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-1 top-6 h-3 w-7 rotate-[32deg] border border-current" />
        <span className="absolute right-1 top-6 h-3 w-7 rotate-[-32deg] border border-current" />
        <span className="absolute left-4 top-4 h-5 w-5 rotate-45 border-b border-r border-current" />
      </span>
    );
  }

  if (index === 1) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-1/2 top-1/2 h-9 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current bg-bg" />
      </span>
    );
  }

  if (index === 2) {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute left-1/2 top-1 h-7 w-7 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-0 left-1/2 h-6 w-9 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-12 w-12 text-signal">
      <span className="absolute bottom-0 left-2 h-8 w-3 border border-current" />
      <span className="absolute bottom-0 left-5 h-11 w-4 border border-current" />
      <span className="absolute bottom-0 right-2 h-7 w-3 border border-current" />
      <span className="absolute left-6 top-3 h-1 w-1 bg-current" />
      <span className="absolute left-6 top-6 h-1 w-1 bg-current" />
      <span className="absolute left-3 bottom-2 h-1 w-1 bg-current" />
      <span className="absolute right-3 bottom-3 h-1 w-1 bg-current" />
    </span>
  );
}

export default function AccessPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7),rgb(7,12,10)_58%,rgb(8,10,8))]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[36rem] rounded-full border border-white/20 opacity-55" />
        <div className="absolute -right-14 top-8 h-[25rem] w-[28rem] rounded-full border border-signal/22 opacity-70" />
        <div className="absolute right-2 top-20 h-72 w-72 rounded-full border border-signal/30 bg-signal/[0.04]" />
        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Private Access</h1>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Entraphy is operating in private development. Access to deeper materials is reviewed manually for selected partners, pilot customers,
              advisors, and early builders.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Product details remain limited by design. Qualified requests may receive access to confidential briefing materials or a private
              conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(6,9,9)]">
        <div className="mx-auto w-full max-w-content px-6 py-12 sm:py-14">
          <div className="mb-7 text-center">
            <Eyebrow>Access paths</Eyebrow>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {accessPaths.map((path, index) => (
              <article key={path.title} className="min-h-64 border border-white/22 bg-black/18 p-6 transition hover:border-signal/48 hover:bg-white/[0.025]">
                <AccessPathIcon index={index} />
                <h2 className="mt-7 font-mono text-[12px] leading-6 tracking-[0.2em] text-fg uppercase">{path.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{path.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[1.18fr_0.82fr] lg:py-16">
          <div>
            <div className="mb-6">
              <Eyebrow>Request private access</Eyebrow>
            </div>
            <AccessIntakeForm />
          </div>
          <aside className="border-t border-white/18 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-12">
            <div className="space-y-6">
              <span aria-hidden className="relative block h-16 w-16 text-signal">
                <span className="absolute inset-x-2 top-0 h-14 rounded-b-[1.75rem] border border-current" />
                <span className="absolute left-1/2 top-7 h-5 w-5 -translate-x-1/2 rounded-sm border border-current" />
                <span className="absolute left-1/2 top-5 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
                <span className="absolute left-1/2 top-10 h-2 w-px -translate-x-1/2 bg-current" />
              </span>
              <div className="space-y-4">
                <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Confidentiality and expectations</h2>
                <div className="h-px w-10 bg-signal" />
                <p className="text-base leading-8 text-muted">
                  Submitting a request does not guarantee access. Entraphy reviews requests manually and may require additional confidentiality steps
                  before sharing deeper materials.
                </p>
              </div>
              <div className="border-t border-white/14 pt-7">
                <p className="text-base leading-8 text-muted">
                  Private development. Selective access. <span className="text-signal">Patent pending.</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
