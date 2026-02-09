import { Request, Response } from "express";
import { z } from "zod";
import { createMenuItem, listMenuItems } from "../services/menuService";
import { AuthenticatedRequest } from "../middleware/auth";

const menuSchema = z.object({
  name: z.string().min(2),
  category: z.string().min(2),
  price: z.number().positive(),
  status: z.string().min(2),
});

export const getMenuItems = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const items = await listMenuItems(req.user.outletId);
  return res.json(items);
};

export const addMenuItem = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const parseResult = menuSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: "Invalid payload" });
  }

  const item = await createMenuItem({
    ...parseResult.data,
    outletId: req.user.outletId,
  });
  return res.status(201).json(item);
};

export const updateMenuItemStatus = async (req: Request, res: Response) => {
  return res.status(501).json({ message: "Update endpoint not implemented" });
};
