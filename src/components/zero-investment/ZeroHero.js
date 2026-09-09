"use client";

import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const HIGHLIGHTS = [
  "₹0 down payment",
  "PM Surya Ghar subsidy up to ₹78,000",
  "Monthly savings designed to cover EMI",
  "Net metering with your DISCOM",
];

export default function ZeroHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,18,38,0.78) 0%, rgba(8,18,38,0.52) 55%, rgba(8,18,38,0.3) 100%), url('https://images.unsplash.com/photo-1508514177221-188b1cf16fa5?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="relative mx-auto grid max-w-site items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:min-h-[520px]">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            HarGharZero™ for Indian homes
          </p>
          <h1 className="mt-3 max-w-2xl text-[28px] font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-[48px]">
            Go solar at zero investment
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Pay nothing upfront. Government subsidy plus easy EMI lets you start rooftop solar
            while your electricity savings stay higher than your monthly EMI.
          </p>
          <ul className="mt-6 grid max-w-xl gap-2.5 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 text-sm font-medium backdrop-blur-sm"
              >
                <span className="text-mint" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <CtaButton variant="white" className="mt-8 rounded-full">
            Check if you qualify
          </CtaButton>
        </div>

        <aside className="rounded-2xl border border-white/30 bg-white p-6 text-navy shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky">Typical 3 kW home</p>
          <p className="mt-2 text-3xl font-extrabold">₹0 to start</p>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">Upfront payment</dt>
              <dd className="font-extrabold">₹0</dd>
            </div>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">Central subsidy (upto)</dt>
              <dd className="font-extrabold">₹78,000</dd>
            </div>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">Net monthly saving*</dt>
              <dd className="font-extrabold text-green">₹4,100+</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Monthly EMI*</dt>
              <dd className="font-extrabold">₹3,100</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-muted">
            *Illustrative for a 3 kW system on a 60-month plan. Final EMI, subsidy, and savings
            depend on your bill, roof, and DISCOM.
          </p>
        </aside>
      </div>
    </section>
  );
}
