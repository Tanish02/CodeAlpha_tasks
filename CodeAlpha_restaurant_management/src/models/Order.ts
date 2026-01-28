import mongoose, { Document, Types } from "mongoose";
import { OrderSchema } from "../schemas/order.schema";

export interface IOrderItem {
  menuItem: Types.ObjectId;
  quantity: number;
}

export interface IOrder extends Document {
  table: Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: "pending" | "preparing" | "served" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export const Order = mongoose.model<IOrder>("Order", OrderSchema);

// end code
