"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import ModernPDF from "../pdf-templates/ModernPdf";

export default function DownloadResumeButton() {
  const personalInfo = useSelector((s) => s.user.personalInfo);
  const personalSummary = useSelector(
    (s) => s.personalSummary.summary
  );
  const education = useSelector((s) => s.education.education);
  const experience = useSelector((s) => s.experience.experiences);
  const projects = useSelector((s) => s.project.projects);
  const techSkills = useSelector((s) => s.techskills);
  const accomplishments = useSelector(
    (s) => s.accomplishments.accomplishments
  );
  const certifications = useSelector(
    (s) => s.certifications.certifications
  );

  return (
    <PDFDownloadLink
      document={
        <ModernPDF
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
      fileName="modern-resume.pdf"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : "Download PDF"
      }
    </PDFDownloadLink>
  );
}
