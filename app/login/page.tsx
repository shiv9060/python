import { Lock, ShieldCheck, User } from "lucide-react";
import AppShell from "@/components/AppShell";

const roles = [
  {
    title: "Worker / Cashier",
    description: "Fast POS access with billing-only permissions.",
    icon: User,
  },
  {
    title: "Admin",
    description: "Manage menu items, pricing, and outlet workforce.",
    icon: ShieldCheck,
  },
  {
    title: "Owner",
    description: "Analytics dashboard with full revenue visibility.",
    icon: Lock,
  },
];

export default function LoginPage() {
  return (
    <AppShell
      title="Secure Login"
      subtitle="Role-based authentication secured with JWT tokens."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Sign in to Raghav Ltd</h3>
          <p className="mt-2 text-sm text-muted">
            Use outlet-issued credentials. Sessions auto-expire for security.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="text-sm font-medium">
              Email / Worker ID
              <input
                type="text"
                placeholder="raghav.cashier@raghav.com"
                className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm"
              />
            </label>
            <label className="text-sm font-medium">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm"
              />
            </label>
            <button
              type="button"
              className="rounded-xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-white"
            >
              Login
            </button>
          </form>
        </div>
        <div className="grid gap-4">
          {roles.map((role) => (
            <div key={role.title} className="surface rounded-2xl p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[color:var(--accent-soft)] p-2 text-[color:var(--accent)]">
                  <role.icon size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold">{role.title}</h4>
                  <p className="text-xs text-muted">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
