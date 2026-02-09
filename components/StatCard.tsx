import { ReactNode } from "react";
import clsx from "clsx";

export default function StatCard({
  title,
  value,
  change,
  icon,
  accent,
}: {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  accent?: "success" | "warning" | "info";
}) {
  return (
    <div className="surface rounded-2xl p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
        </div>
        <div className="rounded-full bg-[color:var(--accent-soft)] p-2 text-[color:var(--accent)]">
          {icon}
        </div>
      </div>
      <p
        className={clsx("mt-3 text-xs font-semibold", {
          "text-[color:var(--success)]": accent === "success",
          "text-[color:var(--warning)]": accent === "warning",
          "text-[color:var(--accent)]": !accent || accent === "info",
        })}
      >
        {change}
      </p>
    </div>
  );
}
