import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

const accessTypes = new Set(["Strategic Partner", "Pilot Candidate", "Advisor", "Early Builder", "Other"]);
const maxBodyLength = 16_000;
const resendEndpoint = "https://api.resend.com/emails";

type AccessPayload = {
  name?: unknown;
  organization?: unknown;
  role?: unknown;
  email?: unknown;
  accessType?: unknown;
  problem?: unknown;
  why?: unknown;
  website?: unknown;
  note?: unknown;
  referral?: unknown;
  companyUrl?: unknown;
  sourcePath?: unknown;
};

type CleanAccessPayload = {
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
  sourcePath: string;
  submittedAt: string;
};

type FieldErrors = Partial<Record<keyof AccessPayload | "narrative", string>>;

const fieldLimits: Record<Exclude<keyof AccessPayload, "companyUrl">, number> = {
  name: 120,
  organization: 160,
  role: 160,
  email: 254,
  accessType: 40,
  problem: 1_500,
  why: 1_500,
  website: 300,
  note: 1_500,
  referral: 120,
  sourcePath: 80
};

function isObject(value: unknown): value is AccessPayload {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validatePayload(payload: AccessPayload) {
  const cleaned: CleanAccessPayload = {
    name: cleanString(payload.name, fieldLimits.name),
    organization: cleanString(payload.organization, fieldLimits.organization),
    role: cleanString(payload.role, fieldLimits.role),
    email: cleanString(payload.email, fieldLimits.email).toLowerCase(),
    accessType: cleanString(payload.accessType, fieldLimits.accessType),
    problem: cleanString(payload.problem, fieldLimits.problem),
    why: cleanString(payload.why, fieldLimits.why),
    website: cleanString(payload.website, fieldLimits.website),
    note: cleanString(payload.note, fieldLimits.note),
    referral: cleanString(payload.referral, fieldLimits.referral),
    sourcePath: cleanString(payload.sourcePath, fieldLimits.sourcePath),
    submittedAt: new Date().toISOString()
  };

  const errors: FieldErrors = {};

  if (!cleaned.name) {
    errors.name = "Name is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)) {
    errors.email = "Enter a valid work email.";
  }

  if (!accessTypes.has(cleaned.accessType)) {
    errors.accessType = "Select an access path.";
  }

  if (!cleaned.problem && !cleaned.why) {
    errors.narrative = "Share either the problem you are solving or why Entraphy is relevant now.";
  }

  return { cleaned, errors };
}

function formatEmailBody(payload: CleanAccessPayload) {
  return [
    "New Entraphy private access request",
    "",
    `Name: ${payload.name}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Role: ${payload.role || "Not provided"}`,
    `Work email: ${payload.email}`,
    `Access type: ${payload.accessType}`,
    "",
    "Primary context:",
    payload.problem || "Not provided",
    "",
    "Additional context:",
    payload.why || "Not provided",
    "",
    `LinkedIn / website: ${payload.website || "Not provided"}`,
    `Optional note: ${payload.note || "Not provided"}`,
    `Referral: ${payload.referral || "Not provided"}`,
    `Submitted timestamp: ${payload.submittedAt}`,
    `Source path: ${payload.sourcePath || "/request-access"}`
  ].join("\n");
}

async function sendAccessEmail(payload: CleanAccessPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENTRAPHY_ACCESS_INTAKE_TO;
  const from = process.env.ENTRAPHY_ACCESS_INTAKE_FROM;

  if (!apiKey || !to || !from) {
    return { ok: false, status: 503, error: "Access intake email is not configured." };
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": randomUUID()
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New Entraphy ${payload.accessType === "Early Builder" ? "early builder introduction" : "private access request"}: ${
        payload.organization || payload.name
      }`,
      text: formatEmailBody(payload)
    })
  });

  if (!response.ok) {
    return { ok: false, status: 502, error: "Access request email could not be sent." };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  const rawBody = await request.text();

  if (rawBody.length > maxBodyLength) {
    return NextResponse.json({ ok: false, error: "Request is too large." }, { status: 413 });
  }

  let parsedBody: unknown;

  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isObject(parsedBody)) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof parsedBody.companyUrl === "string" && parsedBody.companyUrl.trim()) {
    return NextResponse.json({ ok: true });
  }

  const { cleaned, errors } = validatePayload(parsedBody);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const emailResult = await sendAccessEmail(cleaned);

    if (!emailResult.ok) {
      return NextResponse.json({ ok: false, error: emailResult.error }, { status: emailResult.status });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Access request could not be submitted." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
