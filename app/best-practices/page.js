import ResourceIndex from "@/components/ResourceIndex";
import { guides } from "@/content/bestPractices";

export const metadata = {
  title: "Best practices | Scoreify",
  description:
    "Best practices for advertising regulated health verticals on Meta: compounded GLP-1, men's health, hair loss, hormone therapy, telehealth, and online pharmacy.",
};

export default function BestPracticesIndex() {
  return (
    <ResourceIndex
      eyebrow="Best practices"
      title="Playbooks for advertising regulated health on Meta"
      subtitle="Evergreen, practical guidance for each vertical we serve, plus Meta ads overall."
      basePath="/best-practices"
      items={guides}
      dateLabel="Updated"
    />
  );
}
