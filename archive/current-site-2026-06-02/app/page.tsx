import type { Metadata } from "next";

import { HomePageContent } from "@/components/marketing-home";
import { site } from "@/components/site-data";

export const metadata: Metadata = {
  title: site.pages.home.seo.title,
  description: site.pages.home.seo.description,
  openGraph: {
    title: site.pages.home.seo.title,
    description: site.pages.home.seo.description
  }
};

export default function HomePage() {
  return <HomePageContent />;
}
