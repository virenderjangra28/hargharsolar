"use client";

import { useState } from "react";

function faqsFor(city) {
  return [
    {
      id: "what",
      q: "What is a solar power system?",
      a: (
        <>
          <p>
            A solar system converts sunlight into electricity using solar panels. The power generated
            is used to run household appliances, and excess power can be exported to the grid (in
            on-grid systems), helping reduce electricity bills in {city}.
          </p>
          <p className="mt-3 font-extrabold text-navy">Main Components:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Solar Panels — capture sunlight and generate DC power</li>
            <li>Inverter — converts DC into usable AC power</li>
            <li>Structure &amp; wiring — supports panels and ensures safe power flow</li>
            <li>Net meter (on-grid) — tracks power import and export</li>
          </ul>
        </>
      ),
    },
    {
      id: "why",
      q: "Why is HarGharSolar different from other brands?",
      a: `We handle survey, PM Surya Ghar subsidy paperwork, net metering with your DISCOM, and after-sales in ${city}. HarGharZero offers a generation guarantee or ₹10,000 back, plus ₹0 covered repairs under plan terms.`,
    },
    {
      id: "work",
      q: "How does a solar rooftop system work?",
      a: "Panels generate DC, the inverter makes 230 V AC for your home, extra units go to the grid through a bi-directional meter, and you import at night. Your bill is based on net units.",
    },
    {
      id: "bill",
      q: "How much will my electricity bill reduce?",
      a: `Many homes in ${city} cut bills by a large share of daytime use — up to about 70% depending on system size, tariff, and roof. We confirm numbers after a free survey of your bill and shade.`,
    },
    {
      id: "cost",
      q: "How much does a solar plant cost?",
      a: "After PM Surya Ghar subsidy (upto ₹78,000 for 3 kW+), a typical 3 kW home system often starts around ₹1.25 lakh. Final cost depends on structure, inverter, and DISCOM charges. Zero-investment EMI is available if you qualify.",
    },
    {
      id: "roof",
      q: "How much rooftop area do I need?",
      a: "About 80–100 sq. ft. of shadow-free terrace per kW: 3 kW needs 240–300 sq. ft., 5 kW needs 400–500 sq. ft.",
    },
    {
      id: "subsidy",
      q: "What subsidy can I get in Haryana?",
      a: `Under PM Surya Ghar, eligible ${city} homes can receive up to ₹78,000 via DBT for a 3 kW or larger on-grid rooftop system. We help with the national portal and DISCOM net metering.`,
    },
  ];
}

export default function CityFaq({ city }) {
  const items = faqsFor(city);
  const [openId, setOpenId] = useState("what");
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 5);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Most Common <span className="text-sky">Questions and Answers</span>
        </h2>
        <div className="mt-8 space-y-3">
          {visible.map((item, index) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="overflow-hidden rounded-lg border border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                >
                  <span className="text-sm font-extrabold text-navy sm:text-base">
                    {index + 1}. {item.q}
                  </span>
                  <span className="text-sky" aria-hidden="true">
                    {open ? "⌃" : "⌄"}
                  </span>
                </button>
                {open ? (
                  <div className="bg-[#f7f8fa] px-4 py-4 text-sm leading-7 text-muted">{item.a}</div>
                ) : null}
              </div>
            );
          })}
        </div>
        {!showAll ? (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-md border border-sky px-4 py-2 text-sm font-semibold text-sky hover:bg-sky hover:text-white"
            >
              View More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
