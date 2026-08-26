import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Become a DSA Partner",
  description: "Partner with Yes Genesis Fintech as a Direct Selling Agent and earn by helping customers access the right loans.",
};

export default function DsaPartnerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Become a DSA Partner</h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">
              Join our network of Direct Selling Agents and earn commissions
              by connecting customers with the right loan products.
            </p>
          </div>
        </section>
        <section className="max-w-container mx-auto px-4 md:px-8 py-16 max-w-xl mx-auto">
          <EnquiryForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
