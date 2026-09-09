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

export default function OnGridGuide() {
  return (
    <div className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <article className="mx-auto max-w-3xl space-y-10 text-[15px] leading-7 text-muted">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            On-Grid Solar System for Home with Price, Subsidy, and Installation Details
          </h2>
          <p className="mt-4">
            An on-grid solar system is also known as a grid-tied system since it is connected to the
            main utility grid. One of the best things about installing on-grid solar at home is the
            subsidy you get.{" "}
            <Link href="/pm-surya-ghar-yojana" className="font-semibold text-sky hover:underline">
              The Indian government offers homeowners a subsidy
            </Link>{" "}
            for installing a rooftop on-grid solar system ranging between Rs. 30,000 and Rs. 78,000
            (depending upon the installed system capacity).
          </p>
          <p className="mt-4">
            The on-grid solar system price varies from city to city and, of course, depends on the
            size of the system. Let’s give you a price demonstration from two different cities (one
            from North India and one from South India) to give you an idea about the{" "}
            <Link href="/solar-calculator" className="font-semibold text-sky hover:underline">
              on-grid solar system cost:
            </Link>
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>3 kW on-grid solar system price in Bhopal with subsidy: ~ Rs. 1,35,000</li>
            <li>5 kW on-grid solar system price in Bengaluru with subsidy: ~ Rs. 3,00,000</li>
          </ul>
          <div className="mt-6">
            <Note>
              <span className="font-extrabold text-navy">*Please Note:</span> The on-grid solar plant
              prices listed above are indicative as of 22nd April 2026 for the HarGharSolar rooftop
              variant. The final on-grid solar system cost in India depends on your city, DISCOM
              charges, product variant opted for, panel type, system capacity, inverter type,
              mounting structure height, type of after-sales service, savings guarantee, roof
              height, etc. Also, prices are subject to change without prior notice.
            </Note>
          </div>
          <p className="mt-6">
            In this article, we’ve threaded the ins and outs of on-grid solar systems for you:
            workings, price details with and without a subsidy, and installation tips. Dive in for
            details!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What is an On-grid Solar System?
          </h2>
          <p className="mt-4">
            An on-grid solar system connects directly to the utility grid through a bi-directional
            meter (net meter). Most Indian homes with a reliable grid connection choose on-grid
            solar since this system is powerful enough to support all household energy requirements.
          </p>
          <p className="mt-4">
            The on-grid solar system is a careful compilation of many components, listed below,
            arranged together to convert sunlight into electricity:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <a href="#solar-panels" className="font-semibold text-sky hover:underline">
                Solar panels
              </a>
            </li>
            <li>
              <a href="#solar-inverter" className="font-semibold text-sky hover:underline">
                A solar inverter
              </a>
            </li>
            <li>
              <a href="#mounting" className="font-semibold text-sky hover:underline">
                Solar module mounting structures
              </a>
            </li>
            <li>
              A bi-directional net meter or{" "}
              <a href="#net-meter" className="font-semibold text-sky hover:underline">
                smart meter
              </a>
            </li>
            <li>
              Solar accessories (AC and DC cables, AC and DC combiner boxes, conduit trays,
              lightning arrester, MC4 connectors)
            </li>
          </ul>
          <p className="mt-4">
            Wondering what the individual role of these components is? Let’s break it down for you!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What Are the On-Grid Solar System Components?
          </h2>
          <div className="mt-6">
            <DidYouKnow>
              When maintained properly, an on-grid solar system can last for 25 years. Contrary to
              popular belief, cleaning your panels with sprinklers can actually damage them. To keep
              your system operating at its peak efficiency, be sure to sign up for professional
              after-sales services.
            </DidYouKnow>
          </div>
          <p className="mt-6">
            Here’s a breakdown of how every single component in an on-grid solar system comes
            together to power your home.
          </p>

          <h3 id="solar-panels" className="mt-8 text-xl font-extrabold text-navy">
            1. Solar Panels
          </h3>
          <p className="mt-3">
            Solar panels are the most visible part of the solar system. They’re installed on the
            rooftop, facing the South direction. When sunlight falls on these panels, they absorb
            that sunlight and convert it into electricity. Plan about 80–100 sq. ft. of shadow-free
            roof per kW.
          </p>
          <div className="mt-4">
            <DidYouKnow>
              Solar electricity directly from the panels is DC power. Since homes require
              alternating current (AC), a solar inverter is needed to convert direct current into
              AC.
            </DidYouKnow>
          </div>

          <h3 id="solar-inverter" className="mt-8 text-xl font-extrabold text-navy">
            2. Solar Inverter
          </h3>
          <p className="mt-3">
            Without a solar inverter, the entire solar system would have been an impractical model.
            The solar inverter converts DC into AC.
          </p>
          <p className="mt-3">
            This conversion is essential because that’s the only way to convert electricity
            generated from an on-grid solar system into a usable form (AC) that can run household
            appliances.
          </p>

          <h3 id="mounting" className="mt-8 text-xl font-extrabold text-navy">
            3. Solar Module Mounting Structures
          </h3>
          <p className="mt-3">
            These are the pillars that support solar panels. They must be of a standard grade so
            that they can withstand heavy winds during storms and cyclones and hold the weight of
            the solar panels for 25 years (that’s the life of a solar system).
          </p>
          <p className="mt-3">
            The best solar module mounting structures are prefabricated in precision labs. They’re
            coated with hot-dip galvanizing on steel to make them rust-proof.
          </p>
          <p className="mt-3">
            For instance, HarGharSolar’s storm-rated mounting structure, engineered for Indian
            rooftops, can:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Withstand wind speeds as high as 170 kmph</li>
            <li>
              Prevent rusting for years because they have a high-density galvanized iron (HDGI)
              coating of 80 microns to withstand corrosion
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-extrabold text-navy">4. Solar Accessories</h3>
          <p className="mt-3">
            They might not sound that important in the entire setup, but solar accessories are as
            important as a panel, an inverter, or a mounting structure. Let’s see how!
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <span className="font-extrabold text-navy">AC and DC cables:</span> They are required
              for wiring solar panels and connecting different parts to make the entire solar grid
              functional.
            </li>
            <li>
              <span className="font-extrabold text-navy">DC combiner boxes:</span> A DC combiner box
              works like an isolation box. All the cables carrying DC current from the panels are
              isolated in this box. DC power coming from the panels can be as high as 1,000 volts,
              even more. It’s dangerous (potentially lethal); hence, a DC combiner box is required.
              This box feeds the DC current into the solar inverter and the solar inverter produces
              alternating current.
            </li>
            <li>
              <span className="font-extrabold text-navy">AC combiner boxes:</span> The AC power from
              the on-grid solar inverter is fed into an AC combiner box (all cables carrying the AC
              current from multiple inverters are combined in this box).
            </li>
            <li>
              <span className="font-extrabold text-navy">Earthing strips and wires:</span> Once the
              entire on-grid solar system is set up, earthing is completed using these components.
            </li>
          </ul>
          <div className="mt-4">
            <Note>
              <span className="font-extrabold text-navy">Please Note:</span> all the DC cable
              connections are made using MC4 connectors.
            </Note>
          </div>

          <h3 id="net-meter" className="mt-8 text-xl font-extrabold text-navy">
            5. Bi-directional Meter
          </h3>
          <p className="mt-3">Also known as a net meter, the bi-directional meter is basically designed to keep a track of:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Electricity supplied to the grid</li>
            <li>Electricity imported from the grid</li>
          </ol>
          <p className="mt-3">
            An on-grid solar system will not become functional until and unless the regular meter is
            replaced with a bidirectional meter.
          </p>
          <p className="mt-3">
            The net meter helps the DISCOM track the power generated by the solar system, the power
            consumed, the power supplied to the grid, and the power imported.
          </p>
          <p className="mt-3">
            At the end of every month, when the electricity bill is generated, the readings from the
            bidirectional meter give an account of:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>How many units were supplied to the grid?</li>
            <li>How many units were taken from the grid?</li>
          </ol>
          <p className="mt-3">
            Here’s how this{" "}
            <span className="font-semibold text-sky">solar net metering process</span> helps:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              If you <span className="font-extrabold text-navy">supply more units to the grid than</span>{" "}
              you consumed, those units will be deducted from your bill. It will reduce the bill
              further.
            </li>
            <li>
              If you <span className="font-extrabold text-navy">use extra units from the grid</span> in
              addition to what your solar plant generated, those extra units are billed at your
              DISCOM tariff after netting export credits.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How Does an On-grid Solar System Work?
          </h2>
          <p className="mt-4">
            Now you’ve seen how multiple on-grid solar system components come together, it makes
            sense to break down the process of sunlight getting converted into electricity.
          </p>
          <div className="mt-8 space-y-8">
            <Step n="1" title="Solar Energy Capture and DC Power Generation">
              Solar panels, composed of photovoltaic (PV) cells, absorb photons from sunlight and
              free electrons within the cell’s semiconductor material. This movement of electrons
              generates a direct current (DC). The total DC output depends on factors such as panel
              efficiency, sunlight intensity, and shading. Needless to say, higher irradiance yields
              more current.
            </Step>
            <Step n="2" title="DC-to-AC Conversion via the Solar Inverter">
              The inverter is the heart of your solar system. It takes the panel-generated DC and
              inverts it into alternating current (AC), matching the frequency (50 Hz in India) and
              voltage of the local grid. Modern inverters also perform maximum power point tracking
              (MPPT) to continually adjust voltage/current inputs, extracting the highest possible
              power from your panels.
            </Step>
            <Step n="3" title="Bidirectional Meter Integration">
              Once converted to grid-compliant AC, the electricity flows through a bi-directional
              (net) meter. This meter precisely records both incoming units drawn from the grid and
              outgoing units exported from your solar system, ensuring you’re billed only for the
              net energy you consume.
            </Step>
            <Step n="4" title="Household Consumption of Solar-Generated AC">
              During the day, your home’s appliances, such as lights, fans, fridges, air
              conditioners, and electronics, draw AC power directly from the inverter output.
              Because solar power is typically the first source used, it reduces or altogether
              replaces the need to import electricity from the grid.
            </Step>
            <Step n="5" title="Exporting Excess Solar Power">
              If your panels produce more electricity than your household consumes at any moment,
              the surplus AC automatically travels back through the bi-directional meter into the
              grid. Your meter records these exported units, which may earn you financial credit
              under your local net-metering policy.
            </Step>
            <Step n="6" title="Importing Grid Power When Needed">
              After sunset or during low-sunlight periods when it’s cloudy, the bi-directional meter
              switches to import mode if your solar output drops below your home’s demand. It draws
              the shortfall from the grid, using up any previously accrued credits first, so your
              appliances continue running seamlessly without interruption.
            </Step>
          </div>
        </section>
      </article>

      <div
        className="mx-auto mt-14 max-w-site overflow-hidden rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.15) 12%, transparent 28%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "280px",
        }}
        role="img"
        aria-label="Rooftop solar neighbourhood"
      />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-[15px] leading-7 text-muted">
        <section className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Solar Subsidy For On-grid System
          </h2>
          <p className="mt-4">
            The central government of India offers the{" "}
            <Link href="/pm-surya-ghar-yojana" className="font-semibold text-sky hover:underline">
              PM Surya Ghar solar subsidy
            </Link>{" "}
            when you install an on-grid solar power system for homes. This subsidy remains the same
            for all states in India.
          </p>
          <p className="mt-3">Here are the subsidy breakdown details:</p>
        </section>

        <div className="overflow-hidden rounded-xl border border-line">
          <table className="w-full text-center text-sm">
            <thead className="bg-[#e8eef8] text-navy">
              <tr>
                <th className="px-4 py-3 font-semibold">Solar System Size</th>
                <th className="px-4 py-3 font-semibold">
                  Solar Subsidy Offered Under PM Surya Ghar Muft Bijli Yojana
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 kWp", "Rs. 30,000"],
                ["2 kWp", "Rs. 60,000"],
                ["3 kWp and higher", "Rs. 78,000"],
              ].map(([size, amount]) => (
                <tr key={size} className="border-t border-line">
                  <td className="px-4 py-3">{size}</td>
                  <td className="px-4 py-3 font-semibold text-navy">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm italic">
          *Please note: The subsidy is capped at Rs. 78,000 for on-grid rooftop solar systems that
          are 3 kWp or higher.
        </p>
        <DidYouKnow>
          The state governments of UP and Delhi offer additional subsidies to homeowners on top of
          the central government’s subsidy.
          <span className="mt-3 block font-extrabold not-italic text-navy">
            Here are the state subsidy details for UP homeowners:
          </span>
          <span className="mt-1 block not-italic">
            State subsidy for 1–2 kW solar systems: Rs. 15,000/kW. State subsidy for systems
            &gt;2 kW: Rs. 30,000
          </span>
          <span className="mt-3 block font-extrabold not-italic text-navy">
            Here are the state subsidy details for Delhi homeowners:
          </span>
          <span className="mt-1 block not-italic">
            State subsidy by the Delhi government: Rs. 10,000/kW (state subsidy is capped at Rs.
            30,000 in Delhi)
          </span>
        </DidYouKnow>

        <p>
          Based on the details above, here’s a breakdown of the on-grid solar system subsidy for
          different capacity solar systems:
        </p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="min-w-[720px] w-full text-center text-sm">
            <thead className="bg-[#e8eef8] text-navy">
              <tr>
                <th className="px-3 py-3 font-semibold">On-grid Solar System Size</th>
                <th className="px-3 py-3 font-semibold">All states except UP and Delhi</th>
                <th className="px-3 py-3 font-semibold">Total subsidy in UP</th>
                <th className="px-3 py-3 font-semibold">Total subsidy in Delhi</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 kWp", "Rs. 30,000", "Rs. 45,000", "Rs. 40,000"],
                ["2 kWp", "Rs. 60,000", "Rs. 90,000", "Rs. 80,000"],
                ["3 kWp", "Rs. 78,000", "Rs. 1.08 lakh", "Rs. 1.08 lakh"],
                ["4 kWp", "Rs. 78,000", "Rs. 1.08 lakh", "Rs. 1.08 lakh"],
                ["5 kWp", "Rs. 78,000", "Rs. 1.08 lakh", "Rs. 1.08 lakh"],
                ["10 kWp", "Rs. 78,000", "Rs. 1.08 lakh", "Rs. 1.08 lakh"],
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

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            On-Grid Solar System Price in India in 2026
          </h2>
          <p className="mt-4">The solar system price in India is not fixed. It changes based on multiple factors, including:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {[
              "Your city",
              "Solar system size",
              "DISCOM charges",
              "Product variant opted for",
              "Panel type",
              "Inverter type",
              "Mounting structure height",
              "Type of after-sales service",
              "Savings guarantee",
              "Roof height",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            Based on the factors listed above, we’ve estimated the price of an on-grid solar system
            in India in different cities. Let’s explore the details!
          </p>
          <h3 className="mt-8 text-xl font-extrabold text-navy">
            2 kW Solar System Price in India With and Without Subsidy in 2026
          </h3>
          <div className="mt-4">
            <DidYouKnow>
              A 2 kW on-grid solar system can generate 2,800 to 2,900 units of electricity annually,
              sufficient to power a 1–2 BHK home in India. It typically needs 160–200 sq. ft. of
              shadow-free rooftop.
            </DidYouKnow>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What’s the ROI On On-grid Solar Panel Installation?
          </h2>
          <p className="mt-4">
            Return on investment depends on tariff, sunlight, and how much of your daytime load the
            plant covers. Two things almost always improve ROI in Indian cities:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>The type of solar panels and inverter you install</li>
            <li>The amount of sunlight and shading on your roof</li>
          </ul>
          <p className="mt-4">
            Using a typical North-Indian city as an illustration, and assuming about 3–5% annual
            electricity rate increase and about 1% annual panel degradation:
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="min-w-[800px] w-full text-left text-sm">
              <thead className="bg-[#e8eef8] text-navy">
                <tr>
                  <th className="px-3 py-3 font-semibold">Solar System Size</th>
                  <th className="px-3 py-3 font-semibold">Price with subsidy (starting)*</th>
                  <th className="px-3 py-3 font-semibold">Approx. 25-year savings**</th>
                  <th className="px-3 py-3 font-semibold">ROI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3 kW", "~Rs. 1.25 Lakh", "~Rs. 10 Lakh", "~30%"],
                  ["4 kW", "~Rs. 1.63 Lakh", "~Rs. 13 Lakh", "~30%"],
                  ["5 kW", "~Rs. 1.83 Lakh", "~Rs. 17.50 Lakh", "~35%"],
                  ["7 kW", "~Rs. 3.2 Lakh", "~Rs. 23.85 Lakh", "~30%"],
                  ["10 kW", "~Rs. 4.0 Lakh", "~Rs. 35 Lakh", "~35%"],
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
          <p className="mt-4 text-xs italic leading-6">
            *Please note: The above-mentioned solar panel prices are indicative starting prices
            inclusive of a typical mono rooftop variant after PM Surya Ghar subsidy. Final cost
            depends on city, DISCOM, structure, and site. **Savings vs continuing with grid-only
            supply. Use our{" "}
            <Link href="/solar-calculator" className="font-semibold text-sky not-italic hover:underline">
              free solar calculator
            </Link>{" "}
            for a PIN-code estimate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Advantages and Disadvantages of On-Grid Solar Systems
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            {[
              ["Energy Production Monitoring:", "See daily kWh on the app and on your DISCOM bill."],
              ["Simplified Solo Billing:", "One net-metered bill — export and import netted."],
              ["Rapid Payback & Decades of Free Power:", "Typical payback in a few years; 25-year panel life."],
              ["Significant Monthly Savings:", "Daytime load runs on solar first."],
              ["Minimum Battery Requirements:", "No battery bank for a standard on-grid plant."],
              ["No Additional Equipment Costs:", "Skip hybrid batteries unless you want backup."],
              ["Most Affordable Solar System:", "Lowest ₹/kW among home solar options."],
              ["Exclusive Solar Subsidy:", "PM Surya Ghar CFA applies to eligible on-grid rooftop systems."],
            ].map(([title, body]) => (
              <li key={title}>
                <span className="font-extrabold text-navy">{title}</span> {body}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            The main limitation: a pure on-grid inverter shuts down during a DISCOM outage (anti-islanding
            safety). If you need backup during cuts, add a hybrid inverter and batteries — that’s a
            different design from the subsidised on-grid plant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What’s the Difference Between Off-Grid and On-Grid Solar Systems?
          </h2>
          <p className="mt-4">
            The headline difference is battery storage. On-grid uses the utility as your “battery”
            via net metering. Off-grid stores energy on-site and is not connected to DISCOM.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="min-w-[640px] w-full text-left text-sm">
              <thead className="bg-[#e8eef8] text-navy">
                <tr>
                  <th className="px-3 py-3 font-semibold">Feature</th>
                  <th className="px-3 py-3 font-semibold">On-Grid Solar in India</th>
                  <th className="px-3 py-3 font-semibold">Off-Grid Solar in India</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Connected to grid?", "Yes", "No"],
                  ["Battery bank?", "No (unless hybrid add-on)", "Yes"],
                  ["Solar subsidy?", "Yes (PM Surya Ghar, eligible homes)", "No"],
                  [
                    "How do they work?",
                    "Day: solar + export. Night: import from DISCOM.",
                    "Day: charge batteries. Night: run from batteries.",
                  ],
                  [
                    "When recommended?",
                    "Areas with a reliable grid and a DISCOM bill to cut.",
                    "No grid, or very unreliable supply with backup need.",
                  ],
                ].map(([feature, on, off]) => (
                  <tr key={feature} className="border-t border-line align-top">
                    <td className="px-3 py-3 font-semibold text-navy">{feature}</td>
                    <td className="px-3 py-3">{on}</td>
                    <td className="px-3 py-3">{off}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How to Install an On-Grid Solar System at Home?
          </h2>
          <p className="mt-4">
            This is not a DIY job. Load on the roof, tilt, earthing, and DISCOM isolation must be
            designed. Before install, we check:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Rooftop weight and civil load capacity</li>
            <li>Shadow-free area (about 80–100 sq. ft. per kW)</li>
            <li>Tilt angle and south-facing access</li>
            <li>Safety clearances, earthing pits, and lightning path</li>
          </ul>
          <ol className="mt-6 list-none space-y-4 pl-0">
            {[
              [
                "Step 1: Rooftop Inspection and Site Assessment",
                "Bill, PIN, roof photos, and a survey decide kW, structure type, and expected generation.",
              ],
              [
                "Step 2: Roof Mounting and Panel Mounting",
                "Hot-dip galvanized rails are fixed; modules are clamped to the designed tilt.",
              ],
              [
                "Step 3: Inverter Installation & Electrical Wiring",
                "DC strings to the inverter, AC to your distribution board, isolation and labelling.",
              ],
              [
                "Step 4: Earthing & Lightning Protection",
                "Separate DC/AC earths and a lightning arrester as per site risk.",
              ],
              [
                "Step 5: System Commissioning & Monitoring Setup",
                "Net-meter application with DISCOM, app pairing, and generation handover.",
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
            Why Choose HarGharSolar as Your Solar Company?
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <Link href="/zero-investment" className="font-extrabold text-navy hover:underline">
                Zero-investment solar scheme:
              </Link>{" "}
              ₹0 down with subsidy + EMI designed so bill savings can cover the instalment.
            </li>
            <li>
              <span className="font-extrabold text-navy">Quick installation:</span> Typical rooftop
              install in about 6–8 hours after survey and material readiness.
            </li>
            <li>
              <span className="font-extrabold text-navy">After-sales support:</span> Service visits
              and remote monitoring, not a one-time handover.
            </li>
            <li>
              <span className="font-extrabold text-navy">Leakage-conscious structures:</span>{" "}
              Engineered mounts for Indian terrace waterproofing.
            </li>
            <li>
              <Link href="/guaranted-saving" className="font-extrabold text-navy hover:underline">
                Money-back generation guarantee:
              </Link>{" "}
              HarGharZero — committed units or ₹10,000 back, plus ₹0 covered repairs.
            </li>
            <li>
              <span className="font-extrabold text-navy">Storm-rated structures:</span> High-wind
              design with heavy galvanizing for rust resistance.
            </li>
          </ul>
          <p className="mt-4 text-xs italic">
            *Please note: Installation time, EMI eligibility, and guarantee terms are confirmed
            after a free site survey and depend on DISCOM and lender approval.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Conclusion</h2>
          <p className="mt-4">
            An on-grid rooftop plant is the most common way Indian homes cut DISCOM bills: subsidy
            up to ₹78,000, net metering, and 25 years of generation. Quality of structure, inverter,
            and after-sales decides whether those 25 years actually show up on the bill.
          </p>
          <p className="mt-3">
            Book a free consultation, or start with the{" "}
            <Link href="/solar-calculator" className="font-semibold text-sky hover:underline">
              solar calculator
            </Link>{" "}
            and the{" "}
            <Link href="/pm-surya-ghar-yojana" className="font-semibold text-sky hover:underline">
              PM Surya Ghar
            </Link>{" "}
            guide. If you want ₹0 down, see{" "}
            <Link href="/zero-investment" className="font-semibold text-sky hover:underline">
              zero investment
            </Link>
            ; if you want units in writing, see{" "}
            <Link href="/guaranted-saving" className="font-semibold text-sky hover:underline">
              guaranteed savings
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
