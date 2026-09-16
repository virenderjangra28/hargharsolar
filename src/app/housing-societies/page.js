import HousingSocietyHero from "@/components/housing-societies/HousingSocietyHero";

export const metadata = {
  title: "Solar for Housing Societies | HarGharSolar",
  description:
    "Cut your housing society's electricity bills by up to 90%. Book a free visit and get a personalised solar savings plan for your apartment complex.",
};

export default function HousingSocietiesPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <HousingSocietyHero />
      </main>
    </div>
  );
}
