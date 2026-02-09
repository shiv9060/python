import { PlusCircle } from "lucide-react";
import AppShell from "@/components/AppShell";
import DataTable from "@/components/DataTable";

const items = [
  ["Paneer Tikka", "Starters", "₹280", "Available"],
  ["Dal Makhani", "Mains", "₹240", "Available"],
  ["Mango Lassi", "Beverages", "₹120", "Available"],
  ["Gulab Jamun", "Desserts", "₹90", "Seasonal"],
];

export default function ItemManagementPage() {
  return (
    <AppShell
      title="Item Management"
      subtitle="Add, edit, and manage menu items by outlet and category."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Menu Inventory</h3>
          <p className="text-sm text-muted">Outlet 1 · Outlet 2 · Outlet 3</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white">
          <PlusCircle size={16} />
          Add Menu Item
        </button>
      </div>
      <div className="mt-6">
        <DataTable columns={["Item", "Category", "Price", "Status"]} rows={items} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="surface rounded-2xl p-4 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Pricing Rules</p>
          <p className="mt-2 text-sm text-muted">
            Apply outlet-wise pricing or global pricing from the admin console.
          </p>
        </div>
        <div className="surface rounded-2xl p-4 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Category Tags</p>
          <p className="mt-2 text-sm text-muted">
            Group items into starters, mains, beverages, and desserts for fast POS lookup.
          </p>
        </div>
        <div className="surface rounded-2xl p-4 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Audit Logs</p>
          <p className="mt-2 text-sm text-muted">
            Track every price edit with admin ID and timestamp for compliance.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
