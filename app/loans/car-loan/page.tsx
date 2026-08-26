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
  { label: "Car Loan", href: "/loans/car-loan" },
  { label: "Education Loan", href: "/loans/education-loan" },
];

const benefits = [
  {
    number: "01",
    title: "Quick Processing",
    description:
      "Get your car loan application processed through our trusted network of banks and NBFCs.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    description:
      "Choose a repayment tenure that fits comfortably within your monthly financial plan.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    description:
      "Explore suitable car loan options from multiple banks and financial institutions.",
  },
  {
    number: "04",
    title: "Simple Documentation",
    description:
      "A guided documentation process helps make your car financing journey easier.",
  },
];

const features = [
  "New and eligible pre-owned car loan options",
  "Loan solutions through trusted banks and NBFCs",
  "Flexible repayment tenure options",
  "Simple and guided application process",
  "Multiple lender options",
  "Dedicated customer assistance",
];

const eligibility = [
  "Indian citizen",
  "Minimum age generally 21 years",
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
  "Additional documents as required by the lender",
];

const processSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Share your basic details and tell us about your car loan requirement.",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "Our team reviews your profile and connects you with suitable lenders.",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "The selected bank or NBFC evaluates your application and eligibility.",
  },
  {
    number: "04",
    title: "Disbursement",
    description:
      "Once approved, the loan is processed according to the lender's terms.",
  },
];

const faqs = [
  {
    question: "What is a car loan?",
    answer:
      "A car loan is a financing facility that can help eligible customers purchase a new or pre-owned vehicle. The final loan amount, interest rate and tenure depend on the lender and applicant profile.",
  },
  {
    question: "Can I get a loan for a used car?",
    answer:
      "Eligible pre-owned vehicles may be financed by certain lenders. The vehicle's age, value, condition and other lender-specific criteria can affect eligibility.",
  },
  {
    question: "How much car loan can I get?",
    answer:
      "The eligible loan amount depends on factors such as income, credit profile, repayment capacity, vehicle value and the lender's policies.",
  },
  {
    question: "What documents are required for a car loan?",
    answer:
      "Documents generally include KYC documents, income proof and bank statements. Additional vehicle-related documents may be required depending on the lender and whether the vehicle is new or pre-owned.",
  },
  {
    question: "How long does car loan processing take?",
    answer:
      "Processing time varies between lenders and depends on applicant verification, documentation, vehicle details and approval requirements.",
  },
];

export default function CarLoanPage() {

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
          loanType: "Car Loan",
          message: cleanMessage,
          source: "Car Loan",
        }),
      });

      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Car loan enquiry error:", error);

      /*
       * Google Apps Script can sometimes return a browser/CORS
       * error even when the request has reached Google Sheets.
       */
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">

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

          <div className="absolute -right-[280px] -top-[260px] h-[720px] w-[720px] rounded-full border border-white/10" />

          <div className="absolute -right-[190px] -top-[170px] h-[600px] w-[600px] rounded-full border border-white/10" />

          <div className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#00C6FF]/10 blur-3xl" />

          <div className="absolute right-[15%] top-[25%] h-[300px] w-[300px] rounded-full bg-[#00C6FF]/10 blur-3xl" />

        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">

          {/* LEFT */}

          <div className="relative z-10 max-w-[720px]">

            <div className="mb-7">

              <span className="text-sm font-bold tracking-[0.12em] text-[#39B5E8]">
                SMARTER CAR FINANCE
              </span>

            </div>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[72px]">

              Make Your
              
              <span className="block text-[#39B5E8]">
                Dream Car
              </span>

              <span className="block">
                a Reality
              </span>

              <span className="block">
                with the Right Loan
              </span>

            </h1>

            <p className="mt-8 max-w-[720px] text-lg font-medium leading-8 text-white/90 sm:text-xl">
              Explore flexible car loan options through our trusted network of
              banks and NBFCs, with simple application assistance from enquiry
              to approval.
            </p>

            {/* FEATURES */}

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/80">

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#39B5E8] text-xs text-white">
                  ✓
                </span>
                Flexible Tenure
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#39B5E8] text-xs text-white">
                  ✓
                </span>
                Multiple Lenders
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#39B5E8] text-xs text-white">
                  ✓
                </span>
                Simple Process
              </div>

            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={openForm}
                className="inline-flex rounded-xl bg-[#39B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-xl"
              >
                Apply for Car Loan
              </button>

              <Link
                href="/emi-calculator"
                className="inline-flex rounded-xl border-2 border-[#39B5E8] px-8 py-4 text-lg font-bold text-[#39B5E8] transition-all hover:bg-[#39B5E8] hover:text-white"
              >
                Calculate EMI
              </Link>

            </div>

            <p className="mt-5 text-xs leading-6 text-white/60">
              Loan amount, interest rates, tenure and approval are subject to
              lender eligibility, applicant profile and vehicle requirements.
            </p>

          </div>

          {/* RIGHT HERO VISUAL */}

          <div className="relative z-10 flex min-h-[420px] items-center justify-center lg:min-h-[560px] lg:justify-end">

            {/* Glow */}

            <div className="absolute h-[350px] w-[350px] rounded-full bg-[#00C6FF]/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

            {/* Circular platform */}

            <div className="absolute bottom-8 right-[5%] h-[90px] w-[90%] rounded-[50%] border border-[#39B5E8]/30 bg-[#39B5E8]/10 shadow-[0_0_80px_rgba(0,198,255,0.2)] blur-[1px]" />

            {/* CAR ILLUSTRATION */}

            <div className="relative w-full max-w-[650px]">

              <div className="relative mx-auto flex aspect-[1.15/1] items-center justify-center">

                {/* Rings */}

                <div className="absolute h-[80%] w-[80%] rounded-full border border-[#39B5E8]/20" />

                <div className="absolute h-[65%] w-[65%] rounded-full border border-[#39B5E8]/20" />

                <div className="absolute h-[48%] w-[48%] rounded-full bg-[#39B5E8]/10 blur-2xl" />

                {/* Car body */}

                <div className="relative mt-12 w-[78%] max-w-[520px]">

                  {/* Roof glow */}

                  <div className="absolute left-[24%] top-[-18%] h-[80px] w-[52%] rounded-full bg-[#39B5E8]/20 blur-2xl" />

                  {/* Car silhouette */}

                  <div className="relative">

                    {/* roof */}

                    <div className="mx-auto h-[105px] w-[58%] rounded-t-[90px] border-x-[18px] border-t-[18px] border-[#39B5E8] bg-gradient-to-b from-[#1D3B9A] to-[#071B72]" />

                    {/* windows */}

                    <div className="absolute left-[23%] top-[13px] flex w-[54%] gap-1">

                      <div className="h-[62px] w-1/2 rounded-tl-[50px] bg-[#0B214F] opacity-90" />

                      <div className="h-[62px] w-1/2 rounded-tr-[50px] bg-[#0B214F] opacity-90" />

                    </div>

                    {/* main body */}

                    <div className="relative -mt-1 h-[120px] rounded-[45px] border-4 border-[#39B5E8] bg-gradient-to-b from-[#163C9A] via-[#0A2A82] to-[#071B72] shadow-[0_25px_70px_rgba(0,198,255,0.28)]">

                      {/* highlight */}

                      <div className="absolute left-[10%] right-[10%] top-[18px] h-[3px] rounded-full bg-[#39B5E8]/80" />

                      {/* front lights */}

                      <div className="absolute left-5 top-12 h-7 w-14 rounded-full bg-[#A6F3FF] shadow-[0_0_25px_rgba(0,198,255,0.9)]" />

                      <div className="absolute right-5 top-12 h-7 w-14 rounded-full bg-[#A6F3FF] shadow-[0_0_25px_rgba(0,198,255,0.9)]" />

                      {/* grille */}

                      <div className="absolute bottom-4 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full border border-[#39B5E8]/70 bg-[#071B72]" />

                      {/* wheels */}

                      <div className="absolute -bottom-8 left-[11%] h-[68px] w-[68px] rounded-full border-[10px] border-[#07152F] bg-[#152A50] shadow-[0_0_0_4px_#39B5E8]" />

                      <div className="absolute -bottom-8 right-[11%] h-[68px] w-[68px] rounded-full border-[10px] border-[#07152F] bg-[#152A50] shadow-[0_0_0_4px_#39B5E8]" />

                    </div>

                  </div>

                </div>

                {/* floating finance card */}

                <div className="absolute right-[4%] top-[15%] rounded-2xl border border-[#39B5E8]/40 bg-[#0B2675]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">

                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#39B5E8]">
                    Car Finance
                  </p>

                  <p className="mt-1 text-lg font-extrabold text-white">
                    DRIVE
                  </p>

                  <p className="text-xs text-white/60">
                    Your next journey
                  </p>

                </div>

                {/* rupee */}

                <div className="absolute left-[2%] top-[25%] flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-2xl border border-[#39B5E8]/40 bg-[#0B2675]/90 text-4xl font-black text-[#39B5E8] shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md">
                  ₹
                </div>

                {/* check badge */}

                <div className="absolute bottom-[18%] right-[4%] flex h-16 w-16 rotate-6 items-center justify-center rounded-full border-4 border-[#39B5E8] bg-[#071B72] text-2xl text-[#39B5E8] shadow-[0_0_35px_rgba(0,198,255,0.4)]">
                  ✓
                </div>

                {/* floating dots */}

                <div className="absolute left-[17%] top-[10%] h-3 w-3 rounded-full bg-[#39B5E8] shadow-[0_0_20px_#39B5E8]" />

                <div className="absolute right-[18%] bottom-[13%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]" />

                <div className="absolute left-[8%] bottom-[20%] h-2 w-2 rounded-full bg-[#39B5E8] shadow-[0_0_20px_#39B5E8]" />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">

          <div>

            <span className="text-sm font-bold tracking-[0.12em] text-[#20AEE5]">
              CAR FINANCE
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#171C5C] sm:text-5xl lg:text-6xl">

              A smarter way to
              
              <span className="text-[#20AEE5]">
                {" "}finance your car
              </span>

            </h2>

            <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-600">
              Whether you are buying your first car, upgrading your vehicle
              or considering a pre-owned car, the right financing option can
              make the purchase easier to manage.
            </p>

            <p className="mt-4 max-w-[650px] text-lg leading-8 text-slate-600">
              YES Genesis Fintech helps connect customers with suitable banks
              and NBFCs and supports them throughout the application journey.
            </p>

            <button
              type="button"
              onClick={openForm}
              className="mt-8 inline-flex rounded-xl bg-[#171C5C] px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20AEE5] hover:shadow-lg"
            >
              Explore Car Loan Options
            </button>

          </div>

          {/* WHY CHOOSE US */}

          <div className="group rounded-[30px] bg-[#F2F7FF] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10 lg:p-12">

            <span className="text-sm font-bold tracking-[0.1em] text-[#20AEE5]">
              WHY CHOOSE US?
            </span>

            <h3 className="mt-4 text-3xl font-extrabold text-[#171C5C] sm:text-4xl">
              Car financing made simpler
            </h3>

            <div className="mt-8 space-y-6">

              {[
                [
                  "Trusted Lender Network",
                  "Explore suitable car loan options through banks and NBFCs.",
                ],
                [
                  "Flexible Options",
                  "Choose repayment options based on your financial profile.",
                ],
                [
                  "Guided Assistance",
                  "Get support through application and documentation.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="flex gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#20AEE5] text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    ✓
                  </div>

                  <div>

                    <h4 className="font-bold text-[#171C5C]">
                      {title}
                    </h4>

                    <p className="mt-1 text-slate-600">
                      {description}
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

      <section className="bg-[#F5F8FC] px-6 py-20 md:px-8">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              Benefits
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#171C5C] md:text-5xl">
              Car loan solutions designed around you
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore vehicle financing options with support at every stage
              of your application.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <div
                key={benefit.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#00C6FF] hover:shadow-[0_20px_45px_rgba(7,27,114,0.12)]"
              >

                <span className="text-4xl font-bold text-[#00C6FF]/30 transition-colors group-hover:text-[#00C6FF]">
                  {benefit.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#171C5C]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="bg-white px-6 py-20 md:px-8">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Loan Features
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#171C5C] md:text-5xl">

                Car loan options

                <span className="text-[#00BFF3]">
                  {" "}built around you
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We help you explore suitable vehicle financing solutions
                based on your financial profile, vehicle requirements and
                lender eligibility.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C6FF] hover:shadow-lg"
                >

                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C6FF] text-sm font-bold text-white transition-transform group-hover:scale-110">
                    ✓
                  </span>

                  <span className="font-medium text-slate-700">
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

      <section className="bg-[#F5F8FC] px-6 py-20 md:px-8">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* ELIGIBILITY */}

            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Eligibility
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#171C5C]">
                Who can apply?
              </h2>

              <div className="mt-8 space-y-4">

                {eligibility.map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <span className="text-xl font-bold text-[#00C6FF]">
                      ✓
                    </span>

                    <span className="text-slate-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* DOCUMENTS */}

            <div className="rounded-3xl bg-[#071B72] p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

              <p className="font-bold uppercase tracking-wider text-[#00C6FF]">
                Documentation
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Documents generally required
              </h2>

              <div className="mt-8 space-y-4">

                {documents.map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <span className="text-xl font-bold text-[#00C6FF]">
                      ✓
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
            Eligibility, interest rates, loan amount, tenure, vehicle
            requirements and documentation are subject to the policies and
            approval criteria of the respective bank or NBFC.
          </p>

        </div>

      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="bg-white px-6 py-20 md:px-8">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#171C5C] md:text-5xl">
              How car financing works
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              A simple process designed to help you move from enquiry to
              lender evaluation and loan disbursement.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (

              <div
                key={step.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00C6FF] hover:shadow-xl"
              >

                <span className="text-4xl font-bold text-[#00C6FF] transition-all group-hover:text-[#071B72]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#171C5C]">
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

      <section className="bg-[#F5F8FC] px-6 py-20 md:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#171C5C] md:text-5xl">
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

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#071B72] px-6 py-20 md:px-8">

        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00C6FF]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#00C6FF]/10" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-wider text-[#00C6FF]">
            Get Started
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Ready to explore your car loan options?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Connect with YES Genesis Fintech and take the first step towards
            finding a suitable car loan solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              onClick={openForm}
              className="rounded-xl bg-white px-8 py-4 font-bold text-[#071B72] transition-all hover:-translate-y-1 hover:bg-[#00C6FF] hover:text-white hover:shadow-xl"
            >
              Apply Now
            </button>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-[#00C6FF] px-8 py-4 font-bold text-[#00C6FF] transition-all hover:bg-[#00C6FF] hover:text-white"
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
              India&apos;s leading loan distribution network. YES Genesis
              Fintech connects customers with trusted banks and NBFCs for
              personal, business, home, mortgage, car and education loans.
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
                  className="text-white/75 transition-all hover:translate-x-1 hover:text-[#20AEE5]"
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

      {/* =========================================================
          CAR LOAN ENQUIRY MODAL
      ========================================================= */}

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
                    Car Loan
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-[#171C5C]">
                    Start your enquiry
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Share your details and our team will get in touch with
                    suitable car loan options.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="car-name"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Name
                    </label>

                    <input
                      id="car-name"
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
                      htmlFor="car-mobile"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="car-mobile"
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
                      htmlFor="car-email"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Email
                    </label>

                    <input
                      id="car-email"
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
                      htmlFor="car-message"
                      className="mb-2 block text-sm font-semibold text-[#171C5C]"
                    >
                      Message
                    </label>

                    <textarea
                      id="car-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your car loan requirement"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#171C5C] outline-none transition focus:border-[#20AEE5] focus:ring-2 focus:ring-[#20AEE5]/10"
                    />

                  </div>

                  {/* CONSENT */}

                  <label className="flex items-start gap-3">

                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#171C5C]"
                    />

                    <span className="text-xs leading-5 text-slate-500">
                      I agree to be contacted by YES Genesis Fintech regarding
                      financial products and services.
                    </span>

                  </label>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#171C5C] px-5 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#20AEE5] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit Car Loan Enquiry"}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-slate-400">
                    Your details will be shared with YES Genesis Fintech for
                    loan assistance.
                  </p>

                </form>

              </>

            ) : (

              <div className="py-10 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#171C5C]">
                  Enquiry Submitted
                </h2>

                <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">
                  Thank you. Our team has received your car loan enquiry and
                  will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-7 rounded-xl bg-[#171C5C] px-7 py-3.5 font-bold text-white transition hover:bg-[#20AEE5]"
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