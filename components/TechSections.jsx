"use client";

import { useEffect, useState } from "react";
import { useInView } from "./AdVisualKit";
import { Layers, ShieldCheck, Gauge, Eye, Bolt } from "./Icons";

/* ---------- helpers ---------- */

function useCountUp(target, inView, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return val;
}

function Check({ className = "h-3 w-3" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}
function X({ className = "h-3 w-3" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function Widget({ children }) {
  return (
    <div className="relative">
      <div className="glow pointer-events-none absolute -inset-6 opacity-60" />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">{children}</div>
    </div>
  );
}

/* ---------- widgets ---------- */

function TierLadder({ inView }) {
  const tiers = [
    { name: "Platinum", cpm: "$18", w: 28, you: true },
    { name: "Gold", cpm: "$30", w: 47 },
    { name: "Silver", cpm: "$45", w: 70 },
    { name: "Bronze", cpm: "$64", w: 100 },
  ];
  return (
    <Widget>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">Relative CPM by trust tier</span>
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-accent-deep">HiVA</span>
      </div>
      <div className="mt-4 space-y-3">
        {tiers.map((t, i) => (
          <div key={t.name} className="flex items-center gap-3">
            <span className={`w-16 text-xs font-semibold ${t.you ? "text-accent-deep" : "text-slate-500"}`}>{t.name}</span>
            <div className="relative h-7 flex-1 overflow-hidden rounded-lg bg-slate-100">
              <div
                className={`flex h-full items-center justify-end rounded-lg pr-2 transition-all duration-1000 ease-out ${
                  t.you ? "bg-gradient-to-r from-accent to-accent-deep" : "bg-slate-300"
                }`}
                style={{ width: inView ? `${t.w}%` : "0%", transitionDelay: `${i * 120}ms` }}
              >
                {t.you && <span className="text-[10px] font-bold text-white">Scoreify</span>}
              </div>
            </div>
            <span className={`w-10 text-right text-xs font-semibold ${t.you ? "text-slate-900" : "text-slate-400"}`}>{t.cpm}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">Same campaign, different tier, different CPM.</p>
    </Widget>
  );
}

function Credentialing({ inView }) {
  const steps = ["LegitScript certified", "Entity-level whitelisting", "High-trust agency submission"];
  return (
    <Widget>
      <div className="text-xs font-medium text-slate-500">Advertiser status</div>
      <div className="mt-4 space-y-2.5">
        {steps.map((s, i) => (
          <div
            key={s}
            className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-500"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(6px)", transitionDelay: `${i * 200}ms` }}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-3 w-3" />
            </span>
            {s}
          </div>
        ))}
      </div>
      <div
        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-blue-50 py-3 text-sm font-bold text-accent-deep transition-all duration-500"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.85)", transitionDelay: "700ms" }}
      >
        <ShieldCheck className="h-4 w-4" />
        Verified advertiser
      </div>
      <p className="mt-3 text-center text-xs text-slate-400">Most accounts stop at basic authorization.</p>
    </Widget>
  );
}

function SignalMonitor({ inView }) {
  const count = useCountUp(43, inView);
  const signals = [
    "HiVA tier", "ACE warnings", "CAR score", "Feedback score",
    "Restriction history", "Policy trend", "Pixel quality", "Spend velocity",
  ];
  return (
    <Widget>
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-3xl font-extrabold tracking-tight text-slate-900">{count}+</span>
          <span className="ml-2 text-xs text-slate-500">signals, monitored daily</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {signals.map((s, i) => (
          <div
            key={s}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition-all duration-400"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(6px)", transitionDelay: `${300 + i * 80}ms` }}
          >
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
            {s}
          </div>
        ))}
      </div>
    </Widget>
  );
}

function PixelFlow({ inView }) {
  const events = ["Purchase", "Subscribe", "Add to cart", "Lead"];
  const Col = ({ title, ok, tint }) => (
    <div className={`rounded-xl border p-3.5 ${tint}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{title}</div>
      <div className="mt-3 space-y-2">
        {events.map((e, i) => (
          <div
            key={e}
            className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-500"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(8px)", transitionDelay: `${i * 120 + (ok ? 200 : 0)}ms` }}
          >
            {e}
            {ok ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-2.5 w-2.5" />
              </span>
            ) : (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-50 text-red-400">
                <X className="h-2.5 w-2.5" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Widget>
      <div className="grid grid-cols-2 gap-3">
        <Col title="Cold account" ok={false} tint="border-slate-200 bg-slate-50" />
        <Col title="Scoreify" ok tint="border-accent/30 bg-blue-50/50" />
      </div>
      <p className="mt-4 text-xs text-slate-500">Same pixel. Credentialed accounts keep the signal Meta strips elsewhere.</p>
    </Widget>
  );
}

function Escalation({ inView }) {
  const Pill = ({ children, tone }) => (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        tone === "bad" ? "bg-red-50 text-red-500" : tone === "good" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
  const Arrow = () => (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-none text-slate-300" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Row = ({ children, delay, faded }) => (
    <div
      className="flex flex-wrap items-center gap-2 transition-all duration-600"
      style={{ opacity: inView ? (faded ? 0.55 : 1) : 0, transform: inView ? "none" : "translateY(8px)", transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
  return (
    <Widget>
      <div className="text-xs font-medium text-slate-500">When a compliant ad gets flagged</div>
      <div className="mt-4 space-y-4">
        <Row delay={150} faded>
          <Pill>Standard appeal</Pill>
          <Arrow />
          <Pill>Same automated queue</Pill>
          <Arrow />
          <Pill tone="bad">Rejected again</Pill>
        </Row>
        <div className="h-px bg-slate-100" />
        <Row delay={400}>
          <Pill tone="neutral">Scoreify escalation</Pill>
          <Arrow />
          <Pill tone="neutral">Meta policy team</Pill>
          <Arrow />
          <Pill tone="good">Approved</Pill>
        </Row>
      </div>
      <p className="mt-4 text-xs text-slate-500">Direct escalation routes around the automated appeal loop.</p>
    </Widget>
  );
}

/* ---------- section config ---------- */

const sections = [
  {
    icon: Layers,
    title: "HiVA-tier: Meta’s hidden trust score",
    body: "Meta classifies every Business Manager, ad account, Page, and pixel into an internal trust tier from Bronze to Platinum. It never shows in Ads Manager, but it sets your auction position and your CPMs. Scoreify accounts run at Platinum from day one.",
    points: ["Four tiers: Bronze, Silver, Gold, Platinum", "Invisible in Ads Manager", "Platinum gets lower CPMs and higher caps"],
    Widget: TierLadder,
  },
  {
    icon: ShieldCheck,
    title: "Entity-level LegitScript whitelisting",
    body: "Certification alone only earns basic authorization. True whitelisting is an entity-level designation submitted through high-trust agency infrastructure. It recognizes you as a verified health advertiser instead of a category risk.",
    points: ["Goes beyond basic authorization", "Submitted through high-trust infrastructure", "Pixel data retained, fewer rejections"],
    Widget: Credentialing,
  },
  {
    icon: Gauge,
    title: "43+ backend signals, monitored daily",
    body: "Accounts rarely die overnight. They decay through signals Meta hides: feedback score, restriction history, creative trust, policy trend. We watch them every day and act within 24 hours, before your CPMs move.",
    points: ["Tracks signals outside Ads Manager", "Same-day action on negative movement", "Catches decay before it hits delivery"],
    Widget: SignalMonitor,
  },
  {
    icon: Eye,
    title: "Pixel data that survives the health category",
    body: "Since Meta’s 2025 healthcare reclassification, conversion events and identifiers get stripped in health categories. The same pixel firing through credentialed, Platinum-tier infrastructure keeps the signal that optimization actually needs.",
    points: ["Health events stripped on cold accounts", "Credentialed accounts retain signal", "Cleaner optimization and modeling"],
    Widget: PixelFlow,
  },
  {
    icon: Bolt,
    title: "Direct policy escalation",
    body: "Standard appeals route back through the same automated queue that rejected you. Our accounts reach relationship-based escalation channels to Meta’s policy team, where creative is judged on advertiser credibility instead of category default.",
    points: ["Skips the automated appeal loop", "Relationship-based policy access", "Creative judged on credibility"],
    Widget: Escalation,
  },
];

function SectionRow({ n, total, s, flip }) {
  const [ref, inView] = useInView(0.25);
  const W = s.Widget;
  return (
    <div ref={ref} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={flip ? "md:order-2" : ""}>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-accent">
            {n} <span className="text-slate-300">/ {total}</span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{s.title}</h2>
        <p className="mt-4 text-slate-600">{s.body}</p>
        <ul className="mt-6 space-y-3">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-accent">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={flip ? "md:order-1" : ""}>
        <W inView={inView} />
      </div>
    </div>
  );
}

export default function TechSections() {
  const total = String(sections.length).padStart(2, "0");
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="space-y-20 md:space-y-32">
          {sections.map((s, i) => (
            <SectionRow key={s.title} n={String(i + 1).padStart(2, "0")} total={total} s={s} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
