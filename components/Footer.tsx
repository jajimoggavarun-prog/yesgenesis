import Link from "next/link";
import { footerColumns, siteConfig, socialLinks } from "@/lib/data";

function SocialIcon({ label }: { label: string }) {
  const name = label.toLowerCase();

  // Instagram
  if (name.includes("instagram")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  // Facebook
  if (name.includes("facebook")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.33-.13-2.54-.13-2.51 0-4.23 1.53-4.23 4.34V10H7.25v3h2.73v8h3.52Z" />
      </svg>
    );
  }

  // X / Twitter
  if (name.includes("twitter") || name === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.8h1.72L8.47 4.08H6.62L17.8 19.8Z" />
      </svg>
    );
  }

  // YouTube
  if (name.includes("youtube")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  // LinkedIn
  if (name.includes("linkedin")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69C21 9.85 18.95 8.06 16.22 8.06C14.02 8.06 13.04 9.27 12.5 10.12V8.25H9.25V21H12.5V14.68C12.5 13.01 12.82 11.4 14.92 11.4C16.99 11.4 17.02 13.31 17.02 14.79V21H21V13.69Z" />
      </svg>
    );
  }

  // Fallback
  return <span className="text-xs font-bold">{label[0]}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-container mx-auto px-4 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
          {/* Company Info */}
          <div>
            <p className="text-2xl font-bold">
              Yes Genesis <span className="text-brand-cyan">Fintech</span>
            </p>

            <p className="mt-3 max-w-xs text-sm text-white/70">
              {siteConfig.description}
            </p>

            {/* Social Media */}
            <ul className="mt-6 flex gap-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-brand-cyan hover:bg-brand-cyan hover:text-white"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 sm:grid-cols-3 gap-10"
          >
            {footerColumns.map((col) =>
              col.links ? (
                <div key={col.heading}>
                  <h3 className="text-xl font-bold text-brand-cyan">
                    {col.heading}
                  </h3>

                  <div className="mt-1 h-px w-24 bg-white/20" />

                  <ul className="mt-4 space-y-3 text-sm">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-white/80 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={col.heading}>
                  <h3 className="text-xl font-bold text-brand-cyan">
                    {col.heading}
                  </h3>

                  <div className="mt-1 h-px w-24 bg-white/20" />

                  <address className="mt-4 not-italic space-y-3 text-sm text-white/80">
                    <p>{col.address}</p>

                    <p>
                      <a
                        href={`mailto:${col.email}`}
                        className="hover:text-white"
                      >
                        {col.email}
                      </a>
                    </p>

                    <p>
                      <a
                        href={`tel:${col.phone.replace(/\s/g, "")}`}
                        className="hover:text-white"
                      >
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

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-white/80">
          <span className="font-bold">
            {siteConfig.legalName.toUpperCase()}
          </span>

          <span className="hidden sm:inline">|</span>

          <span className="font-bold">ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}