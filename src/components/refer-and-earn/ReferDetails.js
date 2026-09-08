import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const STEPS = [
  {
    num: "01",
    title: "Share with a friend",
    body: "Refer a homeowner who wants rooftop solar. Share your details or invite them on WhatsApp.",
  },
  {
    num: "02",
    title: "They go solar with us",
    body: "Your friend books a free site survey and installs with HarGharSolar under PM Surya Ghar Yojana.",
  },
  {
    num: "03",
    title: "You get paid in cash",
    body: "On every successful referral, you receive hard cash between ₹5,000 and ₹20,000 — credited after installation.",
  },
];

const REWARDS = [
  {
    title: "₹5,000 – ₹20,000 hard cash",
    body: "Every successful referral earns you cash. The amount depends on the system your friend installs — paid directly to you, every time you refer.",
  },
  {
    title: "Smart TVs",
    body: "Lucky winners also take home LED TVs, on top of the cash reward for each referral.",
  },
  {
    title: "Apple iPhone",
    body: "Bumper prize for top referrers this campaign: a brand-new Apple iPhone.",
  },
  {
    title: "Air conditioners",
    body: "Win split ACs and other home appliances like coolers, soundbars, and more.",
  },
];

export default function ReferDetails() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            Earn on every referral
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-7 text-muted">
            On every successful referral, the referrer receives{" "}
            <span className="font-extrabold text-navy">hard cash between ₹5,000 and ₹20,000</span>.
            You also stand to win gifts such as a TV, Apple iPhone, AC, and more. There is no cap —
            refer more friends, earn more cash.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REWARDS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-[#f7fafc] p-5">
                <h3 className="text-base font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.num} className="rounded-2xl border border-line bg-white p-6">
                <p className="text-3xl font-extrabold text-sky">{step.num}</p>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-site rounded-2xl bg-navy px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to refer and earn?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80">
            Share HarGharSolar with friends and family. You get ₹5,000 to ₹20,000 hard cash on every
            successful install — plus a chance to win a TV, Apple iPhone, or AC.
          </p>
          <CtaButton variant="white" className="mt-6">
            Refer Now
          </CtaButton>
          <p className="mt-4 text-xs text-white/60">*T&amp;C apply. Cash is paid after your friend’s installation is complete.</p>
        </div>
      </section>
    </>
  );
}
