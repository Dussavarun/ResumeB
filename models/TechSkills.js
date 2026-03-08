// import mongoose from "mongoose";

// const techSkillsSchema = new mongoose.Schema({
//   programmingLanguages: [String],
//   databases: [String],
//   frameworks: [String],
//   developerTools: [String],
//   cloudAndDevOps: [String],
// });

// export default mongoose.models.TechSkills ||
//   mongoose.model("TechSkills", techSkillsSchema);

import mongoose from "mongoose";

const techSkillsSchema = new mongoose.Schema(
  {
    categories: {
      type: Map,
      of: new mongoose.Schema({
        title: { type: String, required: true },
        skills: [{ type: String }],
      }),
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.TechSkills ||
  mongoose.model("TechSkills", techSkillsSchema);