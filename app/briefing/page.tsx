import type { Metadata } from "next";

import { BriefingEntry } from "@/components/briefing-entry";
import { PageWrap } from "@/components/ui";

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
      <BriefingEntry />
    </PageWrap>
  );
}
