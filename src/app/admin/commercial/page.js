import QueryTable from "@/components/admin/QueryTable";
import { getRequests } from "@/lib/admin/getRequests";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Commercial | HarGharSolar Admin",
};

export default async function AdminCommercialPage() {
  const requests = await getRequests("", "commercial");

  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">Commercial</h1>
      <QueryTable source="commercial" initialRequests={requests} />
    </>
  );
}
