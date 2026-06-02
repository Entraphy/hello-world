"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LogoBadge } from "@/components/marketing-primitives";
import { site } from "@/components/site-data";

function NavLink({
  href,
  children,
  onClick,
  className,
  active = false
}: {
  href: string;
  children: string;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-[0.68rem] font-semibold tracking-[0.28em] text-fg/78 uppercase transition hover:text-fg focus-visible:text-fg ${
        active ? "text-fg after:absolute after:-bottom-5 after:left-0 after:h-px after:w-full after:bg-signal" : ""
      } ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-signal/24 bg-black/92 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="shrink-0">
            <LogoBadge />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {site.nav.primary.map((item, index) => (
              <NavLink key={item.href} href={item.href} active={index === 0}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="relative lg:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-primary-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="cursor-pointer list-none border border-white/14 bg-white/[0.03] px-4 py-3 text-[0.7rem] tracking-[0.24em] text-fg/78 uppercase"
            >
              Menu
            </button>
            {mobileMenuOpen ? (
              <div
                id="mobile-primary-menu"
                className="menu-panel absolute right-0 top-full z-50 mt-3 max-h-[calc(100vh-6rem)] w-[min(92vw,20rem)] overflow-y-auto overscroll-contain border border-white/15 bg-[rgb(6,9,8)] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.52)]"
              >
                <div className="flex flex-col gap-1">
                  {site.nav.primary.map((item) => (
                    <NavLink key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block w-full px-3 py-2.5 after:hidden">
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
