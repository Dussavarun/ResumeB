import mongoose from "mongoose";

const accomplishmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Accomplishment ||
  mongoose.model("Accomplishment", accomplishmentSchema);
