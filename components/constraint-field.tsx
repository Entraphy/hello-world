export function ConstraintFieldBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg viewBox="0 0 1200 800" className="h-full w-full opacity-50" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(107,125,255,0.22)" />
            <stop offset="100%" stopColor="rgba(107,125,255,0.03)" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#lineFade)">
          <path d="M40 680 L590 360 L1160 110" strokeWidth="1.2" />
          <path d="M40 160 L590 360 L1160 650" strokeWidth="1" />
          <path d="M290 760 L590 360 L890 20" strokeWidth="0.9" />
          <circle cx="590" cy="360" r="104" strokeWidth="1.1" />
          <circle cx="590" cy="360" r="208" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}
