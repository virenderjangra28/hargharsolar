"use client";

import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const HIGHLIGHTS = [
  "Generation guarantee or ₹10,000 back",
  "₹0 repair & replacement",
  "Proactive service visits",
  "Live generation on the app",
];

export default function GuaranteeHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,18,38,0.78) 0%, rgba(8,18,38,0.5) 55%, rgba(8,18,38,0.28) 100%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="relative mx-auto grid max-w-site items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:min-h-[520px]">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            HarGharZero™ guaranteed savings
          </p>
          <h1 className="mt-3 max-w-2xl text-[28px] font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-[48px]">
            Solar savings you can hold us to
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            For Indian homes, we commit to the units your rooftop plant should generate. If
            generation falls short of the promised units, you get ₹10,000 money back — not a vague
            “it depends on the weather” excuse.
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
            Get my savings guarantee
          </CtaButton>
        </div>

        <aside className="rounded-2xl border border-white/30 bg-white p-6 text-navy shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky">The promise</p>
          <p className="mt-2 text-3xl font-extrabold">Units guaranteed</p>
          <p className="mt-1 text-sm text-muted">Written into your HarGharZero plan</p>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">If generation is on target</dt>
              <dd className="font-extrabold text-green">You keep the savings</dd>
            </div>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">If it falls short</dt>
              <dd className="font-extrabold">₹10,000 money back</dd>
            </div>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="text-muted">Repairs & parts</dt>
              <dd className="font-extrabold">₹0 under plan terms</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Panel performance</dt>
              <dd className="font-extrabold">25-year warranty</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-muted">
            Guarantee is measured against the committed annual generation in your contract, after
            standard weather and shading assumptions for your site.
          </p>
        </aside>
      </div>
    </section>
  );
}
