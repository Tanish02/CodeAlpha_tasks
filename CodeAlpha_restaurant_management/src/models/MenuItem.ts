import mongoose from "mongoose";
import { MenuItemSchema } from "../schemas/menu.schema";

export const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

// end code
