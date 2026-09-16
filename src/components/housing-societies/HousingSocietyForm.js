"use client";

import { useState } from "react";

const BILL_OPTIONS = [
  "Less than ₹50,000",
  "₹50,000 - ₹2 Lacs",
  "₹2 Lacs - ₹5 Lacs",
  "More than ₹5 Lacs",
];

const AGM_OPTIONS = [
  "We already have AGM Approval",
  "We do not have an AGM Approval yet",
  "We want help in preparing for our AGM",
];

const DESIGNATIONS = [
  "Management committee member",
  "Resident",
  "Builder",
  "Facility Manager",
];

const EMPTY = {
  name: "",
  societyName: "",
  phone: "",
  pincode: "",
  bill: "",
  agmStatus: "",
  designation: "",
  consent: true,
};

const fieldClass =
  "h-12 w-full rounded-2xl border-0 bg-white px-5 text-[15px] text-[#3D4A5C] shadow-[0_1px_2px_rgba(16,24,40,0.06)] outline-none transition placeholder:text-[#8B93A7] focus:ring-2 focus:ring-[#2F80F0]/30";

const selectClass = `${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 12 12%22%3E%3Cpath d=%22M2.5 4.5L6 8l3.5-3.5%22 stroke=%22%233D4A5C%22 stroke-width=%221.7%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-[length:14px] bg-[right_18px_center] bg-no-repeat pr-11`;

function ChoiceButton({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`max-w-full rounded-2xl px-5 py-3.5 text-[14px] font-semibold leading-none text-[#0B1C38] shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition ${
        selected ? "bg-white ring-2 ring-[#0B1C38]" : "bg-white hover:ring-1 hover:ring-[#0B1C38]/20"
      }`}
    >
      {children}
    </button>
  );
}

export default function HousingSocietyForm() {
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
    if (!form.societyName.trim() || form.societyName.trim().length < 2) {
      next.societyName = "Please enter the housing society name.";
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit WhatsApp number.";
    }
    if (!/^\d{6}$/.test(form.pincode.trim())) {
      next.pincode = "Enter a valid 6-digit PIN code.";
    }
    if (!form.bill) {
      next.bill = "Select the society's monthly electricity bill.";
    }
    if (!form.agmStatus) {
      next.agmStatus = "Please select AGM status.";
    }
    if (!form.designation) {
      next.designation = "Select your designation in the society.";
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
      const response = await fetch("/api/housing-society", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          societyName: form.societyName.trim(),
          mobile: form.phone.trim(),
          pincode: form.pincode.trim(),
          bill: form.bill,
          approvalBy: form.agmStatus,
          designation: form.designation,
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
      <h2 className="text-[20px] font-extrabold leading-tight text-[#0B1C38] sm:text-[22px]">
        Book a FREE Visit
      </h2>
      <p className="mt-1.5 max-w-[380px] text-[13px] leading-5 text-[#6B7280]">
        Our Solar Consultants will visit to understand your power requirements and create a
        personalised savings plan for your society.
      </p>

      <label className="mt-6 block">
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

      <label className="mt-3 block">
        <span className="sr-only">Name of the Housing Society</span>
        <input
          type="text"
          name="societyName"
          placeholder="Name of the Housing Society*"
          value={form.societyName}
          onChange={(e) => update("societyName", e.target.value)}
          className={fieldClass}
        />
        {errors.societyName ? (
          <p className="mt-1 text-xs text-red-600">{errors.societyName}</p>
        ) : null}
      </label>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="block">
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
            className={fieldClass}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
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
          <span className="sr-only">Monthly electricity bill</span>
          <select
            name="bill"
            value={form.bill}
            onChange={(e) => update("bill", e.target.value)}
            className={`${selectClass} ${form.bill ? "text-[#1A2744]" : "text-[#9AA3B2]"}`}
          >
            <option value="" disabled>
              ₹50,000 - ₹2 Lacs
            </option>
            {BILL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.bill ? <p className="mt-1 text-xs text-red-600">{errors.bill}</p> : null}
        </label>
        <label className="block">
          <span className="sr-only">AGM approval status</span>
          <select
            name="agmStatus"
            value={form.agmStatus}
            onChange={(e) => update("agmStatus", e.target.value)}
            className={`${selectClass} ${form.agmStatus ? "text-[#1A2744]" : "text-[#9AA3B2]"}`}
          >
            <option value="" disabled>
              We already have...
            </option>
            {AGM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.agmStatus ? (
            <p className="mt-1 text-xs text-red-600">{errors.agmStatus}</p>
          ) : null}
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-3 text-[14px] font-medium text-[#6B7C93]">
          What is your Designation in the Society?*
        </legend>
        <div className="flex flex-wrap gap-3">
          {DESIGNATIONS.map((option) => (
            <ChoiceButton
              key={option}
              selected={form.designation === option}
              onClick={() => update("designation", option)}
            >
              {option}
            </ChoiceButton>
          ))}
        </div>
        {errors.designation ? (
          <p className="mt-1 text-xs text-red-600">{errors.designation}</p>
        ) : null}
      </fieldset>

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
          {loading ? "Submitting..." : "Get Started"}
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
