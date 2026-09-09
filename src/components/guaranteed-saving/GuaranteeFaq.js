"use client";

import { useState } from "react";
import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const FAQS = [
  {
    id: "what",
    question: "What does “guaranteed savings” mean in India?",
    answer:
      "We commit to a generation figure (kWh) for your rooftop system. Those units, via net metering, cut your DISCOM bill. If we miss the committed generation, you receive ₹10,000 money back as stated in the HarGharZero plan.",
  },
  {
    id: "short",
    question: "What if monsoon or dust reduces generation?",
    answer:
      "The contract uses site-specific assumptions, including typical weather for your district. Abnormal soiling is handled with service visits. The money-back trigger is against the written annual guarantee after those agreed conditions, not against a perfect cloudless year.",
  },
  {
    id: "repair",
    question: "Are inverter and structure failures really ₹0?",
    answer:
      "Covered repairs and replacements under the plan term are at no extra charge. Damage outside the plan (for example, unauthorised roof work or theft) is assessed separately and explained before any visit.",
  },
  {
    id: "bill",
    question: "Do you guarantee my electricity bill will be zero?",
    answer:
      "No honest installer can. Night use, tariff slabs, and fixed DISCOM charges still exist. We guarantee generation units. Bill savings follow those units and your consumption pattern.",
  },
  {
    id: "subsidy",
    question: "Does the guarantee include PM Surya Ghar subsidy?",
    answer:
      "Subsidy (upto ₹78,000) reduces what you finance. The generation guarantee is separate: it is about kWh from the plant, not about how fast DBT arrives from the government.",
  },
  {
    id: "who",
    question: "Who is this for?",
    answer:
      "Residential Indian homeowners with roof rights and an active DISCOM connection. After a free survey we confirm whether your shading and bill support a written generation guarantee.",
  },
];

export default function GuaranteeFaq() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Guaranteed savings FAQs
          </h2>
          <div className="mt-6 divide-y divide-line border-b border-line">
            {FAQS.map((item) => {
              const open = openId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex min-h-12 w-full items-start justify-between gap-3 py-4 text-left sm:py-5"
                  >
                    <span className="text-[15px] font-semibold text-navy sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-navy"
                      aria-hidden="true"
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? <p className="pb-5 pr-10 text-sm leading-7 text-muted">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 md:px-8">
        <div className="mx-auto max-w-site rounded-2xl bg-navy px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Lock in generation, not guesswork</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80">
            Get a free assessment. We’ll put expected units in writing — with ₹10,000 money back
            if we miss, and ₹0 covered repairs while you’re on HarGharZero.
          </p>
          <CtaButton variant="white" className="mt-6">
            Get Free Quote
          </CtaButton>
        </div>
      </section>
    </>
  );
}
