import LeadForm from "@/components/LeadForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80";

export default function OnGridHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-site lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col">
          <h1 className="px-4 pt-10 text-center text-3xl font-extrabold leading-tight tracking-tight sm:px-6 sm:text-4xl md:px-8 md:pt-14 lg:text-5xl">
            <span className="text-sky">On-grid Solar System</span>{" "}
            <span className="text-navy">Buying Guide</span>
          </h1>
          <div className="relative mt-8 min-h-[280px] flex-1 overflow-hidden sm:min-h-[380px] lg:min-h-[520px]">
            <img
              src={HERO_IMAGE}
              alt="Aerial view of homes with rooftop solar panels"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
        <aside className="bg-[#eef3f8] px-4 py-8 sm:px-6 sm:py-10 md:px-8">
          <LeadForm
            variant="sidebar"
            title="Book a FREE Consultation"
            subtitle="Get genuine advice from our solar experts. No pressure, book only if you are satisfied!"
            showSlotsBadge
          />
        </aside>
      </div>
    </section>
  );
}
