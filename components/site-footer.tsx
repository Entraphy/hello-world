import Link from "next/link";

import { LogoBadge } from "@/components/marketing-primitives";
import { site } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-black">
      <div className="mx-auto w-full max-w-content px-6 py-10">
        <div className="grid gap-7 lg:grid-cols-[13.5rem_minmax(13rem,0.95fr)_minmax(7.5rem,0.45fr)_minmax(18rem,1.1fr)] lg:items-start lg:gap-x-8">
          <div className="lg:pt-0.5">
            <LogoBadge variant="footer" />
          </div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] leading-5 tracking-[0.18em] text-signal uppercase">
            <span className="whitespace-nowrap">Private Development</span>
            <span aria-hidden="true" className="hidden text-signal/50 sm:inline">
              ·
            </span>
            <span className="whitespace-nowrap">Patent Pending</span>
          </p>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.24em] text-fg uppercase sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3 lg:grid lg:grid-cols-1 lg:justify-self-center"
          >
            <Link href="/#partners" className="hover:text-fg">
              Partners
            </Link>
            <Link href="/#team" className="hover:text-fg">
              Team
            </Link>
            <Link href="/#access" className="hover:text-fg">
              Access
            </Link>
            <Link href="/legal/privacy" className="hover:text-fg">
              Legal
            </Link>
          </nav>
          <div className="max-w-[35rem] text-sm leading-6 text-muted lg:max-w-none lg:text-right">
            <p>{site.positioning.one_line_summary}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
