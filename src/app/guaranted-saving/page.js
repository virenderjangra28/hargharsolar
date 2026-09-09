import GuaranteeHero from "@/components/guaranteed-saving/GuaranteeHero";
import GuaranteePlan from "@/components/guaranteed-saving/GuaranteePlan";
import Calculator from "@/components/Calculator";
import GuaranteeFaq from "@/components/guaranteed-saving/GuaranteeFaq";

export const metadata = {
  title: "Guaranteed Solar Savings | HarGharSolar",
  description:
    "HarGharZero guaranteed savings for Indian homes: committed solar generation or ₹10,000 money back, ₹0 repairs, and live tracking on the app.",
};

export default function GuaranteedSavingPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <GuaranteeHero />
        <GuaranteePlan />
        <Calculator />
        <GuaranteeFaq />
      </main>
    </div>
  );
}
