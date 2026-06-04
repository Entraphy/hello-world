import type { Metadata } from "next";
import Image from "next/image";

import { TeamIntakeForm } from "@/components/team-intake-form";

export const metadata: Metadata = {
  title: "Send Us Your Signal | Entraphy Systems",
  description: "Send a high-signal early-builder introduction to Entraphy.",
  alternates: {
    canonical: "https://www.entraphy.com/signal"
  },
  openGraph: {
    title: "Send Us Your Signal | Entraphy Systems",
    description: "Send a high-signal early-builder introduction to Entraphy.",
    type: "website",
    url: "https://www.entraphy.com/signal",
    siteName: "Entraphy Systems",
    locale: "en_US",
    images: [
      {
        url: "/brand/entraphy-og-image.png",
        width: 1200,
        height: 675,
        alt: "Entraphy Systems"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Us Your Signal | Entraphy Systems",
    description: "Send a high-signal early-builder introduction to Entraphy.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function ValueMark({ index }: { index: number }) {
  const shapes = [
    <span key="target" className="relative block h-6 w-6">
      <span className="absolute inset-1 rounded-full border border-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current opacity-70" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current opacity-70" />
    </span>,
    <span key="sun" className="relative block h-6 w-6">
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
      <span className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-current" />
      <span className="absolute bottom-0 left-1/2 h-1.5 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-1.5 -translate-y-1/2 bg-current" />
      <span className="absolute right-0 top-1/2 h-px w-1.5 -translate-y-1/2 bg-current" />
    </span>,
    <span key="shield" className="relative block h-6 w-6">
      <span className="absolute inset-1 rounded-b-lg border border-current" />
      <span className="absolute left-1/2 top-2 h-2 w-px -translate-x-1/2 bg-current" />
    </span>,
    <span key="lock" className="relative block h-6 w-6">
      <span className="absolute bottom-1 left-1/2 h-3.5 w-4 -translate-x-1/2 border border-current" />
      <span className="absolute left-1/2 top-1 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
    </span>,
    <span key="compass" className="relative block h-6 w-6">
      <span className="absolute inset-1 rounded-full border border-current" />
      <span className="absolute left-1/2 top-1/2 h-4 w-px origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
    </span>
  ];

  return (
    <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center text-signal">
      {shapes[index % shapes.length]}
    </span>
  );
}

const strongSignals = ["Specific work.", "Clear thinking.", "Evidence of ownership.", "Discretion.", "A point of view."];

function SignalNoteVisual() {
  return (
    <div aria-hidden className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(135deg,rgb(4,7,7),rgb(8,13,11)_48%,rgb(3,4,4))] sm:min-h-[22rem] lg:min-h-full">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(196,157,84,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(196,157,84,0.16)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(196,157,84,0.14),transparent_28%),linear-gradient(90deg,rgba(4,7,7,0.72),transparent_42%,rgba(0,0,0,0.22))]" />
      <div className="absolute right-[11%] top-[12%] h-[82%] w-[54%] rotate-[10deg] border border-signal/28 bg-[linear-gradient(145deg,rgb(22,22,19),rgb(6,6,5))] shadow-[0_30px_90px_rgba(0,0,0,0.45)]" />
      <div className="absolute right-[18%] top-[2%] h-16 w-10 rotate-[10deg] rounded-t-2xl border border-signal/45 bg-black/45" />
      <div className="absolute right-[23%] top-[1%] h-12 w-8 rotate-[10deg] rounded-t-2xl border border-signal/38 bg-black/42" />
      <div className="absolute right-[15%] top-[9%] h-5 w-20 rotate-[10deg] bg-black/55" />
      <div className="absolute right-[22%] top-[38%] flex rotate-[10deg] items-center gap-6">
        <Image src="/brand/entraphy-logo-mark.png" alt="" width={72} height={72} className="opacity-80" />
        <div className="space-y-2 font-display text-2xl italic leading-tight text-signal/76">
          <p>Signal received.</p>
          <p>We listen for builders.</p>
        </div>
      </div>
      <div className="absolute right-[18%] top-[62%] h-px w-[38%] rotate-[10deg] bg-signal/24" />
      <div className="absolute right-[21%] top-[68%] h-px w-[29%] rotate-[10deg] bg-white/10" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_26%,rgba(0,0,0,0.38))]" />
    </div>
  );
}

export default function SignalPage({ searchParams }: { searchParams?: { type?: string } }) {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(5,12,10,0.98)_52%,rgb(4,6,6)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content gap-0 lg:min-h-[29rem] lg:grid-cols-[0.52fr_0.48fr] lg:items-stretch">
          <div className="flex items-center px-6 py-14 sm:py-16 lg:py-18">
            <div className="max-w-2xl space-y-7">
              <Eyebrow>Join Entraphy</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-[4.65rem]">Send Us Your Signal.</h1>
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>For people who read the letter and recognized the feeling.</p>
                <p>
                  Entraphy is building in stealth, so this is not a conventional application. We are looking for enough signal to understand how you
                  think, what you have built, and where you might create leverage near the foundation.
                </p>
              </div>
              <p className="font-mono text-[10px] leading-5 tracking-[0.22em] text-signal uppercase">
                If there may be alignment, we will follow up manually.
              </p>
            </div>
          </div>
          <div className="relative min-h-[20rem] overflow-hidden border-t border-white/10 lg:border-t-0">
            <SignalNoteVisual />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(4,7,7),rgb(7,15,12)_56%,rgb(3,5,5))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(196,157,84,0.025)_58%,transparent)]" />

        <div className="relative mx-auto grid w-full max-w-content gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.44fr)] lg:py-10">
          <div>
            <TeamIntakeForm initialType={searchParams?.type} sourceBase="/signal" />
          </div>

          <aside className="border-t border-white/10 pt-8 lg:border-t-0 lg:pl-2 lg:pt-0">
            <div className="sticky top-28 space-y-6">
              <div className="relative border border-white/18 bg-black/18 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <span aria-hidden className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />
                <h2 className="max-w-[15rem] font-mono text-[10px] leading-6 tracking-[0.28em] text-signal uppercase">
                  What makes a strong signal
                </h2>
                <ul className="mt-8 space-y-7">
                  {strongSignals.map((item, index) => (
                    <li key={item} className="grid grid-cols-[2rem_1fr] items-center gap-5">
                      <ValueMark index={index} />
                      <span className="font-display text-xl leading-tight text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative border border-white/14 bg-black/16 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <span aria-hidden className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-signal/34 to-transparent" />
                <h2 className="font-mono text-[10px] leading-6 tracking-[0.28em] text-signal uppercase">Before you submit</h2>
                <div className="mt-8 space-y-6 text-base leading-8 text-muted">
                  <p>This is not a job application.</p>
                  <div className="h-px w-10 bg-signal" />
                  <p>Entraphy reviews signals manually and follows up only when there may be alignment.</p>
                  <div className="h-px w-10 bg-signal" />
                  <p className="font-display text-2xl leading-snug text-signal">
                    Small team.
                    <br />
                    High trust.
                    <br />
                    Real consequence.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
