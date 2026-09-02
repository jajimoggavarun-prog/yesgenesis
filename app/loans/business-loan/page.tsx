"use client";
// Business loan page - deployment refresh

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";


const benefits = [
  {
    number: "01",
    title: "Competitive Rates",
    text: "Explore suitable business finance options through our trusted network of banks and NBFCs.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    text: "Choose repayment options based on your business profile and lender eligibility.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    text: "Compare suitable lending options instead of relying on a single lender.",
  },
  {
    number: "04",
    title: "Simple Process",
    text: "Get assistance through documentation, verification and the application journey.",
  },
];

const solutions = [
  "Business expansion",
  "Working capital requirements",
  "Equipment and machinery",
  "Inventory and stock funding",
  "Business infrastructure",
  "Other eligible business needs",
];

const eligibility = [
  "Minimum monthly income of â‚¹15,000",
  "Minimum age of 21 years",
  "Stable source of income",
  "Salaried or self-employed applicant",
  "Valid identity and address proof",
  "Minimum 1 year job stability for salaried applicants",
];

const documents = [
  "PAN Card",
  "Aadhaar Card / Address Proof",
  "Business registration documents",
  "Bank account statements",
  "Income / financial documents",
  "Additional lender-required documents",
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your basic details and tell us about your business finance requirement.",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "Our team reviews your information and identifies suitable lending options.",
  },
  {
    number: "03",
    title: "Verification",
    description:
      "The selected lender evaluates your business profile and documentation.",
  },
  {
    number: "04",
    title: "Disbursement",
    description:
      "Once approved, the loan amount is processed according to lender terms.",
  },
];

const faqs = [
  {
    question: "What is a business loan?",
    answer:
      "A business loan is financing that eligible businesses can use for approved requirements such as expansion, working capital, equipment or other business-related expenses.",
  },
  {
    question: "How much business loan can I get?",
    answer:
      "The eligible loan amount depends on factors such as business turnover, income, credit profile, repayment capacity, business vintage and the lender's policies.",
  },
  {
    question: "Can self-employed business owners apply?",
    answer:
      "Yes. Eligible self-employed and business owners may apply subject to income documentation, business details, credit profile and lender-specific criteria.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typical requirements include KYC documents, business proof, bank statements, income or financial documents and other documents requested by the lender.",
  },
];

export default function BusinessLoanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">
      <style jsx global>{`
        @keyframes businessReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes businessFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes businessOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes businessPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.8;
          }
        }

        .business-reveal {
          animation: businessReveal 0.8s ease-out both;
        }

        .business-float {
          animation: businessFloat 5s ease-in-out infinite;
        }

        .business-orbit {
          animation: businessOrbit 26s linear infinite;
        }

        .business-pulse {
          animation: businessPulse 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .business-reveal,
          .business-float,
          .business-orbit,
          .business-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />
{/* =========================================================
    BUSINESS LOAN HERO
    Same layout as Personal Loan
    Background: /public/assets/business-loan-visual.png
========================================================= */}

<section
  className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/assets/business-loan-visual.png")',
  }}
>
  {/* Subtle overlay keeps the left-side typography crisp */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/10 via-transparent to-transparent" />

  <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
    <div className="w-full max-w-[700px]">

      <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
        BUSINESS FINANCE
      </p>

      <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
        Grow Your
        <span className="block text-[#36B8F0]">
          Business
        </span>
        <span className="block text-white">
          With The Right Finance
        </span>
      </h1>

      <p className="mt-8 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
        Access suitable business loan options through our trusted network
        of banks and NBFCs with guidance throughout the application process.
      </p>

      <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white/80">
        <span>âœ“ Paperless Process</span>
        <span>âœ“ Flexible Tenure</span>
        <span>âœ“ Competitive Rates</span>
      </div>

      <div className="mt-9 flex flex-wrap gap-4">

        {/* Apply button â€” keeps your existing enquiry modal */}
        <button
          onClick={() => {
            window.location.href = "/apply?loan=business";
          }}
          className="group inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#38B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#25A7DC]"
        >
          Apply for Business Loan

          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
            â†’
          </span>
        </button>

        {/* EMI Calculator */}
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
      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Business Loan Benefits
          </h2>

          <p className="mt-5 max-w-[700px] leading-8 text-gray-600">
            Get guided through the financing journey while exploring options
            from our network of lending partners.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#171C5C]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#39B5E8] hover:shadow-[0_20px_50px_rgba(23,28,92,.1)]"
              >
                <span className="text-sm font-extrabold text-[#39B5E8]">
                  {item.number}
                </span>

                <div className="mt-8 h-1 w-8 bg-[#39B5E8] transition-all duration-300 group-hover:w-14" />

                <h3 className="mt-6 text-xl font-extrabold">
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

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <section className="bg-[#F5FAFD] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
              Business Solutions
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Finance That Helps Your Business Move Forward
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Whether you are expanding operations or managing working capital,
              explore suitable business financing options through our lender
              network.
            </p>

            <button
              onClick={() => {
                window.location.href = "/apply?loan=business";
              }}
              className="mt-8 rounded-xl bg-[#071B72] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#10278A]"
            >
              Discuss Your Requirement â†’
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl border border-white bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-extrabold text-[#39B5E8]">
                    0{index + 1}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF8FC] text-[#39B5E8] transition group-hover:bg-[#39B5E8] group-hover:text-white">
                    â†’
                  </span>
                </div>

                <p className="mt-8 font-extrabold text-[#171C5C]">
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
      <section className="bg-[#F5F8FC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Eligibility */}
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Eligibility
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Who can apply?
              </h2>

              <div className="mt-8 space-y-4">
                {eligibility.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-xl font-bold text-[#00C6FF]">
                      âœ“
                    </span>

                    <span className="text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="rounded-3xl bg-[#071B72] p-8 text-white shadow-sm md:p-10">
              <p className="font-bold uppercase tracking-wider text-[#00C6FF]">
                Documentation
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Documents generally required
              </h2>

              <div className="mt-8 space-y-4">
                {documents.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-xl font-bold text-[#00C6FF]">
                      âœ“
                    </span>

                    <span className="text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Eligibility, interest rates, loan amount, tenure and documentation
            requirements are subject to the policies and approval criteria of
            the respective bank or NBFC.
          </p>

        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="bg-[#071B72] px-6 py-24 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-[700px]">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
              Simple Process
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              From Enquiry to Business Finance
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Our team helps you navigate the application process and connect
              with suitable lending options.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <span className="text-5xl font-extrabold text-[#39B5E8]">
                  {step.number}
                </span>

                <div className="mt-7 h-px w-full bg-white/10" />

                <h3 className="mt-7 text-xl font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Business Loan Questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#171C5C]/10 bg-white transition-all hover:border-[#39B5E8]/50"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <span className="font-bold text-[#171C5C]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#39B5E8] text-white"
                          : "bg-[#EAF8FC] text-[#39B5E8]"
                      }`}
                    >
                      {isOpen ? "âˆ’" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[36px] bg-[#071B72] p-10 text-center text-white sm:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00C6FF]/15 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
              Grow With Confidence
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Give Your Business the Financial Support It Needs
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/60">
              Tell us about your requirement and explore suitable business
              finance options through our lender network.
            </p>

            <button
              onClick={() => {
                window.location.href = "/apply?loan=business";
              }}
              className="mt-9 rounded-xl bg-[#39B5E8] px-9 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#27A7DB]"
            >
              Apply for Business Loan â†’
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}
    </main>
  );
}


