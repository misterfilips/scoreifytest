import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";
import { Arrow } from "./Icons";
import { Placeholder } from "./Hero";

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

function ScaffoldBody() {
  const sections = ["The challenge", "What we did", "The results"];
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        Full write-up coming soon
      </div>
      {sections.map((s) => (
        <div key={s} className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{s}</h2>
          <div className="mt-4 space-y-2.5">
            <div className="h-3.5 w-full rounded-full bg-slate-100" />
            <div className="h-3.5 w-11/12 rounded-full bg-slate-100" />
            <div className="h-3.5 w-4/5 rounded-full bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyPage({ study }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: study.summary,
    publisher: { "@type": "Organization", name: "Scoreify" },
  };

  return (
    <main className="relative">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 opacity-80" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <a href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
              <Arrow className="h-4 w-4 rotate-180" />
              All case studies
            </a>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-deep">
                {study.vertical}
              </span>
              <span className="text-sm font-medium text-slate-500">{study.brand}</span>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-4xl">
              {study.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{study.summary}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-12">
        <div className="container-x">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-white p-7 text-center">
                <div className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="pb-12">
        <div className="container-x">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Placeholder ratio="aspect-[16/9]" label={`${study.brand} visual`} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {study.quote && (
              <blockquote className="mb-10 border-l-2 border-accent/40 pl-5 text-lg italic leading-relaxed text-slate-700">
                “{study.quote.text}”
                <footer className="mt-3 not-italic text-sm font-semibold text-slate-600">
                  {study.quote.author}
                  {study.quote.role ? `, ${study.quote.role}` : ""}
                </footer>
              </blockquote>
            )}

            {study.body && study.body.length ? (
              study.body.map((block, i) => <Block key={i} block={block} />)
            ) : (
              <ScaffoldBody />
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
