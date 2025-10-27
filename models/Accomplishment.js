import mongoose from "mongoose";

const accomplishmentSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.models.Accomplishment ||
  mongoose.model("Accomplishment", accomplishmentSchema);
