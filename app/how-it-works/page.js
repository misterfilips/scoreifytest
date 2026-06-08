import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Comparison from "@/components/Comparison";
import TechSections from "@/components/TechSections";
import SavingsCalculator from "@/components/SavingsCalculator";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "How it works | Scoreify",
  description:
    "The tech behind Scoreify: HiVA-tier trust classification, entity-level LegitScript whitelisting, daily backend signal monitoring, pixel data integrity, and direct policy escalation on Meta.",
};

export default function HowItWorks() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 opacity-80" />
        <div className="container-x relative text-center">
          <span className="eyebrow">How it works</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
            The trust layer underneath your ads
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Meta runs hidden trust systems that decide what you pay and what gets approved. Here’s how
            Scoreify operates at the top of every one of them.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#savings"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-deep"
            >
              Estimate your savings
              <Arrow className="h-4 w-4 rotate-90 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <TechSections />

      <Comparison />

      <section id="savings" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              See what it’s worth to you
            </h2>
            <p className="mt-4 text-slate-600">
              Drag your monthly ad spend to estimate your net savings on trusted accounts, after our fee.
            </p>
          </div>
          <div className="mt-10">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
