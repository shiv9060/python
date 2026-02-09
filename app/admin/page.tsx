import { ClipboardList, UserCog, Utensils } from "lucide-react";
import AppShell from "@/components/AppShell";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";

const activity = [
  ["Outlet 1", "Added new lunch combo", "12:34 PM"],
  ["Outlet 2", "Updated paneer price", "11:18 AM"],
  ["Outlet 3", "Assigned cashier: Neha", "09:05 AM"],
];

export default function AdminPage() {
  return (
    <AppShell
      title="Admin Dashboard"
      subtitle="Control menu items, workforce assignments, and outlet sales."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <StatCard title="Menu Items" value="128" change="+6 new items this week" icon={<Utensils size={18} />} />
        <StatCard title="Active Workers" value="42" change="3 pending approvals" icon={<UserCog size={18} />} accent="warning" />
        <StatCard title="Orders Today" value="1,248" change="+12% vs yesterday" icon={<ClipboardList size={18} />} accent="success" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Outlet Highlights</h3>
          <p className="mt-2 text-sm text-muted">
            Outlet-wise sales report with real-time updates and worker allocation.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3">
              <span>Outlet 1</span>
              <span className="text-xs font-semibold text-[color:var(--accent)]">₹3.4L this week</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3">
              <span>Outlet 2</span>
              <span className="text-xs font-semibold text-[color:var(--accent)]">₹3.1L this week</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3">
              <span>Outlet 3</span>
              <span className="text-xs font-semibold text-[color:var(--accent)]">₹2.6L this week</span>
            </div>
          </div>
        </div>
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Recent Admin Activity</h3>
          <div className="mt-4">
            <DataTable columns={["Outlet", "Update", "Time"]} rows={activity} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
