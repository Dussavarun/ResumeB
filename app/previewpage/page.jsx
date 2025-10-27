"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Eye, Save, Download, ArrowLeft } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

import ProfileForm from "../../components/ProfileForm";
import EducationForm from "../../components/EducationForm";
import ExperienceForm from "../../components/ExperienceForm";
import ProjectForm from "../../components/ProjectForm";
import TechnicalSkillForm from "../../components/TechnicalSkillForm";

// Import your Redux actions
import { setProfileField } from "../../store/slices/userSlice";
import { setEducation } from "../../store/slices/educationSlice";
import { setExperiences } from "../../store/slices/experienceSlice";
import { setProjects } from "../../store/slices/projectSlice";
import { setTechSkills } from "../../store/slices/techSkillsSlice";
import {addAccomplishment} from "../../store/slices/Acomplishment";
import { addCertification } from "@/store/slices/Certificate";

// ============= TEMPLATE COMPONENT =============
const ModernTemplate = () => {
  const personalInfo = useSelector((state) => state.user?.personalInfo || {});
  const education = useSelector((state) => state.education?.education);
  const experiences = useSelector((state) => state.experience?.experiences);
  const projects = useSelector((state) => state.project?.projects);
  const skills = useSelector((state) => state.techskills);

  return (
    <div className="bg-white p-8 shadow-lg h-full overflow-auto text-sm">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {personalInfo.name}
        </h1>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 mb-2">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-blue-600">
          {personalInfo.links?.portfolio && (
            <a href={personalInfo.links.portfolio} className="hover:underline">
              Portfolio
            </a>
          )}
          {personalInfo.links?.github && (
            <a href={personalInfo.links.github} className="hover:underline">
              GitHub
            </a>
          )}
          {personalInfo.links?.linkedin && (
            <a href={personalInfo.links.linkedin} className="hover:underline">
              LinkedIn
            </a>
          )}
          {personalInfo.links?.leetcode && (
            <a href={personalInfo.links.leetcode} className="hover:underline">
              LeetCode
            </a>
          )}
          {personalInfo.links?.codeforces && (
            <a href={personalInfo.links.codeforces} className="hover:underline">
              Codeforces
            </a>
          )}
        </div>
      </div>

      {/* Education */}
      {education?.length > 0 && (
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Education
          </h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-900">{edu.institution}</h4>
                  <div className="text-gray-700">{edu.degree}</div>
                  {edu.gpa && (
                    <div className="text-gray-600 text-xs">GPA: {edu.gpa}</div>
                  )}
                </div>
                <div className="text-right text-xs text-gray-600">
                  <div>{edu.duration}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Technical Skills */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
          Technical Skills
        </h3>
        <div className="space-y-1 text-xs">
          {skills.programmingLanguages?.length > 0 && (
            <div>
              <span className="font-semibold">Languages:</span>{" "}
              {skills.programmingLanguages.join(", ")}
            </div>
          )}
          {skills.frameworks?.length > 0 && (
            <div>
              <span className="font-semibold">Frameworks:</span>{" "}
              {skills.frameworks.join(", ")}
            </div>
          )}
          {skills.databases?.length > 0 && (
            <div>
              <span className="font-semibold">Databases:</span>{" "}
              {skills.databases.join(", ")}
            </div>
          )}
          {skills.developerTools?.length > 0 && (
            <div>
              <span className="font-semibold">Tools:</span>{" "}
              {skills.developerTools.join(", ")}
            </div>
          )}
          {skills.cloudAndDevOps?.length > 0 && (
            <div>
              <span className="font-semibold">Cloud & DevOps:</span>{" "}
              {skills.cloudAndDevOps.join(", ")}
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      {experiences?.length > 0 && (
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Experience
          </h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="font-bold text-gray-900">{exp.role}</h4>
                  <div className="text-blue-600">
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <span className="text-xs text-gray-600">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5">
                {exp.responsibilities?.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Projects
          </h3>
          {projects.map((project, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex items-start gap-2">
                <h4 className="font-bold text-gray-900">{project.title}</h4>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 text-xs hover:underline"
                  >
                    Link
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-700">{project.description}</p>
              {project.impact && (
                <p className="text-xs text-gray-600 italic">{project.impact}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============= PREVIEW PAGE COMPONENT =============
export default function ResumePreviewPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const { user } = useUser();

  // Get all data from Redux store
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

  // Load resume data on mount
  useEffect(() => {
    loadResumeData();
  }, []);

  const loadResumeData = async () => {
    try {
      // Try to get saved data from storage
      const saved = await window.storage.get("user-resume");

      if (saved && saved.value) {
        const data = JSON.parse(saved.value);

        // Load saved data into Redux store
        if (data.personalInfo) {
          // Load basic fields
          Object.keys(data.personalInfo).forEach((field) => {
            if (field !== "links") {
              dispatch(
                setProfileField({ field, value: data.personalInfo[field] })
              );
            }
          });

          // Load links
          if (data.personalInfo.links) {
            Object.keys(data.personalInfo.links).forEach((field) => {
              dispatch(
                setProfileField({
                  field,
                  value: data.personalInfo.links[field],
                })
              );
            });
          }
        }

        if (data.education) {
          dispatch(setEducation(data.education));
        }

        if (data.experiences) {
          dispatch(setExperiences(data.experiences));
        }

        if (data.projects) {
          dispatch(setProjects(data.projects));
        }

        if (data.skills) {
          dispatch(setTechSkills(data.skills));
        }
      }
      // If no saved data, Redux will use initial state from slices
    } catch (error) {
      console.log(
        "No saved data found, using default from Redux store:",
        error
      );
      // Redux store already has initial state from slices
    } finally {
      setLoading(false);
    }
  };

  const saveResume = async () => {
    // const { user } = useUser();
    if (!user) return alert("Please log in first.");

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) return alert("User email not found.");

    const dataTosave = {
      personalInfo,
      education,
      experience: experiences,
      projects,
      skills,
      certifications : certifications, 
      accomplishments,
    };

    try {
      const { data } = await axios.post(`/api/resume/${email}`, dataTosave);
      alert("✅ Resume saved successfully!");
      console.log(data);
    } catch (error) {
      console.error("❌ Error saving resume:", error.message, error.stack);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };

  const exportPDF = () => {
    // TODO: Implement PDF export functionality
    alert("PDF export functionality coming soon!");
  };

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

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Resume Builder
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* button to save the resume data to the user DB */}
            <button
              onClick={saveResume}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
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

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Form Editor */}
        <div className="w-1/2 bg-white border-r border-gray-200 overflow-auto">
          <div className="p-6">
            {/* Section Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveSection("profile")}
                className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                  activeSection === "profile"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveSection("education")}
                className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                  activeSection === "education"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveSection("experience")}
                className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                  activeSection === "experience"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                  activeSection === "projects"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className={`px-4 py-2 font-medium whitespace-nowrap -mb-px ${
                  activeSection === "skills"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Skills
              </button>
            </div>

            {/* Form Content */}
            {activeSection === "profile" && <ProfileForm />}
            {activeSection === "education" && <EducationForm />}
            {activeSection === "experience" && <ExperienceForm />}
            {activeSection === "projects" && <ProjectForm />}
            {activeSection === "skills" && <TechnicalSkillForm />}
          </div>
        </div>

        {/* Right Panel - Live Preview */}
        <div className="w-1/2 bg-gray-100 overflow-auto p-8">
          <div className="flex justify-center items-start">
            <div
              className="bg-white shadow-2xl"
              style={{ width: "8.5in", minHeight: "11in" }}
            >
              <ModernTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
