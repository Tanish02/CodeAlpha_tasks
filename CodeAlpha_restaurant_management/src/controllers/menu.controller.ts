import { Request, Response } from "express";
import { MenuItem } from "../models/MenuItem";

// get menu costumer

export const getMenu = async (_req: Request, res: Response) => {
  try {
    const menu = await MenuItem.find({ isAvailable: true });
    res.json(menu);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch menu",
      error: error.message,
    });
  }
};

// add menu items Admin
export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, price, category, stockQuantity } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        message: "name, price and category are required",
      });
    }

    const menuItem = await MenuItem.create({
      name,
      price,
      category,
      stockQuantity,
    });

    res.status(201).json(menuItem);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

// update menu items Admin
export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updatedItem);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to update menu item",
      error: error.message,
    });
  }
};

// delete menu items Admin
export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const deleted = await MenuItem.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json({ message: "Menu item deleted" });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to delete menu item",
      error: error.message,
    });
  }
};

// end code
