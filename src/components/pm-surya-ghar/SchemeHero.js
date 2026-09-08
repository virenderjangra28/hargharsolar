"use client";

import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";

const DEADLINE = new Date("2027-03-31T23:59:59+05:30");

const TRUST = [
  { label: "10,000+ Homes Solarized", icon: HomeIcon },
  { label: "10+ Years of Experience", icon: ClockIcon },
  { label: "130+ Cities in India", icon: PinIcon },
];

function remaining() {
  const diff = Math.max(0, DEADLINE.getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  return { days, hours, mins };
}

function Ring({ value, max, unit }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const progress = max === 0 ? 0 : Math.min(value / max, 1);

  return (
    <div className="flex flex-col items-center">
      <svg width="92" height="92" viewBox="0 0 92 92" className="overflow-visible">
        <circle cx="46" cy="46" r={radius} fill="none" stroke="#e8f4fc" strokeWidth="7" />
        <circle
          cx="46"
          cy="46"
          r={radius}
          fill="none"
          stroke="#3d8bdb"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          transform="rotate(-90 46 46)"
        />
        <text x="46" y="44" textAnchor="middle" className="fill-navy" fontSize="18" fontWeight="800">
          {value}
        </text>
        <text x="46" y="60" textAnchor="middle" className="fill-navy" fontSize="10" fontWeight="600">
          {unit}
        </text>
      </svg>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11l8-7 8 7v9H4v-9z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function SchemeHero() {
  const [time, setTime] = useState(remaining);

  useEffect(() => {
    const tick = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,18,38,0.72) 0%, rgba(8,18,38,0.48) 55%, rgba(8,18,38,0.32) 100%), url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="relative mx-auto grid max-w-site items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:min-h-[560px]">
        <div className="text-white">
          <h1 className="max-w-2xl text-[28px] font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-[48px]">
            PM Surya Ghar Muft Bijli Yojana: Get Up to Rs.78,000 Subsidy
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Reduce your electricity bills by up to 100%.
          </p>
          <CtaButton variant="white" className="mt-7 rounded-full">
            Check Your Solar Subsidy Now
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </CtaButton>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            {TRUST.map((item) => (
              <li key={item.label} className="inline-flex items-center gap-2">
                <item.icon />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <aside className="mx-auto w-full max-w-md rounded-2xl border border-white/40 bg-white p-5 shadow-xl sm:p-6">
          <h2 className="text-center text-lg font-extrabold text-navy sm:text-xl">
            Hurry Up! This Scheme Ends Soon
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            Last day to avail the offer: March 31, 2027
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 sm:gap-5">
            <Ring value={time.days} max={365} unit="days" />
            <Ring value={time.hours} max={24} unit="hours" />
            <Ring value={time.mins} max={60} unit="mins" />
          </div>
        </aside>
      </div>
    </section>
  );
}
