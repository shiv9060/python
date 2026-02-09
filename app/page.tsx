import Link from "next/link";
import AppShell from "@/components/AppShell";

export default function HomePage() {
  return (
    <AppShell
      title="Welcome to Raghav Ltd POS"
      subtitle="Multi-outlet operations hub with real-time billing and analytics."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "POS Billing",
            desc: "Fast cashier workflow with keyboard-friendly cart controls.",
            href: "/pos",
          },
          {
            title: "Admin Management",
            desc: "Control menu items, pricing, and worker assignments.",
            href: "/admin",
          },
          {
            title: "Owner Analytics",
            desc: "Track revenue trends across all outlets in real time.",
            href: "/owner",
          },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="surface group rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.desc}</p>
            <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Open dashboard →
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">System Capabilities</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>JWT-secured role access for workers, admins, and owners.</li>
            <li>Outlet-aware data partitioning with centralized PostgreSQL sync.</li>
            <li>Real-time sales KPIs with daily, weekly, and monthly drilldowns.</li>
          </ul>
        </div>
        <div className="surface rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Deployment Ready</h3>
          <p className="mt-4 text-sm text-muted">
            Designed for AWS, DigitalOcean, or Railway deployments with scalable API
            services and a modular Next.js frontend.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
              Cloud-ready
            </span>
            <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
              Modular API
            </span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
