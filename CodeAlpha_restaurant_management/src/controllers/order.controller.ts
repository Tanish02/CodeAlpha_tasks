import { Request, Response } from "express";
import mongoose from "mongoose";
import { MenuItem } from "../models/MenuItem";
import { Order } from "../models/Order";

// Place Order
export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { items, tableId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(tableId)) {
      return res.status(400).json({ message: "Invalid tableId" });
    }

    let totalAmount = 0;
    const orderItems: any[] = [];

    for (const item of items) {
      const { menuItemId, quantity } = item;

      if (
        !mongoose.Types.ObjectId.isValid(menuItemId) ||
        !quantity ||
        quantity <= 0
      ) {
        return res.status(400).json({ message: "Invalid order item data" });
      }

      const menuItem = await MenuItem.findById(menuItemId);

      if (!menuItem || !menuItem.isAvailable) {
        return res.status(404).json({
          message: `Menu item not available`,
        });
      }

      if (menuItem.stockQuantity < quantity) {
        return res.status(400).json({
          message: `Insufficient stock for ${menuItem.name}`,
        });
      }

      // Reduce stock inventry
      menuItem.stockQuantity -= quantity;

      if (menuItem.stockQuantity === 0) {
        menuItem.isAvailable = false;
      }

      await menuItem.save();

      totalAmount += menuItem.price * quantity;

      orderItems.push({
        menuItem: menuItem._id,
        quantity,
        price: menuItem.price,
      });
    }

    const order = await Order.create({
      table: tableId,
      items: orderItems,
      totalAmount,
      status: "pending",
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Order failed",
      error: error.message,
    });
  }
};

// end code
