import { Router } from "express";
import {
  createMenuItem,
  deleteMenuItem,
  getMenuItems,
  updateMenuItem,
} from "../controllers/menu.controller";

const router = Router();

// menu routes
router.post("/", createMenuItem);
router.get("/", getMenuItems);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

export default router;

// end code
