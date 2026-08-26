import BranchCard from "./BranchCard";
import { branches } from "@/lib/data";

export default function BranchesSection() {
  return (
    <section className="bg-midnight py-16 md:py-20" aria-labelledby="branches-heading" id="branches">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <h2 id="branches-heading" className="text-center text-2xl md:text-[32px] font-bold text-white">
          YES GENESIS <span className="text-brand-cyanLight">BRANCHES</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {branches.map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>
      </div>
    </section>
  );
}
