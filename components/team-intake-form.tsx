"use client";

import { FormEvent, useMemo, useState } from "react";

type TeamPath = {
  slug: string;
  title: string;
  body: string;
  icon: "stack" | "target" | "person" | "shield" | "diamond" | "other";
};

type TeamFormState = {
  name: string;
  email: string;
  location: string;
  role: string;
  website: string;
  built: string;
  energy: string;
  problem: string;
  strengths: string;
  contribution: string;
  insight: string;
  note: string;
  acknowledged: boolean;
  companyUrl: string;
};

type FieldKey = keyof TeamFormState;

const teamPaths: TeamPath[] = [
  {
    slug: "systems",
    title: "Systems Builder",
    body: "For people who can turn ambiguous, high-consequence ideas into secure, reliable, usable systems.",
    icon: "stack"
  },
  {
    slug: "design",
    title: "Design Engineer",
    body: "For people who can make powerful systems feel precise, restrained, and inevitable.",
    icon: "target"
  },
  {
    slug: "operator",
    title: "Strategic Operator",
    body: "For operators who can turn early institutional interest into disciplined paths without creating noise.",
    icon: "person"
  },
  {
    slug: "steward",
    title: "Infrastructure Steward",
    body: "For people who understand that trust begins with how the company handles its own systems.",
    icon: "shield"
  },
  {
    slug: "generalist",
    title: "Founder-Caliber Generalist",
    body: "For rare generalists who can carry ambiguity, synthesize quickly, and make the company more capable.",
    icon: "diamond"
  },
  {
    slug: "other",
    title: "Other",
    body: "For exceptional people who do not fit a lane but believe they belong near the foundation.",
    icon: "other"
  }
];

const defaultPath = teamPaths[0];
const submissionError = "We could not submit your signal. Please try again or contact Entraphy directly.";

function initialForm(): TeamFormState {
  return {
    name: "",
    email: "",
    location: "",
    role: "",
    website: "",
    built: "",
    energy: "",
    problem: "",
    strengths: "",
    contribution: "",
    insight: "",
    note: "",
    acknowledged: false,
    companyUrl: ""
  };
}

function pathFromType(type?: string) {
  return teamPaths.find((path) => path.slug === type) ?? defaultPath;
}

function sourcePathFor(path: TeamPath, sourceBase: string) {
  return `${sourceBase}?type=${path.slug}`;
}

function updateUrl(path: TeamPath, sourceBase: string) {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", sourcePathFor(path, sourceBase));
}

function FieldLabel({ htmlFor, children, required = false }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-[10px] leading-5 tracking-[0.22em] text-fg/82 uppercase">
      {children}
      {required ? <span className="text-signal"> *</span> : null}
    </label>
  );
}

function fieldClass(error?: boolean) {
  return [
    "mt-1.5 w-full border px-3.5 py-2.5 text-sm leading-5 text-fg caret-signal placeholder:text-muted/48 shadow-[inset_0_1px_0_rgba(242,239,230,0.045)] [color-scheme:dark]",
    "bg-[rgb(5,9,8)] bg-[linear-gradient(180deg,rgba(9,18,15,0.92),rgba(3,5,5,0.94))]",
    "transition hover:border-[rgb(242_239_230_/_0.32)] focus:border-[rgb(196_157_84_/_0.78)] focus:bg-[linear-gradient(180deg,rgba(11,23,18,0.96),rgba(4,7,6,0.96))] focus:outline-none focus:ring-1 focus:ring-[rgb(196_157_84_/_0.45)]",
    "disabled:cursor-not-allowed disabled:border-[rgb(242_239_230_/_0.12)] disabled:bg-black/30 disabled:text-muted/58",
    error
      ? "border-[rgb(252_165_165_/_0.72)] focus:border-[rgb(254_202_202_/_0.85)] focus:ring-[rgb(252_165_165_/_0.35)]"
      : "border-[rgb(242_239_230_/_0.18)]"
  ].join(" ");
}

function TeamPathIcon({ type }: { type: TeamPath["icon"] }) {
  if (type === "target") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute inset-2 rounded-full border border-current" />
        <span className="absolute inset-[0.55rem] rounded-full border border-current opacity-48" />
        <span className="absolute left-7 top-2 h-px w-5 rotate-[-38deg] bg-current" />
      </span>
    );
  }

  if (type === "person") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-current" />
        <span className="absolute bottom-2 left-1/2 h-6 w-8 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
      </span>
    );
  }

  if (type === "shield") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute left-2 top-2 h-8 w-8 rounded-b-[1rem] border border-current" />
        <span className="absolute left-1/2 top-2 h-8 w-px -translate-x-1/2 bg-current opacity-55" />
      </span>
    );
  }

  if (type === "diamond") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rotate-45 border border-current" />
        <span className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rotate-45 border border-current opacity-55" />
      </span>
    );
  }

  if (type === "other") {
    return (
      <span aria-hidden className="relative block h-11 w-11 text-signal">
        <span className="absolute inset-x-2 top-3 h-6 border border-current" />
        <span className="absolute left-3 top-1/2 h-px w-1 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-1 -translate-x-1/2 bg-current" />
        <span className="absolute right-3 top-1/2 h-px w-1 bg-current" />
      </span>
    );
  }

  return (
    <span aria-hidden className="relative block h-11 w-11 text-signal">
      <span className="absolute left-2 top-3 h-5 w-8 rotate-[-24deg] border border-current opacity-55" />
      <span className="absolute left-3.5 top-5 h-5 w-8 rotate-[-24deg] border border-current opacity-85" />
      <span className="absolute left-5 top-7 h-5 w-8 rotate-[-24deg] border border-current opacity-45" />
    </span>
  );
}

function buildLine(label: string, value: string) {
  return `${label}\n${value.trim()}`;
}

function SectionHeading({ eyebrow, body, step }: { eyebrow: string; body?: string; step?: string }) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">
        {step ? `${step}. ` : null}
        {eyebrow}
      </p>
      {body ? <p className="max-w-2xl text-sm leading-7 text-muted">{body}</p> : null}
    </div>
  );
}

function ReviewNote() {
  return (
    <p className="inline-flex items-center gap-3 text-xs leading-5 text-muted">
      <span aria-hidden className="relative block h-5 w-5 shrink-0 text-signal">
        <span className="absolute bottom-0 left-1/2 h-3.5 w-4 -translate-x-1/2 border border-current" />
        <span className="absolute left-1/2 top-0 h-4 w-3 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
        <span className="absolute left-1/2 top-3 h-1.5 w-px -translate-x-1/2 bg-current" />
      </span>
      <span>Introductions are reviewed manually.</span>
    </p>
  );
}

export function TeamIntakeForm({
  initialType,
  sourceBase = "/signal"
}: {
  initialType?: string;
  sourceBase?: string;
}) {
  const initialPath = useMemo(() => pathFromType(initialType), [initialType]);
  const [selectedPath, setSelectedPath] = useState<TeamPath>(initialPath);
  const [sourcePath, setSourcePath] = useState(() => sourcePathFor(initialPath, sourceBase));
  const [form, setForm] = useState<TeamFormState>(() => initialForm());
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function resetFeedback() {
    setStatus("idle");
    setStatusMessage("");
  }

  function selectPath(path: TeamPath) {
    setSelectedPath(path);
    setSourcePath(sourcePathFor(path, sourceBase));
    setErrors({});
    resetFeedback();
    updateUrl(path, sourceBase);
  }

  function updateField(field: keyof TeamFormState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    resetFeedback();
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldKey, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email.";
    if (!form.location.trim()) nextErrors.location = "Location is required.";
    if (!form.role.trim()) nextErrors.role = "Current role or background is required.";
    if (!form.built.trim()) nextErrors.built = "Share what you have built.";
    if (!form.energy.trim()) nextErrors.energy = "Share what moves you.";
    if (!form.problem.trim()) nextErrors.problem = "Share the problem you cannot stop thinking about.";
    if (!form.strengths.trim()) nextErrors.strengths = "Share what you do better than most people you have worked with.";
    if (!form.contribution.trim()) nextErrors.contribution = "Share how you would create leverage near the foundation.";
    if (!form.insight.trim()) nextErrors.insight = "Share what you saw early.";
    if (!form.acknowledged) nextErrors.acknowledged = "Please acknowledge the signal expectations.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          organization: "",
          role: form.role,
          email: form.email,
          accessType: "Early Builder",
          requestCategory: "builder",
          helpArea: selectedPath.title,
          problem: [buildLine("Selected area", selectedPath.title), buildLine("Proof of building", form.built)].join("\n\n"),
          why: [
            buildLine("What kind of work gives you energy?", form.energy),
            buildLine("What do you do better than most people you have worked with?", form.strengths),
            buildLine("What problem can you not stop thinking about?", form.problem),
            buildLine("How would you help an early company become more disciplined, more credible, or more capable?", form.contribution),
            buildLine("What you saw early", form.insight)
          ]
            .filter(Boolean)
            .join("\n\n"),
          website: form.website,
          note: [buildLine("Location", form.location), form.note.trim() ? buildLine("Additional note", form.note) : ""].filter(Boolean).join("\n\n"),
          referral: selectedPath.title,
          companyUrl: form.companyUrl,
          sourcePath
        })
      });

      const result = (await response.json()) as {
        ok?: boolean;
        errors?: Partial<Record<FieldKey, string>>;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
          setStatus("idle");
          return;
        }

        setStatus("error");
        setStatusMessage(submissionError);
        return;
      }

      setForm(initialForm());
      setErrors({});
      setStatus("success");
      setStatusMessage("Signal received. Entraphy reviews early-team introductions manually.");
    } catch {
      setStatus("error");
      setStatusMessage(submissionError);
    }
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <SectionHeading step="1" eyebrow="Where can you create leverage?" body="Select the area where you believe you could create the greatest impact." />
        <div className="space-y-2">
          {teamPaths.map((path) => {
            const isSelected = path.slug === selectedPath.slug;

            return (
              <button
                key={path.slug}
                type="button"
                onClick={() => selectPath(path)}
                aria-pressed={isSelected}
                className={[
                  "relative grid w-full grid-cols-[3rem_1fr_1.5rem] gap-3 border px-4 py-3 text-left shadow-[0_12px_34px_rgba(0,0,0,0.14)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70 sm:grid-cols-[3rem_minmax(10rem,0.34fr)_1fr_1.75rem] sm:items-center",
                  isSelected
                    ? "border-signal/68 bg-[linear-gradient(180deg,rgba(18,34,28,0.7),rgba(5,8,7,0.84))]"
                    : "border-white/22 bg-black/18 hover:border-signal/45 hover:bg-white/[0.025]"
                ].join(" ")}
              >
                <span className="row-span-2 self-start sm:row-span-1 sm:self-auto">
                  <TeamPathIcon type={path.icon} />
                </span>
                <span className="font-display text-xl leading-tight text-fg">{path.title}</span>
                <span className="col-span-2 col-start-2 text-xs leading-5 text-muted sm:col-span-1 sm:col-start-auto sm:text-sm sm:leading-6">{path.body}</span>
                <span
                  aria-hidden
                  className={[
                    "grid h-5 w-5 place-items-center rounded-full justify-self-end",
                    isSelected ? "bg-signal text-black" : "border border-white/16 text-transparent"
                  ].join(" ")}
                >
                  <span className="h-2 w-3 rotate-[-45deg] border-b border-l border-current" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <form onSubmit={handleSubmit} noValidate className="space-y-7">
        <section className="space-y-3">
          <SectionHeading step="2" eyebrow="Who you are" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="team-name" required>
                Full name
              </FieldLabel>
              <input
                id="team-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={fieldClass(Boolean(errors.name))}
                placeholder="Your full name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.name}</p> : null}
            </div>

            <div>
              <FieldLabel htmlFor="team-email" required>
                Email
              </FieldLabel>
              <input
                id="team-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={fieldClass(Boolean(errors.email))}
                placeholder="you@domain.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.email}</p> : null}
            </div>

            <div>
              <FieldLabel htmlFor="team-location" required>
                Location (city, state, or country)
              </FieldLabel>
              <input
                id="team-location"
                name="location"
                autoComplete="address-level2"
                value={form.location}
                onChange={(event) => updateField("location", event.target.value)}
                className={fieldClass(Boolean(errors.location))}
                placeholder="City, state, or country"
                aria-invalid={Boolean(errors.location)}
              />
              {errors.location ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.location}</p> : null}
            </div>

            <div>
              <FieldLabel htmlFor="team-role" required>
                Current role or background
              </FieldLabel>
              <input
                id="team-role"
                name="role"
                autoComplete="organization-title"
                value={form.role}
                onChange={(event) => updateField("role", event.target.value)}
                className={fieldClass(Boolean(errors.role))}
                placeholder="Your current role or relevant background"
                aria-invalid={Boolean(errors.role)}
              />
              {errors.role ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.role}</p> : null}
            </div>

            <div className="sm:col-span-2">
              <FieldLabel htmlFor="team-website">LinkedIn, GitHub, portfolio, or relevant links</FieldLabel>
              <input
                id="team-website"
                name="website"
                type="url"
                autoComplete="url"
                value={form.website}
                onChange={(event) => updateField("website", event.target.value)}
                className={fieldClass()}
                placeholder="https://linkedin.com/in/you or https://github.com/you or https://yourwebsite.com"
              />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <SectionHeading step="3" eyebrow="What you have built" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="team-built" required>
                What have you built that you are proud of?
              </FieldLabel>
              <textarea
                id="team-built"
                name="built"
                rows={3}
                value={form.built}
                onChange={(event) => updateField("built", event.target.value)}
                className={fieldClass(Boolean(errors.built))}
                placeholder="Share products, systems, companies, or work you are proud of."
                aria-invalid={Boolean(errors.built)}
              />
              {errors.built ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.built}</p> : null}
            </div>

            <div>
              <FieldLabel htmlFor="team-strengths" required>
                What do you do better than most people you have worked with?
              </FieldLabel>
              <textarea
                id="team-strengths"
                name="strengths"
                rows={3}
                value={form.strengths}
                onChange={(event) => updateField("strengths", event.target.value)}
                className={fieldClass(Boolean(errors.strengths))}
                placeholder="Your unfair advantages, judgment, or unique strengths."
                aria-invalid={Boolean(errors.strengths)}
              />
              {errors.strengths ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.strengths}</p> : null}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <SectionHeading step="4" eyebrow="How you think" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="team-energy" required>
                What kind of work gives you energy?
              </FieldLabel>
              <textarea
                id="team-energy"
                name="energy"
                rows={3}
                value={form.energy}
                onChange={(event) => updateField("energy", event.target.value)}
                className={fieldClass(Boolean(errors.energy))}
                placeholder="The kind of problems, environments, and impact that energize you."
                aria-invalid={Boolean(errors.energy)}
              />
              {errors.energy ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.energy}</p> : null}
            </div>

            <div>
              <FieldLabel htmlFor="team-problem" required>
                What problem can you not stop thinking about?
              </FieldLabel>
              <textarea
                id="team-problem"
                name="problem"
                rows={3}
                value={form.problem}
                onChange={(event) => updateField("problem", event.target.value)}
                className={fieldClass(Boolean(errors.problem))}
                placeholder="The challenge you believe is worth your best years."
                aria-invalid={Boolean(errors.problem)}
              />
              {errors.problem ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.problem}</p> : null}
            </div>
          </div>
          <div>
            <FieldLabel htmlFor="team-contribution" required>
              How would you help an early company become more disciplined, more credible, or more capable?
            </FieldLabel>
            <textarea
              id="team-contribution"
              name="contribution"
              rows={3}
              value={form.contribution}
              onChange={(event) => updateField("contribution", event.target.value)}
              className={fieldClass(Boolean(errors.contribution))}
              placeholder="Your perspective on what matters most in the earliest days."
              aria-invalid={Boolean(errors.contribution)}
            />
            {errors.contribution ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.contribution}</p> : null}
          </div>
        </section>

        <section className="space-y-3">
          <SectionHeading step="5" eyebrow="What you saw early" />
          <div>
            <FieldLabel htmlFor="team-insight" required>
              Tell us about a time you saw something before others did, and what you did with that insight.
            </FieldLabel>
            <textarea
              id="team-insight"
              name="insight"
              rows={4}
              value={form.insight}
              onChange={(event) => updateField("insight", event.target.value)}
              className={fieldClass(Boolean(errors.insight))}
              placeholder="The context, the insight, the action you took, and the outcome."
              aria-invalid={Boolean(errors.insight)}
            />
            {errors.insight ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.insight}</p> : null}
          </div>
        </section>

        <section className="space-y-3">
          <SectionHeading step="6" eyebrow="Final note" />
          <div>
            <FieldLabel htmlFor="team-note">Additional note</FieldLabel>
            <textarea
              id="team-note"
              name="note"
              rows={3}
              value={form.note}
              onChange={(event) => updateField("note", event.target.value)}
              className={fieldClass()}
              placeholder="Share anything else that will help us understand you better."
            />
          </div>

          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              checked={form.acknowledged}
              onChange={(event) => updateField("acknowledged", event.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 appearance-none border border-[rgb(242_239_230_/_0.22)] bg-[rgb(5,9,8)] bg-[linear-gradient(180deg,rgba(9,18,15,0.92),rgba(3,5,5,0.94))] shadow-[inset_0_1px_0_rgba(242,239,230,0.045)] checked:border-signal checked:bg-signal focus:outline-none focus:ring-1 focus:ring-[rgb(196_157_84_/_0.6)]"
              aria-invalid={Boolean(errors.acknowledged)}
            />
            <span>I understand Entraphy reviews signals manually and this does not create an employment relationship or guarantee a response.</span>
          </label>
          {errors.acknowledged ? <p className="text-xs leading-5 text-red-200">{errors.acknowledged}</p> : null}

          <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="team-company-url">Leave this field empty</label>
            <input
              id="team-company-url"
              name="companyUrl"
              tabIndex={-1}
              autoComplete="off"
              value={form.companyUrl}
              onChange={(event) => updateField("companyUrl", event.target.value)}
              className="h-px w-px"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:items-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex min-h-12 items-center justify-center gap-5 border border-signal/75 bg-signal/[0.045] px-6 py-3 text-[0.68rem] font-semibold tracking-[0.22em] text-fg uppercase transition hover:border-signal hover:bg-signal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70 disabled:cursor-not-allowed disabled:border-white/18 disabled:text-muted"
            >
              <span>{status === "submitting" ? "Sending..." : "Send Signal"}</span>
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </button>
            <ReviewNote />
            <div className="min-h-6">
              {statusMessage ? (
                <p role="status" className={`text-sm leading-6 ${status === "error" ? "text-red-200" : "text-signal"}`}>
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
