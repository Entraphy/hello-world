import type { CSSProperties } from "react";

type FieldMode = "idle" | "pivot" | "model" | "category" | "cta";

const modeStyles: Record<
  FieldMode,
  { triadAlpha: number; triadScale: number; triadRotate: string; ringAlpha: number; nodeAlpha: number }
> = {
  idle: { triadAlpha: 0.16, triadScale: 1, triadRotate: "-4deg", ringAlpha: 0.2, nodeAlpha: 0.2 },
  pivot: { triadAlpha: 0.2, triadScale: 1.03, triadRotate: "-3deg", ringAlpha: 0.28, nodeAlpha: 0.28 },
  model: { triadAlpha: 0.19, triadScale: 1.02, triadRotate: "-3deg", ringAlpha: 0.26, nodeAlpha: 0.24 },
  category: { triadAlpha: 0.17, triadScale: 1.01, triadRotate: "-4deg", ringAlpha: 0.22, nodeAlpha: 0.22 },
  cta: { triadAlpha: 0.16, triadScale: 1, triadRotate: "-4deg", ringAlpha: 0.2, nodeAlpha: 0.2 }
};

export function ConstraintFieldBackground({ mode = "idle" }: { mode?: FieldMode }) {
  const vars = modeStyles[mode];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-accent/30"
      style={
        {
          "--triad-alpha": vars.triadAlpha,
          "--triad-scale": vars.triadScale,
          "--triad-rotate": vars.triadRotate,
          "--ring-alpha": vars.ringAlpha,
          "--node-alpha": vars.nodeAlpha
        } as CSSProperties
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Constraint triad field"
        className="h-full w-full transition duration-500 ease-out motion-reduce:transition-none [opacity:var(--triad-alpha)] [transform:scale(var(--triad-scale))_rotate(var(--triad-rotate))]"
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
          <g
            id="triadRays"
            opacity="1"
            filter="url(#triadSoft)"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            fill="none"
          >
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
          <g id="triadTicks" stroke="currentColor" strokeWidth="1" opacity="0.10">
            <path d="M 690 228 L 690 240" />
            <path d="M 822 360 L 810 360" />
            <path d="M 690 492 L 690 480" />
            <path d="M 558 360 L 570 360" />
          </g>
        </g>
      </svg>
    </div>
  );
}
