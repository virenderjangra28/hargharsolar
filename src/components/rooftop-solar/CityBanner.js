import CtaButton from "@/components/pm-surya-ghar/CtaButton";

export default function CityBanner({ city }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(22,49,92,0.82) 0%, rgba(61,139,219,0.55) 100%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="relative mx-auto flex max-w-site items-center px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Go Solar in {city}?</h2>
          <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
            Join thousands of Haryana families who have already made the switch to rooftop solar and
            are saving on DISCOM bills every year.
          </p>
          <CtaButton variant="white" className="mt-6 uppercase tracking-wide">
            Book Free Site Survey
          </CtaButton>
        </div>
      </div>
      <div className="relative h-3 bg-navy-deep" />
    </section>
  );
}
