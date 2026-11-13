import { AdminRequestProvider } from "@/components/admin/AdminRequestContext";
import AdminBackButton from "@/components/admin/AdminBackButton";
import LeftMenu from "@/sharedComponent/LeftMenu";

export const metadata = {
  title: "Admin | HarGharSolar",
};

export default function AdminLayout({ children }) {
  return (
    <AdminRequestProvider>
      <div className="bg-[#f4f7fb] px-4 sm:px-6 md:h-[calc(100vh-72px)] md:overflow-hidden md:px-8">
        <div className="mx-auto max-w-site md:flex md:h-full md:gap-6">
          <LeftMenu />
          <div className="min-w-0 flex-1 py-6 md:h-full md:overflow-y-auto md:py-8">
            <AdminBackButton />
            {children}
          </div>
        </div>
      </div>
    </AdminRequestProvider>
  );
}
