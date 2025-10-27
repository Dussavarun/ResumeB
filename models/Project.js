// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema({
//   title: String,
//   description: [String],
//   technologies: [String],
//   link: String,
// });

// export default mongoose.models.Project ||
//   mongoose.model("Project", projectSchema);

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  impact: { type: String },
  link: { type: String },
});

export default mongoose.models.Project ||
mongoose.model("Project", projectSchema);
