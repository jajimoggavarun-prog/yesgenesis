import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Yes Genesis Fintech website and services.",
};

export default function TermsPage() {
  return (
    <SimplePageLayout title="Terms & Conditions">
      <p>
        By using this website, you agree to the following terms. Yes Genesis
        Fintech acts as a loan distribution intermediary and does not
        guarantee loan approval, which remains at the sole discretion of the
        partner bank or NBFC.
      </p>
      <p className="text-sm text-slate-500">
        Placeholder content — replace with your organization&rsquo;s reviewed
        terms and conditions before launch.
      </p>
    </SimplePageLayout>
  );
}
