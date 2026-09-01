import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy And Policy",
  description:
    "Read the Privacy Policy of YES Genesis Fintech Pvt Ltd and understand how your personal information is collected and used.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1E1842] px-4 py-6 sm:px-6 md:px-8">
      {/* Back button */}
      <div className="mx-auto max-w-[1344px]">
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex h-8 w-8 items-center justify-center text-white transition hover:text-[#33A8DE]"
        >
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22 10H2M9 3L2 10L9 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="mx-auto mt-2 max-w-[1344px] space-y-9">
       {/* =====================================================
    TOP PANEL
===================================================== */}
<section className="relative min-h-[664px] overflow-hidden rounded-[10px] bg-white px-8 py-10 sm:px-10 md:px-14 lg:px-[85px]">

  <div className="relative z-10 lg:pr-[430px]">

    <h1 className="text-[28px] font-bold leading-tight text-[#1E1842] md:text-[30px]">
      Privacy{" "}
      <span className="text-[#33A8DE]">
        And Policy
      </span>
    </h1>

    <div className="mt-8 space-y-2 text-[12px] leading-5 text-black sm:text-[14px]">
      <p>
        Your privacy is important to us. This Privacy Policy explains
        how Genesis Fintech collects, uses, stores, and protects your
        personal information when you use our services. By using our
        website or services, you agree to this policy.
      </p>
    </div>

    {/* Interpretation */}
    <h2 className="mt-7 text-[21px] font-semibold text-[#33A8DE]">
      Interpretation
    </h2>

    <p className="mt-3 text-[14px] leading-6 text-[#1E1842]">
      The words of which the initial letter is capitalized have
      meanings defined under the following conditions.
    </p>

    {/* Definitions */}
    <h2 className="mt-4 text-[21px] font-semibold text-[#33A8DE]">
      Definitions
    </h2>

    <p className="mt-3 text-[15px] font-medium leading-6 text-[#1E1842]">
      For the purposes{" "}
      <span className="text-[#33A8DE]">
        of this Privacy Policy:
      </span>
    </p>

    <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] leading-5 text-[#1E1842]">

      <li>
        <strong>Account</strong> means a unique account created for
        You to access our Service or parts of our Service.
      </li>

      <li>
        <strong>Country</strong> refers to: Telangana, India
      </li>

      <li>
        <strong>Personal Data</strong> is any information that relates
        to an identified or identifiable individual.
      </li>

      <li>
        <strong>Third-party Social Media Service</strong> refers to
        any website or any social network website through which a User
        can log in or create an account to use the Service.
      </li>

      <li>
  <strong>Company</strong> (referred to as either &quot;the Company&quot;,
  &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
  refers to YES GENESIS FINTECH PVT LTD, 302 3rd floor H-NO.6-2-953
  Krishna Plaza, Khairatabad, Hyderabad-500004.
</li>

    </ul>
  </div>

  {/* =====================================================
      RIGHT-SIDE ILLUSTRATION
      Kept completely outside the text column
  ====================================================== */}
  <div
    className="
      pointer-events-none
      absolute
      right-[45px]
      top-1/2
      hidden
      w-[350px]
      -translate-y-1/2
      lg:block
      xl:right-[70px]
      xl:w-[390px]
    "
    aria-hidden="true"
  >
    <div className="relative h-[390px] w-full">

      {/* Yellow circles */}
      <div className="absolute left-[12%] top-[10%] h-[100px] w-[100px] rounded-full bg-[#FFD15C]" />

      <div className="absolute left-[32%] top-[3%] h-[80px] w-[80px] rounded-[20px] bg-[#FFA735]" />

      {/* Grey background card */}
      <div className="absolute right-[3%] top-[18%] h-[140px] w-[150px] rounded-[38px] bg-[#F3F3F3]" />

      {/* White privacy card */}
      <div className="absolute left-[30%] top-[25%] flex h-[125px] w-[160px] items-center justify-center rounded-[22px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)]">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#1E1842]">
          <span className="text-[30px]">
            🔒
          </span>
        </div>
      </div>

      {/* 18+ badge */}
      <div className="absolute right-[28%] top-[61%] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F65A50] text-[18px] font-bold text-[#1E1842]">
        18+
      </div>

      {/* Left person */}
      <div className="absolute bottom-[2%] left-[10%] h-[120px] w-[72px] rounded-[28px] bg-[#F5AAA1]" />

      <div className="absolute bottom-[14%] left-[3%] h-[105px] w-[40px] rounded-full bg-[#1E1842]" />

      <div className="absolute bottom-[10%] left-[30%] h-[105px] w-[40px] rounded-full bg-[#1E1842]" />

      {/* Right person */}
      <div className="absolute bottom-[0] right-[13%] h-[125px] w-[72px] rounded-[28px] bg-[#E85A68]" />

      <div className="absolute bottom-[15%] right-[3%] h-[105px] w-[40px] rounded-full bg-[#1E1842]" />

      <div className="absolute bottom-[10%] right-[28%] h-[105px] w-[40px] rounded-full bg-[#1E1842]" />

    </div>
  </div>

</section>

        {/* =====================================================
            LOWER PANEL
        ===================================================== */}
        <section className="min-h-[1212px] rounded-[10px] bg-white px-8 py-10 sm:px-10 md:px-14 lg:px-[85px]">
          <div className="max-w-[1215px]">
            {/* Collecting Data */}
            <h2 className="text-[20px] font-semibold text-[#33A8DE]">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="mt-2 text-[20px] font-semibold text-[#33A8DE]">
              <span className="text-[#1E1842]">
                Types of{" "}
              </span>
              Data Collected
            </h3>

            <h4 className="mt-3 text-[18px] font-semibold text-[#33A8DE]">
              Personal Data
            </h4>

            <p className="mt-3 max-w-[790px] text-[14px] leading-6 text-[#1E1842]">
              While using Our Service, We may ask You to provide Us with
              certain personally identifiable information that can be used to
              contact or identify You. Personally identifiable information may
              include, but is not limited to:
            </p>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] leading-5 text-[#1E1842]">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>
                Address, State, Province, ZIP/Postal code, City
              </li>
              <li>Usage Data</li>
            </ul>

            {/* Usage Data */}
            <h3 className="mt-5 text-[21px] font-semibold text-[#33A8DE]">
              Usage Data
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#1E1842]">
              Usage Data is collected automatically when using the Service.
            </p>

            <p className="mt-1 text-[14px] leading-6 text-[#1E1842]">
              Usage Data may include information such as Your Device&apos;s
              Internet Protocol address (e.g. IP address), browser type,
              browser version, the pages of our Service that You visit, the
              time and date of Your visit, the time spent on those pages,
              unique device identifiers and other diagnostic data.
            </p>

            {/* Use of Personal Data */}
            <h3 className="mt-5 text-[21px] font-semibold text-[#33A8DE]">
              Use of Your Personal Data
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#1E1842]">
              The Company may use Personal Data for the following purposes:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-5 text-[#1E1842]">
              <li>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </li>

              <li>
                To manage Your Account: to manage Your registration as a user
                of the Service. The Personal Data You provide can give You
                access to different functionalities of the Service that are
                available to You as a registered user.
              </li>
            </ul>

            {/* Transfer */}
            <h3 className="mt-5 text-[21px] font-semibold text-[#33A8DE]">
              Transfer of Your Personal Data
            </h3>

            <div className="mt-3 space-y-1 text-[14px] leading-6 text-[#1E1842]">
              <p>
                Your information, including Personal Data, is processed at the
                Company&apos;s operating offices and in any other places where
                the parties involved in the processing are located.
              </p>

              <p>
                It means that this information may be transferred to — and
                maintained on — computers located outside of Your state,
                province, country or other governmental jurisdiction.
              </p>

              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
            </div>

            {/* Contact */}
            <h3 className="mt-5 text-[21px] font-semibold text-[#33A8DE]">
              Contact Us
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#1E1842]">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-6 text-[#1E1842]">
              <li>
                By email:{" "}
                <a
                  href="mailto:info@yesgenesis.in"
                  className="hover:text-[#33A8DE]"
                >
                  info@yesgenesis.in
                </a>
              </li>

              <li>
                By visiting this page on our website:{" "}
                <a
                  href="https://yesgenesis.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#33A8DE]"
                >
                  https://yesgenesis.in
                </a>
              </li>

              <li>
                By phone number:{" "}
                <a
                  href="tel:+919517889999"
                  className="hover:text-[#33A8DE]"
                >
                  +91 95178 89999
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}