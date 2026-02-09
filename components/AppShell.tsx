import Link from "next/link";
import { BarChart3, ClipboardList, CreditCard, LayoutGrid, Settings, Users } from "lucide-react";

const navLinks = [
  { href: "/login", label: "Login", icon: LayoutGrid },
  { href: "/pos", label: "POS Billing", icon: CreditCard },
  { href: "/admin", label: "Admin Dashboard", icon: Settings },
  { href: "/admin/items", label: "Item Management", icon: ClipboardList },
  { href: "/admin/users", label: "User Management", icon: Users },
  { href: "/owner", label: "Owner Analytics", icon: BarChart3 },
  { href: "/reports", label: "Sales Reports", icon: LayoutGrid },
];

export default function AppShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-1">
      <aside className="hidden w-64 flex-col gap-4 border-r border-[color:var(--border)] bg-[color:var(--surface)] p-6 lg:flex">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Navigation</p>
          <h2 className="text-xl font-semibold">Operations Suite</h2>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-muted transition hover:border-[color:var(--border)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--text-primary)]"
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-4 text-xs text-muted">
          <p className="font-semibold text-[color:var(--text-primary)]">Live Sync</p>
          <p>Outlet 1, 2, 3 are connected to the central database.</p>
        </div>
      </aside>
      <main className="flex-1 px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
        {children}
      </main>
    </div>
  );
}
