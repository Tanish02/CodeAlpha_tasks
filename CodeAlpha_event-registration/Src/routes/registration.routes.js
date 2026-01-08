import express from "express";
import mongoose from "mongoose";
import Event from "../models/Event.js";
import Registration from "../models/Registration.js";
import User from "../models/User.js";

const router = express.Router();

// registration users for events
router.post("/", async (req, res) => {
  try {
    const { name, email, eventId } = req.body;

    if (!name || !email || !eventId) {
      return res.status(400).json({
        message: "name, email and eventId are required",
      });
    }
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({
        message: "Invalid eventId format",
      });
    }

    // event check if exist
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // check capacity
    const activeRegistrations = await Registration.countDocuments({
      event: eventId,
      status: "registered",
    });

    if (activeRegistrations >= event.capacity) {
      return res.status(400).json({
        message: "Event capacity is full",
      });
    }

    // create user/ find
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }

    // create registration
    const registration = await Registration.create({
      user: user._id,
      event: event._id,
      status: "registered",
    });
    res.status(201).json({
      message: "Registration successful",
      registration,
    });
  } catch (error) {
    // duplicate registration
    if (error.code === 11000) {
      return res.status(400).json({
        message: "User is already registered for this event",
      });
    }
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
});

// Event History
router.get("/history/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.json([]);
    }

    const history = await Registration.find({
      user: user._id,
    })
      .populate("event")
      .sort({ createdAt: -1 });

    res.json(history);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch event history",
      error: error.message,
    });
  }
});

// Cancel registration
router.delete("/:id", async (req, res) => {
  try {
    //. Validate registration id
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid registration ID",
      });
    }

    // Find registration
    const registration = await Registration.findById(req.params.id);

    if (!registration) {
      return res.status(404).json({
        message: "Registration not found",
      });
    }

    // Cancel registration
    registration.status = "cancelled";
    await registration.save();

    res.json({
      message: "Registration cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Cancellation failed",
      error: error.message,
    });
  }
});

export default router;
// end code
