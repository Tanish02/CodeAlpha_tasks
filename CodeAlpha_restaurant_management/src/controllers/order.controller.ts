import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order";
import { MenuItem } from "../models/MenuItem";

// place orders
export const placeOrder = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { items } = req.body;
    /**
     * items = [
     *   { menuItemId: string, quantity: number }
     * ]
     */

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order items required" });
    }

    let totalAmount = 0;

    // Validate items & stock
    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItemId).session(
        session,
      );

      if (!menuItem || !menuItem.isAvailable) {
        throw new Error("Menu item not available");
      }

      if (menuItem.stockQuantity < item.quantity) {
        throw new Error(`Insufficient stock for ${menuItem.name}`);
      }

      totalAmount += menuItem.price * item.quantity;
    }



    // end code
