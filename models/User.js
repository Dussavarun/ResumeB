import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    avatarUrl: { type: String },


    hasResume : {type : Boolean , default : false},
    
    personalSummary : {type : mongoose.Schema.Types.ObjectId , ref : "PersonalSummary"},
    
    personalInfo: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalInfo" },
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
    experience: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    techSkills: { type: mongoose.Schema.Types.ObjectId, ref: "TechSkills" },
    certifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Certification" },
    ],
    accomplishments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Accomplishment" },
    ],
    resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resume" }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

