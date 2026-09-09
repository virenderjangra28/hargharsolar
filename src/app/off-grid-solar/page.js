import OffGridHero from "@/components/off-grid-solar/OffGridHero";
import OffGridGuide from "@/components/off-grid-solar/OffGridGuide";
import OffGridFaq from "@/components/off-grid-solar/OffGridFaq";

export const metadata = {
  title: "Off-Grid Solar System Buying Guide | HarGharSolar",
  description:
    "Off-grid solar for Indian homes and farms: batteries, MPPT, 2026 prices, no PM Surya Ghar subsidy, and how backup works when DISCOM is down.",
};

export default function OffGridSolarPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <OffGridHero />
        <OffGridGuide />
        <OffGridFaq />
      </main>
    </div>
  );
}
