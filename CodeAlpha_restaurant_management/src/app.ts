import express from "express";
import menuRoutes from "./routes/menu.routes";
import orderRoutes from "./routes/order.routes";
import tableRoutes from "./routes/table.routes";

const app = express();

app.use(express.json());

// testing api
app.get("/", (_req, res) => {
  res.send("Restaurant Management API Working....");
});

// routes
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/tables", tableRoutes);

export default app;

// end code
