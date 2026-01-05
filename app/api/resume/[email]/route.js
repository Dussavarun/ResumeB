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

export async function POST(req, context) {
  try {
    await connectDB();
    const { email } = await context.params; // ✅ Added await
    const data = await req.json();

    console.log("📩 Incoming resume data:", JSON.stringify(data, null, 2));

    // 1️⃣ Find user
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2️⃣ Save or update PersonalInfo
    if (data.personalInfo) {
      const personalInfoData = {
        name: data.personalInfo.name,
        email: data.personalInfo.email,
        phone: data.personalInfo.phone,
        location: data.personalInfo.location,
        about: data.personalInfo.about,
        portfolio: data.personalInfo.links?.portfolio || "",
        github: data.personalInfo.links?.github || "",
        linkedin: data.personalInfo.links?.linkedin || "",
        leetcode: data.personalInfo.links?.leetcode || "",
        codeforces: data.personalInfo.links?.codeforces || "",
      };

      if (user.personalInfo) {
        await PersonalInfo.findByIdAndUpdate(user.personalInfo, personalInfoData, { new: true });
      } else {
        const personalInfoDoc = await PersonalInfo.create(personalInfoData);
        user.personalInfo = personalInfoDoc._id;
      }
    }

    // 3️⃣ Save or update TechSkills
    // if (data.skills) {
    //   if (user.techSkills) {
    //     await TechSkills.findByIdAndUpdate(user.techSkills, data.skills, { new: true });
    //   } else {
    //     const techSkillsDoc = await TechSkills.create(data.skills);
    //     user.techSkills = techSkillsDoc._id;
    //   }
    // }
 if (data.techSkills) {
    if (user.techSkills) {
    await TechSkills.findByIdAndUpdate(user.techSkills, data.techSkills, { new: true });
    } else {
     const techSkillsDoc = await TechSkills.create(data.techSkills);
      user.techSkills = techSkillsDoc._id;
    }
  }


    // 4️⃣ Replace Education
    if (data.education?.length) {
      await Education.deleteMany({ _id: { $in: user.education } });
      const educationDocs = await Education.insertMany(data.education);
      user.education = educationDocs.map((e) => e._id);
    }

    // 5️⃣ Replace Experience
    if (data.experience?.length) {
      await Experience.deleteMany({ _id: { $in: user.experience } });
      const experienceDocs = await Experience.insertMany(data.experience);
      user.experience = experienceDocs.map((e) => e._id);
    }

    // 6️⃣ Replace Projects
    if (data.projects?.length) {
      await Project.deleteMany({ _id: { $in: user.projects } });
      const projectDocs = await Project.insertMany(data.projects);
      user.projects = projectDocs.map((p) => p._id);
    }

    // 7️⃣ Save Certifications
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

    // 8️⃣ Save Accomplishments
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

    user.hasResume = true;

    // 9️⃣ Save user
    await user.save();

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("❌ Error saving resume:", error.message, error.stack);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// app/api/resume/[email]/route.js - GET method
export async function GET(req, context) {
  try {
    await connectDB();
    const { email } = await context.params;

    const user = await User.findOne({ email })
      .populate("personalInfo")
      .populate("education")
      .populate("experience")
      .populate("projects")
      .populate("techSkills")
      .populate("certifications")
      .populate("accomplishments")
      .lean();

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Restructure personalInfo to match Redux structure
    const personalInfo = user.personalInfo ? {
      name: user.personalInfo.name || user.personalInfo.fullName || "",
      email: user.personalInfo.email || "",
      phone: user.personalInfo.phone || "",
      location: user.personalInfo.location || user.personalInfo.address || "",
      about: user.personalInfo.about || user.personalInfo.summary || "",
      links: {
        portfolio: user.personalInfo.portfolio || "",
        github: user.personalInfo.github || "",
        linkedin: user.personalInfo.linkedin || "",
        leetcode: user.personalInfo.leetcode || "",
        codeforces: user.personalInfo.codeforces || "",
      }
    } : null;

    // Clean techSkills - remove MongoDB metadata
    const techSkills = user.techSkills ? {
      programmingLanguages: user.techSkills.programmingLanguages || [],
      databases: user.techSkills.databases || [],
      frameworks: user.techSkills.frameworks || [],
      developerTools: user.techSkills.developerTools || [],
      cloudAndDevOps: user.techSkills.cloudAndDevOps || [],
    } : null;

    const responseData = {
      personalInfo,
      hasResume : user.hasResume,
      education: (user.education || []).filter(e => e !== null),
      experience: (user.experience || []).filter(e => e !== null),
      projects: (user.projects || []).filter(p => p !== null),
      techSkills, // Send cleaned techSkills
      certifications: (user.certifications || []).filter(c => c !== null),
      accomplishments: (user.accomplishments || []).filter(a => a !== null),
    };

    console.log("📤 Sending techSkills:", techSkills);

    return NextResponse.json(responseData, { status: 200 });

  } catch (error) {
    console.error("❌ Error fetching user data:", error);
    return NextResponse.json({ 
      message: "Error fetching user data", 
      error: error.message 
    }, { status: 500 });
  }
}