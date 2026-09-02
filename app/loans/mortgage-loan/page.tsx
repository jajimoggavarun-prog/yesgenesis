"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";


const benefits = [
  {
    number: "01",
    title: "Property Backed",
    text: "Unlock financial potential from eligible property.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    text: "Choose repayment options based on lender eligibility.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    text: "Explore suitable options across our lending network.",
  },
  {
    number: "04",
    title: "Dedicated Assistance",
    text: "Get support through documentation and lender coordination.",
  },
];

const features = [
  "Loan against eligible property",
  "Flexible repayment options",
  "Multiple lender options",
  "Property verification assistance",
  "Simple documentation guidance",
  "Dedicated customer support",
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
  "Aadhaar / Address Proof",
  "Income proof",
  "Bank statements",
  "Property ownership documents",
  "Additional lender-required documents",
];

const steps = [
  ["01", "Apply", "Tell us about your property and financial requirement."],
  ["02", "Profile Review", "Our team identifies suitable lending options."],
  ["03", "Verification", "The lender verifies applicant and property documents."],
  ["04", "Approval", "The selected lender evaluates and approves the application."],
];

const faqs = [
  [
    "What is a mortgage loan?",
    "A mortgage loan is a secured loan where eligible property is offered as security to the lender.",
  ],
  [
    "Can I get a loan against my property?",
    "Eligible property may be considered subject to ownership, valuation, legal verification and lender requirements.",
  ],
  [
    "How much can I borrow?",
    "The eligible amount depends on property value, income, credit profile, repayment capacity and lender policies.",
  ],
  [
    "Can self-employed people apply?",
    "Self-employed applicants may be eligible based on income, business stability, credit profile and lender criteria.",
  ],
];

export default function MortgageLoanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">
      <style jsx global>{`
        @keyframes mortgageReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mortgage-reveal {
          animation: mortgageReveal 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .mortgage-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />

      {/* =====================================================
          MORTGAGE LOAN HERO
          Background:
          /public/assets/mortgage-loan-visual.png
      ===================================================== */}
      <section
        className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/mortgage-loan-visual.png")',
        }}
      >
        {/* Subtle overlay keeps the left-side text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/20 via-[#061A70]/5 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
          <div className="mortgage-reveal w-full max-w-[720px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
              PROPERTY FINANCE
            </p>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Unlock Your
              <span className="block text-[#36B8F0]">
                Property&apos;s
              </span>
              <span className="block text-white">
                Financial Potential
              </span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
              Explore mortgage loan solutions by leveraging eligible property
              and access suitable lending options through our trusted network
              of banks and NBFCs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  window.location.href = "/apply?loan=mortgage";
                }}
                className="group inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#38B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#25A7DC] hover:shadow-xl"
              >
                Apply Now
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <Link
                href="/emi-calculator"
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl border-2 border-[#00C6FF] px-10 py-4 text-lg font-bold text-[#00C6FF] transition hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-[#061A70]"
              >
                Calculate EMI
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-white/75">
              <span>✓ Property Backed</span>
              <span>✓ Multiple Lenders</span>
              <span>✓ Assisted Process</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Mortgage Loan Benefits
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#171C5C]/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#39B5E8] hover:shadow-xl"
              >
                <span className="text-sm font-bold text-[#39B5E8]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="bg-[#F5FAFD] px-6 py-24">
        <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
              FEATURES
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Unlock the Value of Your Property
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Explore mortgage lending solutions designed around your
              property, financial requirements and repayment capacity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#39B5E8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 font-bold">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY + DOCUMENTS
      ===================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#071B72] p-8 text-white sm:p-10">
            <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
              ELIGIBILITY
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Who Can Apply?
            </h2>

            <div className="mt-8 space-y-4">
              {eligibility.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[#39B5E8]">✓</span>

                  <span className="text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#171C5C]/10 p-8 sm:p-10">
            <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
              DOCUMENTS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Documents You May Need
            </h2>

            <div className="mt-8 space-y-4">
              {documents.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="font-bold text-[#39B5E8]">
                    {String(index + 1).padStart(2, "0")}
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
          <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
            SIMPLE PROCESS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            A Simple Mortgage Journey
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-2 hover:bg-white/10"
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
          <p className="text-center text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-4xl font-extrabold">
            Mortgage Loan FAQs
          </h2>

          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer], index) => (
              <div
                key={question}
                className="overflow-hidden rounded-2xl border border-[#171C5C]/10"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left font-bold"
                >
                  {question}

                  <span className="text-2xl text-[#39B5E8]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 leading-7 text-gray-600">
                    {answer}
                  </div>
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
        <div className="mx-auto max-w-[1300px] overflow-hidden rounded-[36px] bg-[#071B72] p-10 text-center text-white sm:p-16">
          <p className="font-bold tracking-[0.16em] text-[#39B5E8]">
            UNLOCK YOUR PROPERTY
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Explore Your Mortgage Loan Options
          </h2>

          <button
            onClick={() => {
              window.location.href = "/apply?loan=mortgage";
            }}
            className="mt-9 rounded-xl bg-[#39B5E8] px-9 py-4 font-bold transition hover:-translate-y-1 hover:bg-[#27A7DB]"
          >
            Apply Now →
          </button>
        </div>
      </section>

      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}
    </main>
  );
}


