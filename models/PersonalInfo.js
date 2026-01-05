// import mongoose from "mongoose";

// const personalInfoSchema = new mongoose.Schema({
//   email: String,
//   phone: String,
//   dob: Date,
//   address: String,
//   summary: String,
//   linkedin: String,
//   github: String,
//   portfolio: String,
//   twitter: String,
//   languages: [String],
//   interests: [String],
//   skills: [String],
//   fullName: String,
//   title: String,
// });

// export default mongoose.models.PersonalInfo ||
//   mongoose.model("PersonalInfo", personalInfoSchema);


// models/PersonalInfo.js
import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
  name: String,  // Changed from "fullName"
  email: String,
  phone: String,
  location: String,  // Changed from "address"
  about: String,  // Changed from "summary"
  // Flatten links - store directly in PersonalInfo
  portfolio: String,
  github: String,
  linkedin: String,
  leetcode: String,
  codeforces: String,
  // Keep these if you still need them
  dob: Date,
  address: String,
  twitter: String,
  languages: [String],
  interests: [String],
  skills: [String],
  title: String,
});

export default mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", personalInfoSchema);