"use client";

import { FormEvent, useEffect, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function BriefingForm({ onRequestReceived }: { onRequestReceived?: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [cooldown, setCooldown] = useState(false);

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
      role: String(formData.get("role") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim()
    };

    if (!payload.name || !payload.email || !payload.org || !payload.role || !payload.message) {
      setStatus("error");
      setError("Please complete all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        setStatus("error");
        setError("Submission failed. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setCooldown(true);
      onRequestReceived?.();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-white/[0.01] p-6">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <Input name="name" label="Name" />
      <Input name="email" type="email" label="Email" />
      <Input name="org" label="Organization" />
      <Input name="role" label="Role" />
      <label className="block text-sm text-muted">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-line bg-transparent px-3 py-2 text-fg"
        />
      </label>

      {status === "error" && error ? <p className="text-sm text-red-300">{error}</p> : null}
      {status === "success" ? <p className="text-sm text-fg">Request Received</p> : null}

      <button
        type="submit"
        disabled={status === "submitting" || cooldown}
        className="rounded-full border border-accent px-5 py-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase transition hover:bg-accent/10 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Request Briefing"}
      </button>
    </form>
  );
}

function Input({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-lg border border-line bg-transparent px-3 py-2 text-fg"
      />
    </label>
  );
}
