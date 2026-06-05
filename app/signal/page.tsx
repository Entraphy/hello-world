import type { Metadata } from "next";

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
    <span key="signal-wave" className="relative block h-6 w-6">
      <span className="absolute left-0 top-2 h-px w-5 bg-current opacity-70" />
      <span className="absolute left-0 top-3.5 h-px w-4 bg-current opacity-50" />
      <span className="absolute left-0 top-5 h-px w-3 bg-current opacity-35" />
      <span className="absolute right-0 top-3 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    </span>,
    <span key="signal-diagonal" className="relative block h-6 w-6">
      <span className="absolute left-0 top-2 h-px w-4 rotate-12 bg-current opacity-70" />
      <span className="absolute left-1 top-3.5 h-px w-4 -rotate-12 bg-current opacity-50" />
      <span className="absolute left-2 top-5 h-px w-3 -rotate-[18deg] bg-current opacity-35" />
      <span className="absolute right-0 top-3 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    </span>,
    <span key="signal-column" className="relative block h-6 w-6">
      <span className="absolute left-3 top-0 h-6 w-px bg-current opacity-70" />
      <span className="absolute left-1 top-2 h-px w-5 bg-current opacity-55" />
      <span className="absolute left-1 top-4 h-px w-3 bg-current opacity-35" />
      <span className="absolute right-1 top-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    </span>,
    <span key="signal-corner" className="relative block h-6 w-6">
      <span className="absolute left-1 top-4 h-px w-4 bg-current opacity-65" />
      <span className="absolute left-4 top-1 h-4 w-px bg-current opacity-55" />
      <span className="absolute right-1 top-2 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
    </span>,
    <span key="signal-ledger" className="relative block h-6 w-6">
      <span className="absolute left-1 top-1 h-4 w-4 border-l border-t border-current opacity-65" />
      <span className="absolute left-2 top-4 h-px w-4 bg-current opacity-45" />
      <span className="absolute left-3 top-5 h-px w-3 bg-current opacity-30" />
    </span>
  ];

  return (
    <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center text-signal">
      {shapes[index % shapes.length]}
    </span>
  );
}

const strongSignals = ["Specific work.", "Clear thinking.", "Evidence of ownership.", "Discretion.", "A point of view."];

function SignalConvergenceVisual() {
  return (
    <div
      aria-hidden
      className="relative min-h-[17rem] overflow-hidden bg-[linear-gradient(135deg,rgb(4,7,7),rgb(8,13,11)_48%,rgb(3,4,4))] sm:min-h-[20rem] lg:min-h-full"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(196,157,84,0.1),transparent_24%),linear-gradient(90deg,rgba(4,7,7,0.8),transparent_48%,rgba(0,0,0,0.2))]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(196,157,84,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(196,157,84,0.06)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 960 640" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signal-convergence-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(196,157,84)" stopOpacity="0" />
            <stop offset="18%" stopColor="rgb(196,157,84)" stopOpacity="0.16" />
            <stop offset="68%" stopColor="rgb(196,157,84)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(196,157,84)" stopOpacity="0.48" />
          </linearGradient>
          <radialGradient id="signal-convergence-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(196,157,84)" stopOpacity="0.28" />
            <stop offset="45%" stopColor="rgb(196,157,84)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(196,157,84)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g fill="none" stroke="url(#signal-convergence-stroke)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.15">
          <path d="M -24 118 C 118 110, 210 138, 300 172 S 500 256, 674 330" opacity="0.22" />
          <path d="M -24 168 C 110 160, 202 184, 292 214 S 498 274, 674 332" opacity="0.28" />
          <path d="M -24 220 C 118 218, 206 230, 296 246 S 500 288, 674 334" opacity="0.34" />
          <path d="M -24 274 C 116 274, 208 278, 298 282 S 500 304, 674 336" opacity="0.26" />
          <path d="M -24 330 C 116 322, 206 316, 300 308 S 502 316, 674 338" opacity="0.24" />
          <path d="M -24 386 C 118 370, 210 348, 304 324 S 504 324, 674 340" opacity="0.32" />
          <path d="M -24 442 C 120 416, 212 384, 308 344 S 506 332, 674 342" opacity="0.18" />
          <path d="M -24 500 C 122 466, 214 424, 312 354 S 508 336, 674 344" opacity="0.2" />
        </g>

        <g fill="rgb(196,157,84)">
          <circle cx="170" cy="143" r="2.6" opacity="0.52" />
          <circle cx="258" cy="206" r="2.4" opacity="0.46" />
          <circle cx="366" cy="268" r="2.3" opacity="0.38" />
          <circle cx="472" cy="300" r="2.2" opacity="0.34" />
          <circle cx="560" cy="326" r="2.5" opacity="0.52" />
          <circle cx="622" cy="334" r="2.1" opacity="0.42" />
        </g>

        <circle cx="674" cy="338" r="18" fill="url(#signal-convergence-glow)" />
        <circle cx="674" cy="338" r="4.25" fill="rgb(196,157,84)" fillOpacity="0.75" />
        <path d="M 674 338 H 960" stroke="rgba(196,157,84,0.28)" strokeWidth="1.25" />
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%,rgba(0,0,0,0.3))]" />
    </div>
  );
}

export default function SignalPage({ searchParams }: { searchParams?: { type?: string } }) {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(5,12,10,0.98)_52%,rgb(4,6,6)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content gap-0 lg:min-h-[29rem] lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-stretch">
          <div className="flex items-center px-6 py-14 sm:py-16 lg:py-18">
            <div className="max-w-2xl space-y-7">
              <Eyebrow>Join Entraphy</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-[4.65rem]">Send Us Your Signal.</h1>
              <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>For people who read the letter and recognized the feeling.</p>
                <p>
                  Entraphy is building in stealth, so this is not a conventional application. We are looking for enough signal to understand how
                  you think, what you have built, and where you might create leverage near the foundation.
                </p>
              </div>
              <p className="font-mono text-[10px] leading-5 tracking-[0.22em] text-signal uppercase">
                If there may be alignment, we will follow up manually.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 lg:border-t-0">
            <SignalConvergenceVisual />
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
