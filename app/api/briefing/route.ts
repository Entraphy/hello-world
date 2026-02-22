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

export async function POST(request: Request) {
  const body = (await request.json()) as BriefingPayload;

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.email || !body.org || !body.role || !body.message) {
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
