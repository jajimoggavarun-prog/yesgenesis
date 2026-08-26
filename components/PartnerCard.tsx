import Image from "next/image";

export default function PartnerCard({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="flex h-[130px] md:h-[150px] items-center justify-center rounded-pill bg-white p-6 shadow-sm">
      <Image
        src={logo}
        alt={name}
        width={200}
        height={90}
        className="max-h-16 md:max-h-20 w-auto object-contain"
      />
    </div>
  );
}
