import express from "express";
import {
  createMenuItem,
  deleteMenuItem,
  getMenu,
  updateMenuItem,
} from "../controllers/menu.controller";

const router = express.Router();

// menu routes
router.post("/", createMenuItem);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

router.get("/", getMenu); // customer get items

export default router;

// end code
