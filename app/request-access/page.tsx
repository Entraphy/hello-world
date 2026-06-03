import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ButtonLink } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Choose Your Path | Entraphy Systems",
  description: "Choose the right Entraphy request path.",
  alternates: {
    canonical: "https://www.entraphy.com/request-access"
  },
  openGraph: {
    title: "Choose Your Path | Entraphy Systems",
    description: "Choose the right Entraphy request path.",
    type: "website",
    url: "https://www.entraphy.com/request-access",
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
    title: "Choose Your Path | Entraphy Systems",
    description: "Choose the right Entraphy request path.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

function targetFor(type?: string) {
  if (type === "partner" || type === "pilot" || type === "advisor" || type === "other") {
    return `/request-partner-access?type=${type}`;
  }

  if (type === "builder") {
    return "/introduce-yourself";
  }

  return null;
}

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

export default function RequestAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  const target = targetFor(searchParams?.type);

  if (target) {
    redirect(target);
  }

  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7),rgb(7,12,10)_58%,rgb(8,10,8))]" />
        <div className="absolute right-0 top-0 h-[24rem] w-[32rem] rounded-full border border-signal/12 opacity-45" />
        <div className="relative mx-auto w-full max-w-content px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-7">
            <Eyebrow>Intent matters</Eyebrow>
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Choose your path.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Partner conversations and early-builder introductions are reviewed through different private paths.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/request-partner-access">Partner With Us</ButtonLink>
              <ButtonLink href="/introduce-yourself" variant="secondary">
                Introduce Yourself
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
