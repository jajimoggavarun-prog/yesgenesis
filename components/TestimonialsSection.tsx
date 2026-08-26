import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <SectionHeading
          title={
            <>
              OUR <span className="text-navy">CUSTOMERS</span> TESTIMONIALS
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
