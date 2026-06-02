import siteSpec from "@/entraphy_company_site_page_spec.json";

type AnySection = {
  component: string;
  [key: string]: any;
};

export const site = siteSpec.site;
export const homeSections = site.pages.home.sections as AnySection[];
const productFamilySection = site.pages.home.sections[4] as AnySection;
export const trustFlightRecorderName = productFamilySection.cards[0].name as string;

export const routeMetadata = {
  platform: {
    title: "Platform | Entraphy Systems",
    description: site.pages.platform.hero.subheadline
  },
  products: {
    title: "Products | Entraphy Systems",
    description: site.pages.products.hero.subheadline
  },
  company: {
    title: "Company | Entraphy Systems",
    description: site.pages.company.hero.subheadline
  },
  docs: {
    title: "Docs | Entraphy Systems",
    description: "Company-first docs for Entraphy Systems, Trust Flight Recorder for AI, and Blacksmith."
  },
  "how-it-works": {
    title: "How It Works | Entraphy Systems",
    description: "Evidence first. Decision second. Proof always."
  },
  "use-cases": {
    title: "Use Cases | Entraphy Systems",
    description: "Built for environments where later defensibility matters."
  },
  demo: {
    title: "Demo / Proof Pilot | Entraphy Systems",
    description: "See how Trust Flight Recorder for AI fits a demo or Proof Pilot, with replayable evidence and verification across your stack."
  },
  "products/trust-flight-recorder-ai": {
    title: `${trustFlightRecorderName} | Entraphy Systems`,
    description: "Proof at decision time, legality proofs, replayable evidence, and portable verification."
  },
  "products/blacksmith": {
    title: "Blacksmith | Entraphy Systems",
    description: "Autonomous hardening infrastructure for modern software, with validation, safe repair, and witness-grade evidence."
  }
} as const;

export const routeSlugs = Object.keys(routeMetadata).map((route) => route.split("/"));

export type RouteKey = keyof typeof routeMetadata;
export type { AnySection };
