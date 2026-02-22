import type { Metadata } from "next";

import "./globals.css";

import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://entraphy.com"),
  title: {
    default: "Entraphy",
    template: "%s"
  },
  description: "Reality-Bound Systems. Nothing is trusted until it is proven.",
  openGraph: {
    title: "Entraphy",
    description: "Reality-Bound Systems. Nothing is trusted until it is proven.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
