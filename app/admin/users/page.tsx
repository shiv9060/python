import { UserPlus } from "lucide-react";
import AppShell from "@/components/AppShell";
import DataTable from "@/components/DataTable";

const users = [
  ["Neha Sharma", "Cashier", "Outlet 1", "Active"],
  ["Karan Patel", "Supervisor", "Outlet 2", "Active"],
  ["Asha Verma", "Cashier", "Outlet 3", "Pending"],
  ["Ravi Singh", "Chef", "Outlet 1", "Active"],
];

export default function UserManagementPage() {
  return (
    <AppShell
      title="User Management"
      subtitle="Manage workers, assign outlets, and control role access."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Outlet Workforce</h3>
          <p className="text-sm text-muted">Assign workers to each outlet with role-based access.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white">
          <UserPlus size={16} />
          Add Worker
        </button>
      </div>
      <div className="mt-6">
        <DataTable columns={["Worker", "Role", "Outlet", "Status"]} rows={users} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="surface rounded-2xl p-5 shadow-soft">
          <h4 className="text-sm font-semibold">Outlet Assignment Rules</h4>
          <p className="mt-2 text-sm text-muted">
            Admins can transfer workers across outlets and update permissions instantly.
          </p>
        </div>
        <div className="surface rounded-2xl p-5 shadow-soft">
          <h4 className="text-sm font-semibold">Security Compliance</h4>
          <p className="mt-2 text-sm text-muted">
            All access tokens are issued with JWT and auto-expire after shift end.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
