"use client";

import StatCard from "./StatCard";
import { useEffect, useState } from "react";

const SOURCES = [
  { id: "home", label: "Home", endpoint: "/api/query" },
  { id: "commercial", label: "Commercial", endpoint: "/api/commercial" },
  { id: "housing-society", label: "Housing Society", endpoint: "/api/housing-society" },
];

const countsCache = new Map();

function fetchCounts(source, endpoint) {
  const existing = countsCache.get(source);
  if (existing) return existing;

  const request = fetch(endpoint).then((response) => response.json());
  countsCache.set(source, request);
  request.catch(() => {
    if (countsCache.get(source) === request) countsCache.delete(source);
  });
  return request;
}

function percentOf(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

export default function DashboardStats() {
  const [source, setSource] = useState("home");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });

  useEffect(() => {
    const selected = SOURCES.find((item) => item.id === source) ?? SOURCES[0];
    let cancelled = false;

    fetchCounts(source, selected.endpoint)
      .then((data) => {
        if (cancelled) return;
        setStats({
          total: data.counts?.total ?? 0,
          pending: data.counts?.pending ?? 0,
          accepted: data.counts?.accepted ?? 0,
          rejected: data.counts?.rejected ?? 0,
        });
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        if (cancelled) return;
        setStats({
          total: 0,
          pending: 0,
          accepted: 0,
          rejected: 0,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [source]);

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">Dashboard</h1>
        <label className="block sm:ml-auto">
          <span className="sr-only">Lead type</span>
          <select
            value={source}
            onChange={(event) => setSource(event.target.value)}
            className="h-11 w-full min-w-[200px] rounded-xl border border-line bg-white px-4 text-sm font-semibold text-navy outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 sm:w-auto"
          >
            {SOURCES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          href={`/admin/total?source=${source}`}
          label="Total"
          value={stats.total}
          hint="All incoming requests"
          percent={percentOf(stats.total, stats.total)}
          accent={{ strong: "#16315c", soft: "#e8eef5" }}
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
              <path d="M6.5 10h7M10 6.5v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          }
        />
        <StatCard
          href={`/admin/pending?source=${source}`}
          label="Pending"
          value={stats.pending}
          hint="Waiting for review"
          percent={percentOf(stats.pending, stats.total)}
          accent={{ strong: "#d97706", soft: "#fff4d6" }}
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
              <path d="M10 6.5V10l2.5 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          }
        />
        <StatCard
          href={`/admin/accepted?source=${source}`}
          label="Completed"
          value={stats.accepted}
          hint={`${stats.accepted} accepted · ${stats.rejected} rejected`}
          percent={percentOf(stats.accepted, stats.total)}
          accent={{ strong: "#16a34a", soft: "#e4f7ea" }}
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
              <path d="M7 10.2l2 2 4.2-4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          }
        />
      </section>
    </>
  );
}
