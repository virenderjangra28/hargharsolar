import LeadForm from "./LeadForm";

const HIGHLIGHTS = [
  {
    label: "No Cost EMI Options",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Monthly saving covers EMI",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 16l5-5 4 4 7-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Online subsidy assistance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "25yr+ Savings & Warranty",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden bg-[#6ea7c9]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(8,18,38,0.62) 0%, rgba(8,18,38,0.28) 48%, rgba(8,18,38,0.18) 100%), url('https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 sm:gap-10 sm:px-6 md:grid-cols-2 md:px-8 md:py-10 lg:min-h-[640px] lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="text-white">
          <h1 className="max-w-xl text-[28px] font-extrabold leading-[1.2] tracking-tight text-pretty sm:text-4xl md:text-[40px] lg:text-[56px]">
            Go Solar At Zero Investment!
          </h1>
          <p className="mt-3 max-w-lg text-[15px] leading-7 text-white/90 sm:mt-4 sm:text-base md:text-lg">
            Save up to 90% on electricity bills with government subsidy and easy EMI.
          </p>

          <ul className="mt-5 grid max-w-xl grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 rounded-full bg-white/15 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="text-white/90">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>

          {/* <p className="mt-6 flex items-center gap-2 text-sm text-white/90">
            <span className="tracking-tight text-amber-300">★★★★★</span>
            Rated 4.8 on Google. 10,000+ ratings
          </p> */}
        </div>

        <div id="consult" className="w-full md:justify-self-end md:max-w-none lg:max-w-[460px]">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
