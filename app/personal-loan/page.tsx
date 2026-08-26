import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const benefits = [
  {
    number: "01",
    title: "Quick Processing",
    description:
      "Get your personal loan application processed through our trusted banking and NBFC network.",
  },
  {
    number: "02",
    title: "Flexible Tenure",
    description:
      "Choose a repayment tenure that works comfortably with your financial requirements.",
  },
  {
    number: "03",
    title: "Competitive Rates",
    description:
      "Access suitable loan options from multiple banks and financial institutions.",
  },
  {
    number: "04",
    title: "Minimal Documentation",
    description:
      "A simple documentation process makes your borrowing experience easier and faster.",
  },
];

const features = [
  "Loan solutions from trusted banks and NBFCs",
  "Flexible repayment options",
  "Simple application process",
  "Transparent loan assistance",
  "Multiple lender options",
  "Dedicated customer support",
];

const eligibility = [
  "Indian citizen",
  "Minimum age of 21 years",
  "Stable source of income",
  "Salaried or self-employed applicant",
  "Valid identity and address proof",
  "Subject to lender-specific eligibility criteria",
];

const documents = [
  "PAN Card",
  "Aadhaar Card / Address Proof",
  "Latest salary slips",
  "Bank account statement",
  "Employment or business proof",
  "Additional documents as required by the lender",
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your basic details and personal loan requirement.",
  },
  {
    number: "02",
    title: "Verification",
    description: "Our team reviews your information and connects you with suitable lenders.",
  },
  {
    number: "03",
    title: "Approval",
    description: "The selected bank or NBFC evaluates your application.",
  },
  {
    number: "04",
    title: "Disbursement",
    description: "Once approved, the loan amount is disbursed according to lender terms.",
  },
];

const faqs = [
  {
    question: "What is a personal loan?",
    answer:
      "A personal loan is an unsecured loan that can be used for various personal financial requirements such as emergencies, education, travel, medical expenses, weddings or other planned expenses.",
  },
  {
    question: "How much personal loan can I get?",
    answer:
      "The eligible loan amount depends on factors such as your income, credit profile, repayment capacity, employment status and the lender's policies.",
  },
  {
    question: "Do I need collateral for a personal loan?",
    answer:
      "Personal loans are generally unsecured, meaning collateral is usually not required. Final requirements depend on the lender and applicant profile.",
  },
  {
    question: "How long does personal loan approval take?",
    answer:
      "Processing time varies between lenders and depends on document verification, applicant eligibility and other approval requirements.",
  },
];

const loanLinks = [
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/loans/business-loan" },
  { label: "Home Loan", href: "/loans/home-loan" },
  { label: "Mortgage Loan", href: "/loans/mortgage-loan" },
  { label: "Car Loan", href: "/loans/car-loan" },
  { label: "Education Loan", href: "/loans/education-loan" },
];

export default function PersonalLoanPage() {
  return (
    <main className="bg-white text-[#171C63]">
      <Navbar />


      {/* =====================================================
          PERSONAL LOAN HERO
          Background artwork: /public/assets/personal-loan-visual.png
      ===================================================== */}
      <section
        className="relative min-h-[720px] overflow-hidden bg-[#061A70] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/personal-loan-visual.png")' }}
      >
        {/* Subtle overlay keeps the left-side typography crisp while
            preserving the supplied artwork on the right. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A70]/10 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-container items-center px-6 py-16 md:px-8">
          <div className="w-full max-w-[700px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2EB9F0] md:text-base">
              PERSONAL FINANCE
            </p>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px] lg:text-[76px]">
              Avail Up To
              <span className="block text-[#36B8F0]">
                50,00,000
              </span>
              <span className="block text-white">
                Personal Loan in Just Few
              </span>
              <span className="block text-white">
                Clicks!
              </span>
            </h1>

            <p className="mt-8 max-w-[760px] text-base font-medium leading-7 text-white md:text-xl md:leading-8">
              100% Paperless Process | up to 72 months tenure | starts @ 10.5% p.a.
            </p>

            <div className="mt-9">
              <Link
                href="/apply"
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#38B5E8] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#25A7DC]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-white px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>
              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Personal Finance
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                A smarter way to access
                <span className="text-[#00BFF3]"> personal finance</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you are planning an important purchase, managing an
                unexpected expense or consolidating your financial
                commitments, our loan distribution network can help you
                explore suitable personal loan options.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                We connect customers with banks and NBFCs and assist them
                throughout the application journey.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F3F7FF] p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-[#00AEEA]">
                Why choose us?
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Trusted loan assistance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Our team helps you understand your options and connect with
                suitable lenders based on your requirements and eligibility.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-xl bg-[#071B72] px-6 py-3 font-semibold text-white transition hover:bg-[#00AEEA]"
              >
                Talk to Our Team
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="bg-[#F5F8FC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              Benefits
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Why consider a personal loan?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00C6FF] hover:shadow-xl"
              >
                <span className="text-4xl font-bold text-[#00C6FF]/30 group-hover:text-[#00C6FF]">
                  {benefit.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="bg-white px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Loan Features
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Personal loan options
                <span className="text-[#00BFF3]"> built around you</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore personal loan solutions through our network of
                financial partners.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C6FF] text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY + DOCUMENTS
      ===================================================== */}
      <section className="bg-[#F5F8FC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Eligibility */}
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
                Eligibility
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Who can apply?
              </h2>

              <div className="mt-8 space-y-4">
                {eligibility.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-xl font-bold text-[#00C6FF]">
                      ✓
                    </span>

                    <span className="text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="rounded-3xl bg-[#071B72] p-8 text-white shadow-sm md:p-10">
              <p className="font-bold uppercase tracking-wider text-[#00C6FF]">
                Documentation
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Documents generally required
              </h2>

              <div className="mt-8 space-y-4">
                {documents.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-xl font-bold text-[#00C6FF]">
                      ✓
                    </span>

                    <span className="text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Eligibility, interest rates, loan amount, tenure and documentation
            requirements are subject to the policies and approval criteria of
            the respective bank or NBFC.
          </p>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-white px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-container">

          <div className="text-center">
            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              How it works
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Our simple process helps you move from application to loan
              disbursement with less hassle.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">

                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <span className="text-4xl font-bold text-[#00C6FF]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-[#F5F8FC] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-wider text-[#00AEEA]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="cursor-pointer list-none px-6 py-5 text-lg font-bold">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

                    <span className="text-2xl text-[#00AEEA] transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <div className="px-6 pb-6 leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#071B72] px-6 py-20 md:px-8">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00C6FF]/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#00C6FF]/10" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-wider text-[#00C6FF]">
            Get Started
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Ready to explore your personal loan options?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Connect with YES Genesis FinTech and take the first step towards
            finding a suitable loan solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-xl bg-white px-8 py-4 font-bold text-[#071B72] transition hover:bg-[#00C6FF] hover:text-white"
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-[#00C6FF] px-8 py-4 font-bold text-[#00C6FF] transition hover:bg-[#00C6FF] hover:text-white"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}