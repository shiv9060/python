import { Minus, Plus, Printer, Smartphone, Wallet } from "lucide-react";
import AppShell from "@/components/AppShell";

const menuItems = [
  { name: "Paneer Tikka", category: "Starters", price: "₹280" },
  { name: "Masala Dosa", category: "Mains", price: "₹220" },
  { name: "Butter Naan", category: "Breads", price: "₹60" },
  { name: "Dal Makhani", category: "Mains", price: "₹240" },
  { name: "Mango Lassi", category: "Beverages", price: "₹120" },
  { name: "Gulab Jamun", category: "Desserts", price: "₹90" },
];

const cart = [
  { item: "Paneer Tikka", qty: 2, price: "₹560" },
  { item: "Dal Makhani", qty: 1, price: "₹240" },
  { item: "Butter Naan", qty: 3, price: "₹180" },
];

const payments = [
  { label: "Cash", icon: Wallet },
  { label: "UPI", icon: Smartphone },
  { label: "Card", icon: Printer },
];

export default function PosPage() {
  return (
    <AppShell
      title="POS Billing"
      subtitle="Fast billing interface with outlet-aware order saving."
    >
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-6">
          <div className="surface rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Outlet 2 · Dining</h3>
                <p className="text-xs text-muted">Bill auto-saved with date/time.</p>
              </div>
              <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                Keyboard Mode: ON
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  className="surface-elevated flex flex-col gap-2 rounded-2xl p-4 text-left transition hover:border-[color:var(--accent)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-[color:var(--accent)]">{item.price}</span>
                  </div>
                  <p className="text-base font-semibold">{item.name}</p>
                  <span className="text-xs text-muted">Tap or press enter to add</span>
                </button>
              ))}
            </div>
          </div>
          <div className="surface rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Current Cart</h3>
            <div className="mt-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.item}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{item.item}</p>
                    <p className="text-xs text-muted">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="rounded-full border border-[color:var(--border)] p-2">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-semibold">{item.qty}</span>
                    <button className="rounded-full border border-[color:var(--border)] p-2">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="surface rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Bill Summary</h3>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹980</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₹98</span>
              </div>
              <div className="flex justify-between font-semibold text-[color:var(--text-primary)]">
                <span>Total</span>
                <span>₹1,078</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded-xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-white">
              Generate Bill
            </button>
            <p className="mt-2 text-xs text-muted">
              Bills auto-saved with outlet + timestamp for report sync.
            </p>
          </div>
          <div className="surface rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Payment Mode</h3>
            <div className="mt-4 grid gap-3">
              {payments.map((method) => (
                <button
                  key={method.label}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <method.icon size={16} />
                    {method.label}
                  </span>
                  <span className="text-xs text-muted">Select</span>
                </button>
              ))}
            </div>
          </div>
          <div className="surface rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Auto-Save Status</h3>
            <p className="mt-3 text-sm text-muted">
              Last bill synced 16 seconds ago. Outlet database is online.
            </p>
            <div className="mt-4 rounded-xl bg-[color:var(--accent-soft)] px-4 py-3 text-xs font-semibold text-[color:var(--accent)]">
              Real-time sync enabled for all outlets.
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
