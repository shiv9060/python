import cors from "cors";
import express from "express";
import { env } from "./config/env";
import authRoutes from "./routes/authRoutes";
import menuRoutes from "./routes/menuRoutes";
import billingRoutes from "./routes/billingRoutes";
import reportRoutes from "./routes/reportRoutes";
import ownerRoutes from "./routes/ownerRoutes";

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: "2mb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "raghav-pos-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/owner", ownerRoutes);

app.listen(env.port, () => {
  console.log(`Raghav POS backend listening on ${env.port}`);
});
