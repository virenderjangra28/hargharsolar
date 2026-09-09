const STEPS = [
  {
    n: "Step 1",
    title: "Free Site Assessment",
    body: "Our experts evaluate your rooftop, electricity usage, and solar potential.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
  },
  {
    n: "Step 2",
    title: "Customized System Design",
    body: "We recommend the optimal solar setup tailored for your home in this city.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    n: "Step 3",
    title: "Fast & Hassle-Free Installation",
    body: "Certified technicians ensure a safe, clean, and quick rooftop install.",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    n: "Step 4",
    title: "Live Monitoring & Support",
    body: "Track performance anytime and get ongoing support from HarGharSolar service teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CitySteps({ city }) {
  return (
    <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 md:px-8 md:pb-20">
      <div className="mx-auto max-w-site">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-sky sm:text-3xl">
          Experience HarGharSolar in {city} in 4 simple steps
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 bg-sky" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article key={step.n} className="overflow-hidden rounded-b-xl">
              <div className="relative">
                <img src={step.image} alt={step.title} className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-0 top-3 bg-sky px-3 py-1 text-xs font-extrabold text-white">
                  {step.n}
                </span>
              </div>
              <div className="bg-[#212121] px-4 py-4 text-white">
                <h3 className="font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
