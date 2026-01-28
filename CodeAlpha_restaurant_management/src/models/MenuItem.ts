import mongoose, { Document } from "mongoose";
import { MenuItemSchema } from "../schemas/menu.schema";

export interface IMenuItem extends Document {
  name: string;
  price: number;
  category: string;
  stockQuantity: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const MenuItem = mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);

// end code
