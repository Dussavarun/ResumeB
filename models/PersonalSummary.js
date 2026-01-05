// models/PersonalSummary.js
import mongoose from "mongoose";

const personalSummarySchema = new mongoose.Schema({
  summary: {
    type: String,
    trim: true,
    maxlength: 600,
  },
});

export default mongoose.models.PersonalSummary ||
  mongoose.model("PersonalSummary", personalSummarySchema);
