"use client";

import { useMemo, useState } from "react";
import { useExpertModal } from "./ExpertModalContext";

const SIZES = [
  { kw: 3, label: "Upto 3 BHK" },
  { kw: 4, label: "Upto 4 BHK" },
  { kw: 5, label: "Large Homes" },
];

const TENURES = [60, 84, 120, 180];

const ESTIMATES = {
  3: {
    60: { saving: 4100, emi: 3100 },
    84: { saving: 4600, emi: 2400 },
    120: { saving: 5000, emi: 1850 },
    180: { saving: 5300, emi: 1350 },
  },
  4: {
    60: { saving: 5400, emi: 4100 },
    84: { saving: 6000, emi: 3150 },
    120: { saving: 6500, emi: 2400 },
    180: { saving: 6900, emi: 1750 },
  },
  5: {
    60: { saving: 6800, emi: 5100 },
    84: { saving: 7500, emi: 3900 },
    120: { saving: 8100, emi: 2950 },
    180: { saving: 8600, emi: 2150 },
  },
};

function formatInr(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function Calculator() {
  const [size, setSize] = useState(3);
  const [tenure, setTenure] = useState(60);
  const { openModal } = useExpertModal();
  const estimate = useMemo(() => ESTIMATES[size][tenure], [size, tenure]);

  return (
    <section id="calculator" className="bg-navy-deep px-4 py-12 text-white sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Go Solar with Zero Investment
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75">
            Use government subsidy and flexible EMI to start saving from the first month.
            Your electricity savings are designed to stay higher than your EMI.
          </p>

          <button
            type="button"
            onClick={openModal}
            className="mt-8 flex w-full max-w-md items-center gap-4 rounded-xl bg-mint p-4 text-left text-navy-deep shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80"
              alt="HarGharSolar solar expert"
              className="h-14 w-14 rounded-lg object-cover"
            />
            <div>
              <p className="text-lg font-extrabold leading-6">Got questions?</p>
              <p className="text-sm font-medium">
                Our solar expert can help.{" "}
                <span className="underline underline-offset-2">Talk to an expert -&gt;</span>
              </p>
            </div>
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Get Savings and EMI Estimates</h3>

          <p className="mt-6 text-sm font-medium text-white/80">Select system size</p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {SIZES.map((item) => {
              const selected = size === item.kw;
              return (
                <button
                  key={item.kw}
                  type="button"
                  onClick={() => setSize(item.kw)}
                  className={`min-h-[72px] rounded-lg px-2 py-3 text-left transition sm:px-3 sm:py-4 ${
                    selected ? "bg-sky text-white" : "bg-[#16325f] text-white hover:bg-[#1c3d70]"
                  }`}
                >
                  <span className="block text-xl font-extrabold sm:text-2xl">{item.kw}kW</span>
                  <span className="mt-1 block text-[11px] text-white/80 sm:text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-sm font-medium text-white/80">Select EMI tenure</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {TENURES.map((months) => {
              const selected = tenure === months;
              return (
                <button
                  key={months}
                  type="button"
                  onClick={() => setTenure(months)}
                  className={`min-h-11 rounded-md px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                    selected ? "bg-sky text-white" : "bg-[#16325f] text-white hover:bg-[#1c3d70]"
                  }`}
                >
                  {months} Months
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-xl font-extrabold text-green sm:text-2xl md:text-3xl">
              Net Monthly saving {formatInr(estimate.saving)}
            </p>
            <p className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
              Monthly EMI {formatInr(estimate.emi)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
