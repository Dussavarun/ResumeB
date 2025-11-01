// this is used to save and retrieve tha data from the user db

import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import PersonalInfo from "../../../../models/PersonalInfo";
import Education from "../../../../models/Education";
import Experience from "../../../../models/Experience";
import Project from "../../../../models/Project";
import TechSkills from "../../../../models/TechSkills";
import Certification from "../../../../models/Certification";
import Accomplishment from "../../../../models/Accomplishment";

export async function POST(req, { params }) {
  try {
    await connectDB();
    const { email } = params;
    const data = await req.json();

    console.log("📩 Incoming resume data:", JSON.stringify(data, null, 2));

    // 1️⃣ Find user
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2️⃣ Save or update PersonalInfo
    if (data.personalInfo) {
      if (user.personalInfo) {
        await PersonalInfo.findByIdAndUpdate(user.personalInfo, data.personalInfo, { new: true });
      } else {
        const personalInfoDoc = await PersonalInfo.create(data.personalInfo);
        user.personalInfo = personalInfoDoc._id;
      }
    }

    // 3️⃣ Save or update TechSkills
    if (data.techSkills) {
      if (user.techSkills) {
        await TechSkills.findByIdAndUpdate(user.techSkills, data.techSkills, { new: true });
      } else {
        const techSkillsDoc = await TechSkills.create(data.techSkills);
        user.techSkills = techSkillsDoc._id;
      }
    }

    // 4️⃣ Replace Education, Experience, and Projects
    if (data.education?.length) {
      await Education.deleteMany({ _id: { $in: user.education } });
      const educationDocs = await Education.insertMany(data.education);
      user.education = educationDocs.map((e) => e._id);
    }

    if (data.experience?.length) {
      await Experience.deleteMany({ _id: { $in: user.experience } });
      const experienceDocs = await Experience.insertMany(data.experience);
      user.experience = experienceDocs.map((e) => e._id);
    }

    if (data.projects?.length) {
      await Project.deleteMany({ _id: { $in: user.projects } });
      const projectDocs = await Project.insertMany(data.projects);
      user.projects = projectDocs.map((p) => p._id);
    }


// 6️⃣ Save Certifications
if (data.certifications) {
  if (data.certifications.length > 0) {
    await Certification.deleteMany({ _id: { $in: user.certifications } });
    const certificationDocs = await Certification.insertMany(data.certifications);
    user.certifications = certificationDocs.map((c) => c._id);
  } else {
    await Certification.deleteMany({ _id: { $in: user.certifications } });
    user.certifications = [];
  }
}

// 7️⃣ Save Accomplishments
if (data.accomplishments) {
  if (data.accomplishments.length > 0) {
    await Accomplishment.deleteMany({ _id: { $in: user.accomplishments } });
    const accomplishmentDocs = await Accomplishment.insertMany(data.accomplishments);
    user.accomplishments = accomplishmentDocs.map((a) => a._id);
  } else {
    await Accomplishment.deleteMany({ _id: { $in: user.accomplishments } });
    user.accomplishments = [];
  }
}

    // 5️⃣ Save user
    await user.save();

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("❌ Error saving resume:", error.message, error.stack);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



export async function GET(req, { params }) {
  try {
    await connectDB();
    const { email } = params;

    const user = await User.findOne({ email })
      .populate("personalInfo")
      .populate("education")
      .populate("experience")
      .populate("projects")
      .populate("certifications")
      .populate("accomplishments");

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error fetching user data" }, { status: 500 });
  }
}