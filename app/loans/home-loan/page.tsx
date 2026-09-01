"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const benefits = [
  {
    number: "01",
    title: "Competitive Rates",
    text: "Explore suitable home loan options through our trusted lending network.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    text: "Choose repayment options based on your financial profile.",
  },
  {
    number: "03",
    title: "Multiple Lenders",
    text: "Compare suitable options from multiple banks and NBFCs.",
  },
  {
    number: "04",
    title: "Simple Process",
    text: "Get assistance with documentation and the application journey.",
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
  "Property-related documents",
];

const steps = [
  ["01", "Apply", "Submit your basic details and home loan requirement."],
  ["02", "Profile Review", "Our team reviews your profile and lender options."],
  ["03", "Approval", "The selected lender evaluates your application."],
  ["04", "Disbursement", "The approved loan is processed according to lender terms."],
];

const faqs = [
  [
    "What is a home loan?",
    "A home loan is a secured loan that can be used for purchasing or constructing a residential property, subject to lender policies.",
  ],
  [
    "How much home loan can I get?",
    "The eligible amount depends on income, repayment capacity, credit profile, property value and lender policies.",
  ],
  [
    "Can self-employed people apply?",
    "Yes. Self-employed applicants may be eligible subject to income documentation and lender-specific criteria.",
  ],
  [
    "What documents are required?",
    "Typical requirements include identity proof, address proof, income documents, bank statements and property documents.",
  ],
];

export default function HomeLoanPage() {
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
          loanType: "Home Loan",
          message: message.trim(),
          source: "Home Loan",
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
        @keyframes homeReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .home-reveal {
          animation: homeReveal 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />

      {/* =====================================================
          HOME LOAN HERO
          Background:
          /public/assets/home-loan-visual.png
      ===================================================== */}
      <section
        className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/home-loan-visual.png")',
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/20 via-[#061A70]/5 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
          <div className="home-reveal w-full max-w-[720px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
              HOME FINANCE
            </p>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Turn Your
              <span className="block text-[#36B8F0]">
                Dream Home
              </span>
              <span className="block text-white">
                Into Reality
              </span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
              Explore flexible home loan solutions through our trusted network
              of banks and NBFCs. Simple process, expert assistance and
              multiple lending options.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(true);
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
              <span>✓ Multiple Lenders</span>
              <span>✓ Flexible Tenure</span>
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
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Home Loan Benefits
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
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              SOLUTIONS
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Designed Around Your Home
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Explore lending solutions suited to your property purchase and
              financial requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#39B5E8]">
                  0{index + 1}
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
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
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
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              DOCUMENTS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              What You May Need
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
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            SIMPLE PROCESS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            From Application to Home
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
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-[900px]">
          <p className="text-center text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-4xl font-extrabold">
            Home Loan Questions
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
          <p className="font-bold tracking-[.16em] text-[#39B5E8]">
            READY TO START?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Take the First Step Towards Your Dream Home
          </h2>

          <button
            onClick={() => {
              setSubmitted(false);
              setShowForm(true);
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
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#39B5E8]">
                  HOME LOAN
                </p>

                <h2 className="mt-1 text-3xl font-extrabold">
                  Apply Now
                </h2>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-2xl text-gray-500"
                aria-label="Close application form"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8FC] text-3xl text-[#39B5E8]">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-extrabold">
                  Thank You!
                </h3>

                <p className="mt-3 text-gray-600">
                  Your enquiry has been submitted successfully.
                </p>

                <button
                  onClick={() => setShowForm(false)}
                  className="mt-7 rounded-xl bg-[#071B72] px-7 py-3 font-bold text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  type="email"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirement"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <button
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#071B72] px-6 py-4 font-bold text-white transition hover:bg-[#10278A] disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}