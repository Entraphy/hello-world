import Image from "next/image";
import type { Metadata } from "next";

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
    <span aria-hidden className="relative block h-16 w-16 text-signal">
      <span className="absolute inset-x-2 top-0 h-14 rounded-b-[1.75rem] border border-current" />
      <span className="absolute left-1/2 top-7 h-5 w-5 -translate-x-1/2 rounded-sm border border-current" />
      <span className="absolute left-1/2 top-5 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      <span className="absolute left-1/2 top-10 h-2 w-px -translate-x-1/2 bg-current" />
    </span>
  );
}

export default function PartnerAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(5,10,9,0.96)_52%,rgba(6,8,7,0.82)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content lg:min-h-[39rem] lg:grid-cols-[0.54fr_0.46fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl space-y-6">
              <Eyebrow>Partner access</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Begin a private conversation.</h1>
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>Entraphy reviews partner and pilot requests manually. Product details remain private while the foundation remains in development.</p>
                <p>Choose the path that best matches your context. Qualified conversations may proceed to a private briefing.</p>
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
              sizes="(min-width: 1024px) 46vw, 100vw"
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

          <aside className="border-t border-white/10 pt-8 lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="relative sticky top-28 space-y-7 border border-white/12 bg-black/18 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
              <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
              <ConfidentialityMark />
              <div className="space-y-4">
                <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">Confidentiality and expectations</h2>
                <div className="h-px w-10 bg-signal" />
              </div>
              <div className="space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                <p>
                  Submitting a request does not guarantee access. Entraphy reviews requests manually and may require additional confidentiality steps
                  before sharing deeper materials.
                </p>
                <p>We are intentionally selective about who we engage with while in private development.</p>
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
