import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";
import { Arrow } from "./Icons";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function Block({ block }) {
  if (block.h2) return <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-900">{block.h2}</h2>;
  if (block.ul)
    return (
      <ul className="mt-4 space-y-2.5">
        {block.ul.map((li) => (
          <li key={li} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            {li}
          </li>
        ))}
      </ul>
    );
  return <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{block.p}</p>;
}

export default function ArticleLayout({ article, kind, backHref, backLabel }) {
  const published = article.date || article.updated;
  const modified = article.updated || article.date;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: published,
    dateModified: modified,
    author: { "@type": article.author ? "Person" : "Organization", name: article.author || "Scoreify" },
    publisher: { "@type": "Organization", name: "Scoreify" },
  };

  const faqLd = article.faq && article.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main className="relative">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <article className="pt-32 pb-8 md:pt-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <a href={backHref} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
              <Arrow className="h-4 w-4 rotate-180" />
              {backLabel}
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-deep">
                {article.category}
              </span>
              <span className="text-xs text-slate-400">
                {kind === "guide" ? "Updated " : ""}
                {formatDate(published)}
                {article.readTime ? ` · ${article.readTime}` : ""}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>
            {article.author && (
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
                  {article.author.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="text-sm font-medium text-slate-700">{article.author}</span>
              </div>
            )}
          </div>
        </div>
      </article>

      <div className="container-x pb-16">
        <div className="mx-auto max-w-3xl">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {faqLd && (
            <section className="mt-12 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-6">
                {article.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
