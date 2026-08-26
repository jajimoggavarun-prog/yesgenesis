import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Call, email, or send us your loan enquiry and our team will reach out.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">
              Have a question about a loan? Reach out and our team will get
              back to you.
            </p>
          </div>
        </section>

        <section className="max-w-container mx-auto px-4 md:px-8 py-16 grid gap-10 lg:grid-cols-[1fr,420px]">
          <div className="space-y-6 text-slate-700">
            <div>
              <h2 className="text-xl font-bold text-midnight">Address</h2>
              <p className="mt-1">{siteConfig.address}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-midnight">Phone</h2>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-1 block text-navy font-semibold">
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <h2 className="text-xl font-bold text-midnight">Email</h2>
              <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-navy font-semibold">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <EnquiryForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
