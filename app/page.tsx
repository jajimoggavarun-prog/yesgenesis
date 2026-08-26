import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BranchesSection from "@/components/BranchesSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsSection />
        <BranchesSection />
        <PartnersSection />
        <TestimonialsSection />
        <AwardsSection />
      </main>
      <Footer />
    </>
  );
}
