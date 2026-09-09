import OnGridHero from "@/components/on-grid-solar/OnGridHero";
import OnGridGuide from "@/components/on-grid-solar/OnGridGuide";
import OnGridFaq from "@/components/on-grid-solar/OnGridFaq";

export const metadata = {
  title: "On-Grid Solar System Buying Guide | HarGharSolar",
  description:
    "On-grid solar for Indian homes: how it works, PM Surya Ghar subsidy, 2026 prices, ROI, net metering, and installation with HarGharSolar.",
};

export default function OnGridSolarPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <OnGridHero />
        <OnGridGuide />
        <OnGridFaq />
      </main>
    </div>
  );
}
