import type { CSSProperties } from "react";

type FieldMode = "idle" | "pivot" | "model" | "category" | "pause" | "cta";

type Drift = { far: number; mid: number; near: number };

const modeStyles: Record<
  FieldMode,
  {
    triadAlpha: number;
    triadScale: number;
    triadRotate: string;
    ringAlpha: number;
    nodeAlpha: number;
    nearAlpha: number;
    driftScale: number;
  }
> = {
  idle: { triadAlpha: 0.16, triadScale: 1, triadRotate: "-4deg", ringAlpha: 0.2, nodeAlpha: 0.2, nearAlpha: 0.05, driftScale: 1 },
  pivot: { triadAlpha: 0.21, triadScale: 1.03, triadRotate: "-3deg", ringAlpha: 0.3, nodeAlpha: 0.28, nearAlpha: 0.14, driftScale: 1 },
  model: { triadAlpha: 0.19, triadScale: 1.01, triadRotate: "-3deg", ringAlpha: 0.24, nodeAlpha: 0.24, nearAlpha: 0.06, driftScale: 1 },
  category: { triadAlpha: 0.18, triadScale: 1.01, triadRotate: "-4deg", ringAlpha: 0.22, nodeAlpha: 0.22, nearAlpha: 0.06, driftScale: 0.8 },
  pause: { triadAlpha: 0.17, triadScale: 1, triadRotate: "-4deg", ringAlpha: 0.2, nodeAlpha: 0.2, nearAlpha: 0.04, driftScale: 0 },
  cta: { triadAlpha: 0.16, triadScale: 1, triadRotate: "-4deg", ringAlpha: 0.2, nodeAlpha: 0.2, nearAlpha: 0.05, driftScale: 0.7 }
};

export function ConstraintFieldBackground({
  mode = "idle",
  drift = { far: 0, mid: 0, near: 0 },
  reducedMotion = false
}: {
  mode?: FieldMode;
  drift?: Drift;
  reducedMotion?: boolean;
}) {
  const vars = modeStyles[mode];
  const driftScale = reducedMotion ? 0 : vars.driftScale;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-accent"
      style={
        {
          "--triad-alpha": vars.triadAlpha,
          "--triad-scale": vars.triadScale,
          "--triad-rotate": vars.triadRotate,
          "--ring-alpha": vars.ringAlpha,
          "--node-alpha": vars.nodeAlpha,
          "--near-alpha": vars.nearAlpha,
          "--far-y": `${drift.far * driftScale}px`,
          "--mid-y": `${drift.mid * driftScale}px`,
          "--near-y": `${drift.near * driftScale}px`
        } as CSSProperties
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-accent/30 opacity-[0.18] blur-[1.4px] motion-reduce:transform-none [transform:translate3d(0,var(--far-y),0)_scale(1.03)]"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M -200 540 L 680 360" opacity="0.28" />
          <path d="M 1320 80 L 680 360" opacity="0.22" />
          <path d="M 380 980 L 680 360" opacity="0.24" />
          <circle cx="680" cy="360" r="300" opacity="0.12" />
          <circle cx="680" cy="360" r="430" opacity="0.08" />
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Constraint triad field"
        className="absolute inset-0 h-full w-full text-accent/40 transition duration-500 ease-out motion-reduce:transition-none [opacity:var(--triad-alpha)] [transform:translate3d(0,var(--mid-y),0)_scale(var(--triad-scale))_rotate(var(--triad-rotate))]"
      >
        <defs>
          <filter id="triadGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="triadSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.25" />
          </filter>
          <radialGradient id="triadVignette" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
          <mask id="triadMask">
            <rect width="1200" height="800" fill="url(#triadVignette)" />
          </mask>
        </defs>
        <g id="triadRoot" mask="url(#triadMask)">
          <g id="triadRays" opacity="1" filter="url(#triadSoft)" stroke="currentColor" strokeLinecap="round" strokeWidth="1" fill="none">
            <path d="M -120 420 L 690 360" opacity="0.55" />
            <path d="M 1320 180 L 690 360" opacity="0.45" />
            <path d="M 520 980 L 690 360" opacity="0.50" />
            <path d="M 40 140 L 690 360" opacity="0.22" />
            <path d="M 1180 640 L 690 360" opacity="0.18" />
            <path d="M 320 760 L 690 360" opacity="0.16" />
          </g>
          <g id="triadRing" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.22" style={{ opacity: "var(--ring-alpha)" }}>
            <circle cx="690" cy="360" r="132" />
            <circle cx="690" cy="360" r="220" opacity="0.12" />
          </g>
          <g id="triadNode" filter="url(#triadGlow)" style={{ opacity: "var(--node-alpha)" }}>
            <circle cx="690" cy="360" r="3.5" fill="currentColor" opacity="0.85" />
            <circle cx="690" cy="360" r="10" fill="currentColor" opacity="0.10" />
          </g>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-accent/45 transition duration-500 ease-out motion-reduce:transition-none [opacity:var(--near-alpha)] motion-reduce:transform-none [transform:translate3d(0,var(--near-y),0)]"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <path d="M 180 500 A 620 620 0 0 1 1220 300" />
          <path d="M 120 620 L 1160 460" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}
