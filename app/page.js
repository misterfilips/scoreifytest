import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Showcase from "@/components/Showcase";
import TrustLevels from "@/components/TrustLevels";
import Process from "@/components/Process";
import SavingsSection from "@/components/SavingsSection";
import BuiltFor from "@/components/BuiltFor";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar overDark />
      <Hero />
      <Stats />
      <CaseStudies />
      <Showcase />
      <BuiltFor />
      <TrustLevels />
      <Process />
      <SavingsSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
