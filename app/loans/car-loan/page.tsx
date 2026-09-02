"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";


const benefits = [
  [
    "01",
    "Quick Processing",
    "Get your application processed through our lender network.",
  ],
  [
    "02",
    "Flexible Tenure",
    "Choose a repayment tenure suited to your monthly plan.",
  ],
  [
    "03",
    "Multiple Lenders",
    "Explore suitable options from banks and financial institutions.",
  ],
  [
    "04",
    "Simple Documentation",
    "Get assistance throughout the financing process.",
  ],
];

const features = [
  "New car loan options",
  "Eligible pre-owned car financing",
  "Multiple lender options",
  "Flexible repayment tenure",
  "Simple application process",
  "Dedicated customer assistance",
];

const eligibility = [
  "Minimum monthly income of ₹15,000",
  "Minimum age of 21 years",
  "Stable source of income",
  "Salaried or self-employed applicant",
  "Valid identity and address proof",
  "Minimum 1 year job stability for salaried applicants",
];

const documents = [
  "PAN Card",
  "Aadhaar Card / Address Proof",
  "Latest salary slips or income proof",
  "Bank account statements",
  "Employment or business proof",
  "Vehicle-related documents as required",
];

const steps = [
  ["01", "Apply", "Share your details and car loan requirement."],
  [
    "02",
    "Profile Review",
    "Our team reviews your profile and lender options.",
  ],
  [
    "03",
    "Approval",
    "The selected lender evaluates your application.",
  ],
  [
    "04",
    "Disbursement",
    "The approved loan is processed according to lender terms.",
  ],
];

const faqs = [
  [
    "What is a car loan?",
    "A car loan is a financing facility that can help eligible customers purchase a new or pre-owned vehicle.",
  ],
  [
    "Can I get a loan for a used car?",
    "Eligible pre-owned vehicles may be financed by certain lenders based on vehicle age, value and lender criteria.",
  ],
  [
    "How much car loan can I get?",
    "The eligible amount depends on income, credit profile, repayment capacity, vehicle value and lender policies.",
  ],
  [
    "What documents are required?",
    "Typical requirements include KYC documents, income proof, bank statements and vehicle-related documents.",
  ],
];

export default function CarLoanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">
      <Navbar />

      {/* =====================================================
          CAR LOAN HERO
          Same visual structure as Personal / Business Loan
          Background: /public/assets/car-loan-visual.png
      ===================================================== */}

      <section
        className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/car-loan-visual.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/10 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
          <div className="w-full max-w-[700px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
              SMARTER CAR FINANCE
            </p>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Make Your
              <span className="block text-[#36B8F0]">
                Dream Car
              </span>
              <span className="block text-white">
                a Reality
              </span>
            </h1>

            <p className="mt-8 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
              Explore flexible car loan options through our trusted network of
              banks and NBFCs, with simple application assistance from enquiry
              to approval.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white/80">
              <span>✓ Flexible Tenure</span>
              <span>✓ Multiple Lenders</span>
              <span>✓ Simple Process</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  window.location.href = "/apply?loan=car";
                }}
                className="group inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#38B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#25A7DC]"
              >
                Apply for Car Loan

                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <Link
                href="/emi-calculator"
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl border-2 border-[#00C6FF] px-10 py-4 text-lg font-bold text-[#00C6FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-[#061A70]"
              >
                Calculate EMI
              </Link>
            </div>

            <p className="mt-5 max-w-[620px] text-xs leading-5 text-white/60">
              Loan approval and terms are subject to lender eligibility,
              documentation and verification.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Car Loan Benefits
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-3xl border border-[#171C5C]/10 p-7 transition hover:-translate-y-2 hover:border-[#39B5E8] hover:shadow-xl"
              >
                <span className="font-bold text-[#39B5E8]">
                  {number}
                </span>

                <h3 className="mt-8 text-xl font-extrabold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          ELIGIBILITY + DOCUMENTS
      ===================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#071B72] p-9 text-white">
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              ELIGIBILITY
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Who Can Apply?
            </h2>

            <div className="mt-8 space-y-4">
              {eligibility.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[#39B5E8]">
                    ✓
                  </span>

                  <span className="text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#171C5C]/10 p-9">
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              DOCUMENTS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Documents You May Need
            </h2>

            <div className="mt-8 space-y-4">
              {documents.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[#39B5E8]">
                    ✓
                  </span>

                  <span className="text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-[#071B72] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            PROCESS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            From Enquiry to Car
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:bg-white/10"
              >
                <span className="text-4xl font-extrabold text-[#39B5E8]">
                  {number}
                </span>

                <h3 className="mt-7 text-xl font-extrabold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center text-4xl font-extrabold">
            Car Loan FAQs
          </h2>

          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer], index) => (
              <div
                key={question}
                className="overflow-hidden rounded-2xl border border-[#171C5C]/10"
              >
                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between p-6 text-left font-bold"
                >
                  {question}

                  <span className="text-2xl text-[#39B5E8]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-6 pb-6 leading-7 text-gray-600">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1300px] rounded-[36px] bg-[#071B72] p-10 text-center text-white sm:p-16">
          <p className="font-bold tracking-[.16em] text-[#39B5E8]">
            DRIVE YOUR DREAM
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Get Started With Your Car Loan
          </h2>

          <button
            onClick={() => {
              window.location.href = "/apply?loan=car";
            }}
            className="mt-9 rounded-xl bg-[#39B5E8] px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#27A7DB]"
          >
            Apply Now →
          </button>
        </div>
      </section>

      {/* =====================================================
          APPLICATION MODAL
      ===================================================== */}
    </main>
  );
}


