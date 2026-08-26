import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col items-center justify-center gap-6 px-4 py-32 text-center">
        <h1 className="text-4xl font-bold text-midnight">Page not found</h1>
        <p className="max-w-md text-slate-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link href="/" className="rounded-pill bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-dark">
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
