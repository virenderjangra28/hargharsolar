import ZeroHero from "@/components/zero-investment/ZeroHero";
import ZeroPlan from "@/components/zero-investment/ZeroPlan";
import Calculator from "@/components/Calculator";
import ZeroFaq from "@/components/zero-investment/ZeroFaq";

export const metadata = {
  title: "Zero Investment Solar | HarGharSolar",
  description:
    "Go solar in India with ₹0 down. PM Surya Ghar subsidy up to ₹78,000 and EMI designed so electricity savings cover your monthly instalment.",
};

export default function ZeroInvestmentPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <ZeroHero />
        <ZeroPlan />
        <Calculator />
        <ZeroFaq />
      </main>
    </div>
  );
}
