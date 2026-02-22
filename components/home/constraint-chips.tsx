export type ConstraintState = "satisfied" | "notSatisfied" | "unknown";

export function ConstraintChips({
  authority,
  policy,
  time,
  className = ""
}: {
  authority: ConstraintState;
  policy: ConstraintState;
  time: ConstraintState;
  className?: string;
}) {
  const chips: { label: string; state: ConstraintState }[] = [
    { label: "Authority", state: authority },
    { label: "Policy", state: policy },
    { label: "Time", state: time }
  ];

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`.trim()}>
      {chips.map((chip) => {
        const chipStateClass =
          chip.state === "satisfied"
            ? "border-fg/35 bg-fg/[0.08]"
            : chip.state === "notSatisfied"
              ? "border-fg/25 bg-fg/[0.04]"
              : "border-line/55 bg-fg/[0.015]";
        const dotStateClass =
          chip.state === "satisfied" ? "bg-fg/75" : chip.state === "notSatisfied" ? "bg-fg/45" : "bg-fg/25";

        return (
          <span
            key={chip.label}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] tracking-[0.14em] text-muted uppercase ${chipStateClass}`}
          >
            <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotStateClass}`} />
            {chip.label}
          </span>
        );
      })}
    </div>
  );
}
