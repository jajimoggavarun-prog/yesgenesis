"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const benefits = [
  ["01", "Property Backed", "Unlock financial potential from eligible property."],
  ["02", "Flexible Tenure", "Choose repayment options based on lender eligibility."],
  ["03", "Multiple Lenders", "Explore suitable options across our lending network."],
  ["04", "Dedicated Assistance", "Get support through documentation and lender coordination."],
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
  "Indian citizen",
  "Stable income source",
  "Salaried or self-employed applicant",
  "Valid KYC documents",
  "Eligible property ownership",
  "Subject to lender-specific criteria",
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
          loanType: "Mortgage Loan",
          message: message.trim(),
          source: "Mortgage Loan",
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

        @keyframes mortgageFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes mortgageOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .mortgage-reveal {
          animation: mortgageReveal .8s ease-out both;
        }

        .mortgage-float {
          animation: mortgageFloat 5s ease-in-out infinite;
        }

        .mortgage-orbit {
          animation: mortgageOrbit 25s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .mortgage-reveal,
          .mortgage-float,
          .mortgage-orbit {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />

      <section className="relative overflow-hidden bg-[#071B72]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(0,198,255,.18),transparent_32%)]" />
        <div className="absolute -right-[260px] -top-[300px] h-[760px] w-[760px] rounded-full border border-[#00C6FF]/20" />

        <div className="mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="mortgage-reveal relative z-10 max-w-[720px]">
            <p className="mb-5 text-sm font-bold tracking-[.16em] text-[#00C6FF]">
              YES GENESIS FINTECH
            </p>

            <h1 className="text-5xl font-extrabold leading-[.98] tracking-[-.04em] text-white sm:text-6xl lg:text-[70px]">
              Unlock Your
              <span className="block text-[#39B5E8]">
                Property&apos;s
              </span>
              <span className="block">Financial Potential</span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[680px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Explore mortgage loan solutions by leveraging eligible property
              and access suitable lending options through our trusted network.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(true);
                }}
                className="rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#27A7DB]"
              >
                Apply Now →
              </button>

              <Link
                href="/emi-calculator"
                className="rounded-xl border-2 border-[#00C6FF] px-9 py-4 text-lg font-bold text-[#00C6FF] transition hover:bg-[#00C6FF] hover:text-[#071B72]"
              >
                Calculate EMI
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-white/65">
              <span>✓ Property Backed</span>
              <span>✓ Multiple Lenders</span>
              <span>✓ Assisted Process</span>
            </div>
          </div>

          <div className="relative flex min-h-[500px] items-center justify-center">
            <div className="mortgage-float relative w-full max-w-[600px]">
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/15 blur-3xl" />

              <div className="mortgage-orbit absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00C6FF]/15" />

              <div className="relative mx-auto w-[78%] rounded-[36px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <div className="relative h-[340px] bg-gradient-to-br from-[#EAF8FF] to-[#D7F1FA]">
                    <div className="absolute bottom-0 h-[32%] w-full bg-[#BDE8C7]" />

                    <div className="absolute bottom-[17%] left-1/2 -translate-x-1/2">
                      <div className="mx-auto h-0 w-0 border-b-[95px] border-l-[145px] border-r-[145px] border-b-[#171C5C] border-l-transparent border-r-transparent" />

                      <div className="relative mx-auto h-[145px] w-[230px] bg-white shadow-xl">
                        <div className="absolute left-6 top-7 h-12 w-12 border-4 border-[#171C5C] bg-[#B9EAF8]" />
                        <div className="absolute right-6 top-7 h-12 w-12 border-4 border-[#171C5C] bg-[#B9EAF8]" />
                        <div className="absolute bottom-0 left-1/2 h-20 w-12 -translate-x-1/2 rounded-t-md bg-[#39B5E8]" />
                      </div>
                    </div>

                    <div className="absolute left-[10%] top-[13%] rounded-2xl bg-white p-4 shadow-xl">
                      <p className="text-xs font-bold text-[#39B5E8]">
                        PROPERTY
                      </p>
                      <p className="mt-1 font-extrabold text-[#171C5C]">
                        Value Unlock
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-5">
                    <p className="text-xs font-bold tracking-widest text-[#39B5E8]">
                      MORTGAGE LOAN
                    </p>
                    <p className="mt-1 text-lg font-extrabold">
                      Unlock Your Property
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-[18%] rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                <p className="text-xs text-white/60">Property</p>
                <p className="font-bold">Backed Finance</p>
              </div>

              <div className="absolute bottom-[15%] left-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                <p className="text-xs text-white/60">Multiple</p>
                <p className="font-bold">Lender Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            WHY CHOOSE US
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Mortgage Loan Benefits
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-3xl border border-[#171C5C]/10 p-7 transition hover:-translate-y-2 hover:border-[#39B5E8] hover:shadow-xl"
              >
                <span className="font-bold text-[#39B5E8]">{number}</span>
                <h3 className="mt-8 text-xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FAFD] px-6 py-24">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              FEATURES
            </p>
            <h2 className="mt-3 text-4xl font-extrabold">
              Unlock the Value of Your Property
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, i) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-bold text-[#39B5E8]">
                  0{i + 1}
                </span>
                <p className="mt-4 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#071B72] p-9 text-white">
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              ELIGIBILITY
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">Who Can Apply?</h2>

            <div className="mt-8 space-y-4">
              {eligibility.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[#39B5E8]">✓</span>
                  <span className="text-white/80">{item}</span>
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
                  <span className="text-[#39B5E8]">✓</span>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071B72] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1300px]">
          <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
            PROCESS
          </p>
          <h2 className="mt-3 text-4xl font-extrabold">
            A Simple Mortgage Journey
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
                <h3 className="mt-7 text-xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center text-4xl font-extrabold">
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
                  <p className="px-6 pb-6 leading-7 text-gray-600">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1300px] rounded-[36px] bg-[#071B72] p-10 text-center text-white sm:p-16">
          <p className="font-bold tracking-[.16em] text-[#39B5E8]">
            UNLOCK YOUR PROPERTY
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Explore Your Mortgage Loan Options
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

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#39B5E8]">MORTGAGE LOAN</p>
                <h2 className="mt-1 text-3xl font-extrabold">Apply Now</h2>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-2xl text-gray-500"
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
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full rounded-xl border px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  className="w-full rounded-xl border px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  type="email"
                  className="w-full rounded-xl border px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirement"
                  rows={4}
                  className="w-full resize-none rounded-xl border px-5 py-4 outline-none focus:border-[#39B5E8]"
                />

                <button
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#071B72] px-6 py-4 font-bold text-white disabled:opacity-60"
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