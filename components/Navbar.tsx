"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/lib/data";
import Button from "./Button";

const loans = [
  {
    label: "Personal Loan",
    href: "/personal-loan",
  },
  {
    label: "Business Loan",
    href: "/loans/business-loan",
  },
  {
    label: "Home Loan",
    href: "/loans/home-loan",
  },
  {
    label: "Mortgage Loan",
    href: "/loans/mortgage-loan",
  },
  {
    label: "Car Loan",
    href: "/loans/car-loan",
  },
  {
    label: "Education Loan",
    href: "/loans/education-loan",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setLoansOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}
      <div className="hidden h-[46px] items-center justify-between bg-[#18205B] px-6 text-white md:flex md:px-10">

        {/* Contact */}
        <div className="flex items-center text-sm font-medium leading-none">
          Contact Us:{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="ml-1 transition-colors duration-200 hover:text-[#00C8F8]"
          >
            {siteConfig.phone}
          </a>
        </div>

        {/* =================================================
            SOCIAL MEDIA ICONS
        ================================================== */}
        <div className="flex h-full items-center gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yesgenesis_fintech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white/10 hover:text-[#00C8F8]"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/YesGenesis-Fintech/pfbid02f3SEC1yon66daGfAot2zfGDc94ok7TP2qThGgxhq1ugAVU92WNDnsxvtqU1KpJZNl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white/10 hover:text-[#00C8F8]"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/SGenesisFinTech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white/10 hover:text-[#00C8F8]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.59l-5.16-6.74L5.1 22H1.84l7.61-8.7L1.25 2h6.76l4.66 6.16L18.244 2zm-1.16 17.88h1.8L7.02 4h-1.93l11.994 15.88z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@YesGenesisFintech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white/10 hover:text-[#00C8F8]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
          </a>

        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <nav
        className="bg-white"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex items-center justify-between px-6 py-3 md:px-10 max-w-container">

          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="YES Genesis Fintech home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/assets/yes-genesis-logo-fixed.png"
              alt="YES Genesis Fintech"
              width={231}
              height={80}
              priority
              className="h-[52px] w-auto object-contain"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="hidden items-center gap-8 lg:flex">

            {/* HOME */}
            <Link
              href="/"
              className="
                text-[16px]
                font-semibold
                text-[#18205B]
                transition-colors
                duration-200
                hover:text-[#2563FF]
              "
            >
              Home
            </Link>

            {/* =================================================
                LOANS DROPDOWN
            ================================================== */}
            <div className="relative">

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  text-[16px]
                  font-semibold
                  text-[#18205B]
                  transition-colors
                  duration-200
                  hover:text-[#2563FF]
                "
                aria-haspopup="true"
                aria-expanded={loansOpen}
                onClick={() => setLoansOpen((open) => !open)}
              >
                Loans

                <svg
                  className={`transition-transform duration-200 ${
                    loansOpen ? "rotate-180" : ""
                  }`}
                  width="10"
                  height="6"
                  viewBox="0 0 12 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* DROPDOWN */}
              {loansOpen && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[100]
                    -translate-x-1/2
                    pt-3
                  "
                >
                  <ul
                    className="
                      w-60
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      py-2
                      shadow-[0_10px_35px_rgba(0,0,0,0.15)]
                    "
                  >
                    {loans.map((loan) => (
                      <li key={loan.href}>
                        <Link
                          href={loan.href}
                          onClick={() => setLoansOpen(false)}
                          className="
                            block
                            px-5
                            py-3
                            text-[15px]
                            font-medium
                            text-[#18205B]
                            transition-all
                            duration-150
                            hover:bg-[#F3F6FF]
                            hover:text-[#2563FF]
                          "
                        >
                          {loan.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* CIBIL SCORE */}
            <Link
              href="/cibil-score"
              className="
                whitespace-nowrap
                text-[16px]
                font-semibold
                text-[#18205B]
                transition-colors
                duration-200
                hover:text-[#2563FF]
              "
            >
              CIBIL Score
            </Link>

            {/* EMI CALCULATOR */}
            <Link
              href="/emi-calculator"
              className="
                whitespace-nowrap
                text-[16px]
                font-semibold
                text-[#18205B]
                transition-colors
                duration-200
                hover:text-[#2563FF]
              "
            >
              EMI Calculator
            </Link>

            {/* DSA BUTTON */}
            <Button
              href="/dsa-partner"
              variant="primary"
              className="
                !rounded-xl
                !bg-[#18205B]
                !px-6
                !py-4
                !text-sm
                !font-semibold
                hover:!bg-[#2563FF]
              "
            >
              Become DSA Partner
            </Button>

          </div>

          {/* =================================================
              MOBILE HAMBURGER
          ================================================== */}
          <button
            type="button"
            className="
              rounded-lg
              p-2
              text-[#18205B]
              lg:hidden
            "
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((open) => !open)
            }
          >
            {mobileOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {mobileOpen && (
          <div
            className="
              border-t
              border-gray-200
              bg-white
              px-6
              pb-6
              lg:hidden
            "
          >
            <ul
              className="
                flex
                flex-col
                gap-1
                pt-4
                text-[#18205B]
              "
            >

              {/* HOME */}
              <li>
                <Link
                  href="/"
                  className="
                    block
                    py-3
                    font-semibold
                    transition-colors
                    hover:text-[#2563FF]
                  "
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              {/* MOBILE LOANS */}
              <li>
                <button
                  type="button"
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-3
                    font-semibold
                    transition-colors
                    hover:text-[#2563FF]
                  "
                  aria-expanded={loansOpen}
                  onClick={() =>
                    setLoansOpen((open) => !open)
                  }
                >
                  Loans

                  <svg
                    className={`transition-transform duration-200 ${
                      loansOpen ? "rotate-180" : ""
                    }`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {loansOpen && (
                  <ul
                    className="
                      ml-4
                      border-l-2
                      border-[#00C8F8]
                      pl-4
                    "
                  >
                    {loans.map((loan) => (
                      <li key={loan.href}>
                        <Link
                          href={loan.href}
                          className="
                            block
                            py-2
                            text-sm
                            text-[#18205B]
                            hover:text-[#2563FF]
                          "
                          onClick={closeMobileMenu}
                        >
                          {loan.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* CIBIL SCORE */}
              <li>
                <Link
                  href="/cibil-score"
                  className="
                    block
                    py-3
                    font-semibold
                    text-[#18205B]
                    transition-colors
                    hover:text-[#2563FF]
                  "
                  onClick={closeMobileMenu}
                >
                  CIBIL Score
                </Link>
              </li>

              {/* EMI CALCULATOR */}
              <li>
                <Link
                  href="/emi-calculator"
                  className="
                    block
                    py-3
                    font-semibold
                    transition-colors
                    hover:text-[#2563FF]
                  "
                  onClick={closeMobileMenu}
                >
                  EMI Calculator
                </Link>
              </li>

            </ul>

            {/* MOBILE DSA BUTTON */}
            <Button
              href="/dsa-partner"
              variant="primary"
              className="
                mt-4
                w-full
                !rounded-xl
                !bg-[#18205B]
                !py-4
                hover:!bg-[#2563FF]
              "
              onClick={closeMobileMenu}
            >
              Become DSA Partner
            </Button>

            {/* MOBILE PHONE */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="
                mt-4
                block
                text-center
                text-sm
                text-gray-500
                hover:text-[#2563FF]
              "
            >
              Call us: {siteConfig.phone}
            </a>

          </div>
        )}

      </nav>
    </header>
  );
}