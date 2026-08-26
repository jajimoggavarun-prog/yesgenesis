import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Start your loan application with Yes Genesis Fintech and get matched with the right lender.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Apply Now</h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">
              Share a few details and our team will match you with the best
              loan offer from our 149+ lending partners.
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
