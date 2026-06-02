import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";

import { PageFrame, Surface } from "@/components/marketing-primitives";

type PageProps = {
  params: { slug: string[] };
};

const privateDevelopmentRoutes = [
  ["platform"],
  ["products"],
  ["company"],
  ["docs"],
  ["how-it-works"],
  ["use-cases"],
  ["demo"],
  ["products", "trusted-autonomy"]
];

export function generateStaticParams() {
  return privateDevelopmentRoutes.map((slug) => ({ slug }));
}

export function generateMetadata(): Metadata {
  return {
    title: "Private Development | Entraphy Systems",
    description: "Entraphy product and briefing materials are available through selective private access.",
    openGraph: {
      title: "Private Development | Entraphy Systems",
      description: "Entraphy product and briefing materials are available through selective private access."
    }
  };
}

export default function MarketingRoutePage({ params }: PageProps) {
  const routeKey = params.slug.join("/");

  if (routeKey === "contact" || routeKey === "demo" || routeKey.startsWith("products/")) {
    permanentRedirect("/#access");
  }

  return (
    <PageFrame>
      <section className="min-h-[calc(100vh-15rem)] py-16">
        <Surface className="mx-auto max-w-3xl p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">Private development</p>
            <h1 className="font-display text-4xl leading-tight text-fg sm:text-5xl">This material has moved behind private access.</h1>
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>Entraphy is operating in selective private development. Public product details are limited by design.</p>
              <p>Partners, pilot customers, advisors, and early builders can request access to the private briefing room.</p>
            </div>
            <Link
              href="/#access"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-signal/70 bg-signal px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-bg uppercase transition hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
            >
              Request Private Access
            </Link>
          </div>
        </Surface>
      </section>
    </PageFrame>
  );
}
