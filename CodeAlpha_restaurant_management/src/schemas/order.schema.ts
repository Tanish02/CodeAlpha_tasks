import { Schema, Types } from "mongoose";

const OrderSchema = new Schema(
  {
    table: {
      type: Types.ObjectId,
      ref: "Table",
      required: true,
    },

    items: [
      {
        menuItem: {
          type: Types.ObjectId,
          ref: "MenuItem",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

// end code

export { OrderSchema };
