import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoStrip from "./LogoStrip";
import CTA from "./CTA";
import VerticalShowcase from "./VerticalShowcase";
import SavingsSection from "./SavingsSection";
import { Placeholder } from "./Hero";
import { Arrow, ShieldCheck } from "./Icons";

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

      {/* Industry-specific showcase */}
      <VerticalShowcase vertical={vertical} />

      {/* Savings calculator (replaces the old features grid) */}
      <div className="border-t border-slate-200">
        <SavingsSection />
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
