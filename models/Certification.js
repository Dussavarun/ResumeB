import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
  title: String,
  provider: String,
  date: String,
  credentialUrl: String,
});

export default mongoose.models.Certification ||
  mongoose.model("Certification", certificationSchema);
