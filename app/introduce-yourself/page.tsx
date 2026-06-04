import { redirect } from "next/navigation";

export default function IntroduceYourselfRedirect({ searchParams }: { searchParams?: { type?: string } }) {
  const type = searchParams?.type ? `?type=${searchParams.type}` : "";
  redirect(`/signal${type}`);
}
