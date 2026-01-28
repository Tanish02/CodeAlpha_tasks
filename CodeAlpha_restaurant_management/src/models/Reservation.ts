import mongoose from "mongoose";
import { ReservationSchema } from "../schemas/reservation.schema";

export const Reservations = mongoose.model("Reservations", ReservationSchema);

// end code
