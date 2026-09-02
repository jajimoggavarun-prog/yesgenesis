"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";
  
export default function DsaPartnerPage() {
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
          loanType: "DSA Partner",
          message: message.trim(),
          source: "DSA Partner",
        }),
      });

      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitted(true);

      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
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
            Become a DSA Partner
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Join our network of Direct Selling Agents and earn commissions
            by connecting customers with the right loan products.
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
          DSA PARTNER CONTENT
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-2">

            {/* LEFT CARD */}
            <div className="rounded-3xl border border-[#171C5C]/10 p-8 shadow-sm sm:p-10">
              <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
                PARTNER WITH US
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Grow Your Business With Yes Genesis
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Become a Direct Selling Agent with Yes Genesis Fintech and
                help customers find suitable loan solutions through our
                lending network.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-3xl bg-[#071B72] p-8 text-white shadow-sm sm:p-10">
              <p className="text-sm font-bold tracking-[0.16em] text-[#39B5E8]">
                WHY BECOME A DSA
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Earn While You Connect Customers
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                Connect customers with suitable loan products and build a
                long-term business relationship with Yes Genesis Fintech.
              </p>

              <button
                type="button"
                onClick={openForm}
                className="mt-7 rounded-xl bg-[#39B5E8] px-7 py-3 font-bold text-white transition hover:bg-[#27A7DB]"
              >
                Become a Partner →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION FORM
          SAME STYLE AS MORTGAGE LOAN
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
                  BECOME A DSA PARTNER
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

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}
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
                  type="button"
                  onClick={closeForm}
                  className="mt-7 rounded-xl bg-[#071B72] px-7 py-3 font-bold text-white transition hover:bg-[#10278A]"
                >
                  Close
                </button>
              </div>
            ) : (

              /* =================================================
                  APPLICATION FORM
              ================================================= */
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
                  placeholder="Tell us about your requirement"
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