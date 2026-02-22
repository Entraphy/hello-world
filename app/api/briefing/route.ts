import { NextResponse } from "next/server";

type BriefingPayload = {
  name?: string;
  email?: string;
  org?: string;
  role?: string;
  message?: string;
  website?: string;
};

const submissions: Array<Omit<Required<BriefingPayload>, "website"> & { submittedAt: string }> = [];

function isBriefingPayload(value: unknown): value is BriefingPayload {
  return typeof value === "object" && value !== null;
}

export async function POST(request: Request) {
  let parsedBody: unknown;

  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isBriefingPayload(parsedBody)) {
    return NextResponse.json({ ok: false, error: "Request body must be a JSON object." }, { status: 400 });
  }

  const body = parsedBody;

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.org !== "string" ||
    typeof body.role !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.org.trim() ||
    !body.role.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  submissions.push({
    name: body.name,
    email: body.email,
    org: body.org,
    role: body.role,
    message: body.message,
    submittedAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
