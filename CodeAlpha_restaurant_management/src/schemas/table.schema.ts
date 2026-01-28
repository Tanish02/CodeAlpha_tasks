import { Schema } from "mongoose";

const TableSchema = new Schema(
  {
    tableNumer: {
      type: Number,
      required: true,
      unique: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export { TableSchema };

// end code
