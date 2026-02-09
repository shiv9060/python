import { Banknote, LineChart, TrendingUp } from "lucide-react";
import AppShell from "@/components/AppShell";
import StatCard from "@/components/StatCard";
import SalesChart from "@/components/SalesChart";

export default function OwnerPage() {
  return (
    <AppShell
      title="Owner Analytics"
      subtitle="Real-time revenue performance across all Raghav Ltd outlets."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <StatCard
          title="Total Revenue"
          value="₹9.1L"
          change="+8% vs last week"
          icon={<Banknote size={18} />}
          accent="success"
        />
        <StatCard
          title="Daily Average"
          value="₹1.3L"
          change="Stable across outlets"
          icon={<LineChart size={18} />}
        />
        <StatCard
          title="Monthly Growth"
          value="14.2%"
          change="Highest in Outlet 2"
          icon={<TrendingUp size={18} />}
          accent="success"
        />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <SalesChart />
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Outlet Performance</h3>
          <div className="mt-4 space-y-4 text-sm">
            {[
              { outlet: "Outlet 1", revenue: "₹3.4L", trend: "+5%" },
              { outlet: "Outlet 2", revenue: "₹3.7L", trend: "+9%" },
              { outlet: "Outlet 3", revenue: "₹2.9L", trend: "+3%" },
            ].map((row) => (
              <div
                key={row.outlet}
                className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3"
              >
                <div>
                  <p className="font-semibold">{row.outlet}</p>
                  <p className="text-xs text-muted">Revenue</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[color:var(--text-primary)]">{row.revenue}</p>
                  <p className="text-xs text-[color:var(--success)]">{row.trend}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[color:var(--accent-soft)] px-4 py-3 text-xs font-semibold text-[color:var(--accent)]">
            Compare daily, weekly, and monthly reports in the Sales Reports module.
          </div>
        </div>
      </div>
    </AppShell>
  );
}
