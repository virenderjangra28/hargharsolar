export default function WelcomeHero({ name }) {
  return (
    <section className="relative h-full min-h-[420px] overflow-hidden sm:min-h-[560px]">
      <img
        src="/images/welcome-hero-house.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/15" />

      <div className="relative flex h-full min-h-[420px] items-center px-5 py-10 sm:min-h-[560px] sm:px-8 md:px-10">
        <div className="max-w-md">
          <p className="text-base font-medium text-navy sm:text-lg">Welcome, {name}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[52px]">
            Your journey to lower bills starts here!
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base">
            Answer a few quick questions so we can size your rooftop system and estimate your monthly savings.
          </p>
        </div>
      </div>
    </section>
  );
}
