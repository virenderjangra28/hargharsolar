import SchemeHero from "@/components/pm-surya-ghar/SchemeHero";
import AboutScheme from "@/components/pm-surya-ghar/AboutScheme";
import SchemeAchievements from "@/components/pm-surya-ghar/SchemeAchievements";
import HowToApply from "@/components/pm-surya-ghar/HowToApply";
import SchemeFaq from "@/components/pm-surya-ghar/SchemeFaq";

export const metadata = {
  title: "PM Surya Ghar Yojana | HarGharSolar",
  description:
    "Get up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana. Check eligibility, documents, subsidy slab, and apply with HarGharSolar.",
};

export default function PmSuryaGharYojanaPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <SchemeHero />
        <AboutScheme />
        <SchemeAchievements />
        <HowToApply />
        <SchemeFaq />
      </main>
    </div>
  );
}
