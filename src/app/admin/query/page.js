import QueryTable from "@/components/admin/QueryTable";

export const metadata = {
  title: "Queries | HarGharSolar Admin",
};

export default function AdminQueryPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">Queries</h1>
      <QueryTable />
    </>
  );
}
