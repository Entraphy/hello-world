import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { SiteShell } from "@/components/site-shell";
import { site } from "@/components/site-data";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"]
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://entraphy.com"),
  title: {
    default: "Entraphy",
    template: "%s"
  },
  description: site.positioning.one_line_summary,
  openGraph: {
    title: "Entraphy",
    description: site.positioning.one_line_summary,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} bg-bg text-fg antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
