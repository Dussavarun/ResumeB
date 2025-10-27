import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  startDate: String,
  endDate: String,
  responsibilities: [String],
  location: String,
});

export default mongoose.models.Experience ||
  mongoose.model("Experience", experienceSchema);
