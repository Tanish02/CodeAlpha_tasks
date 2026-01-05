import express from "express";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL Shortener API is running!");
});

export default app;
