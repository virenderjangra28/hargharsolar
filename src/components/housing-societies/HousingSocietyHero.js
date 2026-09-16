import HousingSocietyForm from "./HousingSocietyForm";

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72A5.41 5.41 0 013.69 9c0-.6.1-1.18.28-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.82.96 4.05l3.01-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}

export default function HousingSocietyHero() {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-[calc(100dvh-72px)] lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)] lg:grid-rows-[auto_1fr]">
        <div className="px-4 pt-8 text-center sm:px-8 sm:pt-10 lg:px-14 lg:pt-14">
          <h1 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-[#2F80F0] sm:text-[34px] lg:text-[42px]">
            Slash Your Society&apos;s Electricity{" "}
            <br className="hidden sm:block" />
            Bills by up to 90%!
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-[#5C6573] sm:text-[15px]">
            Guaranteed solar savings — professionally managed from design to maintenance.
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[12px] text-[#6B7280] sm:text-[13px]">
            <GoogleMark />
            <span>
              Rated <span className="text-[#F4B400]">★</span>{" "}
              <span className="font-semibold text-[#374151]">4.8</span> on Google | 15000+ ratings
            </span>
          </p>
        </div>

        <aside className="flex bg-[#F3F5FA] px-4 py-8 sm:px-8 lg:row-span-2 lg:px-10 lg:py-10">
          <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
            <HousingSocietyForm />
          </div>
        </aside>

        <div className="relative h-[200px] overflow-hidden sm:h-[280px] lg:h-auto lg:min-h-0">
          <img
            src="/images/housing-society-rooftop.jpg"
            alt="Housing society rooftops with solar panels"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent lg:h-32" />
        </div>
      </div>
    </section>
  );
}
