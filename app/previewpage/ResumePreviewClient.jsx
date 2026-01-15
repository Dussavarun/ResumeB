"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { Save, ArrowLeft, FileText, Download, Moon, Sun } from "lucide-react";
import { useSession } from "next-auth/react";
import axios from "axios";
import RouteLoader from "../../components/GlobalLoader"

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
  const { data: session, status } = useSession();

  const isLoaded = status !== "loading";
  const userEmail = session?.user?.email;

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

    // Apply theme to document root
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("resume-theme", newTheme);

    // Toggle dark class on document root
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  /* ================= LOAD ================= */
  useEffect(() => {
    if (!isLoaded) return;
    if (!userEmail) {
      setLoading(false);
      return;
    }
    loadResumeDataFromDB(userEmail);
  }, [isLoaded, userEmail]);

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
    if (!userEmail) {
      alert("Please log in first.");
      return;
    }

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

    await axios.post(`/api/resume/${userEmail}`, payload);
    alert("Resume saved successfully! ✨");
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  const sections = [
    { id: "profile", label: "Profile" },
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
  ];

  const isDark = theme === "dark";

  if (loading) {
   return(
     <RouteLoader/>
   )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* HEADER - Glassmorphic Sticky */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isDark
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-white/70 backdrop-blur-xl border-b border-gray-200/50"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left Group */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/template-select")}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
                <span className="hidden sm:inline">Back</span>
              </button>

              <div
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border border-white/20"
                    : "bg-gray-100 border border-black/20"
                }`}
              >
                <FileText
                  size={16}
                  className={isDark ? "text-white" : "text-black"}
                />

                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="hidden sm:inline">Template: </span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {templateName}
                  </span>
                </span>
              </div>
            </div>

            {/* Right Group */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-yellow-400 border border-white/10 hover:shadow-lg hover:shadow-yellow-500/20"
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm hover:shadow-md"
                }`}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={saveResume}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                }`}
              >
                <Save size={16} />
                <span>Save</span>
              </button>

              <DownloadResumeButton />
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">
        {/* LEFT PANEL - Forms */}
        <div
          className={`w-full lg:w-1/2 flex flex-col transition-colors duration-500 ${
            isDark ? "bg-black" : "bg-white/40 backdrop-blur-sm"
          }`}
        >
          {/* Section Tabs - Pill Style */}
          <div
            className={`sticky top-[73px] z-40 transition-all duration-500 ${
              isDark
                ? "bg-black/95 backdrop-blur-xl border-b border-white/5"
                : "bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
            }`}
          ><div className="overflow-x-auto scrollbar-hide">
  <div className="flex justify-center px-6 py-3">
    <div className="relative flex items-center gap-8">
      {/* Animated underline */}
      <span
        className={`absolute bottom-0 h-[2px] transition-all duration-300 ease-out ${
          isDark ? "bg-white" : "bg-black"
        }`}
        style={{
          width: "var(--tab-width)",
          left: "var(--tab-left)",
        }}
      />

      {sections.map((s) => (
        <button
          key={s.id}
          ref={(el) => {
            if (activeSection === s.id && el) {
              el.parentElement.style.setProperty(
                "--tab-width",
                `${el.offsetWidth}px`
              );
              el.parentElement.style.setProperty(
                "--tab-left",
                `${el.offsetLeft}px`
              );
            }
          }}
          onClick={() => setActiveSection(s.id)}
          className={`relative pb-2 text-lg font-semibold transition-colors ${
            activeSection === s.id
              ? isDark
                ? "text-white"
                : "text-black"
              : isDark
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  </div>
</div>

          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 lg:p-8">
              <div
                className={`max-w-3xl mx-auto rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                  isDark
                    ? "bg-white/5 backdrop-blur-sm border border-white/10"
                    : "bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                }`}
              >
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

        {/* RIGHT PANEL - Preview */}
        <div
          className={`w-full lg:w-1/2 overflow-y-auto transition-colors duration-500 ${
            isDark ? "bg-zinc-950" : "bg-gray-50/50"
          }`}
        >
          <div className="p-6 lg:p-12">
            {/* Preview Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-1 h-10 rounded-full ${
                    isDark
                      ? "bg-gradient-to-b from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
                      : "bg-gradient-to-b from-purple-600 to-blue-600"
                  }`}
                ></div>
                <h2
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Live Preview
                </h2>
              </div>
              <p
                className={`text-sm ml-6 transition-colors duration-300 ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}
              >
                See your changes in real-time ✨
              </p>
            </div>

            {/* Resume Preview - Floating Card */}
            <div className="flex justify-center">
              <div
                id="resume"
                style={{
                  width: "100%",
                  maxWidth: "8.5in",
                  minHeight: "11in",
                }}
                className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? "shadow-2xl shadow-purple-900/20 ring-1 ring-white/10"
                    : "shadow-2xl shadow-gray-900/10 ring-1 ring-gray-200/50"
                }`}
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
