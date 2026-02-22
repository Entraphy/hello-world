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

  return (
    <section
      className={`depth-panel relative overflow-hidden border border-line/50 bg-fg/[0.02] px-6 py-10 md:px-10 md:py-14 ${calibratingBorder ? "before:pointer-events-none before:absolute before:inset-0 before:border before:border-fg/20 before:opacity-50" : ""}`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-start justify-between gap-6">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">Nothing is trusted until it is proven.</p>

          <div role="tablist" aria-label="Homepage mode" className="inline-flex rounded-full border border-line/60 p-1">
            <button
              type="button"
              role="tab"
              id="home-tab-standard"
              aria-selected={mode === "standard"}
              aria-controls="home-standard-view"
              tabIndex={mode === "standard" ? 0 : -1}
              onClick={() => setMode("standard")}
              className={`depth-surface rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                mode === "standard" ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              role="tab"
              id="home-tab-console"
              aria-selected={mode === "console"}
              aria-controls="home-console-view"
              tabIndex={mode === "console" ? 0 : -1}
              onClick={() => setMode("console")}
              className={`depth-surface rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                mode === "console" ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              Console
            </button>
          </div>
        </div>

        <div className={`transition-opacity duration-200 ${heroCopyMuted ? "opacity-[0.78]" : "opacity-100"}`}>
          <h1 className="text-[44px] leading-[0.94] font-semibold tracking-tight md:text-[70px]">
            <span className="block">MACHINES NOW DECIDE</span>
            <span className="block">IN ZERO TIME</span>
          </h1>
          <p className="mt-4 text-lg text-muted">Across zero distance.</p>
        </div>

        <div className={`space-y-4 transition-opacity duration-200 ${heroCopyMuted ? "opacity-80" : "opacity-100"}`}>
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Category Name</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">Reality-Bound Systems</p>
          </div>
          <p className="max-w-4xl text-base leading-relaxed text-muted">
            Consequential actions cannot occur unless authority, policy, and temporal constraints are satisfied at decision time, and
            provable.
          </p>
          <p className="text-sm text-muted">Entraphy implements Reality-Bound Systems.</p>
        </div>
      </div>
    </section>
  );
}
