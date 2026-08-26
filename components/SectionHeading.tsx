type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl mb-10 md:mb-14`}>
      <h2
        className={`text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight ${
          light ? "text-white" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base ${light ? "text-white/80" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
