import { notFound } from "next/navigation";
import {
  HARYANA_CITIES,
  cityFromRooftopSlug,
} from "@/sharedComponent/haryanaCities";
import CityHero from "@/components/rooftop-solar/CityHero";
import CityWhy from "@/components/rooftop-solar/CityWhy";
import CitySteps from "@/components/rooftop-solar/CitySteps";
import CityConsult from "@/components/rooftop-solar/CityConsult";
import CityFaq from "@/components/rooftop-solar/CityFaq";
import CityBanner from "@/components/rooftop-solar/CityBanner";

export function generateStaticParams() {
  return HARYANA_CITIES.map((city) => ({
    city: city.toLowerCase(),
  }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = cityFromRooftopSlug(`rooftop-solar-${slug}`);
  if (!city) return { title: "Rooftop Solar | HarGharSolar" };
  return {
    title: `Rooftop Solar in ${city} | HarGharSolar`,
    description: `Go solar in ${city} with HarGharSolar. PM Surya Ghar subsidy up to ₹78,000, EMI, net metering, and a free site survey.`,
  };
}

export default async function RooftopSolarCityPage({ params }) {
  const { city: slug } = await params;
  const city = cityFromRooftopSlug(`rooftop-solar-${slug}`);
  if (!city) notFound();

  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <CityHero city={city} />
        <CityWhy city={city} />
        <CitySteps city={city} />
        <CityConsult city={city} />
        <CityFaq city={city} />
        <CityBanner city={city} />
      </main>
    </div>
  );
}
