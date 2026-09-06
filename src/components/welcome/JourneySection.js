const STEPS = [
  {
    title: "We Call & Visit Your Home",
    copy: "We start with a quick call, then our expert visits your home to check the rooftop and understand your energy needs.",
  },
  {
    title: "Get Your Design & Approve",
    copy: "You receive a custom 3D solar design. Like it? Hit move ahead — free help is available if needed.",
  },
  {
    title: "Quick Installation & Subsidy",
    copy: "We install your solar system in just 1 day and handle all the government paperwork for subsidy.",
  },
  {
    title: "Solar On, Savings Begin!",
    copy: "Your system is switched on, savings start immediately. Plus, we take care of regular maintenance.",
  },
];

export default function JourneySection() {
  return (
    <section className="flex flex-wrap bg-white">
      <div className="min-w-[320px] flex-1 basis-[420px] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
        <div className="max-w-[520px]">
          <h2 className="text-[26px] font-extrabold leading-tight text-navy sm:text-[34px]">
            What to Expect in Your Solar Journey?
          </h2>
          <ol className="mt-10 space-y-8">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy text-sm font-semibold text-navy">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-ink sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="min-w-[320px] flex-1 basis-[420px]">
        <img
          src="/images/welcome-expert-visit.png"
          alt="Solar expert explaining a rooftop plan to homeowners"
          className="h-full min-h-[280px] w-full object-cover object-center sm:min-h-[380px]"
        />
      </div>
    </section>
  );
}
