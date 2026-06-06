import { notFound } from "next/navigation";
import VerticalPage from "@/components/VerticalPage";
import { verticals, getVertical } from "@/content/verticals";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) return {};
  return {
    title: `${v.name} | Scoreify`,
    description: v.heroSubtitle,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) notFound();
  return <VerticalPage vertical={vertical} />;
}
