import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { loanLinks } from "@/lib/data";

const loanDetails: Record<string, { title: string; description: string }> = {
  "personal-loan": {
    title: "Personal Loan",
    description:
      "Quick, collateral-free personal loans sourced from our network of partner banks and NBFCs — for weddings, medical needs, travel, or any personal expense.",
  },

  "home-loan": {
    title: "Home Loan",
    description:
      "Competitive home loan offers compared across multiple banks, with end-to-end documentation and approval support.",
  },

  "mortgage-loan": {
    title: "Mortgage Loan",
    description:
      "Loan against property solutions that unlock funds using your residential or commercial property as collateral.",
  },

  "car-loan": {
    title: "Car Loan",
    description:
      "New and used car financing with fast approvals and flexible tenures from our banking and NBFC partners.",
  },

  "education-loan": {
    title: "Education Loan",
    description:
      "Funding for higher education in India and abroad, including tuition, living expenses, and other approved costs.",
  },
};
export function generateStaticParams() {
  return Object.keys(loanDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const loan = loanDetails[params.slug];
  if (!loan) return {};
  return {
    title: loan.title,
    description: loan.description,
  };
}

export default function LoanPage({ params }: { params: { slug: string } }) {
  const loan = loanDetails[params.slug];
  if (!loan) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">{loan.title}</h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">{loan.description}</p>
          </div>
        </section>

        <section className="max-w-container mx-auto px-4 md:px-8 py-16 grid gap-10 lg:grid-cols-[1fr,420px]">
          <div className="prose max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-midnight">Why apply through Yes Genesis Fintech?</h2>
            <ul>
              <li>Compare offers from 149+ lending partners in one place.</li>
              <li>Dedicated relationship manager for document pickup and follow-up.</li>
              <li>Transparent processing — no hidden charges.</li>
              <li>Support across 200+ cities and 647+ branch locations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-midnight mt-8">Other loan products</h2>
            <ul>
              {loanLinks
                .filter((l) => !l.href.endsWith(params.slug))
                .map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-navy font-semibold hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div id="apply">
            <h2 className="sr-only">Enquire about {loan.title}</h2>
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
