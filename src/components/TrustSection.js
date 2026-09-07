const CARDS = [
  {
    title: "Guaranteed Savings",
    copy: "Your monthly solar generation is designed to cover EMI, so electricity savings start from day one.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    alt: "Rooftop solar panels generating power",
  },
  {
    title: "Hassle-free process",
    copy: "From site survey to subsidy paperwork and installation, our team handles every step for you.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    alt: "Solar technicians installing rooftop panels",
  },
  {
    title: "Storm-proof Structure",
    copy: "High-grade mounting structures are engineered to stay secure through heavy wind and rain.",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
    alt: "Solar mounting structure on a residential roof",
  },
  {
    title: "Reliable after-sales service",
    copy: "Dedicated service support, proactive visits, and a 25-year performance warranty on panels.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
    alt: "Solar service engineer checking a rooftop system",
  },
];

export default function TrustSection() {
  return (
    <section id="why-us" className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-site">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
          Why Families Across India Trust HarGharSolar
        </h2>

        <div className="mt-8 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <article key={card.title}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
