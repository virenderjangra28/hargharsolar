import LeadForm from "@/components/LeadForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80";

export default function OnGridHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-site lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_1fr]">
        <h1 className="px-4 pt-8 text-center text-[26px] font-extrabold leading-tight tracking-tight sm:px-6 sm:pt-10 sm:text-4xl md:px-8 md:pt-14 lg:text-5xl">
          <span className="text-sky">On-grid Solar System</span>{" "}
          <span className="text-navy">Buying Guide</span>
        </h1>
        <aside className="bg-[#eef3f8] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:row-span-2">
          <LeadForm
            variant="sidebar"
            title="Book a FREE Consultation"
            subtitle="Get genuine advice from our solar experts. No pressure, book only if you are satisfied!"
            showSlotsBadge
          />
        </aside>
        <div className="relative h-[220px] overflow-hidden sm:h-[320px] lg:h-auto lg:min-h-[520px]">
          <img
            src={HERO_IMAGE}
            alt="Aerial view of homes with rooftop solar panels"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
