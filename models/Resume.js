import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true },
    title: String,
    userId: { type: String, required: true },
    data: mongoose.Schema.Types.Mixed, // for flexible JSON
    type: String,
    previewUrl: String,
  },
  { timestamps: true }
);

export default mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
