"use client";

import { useMemo, type KeyboardEvent } from "react";

export type AdoptionStep = {
  id: string;
  number: number;
  title: string;
  description: string;
};

export const adoptionSteps: AdoptionStep[] = [
  {
    id: "observe",
    number: 1,
    title: "Observe",
    description: "Instrument consequence points and establish policy boundaries."
  },
  {
    id: "constrain",
    number: 2,
    title: "Constrain",
    description: "Bind authority, policy, and time to consequential action."
  },
  {
    id: "verify",
    number: 3,
    title: "Verify",
    description: "Emit portable proof and validate compliance."
  },
  {
    id: "expand",
    number: 4,
    title: "Expand",
    description: "Scale coverage across workflows and systems."
  }
];

export function AdoptionPattern({
  interactive = false,
  selectedStepId,
  hoveredStepId,
  onHoverStep,
  onSelectStep,
  onKeyNavigate,
  buttonRefs,
  showInspector = interactive,
  className = ""
}: {
  interactive?: boolean;
  selectedStepId?: string | null;
  hoveredStepId?: string | null;
  onHoverStep?: (stepId: string | null) => void;
  onSelectStep?: (stepId: string) => void;
  onKeyNavigate?: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void;
  buttonRefs?: Array<HTMLButtonElement | null>;
  showInspector?: boolean;
  className?: string;
}) {
  const activeStepId = hoveredStepId ?? selectedStepId ?? null;
  const activeStep = useMemo(() => adoptionSteps.find((step) => step.id === activeStepId) ?? null, [activeStepId]);

  return (
    <div className={className}>
      <ol
        className="relative ml-2 border-l border-line/45 pl-6 before:pointer-events-none before:absolute before:top-4 before:left-0 before:hidden before:h-px before:w-full before:bg-line/40 md:ml-0 md:grid md:grid-cols-4 md:gap-4 md:border-0 md:pl-0 md:before:block"
        aria-label="Adoption pattern"
      >
        {adoptionSteps.map((step, index) => {
          const isActive = activeStepId === step.id;
          const isDimmed = activeStepId ? !isActive : false;
          const sharedClasses = `group relative min-h-[112px] rounded-lg border bg-fg/[0.02] px-4 py-4 text-left transition-all hover:border-fg/35 hover:bg-fg/[0.05] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg/40 ${
            isActive ? "border-fg/45 bg-fg/[0.06]" : "border-line/45"
          } ${isDimmed ? "opacity-60" : "opacity-100"}`;

          return (
            <li key={step.id} className="relative pb-5 last:pb-0 md:pb-0">
              <span
                aria-hidden
                className={`absolute top-6 -left-[31px] h-2.5 w-2.5 rounded-full border md:left-2 md:top-0 md:-translate-y-1/2 ${
                  isActive ? "border-fg/70 bg-fg/70" : "border-line/60 bg-bg"
                }`}
              />
              {interactive ? (
                <button
                  ref={(element) => {
                    if (buttonRefs) {
                      buttonRefs[index] = element;
                    }
                  }}
                  type="button"
                  onMouseEnter={() => onHoverStep?.(step.id)}
                  onMouseLeave={() => onHoverStep?.(null)}
                  onFocus={() => onHoverStep?.(step.id)}
                  onBlur={() => onHoverStep?.(null)}
                  onClick={() => onSelectStep?.(step.id)}
                  onKeyDown={(event) => onKeyNavigate?.(event, index)}
                  aria-current={selectedStepId === step.id ? "step" : undefined}
                  className={sharedClasses}
                >
                  <p className="text-xs tracking-[0.14em] text-muted uppercase">{step.number}. {step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </button>
              ) : (
                <div
                  tabIndex={0}
                  onMouseEnter={() => onHoverStep?.(step.id)}
                  onMouseLeave={() => onHoverStep?.(null)}
                  onFocus={() => onHoverStep?.(step.id)}
                  onBlur={() => onHoverStep?.(null)}
                  className={sharedClasses}
                >
                  <p className="text-xs tracking-[0.14em] text-muted uppercase">{step.number}. {step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {interactive ? (
        <aside className="mt-4 rounded-lg border border-line/45 bg-fg/[0.03] p-4 md:mt-5" aria-live="polite">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Inspector</p>
          {activeStep ? (
            <div className="mt-3 space-y-2">
              <p className="text-sm tracking-[0.14em] text-fg uppercase">{activeStep.number}. {activeStep.title}</p>
              <p className="text-sm text-muted">{activeStep.description}</p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">Select a step.</p>
          )}
        </aside>
      ) : null}
    </div>
  );
}
