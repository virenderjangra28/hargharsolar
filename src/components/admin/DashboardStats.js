"use client";

import StatCard from "./StatCard";
import { useAdminRequests } from "./AdminRequestContext";
import { useEffect, useRef, useState } from "react";

function percentOf(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

export default function DashboardStats() {
  // const { stats } = useAdminRequests();
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });
  const initilize = useRef(false);

  const dashboardData = async () => {
    try {
      const response = await fetch("/api/query");
      const data = await response.json();
      setStats({
        total: data.counts.total,
        pending: data.counts.pending,
        accepted: data.counts.accepted,
        rejected: data.counts.rejected,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setStats({
        total: 0,
        pending: 0,
        accepted: 0,  
        rejected: 0,
      });
    }
  }

  useEffect(() => {
    if(!initilize.current) {
      initilize.current = true;
      dashboardData();
    }
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <StatCard
        href="/admin/total"
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
        href="/admin/pending"
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
        href="/admin/accepted"
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
  );
}
