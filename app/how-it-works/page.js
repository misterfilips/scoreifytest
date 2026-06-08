import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Comparison from "@/components/Comparison";
import TechSections from "@/components/TechSections";

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
        </div>
      </section>

      <TechSections />

      <Comparison />

      <CTA />
      <Footer />
    </main>
  );
}
