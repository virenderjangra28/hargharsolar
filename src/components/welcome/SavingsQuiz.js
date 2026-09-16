"use client";

import { useState } from "react";
import { useExpertModal } from "@/components/ExpertModalContext";
import { toast } from "react-toastify";
import Link from "next/link";

const ROOF_OPTIONS = [
  {
    id: "own",
    title: "Yes, I own it",
    subtitle: "Full Authority",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="14" width="16" height="14" rx="1.5" stroke="#16315c" strokeWidth="1.6" />
        <path d="M6 15.5L14 8l8 7.5" stroke="#16315c" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="26" cy="12" r="6" fill="#22c55e" />
        <path d="M23.6 12.2l1.7 1.7 3.3-3.4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "rent",
    title: "It's Rented",
    subtitle: "Owner's Approval",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="14" cy="13" r="4" stroke="#16315c" strokeWidth="1.6" />
        <path d="M8 26c.7-4 3.2-6 6-6s5.3 2 6 6" stroke="#16315c" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M24 16.5c1.6 0 2.4 1.4 2.4 3.1V22h1.2c.8 0 1.4.6 1.4 1.3v3.2c0 .4-.3.7-.7.7h-7.6c-.4 0-.7-.3-.7-.7v-3.2c0-.7.6-1.3 1.4-1.3H23v-2.4c0-1 .4-1.6 1-1.6z"
          stroke="#16315c"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
];

const BILL_OPTIONS = [
  "Less than ₹1500",
  "₹1500 - ₹3000",
  "₹3000 - ₹4500",
  "₹4500 - ₹6000",
  "More than ₹6000",
];

const TIME_SLOTS = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

const PIN_CITIES = {
  122001: "Gurgaon",
  122002: "Gurgaon",
  121001: "Faridabad",
  134109: "Panchkula",
  133001: "Ambala",
  132103: "Panipat",
  132001: "Karnal",
  124001: "Rohtak",
};

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export default function SavingsQuiz({ lead = {} }) {
  const { openModal } = useExpertModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = JSON.parse(decodeURIComponent(lead));
  const [step, setStep] = useState(1);
  const [roof, setRoof] = useState("");
  const [bill, setBill] = useState(data.bill || "");
  const [visit, setVisit] = useState({
    name: data?.name || "",
    phone: data?.phone || "",
    rent: roof,
    address: "",
    landmark: "",
    pincode: data?.pincode || "",
    date: "",
    slot: "",
  });
  const [visitErrors, setVisitErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const progress = step === 1 ? 18 : step === 2 ? 45 : submitted ? 100 : 80;
  const pinCity = PIN_CITIES[visit.pincode];
  const visitComplete =
    visit.address.trim().length >= 8 &&
    visit.landmark.trim().length > 0 &&
    /^\d{6}$/.test(visit.pincode) &&
    Boolean(visit.date) &&
    Boolean(visit.slot);

  function updateVisit(field, value) {
    setVisit((prev) => ({ ...prev, [field]: value }));
    setVisitErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function submitVisit(event) {
    event.preventDefault();
    const next = {};
    if (!visit.address.trim() || visit.address.trim().length < 8) {
      next.address = "Enter your full address.";
    }
    if (!/^\d{6}$/.test(visit.pincode)) {
      next.pincode = "Enter a valid 6-digit PIN code.";
    }
    if (!visit.date) {
      next.date = "Choose a visit date.";
    }
    if (!visit.slot) {
      next.slot = "Select a time slot.";
    }
    setVisitErrors(next);
    setSubmitError("");
    
    if (Object.keys(next).length > 0) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: visit.name || "",
          mobile: visit.phone || "",
          monthlyBill: bill,
          pinCode: visit.pincode,
          propertyType: roof,
          address: visit.address.trim(),
          landmark: visit.landmark.trim(),
          selectedDate: visit.date,
          selectedTime: visit.slot,
        }),
      });
      const data = await response.json();
      setIsSubmitting(false);
      if (!response.ok) {
        setSubmitError(data.error || "Could not book the visit. Please try again.");
        return;
      }
      setSubmitted(true);
      toast.success("Your request has been submitted successfully. Our expert will contact you shortly.");
    } catch {
      setSubmitError("Could not book the visit. Please try again.");
      toast.error("Could not book the visit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex h-full items-center bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10">
      <div className="w-full max-w-[520px]">
        <h2 className="text-[26px] font-extrabold leading-tight text-navy sm:text-[32px]">
          <Link href="/solar-calculator">Let&apos;s calculate your solar savings</Link>
        </h2>
        <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-[#e6eef5]">
          <div
            className="h-full rounded-full bg-navy transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-muted">Takes less than 60 seconds</p>

        {step === 1 ? (
          <div className="mt-8">
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">Do you own the roof?</h3>
            <p className="mt-1 text-sm text-muted">
              We check this to confirm if you can install solar
            </p>
            <div className="mt-6 space-y-3">
              {ROOF_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setRoof(option.id);
                    setStep(2);
                  }}
                  className={`flex w-full items-center gap-4 rounded-xl border bg-white px-4 py-4 text-left transition ${
                    roof === option.id
                      ? "border-navy shadow-sm"
                      : "border-[#d7e0ea] hover:border-navy/40"
                  }`}
                >
                  {option.icon}
                  <span>
                    <span className="block text-base font-bold text-ink">{option.title}</span>
                    <span className="block text-sm text-muted">{option.subtitle}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-8">
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">
              Monthly electricity bill?
            </h3>
            <p className="mt-1 text-sm text-muted">This helps us suggest the right system size</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {BILL_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setBill(option);
                    setStep(3);
                  }}
                  className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-medium ${
                    bill === option
                      ? "border-navy bg-[#eef3f9] text-navy"
                      : "border-[#d7e0ea] bg-white text-ink hover:border-navy/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-5 text-sm font-medium text-navy hover:underline"
            >
              Back
            </button>
          </div>
        ) : null}

        {step === 3 && !submitted ? (
          <form className="mt-8" onSubmit={submitVisit} noValidate>
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">
              Book your free site visit
            </h3>
            <p className="mt-1 text-sm text-muted">
              {roof === "own"
                ? "Share your address and a convenient slot."
                : "Share your address. We can also help with owner approval."}
            </p>

            <textarea
              rows={3}
              placeholder="Enter your full address"
              value={visit.address}
              onChange={(e) => updateVisit("address", e.target.value)}
              className="mt-5 w-full resize-y rounded-xl border border-[#d7e0ea] bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate-400 focus:border-navy"
            />
            {visitErrors.address ? (
              <p className="mt-1 text-xs text-red-600">{visitErrors.address}</p>
            ) : null}

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Landmark"
                value={visit.landmark}
                onChange={(e) => updateVisit("landmark", e.target.value)}
                className="h-12 w-full rounded-xl border border-[#d7e0ea] bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-navy"
              />
              <label className="relative block">
                <span className="pointer-events-none absolute top-1.5 left-4 text-[11px] text-muted">
                  PIN Code
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="122001"
                  value={visit.pincode}
                  onChange={(e) =>
                    updateVisit("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  className="h-12 w-full rounded-xl border border-[#d7e0ea] bg-white px-4 pt-4 pb-1 text-base font-semibold text-ink outline-none placeholder:font-normal placeholder:text-slate-400 focus:border-navy"
                />
                {pinCity ? (
                  <span className="pointer-events-none absolute top-5 right-4 text-sm font-semibold text-ink">
                    ({pinCity})
                  </span>
                ) : null}
              </label>
            </div>
            {visitErrors.pincode ? (
              <p className="mt-1 text-xs text-red-600">{visitErrors.pincode}</p>
            ) : null}

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-ink">Select date</span>
                <input
                  type="date"
                  min={todayIso()}
                  value={visit.date}
                  onChange={(e) => updateVisit("date", e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#d7e0ea] bg-white px-4 text-base text-ink outline-none focus:border-navy"
                />
                {visitErrors.date ? (
                  <p className="mt-1 text-xs text-red-600">{visitErrors.date}</p>
                ) : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-ink">Select time slot</span>
                <select
                  value={visit.slot}
                  onChange={(e) => updateVisit("slot", e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#d7e0ea] bg-white bg-[length:16px] bg-[right_12px_center] bg-no-repeat px-4 text-base text-ink outline-none focus:border-navy"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2364748b' stroke-width='1.8'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="">Select Time Slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {visitErrors.slot ? (
                  <p className="mt-1 text-xs text-red-600">{visitErrors.slot}</p>
                ) : null}
              </label>
            </div>

            {submitError ? <p className="mt-3 text-sm text-red-600">{submitError}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 h-12 w-full rounded-xl text-sm font-semibold text-white transition ${
                visitComplete ? "bg-navy hover:bg-navy-mid" : "bg-[#8b95a5]"
              }`}
            >
              {isSubmitting ? "Submitting..." : visitComplete ? "Submit" : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 block text-sm font-medium text-navy hover:underline"
            >
              Back
            </button>
          </form>
        ) : null}

        {step === 3 && submitted ? (
          <div className="mt-8">
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">Visit booked</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Our expert will visit on {visit.date} between {visit.slot}. We will confirm on
              WhatsApp shortly.
            </p>
            {/* <button
              type="button"
              onClick={openModal}
              className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-navy px-6 text-sm font-semibold text-white hover:bg-navy-mid"
            >
              Talk to our expert
            </button> */}
          </div>
        ) : null}
      </div>
    </section>
  );
}
