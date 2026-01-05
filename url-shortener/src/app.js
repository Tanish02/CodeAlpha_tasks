import express from "express";
import urlRoutes from "./routes/url.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", urlRoutes);

app.get("/", (req, res) => {
  res.send("URL Shortener API is running!");
});

export default app;
