"use client";

import { useMemo, useState, type KeyboardEvent } from "react";

const GRID_COLUMNS = 5;
const GRID_ROWS = 4;
const NODE_COUNT = GRID_COLUMNS * GRID_ROWS;

const phaseCoverage: Array<{ covered: number[]; inProgress: number[] }> = [
  { covered: [1, 2, 5], inProgress: [0, 6] },
  { covered: [0, 1, 2, 5, 6, 7, 10], inProgress: [3, 11] },
  { covered: [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15], inProgress: [4, 9, 16] },
  { covered: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], inProgress: [17, 18] }
];

type CoverageMapProps = {
  phase?: 0 | 1 | 2 | 3;
  interactive?: boolean;
  className?: string;
};

function statusForNode(index: number, phase: 0 | 1 | 2 | 3): "Uncovered" | "In Progress" | "Covered" {
  const phaseState = phaseCoverage[phase];

  if (phaseState?.covered.includes(index)) {
    return "Covered";
  }

  if (phaseState?.inProgress.includes(index)) {
    return "In Progress";
  }

  return "Uncovered";
}

export function CoverageMap({ phase = 1, interactive = false, className = "" }: CoverageMapProps) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [pinnedNode, setPinnedNode] = useState<number | null>(null);

  const activeNode = pinnedNode ?? hoveredNode;

  const nodeStates = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, index) => statusForNode(index, phase));
  }, [phase]);

  const onNodeKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!interactive) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setPinnedNode(null);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      setPinnedNode((current) => (current === index ? null : index));
      return;
    }

    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = index % GRID_COLUMNS === GRID_COLUMNS - 1 ? index : index + 1;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = index % GRID_COLUMNS === 0 ? index : index - 1;
    }

    if (event.key === "ArrowDown") {
      nextIndex = index + GRID_COLUMNS < NODE_COUNT ? index + GRID_COLUMNS : index;
    }

    if (event.key === "ArrowUp") {
      nextIndex = index - GRID_COLUMNS >= 0 ? index - GRID_COLUMNS : index;
    }

    const nextElement = document.querySelector<HTMLButtonElement>(`[data-coverage-node=\"${nextIndex}\"]`);
    nextElement?.focus();
  };

  return (
    <div className={className} onKeyDown={(event) => {
      if (event.key === "Escape") {
        setPinnedNode(null);
      }
    }}>
      <div className="relative rounded-lg border border-line/40 bg-fg/[0.02] p-4">
        <div className="grid grid-cols-5 gap-2" role={interactive ? "grid" : undefined} aria-label="Coverage map grid">
          {nodeStates.map((status, index) => {
            const isActive = activeNode === index;
            const visualClass =
              status === "Covered"
                ? "border-fg/75 bg-fg/55 opacity-100"
                : status === "In Progress"
                  ? "border-fg/55 bg-fg/30 opacity-95"
                  : "border-line/55 bg-fg/[0.04] opacity-75";

            return (
              <button
                key={index}
                type="button"
                data-coverage-node={index}
                role={interactive ? "gridcell" : undefined}
                tabIndex={interactive ? 0 : -1}
                aria-label={`Workflow ${index + 1}, status ${status}`}
                aria-pressed={interactive ? pinnedNode === index : undefined}
                className={`h-6 w-full rounded-sm border transition-opacity ${visualClass} ${interactive ? "focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-fg/75" : "cursor-default"}`}
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode(index)}
                onBlur={() => setHoveredNode(null)}
                onKeyDown={(event) => onNodeKeyDown(event, index)}
                onClick={() => {
                  if (interactive) {
                    setPinnedNode((current) => (current === index ? null : index));
                  }
                }}
              />
            );
          })}
        </div>

        {activeNode !== null ? (
          <div className="mt-3 rounded border border-line/45 bg-bg/85 px-3 py-2 text-xs text-muted">
            <p className="text-fg">Workflow</p>
            <p>Status: {nodeStates[activeNode]}</p>
            <p>Constraints: Authority, Policy, Time</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
