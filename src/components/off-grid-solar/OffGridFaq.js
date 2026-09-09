"use client";

import { useState } from "react";
import Link from "next/link";

const LEFT = [
  {
    id: "what",
    q: "What is an off-grid solar system?",
    a: "A standalone plant: panels charge batteries, an inverter runs your home, and there is no connection to DISCOM. It works during power cuts because it does not need the grid.",
  },
  {
    id: "subsidy",
    q: "Is there a government subsidy for off-grid solar in India?",
    a: "PM Surya Ghar Muft Bijli Yojana is for grid-connected rooftop with net metering. A pure off-grid system is not eligible for that CFA. Some state or MNRE programmes for remote areas may apply — we confirm case by case.",
  },
  {
    id: "battery",
    q: "Which battery is better — tubular or lithium?",
    a: "Tubular lead-acid costs less up front but needs ventilation and replacement sooner. Lithium (LFP) costs more, uses more of the stored kWh, and lasts more cycles. For new homes we usually recommend LFP if budget allows.",
  },
  {
    id: "cut",
    q: "Will off-grid solar work when DISCOM power fails?",
    a: "Yes. That is the point. On-grid inverters must shut down in a cut. Off-grid and hybrid backup loads stay on from the battery.",
  },
];

const RIGHT = [
  {
    id: "price",
    q: "What is the off-grid solar price in India?",
    a: "Indicative 2026 packages: about ₹1.2–1.8 lakh for 1 kW with tubular backup, ₹3.2–4.5 lakh for 3 kW, and ₹5.5–7.5 lakh for 5 kW with lithium. Battery kWh drives the quote more than panel kW.",
  },
  {
    id: "roof",
    q: "How much roof area do I need?",
    a: "Same module rule as on-grid: about 80–100 sq. ft. per kW of panels. Off-grid arrays are often oversized vs the inverter so batteries refill in monsoon.",
  },
  {
    id: "hybrid",
    q: "Should I choose hybrid instead of off-grid?",
    a: "If you already have a DISCOM connection and a bill, hybrid (net metering + batteries) usually saves more over 25 years because you can still claim CFA and export surplus. Choose pure off-grid when there is no usable grid.",
  },
  {
    id: "life",
    q: "How long do off-grid systems last?",
    a: "Panels: ~25 years. Inverter/PCU: typically 5–10 years with service. Batteries: a few years for lead-acid, longer for lithium — this is the part you must budget to replace.",
  },
];

function FaqColumn({ items, openId, onToggle }) {
  return (
    <div>
      {items.map((item, index) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className={index < items.length - 1 ? "border-b border-line" : ""}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => onToggle(item.id)}
              className="flex min-h-12 w-full items-start justify-between gap-3 py-4 text-left"
            >
              <span className="text-[15px] font-semibold text-navy">{item.q}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-navy">
                {open ? "−" : "+"}
              </span>
            </button>
            {open ? <p className="pb-4 pr-8 text-sm leading-7 text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

const RELATED = [
  {
    href: "/on-grid-solar",
    title: "On-grid solar buying guide: subsidy, net metering, 2026 prices",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/zero-investment",
    title: "Zero investment solar if you have a DISCOM bill",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/solar-calculator",
    title: "Check roof area: 80–100 sq. ft. per kW",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function OffGridFaq() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 md:px-8">
      <div className="mx-auto max-w-site">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 grid gap-x-12 md:grid-cols-2">
          <FaqColumn items={LEFT} openId={openId} onToggle={toggle} />
          <div className="border-t border-line md:border-t-0">
            <FaqColumn items={RIGHT} openId={openId} onToggle={toggle} />
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Related guides
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {RELATED.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-sm font-extrabold leading-6 text-navy group-hover:text-sky">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
