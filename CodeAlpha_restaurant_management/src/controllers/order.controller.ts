import { Request, Response } from "express";
import mongoose from "mongoose";
import { MenuItem } from "../models/MenuItem";
import { Order } from "../models/Order";

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

    // Deduct inventory
    for (const item of items) {
      await MenuItem.findByIdAndUpdate(
        item.menuItemId,
        { $inc: { stockQuantity: -item.quantity } },
        { session },
      );
    }

    // Create order
    const order = await Order.create(
      [
        {
          items,
          totalAmount,
          status: "PLACED",
        },
      ],
      { session },
    );

    await session.commitTransaction();

    res.status(201).json({
      message: "Order placed successfully",
      order: order[0],
    });
  } catch (error: any) {
    await session.abortTransaction();

    res.status(400).json({
      message: "Order failed",
      error: error.message,
    });
  } finally {
    session.endSession();
  }
};

// view all oreders admin
export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("items.menuItemId");
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

// end code
