"use client";

import { usePathname } from "next/navigation";
import { useExpertModal } from "@/components/ExpertModalContext";
import { HARYANA_CITIES } from "./haryanaCities";
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
//   { label: "Cancellation Policy", href: "/terms#cancellation" },
];

export default function Footer() {
  const pathname = usePathname();
  const { openModal } = useExpertModal();

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <footer className="bg-navy-deep px-4 py-10 text-white sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-site">
        <p className="text-sm font-bold uppercase tracking-wide">Haryana</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-2.5 md:grid-cols-4 lg:grid-cols-6">
          {HARYANA_CITIES.map((city) => (
            <li key={city}>
              <button
                type="button"
                onClick={openModal}
                className="min-h-10 text-left text-sm font-normal text-white/90 transition hover:text-white"
              >
                {city}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/20 pt-5">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/80">
            <span>Copyright @ {new Date().getFullYear()}</span>
            {LEGAL_LINKS.map((link) => (
              <span key={link.label} className="contents">
                <span aria-hidden="true">|</span>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
