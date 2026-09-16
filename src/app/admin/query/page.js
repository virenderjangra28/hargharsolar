import QueryTable from "@/components/admin/QueryTable";
import { getRequests } from "@/lib/admin/getRequests";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Queries | HarGharSolar Admin",
};

export default async function AdminQueryPage() {
  const requests = await getRequests("", "home");

  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">Queries</h1>
      <QueryTable source="home" initialRequests={requests} />
    </>
  );
}
