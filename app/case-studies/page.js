import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Arrow } from "@/components/Icons";
import { caseStudies } from "@/content/caseStudies";

export const metadata = {
  title: "Case studies | Scoreify",
  description:
    "How regulated health and wellness brands scale on Meta with Scoreify: real CPA, CPM, ROAS, and approval results.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 opacity-80" />
        <div className="container-x relative text-center">
          <span className="eyebrow">Case studies</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Real brands, real scale
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            How regulated health and wellness brands grow on accounts Meta already trusts.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <a
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-deep">
                    {c.vertical}
                  </span>
                  <span className="text-sm font-medium text-slate-500">{c.brand}</span>
                </div>
                <h2 className="mt-5 text-xl font-bold leading-snug text-slate-900">{c.headline}</h2>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs leading-tight text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep">
                  Read case study
                  <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
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
