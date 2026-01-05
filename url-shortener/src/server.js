import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5050;

// DB LOGIC
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
