import { Schema, Types } from "mongoose";
const ReservationSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    customerPhone: {
      type: String,
      required: true,
    },

    table: {
      type: Types.ObjectId,
      ref: "Table",
      required: true,
    },

    dateTime: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "cancelled"],
      default: "active",
    },
  },
  { timestamps: true },
);

// end code

export { ReservationSchema };
