"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const benefits = [
  ["01", "Quick Processing", "Get your application processed through our lender network."],
  ["02", "Flexible Tenure", "Choose a repayment tenure suited to your monthly plan."],
  ["03", "Multiple Lenders", "Explore suitable options from banks and financial institutions."],
  ["04", "Simple Documentation", "Get assistance throughout the financing process."],
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
  "Indian citizen",
  "Minimum age generally 21 years",
  "Stable source of income",
  "Salaried or self-employed applicant",
  "Valid identity and address proof",
  "Subject to lender-specific criteria",
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
  ["02", "Profile Review", "Our team reviews your profile and lender options."],
  ["03", "Approval", "The selected lender evaluates your application."],
  ["04", "Disbursement", "The approved loan is processed according to lender terms."],
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
          loanType: "Car Loan",
          message: message.trim(),
          source: "Car Loan",
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
        @keyframes carReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes carFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes carOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .car-reveal {
          animation: carReveal .8s ease-out both;
        }

        .car-float {
          animation: carFloat 5s ease-in-out infinite;
        }

        .car-orbit {
          animation: carOrbit 25s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .car-reveal,
          .car-float,
          .car-orbit {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />

      <section className="relative overflow-hidden bg-[#071B72]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(0,198,255,.2),transparent_32%)]" />
        <div className="absolute -right-[260px] -top-[280px] h-[720px] w-[720px] rounded-full border border-white/10" />

        <div className="mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div className="car-reveal relative z-10 max-w-[720px]">
            <p className="mb-5 text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              SMARTER CAR FINANCE
            </p>

            <h1 className="text-5xl font-extrabold leading-[.98] tracking-[-.04em] text-white sm:text-6xl lg:text-[68px]">
              Make Your
              <span className="block text-[#39B5E8]">Dream Car</span>
              <span className="block">a Reality</span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[700px] text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Explore flexible car loan options through our trusted network of
              banks and NBFCs, with simple application assistance from enquiry
              to approval.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-white/70">
              <span>✓ Flexible Tenure</span>
              <span>✓ Multiple Lenders</span>
              <span>✓ Simple Process</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(true);
                }}
                className="rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#27A7DB]"
              >
                Apply for Car Loan →
              </button>

              <Link
                href="/emi-calculator"
                className="rounded-xl border-2 border-[#39B5E8] px-9 py-4 text-lg font-bold text-[#39B5E8] transition hover:bg-[#39B5E8] hover:text-white"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {/* CAR VISUAL */}
          <div className="relative flex min-h-[500px] items-center justify-center">
            <div className="car-float relative w-full max-w-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C6FF]/15 blur-3xl" />

              <div className="car-orbit absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39B5E8]/20" />

              <div className="relative mx-auto w-[82%]">
                <div className="relative pt-[25%]">
                  {/* roof */}
                  <div className="mx-auto h-[100px] w-[55%] rounded-t-[100px] border-[18px] border-[#39B5E8] border-b-0 bg-[#0B286F]" />

                  {/* windows */}
                  <div className="absolute left-[25%] top-[38px] flex w-[50%] gap-1">
                    <div className="h-[58px] w-1/2 rounded-tl-[45px] bg-[#07152F]" />
                    <div className="h-[58px] w-1/2 rounded-tr-[45px] bg-[#07152F]" />
                  </div>

                  {/* body */}
                  <div className="relative -mt-1 h-[135px] rounded-[45px] border-4 border-[#39B5E8] bg-gradient-to-b from-[#183F9C] to-[#071B72] shadow-[0_25px_70px_rgba(0,198,255,.3)]">
                    <div className="absolute left-7 top-12 h-7 w-14 rounded-full bg-[#A6F3FF] shadow-[0_0_25px_rgba(0,198,255,.8)]" />

                    <div className="absolute right-7 top-12 h-7 w-14 rounded-full bg-[#A6F3FF] shadow-[0_0_25px_rgba(0,198,255,.8)]" />

                    <div className="absolute bottom-5 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full border border-[#39B5E8] bg-[#071B72]" />

                    <div className="absolute -bottom-9 left-[10%] h-[70px] w-[70px] rounded-full border-[10px] border-[#07152F] bg-[#152A50] shadow-[0_0_0_4px_#39B5E8]" />

                    <div className="absolute -bottom-9 right-[10%] h-[70px] w-[70px] rounded-full border-[10px] border-[#07152F] bg-[#152A50] shadow-[0_0_0_4px_#39B5E8]" />
                  </div>
                </div>

                <div className="absolute right-0 top-[10%] rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  <p className="text-xs text-white/60">Flexible</p>
                  <p className="font-bold">Car Finance</p>
                </div>

                <div className="absolute bottom-[5%] left-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  <p className="text-xs text-white/60">Multiple</p>
                  <p className="font-bold">Lender Options</p>
                </div>
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
            Car Loan Benefits
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
              Finance Your Next Car
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

      <section className="px-6 py-24">
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
            DRIVE YOUR DREAM
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Get Started With Your Car Loan
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
                <p className="font-bold text-[#39B5E8]">CAR LOAN</p>
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