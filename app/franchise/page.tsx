import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Apply For Yes Genesis Franchise",
  description: "Apply to open a Yes Genesis Fintech franchise in your city.",
};

export default function FranchisePage() {
  return (
    <SimplePageLayout
      title="Apply For Yes Genesis Franchise"
      intro="Bring Yes Genesis Fintech's loan distribution network to your city."
    >
      <p>
        We are expanding our branch network across India. If you are
        interested in starting a Yes Genesis Fintech franchise, share your
        details below and our partnerships team will contact you.
      </p>
      <div className="not-prose mt-8 max-w-xl">
        <EnquiryForm />
      </div>
    </SimplePageLayout>
  );
}
