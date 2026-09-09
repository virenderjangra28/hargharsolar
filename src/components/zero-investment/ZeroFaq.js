"use client";

import { useState } from "react";
import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const FAQS = [
  {
    id: "zero",
    question: "Is zero investment really ₹0 from my pocket?",
    answer:
      "Yes for the down payment. You don’t pay a lump sum to start. The system is funded through PM Surya Ghar subsidy and EMI. You continue paying a smaller electricity bill; that saving is designed to cover the EMI.",
  },
  {
    id: "subsidy",
    question: "How does the Indian government subsidy fit in?",
    answer:
      "Under PM Surya Ghar Muft Bijli Yojana, eligible homes can receive up to ₹78,000 as Direct Benefit Transfer. We help you apply on the national portal so subsidy reduces what needs to be financed.",
  },
  {
    id: "emi",
    question: "What if my bill is too small for EMI to fit?",
    answer:
      "The plan works best when monthly consumption can support a 2–5 kW rooftop system. After a free assessment of your bill and roof, we tell you honestly if zero-investment EMI is a fit or if a smaller cash plan is better.",
  },
  {
    id: "own",
    question: "Do I own the solar system?",
    answer:
      "Yes. It is installed on your roof in your name, with net metering on your DISCOM connection. EMI is only a way to pay; it is not a lease that takes the plant back.",
  },
  {
    id: "discom",
    question: "Which states and DISCOMs is this for?",
    answer:
      "The plan is for residential consumers across India with an active DISCOM connection and roof rights. Net-metering rules follow your state regulator. HarGharSolar currently focuses on Haryana homes and can confirm feasibility for your PIN code.",
  },
  {
    id: "credit",
    question: "Do I need a high credit score?",
    answer:
      "Lenders check basic eligibility. Many salaried and self-employed homeowners qualify. We’ll share the documents list (Aadhaar, PAN, bank statement, electricity bill) after your site discussion.",
  },
];

export default function ZeroFaq() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Zero investment FAQs
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
          <h2 className="text-2xl font-extrabold sm:text-3xl">Start solar with ₹0 down</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80">
            Indian homeowners use subsidy + EMI to cut bills without a big cheque. Get a free
            quote and see if HarGharZero fits your roof.
          </p>
          <CtaButton variant="white" className="mt-6">
            Get Free Quote
          </CtaButton>
        </div>
      </section>
    </>
  );
}
