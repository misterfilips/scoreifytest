"use client";

import { useInView, FloatCard, AdFrame, CheckMark } from "./AdVisualKit";

export default function StabilityAdVisual() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />

      <AdFrame
        src="/hair-growth.png"
        alt="Men's hair regrowth before-and-after Meta ad running on a trusted Scoreify account"
      />

      {/* Floating card: account quality gauge */}
      <FloatCard inView={inView} delay={150} float="animate-float" className="-left-2 top-12 sm:-left-7">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">Account quality</div>
          <div className="relative mt-1">
            <svg viewBox="0 0 100 56" className="w-full">
              <path d="M8 50 A42 42 0 0 1 92 50" fill="none" stroke="#e2e8f0" strokeWidth="9" strokeLinecap="round" />
              <path
                d="M8 50 A42 42 0 0 1 92 50"
                fill="none"
                stroke="url(#gq)"
                strokeWidth="9"
                strokeLinecap="round"
                pathLength="1"
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: inView ? 0.12 : 1,
                  transition: "stroke-dashoffset 1100ms ease-out 400ms",
                }}
              />
              <defs>
                <linearGradient id="gq" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#34d399" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="-mt-3 text-center text-base font-bold tracking-tight text-slate-900">High</div>
          </div>
        </div>
      </FloatCard>

      {/* Floating card: same-day flag resolution timeline */}
      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-2 bottom-14 sm:-right-7">
        <div className="w-48 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-500">Flag resolved</span>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600">
              Same day
            </span>
          </div>
          <div className="mt-2.5 space-y-2">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 8v5M12 16.5v.5" />
                </svg>
              </span>
              <span className="text-slate-500">Flagged</span>
              <span className="ml-auto font-semibold text-slate-700">9:02 AM</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckMark className="h-2.5 w-2.5" />
              </span>
              <span className="text-slate-500">Cleared</span>
              <span className="ml-auto font-semibold text-slate-700">11:40 AM</span>
            </div>
          </div>
        </div>
      </FloatCard>

      {/* Floating pill: uptime, no bans */}
      <FloatCard inView={inView} delay={480} float="animate-float-rev" className="-right-1 top-9 sm:right-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-lg shadow-slate-300/40 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          312 days live · 0 bans
        </div>
      </FloatCard>
    </div>
  );
}
