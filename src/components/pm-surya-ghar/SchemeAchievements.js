import CtaButton from "./CtaButton";

const STATS = [
  { value: "73.7 lakh", label: "PM Surya Ghar Achievements", icon: TrophyIcon },
  { value: "₹26k Cr", label: "Subsidy Released", icon: RupeeBadgeIcon },
  { value: "13.35 GW", label: "Installation Capacity", icon: BoltIcon },
  { value: "37.3 lakh", label: "Installations Completed", icon: PanelIcon },
  { value: "45.1 lakh", label: "Households Covered", icon: HouseIcon },
];

const SUBSIDY_ROWS = [
  ["1 kW", "₹30,000"],
  ["2 kW", "₹60,000"],
  ["3 kW", "₹78,000"],
  ["4 kW", "₹78,000"],
  ["5 kW", "₹78,000"],
  ["10 kW", "₹78,000"],
];

const ELIGIBILITY = [
  "You should be an Indian resident.",
  "The property should be residential (commercial and industrial properties aren't eligible).",
  "You should have the property ownership and roof rights.",
  "You should have an active DISCOM electricity connection.",
  "You must have at least 80 sq. ft. of shadow-free rooftop space for a 1 kW solar system.",
];

const DOCUMENTS = [
  { label: "Aadhaar Card", icon: IdIcon },
  { label: "Latest electricity bill", icon: BillIcon },
  { label: "Bank account detail", icon: BankIcon },
  { label: "Roof ownership / roof rights proof", icon: RoofIcon },
  { label: "Passport-size photo", icon: PhotoIcon },
];

function TrophyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M8 5h8v4a4 4 0 01-8 0V5z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7H5.5A2.5 2.5 0 008 9.5M16 7h2.5A2.5 2.5 0 0116 9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 13v3M9 19h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function RupeeBadgeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8h7M9 11.2h7M9 8c2.4 0 4 1.5 4 3.4S11.8 15 9 15h3.2L16 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M13 3L6 13h6l-1 8 7-10h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <rect x="4" y="5" width="16" height="12" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 11h16M12 5v12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M4 11l8-7 8 7v9H4v-9z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 11h5M13.5 14h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BillIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M7 4h10v16H7V4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 8h5M9.5 11.5h5M9.5 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M4 10h16M5 10v8M9 10v8M15 10v8M19 10v8M4 18h16M12 5l8 5H4l8-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function RoofIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <path d="M3 12l9-7 9 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11.5V19h12v-7.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sky">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="11" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 17l4.2-3.4 2.3 1.8L16 12l4 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PiggyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-navy">
      <path d="M5 13a7 7 0 0114 0v3H5v-3z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 10h3v4h-2M8 10.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 16v2M15 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function SchemeAchievements() {
  return (
    <>
      <section className="bg-[#f7fafc] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            PM Surya Ghar Scheme Achievements
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {STATS.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl bg-gradient-to-b from-white to-sky-soft/70 p-5 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <item.icon />
                </div>
                <p className="text-2xl font-extrabold text-navy">{item.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-muted sm:text-sm">{item.label}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs italic text-muted">
            *These values do not represent actual savings; that will depend on your application.
          </p>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-navy px-5 py-5 text-white sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-base font-extrabold sm:text-lg">
                The government has already released ₹26,000 Crore in subsidies
              </p>
              <p className="mt-1 text-sm text-white/80">
                Join 30,000+ families who chose HarGharSolar to make it happen.
              </p>
            </div>
            <CtaButton variant="white" className="shrink-0 rounded-full">
              Get Free Consultation
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[#0b131f] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-site items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Government Subsidy Structure
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/75">
              The subsidy depends on the size of your rooftop solar system, with a maximum benefit of
              ₹78,000 for systems of 3 kW or above.
            </p>
            <div className="mt-8 flex max-w-md items-start gap-4 rounded-2xl bg-sky-soft p-4 text-navy">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                <PiggyIcon />
              </span>
              <div>
                <p className="font-extrabold">Calculate your Subsidy Savings</p>
                <p className="mt-1 text-sm text-muted">See your savings before you install.</p>
                <CtaButton href="/solar-calculator" variant="outline" className="mt-3 min-h-10 px-4 py-2 text-xs">
                  Calculate Now →
                </CtaButton>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15">
            <table className="w-full text-left text-sm text-white">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/70">
                <tr>
                  <th className="px-5 py-3.5 font-semibold">Solar System Size</th>
                  <th className="px-5 py-3.5 font-semibold">Government Subsidy (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {SUBSIDY_ROWS.map(([size, amount]) => (
                  <tr key={size} className="border-t border-white/10">
                    <td className="px-5 py-3.5">{size}</td>
                    <td className="px-5 py-3.5 font-semibold">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-soft via-[#f3f9fd] to-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Eligibility &amp; Documents
          </h2>
          <div className="mt-10 grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-navy">Eligibility &amp; documents</h3>
              <ul className="mt-5 space-y-3.5">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=80"
                alt="Technician installing rooftop solar panels"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {DOCUMENTS.map((item) => (
              <article
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-line bg-white px-3 py-5 text-center shadow-sm"
              >
                <item.icon />
                <p className="mt-3 text-xs font-semibold leading-5 text-navy sm:text-sm">{item.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy/15 bg-white px-5 py-5 sm:flex-row sm:items-center sm:px-8">
            <p className="text-sm leading-6 text-ink/80 sm:text-[15px]">
              Not sure if you qualify?{" "}
              <span className="font-extrabold text-navy">HarGharSolar</span> can help you check your
              eligibility in minutes.
            </p>
            <CtaButton className="shrink-0">Request a Call Back</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
