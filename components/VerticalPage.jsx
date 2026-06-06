import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoStrip from "./LogoStrip";
import CTA from "./CTA";
import { Placeholder } from "./Hero";
import { Arrow, ShieldCheck, TrendDown, CheckCircle, Gauge, Bolt, Clock } from "./Icons";

const icons = [TrendDown, CheckCircle, Gauge, Bolt, Clock, ShieldCheck];

export default function VerticalPage({ vertical }) {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[560px] w-[820px] -translate-x-1/2 opacity-80" />

        <div className="container-x relative">
          <a
            href="/#built-for"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
          >
            <Arrow className="h-4 w-4 rotate-180" />
            Who we serve
          </a>

          <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5" />
                {vertical.name}
              </span>
              <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.07] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {vertical.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                {vertical.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#cta" className="btn-primary">
                  Book a free consultation
                  <Arrow className="h-4 w-4" />
                </a>
                <a href="/#how" className="btn-ghost">
                  See how it works
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glow pointer-events-none absolute -inset-8 opacity-60" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
                <Placeholder ratio="aspect-[4/3]" label={`${vertical.name} visual`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              How Scoreify helps {vertical.name} brands
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vertical.features.map((f, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={f.title} className="card group">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-accent transition-colors group-hover:border-blue-200 group-hover:bg-blue-50">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
