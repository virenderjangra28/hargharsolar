"use client";

import { useState } from "react";
import Link from "next/link";

const LEFT = [
  {
    id: "battery",
    q: "Does on-grid solar need a battery?",
    a: "No. A standard on-grid plant uses the DISCOM grid via net metering. Batteries are only needed if you want backup during a power cut (hybrid).",
  },
  {
    id: "price",
    q: "What is the on-grid solar panel price in India?",
    a: "After PM Surya Ghar subsidy, a 3 kW home system often starts around ₹1.25 lakh, and 5 kW around ₹1.8–3 lakh depending on city, structure, and DISCOM. Final price follows a site survey.",
  },
  {
    id: "subsidy",
    q: "How much subsidy do I get on on-grid solar?",
    a: "Central CFA is ₹30,000 per kW for the first 2 kW and ₹18,000 for the next 1 kW, capped at ₹78,000 for 3 kW and above. Some states add extra CFA.",
  },
  {
    id: "outage",
    q: "Will on-grid solar work in a power cut?",
    a: "A grid-tied inverter must shut down when the grid is down (anti-islanding). For backup, you need a hybrid inverter and batteries.",
  },
];

const RIGHT = [
  {
    id: "roof",
    q: "How much roof area do I need?",
    a: "About 80–100 sq. ft. per kW of shadow-free terrace: 3 kW needs 240–300 sq. ft., 5 kW needs 400–500 sq. ft.",
  },
  {
    id: "meter",
    q: "What is a bi-directional or net meter?",
    a: "It records units you export to the grid and units you import. Your monthly bill is based on the net of those two.",
  },
  {
    id: "life",
    q: "How long does an on-grid system last?",
    a: "Panels are typically warranted for 25 years of performance. Inverters and structures need periodic service; professional cleaning beats rooftop sprinklers.",
  },
  {
    id: "zero",
    q: "Can I install on-grid solar with zero investment?",
    a: "Yes, if you qualify for HarGharZero: subsidy plus EMI structured so bill savings can cover the instalment, with ₹0 down.",
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
    href: "/pm-surya-ghar-yojana",
    title: "PM Surya Ghar Muft Bijli Yojana: subsidy up to ₹78,000",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16fa5?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/zero-investment",
    title: "Zero investment solar plan for Indian homes",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/guaranted-saving",
    title: "Guaranteed savings: generation or ₹10,000 back",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function OnGridFaq() {
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
