type LoanEligibilitySectionProps = {
  title: string;
  salariedItems: string[];
  selfEmployedItems: string[];
};

export default function LoanEligibilitySection({
  title,
  salariedItems,
  selfEmployedItems,
}: LoanEligibilitySectionProps) {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#16163f] mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {/* Salaried */}
          <div className="relative h-[385px] bg-white border border-[#16163f] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-[72px] w-[369px] max-w-full bg-[#33a7dd] rounded-tl-[15px] flex items-center justify-center">
              <h3 className="text-white text-[24px] md:text-[30px] font-bold">
                Salaried Person
              </h3>
            </div>

            <ul className="absolute left-[27px] top-[110px] space-y-[20px] text-[#011251] text-[18px] md:text-[20px] font-medium pr-6">
              {salariedItems.map((item, index) => (
                <li key={index} className="list-disc ml-[30px]">
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-4 right-6 text-[#33a7dd] text-6xl">
              💼
            </div>
          </div>

          {/* Self-employed */}
          <div className="relative h-[385px] bg-white border border-white rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-[72px] w-[369px] max-w-full bg-[#33a7dd] rounded-tl-[15px] flex items-center justify-center">
              <h3 className="text-white text-[24px] md:text-[30px] font-bold">
                Self-Employed
              </h3>
            </div>

            <ul className="absolute left-[37px] top-[110px] space-y-[20px] text-black text-[18px] md:text-[20px] font-medium pr-6">
              {selfEmployedItems.map((item, index) => (
                <li key={index} className="list-disc ml-[30px]">
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-4 right-6 text-[#33a7dd] text-6xl">
              👤
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}