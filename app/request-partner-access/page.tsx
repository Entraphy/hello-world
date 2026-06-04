import type { Metadata } from "next";

import { PartnerDossierVisual } from "@/components/entraphy-visuals";
import { AccessIntakeForm } from "@/components/access-intake-form";

export const metadata: Metadata = {
  title: "Request Partner Access | Entraphy Systems",
  description: "Request a private Entraphy partner, pilot, or advisor conversation.",
  alternates: {
    canonical: "https://www.entraphy.com/request-partner-access"
  },
  openGraph: {
    title: "Request Partner Access | Entraphy Systems",
    description: "Request a private Entraphy partner, pilot, or advisor conversation.",
    type: "website",
    url: "https://www.entraphy.com/request-partner-access",
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
    title: "Partner Access | Entraphy Systems",
    description: "Request a private Entraphy partner, pilot, or advisor conversation.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function ConfidentialityMark() {
  return (
    <span aria-hidden className="relative block h-12 w-12 text-signal">
      <span className="absolute inset-1 rounded-b-[1rem] border border-current" />
      <span className="absolute left-1/2 top-5 h-4 w-4 -translate-x-1/2 rounded-sm border border-current" />
      <span className="absolute left-1/2 top-3 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      <span className="absolute left-1/2 top-8 h-1.5 w-px -translate-x-1/2 bg-current" />
    </span>
  );
}

function StatusMark() {
  return (
    <span aria-hidden className="relative block h-12 w-12 text-signal">
      <span className="absolute left-2 top-2 h-8 w-8 border border-current" />
      <span className="absolute left-5 top-0 h-12 w-px bg-current opacity-65" />
      <span className="absolute left-0 top-6 h-px w-12 bg-current opacity-65" />
      <span className="absolute right-2 top-4 h-5 w-px bg-current" />
      <span className="absolute right-2 top-4 h-px w-5 bg-current" />
    </span>
  );
}

export default function PartnerAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(5,10,9,0.96)_52%,rgba(6,8,7,0.82)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content lg:min-h-[32rem] lg:grid-cols-[0.45fr_0.55fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-7">
              <Eyebrow>Partner access</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Begin a private conversation.</h1>
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>Share the context for a strategic partner, pilot, advisor, or careful inquiry.</p>
                <p>Additional confidentiality steps may be required before deeper materials are shared.</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden border-t border-white/10 lg:border-t-0">
            <PartnerDossierVisual />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(4,7,7),rgb(7,15,12)_56%,rgb(3,5,5))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(196,157,84,0.025)_58%,transparent)]" />

        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.42fr)_minmax(20rem,0.58fr)] lg:py-16">
          <div>
            <AccessIntakeForm
              initialType={searchParams?.type}
              scope="partners"
              sourceBasePath="/request-partner-access"
              pathsEyebrow="Choose your context"
              intro="Select the path that best matches your role and the conversation you are looking to have with Entraphy."
              detailsEyebrow="Conversation context"
              submitLabel="Request Partner Access"
              requireOrganizationAndRole
            />
          </div>

          <aside className="border-t border-white/10 pt-8 lg:border-t-0 lg:pl-6 lg:pt-0">
            <div className="sticky top-28 space-y-7">
              <div className="relative space-y-7 border border-white/18 bg-black/20 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
                <div className="grid gap-5 sm:grid-cols-[3rem_1fr] lg:grid-cols-1 xl:grid-cols-[3rem_1fr]">
                  <ConfidentialityMark />
                  <div className="space-y-3">
                    <h2 className="font-mono text-[10px] leading-5 tracking-[0.28em] text-signal uppercase">Confidentiality and expectations</h2>
                    <div className="h-px w-10 bg-signal" />
                  </div>
                </div>
                <div className="space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  <p>
                    Submitting a request does not guarantee access. Additional confidentiality steps may be required before deeper materials are shared.
                  </p>
                  <p>Qualified conversations proceed only when timing, context, and alignment are clear.</p>
                </div>
                <p className="border-t border-white/12 pt-6 text-sm leading-7 text-muted">Confidentiality may precede any deeper exchange.</p>
              </div>

              <div className="relative border border-white/16 bg-black/16 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />
                <h2 className="font-mono text-[10px] leading-5 tracking-[0.28em] text-signal uppercase">How conversations proceed</h2>
                <ol className="mt-7 divide-y divide-white/10 text-sm leading-6 text-muted">
                  {["Request received", "Manual review", "Confidentiality if appropriate", "Private briefing if aligned"].map((item, index) => (
                    <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 first:pt-0 last:pb-0">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-signal">0{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative border border-white/16 bg-[linear-gradient(180deg,rgba(8,22,17,0.45),rgba(3,6,6,0.76))] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.24)]">
                <StatusMark />
                <p className="mt-6 font-display text-2xl leading-snug text-signal">
                  Private development.
                  <br />
                  Selective review.
                  <br />
                  Patent pending.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
