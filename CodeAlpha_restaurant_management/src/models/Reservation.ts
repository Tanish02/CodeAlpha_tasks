import mongoose, { Document, Types } from "mongoose";
import { ReservationSchema } from "../schemas/reservation.schema";

/**
 * Reservation document interface
 */
export interface IReservation extends Document {
  customerName: string;
  customerPhone: string;
  table: Types.ObjectId;
  dateTime: Date;
  status: "active" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export const Reservation = mongoose.model<IReservation>(
  "Reservation",
  ReservationSchema,
);

// end code
