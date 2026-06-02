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
        url: "/images/entraphy-og.jpg",
        width: 1200,
        height: 675,
        alt: "Entraphy signal field"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust cannot be self-prescribed.",
    description: "A patent-pending foundation for trusted autonomy in AI-native systems.",
    images: ["/images/entraphy-og.jpg"]
  }
};

export default function HomePage() {
  return <HomePageContent />;
}
