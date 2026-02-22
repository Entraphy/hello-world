"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import { ConstraintChips, type ConstraintState } from "@/components/home/constraint-chips";
import type { TrustFieldState } from "@/components/home/trust-field-state";

type ConsoleMode = "understand" | "inspect" | "architecture" | "proof";
type InspectNode = "determine" | "bind" | "prove";

type ProofEvent = {
  elapsed: number;
  authoritySatisfied: boolean;
  policySatisfied: boolean;
  timeValid: boolean;
};

type ProofTerminalEvent = ProofEvent & {
  sequence: number;
};

const consoleModes: { id: ConsoleMode; label: string; status: string }[] = [
  { id: "understand", label: "Understand", status: "Stable" },
  { id: "inspect", label: "Inspect Model", status: "Inspecting" },
  { id: "architecture", label: "Architecture", status: "Mapping" },
  { id: "proof", label: "Proof", status: "Emitting" }
];

const doctrineItems = [
  {
    numeral: "I",
    title: "Consequence Precedes Trust.",
    body: "Trust is not assumed. It is established at the moment consequence becomes possible."
  },
  {
    numeral: "II",
    title: "Authority Must Be Explicit.",
    body: "Identity is context. Authority is constraint."
  },
  {
    numeral: "III",
    title: "Policy Must Bind in Time.",
    body: "Rules evaluated after execution are reports, not governance."
  },
  {
    numeral: "IV",
    title: "Proof Must Travel With Consequence.",
    body: "Verification is not archival. It is emitted."
  }
] as const;

const inspectNodeCopy: Record<InspectNode, { title: string; body: string }> = {
  determine: {
    title: "DETERMINE",
    body: "Establish whether trust conditions are satisfied now."
  },
  bind: {
    title: "BIND",
    body: "Constrain action to explicit authority, policy, and time."
  },
  prove: {
    title: "PROVE",
    body: "Emit portable verification that the action was valid when it occurred."
  }
};

const inspectNodes: { id: InspectNode; label: string; x: number; y: number }[] = [
  { id: "determine", label: "Determine", x: 18, y: 24 },
  { id: "bind", label: "Bind", x: 74, y: 24 },
  { id: "prove", label: "Prove", x: 46, y: 76 }
];

const proofSequence: ProofEvent[] = [
  { elapsed: 1.2, authoritySatisfied: true, policySatisfied: true, timeValid: true },
  { elapsed: 2.7, authoritySatisfied: true, policySatisfied: false, timeValid: true },
  { elapsed: 4.1, authoritySatisfied: false, policySatisfied: true, timeValid: true },
  { elapsed: 5.8, authoritySatisfied: true, policySatisfied: true, timeValid: false },
  { elapsed: 7.3, authoritySatisfied: true, policySatisfied: true, timeValid: true },
  { elapsed: 8.9, authoritySatisfied: false, policySatisfied: false, timeValid: true },
  { elapsed: 10.4, authoritySatisfied: true, policySatisfied: true, timeValid: true },
  { elapsed: 12.0, authoritySatisfied: true, policySatisfied: false, timeValid: false }
];

function renderProofEvent(event: ProofEvent) {
  const allowed = event.authoritySatisfied && event.policySatisfied && event.timeValid;

  return {
    timestamp: `t+${event.elapsed.toFixed(1)}s`,
    outcome: allowed ? "Allowed" : "Denied",
    authority: event.authoritySatisfied ? "Authority satisfied" : "Authority not satisfied",
    policy: event.policySatisfied ? "Policy satisfied" : "Policy not satisfied",
    time: event.timeValid ? "Time valid" : "Time invalid",
    action: allowed ? "Action permitted" : "Action prevented",
    proof: allowed ? "Verification emitted" : "Action prevented",
    authoritySatisfied: event.authoritySatisfied,
    policySatisfied: event.policySatisfied,
    timeValid: event.timeValid
  };
}


function inspectConstraintState(node: InspectNode | null): { authority: ConstraintState; policy: ConstraintState; time: ConstraintState } {
  if (node === "determine") {
    return { authority: "satisfied", policy: "unknown", time: "satisfied" };
  }

  if (node === "bind") {
    return { authority: "unknown", policy: "satisfied", time: "unknown" };
  }

  if (node === "prove") {
    return { authority: "satisfied", policy: "satisfied", time: "satisfied" };
  }

  return { authority: "unknown", policy: "unknown", time: "unknown" };
}

function ModePanel({
  mode,
  highlightNode,
  inspectorNode,
  selectedInspectNode,
  onSelectNode,
  onHoverNode,
  proofEvents,
  onExportSynthetic
}: {
  mode: ConsoleMode;
  highlightNode: InspectNode | null;
  inspectorNode: InspectNode | null;
  selectedInspectNode: InspectNode | null;
  onSelectNode: (node: InspectNode | null) => void;
  onHoverNode: (node: InspectNode | null) => void;
  proofEvents: ProofTerminalEvent[];
  onExportSynthetic: () => void;
}) {

  if (mode === "understand") {
    return (
      <>
        <p className="text-xs tracking-[0.16em] text-muted uppercase">System Doctrine</p>
        <ConstraintChips authority="unknown" policy="unknown" time="unknown" className="mt-3" />
        <ol className="mt-5 space-y-6 border-l border-line/55 pl-4" aria-label="System doctrine">
          {doctrineItems.map((item) => (
            <li key={item.numeral} className="space-y-2">
              <p className="text-base leading-relaxed text-fg md:text-lg">
                <span aria-hidden className="mr-2 inline-block text-lg md:text-xl">
                  {item.numeral}.
                </span>
                <span className="sr-only">{item.numeral}. </span>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-muted md:text-base">{item.body}</p>
            </li>
          ))}
        </ol>
      </>
    );
  }

  if (mode === "inspect") {
    return (
      <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]" onKeyDown={(event) => event.key === "Escape" && onSelectNode(null)}>
        <div className="depth-panel rounded-lg border border-line/45 bg-fg/[0.03] p-4">
          <h3 className="text-2xl font-semibold tracking-tight">Determine. Bind. Prove.</h3>
          <div className="depth-panel relative mt-5 aspect-[5/4] rounded-lg border border-line/35 bg-fg/[0.015]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {inspectNodes.map((node) => (
                <line
                  key={`line-${node.id}`}
                  x1="46"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  className={`stroke-current transition-[opacity,stroke-width] duration-150 ${highlightNode === node.id ? "opacity-85" : highlightNode ? "opacity-18" : "opacity-35"}`}
                  style={{ strokeWidth: highlightNode === node.id ? 1.35 : 1 }}
                />
              ))}
            </svg>
            <div className="absolute left-[46%] top-[50%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/30 bg-fg/40" />
            {inspectNodes.map((node) => {
              const isSelected = highlightNode === node.id;
              const isDimmed = highlightNode && !isSelected;

              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => onHoverNode(node.id)}
                  onMouseLeave={() => onHoverNode(null)}
                  onFocus={() => onHoverNode(node.id)}
                  onBlur={() => onHoverNode(null)}
                  onClick={() => onSelectNode(node.id)}
                  className={`depth-surface absolute -translate-x-1/2 -translate-y-1/2 rounded-md border px-2 py-1 text-xs tracking-[0.12em] uppercase transition-opacity ${isSelected ? "border-fg/75 bg-fg/15 text-fg" : "border-line/45 bg-bg/70 text-muted"} ${isDimmed ? "opacity-45" : "opacity-100"}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  aria-pressed={isSelected}
                >
                  {node.label}
                </button>
              );
            })}
          </div>
        </div>

        <aside className="depth-panel rounded-lg border border-line/45 bg-fg/[0.03] p-4">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Inspector</p>
          <ConstraintChips {...inspectConstraintState(selectedInspectNode)} className="mt-3" />
          {inspectorNode ? (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-semibold tracking-[0.14em] text-fg uppercase">{inspectNodeCopy[inspectorNode].title}</p>
              <p className="text-sm text-muted">{inspectNodeCopy[inspectorNode].body}</p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">Select a node.</p>
          )}
        </aside>
      </div>
    );
  }

  if (mode === "architecture") {
    return (
      <>
        <h3 className="text-2xl font-semibold tracking-tight">Placement</h3>
        <ConstraintChips authority="unknown" policy="unknown" time="unknown" className="mt-3" />
        <div className="mt-4 space-y-2 text-base leading-relaxed text-muted">
          <p>Entraphy is a control plane for autonomous consequence.</p>
          <p>It integrates with existing infrastructure and enforcement points.</p>
          <p>It produces portable, verifiable proof of compliance.</p>
        </div>
      </>
    );
  }

  const terminalLines = proofEvents.map((event) => {
    const rendered = renderProofEvent(event);
    return [
      `${rendered.timestamp}  ${rendered.action}`,
      `${rendered.authority}  ${rendered.policy}  ${rendered.time}`,
      rendered.proof
    ].join("\n");
  });

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold tracking-tight">Proof Feed (Synthetic)</h3>
        <button
          type="button"
          onClick={onExportSynthetic}
          className="depth-surface rounded-md border border-line/50 px-3 py-1.5 text-xs tracking-[0.12em] text-muted uppercase transition-colors hover:text-fg"
        >
          Export (Synthetic)
        </button>
      </div>
      <div className="depth-panel mt-4 h-[340px] overflow-hidden rounded-lg border border-line/35 bg-bg/60 px-4 py-3 font-mono text-[11px] leading-5 text-muted">
        <div className="h-full space-y-2 overflow-hidden">
          {proofEvents.map((event, index) => {
            const rendered = renderProofEvent(event);
            const age = proofEvents.length - 1 - index;
            const opacityClass = age <= 2 ? "opacity-100" : age <= 5 ? "opacity-75" : "opacity-45";

            return (
              <div key={event.sequence} className={`transition-opacity duration-200 ${opacityClass}`}>
                <p className="text-fg/90">{rendered.timestamp}  {rendered.action}</p>
                <p>{rendered.authority}  {rendered.policy}  {rendered.time}</p>
                <p>{rendered.proof}</p>
              </div>
            );
          })}
        </div>
      </div>
      <textarea readOnly aria-hidden value={terminalLines.join("\n\n")} className="sr-only" />
    </>
  );
}

export function ConsoleView({
  reducedMotion,
  trustFieldState,
  onPanelChange,
  isActive
}: {
  reducedMotion: boolean;
  trustFieldState: TrustFieldState;
  onPanelChange: (panel: ConsoleMode) => void;
  isActive: boolean;
}) {
  const [activeMode, setActiveMode] = useState<ConsoleMode>("inspect");
  const [panelMode, setPanelMode] = useState<ConsoleMode>("inspect");
  const [panelVisible, setPanelVisible] = useState(true);
  const [selectedNode, setSelectedNode] = useState<InspectNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<InspectNode | null>(null);
  const [proofEvents, setProofEvents] = useState<ProofTerminalEvent[]>([]);
  const [statusPulse, setStatusPulse] = useState<ConsoleMode | null>(null);
  const modeButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const proofSequenceIndexRef = useRef(0);

  useEffect(() => {
    onPanelChange(activeMode);
  }, [activeMode, onPanelChange]);

  useEffect(() => {
    if (isActive) {
      setActiveMode("inspect");
    }
  }, [isActive]);

  useEffect(() => {
    if (activeMode !== "inspect") {
      setSelectedNode(null);
      setHoveredNode(null);
    }
  }, [activeMode]);

  useEffect(() => {
    if (reducedMotion) {
      setPanelMode(activeMode);
      setPanelVisible(true);
      return;
    }

    setPanelVisible(false);
    const modeTimer = window.setTimeout(() => {
      setPanelMode(activeMode);
      setPanelVisible(true);
    }, 180);

    return () => window.clearTimeout(modeTimer);
  }, [activeMode, reducedMotion]);

  useEffect(() => {
    if (activeMode !== "proof") {
      return;
    }

    setProofEvents((events) => {
      if (events.length > 0) {
        return events;
      }

      proofSequenceIndexRef.current = 0;
      const firstEvent = proofSequence[0];
      if (!firstEvent) {
        return events;
      }

      return [{ ...firstEvent, sequence: 0 }];
    });

    const interval = window.setInterval(() => {
      // Strict Mode safe: one updater, no nested state updates inside updater callbacks.
      setProofEvents((events) => {
        const nextIndex = (proofSequenceIndexRef.current + 1) % proofSequence.length;
        proofSequenceIndexRef.current = nextIndex;

        const event = proofSequence[nextIndex] ?? proofSequence[0];
        if (!event) {
          return events;
        }
        const nextSequence = (events.at(-1)?.sequence ?? -1) + 1;

        return [...events, { ...event, sequence: nextSequence }].slice(-10);
      });
    }, 1500);

    return () => window.clearInterval(interval);
  }, [activeMode]);

  const statusValue = useMemo(() => {
    if (statusPulse === "proof") {
      return "Emitting";
    }

    return consoleModes.find((mode) => mode.id === activeMode)?.status ?? "Calibrating";
  }, [activeMode, statusPulse]);
  const highlightNode = hoveredNode ?? selectedNode;
  const inspectorNode = hoveredNode ?? selectedNode;
  const showInspectingGlow = trustFieldState === "inspecting";
  const showMappingGrid = trustFieldState === "mapping";

  return (
    <div className="pt-5 md:pt-4">
      <div className="grid gap-4 md:h-[min(68vh,620px)] md:grid-cols-[248px_minmax(0,1fr)] md:items-start">
        <aside className="space-y-4 md:sticky md:top-4">
          <div className="depth-panel rounded-xl border border-line/45 bg-fg/[0.02] px-5 py-4">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted">
              <span
                className={`inline-block h-2 w-2 rounded-full bg-fg/80 ${activeMode === "proof" ? "opacity-95" : "opacity-70"}`}
              />
              Trust Field Status: <span className="font-semibold text-fg">{statusValue}</span>
            </p>
          </div>

          <div className="depth-panel rounded-xl border border-line/45 bg-fg/[0.015] p-4 md:p-5">
            <p className="mb-3 text-xs tracking-[0.16em] text-muted uppercase">Mode Panel</p>
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-col" onKeyDown={(event) => {
            if (event.key !== "ArrowDown" && event.key !== "ArrowRight" && event.key !== "ArrowUp" && event.key !== "ArrowLeft" && event.key !== "Escape") {
              return;
            }

            if (event.key === "Escape") {
              setSelectedNode(null);
              setHoveredNode(null);
              return;
            }

            event.preventDefault();
            const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
            const currentIndex = consoleModes.findIndex((item) => item.id === activeMode);
            const nextIndex = (currentIndex + direction + consoleModes.length) % consoleModes.length;
            const nextMode = consoleModes[nextIndex]?.id ?? "inspect";

            setActiveMode(nextMode);
            modeButtonRefs.current[nextIndex]?.focus();
          }}>
            {consoleModes.map((mode, index) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                ref={(element) => {
                  modeButtonRefs.current[index] = element;
                }}
                className={`depth-surface rounded-md border px-3 py-2 text-center text-sm transition-colors md:text-left ${
                  activeMode === mode.id ? "border-fg/70 bg-fg/10 text-fg" : "border-line/50 text-muted hover:text-fg"
                } ${reducedMotion ? "duration-0" : "duration-150"}`}
              >
                {mode.label}
              </button>
            ))}
          </div>
          </div>
        </aside>

        <section className="depth-panel relative overflow-hidden rounded-xl border border-line/45 bg-fg/[0.04] p-6 md:h-full md:overflow-y-auto md:p-8">
          {showMappingGrid ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "26px 26px"
              }}
            />
          ) : null}
          <ConstraintFieldBackground
            mode={panelMode === "proof" ? "pivot" : panelMode === "inspect" ? "model" : "idle"}
            reducedMotion={reducedMotion}
            drift={panelMode === "proof" ? { far: 3, mid: 2, near: 1 } : { far: 0, mid: 0, near: 0 }}
          />
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-200 ${showInspectingGlow ? "opacity-100" : "opacity-0"}`}
            style={{ boxShadow: "inset 0 0 70px rgba(255,255,255,0.09)" }}
          />
          <div className={`relative z-10 transition-opacity ${reducedMotion ? "duration-0" : "duration-[180ms]"} ${panelVisible ? "opacity-100" : "opacity-0"}`}>
            <ModePanel
              mode={panelMode}
              highlightNode={highlightNode}
              inspectorNode={inspectorNode}
              onSelectNode={setSelectedNode}
              onHoverNode={setHoveredNode}
              selectedInspectNode={selectedNode}
              proofEvents={proofEvents}
              onExportSynthetic={() => {
                const terminalText = proofEvents
                  .map((event) => {
                    const rendered = renderProofEvent(event);
                    return [
                      `${rendered.timestamp}  ${rendered.action}`,
                      `${rendered.authority}  ${rendered.policy}  ${rendered.time}`,
                      rendered.proof
                    ].join("\n");
                  })
                  .join("\n\n");

                navigator.clipboard?.writeText(terminalText);
                setStatusPulse("proof");
                window.setTimeout(() => setStatusPulse(null), 1000);
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
