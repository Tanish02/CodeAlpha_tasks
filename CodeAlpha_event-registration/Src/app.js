import express from "express";

const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Event registration API route testing...");
});

// route
app.post("/", (req, res) => {
  res.send("Event registration API running...");
});

export default app;

// end code
