import DashboardStats from "@/components/admin/DashboardStats";

export const metadata = {
  title: "Dashboard | HarGharSolar Admin",
};

export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">Dashboard</h1>
      <DashboardStats />
    </>
  );
}
