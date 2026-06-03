import { redirect } from "next/navigation";

function partnerTarget(type?: string) {
  if (type === "pilot" || type === "advisor" || type === "other") {
    return `/request-partner-access?type=${type}`;
  }

  return "/request-partner-access?type=partner";
}

export default function LegacyPartnerAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  redirect(partnerTarget(searchParams?.type));
}
