import Image from "next/image";
import Button from "./Button";
import { heroAssets } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <Image
          src={heroAssets.heroBackground}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <div className="relative max-w-container mx-auto grid gap-10 px-4 md:px-8 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-card bg-white px-4 py-1.5 text-sm md:text-base font-medium text-navy-dark">
            18+ YEARS OF EXPERIENCE
          </span>

          <h1 id="hero-heading" className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            India&rsquo;s Leading{" "}
            <span className="text-brand-cyan">Loan Distribution</span> Network
          </h1>

          <div className="mt-4 h-0.5 w-28 bg-white/40" />

          <p className="mt-4 max-w-xl text-base md:text-lg text-white/90">
            Yes Genesis FinTech helps customers find the right loan solutions
            through a trusted network of banks and NBFCs. With 17+ years of
            experience, we make borrowing simple, transparent, and fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/apply" variant="secondary">
              Apply Now
            </Button>
            <Button href="/emi-calculator" variant="outline">
              EMI Calculator
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={heroAssets.heroForeground}
            alt="Yes Genesis Fintech advisors helping a customer"
            width={720}
            height={510}
            priority
            className="w-full h-auto rounded-card"
          />
        </div>
      </div>
    </section>
  );
}
