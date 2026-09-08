import ReferHero from "@/components/refer-and-earn/ReferHero";
import ReferDetails from "@/components/refer-and-earn/ReferDetails";

export const metadata = {
  title: "Refer & Earn | HarGharSolar",
  description:
    "Refer friends to HarGharSolar and earn ₹5,000 to ₹20,000 hard cash on every successful referral, plus gifts like a TV, Apple iPhone, and AC.",
};

export default function ReferAndEarnPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <ReferHero />
        <ReferDetails />
      </main>
    </div>
  );
}
