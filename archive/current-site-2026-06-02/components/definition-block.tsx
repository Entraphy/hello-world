import type { PropsWithChildren } from "react";

export function DefinitionBlock({ children }: PropsWithChildren) {
  return (
    <div className="mt-14 max-w-3xl border border-line/60 bg-fg/[0.03] px-6 py-6">
      <p className="text-[12px] tracking-[0.22em] text-muted/80 uppercase">DEFINITION</p>
      <div className="mt-4 text-lg leading-relaxed text-muted">{children}</div>
    </div>
  );
}
