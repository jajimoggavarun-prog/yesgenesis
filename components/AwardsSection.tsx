import Image from "next/image";
import { awardsAssets } from "@/lib/assets";

export default function AwardsSection() {
  const gallery = [...awardsAssets.gallery, ...awardsAssets.gallery]; // duplicated for seamless loop

  return (
    <section className="relative overflow-hidden bg-midnight-light py-16 md:py-20" aria-labelledby="awards-heading">
      <div className="absolute inset-0">
        <Image src={awardsAssets.sectionBackground} alt="" fill className="object-cover opacity-50" sizes="100vw" />
      </div>

      <div className="relative max-w-container mx-auto px-4 md:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-card border border-brand-goldSoft px-6 py-2 text-sm md:text-base font-semibold text-brand-goldSoft">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="#f1be4f" aria-hidden="true">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
          AWARDS &amp; CERTIFICATIONS
        </span>

        <h2 id="awards-heading" className="mt-4 text-2xl md:text-[32px] font-bold">
          <span className="text-white">Proud Moments</span>{" "}
          <span className="text-brand-goldSoft">of Recognition</span>
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-white/80">
          Yes Genesis Fintech Pvt Ltd is honored to be recognized by leading
          organizations and industry experts for our innovation, trust, and
          commitment to delivering exceptional financial solutions.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 motion-reduce:animate-none">
          {gallery.map((src, i) => (
            <div key={i} className="relative h-[220px] w-[330px] shrink-0 overflow-hidden rounded-card">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="330px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
