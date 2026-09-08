"use client";

import { useExpertModal } from "@/components/ExpertModalContext";

const PRIZES = [
  {
    label: "TVs",
    src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Apple phones",
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "ACs",
    src: "https://images.unsplash.com/photo-1585334547956-6270cba65d5e?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Coolers",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f362?auto=format&fit=crop&w=400&q=80",
  },
];

function StarMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-sky">
      <path
        d="M18 3.5l3.9 9.4 10.1.9-7.7 6.7 2.3 9.9L18 25.3 9.4 30.4l2.3-9.9-7.7-6.7 10.1-.9L18 3.5z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.73.45 3.4 1.3 4.88L2 22l5.45-1.42a10 10 0 004.59 1.1h.01c5.46 0 9.89-4.4 9.89-9.85C21.94 6.4 17.5 2 12.04 2zm5.76 14.12c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.4.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.18 1.36.28.14.44.12.6-.07.16-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export default function ReferHero() {
  const { openModal } = useExpertModal();

  function inviteFriends() {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://hargharsolar.in";
    const text = encodeURIComponent(
      `Go solar with HarGharSolar and cut your electricity bill. I get rewarded when you install — get a free consultation here: ${origin}`,
    );
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-[#eef7fd] to-sky-soft">
      <div className="mx-auto max-w-site px-4 pt-10 sm:px-6 md:px-8 md:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="flex items-center gap-2 text-lg font-extrabold italic tracking-wide text-navy">
              HarGharSolar
              <StarMark />
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold italic leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-navy [text-shadow:3px_3px_0_#f5d000]">REFER FRIENDS.</span>
              <span className="mt-1 block text-[#f5d000] [text-shadow:2px_2px_0_#16315c]">WIN PRIZES!</span>
            </h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-sky">
              1st — 30th September
            </p>

            <div className="mt-8 max-w-md">
              <p className="text-2xl font-extrabold text-sky sm:text-3xl">Refer &amp; Earn ₹5,000 to ₹20,000!</p>
              <p className="mt-1 text-sm text-ink">Help your friends go solar today!</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 text-sm font-semibold text-white hover:bg-navy-mid"
                >
                  Refer Now
                </button>
                <button
                  type="button"
                  onClick={inviteFriends}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-[#25D366] bg-white px-5 text-sm font-semibold text-[#128C47] hover:bg-[#f1fbf4]"
                >
                  <WhatsAppIcon />
                  Invite Friends
                </button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-sky/20 blur-2xl" />
            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
                alt="Bumper prize Apple iPhone"
                className="relative z-10 h-72 w-auto object-contain drop-shadow-2xl sm:h-80"
              />
              <div className="absolute left-2 top-8 z-20 rotate-[-8deg] rounded-md bg-[#f5d000] px-3 py-2 text-center shadow-md sm:left-6">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-navy">Bumper prize</p>
                <p className="text-sm font-extrabold text-navy">Apple iPhone</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[#f5d000]">
        <div className="mx-auto flex max-w-site flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-2xl font-extrabold italic tracking-tight text-navy sm:text-3xl">
            50 LUCKY WINNERS
          </p>
          <ul className="flex flex-wrap items-end gap-6 sm:gap-8">
            {PRIZES.map((prize) => (
              <li key={prize.label} className="w-20 text-center sm:w-24">
                <img
                  src={prize.src}
                  alt={prize.label}
                  className="mx-auto h-16 w-full object-contain sm:h-20"
                />
                <p className="mt-2 text-xs font-bold text-[#0b131f]">{prize.label}</p>
              </li>
            ))}
          </ul>
          <p className="text-[11px] font-medium text-navy/70 md:[writing-mode:vertical-rl] md:rotate-180">
            *T&amp;C apply.
          </p>
        </div>
      </div>
    </section>
  );
}
