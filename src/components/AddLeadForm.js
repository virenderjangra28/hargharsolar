"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
  email: "",
  address: "",
  bill: "₹3000 - ₹4500",
  pincode: "",
  sanctionLoad: "",
  nationalPortalNo: "",
  geoTaggingPhoto: null,
  electricityBill: null,
  bankDocument: null,
  consent: true,
  newConnection : false,
  newName : 'no',
  newSanctionLoad : 'no'


};

const inputClass =
  "h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white";

const fieldClass = "min-w-0 flex-[1_1_calc(50%-0.5rem)]";

function FileField({ label, name, accept, file, error, onChange, resetKey }) {
  return (
    <label className={fieldClass}>
      <span className="mb-2.5 block text-sm font-semibold text-ink">{label}</span>
      <input
        key={resetKey}
        type="file"
        name={name}
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="block w-full cursor-pointer rounded-lg border border-line bg-[#f7f9fc] px-3 py-2.5 text-sm text-ink file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white"
      />
      {file ? <p className="mt-1 text-xs text-muted">{file.name}</p> : null}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </label>
  );
}

export default function AddLeadForm({
  variant = "default",
  title,
  subtitle,
  showSlotsBadge = false,
  submitLabel,
}) {
  const heading = title ?? "Add Leads";
  const lead = subtitle === undefined ? "And save up to ₹1,00,000 with subsidy" : subtitle;
  const isSidebar = variant === "sidebar";
  const isCity = variant === "city";
  const router = useRouter();
  const [form, setForm] = useState(() => ({ ...EMPTY }));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileExist, setMobileExist] = useState(false);
  const [fileResetKey, setFileResetKey] = useState(0);

  function update(field, value) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
  
      if (field === "newConnection" && value === true) {
        updated.newName = "- Select -";
        updated.newSanctionLoad = "- Select -";
      } 
      else if (field === "newName" && value === "yes") {
        updated.newSanctionLoad = "- Select -";
      }
  
      return updated;
    });
  
    setErrors((prev) => ({ ...prev, [field]: "" }));
  
    if (field === "phone" && value.length === 10) {
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
      if (data.success) {
        setMobileExist(false);
        return true;
      } else if (data.success === false) {
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
    const name = form.name ?? "";
    const phone = form.phone ?? "";
    const email = form.email ?? "";
    const address = form.address ?? "";
    const pincode = form.pincode ?? "";
    const sanctionLoad = form.sanctionLoad ?? "";

    if (!name.trim() || name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      next.phone = "Enter a valid 10-digit WhatsApp number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email ID.";
    }
    if (!address.trim() || address.trim().length < 8) {
      next.address = "Enter a complete address.";
    }
    if (!isCity && !form.bill) {
      next.bill = "Select your monthly electricity bill.";
    }
    if (!/^\d{6}$/.test(pincode.trim())) {
      next.pincode = "Enter a valid 6-digit PIN code.";
    }
    if (!sanctionLoad.trim() || Number(sanctionLoad) <= 0) {
      next.sanctionLoad = "Enter a valid sanction load in kW.";
    }
    // if (!nationalPortalNo.trim()) {
    //   next.nationalPortalNo = "Enter the National Portal number.";
    // }
    if (!form.geoTaggingPhoto) {
      next.geoTaggingPhoto = "Upload a geo tagging photo.";
    }
    if (!form.electricityBill) {
      next.electricityBill = "Upload the electricity bill.";
    }
    if (!form.bankDocument) {
      next.bankDocument = "Upload the bank cheque book or passbook.";
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
    if (mobileExist) {
      setErrors((prev) => ({ ...prev, phone: "Mobile number already exists. Please try with another number." }));
      setLoading(false);
      return;
    }

    if (!validate()) {
      setLoading(false);
      return;
    }

    submitVisit(form);
  }
  // Save Leads API call
  async function submitVisit(form) {
    setLoading(true);
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name || "",
          mobile: form.phone || "",
          monthlyBill: form.bill,
          pinCode: form.pincode,
          propertyType: form.propertyType || "residential",
          address: (form.address ?? "").trim(),
          landmark: (form.landmark ?? "").trim(),
          selectedDate: form.date || new Date().toISOString().slice(0, 10),
          selectedTime: form.slot || new Date().toISOString().slice(11, 16),
          email: form.email,
          sanctionLoad: form.sanctionLoad,
          nationalPortalNo: form.nationalPortalNo,
          geoTaggingPhoto: form.geoTaggingPhoto?.name || "",
          electricityBill: form.electricityBill?.name || "",
          bankDocument: form.bankDocument?.name || "",
          status: form.newConnection === true
                    ? 'New Connection'
                    : form.newName === 'yes'
                      ? 'Name Change'
                      : form.newSanctionLoad === 'yes'
                        ? 'Load Change'
                        : 'Pending'
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error || "Could not add this lead. Please try again.");
        return;
      }
      toast.success("Your request has been submitted successfully.");
      setForm({ ...EMPTY });
      setErrors({});
      setMobileExist(false);
      setFileResetKey((key) => key + 1);
    } catch {
      toast.error("Could not add this lead. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-2xl font-extrabold text-navy">Lead added successfully</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks {form.name.split(" ")[0]}. Your lead has been added successfully.
        </p>
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
        className={`text-center text-[22px] font-extrabold leading-tight sm:text-[26px] ${isCity ? "text-white" : "text-navy"
          }`}
      >
        {heading}
      </h2>
      {isCity ? <div className="mx-auto mt-3 h-0.5 w-16 bg-sky" /> : null}
      {lead ? (
        <p className={`mt-1 text-center text-sm ${isCity ? "text-white/70" : "text-muted"}`}>{lead}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4">
        <label className={fieldClass}>
          <span className="sr-only">Full Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Full Name"
            value={form.name ?? ""}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </label>

        <label className={fieldClass}>
          <span className="sr-only">Phone Number</span>
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            placeholder="Phone Number"
            value={form.phone ?? ""}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            className={inputClass}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </label>

        <label className={fieldClass}>
          <span className="sr-only">Email ID</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email ID"
            value={form.email ?? ""}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </label>

        <label className={fieldClass}>
          <span className="sr-only">Address</span>
          <textarea
            name="address"
            autoComplete="street-address"
            placeholder="Address"
            rows={1}
            value={form.address ?? ""}
            onChange={(e) => update("address", e.target.value)}
            className={`${inputClass} min-h-12 resize-y py-3`}
          />
          {errors.address ? <p className="mt-1 text-xs text-red-600">{errors.address}</p> : null}
        </label>

        {isCity ? null : (
          <fieldset className={fieldClass}>
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
                    className={`min-h-10 rounded-md border px-3 py-2 text-[13px] font-medium transition ${selected
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

        <label className={fieldClass}>
          <span className="sr-only">PIN Code</span>
          <input
            type="text"
            name="pincode"
            inputMode="numeric"
            maxLength={6}
            placeholder="PIN Code"
            value={form.pincode ?? ""}
            onChange={(e) => update("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={inputClass}
          />
          {errors.pincode ? (
            <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
          ) : null}
        </label>

        <label className={fieldClass}>
          <span className="sr-only">Current Sanction load</span>
          <input
            type="text"
            name="sanctionLoad"
            inputMode="decimal"
            placeholder="Current Sanction load (kW)"
            value={form.sanctionLoad ?? ""}
            onChange={(e) =>
              update("sanctionLoad", e.target.value.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1"))
            }
            className={inputClass}
          />
          {errors.sanctionLoad ? (
            <p className="mt-1 text-xs text-red-600">{errors.sanctionLoad}</p>
          ) : null}
        </label>

        <label className={fieldClass}>
          <span className="sr-only">National Portal No</span>
          <input
            type="text"
            name="nationalPortalNo"
            placeholder="National Portal No"
            value={form.nationalPortalNo ?? ""}
            onChange={(e) => update("nationalPortalNo", e.target.value)}
            className={inputClass}
          />
        </label>

        {/* If New Connection*/}
        <div className="flex flex-col gap-4 mb-4 mt-4">
  <label className="flex items-center gap-2 cursor-pointer">
    <span className="text-sm font-semibold text-ink">
      New Connection
    </span>

    <input
      type="checkbox"
      name="newConnection"
      checked={form.newConnection === true}
      onChange={(e) => update("newConnection", e.target.checked)}
      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />

    {/* <span className="text-sm">
      {form.newConnection ? "Yes" : "No"}
    </span> */}
  </label>
</div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-4">

          {/* Name Change */}
          <fieldset
            className={`${fieldClass} flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0`}
          >
            <legend className="sr-only">Need to Change Name?</legend>

            <label
              htmlFor="newName"
              className="text-sm font-semibold text-ink whitespace-nowrap"
            >
              Need to Change Name?
            </label>

            <select 
              disabled = {form.newConnection == true}
              name="newName"
              id="newName"
              className="w-full sm:flex-1 min-w-0 rounded-lg border-2 border-blue-500 bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-800 shadow-sm outline-none transition-all hover:bg-blue-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              onChange={(e) => update("newName", e.target.value)}
            >
              <option value="">- Select -</option>
              <option value="yes">Yes, Need to Change Name</option>
              <option value="no">No, Name is correct</option>
            </select>

            {errors.newName && (
              <p className="text-xs text-red-600 w-full">
                {errors.newName}
              </p>
            )}
          </fieldset>

          {/* Sanction Load Change */}
          <fieldset
            className={`${fieldClass} flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0`}
          >
            <legend className="sr-only">Need to Change Load?</legend>

            <label
              htmlFor="newSanctionLoad"
              className="text-sm font-semibold text-ink whitespace-nowrap"
            >
              Need to Change Load?
            </label>

            <select
             disabled = {form.newConnection == true || form.newName === 'yes' }
              name="newSanctionLoad"
              id="newSanctionLoad"
              className="w-full sm:flex-1 min-w-0 rounded-lg border-2 border-blue-500 bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-800 shadow-sm outline-none transition-all hover:bg-blue-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
              onChange={(e) =>  update("newSanctionLoad", e.target.value)}
            >
              <option value="">- Select -</option>
              <option value="yes">Yes, Need to Change Load</option>
              <option value="no">No, Load is correct</option>
            </select>

            {errors.newSanctionLoad && (
              <p className="text-xs text-red-600 w-full">
                {errors.newSanctionLoad}
              </p>
            )}
          </fieldset>

        </div>


        <FileField
          label="GEO tagging photo"
          name="geoTaggingPhoto"
          accept="image/*"
          resetKey={fileResetKey}
          file={form.geoTaggingPhoto}
          error={errors.geoTaggingPhoto}
          onChange={(file) => update("geoTaggingPhoto", file)}
        />

        <FileField
          label="Electricity bill"
          name="electricityBill"
          accept="image/*,.pdf,application/pdf"
          resetKey={fileResetKey}
          file={form.electricityBill}
          error={errors.electricityBill}
          onChange={(file) => update("electricityBill", file)}
        />

        <FileField
          label="Bank cheque book / passbook"
          name="bankDocument"
          accept="image/*,.pdf,application/pdf"
          resetKey={fileResetKey}
          file={form.bankDocument}
          error={errors.bankDocument}
          onChange={(file) => update("bankDocument", file)}
        />
      </div>

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
          className={`w-full rounded-lg py-3.5 text-sm font-semibold text-white transition ${isCity ? "bg-sky uppercase tracking-wide hover:bg-navy" : "bg-navy hover:bg-navy-mid"
            }`}
        >
          {loading ? "Loading..." : submitLabel ?? "Add Leads"}
        </button>
      </div>
    </form>
  );
}
