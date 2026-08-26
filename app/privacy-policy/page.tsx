import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "Privacy & Policy",
  description: "Read the Yes Genesis Fintech privacy policy covering how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePageLayout title="Privacy & Policy">
      <p>
        Yes Genesis Fintech Private Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This page explains what information we collect through this
        website, how it is used, and the choices available to you.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you submit through enquiry and application
        forms, such as your name, phone number, email address, and loan
        requirements.
      </p>
      <h2>How we use it</h2>
      <p>
        Information is used to respond to enquiries, match you with suitable
        lending partners, and improve our services. We do not sell your
        personal data.
      </p>
      <p className="text-sm text-slate-500">
        Placeholder content — replace with your organization&rsquo;s reviewed
        privacy policy before launch.
      </p>
    </SimplePageLayout>
  );
}
