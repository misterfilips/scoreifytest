"use client";

import { useInView, FloatCard, ArrowUp, CheckMark } from "./AdVisualKit";

function CheckRow({ label }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <CheckMark className="h-2.5 w-2.5" />
      </span>
      {label}
    </div>
  );
}

export default function BoldAdVisual() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />

      {/* Reel-style frame holding the vertical weight-loss video */}
      <div className="relative mx-auto w-full max-w-[300px]">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="ml-2 text-[11px] font-medium text-slate-400">Sponsored · Reel</span>
          </div>
          <video
            className="block aspect-[9/16] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/vids/weight-loss-poster.jpg"
          >
            <source src="/vids/weight-loss.webm" type="video/webm" />
            <source src="/vids/weight-loss.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Floating card: policy review cleared on a restricted creative */}
        <FloatCard inView={inView} delay={150} float="animate-float" className="-left-4 top-16 sm:-left-12">
          <div className="w-44 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-500">Policy review</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                <CheckMark className="h-3 w-3" /> Approved
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5">
              <CheckRow label="Weight-loss claim" />
              <CheckRow label="Reel format" />
            </div>
          </div>
        </FloatCard>

        {/* Floating pill: nothing blocked */}
        <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-3 top-8 sm:-right-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-lg shadow-slate-300/40 backdrop-blur">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <CheckMark className="h-2.5 w-2.5" />
            </span>
            0 rejections
          </div>
        </FloatCard>

        {/* Floating card: daily spend scaling with headroom */}
        <FloatCard inView={inView} delay={460} float="animate-float-rev" className="-right-4 bottom-20 sm:-right-12">
          <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
            <div className="text-[11px] font-medium text-slate-500">Daily spend</div>
            <div className="mt-0.5 flex items-end justify-between">
              <div className="text-xl font-bold tracking-tight text-slate-900">$18.4k</div>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-[11px] font-semibold text-accent-deep">
                <ArrowUp className="h-3 w-3" /> uncapped
              </span>
            </div>
            <svg viewBox="0 0 120 34" className="mt-2 h-9 w-full" fill="none" preserveAspectRatio="none">
              <polyline
                points="2,30 24,26 46,28 68,18 90,12 118,3"
                stroke="url(#bln)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1, transition: "stroke-dashoffset 1100ms ease-out 450ms" }}
              />
              <defs>
                <linearGradient id="bln" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#93c5fd" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </FloatCard>
      </div>
    </div>
  );
}
