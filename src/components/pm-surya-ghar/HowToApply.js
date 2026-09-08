import CtaButton from "./CtaButton";

const STEPS = [
  {
    num: "01",
    title: "Register on the National Portal",
    body: "Register on the PM Surya Ghar portal using your consumer number and Aadhaar OTP.",
  },
  {
    num: "02",
    title: "Apply for Rooftop Solar",
    body: "Submit your rooftop details and preferred system size to complete your application.",
  },
  {
    num: "03",
    title: "Choose an MNRE-Registered Vendor",
    body: "Select an MNRE-approved installer like HarGharSolar for a site survey.",
  },
];

const WHY_STATS = [
  { value: "30,000+", label: "Homes Solarized" },
  { value: "200+ MWp", label: "Solar Power Installed" },
  { value: "300+ Cr", label: "Subsidy Delivered" },
  { value: "#1 Home Solar", label: "On National Portal" },
];

function TrackVisual() {
  return (
    <div className="relative mx-auto flex h-56 w-full max-w-sm items-center justify-center">
      <div className="absolute h-44 w-44 rounded-full border border-sky/30" />
      <div className="absolute h-32 w-32 rounded-full border border-sky/40" />
      <div className="relative flex h-28 w-40 flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5.5 19c.7-3 3.2-4.6 6.5-4.6S17.8 16 18.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <span className="mt-2 text-xs font-semibold text-navy">Application tracked</span>
      </div>
      <span className="absolute right-8 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-green text-white">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

function ChecklistVisual() {
  return (
    <div className="relative mx-auto flex h-56 w-full max-w-sm items-center justify-center">
      <div className="absolute left-8 h-28 w-36 -rotate-12 rounded-xl bg-sky/20" />
      <div className="relative rounded-2xl bg-white p-4 shadow-lg">
        <p className="mb-3 text-xs font-extrabold text-navy">Site checklist</p>
        {["Roof survey", "Bill check", "Subsidy estimate"].map((item) => (
          <p key={item} className="mb-1.5 flex items-center gap-2 text-xs font-medium text-ink/80">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky text-white">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            {item}
          </p>
        ))}
      </div>
      <span className="absolute right-10 top-8 text-3xl" aria-hidden="true">
        💡
      </span>
    </div>
  );
}

export default function HowToApply() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            How to Apply for PM Surya Ghar Subsidy?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.num} className="rounded-2xl border border-line p-6">
                <p className="text-3xl font-extrabold text-sky">{step.num}</p>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-10 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-site items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Track your application
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
              After logging in to pmsuryaghar.gov.in, you can track your application status at every
              stage, from registration and approval to installation and subsidy credit.
            </p>
          </div>
          <TrackVisual />
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-site items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Things to Keep in Mind While Going Solar
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
              Make informed decisions with key factors every homeowner should know before installing
              rooftop solar.
            </p>
            <CtaButton href="#scheme-faq" variant="outline" className="mt-6">
              Know More
            </CtaButton>
          </div>
          <ChecklistVisual />
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Why Go Solar With HarGharSolar?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-muted">
            Thousands of homeowners have already made the switch with HarGharSolar.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {WHY_STATS.map((item) => (
              <article key={item.label} className="rounded-2xl border border-line bg-[#f7fafc] px-4 py-6 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-navy sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
