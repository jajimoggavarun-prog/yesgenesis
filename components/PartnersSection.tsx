"use client";

import PartnerCard from "./PartnerCard";
import { partnerStats } from "@/lib/data";
import { partnerLogos } from "@/lib/assets";
import { useEffect, useRef, useState } from "react";

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-midnight-light py-16 md:py-20"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            id="partners-heading"
            className="text-center text-2xl md:text-[32px] font-bold text-white"
          >
            OUR{" "}
            <span className="text-brand-gold">
              BANKING
            </span>{" "}
            PARTNERS
          </h2>

          <p className="mt-3 text-center text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            We are proud to be associated with India&rsquo;s leading banks and
            NBFCs to offer the best financial solution to our customers.
          </p>
        </div>

        {/* Banking Partner Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {partnerLogos.map((logo, i) => (
            <div
              key={logo}
              className={`
                transition-all
                duration-700
                ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? `${i * 120}ms`
                  : "0ms",
              }}
            >
              <div
                className="
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:drop-shadow-[0_10px_25px_rgba(54,184,240,0.25)]
                "
              >
                <PartnerCard
                  logo={logo}
                  name={`Banking partner ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partner Statistics */}
        <div
          className={`
            mt-10
            rounded-card
            border
            border-brand-cyanCard/60
            bg-navy-950
            px-6
            py-8
            transition-all
            duration-1000
            ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          style={{
            transitionDelay: isVisible ? "650ms" : "0ms",
          }}
        >
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {partnerStats.map((stat, i) => (
              <div
                key={stat.label}
                className="
                  transition-transform
                  duration-300
                  hover:scale-105
                "
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <dt className="sr-only">
                  {stat.label}
                </dt>

                <dd className="text-xl md:text-2xl font-bold text-brand-gold">
                  {stat.value}
                </dd>

                <p className="mt-1 text-sm md:text-base text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-center text-sm md:text-base text-white/80">
            Strong Partners, Stronger Solutions for Your Financial Growth.
          </p>
        </div>

      </div>
    </section>
  );
}
