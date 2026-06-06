import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { posts, getPost } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Scoreify Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <ArticleLayout article={post} kind="blog" backHref="/blog" backLabel="All posts" />;
}
