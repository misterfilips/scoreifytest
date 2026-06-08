"use client";

import { useState } from "react";
import { Arrow } from "./Icons";
import CaseStudyAsset from "./CaseStudyAsset";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudies() {
  const [i, setI] = useState(0);
  const count = caseStudies.length;
  const active = caseStudies[i];
  const go = (d) => setI((prev) => (prev + d + count) % count);

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            How our clients scale on Meta
          </h2>
          <p className="mt-4 text-slate-600">
            Results from regulated health and wellness brands running on accounts Meta already trusts.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40">
            <div key={i} className="grid animate-fade-up gap-0 md:grid-cols-2">
              {/* content */}
              <div className="flex flex-col p-8 md:p-10">
                <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-deep">
                  {active.vertical}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl">
                  {active.headline}
                </h3>

                <div className="mt-7 grid grid-cols-3 gap-4">
                  {active.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-extrabold tracking-tight text-accent-deep md:text-3xl">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs leading-tight text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {active.quote && (
                  <blockquote className="mt-7 text-sm italic leading-relaxed text-slate-600">
                    <span aria-hidden="true" className="mb-1 block font-serif text-4xl leading-none text-accent/25">
                      &ldquo;
                    </span>
                    {active.quote.text}
                    <footer className="mt-3 not-italic text-xs font-semibold text-slate-700">
                      {active.quote.author}
                      {active.quote.role ? `, ${active.quote.role}` : ""}
                    </footer>
                  </blockquote>
                )}

                <a
                  href={`/case-studies/${active.slug}`}
                  className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-8 text-sm font-semibold text-accent-deep"
                >
                  Read case study
                  <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

              {/* visual */}
              <div className="relative border-t border-slate-200 md:border-l md:border-t-0">
                <CaseStudyAsset logo={active.logo} brand={active.brand} ratio="h-full min-h-[260px]" />
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous case study"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <Arrow className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {caseStudies.map((c, idx) => (
                <button
                  key={c.slug}
                  onClick={() => setI(idx)}
                  aria-label={`Go to ${c.brand}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-6 bg-accent" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next case study"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <Arrow className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="/case-studies" className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
              View all case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
