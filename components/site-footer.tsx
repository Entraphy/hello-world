import Link from "next/link";

const companyStatement = "Entraphy is building a patent-pending foundation for the systems that must earn trust before they act.";

const footerLinks = [
  { label: "Thesis", href: "/#thesis" },
  { label: "Partner With Us", href: "/partners" },
  { label: "Join the Team", href: "/team" },
  { label: "Private Access", href: "/access" },
  { label: "Legal", href: "/legal/privacy" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-black">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 py-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
          <p className="font-display text-lg leading-6 text-fg">Entraphy Systems</p>
          <p className="text-sm leading-6 text-muted lg:whitespace-nowrap">
            {companyStatement}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-4 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
          <p
            aria-label="Private Development · Patent Pending"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] leading-5 tracking-[0.18em] text-signal uppercase md:justify-start"
          >
            <span className="whitespace-nowrap">Private Development</span>
            <span aria-hidden="true" className="text-signal/50">
              ·
            </span>
            <span className="whitespace-nowrap">Patent Pending</span>
          </p>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.24em] text-fg uppercase md:flex-nowrap md:justify-end"
          >
            {footerLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-x-3 whitespace-nowrap">
                <Link href={link.href} className="hover:text-fg">
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 ? (
                  <span aria-hidden="true" className="text-fg/35">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
