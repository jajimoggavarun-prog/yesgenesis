"use client";
// Business loan page - deployment refresh

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

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
  "Indian citizen",
  "Business operating for the required lender-defined period",
  "Stable business income",
  "Salaried/self-employed/business owner as applicable",
  "Valid identity and address proof",
  "Subject to lender-specific eligibility criteria",
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
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanMobile = mobile.replace(/\s/g, "");
    const cleanEmail = email.trim();

    if (!cleanName) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (
      cleanEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: cleanName,
          mobile: cleanMobile,
          email: cleanEmail,
          loanType: "Business Loan",
          message: message.trim(),
          source: "Business Loan",
        }),
      });

      setSubmitted(true);
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

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
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#071B72]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(0,198,255,.20),transparent_34%)]" />

        <div className="absolute -right-[280px] -top-[280px] h-[720px] w-[720px] rounded-full border border-[#00C6FF]/15" />

        <div className="absolute bottom-[-250px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#073AAB]/40 blur-3xl" />

        <div className="mx-auto grid min-h-[720px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          {/* LEFT */}

          <div className="business-reveal relative z-10 max-w-[720px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#00C6FF]">
              Business Finance
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[70px]">
              Grow Your
              <span className="block text-[#39B5E8]">Business</span>
              <span className="block">With The Right Finance</span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[680px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Access suitable business loan options through our trusted
              network of banks and NBFCs with guidance throughout the
              application process.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white/65">
              <span>✓ Paperless Process</span>
              <span>✓ Flexible Tenure</span>
              <span>✓ Competitive Rates</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(true);
                }}
                className="group rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-[0_15px_40px_rgba(0,198,255,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-[0_20px_50px_rgba(0,198,255,.3)]"
              >
                Apply for Business Loan
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <Link
                href="/emi-calculator"
                className="rounded-xl border-2 border-[#00C6FF] px-9 py-4 text-lg font-bold text-[#00C6FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-[#071B72]"
              >
                Calculate EMI
              </Link>
            </div>

            <p className="mt-5 max-w-[620px] text-xs leading-5 text-white/50">
              Loan approval and terms are subject to lender eligibility,
              documentation and verification.
            </p>
          </div>

          {/* RIGHT VISUAL */}

          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="business-float relative w-full max-w-[650px]">
              {/* glow */}

              <div className="business-pulse absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/15 blur-3xl" />

              {/* orbit */}

              <div className="business-orbit absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00C6FF]/15" />

              {/* main dashboard */}

              <div className="relative mx-auto w-[84%] rounded-[36px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl">
                  {/* dashboard header */}

                  <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-[#39B5E8]">
                        BUSINESS FINANCE
                      </p>

                      <p className="mt-1 text-lg font-extrabold text-[#171C5C]">
                        Business Dashboard
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F8FC] text-[#39B5E8]">
                      ₹
                    </div>
                  </div>

                  {/* graph */}

                  <div className="relative h-[280px] overflow-hidden bg-[#F6FBFE] px-6 pt-8">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-400">
                          Business Growth
                        </p>

                        <p className="mt-1 text-3xl font-extrabold text-[#171C5C]">
                          +28.6%
                        </p>
                      </div>

                      <div className="rounded-full bg-[#DDF7FD] px-3 py-1 text-xs font-bold text-[#159CCB]">
                        Growth
                      </div>
                    </div>

                    {/* chart */}

                    <div className="absolute bottom-8 left-6 right-6 flex h-[130px] items-end gap-3">
                      {[38, 55, 48, 70, 64, 92, 110, 125].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-lg bg-[#39B5E8] opacity-80 transition-all duration-500 hover:opacity-100"
                            style={{
                              height: `${height}px`,
                            }}
                          />
                        ),
                      )}
                    </div>

                    {/* line */}

                    <div className="absolute bottom-[92px] left-[50px] right-[45px] h-[3px] rotate-[-7deg] rounded-full bg-[#171C5C]" />

                    <div className="absolute bottom-[104px] right-[25%] h-4 w-4 rounded-full border-4 border-white bg-[#171C5C] shadow-md" />
                  </div>

                  {/* cards */}

                  <div className="grid grid-cols-2 gap-3 p-5">
                    <div className="rounded-2xl bg-[#071B72] p-4 text-white">
                      <p className="text-[10px] uppercase tracking-widest text-white/50">
                        Funding
                      </p>

                      <p className="mt-2 text-xl font-extrabold">
                        Business
                      </p>

                      <p className="mt-1 text-xs text-[#39B5E8]">
                        Finance Ready
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#EAF8FC] p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">
                        Process
                      </p>

                      <p className="mt-2 text-xl font-extrabold text-[#171C5C]">
                        Simple
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#39B5E8]">
                        Guided Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating cards */}

              <div className="absolute left-0 top-[16%] rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                <p className="text-xs text-white/50">Finance</p>
                <p className="font-bold">For Growth</p>
              </div>

              <div className="absolute bottom-[13%] right-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                <p className="text-xs text-white/50">Multiple</p>
                <p className="font-bold">Lender Options</p>
              </div>
            </div>
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
                setSubmitted(false);
                setShowForm(true);
              }}
              className="mt-8 rounded-xl bg-[#071B72] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#10278A]"
            >
              Discuss Your Requirement →
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
                    →
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

     {/* =========================================================
    ELIGIBILITY / DOCUMENTS
========================================================= */}

<section className="bg-[#16163f] px-6 py-16 sm:px-10 lg:px-16">
  <div className="mx-auto max-w-[1190px]">
    <div className="mb-12 flex items-center justify-center">
      <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-[32px]">
        Business Loan Eligibility Criteria
      </h2>
    </div>

    <div className="grid gap-[30px] lg:grid-cols-2">
      {/* Salaried Person */}
      <div className="relative min-h-[385px] overflow-hidden rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex h-[72px] w-[72%] items-center justify-center rounded-tl-[15px] bg-[#33a7dd] px-8">
          <h3 className="text-2xl font-bold text-white sm:text-[30px]">
            Salaried Person
          </h3>
        </div>

        <div className="px-8 pt-10 sm:px-10">
          <ul className="space-y-5 text-lg font-medium leading-7 text-[#011251] sm:text-[20px]">
            <li className="list-disc ml-6">
              Minimum Monthly Salary ₹15,000+
            </li>
            <li className="list-disc ml-6">
              Minimum 1 Year Job Stability
            </li>
            <li className="list-disc ml-6">
              Age: 21 Years &amp; Above
            </li>
          </ul>
        </div>

        {/* Bottom illustration area */}
        <div className="pointer-events-none absolute bottom-0 left-0">
          <div className="flex h-[82px] w-[82px] items-center justify-center bg-[#cfe4ff]/70">
            <svg
              viewBox="0 0 64 64"
              className="h-16 w-16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 28L32 10L56 28V56H8V28Z"
                stroke="#9fc7ff"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M24 56V36H40V56"
                stroke="#9fc7ff"
                strokeWidth="5"
              />
            </svg>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 right-7">
          <div className="flex h-[90px] w-[90px] items-end justify-center overflow-hidden bg-[#d7e8ff]">
            <div className="mb-2 h-12 w-9 rounded-full bg-[#f0b08f]" />
            <div className="absolute top-3 h-8 w-9 rounded-full bg-[#111827]" />
            <div className="absolute bottom-0 h-10 w-14 rounded-t-[20px] bg-white border border-[#d7d7d7]" />
          </div>
        </div>
      </div>

      {/* Self-Employed */}
      <div className="relative min-h-[385px] overflow-hidden rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex h-[72px] w-[72%] items-center justify-center rounded-tl-[15px] bg-[#33a7dd] px-8">
          <h3 className="text-2xl font-bold text-white sm:text-[30px]">
            Self-Employed
          </h3>
        </div>

        <div className="px-8 pt-10 sm:px-10">
          <ul className="space-y-5 text-lg font-medium leading-7 text-[#011251] sm:text-[20px]">
            <li className="list-disc ml-6">
              Minimum 1 Year ITR Filing
            </li>
            <li className="list-disc ml-6">
              Age: 21 Years &amp; Above
            </li>
          </ul>
        </div>

        {/* Bottom illustration area */}
        <div className="pointer-events-none absolute bottom-0 left-0">
          <div className="flex h-[82px] w-[82px] items-center justify-center bg-[#cfe4ff]/70">
            <svg
              viewBox="0 0 64 64"
              className="h-16 w-16"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="9"
                y="22"
                width="46"
                height="31"
                rx="5"
                stroke="#9fc7ff"
                strokeWidth="5"
              />
              <path
                d="M21 22V16C21 13.2 23.2 11 26 11H38C40.8 11 43 13.2 43 16V22"
                stroke="#9fc7ff"
                strokeWidth="5"
              />
              <rect
                x="28"
                y="31"
                width="8"
                height="8"
                rx="1"
                stroke="#9fc7ff"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 right-7">
          <div className="flex h-[90px] w-[90px] items-end justify-center overflow-hidden bg-[#d7e8ff]">
            <div className="mb-2 h-12 w-9 rounded-full bg-[#f0b08f]" />
            <div className="absolute top-3 h-8 w-9 rounded-full bg-[#111827]" />
            <div className="absolute bottom-0 h-10 w-14 rounded-t-[20px] bg-white border border-[#d7d7d7]" />
          </div>
        </div>
      </div>
    </div>
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
                      {isOpen ? "−" : "+"}
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
                setSubmitted(false);
                setShowForm(true);
              }}
              className="mt-9 rounded-xl bg-[#39B5E8] px-9 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#27A7DB]"
            >
              Apply for Business Loan →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[30px] bg-white p-7 shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#39B5E8]">
                  Business Finance
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-[#171C5C]">
                  Apply Now
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Tell us about your business finance requirement.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8FC] text-3xl font-bold text-[#39B5E8]">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-[#171C5C]">
                  Thank You!
                </h3>

                <p className="mt-3 text-gray-600">
                  Your business loan enquiry has been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-7 rounded-xl bg-[#071B72] px-8 py-3 font-bold text-white transition hover:bg-[#10278A]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#171C5C]">
                    Full Name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-2 focus:ring-[#39B5E8]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#171C5C]">
                    Mobile Number
                  </label>

                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    maxLength={10}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-2 focus:ring-[#39B5E8]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#171C5C]">
                    Email Address
                  </label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    type="email"
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-2 focus:ring-[#39B5E8]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#171C5C]">
                    Requirement
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your business loan requirement"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-2 focus:ring-[#39B5E8]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#071B72] px-6 py-4 font-bold text-white transition hover:bg-[#10278A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry. Loan approval is subject to lender eligibility
                  and verification.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}