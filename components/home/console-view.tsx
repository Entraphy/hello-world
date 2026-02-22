"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import type { TrustFieldState } from "@/components/home/trust-field-state";

type ConsoleMode = "understand" | "inspect" | "architecture" | "proof";
type InspectNode = "determine" | "bind" | "prove";

type ProofEvent = {
  elapsed: number;
  authoritySatisfied: boolean;
  policySatisfied: boolean;
  timeValid: boolean;
};

const consoleModes: { id: ConsoleMode; label: string; status: string }[] = [
  { id: "understand", label: "Understand", status: "Calibrating" },
  { id: "inspect", label: "Inspect Model", status: "Inspecting" },
  { id: "architecture", label: "Architecture", status: "Mapping" },
  { id: "proof", label: "Proof", status: "Emitting" }
];

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
    proof: allowed ? "Verification emitted" : "Action prevented"
  };
}

function ModePanel({
  mode,
  highlightNode,
  inspectorNode,
  onSelectNode,
  onHoverNode,
  proofCursor,
  shouldAutoScrollProof,
  onProofAutoScroll
}: {
  mode: ConsoleMode;
  highlightNode: InspectNode | null;
  inspectorNode: InspectNode | null;
  onSelectNode: (node: InspectNode | null) => void;
  onHoverNode: (node: InspectNode | null) => void;
  proofCursor: number;
  shouldAutoScrollProof: boolean;
  onProofAutoScroll: () => void;
}) {
  const proofFeedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!shouldAutoScrollProof || mode !== "proof" || !proofFeedRef.current) {
      return;
    }

    proofFeedRef.current.scrollTo({ top: proofFeedRef.current.scrollHeight, behavior: "smooth" });
    onProofAutoScroll();
  }, [mode, onProofAutoScroll, shouldAutoScrollProof]);

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
        <div className="mt-4 space-y-2 text-base leading-relaxed text-muted">
          <p>Entraphy is a control plane for autonomous consequence.</p>
          <p>It integrates with existing infrastructure and enforcement points.</p>
          <p>It produces portable, verifiable proof of compliance.</p>
        </div>
      </>
    );
  }

  const eventsToShow = Array.from({ length: 8 }, (_, index) => {
    const event = proofSequence[(proofCursor + index) % proofSequence.length];
    return renderProofEvent(event);
  });

  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">Proof Feed (Synthetic)</h3>
      <div ref={proofFeedRef} className="mt-4 max-h-[320px] space-y-2 overflow-y-auto pr-1">
        {eventsToShow.map((event, index) => (
          <div key={`${event.timestamp}-${index}`} className="depth-panel rounded-md border border-line/35 bg-fg/[0.02] px-3 py-2 text-xs text-muted">
            <p className="font-medium text-fg/90">
              {event.timestamp} · {event.outcome}
            </p>
            <p>
              {event.authority} · {event.policy} · {event.time}
            </p>
            <p>
              {event.action} · {event.proof}
            </p>
          </div>
        ))}
      </div>
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
  const [proofCursor, setProofCursor] = useState(0);
  const [proofAutoscrollComplete, setProofAutoscrollComplete] = useState(false);
  const modeButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

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
    }, 170);

    return () => window.clearTimeout(modeTimer);
  }, [activeMode, reducedMotion]);

  useEffect(() => {
    if (activeMode !== "proof") {
      return;
    }

    const interval = window.setInterval(() => {
      setProofCursor((cursor) => (cursor + 1) % proofSequence.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, [activeMode]);

  useEffect(() => {
    if (activeMode === "proof") {
      setProofAutoscrollComplete(false);
    }
  }, [activeMode]);

  const statusValue = useMemo(() => consoleModes.find((mode) => mode.id === activeMode)?.status ?? "Calibrating", [activeMode]);
  const highlightNode = hoveredNode ?? selectedNode;
  const inspectorNode = hoveredNode ?? selectedNode;
  const showInspectingGlow = trustFieldState === "inspecting";
  const showMappingGrid = trustFieldState === "mapping";
  const shouldAutoScrollProof = trustFieldState === "emitting" && !proofAutoscrollComplete && !reducedMotion;

  return (
    <div className="pt-8">
      <div className="depth-panel mb-6 rounded-xl border border-line/45 bg-fg/[0.02] px-5 py-4">
        <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted">
          <span
            className={`inline-block h-2 w-2 rounded-full bg-fg/80 ${activeMode === "proof" ? "opacity-95" : "opacity-70"}`}
          />
          Trust Field Status: <span className="font-semibold text-fg">{statusValue}</span>
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[248px_1fr]">
        <aside className="depth-panel rounded-xl border border-line/45 bg-fg/[0.015] p-5">
          <p className="mb-3 text-xs tracking-[0.16em] text-muted uppercase">Mode Panel</p>
          <div className="flex gap-2 overflow-x-auto md:flex-col" onKeyDown={(event) => {
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
                className={`depth-surface rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  activeMode === mode.id ? "border-fg/70 bg-fg/10 text-fg" : "border-line/50 text-muted hover:text-fg"
                } ${reducedMotion ? "duration-0" : "duration-150"}`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="depth-panel relative overflow-hidden rounded-xl border border-line/45 bg-fg/[0.04] p-7 md:p-9">
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
          <div className={`relative z-10 transition-opacity ${reducedMotion ? "duration-0" : "duration-200"} ${panelVisible ? "opacity-100" : "opacity-0"}`}>
            <ModePanel
              mode={panelMode}
              highlightNode={highlightNode}
              inspectorNode={inspectorNode}
              onSelectNode={setSelectedNode}
              onHoverNode={setHoveredNode}
              proofCursor={proofCursor}
              shouldAutoScrollProof={shouldAutoScrollProof}
              onProofAutoScroll={() => setProofAutoscrollComplete(true)}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
