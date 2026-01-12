"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { Save, ArrowLeft, FileText, Download, Moon, Sun } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

/* ================= FORMS ================= */
import ProfileForm from "../../components/PersonalInfoForm";
import EducationForm from "../../components/EducationForm";
import ExperienceForm from "../../components/ExperienceForm";
import ProjectForm from "../../components/ProjectForm";
import TechnicalSkillForm from "../../components/TechnicalSkillForm";
import AccomplishmentCertificationForm from "@/components/AcompCertForm";
import PersonalSummaryForm from "../../components/PersonalSummaryForm";

/* ================= TEMPLATES ================= */
import ModernTemplate from "../../my_templates/ModernTemplate";
import ClassicTemplate from "../../my_templates/ClassicTemplate";
import GengarTemplate from "../../my_templates/GengarTemplate";
import DownloadResumeButton from "@/components/DownloadResumeButton";

/* ===================== utils ============================ */
import { defaultResumeData } from "../../data/defaultData";
import { hydrateResume } from "../../utils/hydrateResume";

export default function ResumePreviewPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [theme, setTheme] = useState("light");

  const templateFromUrl = searchParams.get("template") || "modern";
  const templateName = searchParams.get("name") || "Modern";

  /* ================= REDUX ================= */
  const personalInfo = useSelector((s) => s.user.personalInfo);
  const education = useSelector((s) => s.education.education);
  const experiences = useSelector((s) => s.experience.experiences);
  const projects = useSelector((s) => s.project.projects);
  const skills = useSelector((s) => s.techskills);
  const personalSummary = useSelector((s) => s.personalSummary.summary);
  const certifications = useSelector(
    (s) => s.certifications.certifications || []
  );
  const accomplishments = useSelector(
    (s) => s.accomplishments.accomplishments || []
  );

  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    gengar: GengarTemplate,
  };

  const ActiveTemplate = templates[templateFromUrl] || templates.modern;

  /* ================= THEME ================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem("resume-theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("resume-theme", newTheme);
  };

  /* ================= LOAD ================= */
  useEffect(() => {
    if (!isLoaded || !user) {
      setLoading(false);
      return;
    }

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) {
      setLoading(false);
      return;
    }

    loadResumeDataFromDB(email);
  }, [isLoaded, user]);

  const loadResumeDataFromDB = async (email) => {
    try {
      const res = await axios.get(`/api/resume/${email}`);
      const { hasResume, ...resumeData } = res.data;

      hydrateResume(
        dispatch,
        hasResume ? { ...defaultResumeData, ...resumeData } : defaultResumeData
      );
    } catch {
      hydrateResume(dispatch, defaultResumeData);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SAVE ================= */
  const saveResume = async () => {
    if (!user) return alert("Please log in first.");
    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) return;

    const payload = {
      personalInfo,
      education,
      personalSummary,
      experience: experiences,
      projects,
      techSkills: skills,
      certifications,
      accomplishments,
      template: templateFromUrl,
    };

    await axios.post(`/api/resume/${email}`, payload);
    alert("Resume saved successfully! ✨");
  };

  const sections = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "summary", label: "Summary", icon: "📝" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  const isDark = theme === "dark";

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="text-center">
          <div className={`relative w-20 h-20 mx-auto mb-6`}>
            <div className={`absolute inset-0 border-4 ${isDark ? 'border-purple-500/30' : 'border-purple-300'} rounded-full`}></div>
            <div className={`absolute inset-0 border-4 border-transparent ${isDark ? 'border-t-purple-500' : 'border-t-purple-600'} rounded-full animate-spin`}></div>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold text-lg`}>Loading your resume...</p>
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-sm mt-2`}>Preparing something amazing ✨</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      {/* HEADER */}
      <header className={`backdrop-blur-xl ${isDark ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 shadow-lg transition-colors duration-300`}>
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => router.push("/template-select")}
              className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700' : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300'} border-2 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg`}
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500' : 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-400'} border-2 rounded-xl shadow-lg`}>
              <FileText size={16} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="hidden sm:inline">Template: </span>
                <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>{templateName}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-white hover:bg-gray-50 text-gray-700'} border-2 ${isDark ? 'border-gray-700' : 'border-gray-300'} rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg`}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={saveResume}
              className={`flex items-center gap-2 px-5 py-2.5 ${isDark ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500' : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'} text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95`}
            >
              <Save size={16} />
              <span>Save</span>
            </button>

            <DownloadResumeButton />
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT — FORMS */}
        <div className={`w-full lg:w-1/2 flex flex-col ${isDark ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white/50'} border-b-2 lg:border-b-0 lg:border-r-2 backdrop-blur-sm overflow-hidden transition-colors duration-300`}>
          {/* Section Tabs */}
          <div className={`${isDark ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white/80'} border-b-2 backdrop-blur-md overflow-x-auto transition-colors duration-300`}>
            <div className="flex justify-start lg:justify-center min-w-max px-2 py-3 gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-sm sm:text-base whitespace-nowrap rounded-lg transition-all ${
                    activeSection === s.id
                      ? isDark 
                        ? 'bg-zinc-800 text-white shadow-md border-b-2 border-purple-500'
                        : 'bg-gray-100 text-gray-900 shadow-sm border-b-2 border-purple-500'
                      : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-zinc-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto">
              <div>
                {activeSection === "profile" && <ProfileForm />}
                {activeSection === "summary" && <PersonalSummaryForm />}
                {activeSection === "skills" && <TechnicalSkillForm />}
                {activeSection === "experience" && <ExperienceForm />}
                {activeSection === "projects" && <ProjectForm />}
                {activeSection === "certifications" && (
                  <AccomplishmentCertificationForm />
                )}
                {activeSection === "education" && <EducationForm />}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — PREVIEW */}
        <div className={`w-full lg:w-1/2 ${isDark ? 'bg-zinc-900' : 'bg-gray-50'} overflow-y-auto transition-colors duration-300`}>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-1 h-8 ${isDark ? 'bg-gradient-to-b from-purple-500 to-blue-500' : 'bg-gradient-to-b from-purple-600 to-blue-600'} rounded-full`}></div>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Live Preview
                </h3>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm ml-5`}>
                See your changes in real-time ✨
              </p>
            </div>

            <div className="flex justify-center">
              <div
                style={{ 
                  width: "100%",
                  maxWidth: "8.5in",
                  minHeight: "11in"
                }}
                className={`${isDark ? 'shadow-2xl shadow-purple-900/50' : 'shadow-2xl'} rounded-lg overflow-hidden`}
                id="resume"
              >
                <ActiveTemplate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}