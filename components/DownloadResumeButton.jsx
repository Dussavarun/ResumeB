"use client";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import ModernPDF from "../pdf-templates/ModernPdf";
import GengarPdf from "../pdf-templates/GengarPdf";
import ClassicPdf from "../pdf-templates/ClassicTemplatePdf";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

export default function DownloadResumeButton() {
  const searchparams = useSearchParams();
  const tempKey = searchparams.get("name");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("resume-theme") || "light";
    setTheme(savedTheme);
  }, []);

  const isDark = theme === "dark";

  const pdftemps = {
    Modern: ModernPDF,
    twinline : GengarPdf,
    Classic: ClassicPdf,
  };

  const ActivePdftemp = pdftemps[tempKey];

  const personalInfo = useSelector((s) => s.user.personalInfo);
  const personalSummary = useSelector((s) => s.personalSummary.summary);
  const education = useSelector((s) => s.education.education);
  const experience = useSelector((s) => s.experience.experiences);
  const projects = useSelector((s) => s.project.projects);
  // const techSkills = useSelector((s) => s.techskills);
  const techSkills = useSelector((s) => s.techskills.categories);
  const accomplishments = useSelector((s) => s.accomplishments.accomplishments);
  const certifications = useSelector((s) => s.certifications.certifications);

  return (
    <PDFDownloadLink
      className="text-black no-underline"
      document={
        <ActivePdftemp
          personalInfo={personalInfo}
          personalSummary={personalSummary}
          education={education}
          experience={experience}
          projects={projects}
          techSkills={techSkills}
          accomplishments={accomplishments}
          certifications={certifications}
        />
      }
      fileName="resume.pdf"
    >
      {({ loading }) => (
        <button
          type="button"
          className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-xs sm:text-sm ${
            isDark
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-lg shadow-blue-500/25"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30"
          }`}
        >
          <Download size={14} />
          <span className="hidden sm:inline">
            {loading ? "Generating..." : "Download"}
          </span>
        </button>
      )}
    </PDFDownloadLink>
  );
}