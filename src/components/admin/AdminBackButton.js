"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AdminBackButton({ fallback = "/admin/dashboard" }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin" || pathname === "/admin/dashboard") {
    return null;
  }

  function goBack() {
    const fromSameSite =
      typeof document !== "undefined" &&
      document.referrer.startsWith(window.location.origin);

    if (fromSameSite) {
      router.back();
      return;
    }

    router.push(fallback);
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-navy"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M10 3.5L5.5 8 10 12.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
}
