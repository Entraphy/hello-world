"use client";

import { FormEvent, useState } from "react";

type TeamFormState = {
  name: string;
  email: string;
  location: string;
  currentRole: string;
  profile: string;
  built: string;
  energy: string;
  problem: string;
  discipline: string;
  relationship: string;
  note: string;
  companyUrl: string;
};

type TeamField = keyof TeamFormState;

const initialFormState: TeamFormState = {
  name: "",
  email: "",
  location: "",
  currentRole: "",
  profile: "",
  built: "",
  energy: "",
  problem: "",
  discipline: "",
  relationship: "",
  note: "",
  companyUrl: ""
};

const relationshipOptions = ["Founder-track", "Employee", "Advisor", "Contractor", "Strategic collaborator", "Other"];
const submissionError = "We could not submit the introduction. Please try again or contact Entraphy directly.";

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
    "mt-1.5 w-full border bg-black/20 px-3 py-2.5 text-sm leading-5 text-fg placeholder:text-muted/70",
    "transition focus:border-signal focus:bg-black/32 focus:outline-none focus:ring-1 focus:ring-signal/55",
    error ? "border-red-300/70" : "border-white/24 hover:border-white/36"
  ].join(" ");
}

function buildAccessPayload(form: TeamFormState) {
  return {
    name: form.name,
    organization: form.location,
    role: form.currentRole,
    email: form.email,
    accessType: "Early Builder",
    problem: form.problem,
    why: [`What they have built: ${form.built}`, `Work that gives them energy: ${form.energy}`, `Early-company contribution: ${form.discipline}`].join(
      "\n\n"
    ),
    website: form.profile,
    note: [`Preferred relationship: ${form.relationship}`, form.note ? `Optional note: ${form.note}` : ""].filter(Boolean).join("\n\n"),
    referral: "Team page",
    companyUrl: form.companyUrl,
    sourcePath: "/team"
  };
}

export function TeamIntroductionForm() {
  const [form, setForm] = useState<TeamFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<TeamField, string>>>({});

  function updateField(field: TeamField, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setStatusMessage("");
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<TeamField, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email.";
    if (!form.location.trim()) nextErrors.location = "Location is required.";
    if (!form.currentRole.trim()) nextErrors.currentRole = "Current role or background is required.";
    if (!form.built.trim()) nextErrors.built = "Share what you have built.";
    if (!form.energy.trim()) nextErrors.energy = "Share what kind of work gives you energy.";
    if (!form.problem.trim()) nextErrors.problem = "Share a problem you cannot stop thinking about.";
    if (!form.discipline.trim()) nextErrors.discipline = "Share how you would help an early company become stronger.";
    if (!form.relationship) nextErrors.relationship = "Select a preferred relationship.";

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
        body: JSON.stringify(buildAccessPayload(form))
      });

      const result = (await response.json()) as {
        ok?: boolean;
        errors?: Partial<Record<string, string>>;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setStatusMessage(submissionError);
        return;
      }

      setForm(initialFormState);
      setErrors({});
      setStatus("success");
      setStatusMessage("Introduction received. Entraphy reviews early-builder introductions manually.");
    } catch {
      setStatus("error");
      setStatusMessage(submissionError);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="team-name" required>
            Name
          </FieldLabel>
          <input
            id="team-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClass(Boolean(errors.name))}
            placeholder="Full name"
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
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.email}</p> : null}
        </div>

        <div>
          <FieldLabel htmlFor="team-location" required>
            Location
          </FieldLabel>
          <input
            id="team-location"
            name="location"
            autoComplete="address-level2"
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className={fieldClass(Boolean(errors.location))}
            placeholder="Location"
            aria-invalid={Boolean(errors.location)}
          />
          {errors.location ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.location}</p> : null}
        </div>

        <div>
          <FieldLabel htmlFor="team-profile">LinkedIn / GitHub / portfolio</FieldLabel>
          <input
            id="team-profile"
            name="profile"
            autoComplete="url"
            value={form.profile}
            onChange={(event) => updateField("profile", event.target.value)}
            className={fieldClass(Boolean(errors.profile))}
            placeholder="Optional"
            aria-invalid={Boolean(errors.profile)}
          />
          {errors.profile ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.profile}</p> : null}
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="team-current-role" required>
          Current role or background
        </FieldLabel>
        <input
          id="team-current-role"
          name="currentRole"
          autoComplete="organization-title"
          value={form.currentRole}
          onChange={(event) => updateField("currentRole", event.target.value)}
          className={fieldClass(Boolean(errors.currentRole))}
          placeholder="Current role or background"
          aria-invalid={Boolean(errors.currentRole)}
        />
        {errors.currentRole ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.currentRole}</p> : null}
      </div>

      <div>
        <FieldLabel htmlFor="team-built" required>
          What have you built?
        </FieldLabel>
        <textarea
          id="team-built"
          name="built"
          rows={3}
          value={form.built}
          onChange={(event) => updateField("built", event.target.value)}
          className={fieldClass(Boolean(errors.built))}
          placeholder="What have you built?"
          aria-invalid={Boolean(errors.built)}
        />
        {errors.built ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.built}</p> : null}
      </div>

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
          placeholder="What kind of work gives you energy?"
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
          placeholder="What problem can you not stop thinking about?"
          aria-invalid={Boolean(errors.problem)}
        />
        {errors.problem ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.problem}</p> : null}
      </div>

      <div>
        <FieldLabel htmlFor="team-discipline" required>
          How would you help an early company become more disciplined, more credible, or more capable?
        </FieldLabel>
        <textarea
          id="team-discipline"
          name="discipline"
          rows={4}
          value={form.discipline}
          onChange={(event) => updateField("discipline", event.target.value)}
          className={fieldClass(Boolean(errors.discipline))}
          placeholder="How would you help?"
          aria-invalid={Boolean(errors.discipline)}
        />
        {errors.discipline ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.discipline}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <div>
          <FieldLabel htmlFor="team-relationship" required>
            Preferred relationship
          </FieldLabel>
          <select
            id="team-relationship"
            name="relationship"
            value={form.relationship}
            onChange={(event) => updateField("relationship", event.target.value)}
            className={`${fieldClass(Boolean(errors.relationship))} cursor-pointer`}
            aria-invalid={Boolean(errors.relationship)}
          >
            <option value="">Select an option</option>
            {relationshipOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.relationship ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.relationship}</p> : null}
        </div>

        <div>
          <FieldLabel htmlFor="team-note">Optional note</FieldLabel>
          <textarea
            id="team-note"
            name="note"
            rows={2}
            value={form.note}
            onChange={(event) => updateField("note", event.target.value)}
            className={fieldClass()}
            placeholder="Optional note"
          />
        </div>
      </div>

      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="team-company-url">Company URL</label>
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center border border-signal/75 bg-transparent px-6 py-3 text-[0.68rem] font-semibold tracking-[0.22em] text-fg uppercase transition hover:border-signal hover:bg-signal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70 disabled:cursor-not-allowed disabled:border-white/18 disabled:text-muted"
        >
          {status === "submitting" ? "Submitting..." : "Introduce Yourself"}
        </button>
        {statusMessage ? (
          <p role="status" className={`text-sm leading-6 ${status === "error" ? "text-red-200" : "text-signal"}`}>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
