"use client";

import Image from "next/image";
import StatCard from "./StatCard";
import { journeyStats } from "@/lib/data";
import { statsAssets } from "@/lib/assets";

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-midnight-light py-16 md:py-20"
      aria-labelledby="journey-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={statsAssets.sectionBackground}
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-container mx-auto px-4 md:px-8 text-center">
        <p className="text-brand-cyan font-bold text-2xl md:text-3xl">
          YES GENESIS FINTECH
        </p>

        <h2
          id="journey-heading"
          className="mt-1 text-2xl md:text-3xl font-bold text-white"
        >
          Our Journey in{" "}
          <span className="text-brand-cyan">Numbers</span>
        </h2>

        <p className="mt-3 text-white/80 text-sm md:text-base">
          Growing stronger every day, building trust across India.
        </p>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {journeyStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}