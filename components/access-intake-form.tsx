"use client";

import { FormEvent, useMemo, useState } from "react";

type AccessType = "Strategic Partner" | "Pilot Candidate" | "Advisor" | "Early Builder" | "Other";

type AccessPath = {
  slug: string;
  accessType: AccessType;
  title: string;
  body: string;
  intro: string;
  questions: string[];
};

type FormState = {
  name: string;
  organization: string;
  role: string;
  email: string;
  accessType: AccessType;
  narrativeOne: string;
  narrativeTwo: string;
  narrativeThree: string;
  website: string;
  note: string;
  companyUrl: string;
};

type FieldKey = keyof FormState | "narrative";

const accessPaths: AccessPath[] = [
  {
    slug: "partner",
    accessType: "Strategic Partner",
    title: "Strategic Partner",
    body: "For institutions shaping trusted autonomy in high-consequence settings.",
    intro: "For selected organizations exploring strategic alignment, confidential access, or early partnership posture.",
    questions: [
      "What problem are you trying to solve?",
      "What kind of organization or environment are you representing?",
      "Why Entraphy?"
    ]
  },
  {
    slug: "pilot",
    accessType: "Pilot Candidate",
    title: "Pilot Candidate",
    body: "For teams preparing a careful private evaluation.",
    intro: "For high-consequence environments considering whether a private evaluation would be useful.",
    questions: ["What kind of environment are you preparing for?", "What would make a private evaluation useful?", "Why Entraphy?"]
  },
  {
    slug: "advisor",
    accessType: "Advisor",
    title: "Advisor",
    body: "For experts who can help shape category, strategy, and market entry.",
    intro: "For selected experts who may be able to help Entraphy become more disciplined, credible, or precise.",
    questions: ["Where do you believe you could be most helpful?", "What relevant background should we understand?", "Why Entraphy?"]
  },
  {
    slug: "builder",
    accessType: "Early Builder",
    title: "Early Builder",
    body: "For high-judgment builders interested in early company-formation work.",
    intro: "For people with unusual judgment, discretion, and builder energy who may belong close to the foundation.",
    questions: [
      "What have you built?",
      "What kind of work gives you energy?",
      "How would you help an early company become more disciplined, more credible, or more capable?"
    ]
  },
  {
    slug: "other",
    accessType: "Other",
    title: "Other",
    body: "For careful inquiries that do not fit the other paths.",
    intro: "For selected inquiries that need a private route into Entraphy.",
    questions: ["What brings you to Entraphy?", "What would you like us to know?"]
  }
];

const defaultPath = accessPaths[0];
const submissionError = "We could not submit the request. Please try again or contact Entraphy directly.";

function pathFromType(type?: string) {
  return accessPaths.find((path) => path.slug === type) ?? defaultPath;
}

function isKnownType(type?: string) {
  return accessPaths.some((path) => path.slug === type);
}

function pathFromAccessType(accessType: string) {
  return accessPaths.find((path) => path.accessType === accessType) ?? defaultPath;
}

function createInitialForm(accessPath: AccessPath): FormState {
  return {
    name: "",
    organization: "",
    role: "",
    email: "",
    accessType: accessPath.accessType,
    narrativeOne: "",
    narrativeTwo: "",
    narrativeThree: "",
    website: "",
    note: "",
    companyUrl: ""
  };
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
    "mt-1.5 w-full border bg-black/20 px-3 py-2.5 text-sm leading-5 text-fg placeholder:text-muted/70",
    "transition focus:border-signal focus:bg-black/32 focus:outline-none focus:ring-1 focus:ring-signal/55",
    error ? "border-red-300/70" : "border-white/24 hover:border-white/36"
  ].join(" ");
}

function buildNarrative(question: string, answer: string) {
  return `${question}\n${answer.trim()}`;
}

function sourcePathFor(accessPath: AccessPath) {
  return `/access?type=${accessPath.slug}`;
}

function updateUrl(accessPath: AccessPath) {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", sourcePathFor(accessPath));
}

export function AccessIntakeForm({ initialType }: { initialType?: string }) {
  const initialPath = useMemo(() => pathFromType(initialType), [initialType]);
  const [selectedPath, setSelectedPath] = useState<AccessPath>(initialPath);
  const [sourcePath, setSourcePath] = useState(isKnownType(initialType) ? sourcePathFor(initialPath) : "/access");
  const [form, setForm] = useState<FormState>(() => createInitialForm(initialPath));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  function resetFeedback() {
    setStatus("idle");
    setStatusMessage("");
  }

  function selectPath(accessPath: AccessPath, syncUrl = true) {
    setSelectedPath(accessPath);
    setForm((current) => ({
      ...current,
      accessType: accessPath.accessType,
      narrativeOne: "",
      narrativeTwo: "",
      narrativeThree: ""
    }));
    setErrors({});
    resetFeedback();
    setSourcePath(sourcePathFor(accessPath));
    if (syncUrl) updateUrl(accessPath);
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    resetFeedback();
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      if (field === "narrativeOne" || field === "narrativeTwo" || field === "narrativeThree") {
        delete next.narrative;
      }
      return next;
    });

    if (field === "accessType") {
      selectPath(pathFromAccessType(value));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldKey, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid work email.";
    if (!form.accessType) nextErrors.accessType = "Select an access path.";

    selectedPath.questions.forEach((question, index) => {
      const key = index === 0 ? "narrativeOne" : index === 1 ? "narrativeTwo" : "narrativeThree";
      if (!form[key].trim()) {
        nextErrors[key] = `Answer: ${question}`;
      }
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const additionalNarrative = selectedPath.questions
      .slice(1)
      .map((question, index) => buildNarrative(question, index === 0 ? form.narrativeTwo : form.narrativeThree))
      .join("\n\n");

    try {
      const response = await fetch("/api/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          organization: form.organization,
          role: form.role,
          email: form.email,
          accessType: selectedPath.accessType,
          problem: buildNarrative(selectedPath.questions[0], form.narrativeOne),
          why: additionalNarrative,
          website: form.website,
          note: form.note,
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

      setForm(createInitialForm(selectedPath));
      setErrors({});
      setStatus("success");
      setStatusMessage(
        selectedPath.accessType === "Early Builder"
          ? "Introduction received. Entraphy reviews early-builder introductions manually."
          : "Access request received. Entraphy reviews requests manually."
      );
    } catch {
      setStatus("error");
      setStatusMessage(submissionError);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-signal uppercase">Access paths</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{selectedPath.intro}</p>
          </div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-fg/55 uppercase">Selected: {selectedPath.title}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {accessPaths.map((path) => {
            const isSelected = path.accessType === selectedPath.accessType;

            return (
              <button
                key={path.slug}
                type="button"
                onClick={() => selectPath(path)}
                aria-pressed={isSelected}
                className={[
                  "min-h-44 border p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70",
                  isSelected ? "border-signal/75 bg-signal/[0.07]" : "border-white/20 bg-black/18 hover:border-signal/45 hover:bg-white/[0.025]"
                ].join(" ")}
              >
                <span className="font-mono text-[10px] tracking-[0.24em] text-signal uppercase">{path.title}</span>
                <span className="mt-5 block text-sm leading-6 text-muted">{path.body}</span>
              </button>
            );
          })}
        </div>
      </div>

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
            <FieldLabel htmlFor="access-email" required>
              Email
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

          <div>
            <FieldLabel htmlFor="access-organization">Organization / affiliation</FieldLabel>
            <input
              id="access-organization"
              name="organization"
              autoComplete="organization"
              value={form.organization}
              onChange={(event) => updateField("organization", event.target.value)}
              className={fieldClass(Boolean(errors.organization))}
              placeholder="Organization or affiliation"
              aria-invalid={Boolean(errors.organization)}
            />
            {errors.organization ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.organization}</p> : null}
          </div>

          <div>
            <FieldLabel htmlFor="access-role">Role / background</FieldLabel>
            <input
              id="access-role"
              name="role"
              autoComplete="organization-title"
              value={form.role}
              onChange={(event) => updateField("role", event.target.value)}
              className={fieldClass(Boolean(errors.role))}
              placeholder="Role or background"
              aria-invalid={Boolean(errors.role)}
            />
            {errors.role ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.role}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[1fr_1fr]">
          <div>
            <FieldLabel htmlFor="access-website">LinkedIn / website</FieldLabel>
            <input
              id="access-website"
              name="website"
              type="url"
              autoComplete="url"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              className={fieldClass()}
              placeholder="https://linkedin.com/in/name or https://example.com"
            />
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
              {accessPaths.map((path) => (
                <option key={path.accessType} value={path.accessType}>
                  {path.accessType}
                </option>
              ))}
            </select>
            {errors.accessType ? <p className="mt-2 text-xs leading-5 text-red-200">{errors.accessType}</p> : null}
          </div>
        </div>

        <div className="border-t border-white/12 pt-5">
          <p className="font-mono text-[10px] tracking-[0.24em] text-signal uppercase">{selectedPath.title} context</p>
        </div>

        {selectedPath.questions.map((question, index) => {
          const key = index === 0 ? "narrativeOne" : index === 1 ? "narrativeTwo" : "narrativeThree";

          return (
            <div key={question}>
              <FieldLabel htmlFor={`access-${key}`} required>
                {question}
              </FieldLabel>
              <textarea
                id={`access-${key}`}
                name={key}
                rows={index === 2 ? 4 : 3}
                value={form[key]}
                onChange={(event) => updateField(key, event.target.value)}
                className={fieldClass(Boolean(errors[key] || errors.narrative))}
                placeholder={question}
                aria-invalid={Boolean(errors[key] || errors.narrative)}
              />
              {errors[key] ? <p className="mt-2 text-xs leading-5 text-red-200">{errors[key]}</p> : null}
            </div>
          );
        })}

        {errors.narrative ? <p className="text-xs leading-5 text-red-200">{errors.narrative}</p> : null}

        <div>
          <FieldLabel htmlFor="access-note">Optional note</FieldLabel>
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
    </div>
  );
}
