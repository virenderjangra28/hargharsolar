const FEATURES = [
  {
    title: "Generation guarantee or ₹10,000 Money Back",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l7 3.2v5.4c0 4.4-3 6.7-7 7.4-4-.7-7-3-7-7.4V6.2L12 3z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "₹0 Repair and Replacement cost",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 6.5l3 3-8 8H6.5v-3l8-8z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proactive service visits",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M5.5 19c.7-3 3.2-4.6 6.5-4.6S17.8 16 18.5 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "App to track real-time power generation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function GuaranteeSection() {
  return (
    <section
      id="guarantee"
      className="bg-gradient-to-b from-sky-soft via-[#f3f9fd] to-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                <div className="text-navy-deep mb-2 block text-[32px] font-semibold leading-tight">Introducing</div>
                <div className="text-mint">HarGharZero™</div>
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            India&apos;s Guaranteed Solar Savings Plan
          </p>
          <a
            href="#calculator"
            className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-mid sm:mt-8"
          >
            Know More about HarGharZero
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <div className="mt-0.5 text-navy">{feature.icon}</div>
              <p className="text-[15px] font-semibold leading-6 text-navy">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
