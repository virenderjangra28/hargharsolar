import QueryTable from "@/components/admin/QueryTable";
import { getRequests } from "@/lib/admin/getRequests";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Housing Society | HarGharSolar Admin",
};

export default async function AdminHousingSocietyPage() {
  const requests = await getRequests("", "housing-society");

  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">Housing Society</h1>
      <QueryTable source="housing-society" initialRequests={requests} />
    </>
  );
}
