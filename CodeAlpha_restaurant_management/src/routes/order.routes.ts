import express from "express";
import { placeOrder } from "../controllers/order.controller";

const router = express.Router();

// Customer
router.post("/", placeOrder);

// // Admin
// router.get("/", getOrders);

export default router;

// end code
