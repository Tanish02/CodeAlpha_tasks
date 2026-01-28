import express from "express";

const app = express();

// middleware
app.use(express.json());

// health check
app.get("/", (_req, res) => {
  res.send("Restaurant Management API running...");
});

export default app;

// end code
