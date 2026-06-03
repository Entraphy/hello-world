import type { Metadata } from "next";

import { AccessIntakeForm } from "@/components/access-intake-form";

export const metadata: Metadata = {
  title: "Private Access | Entraphy Systems",
  description: "Request private access to Entraphy briefing materials for selected partners, pilot candidates, advisors, and early builders.",
  alternates: {
    canonical: "https://www.entraphy.com/access"
  },
  openGraph: {
    title: "Private Access | Entraphy Systems",
    description: "Request private access to Entraphy briefing materials for selected partners, pilot candidates, advisors, and early builders.",
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
    description: "Request private access to Entraphy briefing materials for selected partners, pilot candidates, advisors, and early builders.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

export default function AccessPage({ searchParams }: { searchParams?: { type?: string } }) {
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
              Entraphy operates a single controlled access desk for selected partners, pilot candidates, advisors, early builders, and careful
              inquiries.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Choose the path that best matches your context. Public details remain limited by design, and every request is reviewed manually.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
          <div>
            <div className="mb-6">
              <Eyebrow>Controlled access desk</Eyebrow>
            </div>
            <AccessIntakeForm initialType={searchParams?.type} />
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
