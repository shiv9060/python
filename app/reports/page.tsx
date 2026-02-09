import { CalendarDays, Download } from "lucide-react";
import AppShell from "@/components/AppShell";
import DataTable from "@/components/DataTable";

const reports = [
  ["Today", "₹1.28L", "1,248", "₹95"],
  ["This Week", "₹9.1L", "8,942", "₹102"],
  ["This Month", "₹38.4L", "39,122", "₹98"],
];

export default function ReportsPage() {
  return (
    <AppShell
      title="Sales Reports"
      subtitle="Outlet-wise sales with daily, weekly, and monthly comparisons."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Revenue Summary</h3>
          <p className="text-sm text-muted">
            Filter reports by outlet and export CSV or PDF.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2 text-sm font-semibold">
            <CalendarDays size={16} />
            Date Range
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white">
            <Download size={16} />
            Export PDF
          </button>
        </div>
      </div>
      <div className="mt-6">
        <DataTable columns={["Period", "Total Sales", "Orders", "Avg Ticket"]} rows={reports} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="surface rounded-2xl p-5 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Outlet 1</p>
          <p className="mt-2 text-lg font-semibold">₹3.4L</p>
          <p className="text-xs text-muted">+5% vs last week</p>
        </div>
        <div className="surface rounded-2xl p-5 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Outlet 2</p>
          <p className="mt-2 text-lg font-semibold">₹3.7L</p>
          <p className="text-xs text-muted">+9% vs last week</p>
        </div>
        <div className="surface rounded-2xl p-5 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Outlet 3</p>
          <p className="mt-2 text-lg font-semibold">₹2.9L</p>
          <p className="text-xs text-muted">+3% vs last week</p>
        </div>
      </div>
    </AppShell>
  );
}
