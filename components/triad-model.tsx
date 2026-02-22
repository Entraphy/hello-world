type Mode = "idle" | "pivot" | "model" | "category" | "pause" | "cta";

const pillars = [
  {
    title: "Determine",
    body: "Compute whether trust conditions hold, now.",
    slot: "md:left-1/2 md:top-[10%] md:-translate-x-1/2",
    delayClass: "md:delay-75"
  },
  {
    title: "Bind",
    body: "Permit only actions that satisfy authority, policy, and time.",
    slot: "md:left-[18%] md:top-[78%] md:-translate-x-1/2 md:-translate-y-1/2",
    delayClass: "md:delay-200"
  },
  {
    title: "Prove",
    body: "Emit verifiable evidence at the moment of consequence.",
    slot: "md:left-[82%] md:top-[78%] md:-translate-x-1/2 md:-translate-y-1/2",
    delayClass: "md:delay-[320ms]"
  }
];

export function TriadModel({ mode, reducedMotion }: { mode: Mode; reducedMotion: boolean }) {
  return (
    <div className="relative mx-auto max-w-5xl py-4 md:aspect-[4/3] md:py-0">
      <svg aria-hidden viewBox="0 0 1000 760" className="pointer-events-none absolute inset-0 hidden h-full w-full text-fg md:block">
        <g stroke="currentColor" strokeWidth="1" opacity="0.12">
          <path d="M 500 395 L 500 76" />
          <path d="M 500 395 L 180 593" />
          <path d="M 500 395 L 820 593" />
        </g>
        <g fill="currentColor" opacity="0.16">
          <circle cx="500" cy="76" r="2.8" />
          <circle cx="180" cy="593" r="2.8" />
          <circle cx="820" cy="593" r="2.8" />
        </g>
        <g fill="currentColor" opacity="0.28">
          <circle cx="500" cy="395" r="4" />
          <circle cx="500" cy="395" r="10" opacity="0.12" />
        </g>
      </svg>

      <div className="grid gap-12 md:block">
        {pillars.map((item) => (
          <article
            key={item.title}
            className={`transition duration-500 md:absolute md:w-[280px] md:max-w-[32%] ${item.slot} ${item.delayClass} ${
              reducedMotion ? "opacity-100" : mode === "model" ? "translate-y-0 opacity-100" : "translate-y-2 opacity-65"
            }`}
          >
            <h3 className="text-[28px] font-semibold tracking-[0.04em] md:text-[34px]">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted/90">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
