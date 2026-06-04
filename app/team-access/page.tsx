import { redirect } from "next/navigation";

export default function LegacyTeamAccessPage({ searchParams }: { searchParams?: { type?: string } }) {
  const type = searchParams?.type ? `?type=${searchParams.type}` : "";
  redirect(`/signal${type}`);
}
