"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  organization: string;
  role: string;
  email: string;
  accessType: string;
  problem: string;
  why: string;
  website: string;
  note: string;
  referral: string;
  companyUrl: string;
};

const initialFormState: FormState = {
  name: "",
  organization: "",
  role: "",
  email: "",
  accessType: "",
  problem: "",
  why: "",
  website: "",
  note: "",
  referral: "",
  companyUrl: ""
};

const accessTypes = ["Strategic Partner", "Pilot Customer", "Advisor", "Early Builder", "Other"];
const referralOptions = ["Selected introduction", "Entraphy team", "Partner", "Research", "Other"];
const submissionError = "We could not submit the request. Please try again or contact Entraphy directly.";

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

export function AccessIntakeForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "narrative", string>>>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setStatusMessage("");
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      if (field === "problem" || field === "why") {
        delete next.narrative;
      }
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState | "narrative", string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid work email.";
    if (!form.accessType) nextErrors.accessType = "Select an access path.";
    if (!form.problem.trim() && !form.why.trim()) {
      nextErrors.narrative = "Share either the problem you are solving or why Entraphy is relevant now.";
    }

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
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as {
        ok?: boolean;
        errors?: Partial<Record<keyof FormState | "narrative", string>>;
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

      setForm(initialFormState);
      setErrors({});
      setStatus("success");
      setStatusMessage("Access request received. Entraphy reviews requests manually.");
    } catch {
      setStatus("error");
      setStatusMessage(submissionError);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="access-name" required>
            Name
          </FieldLabel>
          <input
            id="access-name"
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
          <FieldLabel htmlFor="access-organization">
            Organization
          </FieldLabel>
          <input
            id="access-organization"
            name="organization"
            autoComplete="organization"
            value={form.organization}
            onChange={(event) => updateField("organization", event.target.value)}
            className={fieldClass(Boolean(errors.organization))}
            placeholder="Organization or company"
            aria-invalid={Boolean(errors.organization)}
          />
          {errors.organization ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.organization}</p> : null}
        </div>

        <div>
          <FieldLabel htmlFor="access-role">
            Role
          </FieldLabel>
          <input
            id="access-role"
            name="role"
            autoComplete="organization-title"
            value={form.role}
            onChange={(event) => updateField("role", event.target.value)}
            className={fieldClass(Boolean(errors.role))}
            placeholder="Your role"
            aria-invalid={Boolean(errors.role)}
          />
          {errors.role ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.role}</p> : null}
        </div>

        <div>
          <FieldLabel htmlFor="access-email" required>
            Work email
          </FieldLabel>
          <input
            id="access-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClass(Boolean(errors.email))}
            placeholder="name@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="access-type" required>
          Access type
        </FieldLabel>
        <select
          id="access-type"
          name="accessType"
          value={form.accessType}
          onChange={(event) => updateField("accessType", event.target.value)}
          className={`${fieldClass(Boolean(errors.accessType))} cursor-pointer`}
          aria-invalid={Boolean(errors.accessType)}
        >
          <option value="">Select an access path</option>
          {accessTypes.map((accessType) => (
            <option key={accessType} value={accessType}>
              {accessType}
            </option>
          ))}
        </select>
        {errors.accessType ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.accessType}</p> : null}
      </div>

      <div>
        <FieldLabel htmlFor="access-problem" required>
          What problem are you trying to solve?
        </FieldLabel>
        <textarea
          id="access-problem"
          name="problem"
          rows={3}
          value={form.problem}
          onChange={(event) => updateField("problem", event.target.value)}
          className={fieldClass(Boolean(errors.narrative))}
          placeholder="Briefly describe the problem or challenge."
          aria-invalid={Boolean(errors.narrative)}
        />
      </div>

      <div>
        <FieldLabel htmlFor="access-why" required>
          Why Entraphy?
        </FieldLabel>
        <textarea
          id="access-why"
          name="why"
          rows={3}
          value={form.why}
          onChange={(event) => updateField("why", event.target.value)}
          className={fieldClass(Boolean(errors.narrative))}
          placeholder="What draws you to Entraphy and why now?"
          aria-invalid={Boolean(errors.narrative)}
        />
        {errors.narrative ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.narrative}</p> : null}
      </div>

      <div>
        <FieldLabel htmlFor="access-website">LinkedIn / website (optional)</FieldLabel>
        <input
          id="access-website"
          name="website"
          type="url"
          autoComplete="url"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          className={fieldClass()}
          placeholder="https://linkedin.com/in/yourprofile or https://yourcompany.com"
        />
      </div>

      <div>
        <FieldLabel htmlFor="access-note">Additional note (optional)</FieldLabel>
        <textarea
          id="access-note"
          name="note"
          rows={3}
          value={form.note}
          onChange={(event) => updateField("note", event.target.value)}
          className={fieldClass()}
          placeholder="Anything else you would like us to know?"
        />
      </div>

      <div>
        <FieldLabel htmlFor="access-referral">How did you hear about Entraphy? (optional)</FieldLabel>
        <select
          id="access-referral"
          name="referral"
          value={form.referral}
          onChange={(event) => updateField("referral", event.target.value)}
          className={`${fieldClass()} cursor-pointer`}
        >
          <option value="">Select an option</option>
          {referralOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="access-company-url">Company URL</label>
        <input
          id="access-company-url"
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
          {status === "submitting" ? "Submitting..." : "Request Access"}
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
