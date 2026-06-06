import ResourceIndex from "@/components/ResourceIndex";
import { posts } from "@/content/blog";

export const metadata = {
  title: "Blog | Scoreify",
  description:
    "Scoreify's blog on Meta advertising for regulated health brands: LegitScript whitelisting, HiVA-tier, compliance, policy, and pixel data.",
};

export default function BlogIndex() {
  return (
    <ResourceIndex
      eyebrow="Blog"
      title="Notes on advertising regulated health on Meta"
      subtitle="How Meta really treats health and wellness advertisers, and what to do about it."
      basePath="/blog"
      items={posts}
    />
  );
}
