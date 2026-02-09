import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Raghav Ltd | Restaurant POS Suite",
  description: "Modern POS, admin, and owner dashboards for multi-outlet restaurant operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-dark">
      <body className="min-h-screen bg-[color:var(--background)]">
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-[color:var(--border)] px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Raghav Ltd</p>
              <h1 className="text-lg font-semibold">Restaurant POS Suite</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">Live Outlet Monitor</p>
                <p className="text-xs text-muted">3 outlets · Real-time sync</p>
              </div>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
