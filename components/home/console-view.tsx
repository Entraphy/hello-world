"use client";

import { useMemo, useState } from "react";

type ConsoleMode = "understand" | "inspect" | "architecture" | "proof";

const consoleModes: { id: ConsoleMode; label: string; status: string }[] = [
  { id: "understand", label: "Understand", status: "Calibrating" },
  { id: "inspect", label: "Inspect Model", status: "Inspecting" },
  { id: "architecture", label: "Architecture", status: "Mapping" },
  { id: "proof", label: "Proof", status: "Emitting" }
];

function ModePanel({ mode }: { mode: ConsoleMode }) {
  if (mode === "understand") {
    return (
      <>
        <h3 className="text-2xl font-semibold tracking-tight">Definition</h3>
        <div className="mt-4 space-y-2 text-base leading-relaxed text-muted">
          <p>Reality-Bound Systems govern consequence before it exists.</p>
          <p>Trust is evaluated at the moment an action becomes real.</p>
          <p>Verification is a precondition, not a postmortem.</p>
        </div>
      </>
    );
  }

  if (mode === "inspect") {
    return (
      <>
        <h3 className="text-2xl font-semibold tracking-tight">Determine. Bind. Prove.</h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Select a node to inspect what it establishes, constrains, and proves.
        </p>
      </>
    );
  }

  if (mode === "architecture") {
    return (
      <>
        <h3 className="text-2xl font-semibold tracking-tight">Placement</h3>
        <div className="mt-4 space-y-2 text-base leading-relaxed text-muted">
          <p>Entraphy is a control plane for autonomous consequence.</p>
          <p>It integrates with existing infrastructure and enforcement points.</p>
          <p>It produces portable, verifiable proof of compliance.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">Proof Feed (Synthetic)</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">
        A running demonstration of determination, binding, and emitted verification.
      </p>
    </>
  );
}

export function ConsoleView({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeMode, setActiveMode] = useState<ConsoleMode>("understand");

  const statusValue = useMemo(() => consoleModes.find((mode) => mode.id === activeMode)?.status ?? "Calibrating", [activeMode]);

  return (
    <div id="home-console-view" role="tabpanel" aria-labelledby="home-mode-console" className="pt-10">
      <div className="mb-6 rounded-xl border border-line/45 bg-fg/[0.02] px-5 py-4">
        <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
        <p className="mt-1 text-sm text-muted">
          Trust Field Status: <span className="font-semibold text-fg">{statusValue}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <aside className="rounded-xl border border-line/45 bg-fg/[0.015] p-4">
          <p className="mb-3 text-xs tracking-[0.16em] text-muted uppercase">Mode Panel</p>
          <div className="flex gap-2 overflow-x-auto md:flex-col">
            {consoleModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  activeMode === mode.id ? "border-fg/70 bg-fg/10 text-fg" : "border-line/50 text-muted hover:text-fg"
                } ${reducedMotion ? "duration-0" : "duration-150"}`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-xl border border-line/45 bg-fg/[0.03] p-6 md:p-8">
          <ModePanel mode={activeMode} />
        </section>
      </div>
    </div>
  );
}
