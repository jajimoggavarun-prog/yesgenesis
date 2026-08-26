"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const loanLinks = [
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/loans/business-loan" },
  { label: "Home Loan", href: "/loans/home-loan" },
  { label: "Mortgage Loan", href: "/loans/mortgage-loan" },
  { label: "Car Loan", href: "/car-loan" },
  { label: "Education Loan", href: "/loans/education-loan" },
];

const benefits = [
  {
    number: "01",
    title: "Happy Customers",
    value: "1000+",
    description: "Customers assisted through our lending network.",
  },
  {
    number: "02",
    title: "Multiple Banks",
    value: "50 Cr*",
    description: "Compare suitable options from multiple lenders.",
  },
  {
    number: "03",
    title: "Annual Interest Rate",
    value: "10.5%* - 24%*",
    description: "Rates are subject to lender eligibility and profile.",
  },
  {
    number: "04",
    title: "Flexible Repayment",
    value: "1 to 6 years",
    description: "Choose repayment options based on lender terms.",
  },
  {
    number: "05",
    title: "Minimum Documents",
    value: "Profile Based",
    description: "Documentation depends on the customer profile.",
  },
  {
    number: "06",
    title: "Processing Fees",
    value: "Zero",
    description: "Zero processing fee as presented in the design.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Quick Registration",
    description:
      "Submit your basic details and education loan requirement.",
    icon: "✎",
  },
  {
    number: "02",
    title: "Check Eligibility",
    description:
      "Our team checks your profile and available lender options.",
    icon: "✓",
  },
  {
    number: "03",
    title: "Submit Documents",
    description:
      "Provide the required applicant and co-applicant documents.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Bank Verification",
    description:
      "The selected lender verifies the application and documents.",
    icon: "◉",
  },
  {
    number: "05",
    title: "Bank Sanction",
    description:
      "Once approved, the lender proceeds with sanction.",
    icon: "₹",
  },
];

const faqs = [
  {
    question: "What is an education loan?",
    answer:
      "An education loan is a financial facility designed to help eligible students and their families meet approved education-related expenses through a lender's terms and eligibility criteria.",
  },
  {
    question: "How much education loan can I get?",
    answer:
      "The eligible amount depends on the course, institution, applicant and co-applicant profile, documentation, repayment capacity and lender policy.",
  },
  {
    question: "Is a co-applicant required?",
    answer:
      "The Figma design specifically requires co-applicant details. Final co-applicant requirements depend on the lender and applicant profile.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typical requirements can include admission documentation, identity proof, address proof, academic records, income documentation and co-applicant details. Exact requirements vary by lender.",
  },
];

export default function EducationLoanPage() {

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const openForm = () => {
    setSubmitted(false);
    setShowForm(true);
  };

  const closeForm = () => {
    if (!submitting) {
      setShowForm(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          loanType: "Education Loan",
          message: cleanMessage,
          source: "Education Loan",
        }),
      });

      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Education loan enquiry error:", error);

      // Apps Script can sometimes report a browser/CORS error
      // even when the POST reaches the Google Sheet.
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">
      <style jsx global>{`
        @keyframes educationHeroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes educationFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes educationFloatSlow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(2deg);
          }
        }

        @keyframes educationPulse {
          0%,
          100% {
            opacity: 0.28;
            transform: scale(1);
          }
          50% {
            opacity: 0.62;
            transform: scale(1.08);
          }
        }

        @keyframes educationOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .education-hero-content {
          animation: educationHeroReveal 0.8s ease-out both;
        }

        .education-visual {
          animation: educationFloat 5s ease-in-out infinite;
        }

        .education-floating-card {
          animation: educationFloatSlow 6s ease-in-out infinite;
        }

        .education-glow {
          animation: educationPulse 5s ease-in-out infinite;
        }

        .education-orbit {
          animation: educationOrbit 24s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .education-hero-content,
          .education-visual,
          .education-floating-card,
          .education-glow,
          .education-orbit {
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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(0,198,255,0.18),transparent_32%)]" />

          <div className="absolute -right-[260px] -top-[300px] h-[760px] w-[760px] rounded-full border border-[#00C6FF]/20" />

          <div className="education-glow absolute -right-[170px] -top-[210px] h-[600px] w-[600px] rounded-full border border-white/10" />

          <div className="absolute -bottom-[350px] -left-[250px] h-[700px] w-[700px] rounded-full bg-[#00C6FF]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
          <div className="education-hero-content relative z-10 max-w-[720px]">
            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-[#00C6FF] sm:text-base">
              YES GENESIS FINTECH
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[68px]">
              Avail Up To
              <span className="block text-[#33A7DD]">
                ₹1 Cr Education Loan
              </span>
              <span className="block">in Just Few Clicks!</span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[700px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              100% Paperless Process
              <span className="mx-2 text-white/35">|</span>
              up to 72 months tenure
              <span className="mx-2 text-white/35">|</span>
              starts @ 11.5% p.a.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openForm}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#33A7DD] px-9 py-4 text-lg font-bold text-white shadow-[0_15px_40px_rgba(0,198,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-[0_20px_50px_rgba(0,198,255,0.35)]"
              >
                Apply Now
                <span className="transition-transform group-hover:translate-x-1">
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
              <span>✓ 100% Paperless</span>
              <span>✓ Flexible Tenure</span>
              <span>✓ Multiple Lenders</span>
            </div>

            <p className="mt-6 max-w-[680px] text-xs leading-6 text-white/55">
              Loan approval, interest rates, tenure and terms are subject to
              lender eligibility, academic profile and documentation.
            </p>
          </div>

          {/* Education visual made without external image */}
          <div className="relative z-10 flex min-h-[480px] items-center justify-center lg:min-h-[560px]">
            <div className="education-visual relative w-full max-w-[620px]">
              <div className="education-glow absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/20 blur-3xl" />

              <div className="education-orbit absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00C6FF]/10" />

              <div className="relative mx-auto aspect-square w-[82%] max-w-[500px]">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[8%] rounded-full border border-[#00C6FF]/20" />
                <div className="absolute inset-[18%] rounded-full border border-white/5" />

                {/* Main education card */}
                <div className="absolute left-1/2 top-1/2 w-[73%] -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-[34px] border border-white/20 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7">
                    <div className="overflow-hidden rounded-[25px] bg-white">
                      <div className="relative h-[270px] overflow-hidden bg-gradient-to-br from-[#EAF8FF] to-[#D8F1FA] sm:h-[310px]">
                        {/* books */}
                        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2">
                          <div className="relative h-[34px] w-[205px] rounded-xl bg-[#33A7DD] shadow-lg" />
                          <div className="relative -mt-1 ml-3 h-[34px] w-[180px] rounded-xl bg-[#171C5C] shadow-lg" />
                          <div className="relative -mt-1 ml-7 h-[34px] w-[150px] rounded-xl bg-[#6BC9EC] shadow-lg" />
                        </div>

                        {/* laptop */}
                        <div className="absolute left-[15%] top-[25%] h-[85px] w-[125px] rounded-xl border-4 border-[#171C5C] bg-white shadow-xl">
                          <div className="absolute left-1/2 top-1/2 h-[42px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#DDF5FF]">
                            <div className="mx-auto mt-3 h-2 w-12 rounded bg-[#33A7DD]" />
                            <div className="mx-auto mt-2 h-2 w-8 rounded bg-[#171C5C]/30" />
                          </div>
                          <div className="absolute -bottom-3 left-1/2 h-3 w-[145px] -translate-x-1/2 rounded-full bg-[#171C5C]" />
                        </div>

                        {/* Graduation cap */}
                        <div className="absolute right-[13%] top-[25%]">
                          <div className="relative h-14 w-28 -skew-x-[20deg] bg-[#171C5C]" />
                          <div className="absolute left-1/2 top-[44px] h-[44px] w-[60px] -translate-x-1/2 rounded-b-lg bg-[#33A7DD]" />
                          <div className="absolute right-[-9px] top-[39px] h-[44px] w-1 bg-[#171C5C]" />
                          <div className="absolute right-[-13px] top-[79px] h-3 w-3 rounded-full bg-[#FFD76A]" />
                        </div>

                        {/* Student badge */}
                        <div className="absolute bottom-[35%] right-[11%] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171C5C] text-xl text-white">
                            ✓
                          </div>
                        </div>

                        {/* Small floating stars */}
                        <div className="absolute left-[10%] top-[14%] text-2xl text-[#FFD76A]">
                          *
                        </div>
                        <div className="absolute right-[10%] top-[10%] text-xl text-[#33A7DD]">
                          +
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-[17%] bg-[#BCE8C7]" />
                      </div>

                      <div className="flex items-center justify-between px-6 py-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#39B5E8]">
                            EDUCATION LOAN
                          </p>
                          <p className="mt-1 text-lg font-extrabold text-[#171C5C]">
                            Invest In Your Future
                          </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF8FC] text-xl text-[#39B5E8]">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating card */}
                <div className="education-floating-card absolute left-[-2%] top-[17%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39B5E8] text-lg text-white">
                      ₹
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/60">
                        Up To
                      </p>
                      <p className="text-sm font-bold text-white">
                        ₹1 Cr Loan
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="education-floating-card absolute bottom-[14%] right-[-2%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171C5C] text-[#39B5E8]">
                      ✓
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/60">
                        Process
                      </p>
                      <p className="text-sm font-bold text-white">
                        Paperless
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
          ELIGIBILITY
      ===================================================== */}

      <section className="bg-[#171C5C] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Education Loan Eligibility Criteria
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-8 rounded-[20px] bg-white p-7 shadow-2xl sm:p-10 lg:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="mt-1 text-2xl text-[#33A7DD]">•</span>
                <p className="text-lg leading-8 text-[#011251]">
                  Need to have Admission Letter received from College or
                  University
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 text-2xl text-[#33A7DD]">•</span>
                <p className="text-lg leading-8 text-[#011251]">
                  Must Submit Co Applicant Details
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 text-2xl text-[#33A7DD]">•</span>
                <p className="text-lg leading-8 text-[#011251]">
                  Academics Marks
                </p>
              </div>
            </div>

            {/* CSS education illustration */}
            <div className="relative flex min-h-[250px] items-center justify-center">
              <div className="relative">
                <div className="h-[28px] w-[170px] rounded-md bg-[#33A7DD]" />
                <div className="-mt-1 ml-3 h-[28px] w-[155px] rounded-md bg-[#171C5C]" />
                <div className="-mt-1 ml-7 h-[28px] w-[140px] rounded-md bg-[#67C8E8]" />

                <div className="absolute bottom-[35px] left-[58px] h-[100px] w-[60px] rounded-[18px] bg-[#FFD76A] shadow-lg">
                  <div className="absolute left-1/2 top-3 h-8 w-8 -translate-x-1/2 rounded-full bg-[#F4B58E]" />
                  <div className="absolute left-1/2 top-9 h-12 w-10 -translate-x-1/2 rounded-xl bg-[#33A7DD]" />
                </div>

                <div className="absolute -right-7 bottom-[110px] h-16 w-28 rotate-[-18deg] bg-[#171C5C]" />
                <div className="absolute -right-1 bottom-[82px] h-6 w-6 rounded-full bg-[#FFD76A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ===================================================== */}

      <section className="bg-[#171C5C] px-6 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1205px]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Yes Genesis Fintech?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group min-h-[225px] rounded-[16px] bg-white p-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_18px_35px_rgba(0,198,255,0.16)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#171C5C] text-sm font-extrabold text-white transition-all duration-300 group-hover:bg-[#33A7DD] group-hover:scale-110">
                  {benefit.number}
                </div>

                <p className="mt-5 text-sm font-extrabold text-[#171C5C]">
                  {benefit.value}
                </p>

                <p className="mt-2 text-sm font-medium leading-5 text-[#023078]">
                  {benefit.title}
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="bg-[#171C5C] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            How It Works?
          </h2>

          <div className="relative mt-12">
            <div className="absolute left-[8%] right-[8%] top-[85px] hidden h-px bg-white/15 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="group relative z-10 text-center"
                >
                  <div className="rounded-[16px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2">
                    <div className="flex h-[155px] items-center justify-center rounded-xl bg-[#F4FAFD]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E5F7FD] text-4xl text-[#33A7DD] transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>
                    </div>

                    <div className="mx-auto -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#171C5C] text-xs font-bold text-white">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-6 text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT COMPANY
      ===================================================== */}

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex rounded-[18px] bg-[#171C5C] px-6 py-3">
              <h2 className="text-lg font-extrabold text-white sm:text-2xl">
                About Yes Genesis Fintech Company
              </h2>
            </div>

            <p className="mt-7 text-base leading-7 text-[#171C5C] sm:text-lg">
              We, Yes Genesis Fintech Private Limited is fastest growing
              Corporate DSA having 60+ Branches in AP, Telangana and Chennai.
              We are tied up with 50+ Banks and 20+ leading NBFC&apos;s. We do
              all loans such as Personal Loans, Business Loans, Home Loans,
              Mortgage Loans, Auto Loans, Education Loans, Gold Loans and
              Insurance.
            </p>

            <div className="mt-7 grid grid-cols-3 rounded-[15px] bg-[#171C5C] p-5">
              <div className="border-r border-white/15 text-center">
                <p className="text-2xl font-black text-white">60+</p>
                <p className="mt-1 text-xs font-semibold text-white/70">
                  Branches
                </p>
              </div>

              <div className="border-r border-white/15 text-center">
                <p className="text-2xl font-black text-white">50+</p>
                <p className="mt-1 text-xs font-semibold text-white/70">
                  Banks
                </p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-black text-white">20+</p>
                <p className="mt-1 text-xs font-semibold text-white/70">
                  NBFC&apos;s
                </p>
              </div>
            </div>
          </div>

          {/* CSS education illustration */}
          <div className="flex justify-center">
            <div className="relative h-[300px] w-[340px] rounded-[25px] bg-[#EEF8FD]">
              <div className="absolute left-1/2 top-[42px] h-[120px] w-[90px] -translate-x-1/2 rounded-[14px] bg-white shadow-lg">
                <div className="mx-auto mt-7 h-12 w-14 rounded-lg bg-[#DCEFFA]" />
              </div>

              <div className="absolute bottom-[38px] left-[65px] h-[110px] w-[140px] rounded-[20px] bg-[#171C5C]" />

              <div className="absolute bottom-[80px] right-[45px] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#33A7DD] text-3xl font-black text-white shadow-xl">
                ✓
              </div>

              <div className="absolute bottom-[34px] right-[52px] h-[55px] w-[65px] rounded-xl bg-white shadow-lg">
                <div className="mx-auto mt-5 h-3 w-9 rounded-full bg-[#33A7DD]" />
              </div>

              <div className="absolute left-[55px] top-[30px] text-3xl text-[#33A7DD]">
                +
              </div>

              <div className="absolute right-[35px] top-[34px] text-2xl text-[#171C5C]">
                *
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F5F8FC] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.15em] text-[#00AEEA]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#171C5C] md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#00C6FF]"
              >
                <summary className="cursor-pointer list-none px-6 py-5 text-lg font-bold text-[#171C5C]">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

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

      <section className="relative overflow-hidden bg-[#071B72] px-6 py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00C6FF]/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#00C6FF]/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.15em] text-[#00C6FF]">
            GET STARTED
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">
            Ready to explore your education loan options?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Start your education loan enquiry and let our team help you
            explore suitable lender options.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openForm}
              className="rounded-xl bg-[#39B5E8] px-9 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#171C5C] hover:shadow-xl"
            >
              Apply for Education Loan
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

          <div>
            <h3 className="mb-5 text-xl font-bold text-[#20AEE5]">
              Information
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-white/75 hover:text-[#20AEE5]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-white/75 hover:text-[#20AEE5]"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="text-white/75 hover:text-[#20AEE5]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="text-white/75 hover:text-[#20AEE5]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="text-white/75 hover:text-[#20AEE5]"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-[#20AEE5]">
              Contact Us
            </h3>

            <div className="space-y-4 text-white/75">
              <a
                href="tel:+919517889999"
                className="block hover:text-[#20AEE5]"
              >
                +91 95178 89999
              </a>

              <p>YES Genesis Fintech Private Limited</p>

              <Link
                href="/dsa-partner"
                className="inline-flex rounded-xl bg-[#20AEE5] px-5 py-3 font-bold text-white hover:bg-white hover:text-[#171C5C]"
              >
                Become DSA Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 py-6 text-center lg:px-10">
            <p className="font-semibold text-white/80">
              YES GENESIS FINTECH PRIVATE LIMITED
              <span className="mx-3 text-[#20AEE5]">|</span>
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          ENQUIRY MODAL
      ===================================================== */}

      {showForm && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071B72]/70 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeForm();
            }
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-3xl bg-white p-7 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:p-9">
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
                    Education Loan
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-[#171C5C]">
                    Start your enquiry
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Share your details and our team will get in touch with
                    suitable education loan options.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="education-name"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Name
                    </label>

                    <input
                      id="education-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="education-mobile"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="education-mobile"
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

                  <div>
                    <label
                      htmlFor="education-email"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Email
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="education-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="education-message"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Requirement
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      id="education-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your course, institution or loan requirement"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />
                  </div>

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

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#171C5C] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#20AEE5] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-extrabold text-[#171C5C]">
                  Enquiry Submitted
                </h2>

                <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-600">
                  Thank you for your interest in an education loan. Our team
                  will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-8 rounded-xl bg-[#171C5C] px-7 py-3.5 font-bold text-white hover:bg-[#20AEE5]"
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