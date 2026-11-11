
import AddLeads from "@/components/saveLeads/AddLeads";

export const metadata = {
  title: "Add Leads | HarGharSolar",
  description: "Add Leads: Leads are the potential customers for the solar system installation. Add leads to the system to get the leads and convert them into customers.",
};

export default function AddLeadsPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <main>
        <AddLeads />
      </main>
    </div>
  );
}
