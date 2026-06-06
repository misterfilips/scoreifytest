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
