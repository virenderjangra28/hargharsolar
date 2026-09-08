"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";

const LEFT_FAQS = [
  {
    id: "what",
    question: "What is the PM Surya Ghar Muft Bijli Yojana?",
    answer:
      "It is the Government of India's rooftop solar scheme, launched in February 2024, to help households install solar and receive a central subsidy of up to ₹78,000 through Direct Benefit Transfer.",
  },
  {
    id: "apartment",
    question: "Can I get the subsidy if I live in an apartment?",
    answer:
      "Yes, if you have roof rights or your society allots rooftop space. Resident Welfare Associations can also apply for common-area systems under the RWA category.",
  },
  {
    id: "timeline",
    question: "How long does it take to receive the subsidy?",
    answer:
      "After installation, net metering, and inspection are complete, the subsidy is credited to your registered bank account via DBT. Timelines vary by DISCOM, but many households receive it within a few weeks of completion.",
  },
  {
    id: "loan",
    question: "Can I take a loan along with the subsidy?",
    answer:
      "Yes. You can finance the remaining system cost with a bank or NBFC loan and still receive the central subsidy. Several lenders offer collateral-free solar loans under the scheme.",
  },
  {
    id: "reject",
    question: "What if my DISCOM rejects the application?",
    answer:
      "Rejections are usually due to incomplete documents, a commercial connection, or missing roof rights. Fix the issue on the national portal and reapply, or ask HarGharSolar to review the file with you.",
  },
  {
    id: "tax",
    question: "Is the subsidy taxable?",
    answer:
      "The central financial assistance is credited via DBT to residential consumers and is generally not treated as taxable income. Please confirm with your tax advisor for your specific case.",
  },
  {
    id: "panels",
    question: "What solar panels qualify under PM Surya Ghar?",
    answer:
      "Systems must use ALMM-listed, DCR-compliant PV modules with domestically manufactured cells and modules, installed by an MNRE-registered vendor.",
  },
  {
    id: "giveup",
    question: "What is the 'Give-up' subsidy option?",
    answer:
      "Give-up lets you opt out of central financial assistance on the portal. Choose this only if you do not want the subsidy; most homeowners should keep the subsidy option selected.",
  },
];

const RIGHT_FAQS = [
  {
    id: "giveup-stage",
    question: "Till what stage on the portal can I change the 'Give-up' subsidy option?",
    answer:
      "You can typically change the Give-up choice before vendor selection and installation are completed. After installation data is submitted, the subsidy decision is usually locked.",
  },
  {
    id: "install-data",
    question: "Who is responsible for filling out the installation data, the consumer or the vendor?",
    answer:
      "The registered vendor (installer) fills in installation data on the national portal. You should still review the details before the file moves to inspection.",
  },
  {
    id: "rwa-capacity",
    question: "How much capacity can an RWA apply for under PM Surya Ghar Muft Bijli Yojana?",
    answer:
      "Group Housing Societies and RWAs can apply for common-facility rooftop systems, typically from 20 kW up to 500 kW, subject to available roof area and DISCOM approval.",
  },
  {
    id: "max-subsidy",
    question: "What is the maximum subsidy for the residential category and the RWA category?",
    answer:
      "Residential consumers can receive up to ₹78,000 (₹30,000 per kW for the first 2 kW and ₹18,000 for the additional 1 kW). RWAs receive ₹18,000 per kW for eligible common-area capacity.",
  },
  {
    id: "change-capacity",
    question: "Is it possible to change the proposed capacity on the National Portal after the application is submitted?",
    answer:
      "Yes, capacity can usually be updated before installation is completed, based on the site survey and DISCOM feasibility. Ask your vendor to revise the proposal on the portal.",
  },
  {
    id: "loan-rwa",
    question: "Is a loan applicable for both the Residential and RWA category?",
    answer:
      "Yes. Both individual households and RWAs can finance the post-subsidy amount through participating banks, subject to lender eligibility.",
  },
  {
    id: "dcr",
    question: "Are PV modules verified through the portal for domestic content requirements (PV Cell & Module)?",
    answer:
      "Yes. The portal verifies that modules are ALMM-listed and meet domestic content requirements for both PV cells and modules before subsidy processing.",
  },
  {
    id: "why-reject",
    question: "Why do PM Surya Ghar applications get rejected?",
    answer:
      "Common reasons include mismatched consumer numbers, a non-residential connection, missing Aadhaar or bank details, insufficient roof rights, or using non-DCR modules. A complete file with an MNRE vendor reduces rejection risk.",
  },
];

function ToggleIcon({ open }) {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-navy"
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
        className="flex min-h-12 w-full items-start justify-between gap-3 py-4 text-left sm:py-5"
      >
        <span className="text-[15px] font-semibold leading-snug text-ink sm:text-base">
          {item.question}
        </span>
        <ToggleIcon open={open} />
      </button>
      {open ? <p className="pb-5 pr-8 text-sm leading-7 text-muted">{item.answer}</p> : null}
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

export default function SchemeFaq() {
  const allItems = [...LEFT_FAQS, ...RIGHT_FAQS];
  const [openMap, setOpenMap] = useState(() =>
    Object.fromEntries(allItems.map((item) => [item.id, false])),
  );

  function toggle(id) {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
      <section id="scheme-faq" className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <span className="mt-5 inline-flex rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-white">
            General
          </span>
          <div className="mt-6 grid gap-x-12 md:mt-8 md:grid-cols-2">
            <FaqColumn items={LEFT_FAQS} openMap={openMap} onToggle={toggle} />
            <div className="border-t border-line md:border-t-0">
              <FaqColumn items={RIGHT_FAQS} openMap={openMap} onToggle={toggle} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 md:px-8">
        <div className="mx-auto max-w-site text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Ready to Cut Your Electricity Bill to Zero?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            Join 50,000+ Indian homeowners who&apos;ve already made the switch. Get a free site
            assessment and subsidy estimate, no commitment required.
          </p>
          <CtaButton className="mt-7">Get Free Quote</CtaButton>
        </div>
      </section>
    </>
  );
}
