import type { Metadata } from "next";

import { BriefingForm } from "@/components/briefing-form";
import { CalendlyPlaceholder } from "@/components/calendly-placeholder";
import { PageWrap, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Executive Briefing | Entraphy",
  description: "Request an executive briefing on reality-bound systems.",
  openGraph: {
    title: "Executive Briefing | Entraphy",
    description: "Request an executive briefing on reality-bound systems."
  }
};

export default function BriefingPage() {
  return (
    <PageWrap>
      <Section title="Executive Briefing" eyebrow="Request">
        <p>Short sessions for leadership teams evaluating consequence-first governance for autonomous systems.</p>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <BriefingForm />
        <CalendlyPlaceholder />
      </div>
    </PageWrap>
  );
}
