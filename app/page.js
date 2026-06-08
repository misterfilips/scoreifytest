import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Showcase from "@/components/Showcase";
import TrustLevels from "@/components/TrustLevels";
import Process from "@/components/Process";
import BuiltFor from "@/components/BuiltFor";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <CaseStudies />
      <Showcase />
      <BuiltFor />
      <TrustLevels />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
