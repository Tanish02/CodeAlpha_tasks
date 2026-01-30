import express from "express";
import menuRoutes from "./routes/menu.routes";

const app = express();

app.use(express.json());

// testing api
app.get("/", (_req, res) => {
  res.send("Restaurant Management API Working....");
});

// routes
app.use("/api/menu", menuRoutes);

export default app;

// end code
