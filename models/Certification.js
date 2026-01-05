import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    provider: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
    },
    credentialUrl: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Certification ||
  mongoose.model("Certification", certificationSchema);
