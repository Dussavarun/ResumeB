"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import ModernPDF from "../pdf-templates/ModernPdf";
import GengarPdf from "../pdf-templates/GengarPdf";
import ClassicPdf from "../pdf-templates/ClassicTemplatePdf";

export default function DownloadResumeButton() {
  const searchparams = useSearchParams();
  const tempKey = searchparams.get("name");

  const pdftemps = {
    Modern: ModernPDF,
    Gengar: GengarPdf,
    Classic : ClassicPdf
  };

  const ActivePdftemp = pdftemps[tempKey];

  const personalInfo = useSelector((s) => s.user.personalInfo);
  const personalSummary = useSelector((s) => s.personalSummary.summary);
  const education = useSelector((s) => s.education.education);
  const experience = useSelector((s) => s.experience.experiences);
  const projects = useSelector((s) => s.project.projects);
  const techSkills = useSelector((s) => s.techskills);
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
          className="flex items-center gap-2 px-4 sm:px-5 py-2 bg-white text-black font-semibold border-2 border-black rounded-lg shadow-md transition-all hover:bg-gray-100 cursor-pointer active:scale-95"
        >
          <Download size={16} />
          <span>{loading ? "Generating..." : "Download"}</span>
        </button>
      )}
    </PDFDownloadLink>
  );
}