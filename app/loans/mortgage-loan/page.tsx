"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

/* =========================================================
   LOAN NAVIGATION
========================================================= */

const loanLinks = [
  {
    label: "Personal Loan",
    href: "/personal-loan",
  },
  {
    label: "Business Loan",
    href: "/loans/business-loan",
  },
  {
    label: "Home Loan",
    href: "/loans/home-loan",
  },
  {
    label: "Mortgage Loan",
    href: "/loans/mortgage-loan",
  },
  {
    label: "Car Loan",
    href: "/loans/car-loan",
  },
  {
    label: "Education Loan",
    href: "/loans/education-loan",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    number: "01",
    title: "Higher Loan Value",
    description:
      "Explore mortgage loan solutions for larger financial requirements through our lending network.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    description:
      "Choose repayment options and tenures based on your financial profile and lender eligibility.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    description:
      "Compare suitable mortgage options from our network of banks and financial institutions.",
  },
  {
    number: "04",
    title: "Dedicated Assistance",
    description:
      "Our team assists you throughout the application, documentation and lender coordination process.",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  "Mortgage loan solutions through trusted lenders",
  "Flexible repayment tenure options",
  "Suitable options for eligible property owners",
  "Simple documentation assistance",
  "Multiple lender options",
  "Dedicated customer support",
];

/* =========================================================
   ELIGIBILITY
========================================================= */

const eligibility = [
  "Indian citizen",
  "Minimum age generally 21 years",
  "Stable income source",
  "Salaried or self-employed applicant",
  "Valid KYC and property documents",
  "Property acceptable to the respective lender",
];

/* =========================================================
   DOCUMENTS
========================================================= */

const documents = [
  "PAN Card",
  "Aadhaar Card / Address Proof",
  "Income proof",
  "Salary slips or business documents",
  "Bank account statements",
  "Property ownership and related documents",
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your basic details and mortgage loan requirement.",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "Our team reviews your financial profile and connects you with suitable lenders.",
  },
  {
    number: "03",
    title: "Document Verification",
    description:
      "The lender reviews your KYC, income and property-related documents.",
  },
  {
    number: "04",
    title: "Approval",
    description:
      "The selected lender evaluates the application and determines eligibility.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What is a mortgage loan?",
    answer:
      "A mortgage loan is a secured loan where eligible property is offered as security to the lender. The loan can be used for purposes permitted by the respective lender.",
  },
  {
    question: "How much mortgage loan can I get?",
    answer:
      "The eligible amount depends on factors such as property value, income, existing obligations, credit profile, repayment capacity and the lender's policies.",
  },
  {
    question: "Can I get a mortgage loan against my property?",
    answer:
      "Eligible property may be considered as security by lenders, subject to property type, ownership, valuation, legal verification and other lender-specific requirements.",
  },
  {
    question: "What documents are required?",
    answer:
      "Documents generally include KYC documents, income proof, bank statements and property-related documents. The exact requirements vary by lender and applicant profile.",
  },
  {
    question: "Can self-employed people apply?",
    answer:
      "Self-employed applicants may be eligible depending on income, business stability, credit profile, property documents and lender-specific criteria.",
  },
  {
    question: "How long does mortgage loan processing take?",
    answer:
      "Processing time varies depending on lender verification, property valuation, legal checks, documentation and approval requirements.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function MortgageLoanPage() {

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* =========================================================
     MOBILE MENU
  ========================================================= */


  /* =========================================================
     FORM
  ========================================================= */

  const openForm = () => {
    setSubmitted(false);
    setShowForm(true);
  };

  const closeForm = () => {
    if (!submitting) {
      setShowForm(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanMobile = mobile.replace(/\s/g, "").trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

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
          loanType: "Mortgage Loan",
          message: cleanMessage,
          source: "Mortgage Loan",
        }),
      });

      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch (error) {
      /*
       * Apps Script may sometimes report a browser/CORS error
       * even when the request reaches Google Sheets.
       */
      console.error("Mortgage enquiry error:", error);

      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        @keyframes mortgageHeroReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mortgageFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes mortgageFloatSlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(2deg);
          }
        }

        @keyframes mortgagePulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.08);
          }
        }

        @keyframes mortgageRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes mortgageCardReveal {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .mortgage-hero-content {
          animation: mortgageHeroReveal 0.8s ease-out both;
        }

        .mortgage-visual {
          animation: mortgageFloat 5s ease-in-out infinite;
        }

        .mortgage-floating-card {
          animation: mortgageFloatSlow 6s ease-in-out infinite;
        }

        .mortgage-glow {
          animation: mortgagePulse 5s ease-in-out infinite;
        }

        .mortgage-orbit {
          animation: mortgageRotate 25s linear infinite;
        }

        .mortgage-card-reveal {
          animation: mortgageCardReveal 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .mortgage-hero-content,
          .mortgage-visual,
          .mortgage-floating-card,
          .mortgage-glow,
          .mortgage-orbit,
          .mortgage-card-reveal {
            animation: none !important;
          }
        }
      `}</style>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#071B72]">

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(0,198,255,0.18),transparent_32%)]" />

          <div className="absolute -right-[260px] -top-[300px] h-[760px] w-[760px] rounded-full border border-[#00C6FF]/20" />

          <div className="mortgage-glow absolute -right-[170px] -top-[210px] h-[600px] w-[600px] rounded-full border border-white/10" />

          <div className="absolute -bottom-[350px] -left-[250px] h-[700px] w-[700px] rounded-full bg-[#00C6FF]/10 blur-3xl" />

        </div>


        <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">


          {/* LEFT */}

          <div className="mortgage-hero-content relative z-10 max-w-[720px]">

            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-[#00C6FF] sm:text-base">
              YES GENESIS FINTECH
            </p>


            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]">

              Unlock Your

              <span className="block text-[#00C6FF]">
                Property's
              </span>

              <span className="block">
                Financial Potential
              </span>

            </h1>


            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />


            <p className="mt-7 max-w-[680px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Explore mortgage loan solutions by leveraging your eligible
              property. Find suitable lending options with professional
              assistance throughout your application journey.
            </p>


            <div className="mt-9 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={openForm}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-[0_15px_40px_rgba(0,198,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-[0_20px_50px_rgba(0,198,255,0.35)]"
              >
                Apply Now

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </button>


              <Link
                href="/emi-calculator"
                className="inline-flex rounded-xl border-2 border-[#00C6FF] px-9 py-4 text-lg font-bold text-[#00C6FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-[#071B72]"
              >
                Calculate EMI
              </Link>

            </div>


            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/65">

              <span>✓ Property Backed</span>

              <span>✓ Multiple Lenders</span>

              <span>✓ Assisted Process</span>

            </div>


            <p className="mt-6 max-w-[680px] text-xs leading-6 text-white/55">
              Loan approval, interest rates, tenure and terms are subject to
              lender eligibility, property verification and documentation.
            </p>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative z-10 flex min-h-[480px] items-center justify-center lg:min-h-[560px]">

            <div className="mortgage-visual relative w-full max-w-[620px]">

              {/* GLOW */}

              <div className="mortgage-glow absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/20 blur-3xl" />


              {/* ORBIT */}

              <div className="mortgage-orbit absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00C6FF]/10" />

              <div className="relative mx-auto aspect-square w-[82%] max-w-[500px]">

                {/* CIRCLES */}

                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="absolute inset-[8%] rounded-full border border-[#00C6FF]/20" />

                <div className="absolute inset-[18%] rounded-full border border-white/5" />


                {/* MAIN PROPERTY CARD */}

                <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2">

                  <div className="rounded-[34px] border border-white/20 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7">

                    <div className="overflow-hidden rounded-[25px] bg-white">


                      {/* PROPERTY ILLUSTRATION */}

                      <div className="relative h-[270px] overflow-hidden bg-gradient-to-br from-[#EAF8FF] to-[#D8F1FA] sm:h-[310px]">

                        {/* SUN */}

                        <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-[#FFD76A] shadow-[0_0_30px_rgba(255,215,106,0.4)]" />


                        {/* CLOUDS */}

                        <div className="absolute left-8 top-12 h-3 w-16 rounded-full bg-white/80" />

                        <div className="absolute left-16 top-9 h-3 w-12 rounded-full bg-white/70" />


                        {/* GROUND */}

                        <div className="absolute bottom-0 left-0 right-0 h-[32%] bg-[#BCE8C7]" />


                        {/* BUILDING */}

                        <div className="absolute bottom-[16%] left-1/2 w-[66%] -translate-x-1/2">

                          {/* ROOF */}

                          <div className="relative mx-auto h-0 w-0 border-b-[68px] border-l-[115px] border-r-[115px] border-b-[#171C5C] border-l-transparent border-r-transparent" />


                          {/* BODY */}

                          <div className="relative mx-auto h-[130px] w-[80%] bg-white shadow-xl">

                            {/* UPPER WINDOW */}

                            <div className="absolute left-1/2 top-[20px] h-[44px] w-[72%] -translate-x-1/2 rounded-md border-4 border-[#171C5C] bg-[#B9EAF8]">

                              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#171C5C]" />

                            </div>


                            {/* DOOR */}

                            <div className="absolute bottom-0 left-1/2 h-[65px] w-[40px] -translate-x-1/2 rounded-t-md bg-[#39B5E8]" />


                            {/* HANDLE */}

                            <div className="absolute bottom-[30px] left-[calc(50%+8px)] h-1.5 w-1.5 rounded-full bg-white" />


                            {/* WINDOWS */}

                            <div className="absolute bottom-[25px] left-[12%] h-[32px] w-[32px] rounded-sm border-4 border-[#171C5C] bg-[#B9EAF8]" />

                            <div className="absolute bottom-[25px] right-[12%] h-[32px] w-[32px] rounded-sm border-4 border-[#171C5C] bg-[#B9EAF8]" />

                          </div>

                        </div>


                        {/* TREES */}

                        <div className="absolute bottom-[18%] left-[7%]">

                          <div className="mx-auto h-10 w-2 bg-[#795548]" />

                          <div className="h-12 w-12 rounded-full bg-[#55B96B]" />

                        </div>


                        <div className="absolute bottom-[18%] right-[7%]">

                          <div className="mx-auto h-10 w-2 bg-[#795548]" />

                          <div className="h-12 w-12 rounded-full bg-[#55B96B]" />

                        </div>

                      </div>


                      {/* CARD FOOTER */}

                      <div className="flex items-center justify-between px-6 py-5">

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-wider text-[#39B5E8]">
                            MORTGAGE LOAN
                          </p>

                          <p className="mt-1 text-lg font-extrabold text-[#171C5C]">
                            Unlock Property Value
                          </p>

                        </div>


                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF8FC] text-xl text-[#39B5E8] transition-all duration-300 hover:scale-110">
                          →
                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* FLOATING CARD 1 */}

                <div className="mortgage-floating-card absolute left-[-2%] top-[18%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39B5E8] text-lg text-white">
                      ₹
                    </div>

                    <div>

                      <p className="text-xs font-medium text-white/60">
                        Property
                      </p>

                      <p className="text-sm font-bold text-white">
                        Secured Finance
                      </p>

                    </div>

                  </div>

                </div>


                {/* FLOATING CARD 2 */}

                <div
                  className="mortgage-floating-card absolute bottom-[15%] right-[-2%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl"
                  style={{ animationDelay: "1.5s" }}
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171C5C] text-[#39B5E8]">
                      ✓
                    </div>

                    <div>

                      <p className="text-xs font-medium text-white/60">
                        Assisted
                      </p>

                      <p className="text-sm font-bold text-white">
                        Application
                      </p>

                    </div>

                  </div>

                </div>


                {/* FLOATING CARD 3 */}

                <div
                  className="mortgage-floating-card absolute right-[3%] top-[7%] hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
                  style={{ animationDelay: "3s" }}
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#00C6FF]">
                      ↗
                    </div>

                    <div>

                      <p className="text-xs font-medium text-white/60">
                        Flexible
                      </p>

                      <p className="text-sm font-bold text-white">
                        Tenure Options
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              MORTGAGE FINANCE
            </p>


            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#171C5C] sm:text-5xl lg:text-6xl">

              Turn your property into a

              <span className="text-[#20AEE5]">
                {" "}financial opportunity
              </span>

            </h2>


            <p className="mt-7 max-w-[680px] text-lg leading-8 text-slate-600">
              A mortgage loan can help eligible property owners access funds
              against their property for permitted financial requirements.
            </p>


            <p className="mt-5 max-w-[680px] text-lg leading-8 text-slate-600">
              YES Genesis Fintech helps connect customers with suitable banks
              and NBFCs and supports them throughout the application journey.
            </p>


            <button
              type="button"
              onClick={openForm}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#171C5C] px-8 py-4 font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#20AEE5] hover:shadow-lg"
            >
              Explore Mortgage Options

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>


          {/* TRUST CARD */}

          <div className="group relative overflow-hidden rounded-[32px] bg-[#F2F7FF] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10 lg:p-12">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#20AEE5]/10 transition-transform duration-700 group-hover:scale-150" />

            <p className="relative text-sm font-bold uppercase tracking-[0.12em] text-[#20AEE5]">
              WHY CHOOSE US?
            </p>


            <h3 className="relative mt-4 text-3xl font-extrabold text-[#171C5C] sm:text-4xl">
              Mortgage assistance built around your needs
            </h3>


            <div className="relative mt-8 grid gap-5 sm:grid-cols-2">

              {features.slice(0, 4).map((feature, index) => (

                <div
                  key={feature}
                  className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF8FC] font-bold text-[#20AEE5]">
                      {index + 1}
                    </div>

                    <p className="text-sm font-semibold leading-6 text-[#171C5C]">
                      {feature}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-[#F5F8FC] px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              KEY BENEFITS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#171C5C] sm:text-5xl">
              Why explore a mortgage loan?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore suitable secured lending options based on your property,
              income and financial requirements.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <div
                key={benefit.number}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#20AEE5]/30 hover:shadow-[0_20px_50px_rgba(23,28,92,0.10)]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-5xl font-black text-[#E7F5FA] transition-colors group-hover:text-[#20AEE5]/20">
                    {benefit.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF8FC] text-[#20AEE5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20AEE5] group-hover:text-white">
                    →
                  </span>

                </div>


                <h3 className="mt-8 text-xl font-extrabold text-[#171C5C]">
                  {benefit.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              MORTGAGE SOLUTIONS
            </p>


            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#171C5C] sm:text-5xl">
              Built to make secured borrowing simpler
            </h2>


            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Our team helps you navigate the mortgage application journey and
              explore suitable lending options based on your requirements.
            </p>


            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#20AEE5]/30 hover:shadow-lg"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF8FC] text-[#20AEE5] transition-all group-hover:bg-[#20AEE5] group-hover:text-white">
                    ✓
                  </div>

                  <p className="text-sm font-semibold leading-6 text-[#171C5C]">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* VISUAL INFO CARD */}

          <div className="relative">

            <div className="absolute -inset-6 rounded-[40px] bg-[#20AEE5]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] bg-[#171C5C] p-8 text-white shadow-2xl sm:p-10">

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#20AEE5]/10" />

              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#20AEE5]/5" />


              <div className="relative">

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
                  PROPERTY FINANCE
                </p>


                <h3 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  Your property can become a financial resource.
                </h3>


                <p className="mt-5 leading-7 text-white/70">
                  Explore secured lending options through our network of
                  banks and NBFCs with support through the application process.
                </p>


                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black text-[#20AEE5]">
                      01
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white/80">
                      Property Review
                    </p>
                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black text-[#20AEE5]">
                      02
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white/80">
                      Lender Matching
                    </p>
                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black text-[#20AEE5]">
                      03
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white/80">
                      Documentation
                    </p>
                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black text-[#20AEE5]">
                      04
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white/80">
                      Approval
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ELIGIBILITY + DOCUMENTS
      ===================================================== */}

      <section className="bg-[#F5F8FC] px-6 py-20 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">

          {/* ELIGIBILITY */}

          <div className="rounded-[32px] bg-white p-8 shadow-sm sm:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              ELIGIBILITY
            </p>


            <h2 className="mt-4 text-3xl font-extrabold text-[#171C5C] sm:text-4xl">
              Who can apply?
            </h2>


            <div className="mt-8 space-y-4">

              {eligibility.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#20AEE5]/30 hover:shadow-md"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF8FC] font-bold text-[#20AEE5]">
                    ✓
                  </div>

                  <p className="font-medium text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* DOCUMENTS */}

          <div className="rounded-[32px] bg-[#171C5C] p-8 text-white shadow-sm sm:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              DOCUMENTATION
            </p>


            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Documents you may need
            </h2>


            <p className="mt-5 leading-7 text-white/70">
              Exact documentation can vary depending on the lender, applicant
              profile and property.
            </p>


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {documents.map((document) => (

                <div
                  key={document}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                >

                  <span className="text-[#20AEE5]">
                    ✓
                  </span>

                  <span className="text-sm font-medium leading-6 text-white/85">
                    {document}
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

      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              SIMPLE PROCESS
            </p>


            <h2 className="mt-4 text-4xl font-extrabold text-[#171C5C] sm:text-5xl">
              From enquiry to approval
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our team helps guide you through each stage of the mortgage loan
              application journey.
            </p>

          </div>


          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* LINE */}

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-[#20AEE5]/20 lg:block" />


            {processSteps.map((step) => (

              <div
                key={step.number}
                className="group relative rounded-[28px] border border-slate-200 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#20AEE5]/40 hover:shadow-xl"
              >

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF8FC] text-2xl font-black text-[#20AEE5] ring-8 ring-white transition-all duration-300 group-hover:bg-[#20AEE5] group-hover:text-white">
                  {step.number}
                </div>


                <h3 className="mt-7 text-xl font-extrabold text-[#171C5C]">
                  {step.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F5F8FC] px-6 py-20 md:px-8 lg:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.15em] text-[#00AEEA]">
              FAQ
            </p>


            <h2 className="mt-3 text-3xl font-extrabold text-[#171C5C] md:text-5xl">
              Frequently asked questions
            </h2>


            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Find answers to common questions about mortgage loans,
              eligibility and the application process.
            </p>

          </div>


          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#00C6FF] hover:shadow-sm"
              >

                <summary className="cursor-pointer list-none px-6 py-5 text-lg font-bold text-[#171C5C]">

                  <div className="flex items-center justify-between gap-5">

                    <span>
                      {faq.question}
                    </span>

                    <span className="text-2xl text-[#00AEEA] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>

                  </div>

                </summary>


                <div className="px-6 pb-6 leading-7 text-slate-600">
                  {faq.answer}
                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#071B72] px-6 py-20 md:px-8 lg:py-24">

        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00C6FF]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#00C6FF]/10" />


        <div className="relative mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-[0.15em] text-[#00C6FF]">
            GET STARTED
          </p>


          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">
            Ready to explore your mortgage loan options?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Connect with YES Genesis Fintech and take the first step towards
            finding a suitable secured loan solution.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              onClick={openForm}
              className="rounded-xl bg-[#39B5E8] px-9 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#171C5C] hover:shadow-xl"
            >
              Apply for Mortgage Loan
            </button>


            <Link
              href="/emi-calculator"
              className="rounded-xl border-2 border-white/30 px-9 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00C6FF] hover:bg-[#00C6FF] hover:text-[#071B72]"
            >
              Calculate EMI
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#121545] text-white">

        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">

          {/* COMPANY */}

          <div>

            <div className="mb-5">

              <Image
                src="/assets/yes-genesis-logo-fixed.png"
                alt="YES Genesis Fintech"
                width={190}
                height={65}
                className="h-[55px] w-auto object-contain brightness-0 invert"
              />

            </div>


            <p className="max-w-[320px] leading-7 text-white/70">
              YES Genesis Fintech connects customers with trusted banks and
              NBFCs for personal, business, home, mortgage, car and education
              loan solutions.
            </p>

          </div>


          {/* LOANS */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-[#20AEE5]">
              Loans
            </h3>


            <div className="flex flex-col gap-3">

              {loanLinks.map((loan) => (

                <Link
                  key={loan.href}
                  href={loan.href}
                  className="text-white/75 transition-colors hover:text-[#20AEE5]"
                >
                  {loan.label}
                </Link>

              ))}

            </div>

          </div>


          {/* INFORMATION */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-[#20AEE5]">
              Information
            </h3>


            <div className="flex flex-col gap-3">

              <Link
                href="/about"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                Disclaimer
              </Link>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-[#20AEE5]">
              Contact Us
            </h3>


            <div className="space-y-4 text-white/75">

              <a
                href="tel:+919517889999"
                className="block transition-colors hover:text-[#20AEE5]"
              >
                +91 95178 89999
              </a>


              <p>
                YES Genesis Fintech Private Limited
              </p>


              <Link
                href="/dsa-partner"
                className="inline-flex rounded-xl bg-[#20AEE5] px-5 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#171C5C]"
              >
                Become DSA Partner
              </Link>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-white/10">

          <div className="mx-auto max-w-[1400px] px-6 py-6 text-center lg:px-10">

            <p className="font-semibold text-white/80">

              YES GENESIS FINTECH PRIVATE LIMITED

              <span className="mx-3 text-[#20AEE5]">
                |
              </span>

              ALL RIGHTS RESERVED

            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          MORTGAGE ENQUIRY MODAL
      ===================================================== */}

      {showForm && (

        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071B72]/70 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeForm();
            }
          }}
        >

          <div className="relative max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-3xl bg-white p-7 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:p-9">

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeForm}
              disabled={submitting}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-[#EEF8FC] hover:text-[#171C5C] disabled:opacity-50"
              aria-label="Close enquiry form"
            >
              ×
            </button>


            {!submitted ? (

              <>

                <div className="pr-8">

                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#20AEE5]">
                    Mortgage Loan
                  </p>


                  <h2 className="mt-2 text-3xl font-extrabold text-[#171C5C]">
                    Start your enquiry
                  </h2>


                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Share your details and our team will get in touch with
                    suitable mortgage loan options.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="mortgage-name"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Name
                    </label>


                    <input
                      id="mortgage-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />

                  </div>


                  {/* MOBILE */}

                  <div>

                    <label
                      htmlFor="mortgage-mobile"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Mobile Number
                    </label>


                    <input
                      id="mortgage-mobile"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) =>
                        setMobile(
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      placeholder="10-digit mobile number"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label
                      htmlFor="mortgage-email"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Email
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>


                    <input
                      id="mortgage-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />

                  </div>


                  {/* MESSAGE */}

                  <div>

                    <label
                      htmlFor="mortgage-message"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Requirement
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>


                    <textarea
                      id="mortgage-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us briefly about your requirement"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />

                  </div>


                  {/* CONSENT */}

                  <label className="flex cursor-pointer items-start gap-3">

                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#171C5C]"
                    />


                    <span className="text-xs leading-relaxed text-gray-600">
                      I agree to be contacted by YES Genesis Fintech regarding
                      financial products and services.
                    </span>

                  </label>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#171C5C] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#20AEE5] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </button>


                  <p className="text-center text-[11px] leading-relaxed text-gray-500">
                    Your details will be securely shared with our team for
                    loan assistance.
                  </p>

                </form>

              </>

            ) : (

              /* =================================================
                 SUCCESS
              ================================================= */

              <div className="py-10 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  ✓
                </div>


                <h2 className="mt-6 text-3xl font-extrabold text-[#171C5C]">
                  Enquiry Submitted
                </h2>


                <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-600">
                  Thank you for your interest in a mortgage loan. Our team will
                  contact you shortly.
                </p>


                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-8 rounded-xl bg-[#171C5C] px-7 py-3.5 font-bold text-white transition-all hover:bg-[#20AEE5]"
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  );
}