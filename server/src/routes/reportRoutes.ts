import { Router } from "express";
import { getOutletSales } from "../controllers/reportController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.get("/outlets", authenticate, authorize("admin", "owner"), getOutletSales);

export default router;
