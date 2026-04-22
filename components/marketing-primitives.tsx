import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import logoMark from "../Entraphy_logo.png";

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
        <h2 className="max-w-4xl font-display text-3xl leading-[1.05] tracking-[-0.03em] text-fg sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        {subheadline ? <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">{subheadline}</p> : null}
      </header>
      {children ? <div>{children}</div> : null}
    </section>
  );
}

export function Surface({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "rounded-[1.6rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl",
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
        <h1 className="max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.05em] text-fg sm:text-6xl lg:text-[4.7rem]">
          {headline}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">{subheadline}</p>
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
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70";
  const styles = {
    primary: "border-signal/70 bg-signal text-bg hover:border-signal hover:bg-signal/90",
    secondary: "border-white/12 bg-white/[0.03] text-fg hover:border-white/24 hover:bg-white/[0.06]",
    tertiary: "border-transparent bg-transparent px-0 py-0 text-muted hover:text-fg"
  } as const;

  if (/^(mailto:|https?:\/\/)/.test(href)) {
    return (
      <a href={href} className={cx(base, styles[variant])}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cx(base, styles[variant])}>
      {children}
    </Link>
  );
}

export function LogoBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
        <Image src={logoMark} alt="Entraphy Systems logo mark" width={44} height={44} className="h-full w-full object-contain" />
      </div>
      <div className="leading-tight">
        <p className="font-display text-sm tracking-[0.28em] text-fg uppercase">Entraphy</p>
        <p className="mt-1 text-[11px] tracking-[0.24em] text-muted uppercase">Systems</p>
      </div>
    </div>
  );
}

export function ProofConsole() {
  const rows = [
    { label: "Trust state", value: "Warranted" },
    { label: "Evidence", value: "Sealed" },
    { label: "Replay", value: "Portable" },
    { label: "Boundary", value: "Bounded confidence" }
  ];

  return (
    <Surface className="overflow-hidden">
      <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-bg/80 p-1.5">
            <Image src={logoMark} alt="" width={40} height={40} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">Proof console</p>
            <p className="mt-2 text-sm leading-6 text-fg/80">Evidence-backed trust at the point of consequence.</p>
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
          No raw-data gravity
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
          No rip-and-replace
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
          Portable proof beyond runtime
        </span>
      </div>
    </Surface>
  );
}

export function SummaryPanel({ title, body, items }: { title: string; body?: string; items?: string[] }) {
  return (
    <Surface className="p-5">
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
    <Surface className="group flex h-full flex-col justify-between p-6 transition duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045]">
      <div className="space-y-4">
        <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Product preview</p>
        <div className="space-y-2">
          <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-fg">{name}</h3>
          <p className="text-sm font-medium tracking-[0.08em] text-fg/75 uppercase">{tagline}</p>
        </div>
        <p className="text-sm leading-7 text-muted">{body}</p>
      </div>
      <div className="mt-6">
        <ButtonLink href={href} variant="secondary">
          View preview
        </ButtonLink>
      </div>
    </Surface>
  );
}

export function StepCard({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <Surface className="flex h-full flex-col p-6">
      <p className="font-mono text-[10px] tracking-[0.3em] text-signal/70 uppercase">0{index + 1}</p>
      <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] text-fg">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </Surface>
  );
}

export function UseCaseCard({ title, body }: { title: string; body: string }) {
  return (
    <Surface className="flex h-full flex-col p-6">
      <h3 className="font-display text-xl leading-tight tracking-[-0.03em] text-fg">{title}</h3>
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
    <Surface className="p-5">
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
