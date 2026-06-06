"use client";

import { useInView, FloatCard, AdFrame, ArrowUp, ArrowDown, CheckMark } from "./AdVisualKit";
import { Placeholder } from "./Hero";

/* ---------- shared bits ---------- */

function Panel({ children }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
      {children}
    </div>
  );
}

function CheckRow({ label, inView, delay = 0 }) {
  return (
    <div
      className="flex items-center gap-2 text-xs font-medium text-slate-700 transition-all duration-500"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-6px)", transitionDelay: `${delay}ms` }}
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <CheckMark className="h-2.5 w-2.5" />
      </span>
      {label}
    </div>
  );
}

/* ---------- 01: creative that converts ---------- */

function Creative({ cfg }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />

      {cfg.image ? (
        <AdFrame src={cfg.image} alt={cfg.alt || "Ad creative on a trusted Scoreify account"} />
      ) : (
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="ml-2 text-[11px] font-medium text-slate-400">Sponsored</span>
          </div>
          <div className={`flex aspect-square w-full flex-col items-center justify-center bg-gradient-to-br ${cfg.gradient || "from-blue-500 to-accent-deep"} p-7 text-center`}>
            <div className="text-2xl font-extrabold leading-tight text-white">{cfg.headline}</div>
            <div className="mt-2 max-w-[16rem] text-sm text-white/85">{cfg.sub}</div>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900">
              {cfg.cta || "Learn more"}
              <ArrowUp className="h-3 w-3 rotate-90" />
            </div>
          </div>
        </div>
      )}

      {/* ROAS */}
      <FloatCard inView={inView} delay={150} float="animate-float" className="-left-2 top-14 sm:-left-7">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">ROAS</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">{cfg.roas.value}</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-[11px] font-semibold text-accent-deep">
              <ArrowUp className="h-3 w-3" /> {cfg.roas.delta}
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

      {/* count metric */}
      <FloatCard inView={inView} delay={320} float="animate-float-rev" className="-right-2 bottom-14 sm:-right-7">
        <div className="w-40 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="text-[11px] font-medium text-slate-500">{cfg.count.label}</div>
          <div className="mt-0.5 flex items-end justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-900">{cfg.count.value}</div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
              <ArrowUp className="h-3 w-3" /> {cfg.count.delta}
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

      {/* pill */}
      <FloatCard inView={inView} delay={480} float="animate-float-rev" className="-right-1 top-9 sm:right-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-lg shadow-slate-300/40 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          {cfg.pill || "Top performer"}
        </div>
      </FloatCard>
    </div>
  );
}

/* ---------- approvals ---------- */

function Approval({ cfg }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">{cfg.title || "Ad review"}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
            <CheckMark className="h-3 w-3" /> Approved
          </span>
        </div>

        <div className="mt-5 flex flex-col items-center text-center">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white transition-all duration-500"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.6)", transitionDelay: "200ms" }}
          >
            <CheckMark className="h-7 w-7" />
          </span>
          <div className="mt-3 text-base font-bold text-slate-900">Cleared review</div>
        </div>

        <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
          {cfg.items.map((t, i) => (
            <CheckRow key={t} label={t} inView={inView} delay={350 + i * 120} />
          ))}
        </div>
      </Panel>

      <FloatCard inView={inView} delay={300} float="animate-float-rev" className="-right-2 top-6 sm:-right-5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-xl shadow-slate-300/50 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          0 rejections
        </div>
      </FloatCard>
    </div>
  );
}

/* ---------- cost ---------- */

function Cost({ cfg }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">{cfg.label}</div>
            <div className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">{cfg.value}</div>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
            <ArrowDown className="h-3.5 w-3.5" /> {cfg.delta}
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
          <div className="text-[10px] font-medium text-slate-500">{cfg.chip.label}</div>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-slate-900">{cfg.chip.value}</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1 py-0.5 text-[10px] font-semibold text-emerald-600">
              <ArrowDown className="h-2.5 w-2.5" /> {cfg.chip.delta}
            </span>
          </div>
        </div>
      </FloatCard>
    </div>
  );
}

/* ---------- scale ---------- */

function Scale({ cfg }) {
  const [ref, inView] = useInView();
  const bars = [26, 34, 30, 46, 52, 64, 72, 88, 100];
  return (
    <div ref={ref} className="relative mx-auto max-w-sm px-6 py-10">
      <div className="glow pointer-events-none absolute inset-0 scale-110 opacity-80" />
      <Panel>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Daily spend</div>
            <div className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">{cfg.value}</div>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-accent-deep">
            <ArrowUp className="h-3.5 w-3.5" /> {cfg.delta || "scaling"}
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
          {cfg.note}
        </div>
      </Panel>

      <FloatCard inView={inView} delay={300} float="animate-float" className="-left-2 -top-3 sm:-left-5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-xl shadow-slate-300/50 backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
            <CheckMark className="h-2.5 w-2.5" />
          </span>
          {cfg.pill || "No spend caps"}
        </div>
      </FloatCard>
    </div>
  );
}

/* ---------- account health ---------- */

function Health({ cfg }) {
  const [ref, inView] = useInView();
  const rows = [
    { label: "Status", value: "Active" },
    { label: "Restrictions", value: "0" },
    { label: "Live", value: cfg.live || "300+ days" },
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

        <div className="relative mx-auto mt-3 w-40">
          <svg viewBox="0 0 100 56" className="w-full">
            <path d="M8 50 A42 42 0 0 1 92 50" fill="none" stroke="#e2e8f0" strokeWidth="9" strokeLinecap="round" />
            <path
              d="M8 50 A42 42 0 0 1 92 50"
              fill="none"
              stroke="url(#gqh)"
              strokeWidth="9"
              strokeLinecap="round"
              pathLength="1"
              style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0.12 : 1, transition: "stroke-dashoffset 1100ms ease-out 350ms" }}
            />
            <defs>
              <linearGradient id="gqh" x1="0" y1="0" x2="1" y2="0">
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

/* ---------- per-vertical config (4 blocks each) ---------- */

const TYPES = { creative: Creative, approval: Approval, cost: Cost, scale: Scale, health: Health };

const config = {
  "compounded-glp-1": [
    { type: "creative", image: "/peptide-bold.png", alt: "Compounded GLP-1 weight-loss ad", roas: { value: "4.6×", delta: "2.7×" }, count: { label: "Purchases", value: "1,284", delta: "31%" } },
    { type: "cost", label: "Cost per acquisition", value: "$31", delta: "42%", chip: { label: "CPM", value: "$8.40", delta: "36%" } },
    { type: "scale", value: "$24.8k", note: "ROAS holding at 4.1× as spend climbs" },
    { type: "health", live: "312 days" },
  ],
  "mens-sexual-health": [
    { type: "approval", title: "Ad review", items: ["Compliant ED claim", "Direct messaging", "Performance angle"] },
    { type: "cost", label: "Cost per acquisition", value: "$42", delta: "39%", chip: { label: "CPM", value: "$9.10", delta: "33%" } },
    { type: "scale", value: "$16.2k", note: "ROAS steady at 4.3× as spend climbs" },
    { type: "health", live: "288 days" },
  ],
  "hair-loss": [
    { type: "creative", image: "/hair-growth.png", alt: "Hair regrowth before-and-after ad", roas: { value: "4.4×", delta: "2.4×" }, count: { label: "Orders", value: "1,510", delta: "29%" } },
    { type: "approval", title: "Ad review", items: ["Before / after format", "Finasteride claim", "Minoxidil claim"] },
    { type: "cost", label: "Cost per acquisition", value: "$28", delta: "44%", chip: { label: "CPM", value: "$7.90", delta: "38%" } },
    { type: "health", live: "305 days" },
  ],
  "hormone-therapy": [
    { type: "creative", gradient: "from-teal-500 to-blue-600", headline: "Feel like yourself again", sub: "Hormone therapy, prescribed online", cta: "Get started", roas: { value: "4.0×", delta: "2.1×" }, count: { label: "Patients", value: "860", delta: "24%" } },
    { type: "cost", label: "Cost per patient", value: "$54", delta: "35%", chip: { label: "CPM", value: "$9.80", delta: "30%" } },
    { type: "scale", value: "$12.5k", note: "ROAS steady at 3.8× as spend climbs" },
    { type: "health", live: "276 days" },
  ],
  "telehealth": [
    { type: "approval", title: "Service review", items: ["Weight loss", "Men's health", "Dermatology"] },
    { type: "scale", value: "$31.4k", note: "ROAS holding at 4.2× across services" },
    { type: "cost", label: "Cost per acquisition", value: "$37", delta: "40%", chip: { label: "CPM", value: "$8.70", delta: "34%" } },
    { type: "health", live: "330 days" },
  ],
  "online-pharmacy": [
    { type: "approval", title: "Catalog review", items: ["Rx products", "Compounded items", "Supplements"] },
    { type: "cost", label: "Cost per order", value: "$24", delta: "43%", chip: { label: "CPM", value: "$7.40", delta: "37%" } },
    { type: "scale", value: "$27.9k", note: "ROAS holding at 4.0× across the catalog" },
    { type: "health", live: "342 days" },
  ],
};

export default function ShowcaseVisual({ slug, index, label }) {
  const entry = config[slug]?.[index];
  if (!entry) {
    return (
      <div className="relative">
        <div className="glow pointer-events-none absolute -inset-8 opacity-70" />
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
          <Placeholder ratio="aspect-[4/3]" label={label} />
        </div>
      </div>
    );
  }
  const Component = TYPES[entry.type];
  return <Component cfg={entry} />;
}
