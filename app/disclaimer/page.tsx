import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer regarding loan offers, interest rates, and third-party lending partners referenced on this website.",
};

export default function DisclaimerPage() {
  return (
    <SimplePageLayout title="Disclaimer">
      <p>
        Interest rates, processing fees, and loan eligibility criteria shown
        or discussed on this website are indicative and subject to change by
        the respective bank or NBFC. Final terms are determined solely by
        the lending partner.
      </p>
      <p className="text-sm text-slate-500">
        Placeholder content — replace with your organization&rsquo;s reviewed
        disclaimer before launch.
      </p>
    </SimplePageLayout>
  );
}
