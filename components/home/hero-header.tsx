import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";

import type { HomeMode } from "@/hooks/use-home-mode";
import type { TrustFieldState } from "@/components/home/trust-field-state";

export function HeroHeader({
  mode,
  setMode,
  trustFieldState,
  reducedMotion
}: {
  mode: HomeMode;
  setMode: (mode: HomeMode) => void;
  trustFieldState: TrustFieldState;
  reducedMotion: boolean;
}) {
  const calibratingBorder = trustFieldState === "calibrating" && !reducedMotion;
  const heroCopyMuted = mode === "console";
  const consoleCompact = mode === "console";
  const [focusedTab, setFocusedTab] = useState<HomeMode>(mode);
  const tablistRef = useRef<HTMLDivElement>(null);
  const standardTabRef = useRef<HTMLButtonElement>(null);
  const consoleTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setFocusedTab(mode);
  }, [mode]);

  const focusTab = (nextTab: HomeMode) => {
    setFocusedTab(nextTab);

    if (nextTab === "standard") {
      standardTabRef.current?.focus();
      return;
    }

    consoleTabRef.current?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentTab: HomeMode = event.currentTarget.id === "home-tab-standard" ? "standard" : "console";

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(currentTab === "standard" ? "console" : "standard");
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(currentTab === "standard" ? "console" : "standard");
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab("standard");
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab("console");
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setMode(currentTab);
    }
  };

  const handleTablistBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocused = event.relatedTarget;
    if (nextFocused instanceof Node && tablistRef.current?.contains(nextFocused)) {
      return;
    }

    setFocusedTab(mode);
  };

  return (
    <section
      className={`depth-panel relative overflow-hidden border border-line/50 bg-fg/[0.02] px-6 py-8 md:px-10 ${consoleCompact ? "md:py-6" : "md:py-14"} ${calibratingBorder ? "before:pointer-events-none before:absolute before:inset-0 before:border before:border-fg/20 before:opacity-50" : ""}`}
    >
      <div className={`flex flex-col ${consoleCompact ? "gap-5" : "gap-8"}`}>
        <div className="flex items-start justify-between gap-6">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">Nothing is trusted until it is proven.</p>

          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Homepage mode"
            onBlur={handleTablistBlur}
            className="inline-flex rounded-full border border-line/60 p-1"
          >
            <button
              ref={standardTabRef}
              type="button"
              role="tab"
              id="home-tab-standard"
              aria-selected={mode === "standard"}
              aria-controls="home-standard-view"
              tabIndex={focusedTab === "standard" ? 0 : -1}
              onFocus={() => setFocusedTab("standard")}
              onKeyDown={handleTabKeyDown}
              onClick={() => {
                setFocusedTab("standard");
                setMode("standard");
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                mode === "standard" ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              Standard
            </button>
            <button
              ref={consoleTabRef}
              type="button"
              role="tab"
              id="home-tab-console"
              aria-selected={mode === "console"}
              aria-controls="home-console-view"
              tabIndex={focusedTab === "console" ? 0 : -1}
              onFocus={() => setFocusedTab("console")}
              onKeyDown={handleTabKeyDown}
              onClick={() => {
                setFocusedTab("console");
                setMode("console");
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                mode === "console" ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              Console
            </button>
          </div>
        </div>

        <div className={`transition-opacity duration-200 ${heroCopyMuted ? "opacity-[0.82]" : "opacity-100"}`}>
          <h1 className={`leading-[0.94] font-semibold tracking-tight ${consoleCompact ? "text-2xl md:text-[34px]" : "text-[44px] md:text-[70px]"}`}>
            <span className="block">MACHINES NOW DECIDE</span>
            {consoleCompact ? null : <span className="block">IN ZERO TIME</span>}
          </h1>
          {consoleCompact ? null : <p className="mt-4 text-lg text-muted">Across zero distance.</p>}
        </div>

        <div className={`transition-opacity duration-200 ${consoleCompact ? "space-y-2" : "space-y-4"} ${heroCopyMuted ? "opacity-80" : "opacity-100"}`}>
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Category Name</p>
            <p className={`mt-1 font-semibold tracking-tight ${consoleCompact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>Reality-Bound Systems</p>
          </div>
          <p className={`max-w-4xl leading-relaxed text-muted ${consoleCompact ? "text-sm md:text-base" : "text-base"}`}>
            Consequential actions cannot occur unless authority, policy, and temporal constraints are satisfied at decision time, and
            provable.
          </p>
          {consoleCompact ? null : <p className="text-sm text-muted">Entraphy implements Reality-Bound Systems.</p>}
        </div>
      </div>
    </section>
  );
}
