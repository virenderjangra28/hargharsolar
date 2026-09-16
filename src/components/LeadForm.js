"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BILL_OPTIONS = [
  "Less than ₹1500",
  "₹1500 - ₹3000",
  "₹3000 - ₹4500",
  "₹4500 - ₹6000",
  "More than ₹6000",
];

const EMPTY = {
  name: "",
  phone: "",
  bill: "₹3000 - ₹4500",
  pincode: "",
  consent: true,
};

export default function LeadForm({
  variant = "default",
  title,
  subtitle,
  showSlotsBadge = false,
  submitLabel,
}) {
  const heading = title ?? "Book a FREE Solar Consultation";
  const lead = subtitle === undefined ? "And save up to ₹1,00,000 with subsidy" : subtitle;
  const isSidebar = variant === "sidebar";
  const isCity = variant === "city";
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileExist, setMobileExist] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if(field === "phone" && value.length === 10){
      checkMobileExist(value);
    }
  }

  //Check mobile number exist in DB or not
   const checkMobileExist = async (mobile) => {
      try {
        const response = await fetch("/api/check-mobile-exist", {
          method: "POST",
          body: JSON.stringify({ mobile: mobile }),
        });
        const data = await response.json();
        if(data.success){
          setMobileExist(false);
          return true;
        } else if (data.success === false){
          setErrors((prev) => ({ ...prev, phone: data.message }));
          setMobileExist(true);
          return false;
        }
      } catch (error) {
        console.error(error);
        setErrors((prev) => ({ ...prev, phone: "Something went wrong" }));
        return false;
      }
   }

  function validate() {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit WhatsApp number.";
    }
    if (!isCity && !form.bill) {
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
    setLoading(true);
    if(mobileExist){
      setErrors((prev) => ({ ...prev, phone: "Mobile number already exists. Please try with another number." }));
      setLoading(false);
      return;
    }
    
    if (!validate()) return;
    const firstName = form.name.trim().split(/\s+/)[0];
    const queryParam = JSON.stringify(form);
    // router.push(`/welcome?name=${encodeURIComponent(firstName)}`);
    setTimeout(() => {
      setLoading(false);
      router.push(`/welcome?queryParams=${encodeURIComponent(JSON.stringify(queryParam))}`);
    }, 3000);
    

    // setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-7 shadow-[0_18px_50px_rgba(16,36,72,0.16)] sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/15 text-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-navy">Consultation booked</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks {form.name.split(" ")[0]}. Our solar expert will reach you on WhatsApp
          shortly to plan your rooftop system.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(EMPTY);
          }}
          className="mt-6 w-full rounded-lg bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isCity
          ? "rounded-2xl bg-[#1a1a1a] p-5 text-white shadow-xl sm:p-6"
          : isSidebar
            ? "bg-transparent p-1 sm:p-2"
            : "rounded-2xl bg-white p-5 shadow-[0_18px_50px_rgba(16,36,72,0.16)] sm:p-6 md:p-8"
      }
      noValidate
    >
      <h2
        className={`text-center text-[22px] font-extrabold leading-tight sm:text-[26px] ${
          isCity ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {isCity ? <div className="mx-auto mt-3 h-0.5 w-16 bg-sky" /> : null}
      {lead ? (
        <p className={`mt-1 text-center text-sm ${isCity ? "text-white/70" : "text-muted"}`}>{lead}</p>
      ) : null}

      <label className="mt-6 block">
        <span className="sr-only">Full Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white"
        />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
      </label>

      <label className="mt-3 block">
        <span className="sr-only">WhatsApp Number</span>
        <input
          type="tel"
          name="phone"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={10}
          placeholder="WhatsApp Number"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
          className="h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white"
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
      </label>

      {isCity ? null : (
      <fieldset className="mt-5">
        <legend className="mb-2.5 text-sm font-semibold text-ink">
          Monthly electricity bill?
        </legend>
        <div className="flex flex-wrap gap-2">
          {BILL_OPTIONS.map((option) => {
            const selected = form.bill === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => update("bill", option)}
                className={`min-h-10 rounded-md border px-3 py-2 text-[13px] font-medium transition ${
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
      </fieldset>
      )}

      <label className="mt-5 block">
        <span className="sr-only">PIN Code</span>
        <input
          type="text"
          name="pincode"
          inputMode="numeric"
          maxLength={6}
          placeholder="PIN Code"
          value={form.pincode}
          onChange={(e) => update("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
          className="h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white"
        />
        {errors.pincode ? (
          <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
        ) : null}
      </label>

      <label className={`mt-4 flex items-start gap-2.5 text-[11px] leading-4 ${isCity ? "text-white/60" : "text-muted"}`}>
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 accent-navy"
        />
        <span>
          I agree to receive updates on WhatsApp and accept the{" "}
          <a href="/terms" className="underline underline-offset-2">
            Terms
          </a>{" "}
          &{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent ? <p className="mt-1 text-xs text-red-600">{errors.consent}</p> : null}

      <div className="relative mt-5">
        {showSlotsBadge ? (
          <span className="absolute -top-3 right-3 z-10 rotate-6 rounded-sm bg-[#f5d000] px-2 py-0.5 text-[10px] font-extrabold text-navy">
            Limited slots only!
          </span>
        ) : null}
        <button
          disabled={loading}
          type="submit"
          className={`w-full rounded-lg py-3.5 text-sm font-semibold text-white transition ${
            isCity ? "bg-sky uppercase tracking-wide hover:bg-navy" : "bg-navy hover:bg-navy-mid"
          }`}
        >
          {loading ? "Loading..." : submitLabel ?? "Book a FREE Consultation"}
        </button>
      </div>
    </form>
  );
}
