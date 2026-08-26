import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Yes Genesis Fintech, India's loan distribution network connecting customers with 149+ banks and NBFCs.",
};

export default function AboutPage() {
  return (
    <SimplePageLayout
      title="About Us"
      intro="18+ years of experience helping customers across India access the right loans."
    >
      <p>
        Yes Genesis Fintech Private Limited is a loan distribution network
        connecting customers with a trusted panel of banks and NBFC lending
        partners. We operate across 200+ cities through 647+ branch
        locations, supported by a team of over 4,000 employees.
      </p>
      <p>
        Our mission is to make borrowing simple, transparent, and fast — by
        comparing offers on your behalf and guiding you through
        documentation, verification, and approval.
      </p>
    </SimplePageLayout>
  );
}
