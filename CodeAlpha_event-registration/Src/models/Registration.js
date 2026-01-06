import { mongoose } from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    status: {
      type: String,
      enum: ["registered", "cancelled"],
      default: "registered",
    },
  },
  { timestamps: true }
);

// same user connot register for the same event more 2 times
registrationSchema.index({ user: 1, event: 1 }, { unique: true });

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;

// end code
