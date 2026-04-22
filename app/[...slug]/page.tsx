import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RoutePageContent, marketingRouteMetadata, marketingRoutes } from "@/components/marketing-routes";

type PageProps = {
  params: { slug: string[] };
};

export function generateStaticParams() {
  return marketingRoutes.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const routeKey = params.slug.join("/");
  const meta = marketingRouteMetadata[routeKey as keyof typeof marketingRouteMetadata];

  if (!meta) {
    return {
      title: "Entraphy",
      description: "Trust infrastructure for consequential AI and software systems."
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description
    }
  };
}

export default function MarketingRoutePage({ params }: PageProps) {
  const routeKey = params.slug.join("/");

  if (!marketingRouteMetadata[routeKey as keyof typeof marketingRouteMetadata]) {
    notFound();
  }

  return <RoutePageContent slug={params.slug} />;
}
