// "use client";

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Save, ArrowLeft } from "lucide-react";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";

// /* ================= FORMS ================= */
// import ProfileForm from "../../components/PersonalInfoForm";
// import EducationForm from "../../components/EducationForm";
// import ExperienceForm from "../../components/ExperienceForm";
// import ProjectForm from "../../components/ProjectForm";
// import TechnicalSkillForm from "../../components/TechnicalSkillForm";
// import AccomplishmentCertificationForm from "@/components/AcompCertForm";
// import PersonalSummaryForm from "../../components/PersonalSummaryForm";
// /* ================= TEMPLATES ================= */
// import ModernTemplate from "../../my_templates/ModernTemplate";
// import ClassicTemplate from "../../my_templates/classic";
// import PikachuTemplate from "../../my_templates/Pickachu";
// import GengarTemplate from "../../my_templates/GengarTemplate";
// import DownloadResumeButton from "@/components/DownloadResumeButton";

// /* =====================utils and defaults ============================ */
// import { defaultResumeData } from "../../data/defaultData";
// import { hydrateResume } from "../../utils/hydrateResume";

// export default function ResumePreviewPage() {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const { user, isLoaded } = useUser();

//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("profile");

//   const templateFromUrl = searchParams.get("template") || "modern";
//   const templateName = searchParams.get("name") || "Modern";

//   /* ================= REDUX STATE ================= */
//   const personalInfo = useSelector((s) => s.user.personalInfo);
//   const education = useSelector((s) => s.education.education);
//   const experiences = useSelector((s) => s.experience.experiences);
//   const projects = useSelector((s) => s.project.projects);
//   const skills = useSelector((s) => s.techskills);
//   const personalSummary = useSelector((s) => s.personalSummary.summary);
//   const certifications = useSelector(
//     (s) => s.certifications.certifications || []
//   );
//   const accomplishments = useSelector(
//     (s) => s.accomplishments.accomplishments || []
//   );

//   /* ================= TEMPLATE MAP ================= */
//   const templates = {
//     modern: ModernTemplate,
//     classic: ClassicTemplate,
//     gengar: GengarTemplate,
//     pikachu: PikachuTemplate,
//   };

//   const ActiveTemplate = templates[templateFromUrl] || templates.modern;
//   // const ActiveTemplate = templates.modern;

//   /* ================= LOAD FROM DB ================= */
//   useEffect(() => {
//     if (!isLoaded) return;
//     if (!user) {
//       setLoading(false);
//       return;
//     }

//     const email = user.primaryEmailAddress?.emailAddress;
//     if (!email) {
//       setLoading(false);
//       return;
//     }

//     loadResumeDataFromDB(email);
//   }, [isLoaded, user]);
  
// const loadResumeDataFromDB = async (email) => {
//   try {
//     const res = await axios.get(`/api/resume/${email}`);
//     const { hasResume, ...resumeData } = res.data;
//     console.log(`this is the true or false ${hasResume}`);

//     if (hasResume) {
//       hydrateResume(dispatch, {
//         ...defaultResumeData,
//         ...resumeData,
//       });
//     } else {
//       hydrateResume(dispatch, defaultResumeData);
//     }
//   } catch (err) {
//     console.error("❌ Error loading resume:", err);
//     hydrateResume(dispatch, defaultResumeData);
//   } finally {
//     setLoading(false);
//   }
// };


//   /* ================= SAVE TO DB ================= */
//   const saveResume = async () => {
//     if (!user) return alert("Please log in first.");

//     const email = user.primaryEmailAddress?.emailAddress;
//     if (!email) return alert("User email not found.");

//     const payload = {
//       personalInfo,
//       education,
//       personalSummary,
//       experience: experiences,
//       projects,
//       techSkills: skills,
//       certifications,
//       accomplishments,
//       template: templateFromUrl,
//     };

//     try {
//       await axios.post(`/api/resume/${email}`, payload);
//       alert("✅ Resume saved successfully");
//     } catch (err) {
//       console.error("❌ Error saving resume:", err);
//     }
//   };

//   /* ================= UI HELPERS ================= */
//   const handleBack = () => router.push("/template-select");

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading your resume...</p>
//       </div>
//     );
//   }

//   /* ================= RENDER ================= */
//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       {/* HEADER */}
//       <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <button onClick={handleBack} className="flex gap-2 items-center">
//             <ArrowLeft size={18} />
//             Back
//           </button>
//           <h1 className="text-xl font-semibold">Resume Builder</h1>
//           <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
//             Template: {templateName}
//           </span>
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             onClick={saveResume}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
//           >
//             <Save size={16} />
//             Save
//           </button>

//           <DownloadResumeButton />
//         </div>
//       </header>

//       {/* BODY */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* LEFT — FORMS */}
//         <div className="w-1/2 border-r overflow-auto p-6 bg-white">
//           <div className="flex gap-2 mb-6 border-b overflow-x-auto">
//             {[
//               "profile",
//               "summary",
//               "education",
//               "experience",
//               "projects",
//               "skills",
//               "certifications",
//             ].map((s) => (
//               <button
//                 key={s}
//                 onClick={() => setActiveSection(s)}
//                 className={`px-4 py-2 ${
//                   activeSection === s
//                     ? "border-b-2 border-blue-600 text-blue-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {s[0].toUpperCase() + s.slice(1)}
//               </button>
//             ))}
//           </div>

//           {activeSection === "profile" && <ProfileForm />}
//           {activeSection === "summary" && <PersonalSummaryForm />}
//           {activeSection === "skills" && <TechnicalSkillForm />}
//           {activeSection === "experience" && <ExperienceForm />}
//           {activeSection === "projects" && <ProjectForm />}
//           {activeSection === "education" && <EducationForm />}
//           {activeSection === "certifications" && (
//             <AccomplishmentCertificationForm />
//           )}
//         </div>

//         {/* RIGHT — LIVE PREVIEW */}
//         <div className="w-1/2 bg-gray-100 overflow-auto p-8" id="resume">
//           <div className="flex justify-center">
//             <div
//               className="bg-white shadow-xl"
//               style={{ width: "8.5in", minHeight: "11in" }}
//             >
//               <ActiveTemplate />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
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
import ClassicTemplate from "../../my_templates/classic";
import PikachuTemplate from "../../my_templates/Pickachu";
import GengarTemplate from "../../my_templates/GengarTemplate";
import DownloadResumeButton from "@/components/DownloadResumeButton";

/* ===================== utils & defaults ============================ */
import { defaultResumeData } from "../../data/defaultData";
import { hydrateResume } from "../../utils/hydrateResume";

export default function ResumePreviewPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");

  const templateFromUrl = searchParams.get("template") || "modern";
  const templateName = searchParams.get("name") || "Modern";

  /* ================= REDUX STATE ================= */
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

  /* ================= TEMPLATE MAP ================= */
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    gengar: GengarTemplate,
    pikachu: PikachuTemplate,
  };

  const ActiveTemplate = templates[templateFromUrl] || templates.modern;

  /* ================= LOAD FROM DB ================= */
  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
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

      if (hasResume) {
        hydrateResume(dispatch, {
          ...defaultResumeData,
          ...resumeData,
        });
      } else {
        hydrateResume(dispatch, defaultResumeData);
      }
    } catch (err) {
      console.error("❌ Error loading resume:", err);
      hydrateResume(dispatch, defaultResumeData);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SAVE TO DB ================= */
  const saveResume = async () => {
    if (!user) return alert("Please log in first.");

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) return alert("User email not found.");

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

    try {
      await axios.post(`/api/resume/${email}`, payload);
      alert("✅ Resume saved successfully");
    } catch (err) {
      console.error("❌ Error saving resume:", err);
    }
  };

  const handleBack = () => router.push("/template-select");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading your resume...</p>
      </div>
    );
  }

  /* ================= RENDER ================= */
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={handleBack} className="flex gap-2 items-center">
            <ArrowLeft size={18} />
            Back
          </button>
          <h1 className="text-xl font-semibold">Resume Builder</h1>
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
            Template: {templateName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={saveResume}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            <Save size={16} />
            Save
          </button>

          <DownloadResumeButton />
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — FORMS */}
        <div className="w-1/2 border-r overflow-auto p-6 bg-white">
          <div className="flex gap-2 mb-6 border-b overflow-x-auto">
            {[
              "profile",
              "summary",
              "skills",
              "experience",
              "projects",
              "certifications",
              "education",
            ].map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`px-4 py-2 ${
                  activeSection === s
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

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

        {/* RIGHT — LIVE PREVIEW */}
        <div className="w-1/2 bg-gray-100 overflow-auto p-8" id="resume">
          <div className="flex justify-center">
            <div
              className="bg-white shadow-xl"
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
