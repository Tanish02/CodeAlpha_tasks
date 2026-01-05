import crypto from "crypto";
import express from "express";
import Url from "../models/Url.js";

const router = express.Router();

router.post("/shorten", async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({ message: "Long URL is missing" });
    }

    // random short code generation logic
    const shortCode = crypto.randomBytes(4).toString("hex");

    // saveing to Database
    const url = await Url.create({
      originalUrl: longUrl,
      shortCode,
    });

    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get("host")}/${url.shortCode}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;

// end code
