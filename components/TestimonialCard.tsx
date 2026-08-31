import Image from "next/image";
import type { Testimonial } from "@/lib/data";
import { testimonialAvatar } from "@/lib/assets";

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill={i < count ? "#f7bf1d" : "none"}
          stroke="#f7bf1d"
          aria-hidden="true"
        >
          <path
            strokeWidth="1.2"
            strokeLinejoin="round"
            d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  name,
  quote,
  rating,
  avatar,
}: Testimonial) {
  return (
    <blockquote className="flex h-full flex-col justify-between gap-8 rounded-pill bg-midnight-light p-8">
      <p className="text-sm leading-relaxed text-white/90">
        {quote}
      </p>

      <footer className="flex items-center gap-4">
        <Image
          src={avatar || testimonialAvatar}
          alt=""
          width={64}
          height={64}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <cite className="not-italic font-serif text-base font-bold text-white">
            {name}
          </cite>

          <Stars count={rating} />
        </div>
      </footer>
    </blockquote>
  );
}