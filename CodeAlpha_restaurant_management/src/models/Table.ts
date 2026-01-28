import mongoose from "mongoose";
import { TableSchema } from "../schemas/table.schema";

export const Table = mongoose.model("Table", TableSchema);

// end code
