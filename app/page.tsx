import type { Metadata } from "next";

import { HomePageContent } from "@/components/homepage-content";

export const metadata: Metadata = {
  title: "Entraphy | Reality-Bound Systems",
  description: "Architectures where consequential actions must satisfy authority, policy, and time before they can occur.",
  openGraph: {
    title: "Entraphy | Reality-Bound Systems",
    description: "Nothing is trusted until it is proven."
  }
};

export default function HomePage() {
  return <HomePageContent />;
}
