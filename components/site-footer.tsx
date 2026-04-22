import Link from "next/link";

import { site } from "@/components/site-data";

export function SiteFooter() {
  const [platform, products, howItWorks, useCases, docs, company] = site.nav.primary;

  return (
    <footer className="border-t border-white/8 bg-bg/50">
      <div className="mx-auto w-full max-w-content px-6 py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="font-display text-lg tracking-[0.24em] text-fg uppercase">Entraphy</p>
            <p className="max-w-md text-sm leading-7 text-muted">{site.positioning.one_line_summary}</p>
            <p className="text-sm text-fg/70">contact@entraphy.com</p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-mono text-[10px] tracking-[0.24em] text-signal/70 uppercase">Explore</p>
            <div className="flex flex-col gap-2 text-muted">
              <Link href={platform.href} className="hover:text-fg">
                {platform.label}
              </Link>
              <Link href={products.href} className="hover:text-fg">
                {products.label}
              </Link>
              <Link href={howItWorks.href} className="hover:text-fg">
                {howItWorks.label}
              </Link>
              <Link href={useCases.href} className="hover:text-fg">
                {useCases.label}
              </Link>
              <Link href={docs.href} className="hover:text-fg">
                {docs.label}
              </Link>
              <Link href={company.href} className="hover:text-fg">
                {company.label}
              </Link>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-mono text-[10px] tracking-[0.24em] text-signal/70 uppercase">Legal</p>
            <div className="flex flex-col gap-2 text-muted">
              <Link href="/legal/privacy" className="hover:text-fg">
                Privacy
              </Link>
              <Link href="/legal/terms" className="hover:text-fg">
                Terms
              </Link>
              <Link href="/demo#intake" className="hover:text-fg">
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
