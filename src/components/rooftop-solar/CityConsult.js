import LeadForm from "@/components/LeadForm";

const POINTS = [
  "Haryana service coverage including your city",
  "24/7 system monitoring and support",
  "Government subsidy assistance (PM Surya Ghar)",
  "Net metering setup included",
  "25-year panel performance warranty",
];

export default function CityConsult({ city }) {
  return (
    <section className="bg-[#0b131f] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-site">
        <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
          Book Your <span className="text-sky">Free Solar Consultation</span> in {city}
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-sky" />
        <div className="mt-10 grid items-center gap-8 rounded-2xl bg-[#f4f6f8] p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <h3 className="text-xl font-extrabold text-navy sm:text-2xl">
              Find the <span className="text-sky">right solar power solution</span> for you in {city}
            </h3>
            <ul className="mt-6 space-y-3">
              {POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-navy">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-navy text-[11px]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            variant="city"
            title="Book Free Solar Consultation"
            subtitle=""
            submitLabel="Book Free Solar Survey"
          />
        </div>
      </div>
    </section>
  );
}
