import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Entraphy Systems",
  description: "Entraphy is opening selected conversations with strategic partners, early evaluation partners, and advisors operating where trusted autonomy carries institutional consequence.",
  alternates: {
    canonical: "https://www.entraphy.com/partners"
  },
  openGraph: {
    title: "Partner With Us | Entraphy Systems",
    description: "Entraphy is opening selected conversations with strategic partners, early evaluation partners, and advisors operating where trusted autonomy carries institutional consequence.",
    type: "website",
    url: "https://www.entraphy.com/partners",
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
    title: "Partner With Us | Entraphy Systems",
    description: "Entraphy is opening selected conversations with strategic partners, early evaluation partners, and advisors operating where trusted autonomy carries institutional consequence.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const engagementTypes = [
  {
    title: "Strategic Partners",
    body: "For organizations shaping the environments where trusted autonomy will matter before scale.",
    icon: "spark"
  },
  {
    title: "Pilot Candidates",
    body: "For high-consequence teams preparing for private evaluation.",
    icon: "target"
  },
  {
    title: "Institutional Advisors",
    body: "For selected experts who can sharpen category, posture, and private development.",
    icon: "seal"
  }
];

const criteria = [
  {
    title: "Discretion",
    body: "We value confidentiality and protect what is not yet public.",
    icon: "lock"
  },
  {
    title: "Standards",
    body: "We build for systems that must earn trust before they act.",
    icon: "balance"
  },
  {
    title: "Impact",
    body: "We focus on environments where integrity is non-negotiable.",
    icon: "crosshair"
  },
  {
    title: "Longevity",
    body: "We build foundations that compound across generations.",
    icon: "compass"
  }
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function PartnerMark() {
  return (
    <span aria-hidden className="relative block h-14 w-14 text-signal">
      <span className="absolute left-2 top-3 h-7 w-11 rotate-[-24deg] border border-current opacity-55" />
      <span className="absolute left-4 top-5 h-7 w-11 rotate-[-24deg] border border-current opacity-85" />
      <span className="absolute left-6 top-7 h-7 w-11 rotate-[-24deg] border border-current opacity-42" />
    </span>
  );
}

function EngagementIcon({ type }: { type: string }) {
  if (type === "target") {
    return (
      <span aria-hidden className="relative block h-12 w-12 text-signal">
        <span className="absolute inset-2 rounded-full border border-current" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
        <span className="absolute left-7 top-3 h-px w-5 rotate-[-38deg] bg-current" />
      </span>
    );
  }

  if (type === "seal") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute inset-1 rounded-b-[1rem] border border-current" />
        <span className="absolute left-1/2 top-3 h-5 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-current" />
      </span>
    );
  }

  if (type === "spark") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute inset-1 border border-current" />
        <span className="absolute left-1/2 top-2 h-7 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-2 top-1/2 h-px w-7 -translate-y-1/2 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
      </span>
    );
  }

  return <PartnerMark />;
}

function CriteriaIcon({ type }: { type: string }) {
  if (type === "lock") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute bottom-1 left-1/2 h-7 w-7 -translate-x-1/2 rounded-sm border border-current" />
        <span className="absolute left-1/2 top-1 h-6 w-5 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
        <span className="absolute left-1/2 top-7 h-2 w-px -translate-x-1/2 bg-current" />
      </span>
    );
  }

  if (type === "balance") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute left-1/2 top-2 h-8 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-2 right-2 top-4 h-px bg-current" />
        <span className="absolute left-2 top-4 h-5 w-5 rotate-45 border-b border-r border-current" />
        <span className="absolute right-2 top-4 h-5 w-5 rotate-45 border-b border-r border-current" />
      </span>
    );
  }

  if (type === "crosshair") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute inset-2 rounded-full border border-current" />
        <span className="absolute left-1/2 top-1 h-9 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-1 top-1/2 h-px w-9 -translate-y-1/2 bg-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-11 w-11 text-signal">
      <span className="absolute inset-2 rounded-full border border-current" />
      <span className="absolute left-7 top-2 h-px w-5 rotate-[-38deg] bg-current" />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
    </span>
  );
}

function TempleMark() {
  return (
    <span aria-hidden className="relative block h-16 w-16 text-signal">
      <span className="absolute left-2 top-5 h-px w-12 bg-current" />
      <span className="absolute left-4 top-7 h-8 w-px bg-current" />
      <span className="absolute left-8 top-7 h-8 w-px bg-current" />
      <span className="absolute right-4 top-7 h-8 w-px bg-current" />
      <span className="absolute left-3 top-4 h-8 w-10 border-x border-b border-current" />
      <span className="absolute left-2 top-3 h-px w-12 bg-current" />
      <span className="absolute left-1/2 top-0 h-5 w-10 -translate-x-1/2 rotate-[-8deg] border-t border-current" />
    </span>
  );
}

function RequestChoice({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link
      href={href}
      className="group grid min-h-20 grid-cols-[1fr_auto] items-center gap-5 border border-signal/70 bg-black/10 px-6 py-4 transition hover:border-signal hover:bg-signal/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
    >
      <span>
        <span className="block font-mono text-[10px] tracking-[0.24em] text-signal uppercase">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-muted">{body}</span>
      </span>
      <span className="text-2xl leading-none text-signal transition group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  );
}

export default function PartnersPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(4,7,7,0.98)_39%,rgba(4,7,7,0.15)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-content lg:min-h-[40.5rem] lg:grid-cols-[0.45fr_0.55fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-7">
              <Eyebrow>Partner with us</Eyebrow>
              <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Partner with us before the category is obvious.</h1>
              <div className="h-px w-12 bg-signal" />
              <p className="max-w-lg text-base leading-8 text-muted sm:text-lg">
                Entraphy is opening a small number of private conversations with strategic partners and early evaluation partners operating where trusted autonomy carries institutional consequence.
              </p>
              <p className="max-w-lg text-base leading-8 text-muted sm:text-lg">
                Product details remain private. Qualified conversations begin through the request path.
              </p>
            </div>
          </div>
          <div className="relative min-h-[30rem] overflow-hidden border-t border-white/10 lg:border-t-0">
            <Image
              src="/images/entraphy-partner-corridor.png"
              alt="Bronze-lit private architectural corridor"
              fill
              priority
              className="object-cover object-center opacity-88"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,7,0.62),rgba(4,7,7,0.06)_34%,rgba(4,7,7,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,7,0.02),rgba(4,7,7,0.2)_58%,rgba(4,7,7,0.52))]" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[linear-gradient(180deg,rgb(5,12,10),rgb(3,8,7))]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[1fr_19rem] lg:py-16 xl:grid-cols-[1fr_21rem]">
          <div>
            <div className="max-w-3xl space-y-5">
              <Eyebrow>Who we work with</Eyebrow>
              <p className="max-w-3xl text-base leading-8 text-muted">
                We work with institutions, early evaluation partners, and advisors operating where the standards will matter.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {engagementTypes.map((item) => (
                <article
                  key={item.title}
                  className="min-h-64 border border-white/14 bg-[linear-gradient(180deg,rgba(10,24,19,0.56),rgba(3,7,6,0.78))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
                >
                  <EngagementIcon type={item.icon} />
                  <h2 className="mt-8 font-display text-2xl leading-tight text-fg sm:text-3xl">{item.title}</h2>
                  <div className="mt-4 h-px w-9 bg-signal" />
                  <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative border border-signal/55 bg-[linear-gradient(180deg,rgba(10,24,19,0.68),rgba(3,6,6,0.84))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <TempleMark />
            <h2 className="mt-7 font-display text-3xl leading-tight text-fg">Private by design.</h2>
            <div className="mt-5 h-px w-11 bg-signal" />
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
              <p>Our work is early, sensitive, and protected. We do not share details publicly.</p>
              <p>Qualified conversations begin through our request path.</p>
            </div>
            <p className="mt-7 border-t border-white/12 pt-6 text-sm leading-7 text-muted">Confidentiality may precede any deeper exchange.</p>
          </aside>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[linear-gradient(180deg,rgb(3,8,7),rgb(4,9,8))]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.58fr_0.42fr] lg:py-16">
          <div>
            <div className="max-w-xl space-y-5">
              <Eyebrow>What aligned partnership looks like</Eyebrow>
              <p className="text-base leading-8 text-muted">We move slowly for a reason. The right alignment creates leverage that lasts.</p>
            </div>
            <div className="mt-8 divide-y divide-white/10">
              {criteria.map((item) => (
                <article key={item.title} className="grid gap-5 py-5 sm:grid-cols-[4rem_8rem_1fr] sm:items-center">
                  <div className="grid h-12 w-12 place-items-center border border-signal/58 bg-black/12">
                    <CriteriaIcon type={item.icon} />
                  </div>
                  <h2 className="font-display text-2xl leading-tight text-fg">{item.title}</h2>
                  <p className="text-sm leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="border border-white/14 bg-[linear-gradient(180deg,rgba(8,22,17,0.62),rgba(3,6,6,0.78))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] lg:self-start">
            <Eyebrow>Begin a private conversation</Eyebrow>
            <p className="mt-5 max-w-md text-base leading-8 text-muted">
              Tell us about your organization, your role, and the context for a potential partnership.
            </p>
            <div className="mt-7 space-y-4">
              <RequestChoice href="/request-partner-access?type=partner" title="Request Partner Access" body="For strategic partners and advisors" />
              <RequestChoice href="/request-partner-access?type=pilot" title="Pilot Candidate Access" body="For high-consequence teams preparing for private evaluation." />
            </div>
            <p className="mt-7 text-sm leading-7 text-muted">
              Submitting a request does not guarantee access. Additional confidentiality steps may be required before deeper materials are shared.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
