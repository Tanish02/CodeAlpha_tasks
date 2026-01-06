import express from "express";

const app = express();

app.use(express.json());

// route
app.post("/", (req, res) => {
  res.send("Event registration API running...");
});

export default app;

// end code
