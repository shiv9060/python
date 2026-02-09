import { Router } from "express";
import { addMenuItem, getMenuItems } from "../controllers/menuController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.get("/", authenticate, getMenuItems);
router.post("/", authenticate, authorize("admin"), addMenuItem);

export default router;
