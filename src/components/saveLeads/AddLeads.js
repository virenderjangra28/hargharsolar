
import AddLeadForm from "../AddLeadForm";

export default function AddLeads() {
  return (
    <section className="min-h-screen w-full bg-[#eef3f8]">
      <div className="flex min-h-screen w-full items-start justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <aside className="w-full max-w-4xl">
          <AddLeadForm
            variant="sidebar"
            title="Queries"
            subtitle="Add queries to your database. No pressure, add only if you are satisfied!"
            showSlotsBadge = {false}
          />
        </aside>
      </div>
    </section>
  );
}
