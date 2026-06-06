import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.brand} case study | Scoreify`,
    description: study.summary,
    openGraph: { title: study.headline, description: study.summary, type: "article" },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
