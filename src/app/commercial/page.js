import CommercialHero from "@/components/commercial/CommercialHero";

export const metadata = {
  title: "Commercial Solar | HarGharSolar",
  description:
    "Schedule a free commercial solar consultation with HarGharSolar. Share your company details and we will get in touch with a savings plan.",
};

export default function CommercialPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <CommercialHero />
      </main>
    </div>
  );
}
