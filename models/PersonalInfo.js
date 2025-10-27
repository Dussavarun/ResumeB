import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
  email: String,
  phone: String,
  dob: Date,
  address: String,
  summary: String,
  linkedin: String,
  github: String,
  portfolio: String,
  twitter: String,
  languages: [String],
  interests: [String],
  skills: [String],
  fullName: String,
  title: String,
});

export default mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", personalInfoSchema);
