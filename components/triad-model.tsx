const pillars = [
  {
    title: "Determine",
    body: "Compute whether trust conditions are satisfied — now."
  },
  {
    title: "Bind",
    body: "Permit only actions that satisfy explicit authority, policy, and time."
  },
  {
    title: "Prove",
    body: "Emit portable verification that it was valid when it occurred."
  }
];

export function TriadModel() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {pillars.map((item) => (
        <article key={item.title} className="rounded-2xl border border-line bg-white/[0.01] p-5">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
