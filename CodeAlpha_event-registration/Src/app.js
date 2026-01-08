import express from "express";
import eventRoutes from "./routes/event.routes.js";
import registrationRoutes from "./routes/registration.routes.js";

const app = express();

app.use(express.json());

// // test route
// app.get("/", (req, res) => {
//   res.send("Event registration API route testing...");
// });

// check API status if working or not on 5050 port
app.get("/", (req, res) => {
  res.send("Event registration API running...");
});

// routes
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);

export default app;

// end code
