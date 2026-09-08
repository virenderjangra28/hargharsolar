"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import QueryDetail from "./QueryDetail";
import { ACTIONS, actionClass, filterRequests, formatDate, StatusBadge } from "./queryFields";

function rowId(row) {
  return String(row?._id ?? row?.id ?? "");
}

const PAGE_SIZES = [5, 10, 20, 40, 60, 100];

function pageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages = new Set([1, total, current, current - 1, current + 1]);
  return [...pages]
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b)
    .reduce((list, page) => {
      const prev = list[list.length - 1];
      if (typeof prev === "number" && page - prev > 1) {
        list.push("…");
      }
      list.push(page);
      return list;
    }, []);
}

export default function QueryTable({ filterStatus = "", editable = true }) {
  const initialize = useRef(false);
  const [requests, setRequests] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);

  const filterData = async () => {
    try {
      const response = await fetch("/api/filter-query", {
        method: "POST",
        body: JSON.stringify({ status: filterStatus }),
      });
      const data = await response.json();
      setRequests(data.data);
    } catch (error) {
      console.error("Error filtering data:", error);
      return [];
    }
  }

  useEffect(() => {
    setPage(1);
    if(!initialize.current) {
      initialize.current = true;
      filterData();
    }
  }, [filterStatus]);

  const filtered = useMemo(
    () => filterRequests(requests, filterStatus),
    [requests, filterStatus],
  );
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const rows = useMemo(
    () => filtered.slice(start, start + pageSize),
    [filtered, start, pageSize],
  );
  const selected = filtered.find((row) => rowId(row) === String(selectedId)) ?? null;
  const from = total === 0 ? 0 : start + 1;
  const to = Math.min(start + pageSize, total);

  function changePageSize(value) {
    setPageSize(value);
    setPage(1);
  }

  async function setStatus(id, status) {
    const nextId = String(id);
    setRequests((prev) =>
      prev.map((item) => (rowId(item) === nextId ? { ...item, status } : item)),
    );
    try {
      await fetch("/api/query", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: nextId, status }),
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-left text-sm">
          <thead className="bg-[#f7fafc] text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Ownership</th>
              <th className="px-4 py-3">Monthly bill</th>
              <th className="px-4 py-3">PIN code</th>
              <th className="px-4 py-3">Selected date</th>
              <th className="px-4 py-3">Time slot</th>
              <th className="px-4 py-3">{editable ? "Action" : "Status"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-line align-top">
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setSelectedId(rowId(row))}
                    className="font-semibold text-navy underline-offset-2 hover:underline"
                  >
                    {row.name}
                  </button>
                </td>
                <td className="max-w-[220px] px-4 py-3 text-ink/80">{row.address}</td>
                <td className="px-4 py-3">{row.propertyType}</td>
                <td className="whitespace-nowrap px-4 py-3">{row.monthlyBill}</td>
                <td className="px-4 py-3">{row.pinCode}</td>
                <td className="whitespace-nowrap px-4 py-3">{formatDate(row.selectedDate)}</td>
                <td className="whitespace-nowrap px-4 py-3">{row.selectedTime}</td>
                <td className="px-4 py-3">
                  {editable ? (
                    <select
                      value={row.status}
                      onChange={(event) => setStatus(rowId(row), event.target.value)}
                      aria-label={`Update status for ${row.name}`}
                      className={`min-w-[130px] rounded-lg border px-2.5 py-1.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-sky/30 ${actionClass(
                        row.status,
                      )}`}
                    >
                      {ACTIONS.map((action) => (
                        <option key={action.id} value={action.id}>
                          {action.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <StatusBadge status={row.status} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <label className="flex items-center gap-2">
            <span className="font-medium">Display</span>
            <select
              value={pageSize}
              onChange={(event) => changePageSize(Number(event.target.value))}
              className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-sm font-semibold text-navy outline-none focus:ring-2 focus:ring-sky/30"
              aria-label="Rows per page"
            >
              {PAGE_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <span>
            Showing {from}-{to} of {total}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage(currentPage - 1)}
            className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>
          {pageNumbers(currentPage, totalPages).map((item, index) =>
            item === "…" ? (
              <span key={`ellipsis-${index}`} className="px-1 text-sm text-muted">
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                onClick={() => setPage(item)}
                className={`min-w-8 rounded-lg px-2.5 py-1.5 text-sm font-semibold ${
                  item === currentPage
                    ? "bg-navy text-white"
                    : "border border-line text-navy hover:bg-[#f4f7fb]"
                }`}
              >
                {item}
              </button>
            ),
          )}
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage(currentPage + 1)}
            className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {selected ? (
        <QueryDetail
          request={selected}
          setStatus={setStatus}
          editable={editable}
          onClose={() => setSelectedId(null)}
        />
      ) : null}
    </section>
  );
}
