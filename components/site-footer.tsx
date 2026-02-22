import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/45 pt-14 pb-8">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs text-fg/65">Entraphy Systems Inc.</p>
          <p className="text-[10px] tracking-[0.12em] text-fg/55 uppercase">Established 2026</p>
        </div>
        <p>contact@entraphy.com</p>
        <div className="flex items-center gap-5">
          <Link href="/#doctrine" className="hover:text-fg focus-visible:text-fg">
            Foundational Doctrine
          </Link>
          <Link href="/legal/privacy" className="hover:text-fg">
            Privacy
          </Link>
          <Link href="/legal/terms" className="hover:text-fg">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
