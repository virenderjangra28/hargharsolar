"use client";

import { useEffect } from "react";
import { ACTIONS, actionClass, actionLabel, formatDate, StatusBadge } from "./queryFields";

const DETAIL_FIELDS = [
  { key: "name", label: "Name" },
  { key: "phone", label: "WhatsApp" },
  { key: "address", label: "Address" },
  { key: "landmark", label: "Landmark" },
  { key: "ownership", label: "Ownership" },
  { key: "monthlyBill", label: "Monthly bill" },
  { key: "pincode", label: "PIN code" },
  { key: "date", label: "Selected date", format: formatDate },
  { key: "timeSlot", label: "Time slot" },
];

export default function QueryDetail({ request, onClose, setStatus, editable = true }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close query detail"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="query-detail-title"
        className="relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl"
      >
        <header className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sky">Query detail</p>
            <h2 id="query-detail-title" className="mt-1 text-lg font-extrabold text-navy">
              {request.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:bg-[#f4f7fb] hover:text-navy"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-4">
          <dl className="divide-y divide-line rounded-xl border border-line">
            {DETAIL_FIELDS.map((field) => {
              const raw = request[field.key];
              const value = field.format ? field.format(raw) : raw;
              return (
                <div key={field.key} className="grid grid-cols-[140px_1fr] gap-3 px-4 py-3 text-sm">
                  <dt className="font-semibold text-muted">{field.label}</dt>
                  <dd className="font-medium text-ink">{value || "—"}</dd>
                </div>
              );
            })}
            <div className="grid grid-cols-[140px_1fr] gap-3 px-4 py-3 text-sm">
              <dt className={`${editable ? "pt-1.5" : "pt-1"} font-semibold text-muted`}>
                {editable ? "Action" : "Status"}
              </dt>
              <dd>
                {editable ? (
                  <>
                    <select
                      value={request.status}
                      onChange={(event) => setStatus(request.id, event.target.value)}
                      aria-label={`Update status for ${request.name}`}
                      className={`min-w-[130px] rounded-lg border px-2.5 py-1.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-sky/30 ${actionClass(
                        request.status,
                      )}`}
                    >
                      {ACTIONS.map((action) => (
                        <option key={action.id} value={action.id}>
                          {action.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1.5 text-xs text-muted">Current: {actionLabel(request.status)}</p>
                  </>
                ) : (
                  <StatusBadge status={request.status} />
                )}
              </dd>
            </div>
          </dl>
        </div>
      </aside>
    </div>
  );
}
