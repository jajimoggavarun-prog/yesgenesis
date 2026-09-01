import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Yes Genesis Fintech",
  description:
    "Learn about Yes Genesis Fintech, our mission, vision, and board of directors.",
};

const cyan = "#33A8DE";
const navy = "#16163F";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header
        className="relative flex h-[110px] items-center bg-[#16163F] px-6 sm:h-[120px] sm:px-10 lg:h-[150px] lg:px-[55px]"
        style={{ backgroundColor: navy }}
      >
        <Link
          href="/"
          aria-label="Back to home"
          className="absolute left-5 top-1/2 flex -translate-y-1/2 items-center justify-center text-white transition-colors hover:text-[#33A8DE] sm:left-8 lg:left-[55px]"
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

        <h1 className="ml-10 text-[30px] font-bold leading-none text-white sm:text-[34px] lg:ml-[75px] lg:text-[40px]">
          About Us
        </h1>
      </header>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-8 sm:py-12 lg:px-0 lg:pt-[72px]">

        {/* ===================================================
            ABOUT COMPANY
        ==================================================== */}
        <section>
          <h2 className="text-[22px] font-bold leading-tight sm:text-[24px]">
            About YES GENESIS{" "}
            <span className="text-[#33A8DE]">
              FINTECH PVT LTD
            </span>
          </h2>

          <div
            className="mt-6 h-px w-full"
            style={{ backgroundColor: cyan }}
          />

          <div className="mt-7 space-y-7 text-[14px] leading-[1.45] sm:text-[15px]">
            <p>
              YesGenesis Fintech Pvt. Ltd. is a trusted financial services
              company dedicated to simplifying the loan and insurance journey
              for individuals and businesses. For over 10 years, we have
              served as a reliable bridge between customers and leading banks
              and financial institutions, helping clients make informed
              financial decisions with confidence.
            </p>

            <p>
              Our expertise lies in understanding every customer&apos;s unique
              financial needs and connecting them with the most suitable
              lending and insurance solutions. By partnering with multiple
              banks, we empower customers to compare options and choose
              products that offer the lowest possible interest rates, maximum
              loan eligibility, and the best overall value. commitment to
              transparency, trust and customer satisfaction has earned us a
              reputation as a dependable financial partner. At YesGenesis, we
              believe every customer deserves expert guidance and access to
              right financial opportunities
            </p>
          </div>

          <div className="mt-7">
            <h3 className="text-[18px] font-medium sm:text-[20px]">
              Mission
            </h3>

            <p className="mt-2 text-[14px] leading-[1.45] sm:text-[15px]">
              To simplify access to financial solutions by connecting
              customers with the right banking and insurance partners through
              transparent, ethical, and customer-focused guidance.
            </p>
          </div>

          <div className="mt-7">
            <h3 className="text-[18px] font-medium sm:text-[20px]">
              Vision
            </h3>

            <p className="mt-2 text-[14px] leading-[1.45] sm:text-[15px]">
              To become India&apos;s most trusted fintech partner, creating a
              financial ecosystem where every customer can easily access the
              best loan and insurance solutions from leading banks under one
              roof.
            </p>
          </div>
        </section>

        {/* ===================================================
            BOARD HEADING
        ==================================================== */}
        <section className="mt-12 sm:mt-14 lg:mt-[55px]">
          <h2 className="text-[22px] font-bold text-[#33A8DE] sm:text-[24px]">
            Board of directors
          </h2>

          <div
            className="mt-6 h-px w-full"
            style={{ backgroundColor: cyan }}
          />

          <h3 className="mt-12 text-[22px] font-bold sm:text-[24px]">
            Profile of Board of Directors
          </h3>
        </section>

        {/* ===================================================
            DIRECTOR 1
        ==================================================== */}
        <section className="mt-6 rounded-[10px] bg-[#F0F4F8] p-7 sm:p-8 lg:min-h-[558px] lg:p-[76px_28px_55px]">
          <div className="flex flex-col gap-7 md:flex-row md:items-start md:gap-6">

            {/* Image */}
            <div className="shrink-0">
              <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full sm:h-[150px] sm:w-[150px]">
                <Image
                  src="/assets/prabhakar-rao-dangeti.png"
                  alt="Mr. Prabhakar Rao Dangeti"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h4 className="text-[18px] font-bold leading-6 sm:text-[20px]">
                Mr.Prabhakar Rao Dangeti
              </h4>

              <p className="mt-2 text-[16px] font-bold text-[#33A8DE] sm:text-[18px]">
                Managing Director
              </p>

              <div className="mt-4 space-y-5 text-[13px] leading-[1.42] sm:text-[14px] lg:text-[15px]">
                <p>
                  With 17 years of experience in banking, insurance, and
                  fintech, Prabhakar Rao Dangeti has established himself as a
                  dynamic leader with a strong understanding of India&apos;s
                  financial services landscape. He holds an MBA and has built
                  his career across various banking organizations, developing
                  expertise in financial services, lending, insurance,
                  fintech. over the years, he has been honored with numerous
                  awards and recognitions from banking institutions for his
                  exceptional business achievements and leadership excellence.
                </p>

                <p>
                  As the Managing Director of YesGenesis Fintech Pvt. Ltd.,
                  Prabhakar leads the company&apos;s strategic growth, oversees
                  loan and insurance operations, and focuses on expanding
                  partnerships with leading financial institutions. His
                  customer-first approach and commitment to innovation have
                  played a significant role in strengthening the company&apos;s
                  position in the financial services industry.
                </p>

                <p>
                  He envisions YesGenesis as a trusted financial platform where
                  customers receive expert guidance and access to the best
                  banking solutions available, enabling them to make informed
                  financial decisions with complete confidence. at the heart of
                  his leadership philosophy is one simple value: Trust. By
                  combining customer-centric service with strong banking
                  partnerships, he continues to drive the company&apos;s mission
                  of making financial solutions more accessible, transparent,
                  and beneficial for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            DIRECTOR 2
        ==================================================== */}
        <section className="mt-10 rounded-[5px] bg-[#F0F4F8] p-7 sm:p-8 lg:min-h-[558px] lg:p-[76px_28px_55px]">
          <div className="flex flex-col gap-7 md:flex-row md:items-start md:gap-6">

            {/* Image */}
            <div className="shrink-0">
              <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full sm:h-[150px] sm:w-[150px]">
                <Image
                  src="/assets/suvarchala-sirigudi.png"
                  alt="Suvarchala Sirigudi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h4 className="text-[18px] font-bold leading-6 sm:text-[20px]">
                Suvarchala Sirigudi
              </h4>

              <p className="mt-2 text-[16px] font-bold text-[#33A8DE] sm:text-[18px]">
                Director
              </p>

              <div className="mt-4 space-y-5 text-[13px] leading-[1.42] sm:text-[14px] lg:text-[15px]">
                <p>
                  With 23 years of professional experience in the banking,
                  insurance, and fintech sectors, Suvarchala Sirigudi brings
                  extensive industry knowledge and strategic leadership to
                  YesGenesis Fintech Pvt. Ltd. Her career has been built on
                  helping customers achieve their financial goals through
                  reliable guidance and personalized financial solutions.
                </p>

                <p>
                  Holding a Bachelor of Commerce (Taxation) degree, she has
                  worked with several leading banking organizations, gaining
                  deep expertise in banking operations, insurance services, and
                  fintech solutions. Throughout her career, she has received
                  multiple recognitions from banking institutions for her
                  outstanding business performance and commitment to excellence.
                </p>

                <p>
                  As Director, Suvarchala oversees the company&apos;s operations
                  across loan and insurance services while driving
                  customer-centric initiatives and business growth. She
                  believes that trust, transparency, and long-term
                  relationships are the foundation of sustainable success.
                </p>

                <p>
                  Her vision is to make YesGenesis the preferred destination
                  where customers can confidently compare financial products
                  from multiple banks and secure the most suitable solutions
                  with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </main>
  );
}