import { Router } from "express";
import { getOwnerSummary } from "../controllers/ownerController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.get("/summary", authenticate, authorize("owner"), getOwnerSummary);

export default router;
