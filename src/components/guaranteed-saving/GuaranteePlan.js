import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const STEPS = [
  {
    num: "01",
    title: "We size your roof",
    body: "Bill, PIN code, and a site survey decide system size and expected units for your Indian DISCOM tariff.",
  },
  {
    num: "02",
    title: "Generation is written down",
    body: "Your HarGharZero agreement states the units we stand behind — not a marketing range on a flyer.",
  },
  {
    num: "03",
    title: "You track it live",
    body: "The app shows real-time generation so you can see every kWh your rooftop sends to the grid and home.",
  },
  {
    num: "04",
    title: "We make it right",
    body: "If committed generation is missed, you get ₹10,000 money back. Faults are repaired or replaced at ₹0 cost under the plan.",
  },
];

const PILLARS = [
  {
    title: "Generation guarantee or ₹10,000 back",
    body: "We commit to annual units. Miss the mark after agreed adjustments, and ₹10,000 is credited — India’s practical answer to “solar never paid back.”",
  },
  {
    title: "₹0 repair and replacement",
    body: "Inverters, structures, and workmanship issues covered by the plan are fixed without a surprise invoice during the service term.",
  },
  {
    title: "Proactive service visits",
    body: "We don’t wait for a complaint. Scheduled checks keep dust, loose MC4s, and isolator issues from eating your savings.",
  },
  {
    title: "App to track generation",
    body: "See daily, monthly, and lifetime kWh. Compare against the guarantee so savings stay visible, not buried in a DISCOM PDF.",
  },
  {
    title: "Net metering on your bill",
    body: "Daytime export credits reduce what you pay your DISCOM. The guarantee is on generation; the bill drop follows those units.",
  },
  {
    title: "PM Surya Ghar ready",
    body: "Subsidy up to ₹78,000 and DCR modules sit on top of the guarantee. You still own the plant on your roof.",
  },
];

const COVERED = [
  "Committed annual generation (kWh) in your contract",
  "₹10,000 payout if that generation is not met",
  "Repair and replacement of covered parts at ₹0",
  "Proactive maintenance visits as per plan",
  "Monitoring app and remote health checks",
  "Support on DISCOM net-metering complaints tied to the plant",
];

export default function GuaranteePlan() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            How the savings guarantee works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-muted">
            Solar in India is sold on “25-year savings.” We put a number on year-one generation and
            back it with money, service, and a live app — so the promise is measurable.
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

      <section className="bg-gradient-to-b from-sky-soft via-[#f3f9fd] to-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            What HarGharZero stands behind
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-site items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              What’s covered for your home
            </h2>
            <ul className="mt-6 space-y-3">
              {COVERED.map((item) => (
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
            <CtaButton className="mt-8">See guarantee for my roof</CtaButton>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
              alt="Engineer checking rooftop solar generation for a guaranteed savings plan"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
