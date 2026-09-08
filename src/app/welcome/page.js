import WelcomeHero from "@/components/welcome/WelcomeHero";
import SavingsQuiz from "@/components/welcome/SavingsQuiz";
import JourneySection from "@/components/welcome/JourneySection";

export const metadata = {
  title: "Welcome | HarGharSolar",
  description: "Calculate your rooftop solar savings and see what to expect on your HarGharSolar journey.",
};

function parseLead(params) {
  const raw = params?.queryParams || params?.query;
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  if (params?.name) {
    return { name: params.name };
  }
  return {};
}

function displayName(value) {
  if (!value || typeof value !== "string") return "there";
  const first = value.trim().split(/\s+/)[0];
  if (!first) return "there";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function leadNameFromParams(lead) {
  return lead?.name;
}

export default async function WelcomePage({ searchParams }) {
  const params = await searchParams;
  const lead = parseLead(params);
  const name = JSON.parse(lead).name.trim().split(/\s+/)[0];
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <div className="flex flex-wrap">
          <div className="min-w-[320px] flex-1 basis-[520px]">
            <WelcomeHero name={name} />
          </div>
          <div className="min-w-[320px] flex-1 basis-[420px]">
            <SavingsQuiz lead={lead} />
          </div>
        </div>
        <JourneySection />
      </main>
    </div>
  );
}
