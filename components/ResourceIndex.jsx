import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";
import { Arrow } from "./Icons";
import { formatDate } from "./ArticleLayout";

export default function ResourceIndex({ eyebrow, title, subtitle, basePath, items, dateLabel }) {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 opacity-80" />
        <div className="container-x relative text-center">
          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">{subtitle}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <a
                key={it.slug}
                href={`${basePath}/${it.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                    {it.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{it.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug text-slate-900">{it.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{it.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[11px] text-slate-400">
                    {dateLabel ? `${dateLabel} ` : ""}
                    {formatDate(it.date || it.updated)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-deep">
                    Read
                    <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
