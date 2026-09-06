import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Calculator from "@/components/Calculator";
import StatsSection from "@/components/StatsSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div id="top" className="min-h-full overflow-x-hidden bg-white">
      <main>
        <Hero />
        <TrustSection />
        <GuaranteeSection />
        <Calculator />
        {/* <StatsSection /> */}
        <FaqSection />
      </main>
    </div>
  );
}
