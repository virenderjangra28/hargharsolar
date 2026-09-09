import Link from "next/link";

function DidYouKnow({ children }) {
  return (
    <div className="rounded-xl border border-line px-5 py-4 text-[15px] leading-7 text-ink/80">
      <p>
        <span className="font-extrabold italic">Did you know?</span> {children}
      </p>
    </div>
  );
}

function Note({ children }) {
  return (
    <div className="rounded-xl bg-[#f4f7fb] px-5 py-4 text-sm leading-7 text-muted">{children}</div>
  );
}

function Step({ n, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green text-sm font-extrabold text-green">
        {n}
      </span>
      <div>
        <h3 className="text-lg font-extrabold text-navy">{title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-muted">{children}</p>
      </div>
    </div>
  );
}

export default function OffGridGuide() {
  return (
    <div className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <article className="mx-auto max-w-3xl space-y-10 text-[15px] leading-7 text-muted">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Off-Grid Solar System for Home with Battery, Price, and Installation Details
          </h2>
          <p className="mt-4">
            An off-grid solar system is a standalone plant. It is{" "}
            <span className="font-extrabold text-navy">not connected to the DISCOM grid</span>.
            Panels charge a battery bank; an inverter (PCU) runs your lights, fans, fridge, and
            selected loads even when there is no electricity pole nearby — or when the grid is down
            for hours.
          </p>
          <p className="mt-4">
            Unlike{" "}
            <Link href="/on-grid-solar" className="font-semibold text-sky hover:underline">
              on-grid rooftop solar
            </Link>
            , off-grid systems{" "}
            <span className="font-extrabold text-navy">do not get PM Surya Ghar subsidy</span>. You
            pay for panels, MPPT charge control, batteries, and a heavier inverter. In return you
            get backup that a grid-tied plant cannot give.
          </p>
          <p className="mt-4">Indicative off-grid package prices in India (2026, with batteries):</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>1 kW off-grid solar with battery backup: ~ Rs. 1.20 lakh – Rs. 1.80 lakh</li>
            <li>3 kW off-grid solar with battery backup: ~ Rs. 3.20 lakh – Rs. 4.50 lakh</li>
            <li>5 kW off-grid solar with lithium battery: ~ Rs. 5.50 lakh – Rs. 7.50 lakh</li>
          </ul>
          <div className="mt-6">
            <Note>
              <span className="font-extrabold text-navy">*Please Note:</span> Prices are indicative
              as of 2026 for a HarGharSolar off-grid / hybrid backup variant. Final cost depends on
              battery chemistry (tubular vs lithium), days of backup, inverter type, roof height,
              cable run, and load list. Batteries are the largest cost and must be replaced over the
              life of the plant. Prices are subject to change without prior notice.
            </Note>
          </div>
          <p className="mt-6">
            This guide covers who should choose off-grid, the components, how energy is stored,
            typical Indian pricing, and how we install a safe battery-backed plant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What is an Off-grid Solar System?
          </h2>
          <p className="mt-4">
            Off-grid solar (also called a standalone solar power system) generates electricity from
            the roof, stores it in batteries, and supplies AC to your home through an inverter. There
            is no net meter and no export to DISCOM.
          </p>
          <p className="mt-4">It is the right design when:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>There is no grid, or the grid is too weak for net metering</li>
            <li>You need backup during long power cuts (farms, farmhouses, outskirts)</li>
            <li>You want selected loads (lights, fans, Wi-Fi, fridge) to stay on at night</li>
          </ul>
          <p className="mt-4">An off-grid plant is a compilation of:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <a href="#panels" className="font-semibold text-sky hover:underline">
                Solar panels
              </a>
            </li>
            <li>
              <a href="#mppt" className="font-semibold text-sky hover:underline">
                MPPT charge controller
              </a>
            </li>
            <li>
              <a href="#battery" className="font-semibold text-sky hover:underline">
                Battery bank
              </a>
            </li>
            <li>
              <a href="#inverter" className="font-semibold text-sky hover:underline">
                Off-grid / hybrid inverter (PCU)
              </a>
            </li>
            <li>Mounting structure, DC/AC cables, earthing, and protection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What Are the Off-Grid Solar System Components?
          </h2>
          <div className="mt-6">
            <DidYouKnow>
              PM Surya Ghar Muft Bijli Yojana subsidy is for grid-connected rooftop systems with a
              net meter. A pure off-grid plant is not eligible. If you have a DISCOM connection and
              still want backup, ask about a hybrid (on-grid + battery) design instead.
            </DidYouKnow>
          </div>

          <h3 id="panels" className="mt-8 text-xl font-extrabold text-navy">
            1. Solar Panels
          </h3>
          <p className="mt-3">
            Panels charge the batteries during the day. Off-grid arrays are often sized larger than
            the inverter (for example 4–5 kWp of modules on a 3 kVA PCU) so batteries refill even in
            monsoon. Plan about 80–100 sq. ft. of shadow-free roof per kW of modules.
          </p>

          <h3 id="mppt" className="mt-8 text-xl font-extrabold text-navy">
            2. MPPT Charge Controller
          </h3>
          <p className="mt-3">
            The MPPT (maximum power point tracking) stage sits between panels and batteries. It
            extracts the most power from the array and charges the bank at the right voltage so
            batteries last. Many modern PCUs have MPPT built in.
          </p>
          <div className="mt-4">
            <DidYouKnow>
              PWM charge controllers are cheaper but waste panel capacity. For home off-grid in
              India, MPPT is the default if you care about backup hours.
            </DidYouKnow>
          </div>

          <h3 id="battery" className="mt-8 text-xl font-extrabold text-navy">
            3. Battery Bank
          </h3>
          <p className="mt-3">
            Batteries are the heart of off-grid. They store daytime generation for night and cloudy
            days. Two common chemistries:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-extrabold text-navy">Tubular lead-acid:</span> lower first cost,
              1,200–1,800 cycles if not deep-discharged; need a ventilated room.
            </li>
            <li>
              <span className="font-extrabold text-navy">Lithium (LFP):</span> higher first cost,
              more usable capacity, longer cycle life, compact — preferred for new home plants.
            </li>
          </ul>
          <p className="mt-3">
            Backup time is set by kWh of storage vs your night load, not by the kW on the roof
            alone.
          </p>

          <h3 id="inverter" className="mt-8 text-xl font-extrabold text-navy">
            4. Off-grid Inverter (PCU)
          </h3>
          <p className="mt-3">
            The PCU converts battery DC into 230 V, 50 Hz AC for Indian appliances. Unlike an
            on-grid inverter, it does not shut down when DISCOM is off — because it is not tied to
            DISCOM. Size the VA rating for starting surge (fridge, submersible pump).
          </p>

          <h3 className="mt-8 text-xl font-extrabold text-navy">5. Mounting, Cables &amp; Earthing</h3>
          <p className="mt-3">
            Storm-rated, hot-dip galvanized structures hold panels for 25 years. DC cables, MC4s,
            isolators, and dual earthing (array + inverter) are safety, not optional extras.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How Does an Off-grid Solar System Work?
          </h2>
          <p className="mt-4">
            Energy never goes to the utility. It is generated, stored, and used on your property.
          </p>
          <div className="mt-8 space-y-8">
            <Step n="1" title="Solar Energy Capture and DC Generation">
              PV modules convert sunlight into DC. Output depends on irradiance, temperature,
              shading, and array size. Off-grid designs assume monsoon weeks, not only April sun.
            </Step>
            <Step n="2" title="MPPT Charging of the Battery Bank">
              The charge controller / PCU MPPT pushes DC into the batteries at the correct charge
              profile (bulk, absorb, float for lead-acid; BMS-managed for lithium).
            </Step>
            <Step n="3" title="Inverting DC to Household AC">
              The inverter supplies 230 V AC to a dedicated backup DB or to the whole house,
              depending on how loads are split.
            </Step>
            <Step n="4" title="Daytime Direct Use + Charging">
              While the sun is up, loads run from solar first; surplus charges batteries. A well
              sized array can cover daytime pump and AC loads and still refill the bank.
            </Step>
            <Step n="5" title="Night and Cloudy Backup">
              After sunset, batteries discharge through the inverter. Depth of discharge is limited
              so the bank is not killed in one bad night.
            </Step>
            <Step n="6" title="Optional Generator or Grid Assist">
              If you later get a weak grid, a hybrid PCU can charge from DISCOM or a diesel
              generator when batteries are low — still without exporting solar. Pure off-grid stays
              islanded.
            </Step>
          </div>
        </section>
      </article>

      <div className="mx-auto mt-14 max-w-site overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
          alt="Rooftop solar array used to charge an off-grid battery bank"
          className="max-h-[320px] w-full object-cover"
        />
      </div>

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-[15px] leading-7 text-muted">
        <section>
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Off-Grid Solar System Price in India in 2026
          </h2>
          <p className="mt-4">
            Off-grid price is not a single ₹/kW. Battery kWh and chemistry dominate. Other factors:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {[
              "Night load and hours of backup",
              "Lithium vs tubular batteries",
              "Inverter / PCU VA rating and surge",
              "Array size vs inverter size",
              "Roof height and cable length",
              "Pump or AC starting current",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="min-w-[640px] w-full text-center text-sm">
              <thead className="bg-[#e8eef8] text-navy">
                <tr>
                  <th className="px-3 py-3 font-semibold">Typical package</th>
                  <th className="px-3 py-3 font-semibold">What it usually runs</th>
                  <th className="px-3 py-3 font-semibold">Indicative price*</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 kW + tubular battery", "Lights, fans, TV, Wi-Fi", "~ Rs. 1.2–1.8 lakh"],
                  ["3 kW + tubular / small LFP", "1–2 BHK essential loads", "~ Rs. 3.2–4.5 lakh"],
                  ["5 kW + lithium", "Larger home + fridge + selected AC", "~ Rs. 5.5–7.5 lakh"],
                  ["7–10 kW farm / farmhouse", "Pumps + house backup", "Site-specific quote"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className="px-3 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm italic">
            *Please note: Not eligible for PM Surya Ghar CFA. Final quote after load list and roof
            survey.{" "}
            <Link href="/solar-calculator" className="font-semibold not-italic text-sky hover:underline">
              Roof area calculator
            </Link>{" "}
            still applies for module kW (80–100 sq. ft. per kW).
          </p>
          <div className="mt-6">
            <DidYouKnow>
              A 2 kW off-grid array can still generate about 2,800–2,900 units a year in a good
              Indian location — but usable night energy is limited by battery kWh, not by that yearly
              total.
            </DidYouKnow>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Advantages and Limitations of Off-Grid Solar
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            {[
              ["Works in a power cut:", "The plant keeps running because it is not grid-tied."],
              ["No DISCOM, no problem:", "Farms and remote homes can electrify without a pole."],
              ["No net-meter wait:", "You don’t depend on DISCOM commissioning to start using solar."],
              ["Selected-load backup:", "You choose what stays on at night to size batteries sanely."],
              ["Higher first cost:", "Batteries add lakh(s) vs a subsidised on-grid plant."],
              ["No CFA subsidy:", "PM Surya Ghar does not apply to standalone off-grid."],
              ["Battery replacement:", "Lead-acid every few years; lithium lasts longer but costs more up front."],
              ["Must size loads:", "Oversized ACs and pumps need a bigger PCU and bank."],
            ].map(([title, body]) => (
              <li key={title}>
                <span className="font-extrabold text-navy">{title}</span> {body}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Off-Grid vs On-Grid vs Hybrid
          </h2>
          <p className="mt-4">
            Most city homes with a stable DISCOM bill should start with{" "}
            <Link href="/on-grid-solar" className="font-semibold text-sky hover:underline">
              on-grid
            </Link>{" "}
            (subsidy + net metering). Choose off-grid when backup or no-grid is the real problem.
            Hybrid sits in between: export when the grid is up, batteries when it is not.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="min-w-[700px] w-full text-left text-sm">
              <thead className="bg-[#e8eef8] text-navy">
                <tr>
                  <th className="px-3 py-3 font-semibold">Feature</th>
                  <th className="px-3 py-3 font-semibold">Off-grid</th>
                  <th className="px-3 py-3 font-semibold">On-grid</th>
                  <th className="px-3 py-3 font-semibold">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Grid connection", "No", "Yes", "Yes"],
                  ["Battery", "Required", "No", "Yes"],
                  ["PM Surya Ghar subsidy", "No", "Yes", "Only if net-metered as per scheme rules"],
                  ["Works in power cut", "Yes", "No", "Yes (on backup loads)"],
                  ["Export extra solar", "No", "Yes", "Yes, when grid is on"],
                  ["Best for", "No / weak grid, farms", "City homes with a bill", "Cuts + bill savings"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-line align-top">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className="px-3 py-3">
                        {index === 0 ? <span className="font-semibold text-navy">{cell}</span> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How to Install an Off-Grid Solar System at Home
          </h2>
          <p className="mt-4">
            Off-grid is a power-system design, not a panel-only job. We start from your load list
            (watts × hours), then batteries, then array, then PCU.
          </p>
          <ol className="mt-6 list-none space-y-4">
            {[
              [
                "Step 1: Load listing and backup hours",
                "Lights, fans, fridge, Wi-Fi, pump, AC — which circuits must survive a cut, and for how many hours.",
              ],
              [
                "Step 2: Battery and PCU sizing",
                "kWh of storage, chemistry, DOD limits, and inverter VA including motor surge.",
              ],
              [
                "Step 3: Array and roof layout",
                "Module kW to refill the bank in your city’s sun; 80–100 sq. ft. per kW, south / low shade.",
              ],
              [
                "Step 4: Structure, wiring, earthing",
                "Galvanized mounts, correctly rated DC cables, isolators, lightning and dual earth.",
              ],
              [
                "Step 5: Commissioning and user training",
                "Charge settings, what not to run at night, app / display monitoring, first service visit.",
              ],
            ].map(([title, body]) => (
              <li key={title}>
                <p className="font-extrabold text-navy">{title}</p>
                <p className="mt-1">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Why Choose HarGharSolar for Off-Grid
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <span className="font-extrabold text-navy">Honest recommendation:</span> if subsidy
              on-grid is enough, we will say so — see{" "}
              <Link href="/on-grid-solar" className="font-semibold text-sky hover:underline">
                the on-grid guide
              </Link>
              .
            </li>
            <li>
              <span className="font-extrabold text-navy">Battery-first design:</span> we size kWh
              and chemistry before selling kW of panels.
            </li>
            <li>
              <Link href="/guaranted-saving" className="font-extrabold text-navy hover:underline">
                Service, not a one-time handover:
              </Link>{" "}
              monitoring, visits, and clear repair terms.
            </li>
            <li>
              <span className="font-extrabold text-navy">Storm-rated structures:</span> same
              high-wind galvanized mounts used on our rooftop plants.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Conclusion</h2>
          <p className="mt-4">
            Off-grid solar is for backup and no-grid living. It costs more than a subsidised
            on-grid plant because of batteries, and it is not covered by PM Surya Ghar. Sized
            correctly, it keeps essential loads on through the night and through DISCOM failures.
          </p>
          <p className="mt-3">
            Book a free consultation with your load list, or compare with{" "}
            <Link href="/on-grid-solar" className="font-semibold text-sky hover:underline">
              on-grid solar
            </Link>{" "}
            and{" "}
            <Link href="/zero-investment" className="font-semibold text-sky hover:underline">
              zero investment
            </Link>{" "}
            if you have a regular electricity bill.
          </p>
        </section>
      </article>
    </div>
  );
}
