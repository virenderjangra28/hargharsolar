"use client";

import { useMemo, useState } from "react";
import { useExpertModal } from "@/components/ExpertModalContext";

const MIN_BILL = 500;
const MAX_BILL = 25000;
const SQFT_PER_KW = 128 / 2.16;
const SUN_HOURS = 4;
const DAYS = 30;
const TARIFF = 7.57;
const LIFETIME_YEARS = 25;

// const PIN_CITIES = {
//   122001: "Gurugram",
//   122002: "Gurugram",
//   122003: "Gurugram",
//   121001: "Faridabad",
//   121002: "Faridabad",
//   134109: "Panchkula",
//   133001: "Ambala",
//   132103: "Panipat",
//   132001: "Karnal",
//   124001: "Rohtak",
//   125001: "Hisar",
//   131001: "Sonipat",
// };

function formatInr(value) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function formatKw(value) {
  return `${value.toFixed(2)} kW`;
}

export default function SolarCalculator() {
  const { openModal } = useExpertModal();
  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState(MIN_BILL);
  const [showBillInfo, setShowBillInfo] = useState(false);
  // const pinCity = PIN_CITIES[pincode];
  const [zone, setZone] = useState(null);
  const [zoneName, setZoneName] = useState("");
  const sliderBill = Math.min(MAX_BILL, Math.max(MIN_BILL, Number(bill) || MIN_BILL));
  const percent = ((sliderBill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;
  const locationReady = pincode.length === 6 && zoneName !== "";

  function clampSliderBill(value) {
    const next = Number(value);
    if (!Number.isFinite(next)) return MIN_BILL;
    return Math.min(MAX_BILL, Math.max(MIN_BILL, Math.round(next)));
  }

  const result = useMemo(() => {
    const kw = (bill / MIN_BILL) * 0.5;
    const roof = kw * SQFT_PER_KW;
    const monthly = kw * SUN_HOURS * DAYS * TARIFF;
    const yearly = monthly * 12;
    const lifetime = yearly * LIFETIME_YEARS;
    return { kw, roof, monthly, yearly, lifetime };
  }, [bill]);

  const searchZone = async (value) => {
    // if(value.length !== 6){
    //   setPincode("");
    //   return;
    // }
    setPincode(value.replace(/\D/g, "").slice(0, 6));
    if(value.length < 6){
      return;
    }
    try {
      setZoneName("");
      setBill(MIN_BILL);
      const response  = await fetch(`https://api.postalpincode.in/pincode/${value}`);
      const data = await response.json();
      // console.log(data);
      if(data[0].Status === "Success"){
        setZone(data[0].PostOffice);
      } else {
        setPincode("");
      }
    } catch (error) {
      console.error(error);
      setPincode("");
    }
  }

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy text-navy">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M9 3.2v11.6M5.2 6.8c1.2-1.5 2.5-2.2 3.8-2.2s2.6.7 3.8 2.2M5.2 11.2c1.2 1.5 2.5 2.2 3.8 2.2s2.6-.7 3.8-2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M9 7.2l1.6 2.4H7.4L9 7.2z" fill="currentColor" />
              </svg>
            </span>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#0b131f] sm:text-3xl md:text-4xl">
                Calculate Your Solar Savings Now!
              </h1>
              <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                Unlock savings, build that dream fund, and start ticking off your checklist.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-[#f4f1f8] p-5 sm:p-7">
            <label className="block">
              <span className="text-sm font-semibold text-[#0b131f]">Pin code</span>
              <span className="mt-2 flex flex-wrap gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter pin code"
                  value={pincode}
                  onChange={(event) => searchZone(event.target.value)
                  }
                  className="h-12 min-w-0 flex-1 rounded-lg border border-line bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-navy"
                />
                <select className="h-12 min-w-0 flex-1 rounded-lg border border-line bg-white px-4 text-base text-ink outline-none focus:border-navy" 
                onChange={(event) => setZoneName(event.target.value)}>
                  <option value="">Select zone</option>
                  {zone?.map((item) => (
                    <option key={item.Name} value={item.Name}>
                      {item.Name.replace(/;/g, "")}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <div className="mt-7">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-[#0b131f]">Avg electricity bill</span>
                <button
                  type="button"
                  className="relative text-muted"
                  aria-label="How average bill is used"
                  onClick={() => setShowBillInfo((open) => !open)}
                  onBlur={() => setShowBillInfo(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 7.2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="8" cy="5.2" r="0.7" fill="currentColor" />
                  </svg>
                  {showBillInfo ? (
                    <span className="absolute top-6 left-0 z-10 w-56 rounded-lg bg-white p-3 text-left text-xs leading-5 text-muted shadow-lg">
                      We size your rooftop system from your typical monthly electricity bill.
                    </span>
                  ) : null}
                </button>
              </div>

              <div className="relative mt-8 px-2 pb-10">
                <input
                  type="range"
                  disabled = {zoneName === ""}
                  min={MIN_BILL}
                  max={MAX_BILL}
                  step={50}
                  value={sliderBill}
                  onChange={(event) => setBill(clampSliderBill(event.target.value))}
                  aria-label="Average electricity bill"
                  className="bill-slider h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#d9d9d9]"
                />
                <div className="mt-2 flex justify-between text-xs text-muted">
                  <span>Min. {MIN_BILL}</span>
                  <span>Max {formatInr(MAX_BILL)}</span>
                </div>
                <div
                  className="absolute top-[22px] -translate-x-1/2 rounded-md bg-[#0b131f] px-2.5 py-1 text-xs font-semibold text-white"
                  style={{ left: `${percent}%` }}
                >
                  {formatInr(sliderBill)}
                </div>
              </div>
            </div>
            <div className="mt-7">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter your amount"
                disabled={!locationReady}
                value={locationReady ? bill : ""}
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, "");
                  if (digits === "") {
                    setBill("");
                    return;
                  }
                  setBill(Math.min(MAX_BILL, Number(digits)));
                }}
                className="h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-navy disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-muted sm:w-1/2"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line p-5 sm:p-7">
          <h2 className="text-lg font-extrabold text-[#0b131f] sm:text-xl">Required System Size</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-line">
            <div className="grid grid-cols-2">
              <div className="px-4 py-5">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="text-[#0b131f]">
                  <rect x="2.5" y="4" width="17" height="12" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2.5 10h17M8.2 4v12M13.8 4v12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="mt-3 text-sm text-muted">System Size</p>
                <p className="mt-1 text-xl font-extrabold text-[#0b131f]">{formatKw(result.kw)}</p>
              </div>
              <div className="border-l border-line px-4 py-5">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="text-[#0b131f]">
                  <path d="M3 16V9.5L11 4l8 5.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 16v-5h6v5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="mt-3 text-sm text-muted">Roof Area</p>
                <p className="mt-1 text-xl font-extrabold text-[#0b131f]">
                  {Math.round(result.roof).toLocaleString("en-IN")} sq. ft.
                </p>
              </div>
            </div>
            <div className="bg-[#f3f3f3] px-4 py-3 text-sm text-[#0b131f]">
              Do not have required roof area? Our consultants will guide you,{" "}
              <button type="button" onClick={openModal} className="font-semibold text-sky hover:underline">
                Get in touch
              </button>
            </div>
          </div>

          <h2 className="mt-8 text-lg font-extrabold text-[#0b131f] sm:text-xl">Your Solar Savings</h2>
          <p className="mt-1 text-center text-sm text-muted">Your savings with HarGharSolar</p>
          <div className="mt-4 grid grid-cols-1 overflow-hidden rounded-xl border border-line sm:grid-cols-3">
            <div className="px-3 py-5 text-center">
              <p className="text-lg font-extrabold text-[#0b131f] sm:text-xl">{formatInr(result.monthly)}</p>
              <p className="mt-1 text-sm text-muted">Monthly*</p>
            </div>
            <div className="border-t border-line px-3 py-5 text-center sm:border-x sm:border-t-0">
              <p className="text-lg font-extrabold text-[#0b131f] sm:text-xl">{formatInr(result.yearly)}</p>
              <p className="mt-1 text-sm text-muted">Yearly*</p>
            </div>
            <div className="border-t border-line px-3 py-5 text-center sm:border-t-0">
              <p className="text-lg font-extrabold text-[#0b131f] sm:text-xl">{formatInr(result.lifetime)}</p>
              <p className="mt-1 text-sm text-muted">Lifetime*</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
