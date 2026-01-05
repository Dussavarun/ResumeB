// import mongoose from "mongoose";

// const educationSchema = new mongoose.Schema({
//   institute : String,
//   degree: String,
//   // fieldOfStudy: String,
//   startYear: String,
//   endYear: String,
//   location: String,
//   gpa: String,
//   // percentage: Number,
// });

// export default mongoose.models.Education ||
//   mongoose.model("Education", educationSchema);

// models/Education.js
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  institution: String,  // Changed from "institute"
  degree: String,
  startYear: String,
  endYear: String,
  location: String,
  gpa: String,
  duration: String,  // Optional: for display purposes
});

export default mongoose.models.Education ||
  mongoose.model("Education", educationSchema);