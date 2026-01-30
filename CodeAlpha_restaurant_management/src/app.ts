import express from "express";
import menuRoutes from "./routes/menu.routes";

const app = express();

// middleware
app.use(express.json());

// health check
app.get("/", (_req, res) => {
  res.send("Restaurant Management API running...");
});

// routes
app.use("/api/menu", menuRoutes);

export default app;

// end code
