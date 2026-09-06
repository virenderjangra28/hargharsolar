"use client";

import { useState } from "react";

const PRICE_ITEMS = [
  "2 kW solar panel price in Gurgaon with subsidy: ~₹1.40 lakh*",
  "3 kW solar panel price in Gurgaon with subsidy: ~₹1.95 lakh*",
  "4 kW solar panel price in Gurgaon with subsidy: ~₹2.55 lakh*",
  "5 kW solar panel price in Gurgaon with subsidy: ~₹3.15 lakh*",
  "10 kW solar panel price in Gurgaon with subsidy: ~₹6.20 lakh*",
];

const LEFT_FAQS = [
  {
    id: "price",
    question: "What's the solar system price in Gurgaon with subsidy?",
    answer: (
      <>
        <p>
          Rooftop solar pricing in Gurgaon depends on system size, roof type, and the
          government subsidy you qualify for. Typical installed prices after subsidy are:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          {PRICE_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-6 text-muted">
          *Please note prices are subject to change based on module brand, structure
          design, inverter type, net-metering charges, and site conditions. Final cost
          is confirmed after a free site survey.
        </p>
      </>
    ),
  },
  {
    id: "company",
    question: "Which is the best solar company in Gurgaon?",
    answer: (
      <p>
        HarGharSolar is a DISCOM-approved rooftop installer in Gurgaon, with end-to-end
        support for subsidy paperwork, installation, and after-sales service. Families
        choose us for transparent pricing, storm-proof structures, and a 25-year panel
        performance warranty.
      </p>
    ),
  },
  {
    id: "brand",
    question: "Which brand of solar is best?",
    answer: (
      <p>
        For home rooftop systems, we typically recommend high-efficiency modules from
        Rayzon Solar, Premier Energies, and ReNew Solar, paired with reliable hybrid or
        on-grid inverters based on your load and roof size.
      </p>
    ),
  },
];

const RIGHT_FAQS = [
  {
    id: "ac",
    question: "How many ACs can run on a 3 kW solar system for homes in Gurgaon?",
    answer: (
      <p>
        A 3 kW rooftop system can typically run one 1.5-ton AC during the day, along
        with fans, lights, a refrigerator, and an LED TV, depending on usage hours and
        sunlight. For two ACs, a 5 kW system is usually a better fit.
      </p>
    ),
  },
  {
    id: "2kw",
    question: "Is 2 kW enough to run a house?",
    answer: (
      <p>
        Yes, a 2 kW system is generally enough for a 1–2 BHK home with annual
        consumption of about 2,800–2,900 units, covering lights, fans, TV, and a
        refrigerator. Homes with an AC or higher daytime load should consider 3 kW or
        more.
      </p>
    ),
  },
];

function ToggleIcon({ open }) {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white"
      aria-hidden="true"
    >
      {open ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6h7M6 2.5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

function FaqItem({ item, open, onToggle, showDivider }) {
  return (
    <div className={showDivider ? "border-b border-line" : ""}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex min-h-12 w-full items-start justify-between gap-3 py-4 text-left sm:gap-4 sm:py-5"
      >
        <span className="text-[17px] font-bold leading-snug text-navy sm:text-lg">
          {item.question}
        </span>
        <ToggleIcon open={open} />
      </button>
      {open ? (
        <div className="pb-5 pr-2 text-sm leading-7 text-ink/80 sm:pb-6 sm:pr-10 sm:text-[15px]">
          {item.answer}
        </div>
      ) : null}
    </div>
  );
}

function FaqColumn({ items, openMap, onToggle }) {
  return (
    <div>
      {items.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          open={openMap[item.id]}
          onToggle={() => onToggle(item.id)}
          showDivider={index < items.length - 1}
        />
      ))}
    </div>
  );
}

export default function FaqSection() {
  const allItems = [...LEFT_FAQS, ...RIGHT_FAQS];
  const [openMap, setOpenMap] = useState(() =>
    Object.fromEntries(allItems.map((item) => [item.id, false])),
  );

  function toggle(id) {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section id="faq" className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-site">
        <span className="inline-flex rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-white">
          Frequently Asked Questions
        </span>

        <div className="mt-6 grid gap-x-10 md:mt-8 md:grid-cols-2 lg:gap-x-16">
          <FaqColumn items={LEFT_FAQS} openMap={openMap} onToggle={toggle} />
          <div className="border-t border-line md:border-t-0">
            <FaqColumn items={RIGHT_FAQS} openMap={openMap} onToggle={toggle} />
          </div>
        </div>
      </div>
    </section>
  );
}
