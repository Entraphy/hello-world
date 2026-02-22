import Link from "next/link";

const navItems = [
  { href: "/reality-bound-systems", label: "Reality-Bound Systems" },
  { href: "/architecture", label: "Architecture" },
  { href: "/proof", label: "Proof" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.24em] uppercase text-fg">
            Entraphy
          </Link>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-5 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/briefing"
          className="inline-flex w-fit rounded-full border border-accent/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase transition hover:border-accent hover:bg-accent/10"
        >
          Executive Briefing
        </Link>
      </div>
    </header>
  );
}
