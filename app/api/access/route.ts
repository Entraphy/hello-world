import { NextResponse } from "next/server";

const accessTypes = new Set(["Strategic Partner", "Pilot Candidate", "Advisor", "Early Builder", "Other"]);
const maxBodyLength = 16_000;
const defaultPublicFrom = "Entraphy Systems <no-reply@entraphy.com>";
const defaultNotificationTo = "support@entraphy.com";
const graphScope = "https://graph.microsoft.com/.default";
const graphBaseUrl = "https://graph.microsoft.com/v1.0";

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
  requestCategory?: unknown;
  helpArea?: unknown;
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
  requestCategory: string;
  helpArea: string;
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
  sourcePath: 120,
  requestCategory: 40,
  helpArea: 120
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanHeaderValue(value: string | undefined, maxLength = 320) {
  return value?.trim().replace(/[\r\n]/g, " ").slice(0, maxLength) ?? "";
}

function extractEmailAddress(value: string) {
  const bracketedAddress = value.match(/<([^<>]+)>/);
  return (bracketedAddress?.[1] ?? value).trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function confirmationEnabled() {
  return process.env.ENTRAPHY_SEND_CONFIRMATION?.trim().toLowerCase() === "true";
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
    requestCategory: cleanString(payload.requestCategory, fieldLimits.requestCategory),
    helpArea: cleanString(payload.helpArea, fieldLimits.helpArea),
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
    payload.requestCategory === "builder" ? "New Entraphy signal" : "New Entraphy partner request",
    "",
    `Name: ${payload.name}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Role: ${payload.role || "Not provided"}`,
    `Work email: ${payload.email}`,
    `Access type: ${payload.accessType}`,
    `Request category: ${payload.requestCategory || "Not provided"}`,
    `Help area: ${payload.helpArea || "Not provided"}`,
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

function subjectFor(payload: CleanAccessPayload) {
  if (payload.requestCategory === "builder" || payload.accessType === "Early Builder") {
    return `New Entraphy signal: ${payload.helpArea || payload.referral || "Early Builder"} \u2014 ${payload.name}`;
  }

  return `New Entraphy partner request: ${payload.accessType} \u2014 ${payload.organization || payload.name}`;
}

function confirmationSubjectFor(payload: CleanAccessPayload) {
  if (payload.requestCategory === "builder" || payload.accessType === "Early Builder") {
    return "Entraphy signal received";
  }

  return "Entraphy request received";
}

function confirmationBodyFor(payload: CleanAccessPayload) {
  if (payload.requestCategory === "builder" || payload.accessType === "Early Builder") {
    return [
      "Your signal has been received.",
      "",
      "Entraphy reviews early-team introductions manually. If there may be alignment, we will follow up.",
      "",
      "Submitting a signal does not create an employment relationship or guarantee a response.",
      "",
      "Entraphy Systems"
    ].join("\n");
  }

  return [
    "Your request has been received.",
    "",
    "Entraphy reviews partner and pilot-candidate requests manually. If there may be alignment, we will follow up.",
    "",
    "Submitting a request does not guarantee access, partnership, or a response.",
    "",
    "Entraphy Systems"
  ].join("\n");
}

function emailConfig() {
  return {
    tenantId: cleanHeaderValue(process.env.MICROSOFT_GRAPH_TENANT_ID, 120),
    clientId: cleanHeaderValue(process.env.MICROSOFT_GRAPH_CLIENT_ID, 120),
    clientSecret: cleanHeaderValue(process.env.MICROSOFT_GRAPH_CLIENT_SECRET, 800),
    notificationTo: cleanHeaderValue(process.env.ENTRAPHY_NOTIFICATION_TO ?? process.env.ENTRAPHY_ACCESS_INTAKE_TO ?? defaultNotificationTo),
    notificationFrom: cleanHeaderValue(process.env.ENTRAPHY_NOTIFICATION_FROM ?? process.env.ENTRAPHY_ACCESS_INTAKE_FROM ?? defaultPublicFrom),
    publicFrom: cleanHeaderValue(process.env.ENTRAPHY_PUBLIC_FROM ?? defaultPublicFrom)
  };
}

async function getMicrosoftGraphAccessToken({
  tenantId,
  clientId,
  clientSecret
}: {
  tenantId: string;
  clientId: string;
  clientSecret: string;
}) {
  const tokenResponse = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
      scope: graphScope
    })
  });

  if (!tokenResponse.ok) {
    return null;
  }

  const tokenBody: unknown = await tokenResponse.json();

  if (!isObject(tokenBody) || typeof tokenBody.access_token !== "string") {
    return null;
  }

  return tokenBody.access_token;
}

async function sendMicrosoftGraphEmail({
  accessToken,
  from,
  to,
  replyTo,
  subject,
  text
}: {
  accessToken: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}) {
  const sender = extractEmailAddress(from).toLowerCase();
  const recipients = to
    .split(/[;,]/)
    .map((recipient) => extractEmailAddress(recipient).toLowerCase())
    .filter(isValidEmail)
    .map((address) => ({ emailAddress: { address } }));

  if (!isValidEmail(sender) || recipients.length === 0) {
    return { ok: false };
  }

  const message: Record<string, unknown> = {
    subject,
    body: {
      contentType: "Text",
      content: text
    },
    toRecipients: recipients
  };

  if (replyTo && isValidEmail(replyTo)) {
    message.replyTo = [{ emailAddress: { address: replyTo } }];
  }

  const response = await fetch(`${graphBaseUrl}/users/${encodeURIComponent(sender)}/sendMail`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message,
      saveToSentItems: false
    })
  });

  return { ok: response.ok };
}

async function sendAccessEmail(payload: CleanAccessPayload) {
  const config = emailConfig();

  if (!config.tenantId || !config.clientId || !config.clientSecret || !config.notificationTo || !config.notificationFrom) {
    return { ok: false, status: 503, error: "Intake email is not configured." };
  }

  const accessToken = await getMicrosoftGraphAccessToken({
    tenantId: config.tenantId,
    clientId: config.clientId,
    clientSecret: config.clientSecret
  });

  if (!accessToken) {
    return { ok: false, status: 502, error: "Intake email service could not be authorized." };
  }

  const notification = await sendMicrosoftGraphEmail({
    accessToken,
    from: config.notificationFrom,
    to: config.notificationTo,
    replyTo: payload.email,
    subject: subjectFor(payload),
    text: formatEmailBody(payload)
  });

  if (!notification.ok) {
    return { ok: false, status: 502, error: "Intake email could not be sent." };
  }

  if (!confirmationEnabled()) {
    return { ok: true };
  }

  if (!config.publicFrom) {
    return { ok: false, status: 503, error: "Confirmation email is not configured." };
  }

  const confirmation = await sendMicrosoftGraphEmail({
    accessToken,
    from: config.publicFrom,
    to: payload.email,
    subject: confirmationSubjectFor(payload),
    text: confirmationBodyFor(payload)
  });

  if (!confirmation.ok) {
    return { ok: false, status: 502, error: "Confirmation email could not be sent." };
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
