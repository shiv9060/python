import { Request, Response } from "express";
import { z } from "zod";
import { fetchOutletSales } from "../services/salesService";

const rangeSchema = z.object({
  from: z.string().datetime(),
  to: z.string().datetime(),
});

export const getOutletSales = async (req: Request, res: Response) => {
  const parseResult = rangeSchema.safeParse(req.query);
  if (!parseResult.success) {
    return res.status(400).json({ message: "Invalid date range" });
  }

  const from = new Date(parseResult.data.from);
  const to = new Date(parseResult.data.to);
  const sales = await fetchOutletSales(from, to);

  return res.json({ range: parseResult.data, outlets: sales });
};
