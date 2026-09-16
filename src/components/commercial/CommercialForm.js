"use client";

import { useState } from "react";

const EMPTY = {
  name: "",
  companyName: "",
  city: "",
  pincode: "",
  phone: "",
  bill: "",
  consent: true,
};

const fieldClass =
  "h-12 w-full rounded-2xl border-0 bg-white px-5 text-[15px] text-[#3D4A5C] shadow-[0_1px_2px_rgba(16,24,40,0.06)] outline-none transition placeholder:text-[#8B93A7] focus:ring-2 focus:ring-[#2F80F0]/30";

export default function CommercialForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileExist, setMobileExist] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (field === "phone" && value.length === 10) {
      checkMobileExist(value);
    }
  }

  async function checkMobileExist(mobile) {
    try {
      const response = await fetch("/api/check-mobile-exist", {
        method: "POST",
        body: JSON.stringify({ mobile }),
      });
      const data = await response.json();
      if (data.success) {
        setMobileExist(false);
        return true;
      }
      setErrors((prev) => ({ ...prev, phone: data.message }));
      setMobileExist(true);
      return false;
    } catch {
      setErrors((prev) => ({ ...prev, phone: "Something went wrong" }));
      return false;
    }
  }

  function validate() {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!form.companyName.trim() || form.companyName.trim().length < 2) {
      next.companyName = "Please enter the company name.";
    }
    if (!form.city.trim() || form.city.trim().length < 2) {
      next.city = "Please enter your city.";
    }
    if (!/^\d{6}$/.test(form.pincode.trim())) {
      next.pincode = "Enter a valid 6-digit PIN code.";
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit WhatsApp number.";
    }
    if (!form.bill.trim()) {
      next.bill = "Enter your monthly electricity bill.";
    }
    if (!form.consent) {
      next.consent = "Please accept the terms to continue.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(false);
    if (mobileExist) {
      setErrors((prev) => ({
        ...prev,
        phone: "Mobile number already exists. Please try with another number.",
      }));
      return;
    }
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/commercial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          companyName: form.companyName.trim(),
          city: form.city.trim(),
          pincode: form.pincode.trim(),
          mobile: form.phone.trim(),
          monthlyBill: form.bill.trim(),
          status: "pending",
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors((prev) => ({
          ...prev,
          submit: data.error || "Could not submit. Please try again.",
        }));
        return;
      }
      setSubmitted(true);
      setForm(EMPTY);
    } catch {
      setErrors((prev) => ({
        ...prev,
        submit: "Could not submit. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <label className="block">
        <span className="sr-only">Full Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={fieldClass}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
      </label>

      <label className="mt-4 block">
        <span className="sr-only">Company Name</span>
        <input
          type="text"
          name="companyName"
          autoComplete="organization"
          placeholder="Company Name*"
          value={form.companyName}
          onChange={(e) => update("companyName", e.target.value)}
          className={fieldClass}
        />
        {errors.companyName ? (
          <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
        ) : null}
      </label>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="block">
          <span className="sr-only">City</span>
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="City"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className={fieldClass}
          />
          {errors.city ? <p className="mt-1 text-xs text-red-600">{errors.city}</p> : null}
        </label>
        <label className="block">
          <span className="sr-only">PIN Code</span>
          <input
            type="text"
            name="pincode"
            inputMode="numeric"
            maxLength={6}
            placeholder="PIN Code"
            value={form.pincode}
            onChange={(e) => update("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={fieldClass}
          />
          {errors.pincode ? (
            <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
          ) : null}
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="block">
          <span className="sr-only">WhatsApp Number</span>
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            placeholder="Whatsapp Number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            className={fieldClass}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </label>
        <label className="block">
          <span className="sr-only">Monthly Bill</span>
          <input
            type="text"
            name="bill"
            inputMode="numeric"
            placeholder="Monthly Bill"
            value={form.bill}
            onChange={(e) => update("bill", e.target.value)}
            className={fieldClass}
          />
          {errors.bill ? <p className="mt-1 text-xs text-red-600">{errors.bill}</p> : null}
        </label>
      </div>

      <label className="mt-5 flex items-center gap-2.5 text-[13px] leading-5 text-[#3D4A5C]">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="h-4 w-4 rounded border-[#C5CDD8] accent-[#5B4BDB]"
        />
        <span>
          I agree to HarGharSolar{" "}
          <a href="/terms" className="text-[#2F80F0] underline underline-offset-2">
            Terms of use
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#2F80F0] underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent ? <p className="mt-1 text-xs text-red-600">{errors.consent}</p> : null}
      {errors.submit ? <p className="mt-2 text-xs text-red-600">{errors.submit}</p> : null}

      <div className="relative mt-5">
        <span className="absolute -top-2.5 right-3 z-10 rotate-6 rounded-md bg-[#F5D76E] px-2 py-0.5 text-[10px] font-semibold text-[#1A1A1A] sm:right-6 sm:text-[11px]">
          Limited slots only!
        </span>
        <button
          disabled={loading}
          type="submit"
          className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#1A3A8A] to-[#070B14] text-[15px] font-semibold text-white transition hover:from-[#16315c] hover:to-black disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Details"}
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 rounded-2xl bg-[#D8F0E0] px-5 py-4 text-[16px] leading-6 text-[#1B5E3B]">
          Details submitted successfully. Our team will contact you shortly.
        </p>
      ) : null}
    </form>
  );
}
