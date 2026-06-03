import { permanentRedirect } from "next/navigation";

const privateDevelopmentRoutes = [
  ["platform"],
  ["products"],
  ["company"],
  ["docs"],
  ["how-it-works"],
  ["use-cases"]
];

export function generateStaticParams() {
  return privateDevelopmentRoutes.map((slug) => ({ slug }));
}

export default function MarketingRoutePage() {
  permanentRedirect("/access");
}
