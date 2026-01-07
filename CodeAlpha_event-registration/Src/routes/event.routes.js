import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// create event
router.post("/", async (req, res) => {
  try {
    const { title, description, date, capacity, location } = req.body;

    if (!title || !date || !location || !capacity) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }
    const event = await Event.create({
      title,
      description,
      date,
      capacity,
      location,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
});

// get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
});

// get single event by id
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch event",
      error: error.message,
    });
  }
});

export default router;

// end code
