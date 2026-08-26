import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmiCalculator from "@/components/EmiCalculator";

export const metadata: Metadata = {
  title: "EMI Calculator",
  description: "Estimate your monthly loan EMI, total interest, and total payment with the Yes Genesis Fintech EMI calculator.",
};

export default function EmiCalculatorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">EMI Calculator</h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">
              Plan your loan with confidence. Adjust the sliders to estimate
              your monthly EMI in seconds.
            </p>
          </div>
        </section>
        <section className="max-w-container mx-auto px-4 md:px-8 py-16">
          <EmiCalculator />
        </section>
      </main>
      <Footer />
    </>
  );
}
