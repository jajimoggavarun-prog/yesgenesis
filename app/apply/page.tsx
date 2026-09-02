import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Start your loan application with Yes Genesis Fintech and get matched with the right lender.",
};

type ApplyPageProps = {
  searchParams: {
    loan?: string;
  };
};

export default function ApplyPage({
  searchParams,
}: ApplyPageProps) {
  const loanType = searchParams.loan || "";

  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <h1 className="text-3xl font-bold md:text-4xl">
              Apply Now
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Share a few details and our team will match
              you with the best loan offer from our 149+
              lending partners.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-container px-4 py-16 md:px-8">
          <div className="mx-auto max-w-xl">
            <EnquiryForm loanType={loanType} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}