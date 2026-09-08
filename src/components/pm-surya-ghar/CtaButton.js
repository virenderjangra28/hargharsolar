"use client";

import Link from "next/link";
import { useExpertModal } from "@/components/ExpertModalContext";

const VARIANTS = {
  navy: "bg-navy text-white hover:bg-navy-mid",
  white: "bg-white text-[#0b131f] hover:bg-white/90",
  outline: "border border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
};

export default function CtaButton({
  children,
  href,
  variant = "navy",
  className = "",
}) {
  const { openModal } = useExpertModal();
  const classes = `inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={openModal} className={classes}>
      {children}
    </button>
  );
}
