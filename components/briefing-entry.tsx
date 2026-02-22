"use client";

import { useState } from "react";

import { BriefingForm } from "@/components/briefing-form";
import { CalendlyPlaceholder } from "@/components/calendly-placeholder";
import { Section } from "@/components/ui";

export function BriefingEntry() {
  const [systemStatus, setSystemStatus] = useState("Stable");

  return (
    <>
      <Section title="REQUEST ACCESS" eyebrow="Request">
        <p>Briefings are limited to leadership teams evaluating consequence-first governance.</p>
      </Section>

      <div className="mb-6 rounded-xl border border-line/45 bg-fg/[0.02] px-5 py-4">
        <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
        <p className="mt-1 text-sm text-muted">
          Trust Field Status: <span className="font-semibold text-fg">{systemStatus}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BriefingForm onRequestReceived={() => setSystemStatus("Calibrating")} />
        <CalendlyPlaceholder />
      </div>
    </>
  );
}
