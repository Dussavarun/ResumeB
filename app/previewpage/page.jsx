"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { Save, Download, ArrowLeft } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

// === REDUX ACTIONS (You need to import these from your Redux slices) ===
import { setPersonalField, setProfileField } from "../../store/slices/userSlice";
import { addEducation } from "../../store/slices/educationSlice";
import { addExperience } from "../../store/slices/experienceSlice";
import { addProject } from "../../store/slices/projectSlice";
import { addSkill } from "../../store/slices/techSkillsSlice";
import { addCertification } from "../../store/slices/Certificate";
import { addAccomplishment } from "../../store/slices/Acomplishment";


// === FORM COMPONENTS ===
import ProfileForm from "../../components/ProfileForm";
import EducationForm from "../../components/EducationForm";
import ExperienceForm from "../../components/ExperienceForm";
import ProjectForm from "../../components/ProjectForm";
import TechnicalSkillForm from "../../components/TechnicalSkillForm";
import AccomplishmentCertificationForm from "@/components/AcompCertForm";

// === TEMPLATE COMPONENTS ===
import ModernTemplate from "../../my_templates/ModernTemplate";
import ClassicTemplate from "../../my_templates/classic";
import PikachuTemplate from "../../my_templates/Pickachu";
import GengarTemplate from "../../my_templates/GengarTemplate";
// import ElegantTemplate from "@/components/templates/ElegantTemplate";

// ===========================================
export default function ResumePreviewPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const { user , isLoaded} = useUser();

  // Get template from URL params
  const templateFromUrl = searchParams.get("template") || "modern";
  const templateName = searchParams.get("name") || "Modern";

  // === Redux Data ===
  const personalInfo = useSelector((state) => state.user.personalInfo);
  const education = useSelector((state) => state.education.education);
  const experiences = useSelector((state) => state.experience.experiences);
  const projects = useSelector((state) => state.project.projects);
  const skills = useSelector((state) => state.techskills);
  const certifications = useSelector(
    (state) => state.certifications?.certifications || []
  );
  const accomplishments = useSelector(
    (state) => state.accomplishments?.accomplishments || []
  );

  // === Templates Map ===
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    gengar: GengarTemplate,
    pikachu: PikachuTemplate,
    // elegant: ElegantTemplate,
  };

  const ActiveTemplate = templates[templateFromUrl] || templates.modern;

    useEffect(() => {
    if (isLoaded && user) {
      const email = user.primaryEmailAddress?.emailAddress;
      if (email) {
        loadResumeDataFromDB(email);
      } else {
        console.log("Email not found for user");
        setLoading(false);
      }
    }
  }, [isLoaded, user])

  const loadResumeDataFromDB = async (email) => {
  try {
    const res = await axios.get(`/api/resume/${email}`);
    const savedData = res.data;
    console.log("saved data:" , savedData);

    if (savedData) {
      console.log("✅ Loaded Resume Data:", savedData);
      // if (savedData.personalInfo)
        dispatch(setProfileField(savedData.personalInfo));

      // if (Array.isArray(savedData.education))
        dispatch(addEducation(savedData.education));

      // if (Array.isArray(savedData.experience))
        dispatch(addExperience(savedData.experience));

      // if (Array.isArray(savedData.projects))
        dispatch(addProject(savedData.projects));

      // if (savedData.skills)
        dispatch(addSkill(savedData.skills));

      // if (Array.isArray(savedData.accomplishments))
        dispatch(addAccomplishment(savedData.accomplishments));

      // if (Array.isArray(savedData.certifications))
        dispatch(addCertification(savedData.certifications));
    }
  } catch (err) {
    console.error("❌ Error loading data:", err);
  } finally {
    setLoading(false);
  }
};


  // === Save Resume ===
  const saveResume = async () => {
    if (!user) return alert("Please log in first.");
    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) return alert("User email not found.");

    const dataTosave = {
      personalInfo,
      education,
      experience: experiences,
      projects,
      skills,
      certifications,
      accomplishments,
      template: templateFromUrl, // Save selected template
    };

    try {
      const { data } = await axios.post(`/api/resume/${email}`, dataTosave);
      alert("✅ Resume saved successfully!");
      console.log(data);
    } catch (error) {
      console.error("❌ Error saving resume:", error.message);
    }
  };

  // === Export to PDF (To be implemented) ===
  const exportPDF = () => {
    alert("PDF export functionality coming soon!");
  };

  // === Navigate back to template selection ===
  const handleBack = () => {
    router.push("/template-select"); // Adjust path as needed
  };

  // === Loading State ===
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your resume...</p>
        </div>
      </div>
    );
  }

  // === Main Render ===
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Resume Builder
            </h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Template: {templateName}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Save Button */}
            <button
              onClick={saveResume}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>

            {/* Export PDF Button */}
            <button
              onClick={exportPDF}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 flex overflow-hidden">
        {/* === Left Panel (Form Editor) === */}
        <div className="w-1/2 bg-white border-r border-gray-200 overflow-auto">
          <div className="p-6">
            {/* Section Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
              {[
                "profile",
                "education",
                "experience",
                "projects",
                "skills",
                "certifications",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                    activeSection === section
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Dynamic Form Rendering */}
            {activeSection === "profile" && <ProfileForm />}
            {activeSection === "education" && <EducationForm />}
            {activeSection === "experience" && <ExperienceForm />}
            {activeSection === "projects" && <ProjectForm />}
            {activeSection === "skills" && <TechnicalSkillForm />}
            {activeSection === "certifications" && (
              <AccomplishmentCertificationForm />
            )}
          </div>
        </div>

        {/* === Right Panel (Live Template Preview) === */}
        <div className="w-1/2 bg-gray-100 overflow-auto p-8">
          <div className="flex justify-center items-start">
            <div
              className="bg-white shadow-2xl"
              style={{ width: "8.5in", minHeight: "11in" }}
            >
              <ActiveTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}