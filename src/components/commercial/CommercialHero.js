import CommercialForm from "./CommercialForm";

export default function CommercialHero() {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-[calc(100dvh-72px)] lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)] lg:grid-rows-[auto_1fr]">
        <div className="px-4 pt-8 text-center sm:px-8 sm:pt-10 lg:px-14 lg:pt-14">
          <h1 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-[#2F80F0] sm:text-[34px] lg:text-[42px]">
            Schedule a FREE consultation{" "}
            <br className="hidden sm:block" />
            with us today!
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] font-semibold leading-6 text-[#1A2744] sm:mt-4 sm:text-[16px]">
            Please fill the form and we will get in touch with you for the consultation
          </p>
        </div>

        <aside className="flex bg-[#F3F5FA] px-4 py-8 sm:px-8 lg:row-span-2 lg:items-center lg:px-10 lg:py-12">
          <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
            <CommercialForm />
          </div>
        </aside>

        <div className="relative h-[200px] overflow-hidden sm:h-[280px] lg:h-auto lg:min-h-0">
          <img
            src="/images/commercial-consult.jpg"
            alt="HarGharSolar consultant meeting a family for a free solar consultation"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:h-20" />
        </div>
      </div>
    </section>
  );
}
