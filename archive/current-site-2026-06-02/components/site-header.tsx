"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ButtonLink, LogoBadge } from "@/components/marketing-primitives";
import { site } from "@/components/site-data";

function NavLink({
  href,
  children,
  onClick,
  className
}: {
  href: string;
  children: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm text-fg/72 transition hover:text-fg focus-visible:text-fg ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [platform, products, howItWorks, useCases, docs, company] = site.nav.primary;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" aria-label="Entraphy Systems home" onClick={() => setMobileMenuOpen(false)}>
            <LogoBadge />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <NavLink href={platform.href}>{platform.label}</NavLink>
            <NavLink href={products.href}>{products.label}</NavLink>
            <NavLink href={howItWorks.href}>{howItWorks.label}</NavLink>
            <NavLink href={useCases.href}>{useCases.label}</NavLink>
            <NavLink href={docs.href}>{docs.label}</NavLink>
            <NavLink href={company.href}>{company.label}</NavLink>
            <ButtonLink href={site.nav.cta.href} variant="secondary">
              {site.nav.cta.label}
            </ButtonLink>
          </nav>

          <div className="relative lg:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-primary-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="cursor-pointer list-none rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.7rem] tracking-[0.24em] text-fg/78 uppercase"
            >
              Menu
            </button>
            {mobileMenuOpen ? (
              <div
                id="mobile-primary-menu"
                className="menu-panel absolute right-0 top-full z-50 mt-3 w-[min(92vw,20rem)] max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain rounded-[1.4rem] border border-white/15 bg-[rgb(6,9,14)] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.52)]"
              >
                <div className="flex flex-col gap-1">
                  <NavLink href={platform.href} onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-2xl px-3 py-2.5">
                    {platform.label}
                  </NavLink>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                    <NavLink
                      href={products.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full rounded-2xl px-3 py-2.5 text-fg/88"
                    >
                      {products.label}
                    </NavLink>
                    <div className="mt-1 flex flex-col gap-1 pl-3">
                      {products.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full rounded-2xl px-3 py-2 text-sm text-fg/85 transition hover:bg-white/[0.06] hover:text-fg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <NavLink href={howItWorks.href} onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-2xl px-3 py-2.5">
                    {howItWorks.label}
                  </NavLink>
                  <NavLink href={useCases.href} onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-2xl px-3 py-2.5">
                    {useCases.label}
                  </NavLink>
                  <NavLink href={docs.href} onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-2xl px-3 py-2.5">
                    {docs.label}
                  </NavLink>
                  <NavLink href={company.href} onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-2xl px-3 py-2.5">
                    {company.label}
                  </NavLink>
                  <div className="pt-2">
                    <ButtonLink href={site.nav.cta.href} variant="secondary" onClick={() => setMobileMenuOpen(false)}>
                      {site.nav.cta.label}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
