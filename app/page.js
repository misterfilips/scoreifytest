import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Stats from "@/components/Stats";
import Showcase from "@/components/Showcase";
import TrustLevels from "@/components/TrustLevels";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Service from "@/components/Service";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Stats />
      <Showcase />
      <TrustLevels />
      <Process />
      <Features />
      <Service />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
