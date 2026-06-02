import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-content px-6 py-10 sm:py-14 lg:py-16">{children}</div>;
}

export function SectionFrame({
  eyebrow,
  headline,
  subheadline,
  children,
  className,
  id
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx("space-y-8", className)}>
      <header className="space-y-4">
        {eyebrow ? <p className="font-mono text-[11px] tracking-[0.32em] text-signal/80 uppercase">{eyebrow}</p> : null}
        <h2 className="max-w-4xl font-display text-2xl leading-[1.08] text-fg sm:text-3xl lg:text-5xl">
          {headline}
        </h2>
        {subheadline ? <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">{subheadline}</p> : null}
      </header>
      {children ? <div>{children}</div> : null}
    </section>
  );
}

export function Surface({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div
      id={id}
      className={cx(
        "rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  supportingItems,
  visual
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportingItems?: string[];
  visual?: ReactNode;
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div className="space-y-7">
        <p className="font-mono text-[11px] tracking-[0.32em] text-signal/80 uppercase">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl leading-[0.96] text-fg sm:text-5xl lg:text-[4.7rem]">
          {headline}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{subheadline}</p>
        <div className="flex flex-wrap gap-3">
          {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
          {secondaryCta ? (
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
        {supportingItems ? (
          <div className="flex flex-wrap gap-3 text-sm text-fg/70">
            {supportingItems.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {visual ? <div className="lg:pl-6">{visual}</div> : null}
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  onClick
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center border px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.22em] uppercase transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70";
  const styles = {
    primary: "border-signal/75 bg-transparent text-fg hover:border-signal hover:bg-signal/10",
    secondary: "border-white/18 bg-transparent text-fg hover:border-signal/70 hover:bg-white/[0.04]",
    tertiary: "border-transparent bg-transparent px-0 py-0 text-muted hover:text-fg"
  } as const;

  if (/^(mailto:|https?:\/\/)/.test(href)) {
    return (
      <a href={href} onClick={onClick} className={cx(base, styles[variant])}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={cx(base, styles[variant])}>
      {children}
    </Link>
  );
}

export function LogoBadge({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";

  return (
    <Image
      src="/brand/entraphy-logo-lockup.png"
      alt={isFooter ? "Entraphy Systems" : "Entraphy"}
      width={815}
      height={320}
      priority={!isFooter}
      className={cx("block h-auto shrink-0", isFooter ? "w-[13.5rem] max-w-full" : "w-[10.75rem]")}
    />
  );
}

export function ProofConsole() {
  const rows = [
    { label: "Access", value: "Reviewed" },
    { label: "Development", value: "Private" },
    { label: "Status", value: "Patent pending" },
    { label: "Signal", value: "Reviewed" }
  ];

  return (
    <Surface className="overflow-hidden">
      <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-bg/80 p-2">
            <Image src="/brand/entraphy-logo-mark.png" alt="" width={300} height={330} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">Private briefing</p>
            <p className="mt-2 text-sm leading-6 text-fg/80">A controlled-access doorway for serious conversations.</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-bg/40 px-4 py-3">
            <span className="text-sm text-muted">{row.label}</span>
            <span className="text-sm font-medium text-fg">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
          Private development
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
          Selective access
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
          Patent pending
        </span>
      </div>
    </Surface>
  );
}

export function SummaryPanel({ title, body, items }: { title: string; body?: string; items?: string[] }) {
  return (
    <Surface className="p-4 sm:p-5">
      <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">{title}</p>
      {body ? <p className="mt-3 text-sm leading-7 text-muted">{body}</p> : null}
      {items ? (
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Surface>
  );
}

export function ProductCard({
  name,
  tagline,
  body,
  href
}: {
  name: string;
  tagline: string;
  body: string;
  href: string;
}) {
  return (
    <Surface className="group flex h-full flex-col justify-between p-5 sm:p-6 transition duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045]">
      <div className="space-y-4">
        <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Product preview</p>
        <div className="space-y-2">
          <h3 className="font-display text-xl leading-tight text-fg sm:text-2xl">{name}</h3>
          <p className="text-sm font-medium tracking-[0.08em] text-fg/75 uppercase">{tagline}</p>
        </div>
        <p className="text-sm leading-7 text-muted">{body}</p>
      </div>
      <div className="mt-6">
        <ButtonLink href={href} variant="secondary">
          Explore product
        </ButtonLink>
      </div>
    </Surface>
  );
}

export function StepCard({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <Surface className="flex h-full flex-col p-5 sm:p-6">
      <p className="font-mono text-[10px] tracking-[0.3em] text-signal/70 uppercase">0{index + 1}</p>
      <h3 className="mt-4 font-display text-xl leading-tight text-fg sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </Surface>
  );
}

export function UseCaseCard({ title, body }: { title: string; body: string }) {
  return (
    <Surface className="flex h-full flex-col p-5 sm:p-6">
      <h3 className="font-display text-lg leading-tight text-fg sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </Surface>
  );
}

export function DocCard({ index, title }: { index: number; title: string }) {
  return (
    <Surface className="flex h-full items-center justify-between gap-4 p-5">
      <div className="flex min-w-0 items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
          0{index + 1}
        </span>
        <span className="text-sm leading-6 text-fg">{title}</span>
      </div>
      <span className="font-mono text-[10px] tracking-[0.26em] text-muted uppercase">Guide</span>
    </Surface>
  );
}

export function BulletedPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <Surface className="p-4 sm:p-5">
      <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}
