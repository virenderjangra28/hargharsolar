"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BILL_OPTIONS = [
  "Less than ₹1500",
  "₹1500 – ₹2500",
  "₹2500 – ₹4000",
  "₹4000 – ₹8000",
  "More than ₹8000",
];

const EMPTY = {
  name: "",
  phone: "",
  bill: "",
  pincode: "",
  consent: true,
};

export default function ExpertPopup({ open, onClose }) {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function resetAndClose() {
    setForm(EMPTY);
    setErrors({});
    setSubmitted(false);
    onClose();
  }

  function validate() {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit WhatsApp number.";
    }
    if (!form.bill) {
      next.bill = "Select your monthly electricity bill.";
    }
    if (!/^\d{6}$/.test(form.pincode.trim())) {
      next.pincode = "Enter a valid 6-digit PIN code.";
    }
    if (!form.consent) {
      next.consent = "Please accept the terms to continue.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    const firstName = form.name.trim().split(/\s+/)[0];
    onClose();
    router.push(`/welcome?name=${encodeURIComponent(firstName)}`);
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6">
      <button
        type="button"
        aria-label="Close popup"
        onClick={resetAndClose}
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="expert-popup-title"
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-[#f3f7fb] px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_24px_80px_rgba(8,18,38,0.35)] sm:max-h-[90vh] sm:w-[min(450px,calc(100vw-2rem))] sm:max-w-[450px] sm:rounded-3xl sm:px-6 sm:pb-6 sm:pt-4"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sky/50" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="expert-popup-title" className="text-xl font-extrabold text-ink">
              Talk to our expert
            </h2>
            <p className="mt-1 text-sm leading-5 text-muted">
              Get genuine advice about HarGharZero™ and ask any questions you have.
            </p>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close"
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/70 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="mt-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-green/15 text-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg font-extrabold text-navy">Details submitted</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Thanks {form.name.split(" ")[0]}. Our expert will reach you on WhatsApp shortly.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-navy to-navy-mid py-3.5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5" noValidate>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-sky"
            />
            {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}

            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              placeholder="Whatsapp Number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="mt-3 h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-sky"
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}

            <div className="mt-4">
              <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-ink">
                Monthly Electricity Bill
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted text-[10px] font-bold text-muted"
                  title="Choose the range closest to your last electricity bill."
                >
                  i
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {BILL_OPTIONS.map((option) => {
                  const selected = form.bill === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("bill", option)}
                      className={`rounded-lg border px-2.5 py-2 text-xs font-medium transition sm:px-3 sm:text-[13px] ${
                        selected
                          ? "border-sky bg-[#e8f4ff] text-sky"
                          : "border-line bg-white text-ink hover:border-sky/50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {errors.bill ? <p className="mt-1 text-xs text-red-600">{errors.bill}</p> : null}
            </div>

            <input
              type="text"
              name="pincode"
              inputMode="numeric"
              maxLength={6}
              placeholder="PIN Code"
              value={form.pincode}
              onChange={(e) => update("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="mt-4 h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink outline-none placeholder:text-slate-400 focus:border-sky"
            />
            {errors.pincode ? (
              <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
            ) : null}

            <label className="mt-4 flex items-start gap-2.5 text-[12px] leading-5 text-muted">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-sky"
              />
              <span>
                I agree to HarGharSolar{" "}
                <a href="/terms" className="text-sky underline underline-offset-2">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-sky underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {errors.consent ? (
              <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
            ) : null}

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-to-r from-navy to-navy-mid py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Submit Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
