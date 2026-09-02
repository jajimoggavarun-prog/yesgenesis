"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

export default function FranchisePage() {
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

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: cleanName,
          mobile: cleanMobile,
          email: cleanEmail,
          loanType: "Franchise",
          message: cleanMessage,
          source: "Franchise",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
      }

      let result: { success?: boolean; message?: string } | null = null;

      try {
        result = await response.json();
      } catch {
        // Google Apps Script may sometimes return a response
        // that cannot be parsed by the browser.
      }

      if (result && result.success === false) {
        throw new Error(
          result.message || "Unable to submit application."
        );
      }

      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("[FranchiseForm] Submission failed:", error);
      alert(
        "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function openForm() {
    setSubmitted(false);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  return (
    <main className="min-h-screen bg-white text-[#171C5C]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <h1 className="text-3xl font-bold md:text-4xl">
            Apply For Yes Genesis Franchise
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Bring Yes Genesis Fintech&apos;s loan distribution network to
            your city.
          </p>

          <button
            type="button"
            onClick={openForm}
            className="mt-8 inline-flex min-h-[58px] items-center justify-center rounded-xl bg-[#39B5E8] px-9 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#27A7DB] hover:shadow-xl"
          >
            Apply Now
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* =====================================================
          FRANCHISE CONTENT
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT CARD */}
            <div className="rounded-3xl border border-[#171C5C]/10 p-8 shadow-sm sm:p-10">
              <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
                FRANCHISE WITH US
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Bring Yes Genesis To Your City
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We are expanding our branch network across India. If you are
                interested in starting a Yes Genesis Fintech franchise, share
                your details and our partnerships team will contact you.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-3xl bg-[#071B72] p-8 text-white shadow-sm sm:p-10">
              <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
                WHY YES GENESIS
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Build Your Local Loan Business
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                Partner with Yes Genesis Fintech and help customers access
                suitable loan products through our lending network.
              </p>

              <button
                type="button"
                onClick={openForm}
                className="mt-7 rounded-xl bg-[#39B5E8] px-7 py-3 font-bold text-white transition hover:bg-[#27A7DB]"
              >
                Apply For Franchise →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FRANCHISE APPLICATION FORM
          SAME STYLE AS DSA PARTNER
      ===================================================== */}
      {showForm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeForm();
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
            {/* FORM HEADER */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#39B5E8]">
                  YES GENESIS FRANCHISE
                </p>

                <h2 className="mt-1 text-3xl font-extrabold">
                  Apply Now
                </h2>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="text-3xl leading-none text-gray-500 transition hover:text-gray-800"
                aria-label="Close application form"
              >
                ×
              </button>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8FC] text-3xl text-[#39B5E8]">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-extrabold">
                  Thank You!
                </h3>

                <p className="mt-3 text-gray-600">
                  Your franchise enquiry has been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={closeForm}
                  className="mt-7 rounded-xl bg-[#071B72] px-7 py-3 font-bold text-white transition hover:bg-[#10278A]"
                >
                  Close
                </button>
              </div>
            ) : (
              /* APPLICATION FORM */
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* FULL NAME */}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-1 focus:ring-[#39B5E8]"
                />

                {/* MOBILE */}
                <input
                  value={mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setMobile(value.slice(0, 10));
                  }}
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  maxLength={10}
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-1 focus:ring-[#39B5E8]"
                />

                {/* EMAIL */}
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  type="email"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-1 focus:ring-[#39B5E8]"
                />

                {/* MESSAGE */}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your franchise requirement"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#39B5E8] focus:ring-1 focus:ring-[#39B5E8]"
                />

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#071B72] px-6 py-4 font-bold text-white transition hover:bg-[#10278A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}