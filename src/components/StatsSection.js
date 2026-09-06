const STATS = [
  {
    value: "10,000+",
    label: "Homes Solarised",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11l8-7 8 7v9H4v-9z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    value: "200+ MW",
    label: "Power Installed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 3L6 13h6l-1 8 7-10h-6l1-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "₹300+ Cr",
    label: "Subsidy Delivered",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v10M9.5 9.5c.6-1 2.6-1.4 3.6-.4s.3 2.2-1.6 2.7c-1.8.5-2.3 1.8-1.4 2.7.9.9 3 .6 3.7-.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "#1 Home Solar",
    label: "On National Portal",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4l2.2 4.6L19 9.2l-3.5 3.4.8 4.9L12 15.8 7.7 17.5l.8-4.9L5 9.2l4.8-.6L12 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-site">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
          Powering Homes Across India
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-12 md:grid-cols-4 md:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center text-navy">
                {stat.icon}
              </div>
              <p className="text-2xl font-extrabold text-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
