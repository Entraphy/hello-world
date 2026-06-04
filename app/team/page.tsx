import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Team | Entraphy Systems",
  description: "Entraphy is assembling a small early team for foundational work at the edge of technology, judgment, and consequence.",
  alternates: {
    canonical: "https://www.entraphy.com/team"
  },
  openGraph: {
    title: "Join the Team | Entraphy Systems",
    description: "Entraphy is assembling a small early team for foundational work at the edge of technology, judgment, and consequence.",
    type: "website",
    url: "https://www.entraphy.com/team",
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
    title: "Join the Team | Entraphy Systems",
    description: "Entraphy is assembling a small early team for foundational work at the edge of technology, judgment, and consequence.",
    images: ["/brand/entraphy-og-image.png"]
  }
};

const traits = [
  {
    label: "Clear in ambiguity",
    body: "Think clearly when the shape of the problem is still forming."
  },
  {
    label: "Calm under complexity",
    body: "Stay steady when there are many moving parts and few shortcuts."
  },
  {
    label: "Unafraid of unsolved problems",
    body: "Move toward difficult questions before they have names."
  },
  {
    label: "Abstract to practical",
    body: "Translate first-principles thinking into useful execution."
  },
  {
    label: "Precision without theater",
    body: "Care about rigor without hiding behind process."
  },
  {
    label: "Long vision, hard work",
    body: "Hold the horizon while doing the unglamorous work."
  }
];

const belongItems = [
  "You are drawn to problems that do not fit neatly into existing categories.",
  "You have a low tolerance for shallow thinking.",
  "You have built things under pressure and learned that simplicity is usually earned, not assumed.",
  "You are more interested in durable systems than temporary hype.",
  "You want to work with people who take the mission seriously without taking themselves too seriously.",
  "You are comfortable with confidentiality, trust, and disciplined communication.",
  "You can operate without needing every answer upfront.",
  "You are excited by the idea of helping shape something that may look obvious only after it exists."
];

const values = [
  {
    title: "Clear Thinking",
    body: "We value people who can separate signal from noise, assumptions from facts, and urgency from panic."
  },
  {
    title: "Deep Ownership",
    body: "We want people who pick up the whole problem, not just the assigned task."
  },
  {
    title: "Low Ego, High Standards",
    body: "The work is hard enough without performance theater. We care about substance, judgment, and execution."
  },
  {
    title: "Intellectual Honesty",
    body: "We would rather face a hard truth early than preserve a comfortable story too long."
  },
  {
    title: "Builder Energy",
    body: "Ideas matter. Taste matters. Strategy matters. But the future only changes when someone builds."
  },
  {
    title: "Discretion",
    body: "We are in stealth for a reason. The ability to do serious work quietly is part of the work itself."
  }
];

const expectations = [
  "You can expect hard problems.",
  "You can expect high trust.",
  "You can expect direct conversations.",
  "You can expect to work with people who care about the quality of the thinking as much as the speed of execution.",
  "You can expect ambiguity, but not chaos.",
  "You can expect seriousness, but not bureaucracy.",
  "You can expect to be close to the foundation."
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">{children}</p>;
}

function SignalLink({ children }: { children: string }) {
  return (
    <Link
      href="/signal"
      className="inline-flex min-h-12 items-center justify-center gap-5 border border-signal/78 bg-signal/[0.045] px-6 py-3 text-[0.68rem] font-semibold tracking-[0.24em] text-fg uppercase shadow-[0_0_0_1px_rgba(196,157,84,0.08)] transition hover:border-signal hover:bg-signal/[0.085] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
    >
      <span>{children}</span>
      <span aria-hidden className="text-lg leading-none">
        →
      </span>
    </Link>
  );
}

function LineIcon({ index }: { index: number }) {
  const variant = index % 6;

  if (variant === 0) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-2 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (variant === 1) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-1 top-2 h-px w-8 bg-current" />
        <span className="absolute left-1 top-5 h-px w-8 bg-current" />
        <span className="absolute left-1 top-8 h-px w-8 bg-current" />
      </span>
    );
  }

  if (variant === 2) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute left-1/2 top-1 h-8 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-1 top-1/2 h-px w-8 -translate-y-1/2 bg-current" />
        <span className="absolute left-[0.45rem] top-[0.45rem] h-px w-7 rotate-45 bg-current" />
        <span className="absolute bottom-[0.45rem] left-[0.45rem] h-px w-7 -rotate-45 bg-current" />
      </span>
    );
  }

  if (variant === 3) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute inset-2 border border-current" />
        <span className="absolute left-3 top-3 h-4 w-px rotate-45 bg-current" />
        <span className="absolute right-3 top-3 h-4 w-px -rotate-45 bg-current" />
      </span>
    );
  }

  if (variant === 4) {
    return (
      <span aria-hidden className="relative block h-10 w-10 text-signal">
        <span className="absolute inset-2 rounded-full border border-current" />
        <span className="absolute left-1/2 top-1 h-8 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-1 top-1/2 h-px w-8 -translate-y-1/2 bg-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-10 w-10 text-signal">
      <span className="absolute left-2 top-6 h-4 w-7 border-b border-current" />
      <span className="absolute left-3 top-3 h-5 w-px rotate-45 bg-current" />
      <span className="absolute left-5 top-2 h-6 w-px bg-current" />
      <span className="absolute right-3 top-4 h-4 w-px -rotate-45 bg-current" />
    </span>
  );
}

function CheckMark() {
  return (
    <span aria-hidden className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-signal/70 text-signal">
      <span className="h-1.5 w-2.5 rotate-[-45deg] border-b border-l border-current" />
    </span>
  );
}

function FrontierMark() {
  return (
    <span aria-hidden className="relative block h-32 w-32 text-signal">
      <span className="absolute inset-0 rounded-full border border-current opacity-18" />
      <span className="absolute inset-5 rounded-full border border-current opacity-30" />
      <span className="absolute inset-10 rounded-full border border-current opacity-55" />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current opacity-20" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current opacity-20" />
    </span>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4,7,7)_0%,rgba(4,9,8,0.94)_44%,rgba(4,7,7,0.68)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-full opacity-88 lg:w-[61%]">
          <Image
            src="/images/entraphy-signal-field.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 61vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_67%_45%,rgba(196,157,84,0.28),transparent_24%),linear-gradient(90deg,rgb(4,7,7)_0%,rgba(4,7,7,0.76)_32%,rgba(4,7,7,0.16)_66%,rgba(4,7,7,0.46)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[37rem] w-full max-w-content gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)] lg:items-center lg:py-20">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>Join Entraphy</Eyebrow>
            <h1 className="font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">
              Some work is too early to explain publicly.
            </h1>
            <div className="h-px w-11 bg-signal" />
            <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
              <p>
                Entraphy is building in stealth. We are not ready to describe exactly what we are building, who it is for, or why the timing matters as
                much as it does.
              </p>
              <p>
                But we can say this: we are working on a foundational problem at the edge of technology, judgment, and consequence.
              </p>
            </div>
            <SignalLink>Send Us Your Signal</SignalLink>
          </div>

          <div className="relative max-w-sm border border-white/12 bg-black/24 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
            <div className="space-y-3 font-display text-2xl leading-tight text-fg sm:text-3xl">
              <p>It is difficult.</p>
              <p>It is early.</p>
              <p>It is not obvious to everyone yet.</p>
            </div>
            <div className="my-6 h-px w-11 bg-signal" />
            <p className="text-base leading-8 text-muted">And for the right people, that is exactly the point.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[linear-gradient(120deg,rgb(5,8,8),rgb(7,13,11)_60%,rgb(3,5,5))]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.28fr_0.42fr_0.3fr] lg:py-16">
          <div>
            <Eyebrow>Not a normal startup role</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">This is earlier than the playbook.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              Most companies ask you to join after the category is clear, the language is polished, the market understands the need, and the path is
              already visible.
            </p>
            <p>Entraphy is earlier than that.</p>
            <p>
              We are still in the phase where judgment matters more than playbooks, where original thinking matters more than credentials, and where
              the first principles are still close enough to touch.
            </p>
          </div>
          <div className="border-l border-white/18 pl-7 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              This kind of work is not for everyone. It is for people who want to help build the foundation, not just optimize the surface.
            </p>
            <p className="mt-5">It is for people who are comfortable working before the spotlight arrives.</p>
            <p className="mt-5">It is for people who would rather help define the future than wait for a job description to summarize it.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.24fr_1fr] lg:items-start">
            <div>
              <Eyebrow>The kind of people we want to meet</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">The title matters less than the wiring.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {traits.map((trait, index) => (
                <div key={trait.label} className="border-l border-white/16 pl-5">
                  <LineIcon index={index} />
                  <h3 className="mt-4 font-display text-2xl leading-tight text-fg">{trait.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{trait.body}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-5xl text-base leading-8 text-muted">
            You may be an engineer, researcher, designer, operator, strategist, writer, security thinker, product builder, systems architect, or
            founder-type generalist.
          </p>
          <p className="mt-2 text-base leading-8 text-signal">The title matters less than the wiring.</p>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(5,8,8)]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.34fr_0.66fr] lg:py-16">
          <div>
            <Eyebrow>You might belong here if</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">A selective filter.</h2>
          </div>
          <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {belongItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                <CheckMark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[linear-gradient(120deg,rgb(5,8,8),rgb(7,13,11)_60%,rgb(3,5,5))]">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="mb-7">
            <Eyebrow>What we value</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">Values that hold under pressure.</h2>
          </div>
          <div className="grid border border-white/12 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="min-h-60 border-b border-white/12 p-7 md:border-r xl:[&:nth-child(3n)]:border-r-0">
                <LineIcon index={index + 4} />
                <h3 className="mt-5 font-display text-2xl leading-tight text-fg">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/12">
        <div className="mx-auto w-full max-w-content px-6 py-12 lg:py-16">
          <div className="max-w-4xl">
            <Eyebrow>Why this is worth your attention</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">The frontier is quiet before it is obvious.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              <p>Every so often, a small group of people gets to work on something before the rest of the world understands why it matters.</p>
              <p>That phase is uncomfortable.</p>
              <p>There are fewer maps. There is less applause. There is more ambiguity. There is more responsibility.</p>
              <p>But there is also more room to shape the foundation.</p>
              <p>That is where Entraphy is right now.</p>
              <p className="text-signal">
                We are not looking for everyone. We are looking for the people who recognize the feeling of a real frontier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-[rgb(5,8,8)]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-12 lg:grid-cols-[0.34fr_0.66fr] lg:py-16">
          <div>
            <Eyebrow>What you can expect</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-fg sm:text-5xl">What the work feels like from inside.</h2>
          </div>
          <div>
            <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
              {expectations.map((item, index) => (
                <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-7 text-muted">
                  <LineIcon index={index + 9} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted">
              And if this becomes what we believe it can become, you can expect to look back and know that you were there early, when the work was
              still quiet and the shape of the future was still being formed.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/12">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5,8,8),rgb(8,12,11))]" />
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 opacity-50 lg:block">
          <FrontierMark />
        </div>
        <div className="relative mx-auto grid w-full max-w-content gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-14">
          <div className="flex max-w-5xl items-start gap-7">
            <div className="hidden shrink-0 sm:block">
              <FrontierMark />
            </div>
            <div className="space-y-6">
              <Eyebrow>Send us your signal</Eyebrow>
              <h2 className="max-w-3xl font-display text-4xl leading-tight text-fg sm:text-5xl">
                We are not asking you to apply to a polished machine.
              </h2>
              <div className="max-w-4xl space-y-4 text-base leading-8 text-muted">
                <p>
                  We are inviting you into an early room. If you are the kind of person drawn to foundational work, hard problems, disciplined teams,
                  and category-level ambition, we would like to hear from you.
                </p>
                <p>Tell us who you are, what you have built, and what kind of problems you cannot stop thinking about.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 lg:justify-self-end">
            <SignalLink>Send Us Your Signal</SignalLink>
            <p className="text-xs leading-5 text-muted">Introductions are reviewed manually.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
