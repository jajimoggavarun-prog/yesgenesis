"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type StatCardProps = {
  value: string;
  label: string;
  icon: string;
};

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract the number from values like:
    // "200+", "647+", "4K+", "149+", "24K+"
    const match = value.match(/[\d,]+/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericPart = match[0].replace(/,/g, "");
    const target = Number(numericPart);

    if (Number.isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const suffix = value.replace(match[0], "");

    const duration = 3000;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(target * easedProgress);

      setDisplayValue(
        currentValue.toLocaleString("en-IN") + suffix
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(
          target.toLocaleString("en-IN") + suffix
        );
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <>{displayValue}</>;
}

export default function StatCard({
  value,
  label,
  icon,
}: StatCardProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-4
        rounded-[20px]
        border-2
        border-brand-cyan
        bg-brand-blueCard
        px-6
        py-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(54,184,240,0.25)]
      "
    >
      {/* Icon */}
      <Image
        src={icon}
        alt=""
        width={80}
        height={80}
        className={`
  h-16
  w-16
  md:h-20
  md:w-20
  object-contain
  ${label === "Branch Locations" ? "scale-[1.6]" : ""}
`}
      />

      {/* Number + Label */}
      <div>
        <p
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-white
            min-h-[48px]
          "
        >
          <AnimatedNumber value={value} />
        </p>

        <p
          className="
            mt-2
            text-base
            md:text-lg
            font-medium
            text-white
          "
        >
          {label}
        </p>
      </div>
    </div>
  );
}