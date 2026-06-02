import Link from "next/link";
import type { PropsWithChildren, ReactNode } from "react";

export function PageWrap({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-content px-6 py-16 md:py-24">{children}</div>;
}

export function Section({ id, title, eyebrow, children }: { id?: string; title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16">
      {eyebrow ? <p className="mb-4 text-xs tracking-[0.2em] text-accent uppercase">{eyebrow}</p> : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-accent px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase transition hover:bg-accent/10"
    >
      {children}
    </Link>
  );
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-fg uppercase transition hover:border-accent/70"
    >
      {children}
    </Link>
  );
}

export function Callout({ children }: PropsWithChildren) {
  return <div className="rounded-2xl border border-line bg-white/[0.02] p-6 text-fg">{children}</div>;
}
