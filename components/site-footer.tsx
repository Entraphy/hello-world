import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 py-8">
      <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>contact@entraphy.com</p>
        <div className="flex items-center gap-5">
          <Link href="/legal/privacy" className="hover:text-fg">
            Privacy
          </Link>
          <Link href="/legal/terms" className="hover:text-fg">
            Terms
          </Link>
        </div>
        <p>© Entraphy</p>
      </div>
    </footer>
  );
}
