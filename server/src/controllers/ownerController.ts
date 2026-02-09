import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { fetchOutletSales } from "../services/salesService";

export const getOwnerSummary = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 7);

  const outletSales = await fetchOutletSales(start, now);
  const totalRevenue = outletSales.reduce((sum, outlet) => sum + Number(outlet.totalSales), 0);
  const totalOrders = outletSales.reduce((sum, outlet) => sum + Number(outlet.orderCount), 0);

  return res.json({
    window: "last_7_days",
    totalRevenue,
    totalOrders,
    outlets: outletSales,
  });
};
