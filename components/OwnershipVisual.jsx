"use client";

import { useInView, FloatCard, CheckMark } from "./AdVisualKit";

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-sm font-bold text-slate-900">{value}</div>
      <div className="text-[10px] text-slate-400">{label}</div>
    </div>
  );
}

export default function OwnershipVisual() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />

      {/* Profile mockup frame */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="ml-2 text-[11px] font-medium text-slate-400">Your page</span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-4">
            {/* blank avatar */}
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-white">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="9" r="3.2" />
                <path d="M5.5 19a6.5 6.5 0 0113 0" />
              </svg>
            </div>
            <div className="flex flex-1 justify-around">
              <Stat value="248" label="Posts" />
              <Stat value="84.2k" label="Followers" />
              <Stat value="12" label="Following" />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-sm font-bold text-slate-900">Your Brand</span>
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-white">
              <CheckMark className="h-2 w-2" />
            </span>
          </div>
          <div className="text-[11px] text-slate-400">@yourbrand · Health &amp; wellness</div>

          <div className="mt-3 flex gap-2">
            <div className="flex-1 rounded-lg bg-accent py-1.5 text-center text-[11px] font-semibold text-white">Following</div>
            <div className="flex-1 rounded-lg border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-600">Message</div>
          </div>

          {/* post grid */}
          <div className="mt-3 grid grid-cols-3 gap-1">
            {[6, 7, 8, 9, 10, 11].map((n) => (
              <div key={n} className="aspect-square overflow-hidden rounded-md bg-slate-100">
                <img
                  src={`/socials/${n}.png`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card: account roles */}
      <FloatCard inView={inView} delay={150} float="animate-float" className="-left-3 top-16 sm:-left-8">
        <div className="w-48 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">Account roles</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-800">Your brand</span>
              <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-accent-deep">Owner</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Scoreify</span>
              <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Account health</span>
            </div>
          </div>
        </div>
      </FloatCard>

      {/* Floating card: what stays yours */}
      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-3 bottom-14 sm:-right-8">
        <div className="w-44 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">Stays with you</div>
          <div className="mt-2 space-y-1.5">
            {["Page & followers", "Customer data", "Pixel & audiences"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckMark className="h-2.5 w-2.5" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </FloatCard>

      {/* Floating pill: ownership */}
      <FloatCard inView={inView} delay={480} float="animate-float-rev" className="-right-1 top-9 sm:right-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-lg shadow-slate-300/40 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          Nothing changes hands
        </div>
      </FloatCard>
    </div>
  );
}
