const FEATURES = [
  { label: "No agents", icon: ShieldIcon },
  { label: "No commissions", icon: RupeeIcon },
  { label: "No hidden deductions", icon: CheckIcon },
];

const BENEFITS = [
  "Receive up to ₹78,000 in government subsidy",
  "Save on your electricity bills",
  "Generate clean electricity for over 25 years",
  "Increase your home's value with a long-term investment",
  "Make your home and India energy independent",
];

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 7h9M8 11h9M8 7c3 0 5 2 5 4.5S11 16 8 16h4l5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 12.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BenefitIcon() {
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 12.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function AboutScheme() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            What is PM Surya Ghar Muft Bijli Yojana?
          </h2>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="text-xl font-extrabold text-navy sm:text-2xl">
                Government of India&apos;s flagship rooftop solar scheme
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                Launched in February 2024, PM Surya Ghar Muft Bijli Yojana helps households install
                rooftop solar and receive a central subsidy of up to ₹78,000. The amount is
                transferred directly to your bank account through Direct Benefit Transfer (DBT).
              </p>
              <p className="mt-3 text-[15px] leading-7 text-muted">
                The scheme is designed so families can cut electricity bills sharply, generate clean
                power for decades, and complete the process on the national portal without
                middlemen.
              </p>
              <ul className="mt-7 flex flex-wrap gap-6">
                {FEATURES.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-soft text-sky">
                      <item.icon />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80"
                alt="HarGharSolar consultant explaining rooftop solar subsidy to a family"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-site items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Why Go Solar Under PM Surya Ghar Scheme?
            </h2>
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-semibold leading-6 text-navy">
                  <BenefitIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              alt="Rooftop solar panels installed under a clear sky"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
