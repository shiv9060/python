import { Router } from "express";
import { createBillHandler } from "../controllers/billingController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.post("/", authenticate, authorize("worker", "admin"), createBillHandler);

export default router;
