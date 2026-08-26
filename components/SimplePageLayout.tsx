import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SimplePageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="bg-navy py-16 text-center text-white">
          <div className="max-w-container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            {intro && <p className="mt-4 mx-auto max-w-2xl text-white/85">{intro}</p>}
          </div>
        </section>
        <section className="max-w-container mx-auto px-4 md:px-8 py-16 prose max-w-3xl">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
