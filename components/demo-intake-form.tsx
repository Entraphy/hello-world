"use client";

import { FormEvent, useEffect, useState } from "react";

export type DemoIntakeChoice = {
  category: string;
  label: string;
  detail: string;
  value: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function DemoIntakeForm({ choices }: { choices: DemoIntakeChoice[] }) {
  const [selectedIntent, setSelectedIntent] = useState(choices[0]?.value ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const selectedChoice = choices.find((choice) => choice.value === selectedIntent) ?? choices[0];

  useEffect(() => {
    if (!cooldown) {
      return;
    }

    const timer = window.setTimeout(() => setCooldown(false), 1000);

    return () => window.clearTimeout(timer);
  }, [cooldown]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      org: String(formData.get("org") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim()
    };

    if (!selectedIntent || !payload.name || !payload.email || !payload.org || !payload.message) {
      setStatus("error");
      setError("Please complete the required fields and choose an intent.");
      return;
    }

    try {
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          role: selectedIntent
        })
      });

      if (!response.ok) {
        setStatus("error");
        setError("Submission failed. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setCooldown(true);
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7"
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="space-y-2">
        <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Intake</p>
        <h3 className="font-display text-xl leading-tight tracking-[-0.03em] text-fg sm:text-3xl">Choose your intent.</h3>
        <p className="text-sm leading-7 text-muted">
          The selected intent is included in the request so the next step can start in the right place.
        </p>
      </div>

      <fieldset className="mt-6 space-y-3">
        <legend className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Intent</legend>
        <div className="grid gap-2.5 sm:gap-3 md:grid-cols-2">
          {choices.map((choice) => {
            const active = selectedIntent === choice.value;

            return (
              <label
                key={choice.value}
                className={[
                  "cursor-pointer rounded-2xl border p-3 transition duration-150 sm:p-4",
                  active ? "border-signal/70 bg-signal/10 shadow-[0_12px_36px_rgba(0,0,0,0.18)]" : "border-white/10 bg-bg/45 hover:border-white/20 hover:bg-white/[0.05]"
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="intent"
                  value={choice.value}
                  checked={active}
                  onChange={() => setSelectedIntent(choice.value)}
                  className="sr-only"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.24em] text-signal/70 uppercase">{choice.category}</p>
                    <p className="mt-2 text-[0.98rem] font-medium tracking-[-0.01em] text-fg sm:text-base">{choice.label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{choice.detail}</p>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] tracking-[0.24em] text-fg/72 uppercase">
                    {active ? "Selected" : "Choose"}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" autoComplete="name" />
        <Field name="email" type="email" label="Work email" autoComplete="email" />
        <div className="sm:col-span-2">
          <Field name="org" label="Organization" autoComplete="organization" />
        </div>
      </div>

      <label className="mt-4 block text-sm text-muted">
        Message
        <textarea
          name="message"
          required
          rows={4}
          placeholder={`Tell us what you want to prove. Current intent: ${selectedChoice?.label ?? "Request a demo"}.`}
          className="mt-1 w-full rounded-2xl border border-white/10 bg-bg/45 px-4 py-3 text-fg outline-none transition placeholder:text-muted/50 focus:border-signal/60"
        />
      </label>

      {status === "error" && error ? (
        <p className="mt-3 text-sm leading-6 text-red-300" aria-live="polite">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-3 text-sm leading-6 text-fg" aria-live="polite">
          Request received. We will reply with the lightest credible next step.
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting" || cooldown}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-signal/70 bg-signal px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-bg uppercase transition duration-150 hover:border-signal hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Requesting..." : "Request follow-up"}
        </button>
        <p className="max-w-xl text-xs leading-6 text-muted">
          We use the selected intent only to route the conversation and prepare the right response.
        </p>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-1 w-full rounded-2xl border border-white/10 bg-bg/45 px-4 py-3 text-fg outline-none transition placeholder:text-muted/50 focus:border-signal/60"
      />
    </label>
  );
}
