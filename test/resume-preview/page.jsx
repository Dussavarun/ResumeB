"use client";
import { useEffect, useState } from "react";
import ResumePdf from "@/app/components/ResumePdf1";

export default function PdfPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("resumeData");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log("Raw stored data:", parsed);

        const transformedData = {
          name: parsed.personal?.name || "Full Name",
          role: parsed.personal?.targetedRole || "Target Role",

          contact: {
            email: parsed.personal?.email || null,
            phone: parsed.personal?.phone || null,
            linkedin: parsed.personal?.linkedin || null,
            github: parsed.personal?.github || null,
          },

          summary: parsed.personal?.summary || null,

          // Skills grouped
          skills: (() => {
            if (!parsed.skills) return { frontend: [], backend: [], database: [] };

            if (typeof parsed.skills === "object" && !Array.isArray(parsed.skills)) {
              return {
                frontend: parsed.skills.frontend || [],
                backend: parsed.skills.backend || [],
                database: parsed.skills.database || [],
              };
            }

            const skillsArray =
              typeof parsed.skills === "string"
                ? parsed.skills.split(/,\s*/)
                : Array.isArray(parsed.skills)
                ? parsed.skills
                : [];

            return {
              frontend: skillsArray.filter((s) =>
                ["react", "javascript", "html", "css", "vue", "angular"].some((k) =>
                  s.toLowerCase().includes(k)
                )
              ),
              backend: skillsArray.filter((s) =>
                ["node", "express", "java", "spring", "python", "django"].some((k) =>
                  s.toLowerCase().includes(k)
                )
              ),
              database: skillsArray.filter((s) =>
                ["mongo", "mysql", "postgres", "redis"].some((k) =>
                  s.toLowerCase().includes(k)
                )
              ),
            };
          })(),

          experience:
            parsed.experience?.map((exp) => ({
              role: exp.jobTitle || exp.role || "Position",
              company: exp.company || "Company",
              duration:
                exp.startDate && exp.endDate
                  ? `${exp.startDate} - ${exp.endDate}`
                  : exp.startDate
                  ? `${exp.startDate} - Present`
                  : "Present",
              location: exp.location || null,
              details: exp.description
                ? Array.isArray(exp.description)
                  ? exp.description.filter((d) => d && d.trim())
                  : [exp.description].filter((d) => d && d.trim())
                : [],
            })) || [],

          education:
            parsed.education?.map((edu) => ({
              degree: edu.degree || "Degree",
              institution: edu.institution || "Institution",
              year:
                edu.startDate && edu.endDate
                  ? `${edu.startDate} - ${edu.endDate}`
                  : edu.year || "Year",
              location: edu.location || null,
              highlights: edu.highlights || null,
            })) || [],

          projects:
            parsed.projects?.map((proj) => ({
              name: proj.title || proj.name || "Project",
              tech: proj.techStack || proj.tech || null,
              details: proj.description
                ? Array.isArray(proj.description)
                  ? proj.description.filter((d) => d && d.trim())
                  : [proj.description].filter((d) => d && d.trim())
                : [],
            })) || [],

          certifications:
            parsed.certifications?.map((cert) => ({
              name: cert.name,
              organization: cert.organization || null,
              year: cert.year || null,
              link: cert.link || null,
            })) || [],

          selectedTemplate: parsed.selectedTemplate || 1,
          userType: parsed.userType || "professional",
        };

        console.log("Transformed data:", transformedData);
        setData(transformedData);
        setError(null);
      } catch (err) {
        console.error("JSON Parse Error:", err, stored);
        setError("Failed to parse resume data. Please try generating again.");
      }
    } else {
      setError("No resume data found. Please go back and generate your resume.");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading your resume...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Your Resume Preview</h1>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              ← Back to Edit
            </button>
            <div className="text-sm text-gray-400">
              Template {data?.selectedTemplate || 1} • {data?.userType || "Professional"} Resume
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {data ? <ResumePdf data={data} /> : <div className="p-6 text-center">No resume data found.</div>}
        </div>
      </div>
    </div>
  );
}
