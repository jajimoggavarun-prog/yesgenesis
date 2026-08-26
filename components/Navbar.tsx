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
      <div className="hidden md:flex bg-[#18205B] text-white items-center justify-between px-6 md:px-10 py-3">

        <div className="text-sm font-medium">
          Contact Us:{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="transition-colors duration-200 hover:text-[#00C8F8]"
          >
            {siteConfig.phone}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-sm">

          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors duration-200 hover:text-[#00C8F8]"
          >
            Instagram
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors duration-200 hover:text-[#00C8F8]"
          >
            Facebook
          </a>

          <a
            href="#"
            aria-label="X"
            className="transition-colors duration-200 hover:text-[#00C8F8]"
          >
            X
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="transition-colors duration-200 hover:text-[#00C8F8]"
          >
            YouTube
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

        <div className="max-w-container mx-auto flex items-center justify-between px-6 md:px-10 py-3">

          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            href="/"
            className="shrink-0 flex items-center"
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
          <div className="hidden lg:flex items-center gap-8">

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
                  className={`
                    transition-transform
                    duration-200
                    ${loansOpen ? "rotate-180" : ""}
                  `}
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


              {/* LOANS DROPDOWN */}
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


            {/* =================================================
                CIBIL SCORE
            ================================================== */}
            <Link
              href="/cibil-score"
              className="
                text-[16px]
                font-semibold
                text-[#18205B]
                transition-colors
                duration-200
                hover:text-[#2563FF]
                whitespace-nowrap
              "
            >
              CIBIL Score
            </Link>


            {/* =================================================
                EMI CALCULATOR
            ================================================== */}
            <Link
              href="/emi-calculator"
              className="
                text-[16px]
                font-semibold
                text-[#18205B]
                transition-colors
                duration-200
                hover:text-[#2563FF]
                whitespace-nowrap
              "
            >
              EMI Calculator
            </Link>


            {/* =================================================
                DSA BUTTON
            ================================================== */}
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
                    className={`
                      transition-transform
                      duration-200
                      ${loansOpen ? "rotate-180" : ""}
                    `}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
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


              {/* =================================================
                  MOBILE CIBIL SCORE
              ================================================== */}
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


              {/* EMI */}
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