import Link from "next/link";

import { LogoBadge } from "@/components/marketing-primitives";
import { site } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-black">
      <div className="mx-auto w-full max-w-content px-6 py-9">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <LogoBadge variant="footer" />
            <div className="font-mono text-[10px] leading-5 tracking-[0.22em] text-signal uppercase">
              <p>Private Development</p>
              <p>Patent Pending</p>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-8 font-mono text-[10px] tracking-[0.24em] text-fg uppercase">
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
          <div className="text-sm leading-6 text-muted lg:text-right">
            <p>{site.positioning.one_line_summary}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
