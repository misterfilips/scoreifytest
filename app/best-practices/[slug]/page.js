import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { guides, getGuide } from "@/content/bestPractices";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Scoreify`,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, type: "article" },
  };
}

export default async function BestPractice({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <ArticleLayout article={guide} kind="guide" backHref="/best-practices" backLabel="All best practices" />;
}
