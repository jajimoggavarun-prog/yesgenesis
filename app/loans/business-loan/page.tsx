import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const eligibilityCards = [
  {
    title: "Salaried / Professional",
    points: [
      "Regular monthly income",
      "Stable employment profile",
      "Age 21 years & above",
      "Valid KYC documents",
    ],
    icon: "₹",
  },
  {
    title: "Self-Employed / Business Owner",
    points: [
      "Established business profile",
      "ITR / financial documents",
      "Age 21 years & above",
      "Valid KYC documents",
    ],
    icon: "▣",
  },
];

const benefits = [
  {
    value: "1000+",
    title: "Happy Customers",
    icon: "👥",
  },
  {
    value: "50+",
    title: "Banking Partners",
    icon: "▤",
  },
  {
    value: "20+",
    title: "NBFC Partners",
    icon: "%",
  },
  {
    value: "₹10 Cr",
    title: "Loan Amount",
    icon: "₹",
  },
  {
    value: "Flexible",
    title: "Repayment",
    icon: "↻",
  },
  {
    value: "100%",
    title: "Paperless Process",
    icon: "✓",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Quick",
    subtitle: "Registration",
    description:
      "Submit your basic details through our simple application process.",
  },
  {
    number: "02",
    title: "Check",
    subtitle: "Eligibility",
    description:
      "Our team evaluates your profile and available loan options.",
  },
  {
    number: "03",
    title: "Submit",
    subtitle: "Documents",
    description:
      "Provide the required financial and KYC documents.",
  },
  {
    number: "04",
    title: "Bank",
    subtitle: "Verification",
    description:
      "The selected lender verifies your application and documents.",
  },
  {
    number: "05",
    title: "Loan",
    subtitle: "Sanction",
    description:
      "Once approved, the lender proceeds with sanction and disbursal.",
  },
];

const businessAdvantages = [
  "Multiple lending options",
  "Dedicated loan assistance",
  "Simple documentation process",
  "Paperless application support",
  "Flexible repayment options",
  "Support throughout the application",
];

export default function BusinessLoanPage() {
  return (
    <main className="min-h-screen bg-white text-[#16163f]">
      <Navbar />

      {/* =========================================================
          BUSINESS LOAN HERO
          Reference: Personal Loan Hero
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#061A70]">
        {/* Business Loan artwork */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/business-loan-visual.png')",
          }}
        />

        {/* Left-side readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70] via-[#061A70]/95 to-transparent" />

        {/* Subtle bottom glow */}
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[#073AAB]/30 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-[80px] xl:px-[120px]">
          <div className="w-full max-w-[760px]">
            {/* Eyebrow */}
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] sm:text-base">
              Business Finance
            </p>

            {/* Main heading */}
            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Avail Up To

              <span className="block text-[#36B8F0]">
                ₹10 Cr Business Loan
              </span>

              <span className="block">
                In Just a Few
              </span>

              <span className="block">
                Clicks!
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-7 max-w-[760px] text-base font-medium leading-7 text-white sm:text-lg">
              100% Paperless Process{" "}
              <span className="text-white/45">|</span>{" "}
              Flexible Tenure{" "}
              <span className="text-white/45">|</span>{" "}
              Competitive Interest Rates
            </p>

            {/* CTA */}
            <a
              href="/apply"
              className="mt-8 inline-flex h-[56px] items-center justify-center rounded-[14px] bg-[#36B8F0] px-9 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#43C2F4] hover:shadow-[0_12px_30px_rgba(54,184,240,0.25)]"
            >
              Apply for Business Loan
            </a>

            {/* Disclaimer */}
            <p className="mt-4 max-w-[680px] text-xs leading-5 text-white/55">
              Loan approval and terms are subject to lender eligibility,
              documentation and verification.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ELIGIBILITY
      ========================================================= */}
      <section className="bg-[#16163F] px-6 py-20 sm:px-10 lg:px-16 xl:px-[120px]">
        <div className="mx-auto max-w-[1190px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#33A7DD]">
              Eligibility
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Business Loan Eligibility Criteria
            </h2>

            <p className="mx-auto mt-4 max-w-[680px] text-sm leading-6 text-white/70 sm:text-base">
              Eligibility requirements may vary depending on the lender,
              applicant profile, business type and financial documents.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {eligibilityCards.map((card) => (
              <div
                key={card.title}
                className="relative min-h-[340px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <div className="flex min-h-[76px] items-center bg-[#33A7DD] px-7 sm:px-9">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {card.title}
                  </h3>
                </div>

                <div className="relative p-7 sm:p-9">
                  <ul className="space-y-5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-base font-medium leading-6 text-[#011251]"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#33A7DD]/15 text-xs font-bold text-[#33A7DD]">
                          ✓
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-5 right-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF8FD] text-2xl font-bold text-[#33A7DD]">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-white/50">
            *Final eligibility and loan amount are determined by the respective
            lender based on its credit policy.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#16163F] px-6 pb-20 sm:px-10 lg:px-16 xl:px-[107px]">
        <div className="mx-auto max-w-[1205px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#33A7DD]">
              Why Choose Us?
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Choose Yes Genesis Fintech?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex min-h-[210px] flex-col items-center justify-between rounded-[16px] bg-white px-4 py-7 text-center shadow-[0_5px_18px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16163F] text-xl font-bold text-white">
                  {benefit.icon}
                </div>

                <div className="mt-5">
                  <p className="text-lg font-extrabold text-[#16163F]">
                    {benefit.value}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-5 text-[#023078]">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS FINANCING ADVANTAGES
      ========================================================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 xl:px-[107px]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#33A7DD]">
              Business Financing
            </p>

            <h2 className="max-w-[620px] text-3xl font-bold leading-tight text-[#16163F] sm:text-4xl lg:text-5xl">
              Finance your business with the right lending option
            </h2>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-[#4B5563]">
              Whether you need funds for expansion, working capital,
              equipment, inventory or other business requirements, our team
              helps you explore suitable lending options from multiple
              financial partners.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {businessAdvantages.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#E6E9F2] bg-[#F8FAFF] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#33A7DD] text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="text-sm font-semibold text-[#16163F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[30px] bg-[#33A7DD]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[24px] bg-[#EEF6FF] p-8 sm:p-12">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16163F] text-3xl font-bold text-[#33A7DD]">
                ₹
              </div>

              <h3 className="text-2xl font-bold text-[#16163F]">
                Funding that supports your next move
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#526070]">
                Get assistance throughout the loan journey, from initial
                eligibility assessment to documentation and lender
                verification.
              </p>

              <a
                href="/apply"
                className="mt-7 inline-flex rounded-xl bg-[#16163F] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#22225A]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#16163F] px-6 py-20 sm:px-10 lg:px-16 xl:px-[107px]">
        <div className="mx-auto max-w-[1183px]">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#33A7DD]">
              Simple Process
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              How It Works
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-white/65 sm:text-base">
              A simple step-by-step process designed to make your business
              loan journey easier.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[9%] right-[9%] top-[94px] hidden h-px bg-[#33A7DD]/35 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[40px]">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="flex h-[190px] w-full max-w-[190px] flex-col items-center justify-center rounded-[18px] border border-white/10 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-xl font-extrabold text-[#16163F]">
                      {step.number}
                    </div>

                    <div className="mt-5 text-lg font-bold text-[#16163F]">
                      {step.title}
                    </div>

                    <div className="text-lg font-bold text-[#33A7DD]">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="mt-5 max-w-[180px] text-xs leading-5 text-white/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT YES GENESIS
      ========================================================= */}
      <section className="border-b border-[#DFE3ED] bg-white px-6 py-20 sm:px-10 lg:px-16 xl:px-[107px]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-xl bg-[#16163F] px-5 py-3">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                About Yes Genesis Fintech
              </h2>
            </div>

            <p className="mt-7 max-w-[690px] text-base leading-7 text-[#374151]">
              Yes Genesis Fintech Private Limited is a growing Corporate DSA
              serving customers across Andhra Pradesh, Telangana and Chennai.
              We work with a wide network of banks and leading NBFCs to help
              customers explore suitable financial solutions.
            </p>

            <p className="mt-4 max-w-[690px] text-base leading-7 text-[#374151]">
              Our services include Personal Loans, Business Loans, Home Loans,
              Mortgage Loans, Auto Loans, Education Loans, Gold Loans and
              Insurance.
            </p>

            <div className="mt-8 grid max-w-[600px] grid-cols-3 overflow-hidden rounded-[16px] bg-[#16163F]">
              <div className="border-r border-white/10 px-4 py-6 text-center">
                <p className="text-2xl font-extrabold text-white">60+</p>
                <p className="mt-1 text-xs font-medium text-white/65">
                  Branches
                </p>
              </div>

              <div className="border-r border-white/10 px-4 py-6 text-center">
                <p className="text-2xl font-extrabold text-white">50+</p>
                <p className="mt-1 text-xs font-medium text-white/65">
                  Banks
                </p>
              </div>

              <div className="px-4 py-6 text-center">
                <p className="text-2xl font-extrabold text-white">20+</p>
                <p className="mt-1 text-xs font-medium text-white/65">
                  NBFCs
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-[330px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[24px] bg-[#EEF7FF]">
              <div className="absolute h-[250px] w-[250px] rounded-full bg-[#33A7DD]/10" />

              <div className="relative text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#16163F] text-5xl font-bold text-[#33A7DD]">
                  ₹
                </div>

                <p className="mt-6 text-xl font-bold text-[#16163F]">
                  Business Finance
                </p>

                <p className="mt-2 text-sm text-[#667085]">
                  Simple. Transparent. Assisted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061A70] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[950px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#33A7DD]">
            Ready to Grow?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get the business funding you need
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-white/70">
            Start your business loan application and let our team help you
            explore suitable lending options.
          </p>

          <a
            href="/apply"
            className="mt-8 inline-flex h-[56px] items-center justify-center rounded-[14px] bg-[#33A7DD] px-9 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#43B8EE]"
          >
            Apply for Business Loan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}