import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const STEPS = [
  {
    num: "01",
    title: "Share your bill & PIN",
    body: "Tell us your monthly electricity bill and pincode. We size a rooftop system for your Indian home.",
  },
  {
    num: "02",
    title: "Subsidy + no-cost EMI",
    body: "We apply PM Surya Ghar subsidy (upto ₹78,000 via DBT) and structure EMI so bill savings can cover the instalment.",
  },
  {
    num: "03",
    title: "Install with ₹0 down",
    body: "Site survey, DISCOM net metering, and installation are handled by HarGharSolar. You don’t pay a down payment to start.",
  },
  {
    num: "04",
    title: "Save from month one",
    body: "Your meter runs backward in the day. You pay a smaller bill, service the EMI, and keep the difference.",
  },
];

const BENEFITS = [
  {
    title: "No money from your pocket",
    body: "HarGharZero is built so Indian households can go solar without arranging a large cash deposit.",
  },
  {
    title: "Government subsidy included",
    body: "Central financial assistance under PM Surya Ghar Muft Bijli Yojana, credited to your bank through DBT.",
  },
  {
    title: "Savings higher than EMI",
    body: "Plans are designed so monthly generation value stays above your EMI for typical residential loads.",
  },
  {
    title: "Paperwork & DISCOM handled",
    body: "Application on the national portal, net metering, and inspection coordination are done with you, not left to you.",
  },
  {
    title: "25-year panel performance",
    body: "ALMM / DCR-compliant modules with a long performance warranty, plus ₹0 repair and replacement under the plan terms.",
  },
  {
    title: "Track generation on app",
    body: "See real-time solar production so you know exactly what the system is saving each month.",
  },
];

const ELIGIBILITY = [
  "Indian resident with a residential DISCOM electricity connection",
  "Roof rights on your house, villa, or independent floor",
  "Shadow-free rooftop space (about 80 sq. ft. per kW)",
  "Eligible for PM Surya Ghar subsidy (residential, not commercial)",
  "Comfortable with EMI tenure of 5–15 years after subsidy",
];

export default function ZeroPlan() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            How zero investment works in India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-muted">
            You don’t buy the plant in one shot. Subsidy reduces the price, EMI spreads the rest,
            and solar generation is meant to pay that EMI from your existing electricity bill.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <article key={step.num} className="rounded-2xl border border-line p-5">
                <p className="text-2xl font-extrabold text-sky">{step.num}</p>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            What’s included in HarGharZero
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-site items-start gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Who can take this plan
            </h2>
            <ul className="mt-6 space-y-3">
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
            <CtaButton className="mt-8">Get a free eligibility check</CtaButton>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f7fafc] text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold text-navy">Zero investment</th>
                  <th className="px-4 py-3 font-semibold">Pay from savings</th>
                </tr>
              </thead>
              <tbody className="text-ink/80">
                {[
                  ["Money you pay today", "₹0", "Full system cost minus subsidy"],
                  ["EMI", "Yes, covered by bill savings*", "Optional"],
                  ["Subsidy help", "End-to-end on national portal", "You manage it"],
                  ["Start generating", "After survey & install", "After you arrange funds"],
                ].map(([label, zero, cash]) => (
                  <tr key={label} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold text-navy">{label}</td>
                    <td className="px-4 py-3">{zero}</td>
                    <td className="px-4 py-3 text-muted">{cash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-3 text-xs text-muted">
              *Subject to bill size, system size, tenure, and lender approval.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
