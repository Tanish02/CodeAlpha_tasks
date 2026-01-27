import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app.js";
import connectDB from "./config/db.js";

//console.log("MONGO_URL =", process.env.MONGO_URL);
//console.log(process.env.MONGO_URL);

const PORT = process.env.PORT || 5050;

// DB LOGIC
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
