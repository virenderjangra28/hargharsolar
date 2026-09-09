"use client";

import { useState } from "react";
import LeadForm from "@/components/LeadForm";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    caption: "Customised solar solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1400&q=80",
    caption: "Certified rooftop installation",
  },
  {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=80",
    caption: "After-sales service you can call",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80",
    caption: "Family-ready rooftop solar",
  },
];

export default function CityHero({ city }) {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section className="bg-[#f4f6f8]">
      <div className="mx-auto grid max-w-site items-start gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0b131f] sm:text-4xl lg:text-[42px]">
            Save Big — Go Solar in <span className="text-sky">{city}</span> &amp; Reduce Costs{" "}
            <span className="text-sky">Up to 70%</span>
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            PM Surya Ghar subsidy up to ₹78,000 + EMI options and end-to-end installation.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-muted">
            Book your free site survey in <span className="font-extrabold text-sky">{city}</span> and
            claim your subsidy now, before it runs out.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <img src={slide.src} alt={`${slide.caption} in ${city}`} className="aspect-[16/10] w-full object-cover" />
            <p className="absolute inset-x-0 bottom-0 bg-black/55 px-4 py-3 text-sm font-medium text-white">
              {slide.caption} in {city}
            </p>
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {SLIDES.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition ${
                  i === index ? "w-10 bg-[#0b131f]" : "w-8 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <LeadForm
            variant="city"
            title="Book Free Solar Consultation"
            subtitle=""
            submitLabel="Book Free Solar Survey"
          />
        </div>
      </div>

      <div className="border-t border-line bg-[#eceff3]">
        <ul className="mx-auto grid max-w-site gap-4 px-4 py-5 text-sm font-semibold text-navy sm:grid-cols-3 sm:px-6 md:px-8">
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✓</span> MNRE / DISCOM approved process
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✓</span> Service network across Haryana
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✓</span> 10,000+ homes solarized
          </li>
        </ul>
      </div>
    </section>
  );
}
