import { Request, Response } from "express";
import { IMenuItem, MenuItem } from "../models/MenuItem";

// menu item
export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, price, category, stockQuantity } = req.body;

    if (!name || !price || !category || stockQuantity === undefined) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const menuItem: IMenuItem = await MenuItem.create({
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

// GET all menu items
export const getMenuItems = async (_req: Request, res: Response) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch menu items",
      error: error.message,
    });
  }
};

// UPDATE menu items ;
export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to update menu item",
      error: error.message,
    });
  }
};

// DELETE menu items ;
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
