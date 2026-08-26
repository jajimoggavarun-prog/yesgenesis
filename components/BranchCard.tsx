import Image from "next/image";
import type { Branch } from "@/lib/data";

export default function BranchCard({ name, image }: Branch) {
  return (
    <figure className="group relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-card border-[3px] border-brand-cyan shadow-inner">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(min-width: 1024px) 560px, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-4 text-center text-lg md:text-2xl font-bold text-white">
        {name}
      </figcaption>
    </figure>
  );
}
