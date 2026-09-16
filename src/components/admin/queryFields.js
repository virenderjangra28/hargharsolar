export const ACTIONS = [
  { id: "pending", label: "Pending", className: "border-amber-300 bg-amber-50 text-amber-800" },
  { id: "rejected", label: "Reject", className: "border-red-300 bg-red-50 text-red-700" },
  { id: "accepted", label: "Accepted", className: "border-green-300 bg-green-50 text-green-700" },
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
