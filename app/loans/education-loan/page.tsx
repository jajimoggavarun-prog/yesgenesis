"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const benefits = [
  ["01", "Multiple Lenders", "Explore suitable education financing options."],
  ["02", "Flexible Tenure", "Choose repayment options based on lender terms."],
  ["03", "Guided Process", "Get assistance from application to verification."],
  ["04", "Student Focused", "Solutions designed around eligible education needs."],
];

const features = [
  "Higher education financing",
  "Domestic and eligible international education",
  "Tuition fee assistance",
  "Education-related expense support",
  "Multiple lender options",
  "Dedicated application assistance",
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
  "Student identity proof",
  "Address proof",
  "Academic records",
  "Admission / offer letter",
  "Co-applicant income proof",
  "Bank statements and required documents",
];

const steps = [
  ["01", "Register", "Submit your basic details and education requirement."],
  ["02", "Eligibility", "Our team checks your profile and lender options."],
  ["03", "Documents", "Submit student and co-applicant documents."],
  ["04", "Verification", "The selected lender verifies the application."],
];

const faqs = [
  [
    "What is an education loan?",
    "An education loan helps eligible students and families meet approved education-related expenses through lender-defined terms.",
  ],
  [
    "How much education loan can I get?",
    "The eligible amount depends on the course, institution, applicant profile, co-applicant profile and lender policy.",
  ],
  [
    "Is a co-applicant required?",
    "Co-applicant requirements depend on the lender and applicant profile.",
  ],
  [
    "What documents are required?",
    "Requirements may include admission documentation, identity proof, academic records, income documentation and co-applicant details.",
  ],
];

export default function EducationLoanPage() {
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
          loanType: "Education Loan",
          message: message.trim(),
          source: "Education Loan",
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
        @keyframes educationReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .education-reveal {
          animation: educationReveal 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .education-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <Navbar />

      {/* =====================================================
          EDUCATION LOAN HERO

          Background:
          /public/assets/Education-loan-visual.png

          Same full-background treatment as Personal Loan hero.
      ===================================================== */}
      <section
        className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/assets/Education-loan-visual.png")',
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/20 via-[#061A70]/5 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
          <div className="education-reveal w-full max-w-[720px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
              EDUCATION FINANCE
            </p>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Invest In Your
              <span className="block text-[#36B8F0]">
                Future
              </span>
              <span className="block text-white">
                With Education Finance
              </span>
            </h1>

            <div className="mt-7 h-1 w-24 bg-[#00C6FF]" />

            <p className="mt-7 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
              Explore education loan options through our trusted network of
              lenders and get assistance throughout your application journey.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(true);
                }}
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#38B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#25A7DC]"
              >
                Apply Now →
              </button>

              <Link
                href="/emi-calculator"
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl border-2 border-[#00C6FF] px-10 py-4 text-lg font-bold text-[#00C6FF] transition hover:bg-[#00C6FF] hover:text-[#061A70]"
              >
                Calculate EMI
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-white/75">
              <span>✓ Guided Process</span>
              <span>✓ Multiple Lenders</span>
              <span>✓ Flexible Options</span>
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
            Education Loan Benefits
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-3xl border border-[#171C5C]/10 p-7 transition hover:-translate-y-2 hover:border-[#39B5E8] hover:shadow-xl"
              >
                <span className="font-bold text-[#39B5E8]">
                  {number}
                </span>

                <h3 className="mt-8 text-xl font-extrabold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section className="bg-[#F5FAFD] px-6 py-24">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              SOLUTIONS
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Support Your Academic Journey
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Explore financing solutions for eligible education expenses
              through our network of lenders.
            </p>
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
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#071B72] p-9 text-white">
            <p className="text-sm font-bold tracking-[.16em] text-[#39B5E8]">
              ELIGIBILITY
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Who Can Apply?
            </h2>

            <div className="mt-8 space-y-4">
              {eligibility.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[#39B5E8]">
                    ✓
                  </span>

                  <span className="text-white/80">
                    {item}
                  </span>
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
                  <span className="text-[#39B5E8]">
                    ✓
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
            PROCESS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            A Simple Education Loan Journey
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
          <h2 className="text-center text-4xl font-extrabold">
            Education Loan FAQs
          </h2>

          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer], index) => (
              <div
                key={question}
                className="overflow-hidden rounded-2xl border border-[#171C5C]/10"
              >
                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
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

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1300px] rounded-[36px] bg-[#071B72] p-10 text-center text-white sm:p-16">
          <p className="font-bold tracking-[.16em] text-[#39B5E8]">
            BUILD YOUR FUTURE
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Take the Next Step Towards Your Education
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
          APPLICATION MODAL
      ===================================================== */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#39B5E8]">
                  EDUCATION LOAN
                </p>

                <h2 className="mt-1 text-3xl font-extrabold">
                  Apply Now
                </h2>
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
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
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
                  {submitting
                    ? "Submitting..."
                    : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}