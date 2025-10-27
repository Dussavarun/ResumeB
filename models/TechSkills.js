import mongoose from "mongoose";

const techSkillsSchema = new mongoose.Schema({
  programmingLanguages: [String],
  databases: [String],
  frameworks: [String],
  developerTools: [String],
  cloudAndDevOps: [String],
});

export default mongoose.models.TechSkills ||
  mongoose.model("TechSkills", techSkillsSchema);
