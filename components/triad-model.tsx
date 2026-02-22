const pillars = [
  {
    title: "Determine",
    body: "Compute whether trust conditions hold — now."
  },
  {
    title: "Bind",
    body: "Permit only actions that satisfy authority, policy, and time."
  },
  {
    title: "Prove",
    body: "Emit verifiable evidence at the moment of consequence."
  }
];

export function TriadModel() {
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-16">
      {pillars.map((item) => (
        <article key={item.title} className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
          <p className="text-lg leading-relaxed text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
