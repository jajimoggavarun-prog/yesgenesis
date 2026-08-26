import Link from "next/link";
import { footerColumns, siteConfig, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-container mx-auto px-4 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div>
            <p className="text-2xl font-bold">
              Yes Genesis <span className="text-brand-cyan">Fintech</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/70">{siteConfig.description}</p>

            <ul className="mt-6 flex gap-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs hover:border-brand-cyan hover:text-brand-cyan"
                  >
                    {s.label[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerColumns.map((col) =>
              col.links ? (
                <div key={col.heading}>
                  <h3 className="text-xl font-bold text-brand-cyan">{col.heading}</h3>
                  <div className="mt-1 h-px w-24 bg-white/20" />
                  <ul className="mt-4 space-y-3 text-sm">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-white/80 hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={col.heading}>
                  <h3 className="text-xl font-bold text-brand-cyan">{col.heading}</h3>
                  <div className="mt-1 h-px w-24 bg-white/20" />
                  <address className="mt-4 not-italic space-y-3 text-sm text-white/80">
                    <p>{col.address}</p>
                    <p>
                      <a href={`mailto:${col.email}`} className="hover:text-white">
                        {col.email}
                      </a>
                    </p>
                    <p>
                      <a href={`tel:${col.phone.replace(/\s/g, "")}`} className="hover:text-white">
                        {col.phone}
                      </a>
                    </p>
                  </address>
                </div>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-white/80">
          <span className="font-bold">{siteConfig.legalName.toUpperCase()}</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-bold">ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
