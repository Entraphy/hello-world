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
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    title: "Trust cannot be self-prescribed.",
    description: "A patent-pending foundation for trusted autonomy in AI-native systems.",
    url: "https://www.entraphy.com/",
    siteName: "Entraphy Systems",
    type: "website",
    locale: "en_US",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Entraphy Systems",
    url: "https://www.entraphy.com/",
    description: "Entraphy is building a patent-pending foundation for trusted autonomy in AI-native systems."
  };

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} bg-bg text-fg antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
