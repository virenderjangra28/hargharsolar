import CtaButton from "@/components/pm-surya-ghar/CtaButton";

const CARDS = [
  {
    title: "1. Maximum Savings",
    body: "Reduce your electricity bill by up to 70% with high-efficiency rooftop panels sized for Indian weather and your DISCOM tariff.",
  },
  {
    title: "2. Trusted Quality & Long Life",
    body: "25-year panel performance warranty, storm-rated structures, and HarGharSolar service after the install — not a one-time handover.",
  },
  {
    title: "3. End-to-End Support",
    body: "From site survey in your city to PM Surya Ghar paperwork, net metering, and after-sales — we manage the file.",
  },
  {
    title: "4. Smart Monitoring",
    body: "Track real-time solar generation, savings, and system health on the app so you can see every unit.",
  },
];

export default function CityWhy({ city }) {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-site">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Why Choose <span className="text-sky">HarGharSolar</span> in {city}?
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 bg-sky" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-xl bg-[#212121] px-6 py-7 text-white">
              <h3 className="text-lg font-extrabold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">{card.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaButton className="uppercase tracking-wide">Get Solar Quote &amp; Subsidy Details</CtaButton>
        </div>
      </div>
    </section>
  );
}
