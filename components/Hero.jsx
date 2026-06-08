import { Arrow, ShieldCheck } from "./Icons";
import SocialProof from "./SocialProof";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#070b16] pt-28 pb-14 md:pt-32 md:pb-20">
      {/* Animated aurora gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,#2563eb,transparent_68%)] opacity-50 blur-[90px] animate-drift-a motion-reduce:animate-none" />
        <div className="absolute right-[-8%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#4f46e5,transparent_68%)] opacity-45 blur-[90px] animate-drift-b motion-reduce:animate-none" />
        <div className="absolute left-[28%] bottom-[-30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,#0891b2,transparent_70%)] opacity-40 blur-[100px] animate-drift-c motion-reduce:animate-none" />
        <div className="absolute right-[18%] bottom-[-18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,#3b82f6,transparent_70%)] opacity-40 blur-[90px] animate-drift-a motion-reduce:animate-none" />
      </div>
      {/* Faint grid + legibility vignette */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070b16]/30 via-transparent to-[#070b16]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              For LegitScript-certified health &amp; wellness brands
            </span>
          </div>

          <h1
            className="mt-7 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-5xl md:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Run regulated health offers on Meta.
            <span className="block text-blue-400">Without the bans.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Run your ads on accounts Meta already trusts. Costs drop, approvals go through, and the
            bans stop. You keep your page, your followers, and your data. We keep the account healthy.
          </p>

          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Book a free consultation
              <Arrow className="h-4 w-4" />
            </a>
            <a
              href="/how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/35 hover:bg-white/10 sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-400 animate-fade-up" style={{ animationDelay: "220ms" }}>
            Trusted ad accounts. Your brand stays entirely in your hands.
          </p>
        </div>

        <div className="mt-10 animate-fade-up" style={{ animationDelay: "280ms" }}>
          <SocialProof dark />
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
