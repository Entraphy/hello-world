"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { ButtonLink, PageFrame, Surface } from "@/components/marketing-primitives";

const accessPaths = ["Strategic Partners", "Pilot Customers", "Advisors", "Early Builders"];

const accessTypes = ["Strategic Partner", "Pilot Customer", "Advisor", "Early Builder", "Other"];

const relationshipTypes = ["founder-track", "employee", "advisor", "contractor", "partner"];

type FormKind = "access" | "team";

const inputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-[rgb(10,13,12)] px-4 py-3 text-fg outline-none transition placeholder:text-muted/50 focus:border-signal/70 focus:bg-[rgb(12,16,14)]";

function Field({
  label,
  name,
  type = "text",
  required = true,
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block text-sm text-muted">
      <span>{label}</span>
      <textarea
        name={name}
        required
        rows={4}
        className={inputClass}
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm text-muted">
      <span>{label}</span>
      <select
        name={name}
        required
        className={inputClass}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function IntakeForm({ kind }: { kind: FormKind }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (kind === "team") {
    return (
      <Surface className="border-white/12 bg-[rgb(9,12,11)]/80 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-6">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">Early team</p>
            <h3 className="font-display text-2xl leading-tight text-fg">Introduce yourself.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="team-name" autoComplete="name" />
            <Field label="Email" name="team-email" type="email" autoComplete="email" />
            <Field label="Location" name="team-location" autoComplete="address-level2" />
            <Field label="LinkedIn / GitHub / portfolio" name="team-profile" type="url" required={false} />
          </div>
          <TextArea label="What have you built?" name="team-built" />
          <TextArea label="What problem can you not stop thinking about?" name="team-problem" />
          <SelectField label="Preferred relationship" name="team-relationship" options={relationshipTypes} />
          <p className="text-xs leading-6 text-muted">This static intake preview does not transmit information yet.</p>
          {submitted ? (
            <p className="text-sm leading-6 text-fg" aria-live="polite">
              Introduction noted for this session. Entraphy reviews introductions manually when intake is connected.
            </p>
          ) : null}
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-signal/70 bg-signal px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-bg uppercase transition hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
          >
            Introduce Yourself
          </button>
        </form>
      </Surface>
    );
  }

  return (
      <Surface className="border-white/12 bg-[rgb(9,12,11)]/80 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-6">
        <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">Private access</p>
          <h3 className="font-display text-2xl leading-tight text-fg">Request private access.</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="access-name" autoComplete="name" />
          <Field label="Organization" name="access-organization" autoComplete="organization" />
          <Field label="Role" name="access-role" autoComplete="organization-title" />
          <Field label="Work email" name="access-email" type="email" autoComplete="email" />
        </div>
        <SelectField label="Access type" name="access-type" options={accessTypes} />
        <TextArea label="What problem are you trying to solve?" name="access-problem" />
        <TextArea label="Why Entraphy?" name="access-why" />
        <Field label="Optional LinkedIn / website" name="access-profile" type="url" required={false} />
        <p className="text-xs leading-6 text-muted">This static intake preview does not transmit information yet.</p>
        {submitted ? (
          <p className="text-sm leading-6 text-fg" aria-live="polite">
            Access request noted for this session. Entraphy reviews requests manually when intake is connected.
          </p>
        ) : null}
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-signal/70 bg-signal px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-bg uppercase transition hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
        >
          Request Access
        </button>
      </form>
    </Surface>
  );
}

function TextSection({
  id,
  eyebrow,
  headline,
  children
}: {
  id: string;
  eyebrow: string;
  headline: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:pt-16">
      <div className="space-y-3">
        <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">{eyebrow}</p>
        <h2 className="font-display text-2xl leading-tight text-fg sm:text-4xl">{headline}</h2>
      </div>
      <div className="max-w-3xl space-y-5 text-base leading-8 text-muted sm:text-lg">{children}</div>
    </section>
  );
}

export function HomePageContent() {
  return (
    <PageFrame>
      <div className="space-y-16 sm:space-y-20">
        <section className="relative min-h-[calc(100vh-11rem)] overflow-hidden border-b border-white/10 pb-14 pt-8 sm:pt-14 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,157,84,0.72),transparent)]" />
          <div className="space-y-7">
            <p className="font-mono text-[11px] tracking-[0.32em] text-signal/80 uppercase">
              Private development. Selective access. Patent pending.
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.98] text-fg sm:text-6xl lg:text-7xl">Trust cannot be self-prescribed.</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Entraphy is building a patent-pending foundation for trusted autonomy in AI-native systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#access">Request Private Access</ButtonLink>
              <ButtonLink href="#team" variant="secondary">
                Join the Early Team
              </ButtonLink>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Surface className="relative overflow-hidden border-white/12 bg-[rgb(9,12,11)]/88 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.52)] sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(196,157,84,0.14),transparent_38%,rgba(67,91,75,0.18))]" />
              <div className="absolute left-8 right-8 top-20 h-px bg-signal/35" />
              <div className="absolute bottom-8 left-8 right-8 h-px bg-white/10" />
              <div className="relative space-y-14">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Threshold</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_24px_rgba(196,157,84,0.55)]" />
                </div>
                <div className="space-y-4">
                  {["Partners", "Pilots", "Advisors", "Builders"].map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/8 py-3 text-sm">
                      <span className="text-fg">{item}</span>
                      <span className="font-mono text-[10px] tracking-[0.24em] text-muted uppercase">Reviewed</span>
                    </div>
                  ))}
                </div>
                <p className="max-w-sm text-sm leading-7 text-muted">Public details are limited by design. The serious conversation starts in private.</p>
              </div>
            </Surface>
          </div>
        </section>

        <TextSection id="thesis" eyebrow="Thesis" headline="The world we are working toward.">
          <p>Imagine if trust could move at the speed of intelligence.</p>
          <p>
            AI is moving from assistance into action. As intelligent systems become more capable, connected, and consequential, the institutions that
            depend on them will need new ways to know when they should be trusted.
          </p>
          <p>The old model asks us to trust too early and discover too late.</p>
          <p>
            Entraphy is working toward a different future: one where intelligent systems earn trust before they act, and autonomy becomes more
            governable as it becomes more powerful.
          </p>
        </TextSection>

        <TextSection id="foundation" eyebrow="Foundation" headline="A new foundation is required.">
          <p>
            The next era will not be defined only by more capable models. It will be defined by whether those models, systems, and institutions can
            operate with confidence when action carries consequence.
          </p>
          <p>Entraphy begins there.</p>
        </TextSection>

        <TextSection id="partners" eyebrow="Private development" headline="Public detail is limited by design.">
          <p>Our first product remains in private development. The public site is a threshold, not the room.</p>
        </TextSection>

        <section id="access" className="scroll-mt-24 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:pt-16">
          <div className="space-y-5">
            <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">Access</p>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-5xl">Private access is reviewed, not opened.</h2>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Entraphy is currently engaging selected partners, pilot customers, advisors, and early builders. Deeper materials are available only
              through the private briefing room.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {accessPaths.map((path, index) => (
                <div key={path} className="border-l border-signal/60 bg-[rgb(11,15,13)] px-4 py-4 text-sm text-fg/85">
                  <span className="mb-2 block font-mono text-[9px] tracking-[0.22em] text-muted uppercase">0{index + 1}</span>
                  {path}
                </div>
              ))}
            </div>
          </div>
          <IntakeForm kind="access" />
        </section>

        <section id="team" className="scroll-mt-24 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:pt-16">
          <div className="space-y-5">
            <p className="font-mono text-[10px] tracking-[0.28em] text-signal/80 uppercase">Team</p>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-5xl">Build before the category has a name.</h2>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Entraphy is assembling a small early team for work at the edge of AI, infrastructure, systems trust, and trusted autonomy.
            </p>
          </div>
          <IntakeForm kind="team" />
        </section>

        <section className="border-t border-white/10 py-14">
          <div className="max-w-3xl space-y-5">
            <p className="font-display text-3xl leading-tight text-fg sm:text-5xl">A new category is forming quietly.</p>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Entraphy is building for the systems that must prove when they should be trusted.
            </p>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
