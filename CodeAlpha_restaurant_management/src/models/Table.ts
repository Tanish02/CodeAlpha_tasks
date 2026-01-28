import mongoose, { Document } from "mongoose";
import { TableSchema } from "../schemas/table.schema";

export interface ITable extends Document {
  tableNumber: number;
  capacity: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const Table = mongoose.model<ITable>("Table", TableSchema);

// end code
