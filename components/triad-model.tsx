const pillars = [
  {
    title: "DETERMINE",
    body: "Compute whether trust conditions hold, now.",
    slot: "md:left-1/2 md:top-[10%] md:-translate-x-1/2"
  },
  {
    title: "BIND",
    body: "Permit only actions that satisfy authority, policy, and time.",
    slot: "md:left-[18%] md:top-[78%] md:-translate-x-1/2 md:-translate-y-1/2"
  },
  {
    title: "PROVE",
    body: "Emit verifiable evidence at the moment of consequence.",
    slot: "md:left-[82%] md:top-[78%] md:-translate-x-1/2 md:-translate-y-1/2"
  }
];

export function TriadModel() {
  return (
    <div className="relative mx-auto max-w-5xl py-4 md:aspect-[4/3] md:py-0">
      <svg aria-hidden viewBox="0 0 1000 760" className="pointer-events-none absolute inset-0 hidden h-full w-full text-fg md:block">
        <g stroke="currentColor" strokeWidth="1" opacity="0.12">
          <path d="M 500 395 L 500 76" />
          <path d="M 500 395 L 180 593" />
          <path d="M 500 395 L 820 593" />
        </g>
        <g fill="currentColor" opacity="0.1">
          <circle cx="500" cy="76" r="4" />
          <circle cx="180" cy="593" r="4" />
          <circle cx="820" cy="593" r="4" />
        </g>
        <g fill="currentColor" opacity="0.2">
          <circle cx="500" cy="395" r="3.5" />
          <circle cx="500" cy="395" r="9" opacity="0.08" />
        </g>
      </svg>

      <p className="absolute left-1/2 top-[52%] hidden -translate-x-1/2 -translate-y-1/2 text-xs tracking-[0.1em] text-fg/45 uppercase md:block">
        Decision
      </p>

      <div className="grid gap-12 md:block">
        {pillars.map((item) => (
          <article key={item.title} className={`md:absolute md:w-[280px] md:max-w-[32%] ${item.slot}`}>
            <h3 className="text-[24px] font-semibold tracking-[0.08em] md:text-[30px]">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
