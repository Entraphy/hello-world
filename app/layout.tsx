import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

import { SiteShell } from "@/components/site-shell";
import { site } from "@/components/site-data";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entraphy.com"),
  title: {
    default: site.pages.home.seo.title,
    template: "%s"
  },
  description: site.positioning.one_line_summary,
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Trust cannot be self-prescribed.",
    description: "A patent-pending foundation for trusted autonomy in AI-native systems.",
    url: "https://www.entraphy.com/",
    type: "website",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} bg-bg text-fg antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
