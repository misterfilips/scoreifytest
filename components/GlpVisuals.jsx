"use client";

import { useInView, FloatCard, AdFrame, ArrowUp, ArrowDown, CheckMark } from "./AdVisualKit";

/* 01 — the weight-loss creative that converts */
export function GlpCreative() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <AdFrame src="/peptide-bold.png" alt="Compounded GLP-1 weight-loss ad converting on a trusted Scoreify account" />

      {/* ROAS up */}
      <FloatCard inView={inView} delay={150} float="animate-float" className="-left-2 top-14 sm:-left-7">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">ROAS</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">4.6×</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-[11px] font-semibold text-accent-deep">
              <ArrowUp className="h-3 w-3" /> 2.7×
            </span>
          </div>
          <div className="mt-2 flex items-end gap-1">
            {[34, 46, 40, 62, 76, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-blue-200 to-accent transition-all duration-700 ease-out"
                style={{ height: inView ? `${h * 0.22}px` : "4px", transitionDelay: `${450 + i * 70}ms` }}
              />
            ))}
          </div>
        </div>
      </FloatCard>

      {/* Purchases up */}
      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-2 bottom-14 sm:-right-7">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">Purchases</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">1,284</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
              <ArrowUp className="h-3 w-3" /> 31%
            </span>
          </div>
          <svg viewBox="0 0 120 28" className="mt-2 h-7 w-full" fill="none" preserveAspectRatio="none">
            <polyline
              points="2,24 24,21 46,22 68,13 90,9 118,2"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1, transition: "stroke-dashoffset 1000ms ease-out 500ms" }}
            />
          </svg>
        </div>
      </FloatCard>

      {/* Top performer pill */}
      <FloatCard inView={inView} delay={480} float="animate-float-rev" className="-right-1 top-9 sm:right-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-lg shadow-slate-300/40 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          Top performer
        </div>
      </FloatCard>
    </div>
  );
}

/* Reusable centered metric panel */
function Panel({ children }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
      {children}
    </div>
  );
}

/* 02 — lower cost per acquisition */
export function GlpCost() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Cost per acquisition</div>
            <div className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">$31</div>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
            <ArrowDown className="h-3.5 w-3.5" /> 42%
          </span>
        </div>

        <svg viewBox="0 0 260 96" className="mt-5 h-28 w-full" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="costfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#34d399" stopOpacity="0.28" />
              <stop offset="1" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M4 18 L56 34 L108 28 L160 52 L212 64 L256 78 L256 92 L4 92 Z"
            fill="url(#costfill)"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 900ms ease-out 500ms" }}
          />
          <polyline
            points="4,18 56,34 108,28 160,52 212,64 256,78"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1, transition: "stroke-dashoffset 1100ms ease-out 350ms" }}
          />
        </svg>

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Before Scoreify</span>
          <span>Now</span>
        </div>
      </Panel>

      <FloatCard inView={inView} delay={300} float="animate-float-rev" className="-right-2 -top-3 sm:-right-5">
        <div className="rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[10px] font-medium text-slate-500">CPM</div>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-slate-900">$8.40</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1 py-0.5 text-[10px] font-semibold text-emerald-600">
              <ArrowDown className="h-2.5 w-2.5" /> 36%
            </span>
          </div>
        </div>
      </FloatCard>
    </div>
  );
}

/* 03 — scale spend on what's working */
export function GlpScale() {
  const [ref, inView] = useInView();
  const bars = [26, 34, 30, 46, 52, 64, 72, 88, 100];
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Daily spend</div>
            <div className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">$24.8k</div>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-accent-deep">
            <ArrowUp className="h-3.5 w-3.5" /> scaling
          </span>
        </div>

        <div className="mt-5 flex h-28 items-end gap-1.5">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-200 to-accent transition-all duration-700 ease-out"
              style={{ height: inView ? `${h}%` : "6%", transitionDelay: `${300 + i * 60}ms` }}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          ROAS holding at 4.1× as spend climbs
        </div>
      </Panel>

      <FloatCard inView={inView} delay={300} float="animate-float" className="-left-2 -top-3 sm:-left-5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-xl shadow-slate-300/50 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          No spend caps
        </div>
      </FloatCard>
    </div>
  );
}

/* 04 — stay in market when the category gets squeezed */
export function GlpStability() {
  const [ref, inView] = useInView();
  const rows = [
    { label: "Status", value: "Active" },
    { label: "Restrictions", value: "0" },
    { label: "Live", value: "312 days" },
  ];
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-slate-500">Account health</div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        {/* quality gauge */}
        <div className="relative mx-auto mt-3 w-40">
          <svg viewBox="0 0 100 56" className="w-full">
            <path d="M8 50 A42 42 0 0 1 92 50" fill="none" stroke="#e2e8f0" strokeWidth="9" strokeLinecap="round" />
            <path
              d="M8 50 A42 42 0 0 1 92 50"
              fill="none"
              stroke="url(#gq2)"
              strokeWidth="9"
              strokeLinecap="round"
              pathLength="1"
              style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0.12 : 1, transition: "stroke-dashoffset 1100ms ease-out 350ms" }}
            />
            <defs>
              <linearGradient id="gq2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#34d399" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          <div className="-mt-4 text-center">
            <div className="text-lg font-bold tracking-tight text-slate-900">High</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Account quality</div>
          </div>
        </div>

        <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-500">{r.label}</span>
              <span className="font-semibold text-slate-900">{r.value}</span>
            </div>
          ))}
        </div>
      </Panel>

      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-2 bottom-4 sm:-right-5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-xl shadow-slate-300/50 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          Flag cleared · same day
        </div>
      </FloatCard>
    </div>
  );
}
