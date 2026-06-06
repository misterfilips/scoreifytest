"use client";

import { useInView, FloatCard, AdFrame, ArrowDown, ArrowUp } from "./AdVisualKit";

export default function AdPerformanceVisual() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      {/* soft glow behind the asset */}
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />

      {/* The ad creative in its own shadowed container */}
      <AdFrame
        src="/peptides-1.png"
        alt="Collagen peptides Meta ad creative running on a trusted Scoreify account"
      />

      {/* Floating metric: cost per click dropping */}
      <FloatCard inView={inView} delay={150} float="animate-float" className="-left-2 top-16 sm:-left-6">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">Cost per click</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">$0.41</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
              <ArrowDown className="h-3 w-3" /> 38%
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-1000 ease-out"
              style={{ width: inView ? "38%" : "92%", transitionDelay: "400ms" }}
            />
          </div>
        </div>
      </FloatCard>

      {/* Floating metric: ROAS up */}
      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-2 bottom-16 sm:-right-6">
        <div className="w-36 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">ROAS</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">4.1×</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-[11px] font-semibold text-accent-deep">
              <ArrowUp className="h-3 w-3" /> 2.3×
            </span>
          </div>
          <div className="mt-2 flex items-end gap-1">
            {[35, 50, 42, 68, 80, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-blue-200 to-accent transition-all duration-700 ease-out"
                style={{ height: inView ? `${h * 0.22}px` : "4px", transitionDelay: `${500 + i * 70}ms` }}
              />
            ))}
          </div>
        </div>
      </FloatCard>

      {/* Floating pill: approved, not banned */}
      <FloatCard inView={inView} delay={480} float="animate-float-rev" className="-right-1 top-10 sm:right-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-lg shadow-slate-300/40 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7" />
            </svg>
          </span>
          Approved
        </div>
      </FloatCard>
    </div>
  );
}
