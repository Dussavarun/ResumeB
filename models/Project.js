import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },

  // 🔥 FIX: description as bullet points
  description: {
    type: [String],
    required: true,
  },
  
  technologies : {
    type : [String],
    required : false
  },

  link: { type: String },
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
