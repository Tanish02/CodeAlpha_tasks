import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Url from "./models/Url.js";
import urlRoutes from "./routes/url.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api", urlRoutes);

// redirect route root

app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).send("URL not found");
    }

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

app.get("/", (req, res) => {
  res.send("URL Shortener API is running!");
});

export default app;
