"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const loanLinks = [
  { label: "Personal Loan", href: "/loans/personal-loan" },
  { label: "Business Loan", href: "/loans/business-loan" },
  { label: "Home Loan", href: "/loans/home-loan" },
  { label: "Mortgage Loan", href: "/loans/mortgage-loan", },
  { label: "Car Loan", href: "/loans/car-loan" },
  { label: "Education Loan", href: "/loans/education-loan" },
];

const benefits = [
  {
    number: "01",
    title: "Competitive Rates",
    description:
      "Explore suitable home loan options through our network of trusted banks and NBFCs.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    description:
      "Choose repayment options based on your financial profile and lender eligibility.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    description:
      "Compare suitable lending options from our network instead of relying on a single lender.",
  },
  {
    number: "04",
    title: "Simple Process",
    description:
      "Our team assists you through documentation, verification and the application journey.",
  },
];

const features = [
  "Home purchase financing",
  "New property purchase assistance",
  "Ready-to-move property financing",
  "Balance transfer options",
  "Flexible repayment options",
  "Dedicated loan assistance",
];

const eligibility = [
  "Indian citizen",
  "Minimum age as specified by the lender",
  "Stable source of income",
  "Salaried or self-employed applicant",
  "Valid identity and address proof",
  "Subject to lender-specific eligibility criteria",
];

const documents = [
  "PAN Card",
  "Aadhaar Card / Address Proof",
  "Latest salary slips or income proof",
  "Bank account statements",
  "Employment or business proof",
  "Property-related documents as required",
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your basic details and tell us about your home loan requirement.",
  },
  {
    number: "02",
    title: "Verification",
    description:
      "Our team reviews your information and helps identify suitable lending options.",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "The selected bank or NBFC evaluates your profile and documentation.",
  },
  {
    number: "04",
    title: "Disbursement",
    description:
      "Once approved, the loan amount is disbursed according to lender terms.",
  },
];

const faqs = [
  {
    question: "What is a home loan?",
    answer:
      "A home loan is a secured loan that can be used for purposes such as purchasing or constructing a residential property, subject to lender policies and eligibility.",
  },
  {
    question: "How much home loan can I get?",
    answer:
      "The eligible loan amount depends on factors such as income, repayment capacity, credit profile, property value, employment status and the lender's policies.",
  },
  {
    question: "Can self-employed people apply for a home loan?",
    answer:
      "Yes. Self-employed applicants may be eligible for home loans, subject to income documentation, business details, credit profile and lender-specific eligibility criteria.",
  },
  {
    question: "What documents are required for a home loan?",
    answer:
      "Typical requirements may include identity proof, address proof, income documents, bank statements, employment or business proof and property-related documents.",
  },
  {
    question: "Can I transfer my existing home loan?",
    answer:
      "Home loan balance transfer options may be available depending on the existing loan, repayment history, applicant profile and the policies of the new lender.",
  },
];

export default function HomeLoanPage() {


  return (
    <main className="min-h-screen bg-white text-[#171C5C]">

      {/* =========================================================
          ANIMATION STYLES
      ========================================================= */}
      <style jsx global>{`
        @keyframes homeFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes homeFloatSlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(2deg);
          }
        }

        @keyframes homePulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.08);
          }
        }

        @keyframes homeSlide {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .home-hero-content {
          animation: homeSlide 0.8s ease-out both;
        }

        .home-visual {
          animation: homeFloat 5s ease-in-out infinite;
        }

        .home-floating-card {
          animation: homeFloatSlow 6s ease-in-out infinite;
        }

        .home-glow {
          animation: homePulse 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-hero-content,
          .home-visual,
          .home-floating-card,
          .home-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* =========================================================
          HEADER
      ========================================================= */}
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071B72]">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0">

          <div className="home-glow absolute -right-[250px] -top-[300px] h-[750px] w-[750px] rounded-full border border-[#00C6FF]/20" />

          <div className="absolute -right-[150px] -top-[200px] h-[600px] w-[600px] rounded-full border border-white/10" />

          <div className="absolute left-[-250px] bottom-[-350px] h-[700px] w-[700px] rounded-full bg-[#00C6FF]/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,198,255,0.16),transparent_32%)]" />

        </div>

        <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">

          {/* LEFT */}
          <div className="home-hero-content relative z-10 max-w-[720px]">

            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-[#00C6FF] sm:text-base">
              YES GENESIS FINTECH
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]">

              Turn Your
              <span className="block text-[#00C6FF]">
                Dream Home
              </span>

              <span className="block">
                Into Reality
              </span>

            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[680px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Explore flexible home loan solutions through our trusted network
              of banks and NBFCs. Simple process, expert assistance and
              multiple lending options.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-[0_15px_40px_rgba(0,198,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-[0_20px_50px_rgba(0,198,255,0.35)]"
              >
                Apply Now

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/emi-calculator"
                className="inline-flex rounded-xl border-2 border-[#00C6FF] px-9 py-4 text-lg font-bold text-[#00C6FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-[#071B72]"
              >
                Calculate EMI
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/65">
              <span>✓ Multiple Lenders</span>
              <span>✓ Flexible Tenure</span>
              <span>✓ Assisted Process</span>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative z-10 flex min-h-[480px] items-center justify-center lg:min-h-[560px]">

            {/* Glow */}
            <div className="home-glow absolute h-[360px] w-[360px] rounded-full bg-[#00C6FF]/20 blur-3xl" />

            {/* Main House Visual */}
            <div className="home-visual relative w-full max-w-[620px]">

              <div className="relative mx-auto aspect-square w-[82%] max-w-[500px]">

                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="absolute inset-[8%] rounded-full border border-[#00C6FF]/20" />

                {/* House card */}
                <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2">

                  <div className="rounded-[34px] border border-white/20 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7">

                    <div className="overflow-hidden rounded-[25px] bg-white">

                      {/* House illustration */}
                      <div className="relative h-[270px] bg-gradient-to-br from-[#EAF8FF] to-[#D8F1FA] sm:h-[310px]">

                        {/* Sky */}
                        <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-[#FFD76A]" />

                        {/* Clouds */}
                        <div className="absolute left-8 top-12 h-3 w-16 rounded-full bg-white/80" />
                        <div className="absolute left-16 top-9 h-3 w-12 rounded-full bg-white/70" />

                        {/* Ground */}
                        <div className="absolute bottom-0 left-0 right-0 h-[34%] bg-[#BCE8C7]" />

                        {/* House */}
                        <div className="absolute bottom-[16%] left-1/2 w-[65%] -translate-x-1/2">

                          {/* Roof */}
                          <div className="relative mx-auto h-0 w-0 border-b-[78px] border-l-[125px] border-r-[125px] border-b-[#171C5C] border-l-transparent border-r-transparent" />

                          {/* House body */}
                          <div className="relative mx-auto h-[125px] w-[78%] bg-white shadow-lg">

                            {/* Door */}
                            <div className="absolute bottom-0 left-1/2 h-[75px] w-[42px] -translate-x-1/2 rounded-t-md bg-[#39B5E8]" />

                            {/* Door handle */}
                            <div className="absolute bottom-[35px] left-[calc(50%+10px)] h-1.5 w-1.5 rounded-full bg-white" />

                            {/* Windows */}
                            <div className="absolute left-[14%] top-[30px] h-[38px] w-[38px] rounded-sm border-4 border-[#171C5C] bg-[#B9EAF8]" />

                            <div className="absolute right-[14%] top-[30px] h-[38px] w-[38px] rounded-sm border-4 border-[#171C5C] bg-[#B9EAF8]" />

                          </div>

                        </div>

                        {/* Trees */}
                        <div className="absolute bottom-[18%] left-[8%]">
                          <div className="mx-auto h-10 w-2 bg-[#795548]" />
                          <div className="h-12 w-12 rounded-full bg-[#55B96B]" />
                        </div>

                        <div className="absolute bottom-[18%] right-[8%]">
                          <div className="mx-auto h-10 w-2 bg-[#795548]" />
                          <div className="h-12 w-12 rounded-full bg-[#55B96B]" />
                        </div>

                      </div>

                      {/* Card bottom */}
                      <div className="flex items-center justify-between px-6 py-5">

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#39B5E8]">
                            HOME LOAN
                          </p>

                          <p className="mt-1 text-lg font-extrabold text-[#171C5C]">
                            Your Dream Home
                          </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF8FC] text-xl text-[#39B5E8]">
                          →
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating card 1 */}
              <div className="home-floating-card absolute left-[2%] top-[18%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-0">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39B5E8] text-white">
                    ₹
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Flexible
                    </p>
                    <p className="text-sm font-bold text-white">
                      Loan Options
                    </p>
                  </div>

                </div>

              </div>

              {/* Floating card 2 */}
              <div
                className="home-floating-card absolute bottom-[16%] right-[0%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-[-2%]"
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

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              HOME FINANCE
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#171C5C] sm:text-5xl lg:text-6xl">

              A smarter way to finance your{" "}

              <span className="text-[#20AEE5]">
                dream home
              </span>

            </h2>

            <p className="mt-7 max-w-[680px] text-lg leading-8 text-slate-600">
              Buying a home is one of the biggest financial decisions you can
              make. Our home loan assistance helps you explore suitable
              financing options through a trusted network of banks and NBFCs.
            </p>

            <p className="mt-5 max-w-[680px] text-lg leading-8 text-slate-600">
              From understanding your requirements to documentation and lender
              coordination, our team helps make the borrowing journey simpler
              and more transparent.
            </p>

            <Link
              href="/apply"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#171C5C] px-8 py-4 font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#20AEE5] hover:shadow-lg"
            >
              Apply for Home Loan
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* TRUST CARD */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#F2F7FF] p-8 sm:p-10 lg:p-12">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#20AEE5]/10" />

            <p className="relative text-sm font-bold uppercase tracking-[0.12em] text-[#20AEE5]">
              WHY CHOOSE US?
            </p>

            <h3 className="relative mt-4 text-3xl font-extrabold text-[#171C5C] sm:text-4xl">
              Home loan assistance built around you
            </h3>

            <div className="relative mt-8 space-y-6">

              {[
                {
                  title: "Multiple Lender Options",
                  text: "Explore suitable options from our banking and NBFC network.",
                },
                {
                  title: "Expert Assistance",
                  text: "Get support throughout the application and documentation journey.",
                },
                {
                  title: "Transparent Process",
                  text: "Understand your loan journey clearly from application to approval.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#20AEE5] text-xl font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-[#171C5C]">
                      {item.title}
                    </h4>

                    <p className="mt-1 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="bg-[#F5F8FC] px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-[760px]">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              BENEFITS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#171C5C] sm:text-5xl">
              Why consider a home loan?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore home financing options designed around your property,
              income and repayment requirements.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#20AEE5] hover:shadow-[0_20px_45px_rgba(23,28,92,0.10)]"
              >

                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#20AEE5]/5 transition-transform duration-500 group-hover:scale-[2]" />

                <span className="relative text-5xl font-extrabold text-[#20AEE5]/25 transition-colors duration-300 group-hover:text-[#20AEE5]">
                  {benefit.number}
                </span>

                <h3 className="relative mt-6 text-xl font-extrabold text-[#171C5C]">
                  {benefit.title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#20AEE5] transition-all duration-300 group-hover:w-20" />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
                HOME LOAN FEATURES
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#171C5C] sm:text-5xl">

                Financing options
                <span className="text-[#20AEE5]">
                  {" "}for your next move
                </span>

              </h2>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-slate-600">
                Whether you are purchasing a new home or exploring options for
                an existing home loan, our team can help you understand
                suitable financing routes.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl border-2 border-[#171C5C] px-7 py-3.5 font-bold text-[#171C5C] transition-all duration-300 hover:-translate-y-1 hover:border-[#20AEE5] hover:bg-[#20AEE5] hover:text-white"
              >
                Talk to Our Team
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#20AEE5] hover:shadow-lg"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9F8FD] text-sm font-extrabold text-[#20AEE5] transition-all duration-300 group-hover:bg-[#20AEE5] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pt-1 font-semibold leading-6 text-[#171C5C]">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ELIGIBILITY + DOCUMENTS
      ========================================================= */}
      <section className="bg-[#F5F8FC] px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12 max-w-[760px]">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              REQUIREMENTS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#171C5C] sm:text-5xl">
              Know what you need before applying
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Eligibility and documentation requirements can vary between
              lenders. The following provides a general overview.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* ELIGIBILITY */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#20AEE5]">
                ELIGIBILITY
              </p>

              <h3 className="mt-4 text-3xl font-extrabold text-[#171C5C]">
                Who can apply?
              </h3>

              <div className="mt-8 space-y-4">

                {eligibility.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9F8FD] text-sm font-extrabold text-[#20AEE5]">
                      ✓
                    </span>

                    <span className="leading-7 text-slate-600">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* DOCUMENTS */}
            <div className="group relative overflow-hidden rounded-[28px] bg-[#071B72] p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(7,27,114,0.25)] md:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#00C6FF]/20" />

              <p className="relative text-sm font-bold uppercase tracking-[0.12em] text-[#00C6FF]">
                DOCUMENTATION
              </p>

              <h3 className="relative mt-4 text-3xl font-extrabold">
                Documents generally required
              </h3>

              <div className="relative mt-8 space-y-4">

                {documents.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C6FF] text-sm font-extrabold text-[#071B72]">
                      ✓
                    </span>

                    <span className="leading-7 text-white/85">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          <p className="mt-7 text-sm leading-6 text-slate-500">
            Eligibility, interest rates, loan amount, tenure and documentation
            requirements are subject to the policies and approval criteria of
            the respective bank or NBFC.
          </p>

        </div>

      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-white px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#171C5C] sm:text-5xl">
              From application to home ownership
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-lg leading-8 text-slate-600">
              Our assisted process helps you understand each stage of your
              home loan journey.
            </p>

          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* connecting line */}
            <div className="absolute left-[12%] right-[12%] top-[45px] hidden h-px bg-[#20AEE5]/20 lg:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative z-10 rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#20AEE5] hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B72] text-xl font-extrabold text-[#00C6FF] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20AEE5] group-hover:text-white">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-[#171C5C]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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
      <section className="bg-[#F5F8FC] px-6 py-20 lg:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#20AEE5]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#171C5C] sm:text-5xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Get answers to some common questions about home loan assistance.
            </p>

          </div>

          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-[#20AEE5] open:shadow-md"
              >

                <summary className="cursor-pointer list-none px-6 py-5 text-lg font-bold text-[#171C5C]">
                  <div className="flex items-center justify-between gap-5">

                    <span>
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9F8FD] text-2xl font-normal text-[#20AEE5] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>

                  </div>
                </summary>

                <div className="border-t border-slate-100 px-6 pb-6 pt-5 leading-7 text-slate-600">
                  {faq.answer}
                </div>

              </details>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071B72] px-6 py-20 lg:py-28">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#00C6FF]/15" />

        <div className="absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full border border-[#00C6FF]/10" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[950px] text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00C6FF]">
            GET STARTED
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to take the first step toward your dream home?
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-lg leading-8 text-white/75">
            Submit your details and let our team help you explore suitable home
            loan options from our trusted lender network.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-[0_20px_45px_rgba(0,198,255,0.3)]"
            >
              Apply for Home Loan

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white/40 px-9 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00C6FF] hover:bg-[#00C6FF] hover:text-[#071B72]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
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
                  className="text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-[#20AEE5]"
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
                Contact Us
              </Link>

              <Link
                href="/privacy-policy"
                className="text-white/75 transition-colors hover:text-[#20AEE5]"
              >
                Privacy & Policy
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

              <p>
                302, 3rd Floor, Krishna Plaza,
                <br />
                Khairatabad,
                <br />
                Hyderabad 500004
              </p>

              <a
                href="mailto:info@yesgenesis.in"
                className="block transition-colors hover:text-[#20AEE5]"
              >
                info@yesgenesis.in
              </a>

              <a
                href="tel:+919517889999"
                className="block transition-colors hover:text-[#20AEE5]"
              >
                +91 95178 89999
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
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

    </main>
  );
}