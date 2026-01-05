import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL Shortener API is running!");
});

export default app;
