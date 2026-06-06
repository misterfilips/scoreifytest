import { Arrow, ShieldCheck } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 opacity-80" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center animate-fade-up">
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              For LegitScript-certified health &amp; wellness brands
            </span>
          </div>

          <h1
            className="mt-7 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 animate-fade-up sm:text-5xl md:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Run regulated health offers on Meta.
            <span className="block bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
              Without the bans.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Run your ads on accounts Meta already trusts. Costs drop, approvals go through, and the
            bans stop. You keep your page, your followers, and your data. We keep the account healthy.
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Book a free consultation
              <Arrow className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost w-full sm:w-auto">
              See how it works
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-400 animate-fade-up" style={{ animationDelay: "220ms" }}>
            Trusted ad accounts. Your brand stays entirely in your hands.
          </p>
        </div>

        {/* Product visual placeholder */}
        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/25 to-transparent opacity-50 blur-2xl" />
          <div className="relative grid overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl shadow-slate-300/40 md:grid-cols-2">
            {/* Case study summary */}
            <div className="flex flex-col p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Case study</span>
                <div className="flex h-8 w-24 items-center justify-center rounded-md border border-dashed border-slate-300 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                  Logo
                </div>
              </div>

              {/* headline placeholder */}
              <div className="mt-6 space-y-2.5">
                <div className="h-3.5 w-11/12 rounded-full bg-slate-200/80" />
                <div className="h-3.5 w-3/5 rounded-full bg-slate-200/80" />
              </div>

              {/* result metrics placeholder */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <div key={i}>
                    <div className="h-7 w-16 rounded-md bg-slate-100" />
                    <div className="mt-2 h-2.5 w-12 rounded-full bg-slate-200/70" />
                  </div>
                ))}
              </div>

              {/* read link placeholder */}
              <div className="mt-auto flex items-center gap-2 pt-8 text-accent-deep/50">
                <div className="h-2.5 w-28 rounded-full bg-slate-200/70" />
                <Arrow className="h-4 w-4" />
              </div>
            </div>

            {/* Case study visual */}
            <div className="border-t border-slate-200 md:border-l md:border-t-0">
              <Placeholder ratio="h-full min-h-[240px]" label="Case study image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Placeholder({ ratio = "aspect-video", label = "Image" }) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center bg-slate-50 bg-[repeating-linear-gradient(45deg,rgba(15,23,42,0.03)_0px,rgba(15,23,42,0.03)_12px,transparent_12px,transparent_24px)]`}
    >
      <div className="flex flex-col items-center gap-2 text-slate-400">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M5 18l5-5 4 4 2-2 3 3" />
        </svg>
        <span className="text-[11px] uppercase tracking-[0.2em]">{label}</span>
      </div>
    </div>
  );
}
