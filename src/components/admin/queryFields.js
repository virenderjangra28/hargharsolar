export const ACTIONS = [
  { id: "newConnection", label: "New Connection Apply", className: "border-slate-300 bg-slate-50 text-slate-400" },
  { id: "nameChange", label: "Name Change Applied", className: "border-neutral-300 bg-neutral-50 text-neutral-800" },
  { id: "loadChange", label: "Load Change Applied", className: "border-violet-300 bg-violet-50 text-violet-500" },
  { id: "registration", label: "Registration", className: "border-indigo-300 bg-indigo-50 text-indigo-500" },
  { id: "application", label: "Application Submitted", className: "border-sky-300 bg-sky-50 text-sky-800" },
  { id: "feasibility", label: "feasibility Report Submitted", className: "border-teal-300 bg-teal-50 text-teal-500" },
  { id: "Upload Agreement", label: "Upload Agreement", className: "border-lime-300 bg-lime-50 text-lime-500" },
  { id: "loan_apply", label: "Loan Apply", className: "border-yellow-300 bg-yellow-50 text-yellow-600" },
  { id: "pending_Bank", label: "Pending from Bank Side", className: "border-orange-300 bg-orange-50 text-orange-400" },
  { id: "installation", label: "installation", className: "border-red-300 bg-red-50 text-red-400" },
  { id: "Inspection", label: "Inspection", className: "border-stone-300 bg-stone-50 text-stone-800" },
  { id: "Project Commissioning", label: "Project Commissioning", className: "border-lime-300 bg-lime-50 text-lime-900" },
  { id: "netMetering", label: "Net Meter Apply", className: "border-cyan-300 bg-cyan-50 text-cyan-800" },
  { id: "Subsidy Request", label: "Subsidy Request", className: "border-emerald-300 bg-emerald-50 text-emerald-900" },
  { id: "Subsidy Disbursal", label: "Subsidy Disbursal", className: "border-amber-300 bg-amber-50 text-amber-800" },
  { id: "completed", label: "Completed", className: "border-green-300 bg-green-50 text-green-800" },
];

export function formatDate(value) {
  if (!value) return "—";
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function actionClass(status) {
  return ACTIONS.find((action) => action.id === status)?.className ?? "border-line bg-white text-ink";
}

export function actionLabel(status) {
  return ACTIONS.find((action) => action.id === status)?.label ?? status;
}

export function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${actionClass(status)}`}
    >
      {actionLabel(status)}
    </span>
  );
}

export function filterRequests(requests, filterStatus) {
  const key = String(filterStatus || "").toLowerCase();
  if (!key || key === "total" || key === "all") return requests;
  if (key === "resolved") return requests.filter((item) => item.status !== "pending");
  return requests.filter((item) => item.status === key);
}

export function requestTypeTitle(filterStatus) {
  const key = String(filterStatus || "").toLowerCase();
  if (key === "resolved") return "Resolved requests";
  if (key === "total" || key === "all") return "All requests";
  const label = actionLabel(key);
  if (label === key) return "Requests";
  return `${label} requests`;
}

export function normalizeSource(value) {
  const key = String(value || "home").toLowerCase();
  if (key === "commercial" || key === "housing-society") return key;
  return "home";
}

export function sourceLabel(value) {
  const key = normalizeSource(value);
  if (key === "commercial") return "Commercial";
  if (key === "housing-society") return "Housing Society";
  return "Home";
}

export function sourcePatchUrl(source) {
  if (source === "commercial") return "/api/commercial";
  if (source === "housing-society") return "/api/housing-society";
  return "/api/query";
}

export function tableColumns(source) {
  if (source === "commercial") {
    return [
      { key: "name", label: "Name" },
      { key: "companyName", label: "Company" },
      { key: "city", label: "City" },
      { key: "monthlyBill", label: "Monthly bill" },
      { key: "pinCode", label: "PIN code" },
      { key: "mobile", label: "WhatsApp" },
    ];
  }
  if (source === "housing-society") {
    return [
      { key: "name", label: "Name" },
      { key: "societyName", label: "Society" },
      { key: "designation", label: "Designation" },
      { key: "monthlyBill", label: "Monthly bill" },
      { key: "pinCode", label: "PIN code" },
      { key: "approvalBy", label: "AGM status" },
    ];
  }
  return [
    { key: "name", label: "Name" },
    { key: "address", label: "Address" },
    { key: "propertyType", label: "Ownership" },
    { key: "monthlyBill", label: "Monthly bill" },
    { key: "pinCode", label: "PIN code" },
    { key: "selectedDate", label: "Selected date", format: formatDate },
    { key: "selectedTime", label: "Time slot" },
  ];
}
