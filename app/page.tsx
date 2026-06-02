import type { Metadata } from "next";

import { HomePageContent } from "@/components/marketing-home";
import { site } from "@/components/site-data";

export const metadata: Metadata = {
  title: site.pages.home.seo.title,
  description: site.pages.home.seo.description,
  alternates: {
    canonical: "https://www.entraphy.com/"
  },
  openGraph: {
    title: "Trust cannot be self-prescribed.",
    description: "A patent-pending foundation for trusted autonomy in AI-native systems.",
    type: "website",
    url: "https://www.entraphy.com/",
    images: [
      {
        url: "/brand/entraphy-og-image.png",
        width: 1200,
        height: 675,
        alt: "Trust cannot be self-prescribed."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust cannot be self-prescribed.",
    description: "A patent-pending foundation for trusted autonomy in AI-native systems.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

export default function HomePage() {
  return <HomePageContent />;
}
