import Link from "next/link";

import { ButtonLink, LogoBadge } from "@/components/marketing-primitives";
import { site } from "@/components/site-data";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-fg/72 transition hover:text-fg focus-visible:text-fg"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [platform, products, howItWorks, useCases, docs, company] = site.nav.primary;

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" aria-label="Entraphy home">
            <LogoBadge />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <NavLink href={platform.href}>{platform.label}</NavLink>
            <details className="group relative">
              <summary className="cursor-pointer list-none text-sm text-fg/72 transition hover:text-fg">
                {products.label}
              </summary>
              <div className="menu-panel absolute left-0 top-full z-50 mt-4 hidden w-[20rem] rounded-[1.4rem] border border-white/10 bg-bg/96 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                <Link href={products.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {products.label}
                </Link>
                <div className="my-2 h-px bg-white/8" />
                {products.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-fg/76 transition hover:bg-white/[0.04] hover:text-fg"
                  >
                    <span className="block text-[11px] tracking-[0.18em] text-signal/70 uppercase">Product</span>
                    <span className="mt-1 block leading-6">{child.label}</span>
                  </Link>
                ))}
              </div>
            </details>
            <NavLink href={howItWorks.href}>{howItWorks.label}</NavLink>
            <NavLink href={useCases.href}>{useCases.label}</NavLink>
            <NavLink href={docs.href}>{docs.label}</NavLink>
            <NavLink href={company.href}>{company.label}</NavLink>
            <ButtonLink href={site.nav.cta.href} variant="secondary">
              {site.nav.cta.label}
            </ButtonLink>
          </nav>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.7rem] tracking-[0.24em] text-fg/78 uppercase">
              Menu
            </summary>
            <div className="menu-panel absolute right-0 top-full z-50 mt-3 hidden w-[min(92vw,20rem)] max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain rounded-[1.4rem] border border-white/10 bg-bg/96 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl">
              <div className="space-y-1">
                <Link href={platform.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {platform.label}
                </Link>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-1">
                  <Link href={products.href} className="block rounded-2xl px-3 py-2 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                    {products.label}
                  </Link>
                  {products.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-2xl px-3 py-2 text-sm text-fg/72 transition hover:bg-white/[0.04] hover:text-fg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
                <Link href={howItWorks.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {howItWorks.label}
                </Link>
                <Link href={useCases.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {useCases.label}
                </Link>
                <Link href={docs.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {docs.label}
                </Link>
                <Link href={company.href} className="block rounded-2xl px-4 py-3 text-sm text-fg/80 transition hover:bg-white/[0.04] hover:text-fg">
                  {company.label}
                </Link>
                <div className="pt-2">
                  <ButtonLink href={site.nav.cta.href} variant="secondary">
                    {site.nav.cta.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
