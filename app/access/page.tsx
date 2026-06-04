import { redirect } from "next/navigation";

function requestTarget(type?: string) {
  if (type === "partner" || type === "pilot" || type === "advisor" || type === "other") {
    return `/request-partner-access?type=${type}`;
  }

  if (type === "builder") {
    return "/signal";
  }

  return null;
}

export default function PrivateAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  const target = requestTarget(searchParams?.type);

  if (target) {
    redirect(target);
  }

  redirect("/partners");
}
