"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

const CIBIL_URL = "https://www.cibil.com/";

export default function CibilScorePage() {
  const [showForm, setShowForm] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanMobile = mobile.replace(/\s/g, "").trim();
    const cleanEmail = email.trim();

    // Validate mobile
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);

      /*
       * Send lead to Google Apps Script.
       *
       * The Apps Script receives:
       * mobile
       * email
       * source
       *
       * It then saves:
       * Date & Time
       * Mobile Number
       * Email
       * Source
       *
       * into the Google Sheet.
       */

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          mobile: cleanMobile,
          email: cleanEmail,
          source: "CIBIL Score",
        }),
      });

      console.log("CIBIL lead submitted");

      setSubmitted(true);

      /*
       * Redirect to official CIBIL website
       * after showing the success message.
       */
      setTimeout(() => {
        window.location.href = CIBIL_URL;
      }, 1200);
    } catch (error) {
      /*
       * Google Apps Script can sometimes return a CORS-related
       * browser error even when the POST request reaches the
       * Apps Script successfully.
       *
       * Therefore, we still show the success state and continue
       * to CIBIL rather than leaving the customer stuck.
       */
      console.error("CIBIL lead submission error:", error);

      setSubmitted(true);

      setTimeout(() => {
        window.location.href = CIBIL_URL;
      }, 1200);
    } finally {
      setSubmitting(false);
    }
  };

  const openForm = () => {
    setSubmitted(false);
    setShowForm(true);
  };

  const closeForm = () => {
    if (!submitting) {
      setShowForm(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[85px]">
          <div className="grid min-h-[500px] items-center gap-10 py-14 md:grid-cols-2 md:py-20">
            {/* LEFT CONTENT */}

            <div className="max-w-[650px]">
              <h1
                className="
                  text-[36px]
                  font-bold
                  leading-tight
                  tracking-[-0.02em]
                  text-[#16163F]
                  sm:text-[42px]
                  md:text-[48px]
                "
              >
                Get your free CIBIL Score
              </h1>

              <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[#16163F]/75 md:text-lg">
                Check your CIBIL Score and understand your credit profile
                before applying for a loan or credit card.
              </p>

              <button
                type="button"
                onClick={openForm}
                className="
                  mt-6
                  rounded-full
                  bg-[#16163F]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#25256b]
                  hover:shadow-lg
                "
              >
                GET FREE CIBIL SCORE
              </button>

              {/* LOGIN */}

              <p className="mt-6 text-[16px] text-[#16163F]">
                Already have a CIBIL account?{" "}
                <a
                  href={CIBIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  Log In
                </a>
              </p>

              {/* INFORMATION */}

              <p className="mt-4 max-w-[625px] text-[12px] leading-relaxed text-[#16163F]/80">
                If an individual has already availed a Free CIBIL Score &
                Report from the TransUnion CIBIL website or mobile application
                on or after January 1, 2026, they will be eligible for their
                next Free report on January 1, 2027.
              </p>
            </div>

            {/* RIGHT CIBIL IMAGE */}

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/assets/cibilscore.png"
                  alt="CIBIL Score gauge showing credit score range from 300 to 900"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NAVY ANNOUNCEMENT BAR
      ===================================================== */}

      <section className="bg-[#16163F]">
        <div className="mx-auto flex min-h-[57px] max-w-[1440px] items-center justify-center px-6">
          <p className="text-center text-sm font-bold uppercase tracking-wide text-white md:text-[18px]">
            FREE CIBIL SCORE IS AVAILABLE
          </p>
        </div>
      </section>

      {/* =====================================================
          CIBIL INFORMATION SECTION
      ===================================================== */}

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid items-start gap-12 md:grid-cols-[220px_1fr] md:gap-20">
            {/* LEFT */}

            <div>
              <h2 className="text-[20px] font-bold text-[#16163F]">
                Free CIBIL Score
              </h2>

              <button
                type="button"
                onClick={openForm}
                className="
                  mt-3
                  w-full
                  max-w-[160px]
                  rounded-full
                  bg-[#16163F]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#25256b]
                  hover:shadow-md
                "
              >
                Get Started now
              </button>
            </div>

            {/* RIGHT INFORMATION */}

            <div className="space-y-4">
              <CibilInfo
                icon="score"
                text="Your latest CIBIL Score, a 3-digit numeric summary of your credit history (between 300 to 900)."
              />

              <CibilInfo
                icon="refresh"
                text="A summary of your credit payment history, gathered from information provided by lenders."
              />

              <CibilInfo
                icon="personal"
                text="Personal information such as your name, date of birth and gender linked to your loan and credit cards."
              />

              <CibilInfo
                icon="enquiry"
                text="A list of all enquiries made by the lender for your loan and credit card applications for last 36 months."
              />

              <CibilInfo
                icon="bank"
                text="Details of all your active and inactive loan and credit card accounts."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHECK CIBIL
      ===================================================== */}

      <section className="bg-[#F8F8FB] py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563FF]">
            Know Before You Apply
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#16163F] md:text-3xl">
            Why check your CIBIL Score?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Understand Your Credit Health"
              text="Know where you stand before applying for a loan or credit card."
            />

            <InfoCard
              title="Improve Your Eligibility"
              text="A healthy credit profile can help you access suitable financial products."
            />

            <InfoCard
              title="Plan Your Finances"
              text="Stay informed about your credit history and manage your borrowing better."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#16163F] py-14 md:py-16">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to check your CIBIL Score?
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-sm leading-relaxed text-white/75 md:text-base">
            Enter your details and continue to the official CIBIL website.
          </p>

          <button
            type="button"
            onClick={openForm}
            className="
              mt-7
              rounded-full
              bg-white
              px-7
              py-3
              text-sm
              font-bold
              text-[#16163F]
              transition-all
              duration-200
              hover:scale-[1.02]
              hover:shadow-xl
            "
          >
            Check CIBIL Score
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          CIBIL LEAD FORM MODAL
      ===================================================== */}

      {showForm && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            px-5
            backdrop-blur-sm
          "
          onClick={closeForm}
        >
          <div
            className="
              relative
              w-full
              max-w-[470px]
              rounded-2xl
              bg-white
              p-6
              shadow-2xl
              md:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeForm}
              disabled={submitting}
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-xl
                text-gray-500
                transition-colors
                hover:bg-gray-100
                hover:text-[#16163F]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
              aria-label="Close"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#2563FF]">
                  CIBIL Score
                </p>

                <h2 className="mt-2 pr-8 text-2xl font-bold text-[#16163F]">
                  Check Your CIBIL Score
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Enter your details to continue to the official CIBIL
                  website.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-5"
                >
                  {/* MOBILE NUMBER */}

                  <div>
                    <label
                      htmlFor="cibil-mobile"
                      className="mb-2 block text-sm font-semibold text-[#16163F]"
                    >
                      Mobile Number
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <div className="flex">
                      <span
                        className="
                          flex
                          items-center
                          rounded-l-lg
                          border
                          border-r-0
                          border-gray-300
                          bg-gray-50
                          px-3
                          text-sm
                          font-medium
                          text-gray-600
                        "
                      >
                        +91
                      </span>

                      <input
                        id="cibil-mobile"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="9876543210"
                        value={mobile}
                        onChange={(e) =>
                          setMobile(
                            e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10)
                          )
                        }
                        className="
                          w-full
                          rounded-r-lg
                          border
                          border-gray-300
                          px-4
                          py-3
                          text-sm
                          text-[#16163F]
                          outline-none
                          focus:border-[#2563FF]
                          focus:ring-2
                          focus:ring-[#2563FF]/10
                        "
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="cibil-email"
                      className="mb-2 block text-sm font-semibold text-[#16163F]"
                    >
                      Email Address
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="cibil-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-3
                        text-sm
                        text-[#16163F]
                        outline-none
                        focus:border-[#2563FF]
                        focus:ring-2
                        focus:ring-[#2563FF]/10
                      "
                      required
                    />
                  </div>

                  {/* CONSENT */}

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#16163F]"
                    />

                    <span className="text-xs leading-relaxed text-gray-600">
                      I agree to be contacted by Yes Genesis Fintech
                      regarding financial products and services.
                    </span>
                  </label>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      w-full
                      rounded-lg
                      bg-[#16163F]
                      px-5
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-200
                      hover:bg-[#25256b]
                      hover:shadow-lg
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {submitting ? "Submitting..." : "Continue to CIBIL"}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-gray-500">
                    You will be redirected to the official CIBIL website
                    after submitting your details.
                  </p>
                </form>
              </>
            ) : (
              /* =====================================================
                 SUCCESS MESSAGE
              ===================================================== */

              <div className="py-8 text-center">
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                    text-2xl
                    text-green-600
                  "
                >
                  ✓
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#16163F]">
                  Thank You
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Redirecting you to the official CIBIL website...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   CIBIL INFORMATION ITEM
========================================================= */

function CibilInfo({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  const icons: Record<string, string> = {
    score: "◉",
    refresh: "↻",
    personal: "▣",
    enquiry: "≡",
    bank: "♜",
  };

  return (
    <div className="flex items-start gap-3">
      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-[#F9EDED]
          text-sm
          font-bold
          text-[#16163F]
        "
      >
        {icons[icon]}
      </div>

      <p className="pt-1 text-sm leading-relaxed text-[#16163F] md:text-[15px]">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   INFORMATION CARD
========================================================= */

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h3 className="text-lg font-bold text-[#16163F]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
}