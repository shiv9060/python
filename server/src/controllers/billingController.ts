import { Response } from "express";
import { z } from "zod";
import { AuthenticatedRequest } from "../middleware/auth";
import { createBill } from "../services/billingService";

const billSchema = z.object({
  paymentMode: z.enum(["cash", "upi", "card"]),
  items: z
    .array(
      z.object({
        menuItemId: z.string().min(1),
        name: z.string().min(1),
        quantity: z.number().int().positive(),
        price: z.number().positive(),
      })
    )
    .min(1),
});

export const createBillHandler = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const parseResult = billSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: "Invalid bill payload" });
  }

  const bill = await createBill({
    outletId: req.user.outletId,
    cashierId: req.user.userId,
    paymentMode: parseResult.data.paymentMode,
    items: parseResult.data.items,
  });

  return res.status(201).json(bill);
};
