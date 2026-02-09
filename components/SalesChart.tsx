"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    {
      label: "Outlet 1",
      data: [4200, 5200, 4800, 6100, 7200, 8400, 7800],
      backgroundColor: "rgba(56, 189, 248, 0.6)",
      borderRadius: 12,
    },
    {
      label: "Outlet 2",
      data: [3800, 4500, 5100, 5600, 6900, 7300, 6900],
      backgroundColor: "rgba(34, 197, 94, 0.6)",
      borderRadius: 12,
    },
    {
      label: "Outlet 3",
      data: [3100, 3900, 4200, 5000, 6100, 6400, 6200],
      backgroundColor: "rgba(245, 158, 11, 0.6)",
      borderRadius: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: { color: "#94a3b8" },
    },
  },
  scales: {
    y: {
      ticks: { color: "#94a3b8" },
      grid: { color: "rgba(148, 163, 184, 0.2)" },
    },
    x: {
      ticks: { color: "#94a3b8" },
      grid: { display: false },
    },
  },
};

export default function SalesChart() {
  return (
    <div className="surface rounded-2xl p-5 shadow-soft">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Weekly Sales</p>
        <h3 className="text-lg font-semibold">Outlet Performance Overview</h3>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
