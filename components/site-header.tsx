import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/35 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex flex-col items-start gap-0.5">
          <span className="text-sm font-semibold tracking-[0.08em] uppercase text-fg">Entraphy Systems Inc.</span>
          <span className="text-xs tracking-normal text-fg/60">Reality-Bound Systems</span>
        </Link>

        <Link
          href="/briefing"
          aria-label="Request executive access briefing"
          className="inline-flex w-fit rounded-full border border-accent/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase transition hover:border-accent hover:bg-accent/10"
        >
          Request Access
        </Link>
      </div>
    </header>
  );
}
