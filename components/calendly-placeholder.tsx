import Link from "next/link";

export function CalendlyPlaceholder() {
  return (
    <div className="rounded-2xl border border-line bg-white/[0.01] p-6">
      <h3 className="text-lg font-semibold">Direct scheduling</h3>
      <p className="mt-2 text-sm text-muted">Prefer immediate coordination? Use the scheduling link placeholder below.</p>
      <Link
        href="https://calendly.com/placeholder"
        target="_blank"
        className="mt-4 inline-block text-sm text-accent underline underline-offset-4"
      >
        calendly.com/placeholder
      </Link>
    </div>
  );
}
