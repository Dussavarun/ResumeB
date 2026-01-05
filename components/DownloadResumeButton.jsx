
// import { useSelector } from "react-redux";

// function DownloadResumeButton() {
//   const personalInfo = useSelector(state => state.user?.personalInfo || {});
//   const education = useSelector(state => state.education?.education || []);
//   const experiences = useSelector(state => state.experience?.experiences || []);
//   const projects = useSelector(state => state.project?.projects || []);
//   const skills = useSelector(state => state.techskills || {});
//   const certifications = useSelector(state => state.certifications?.certifications || []);
//   const accomplishments = useSelector(state => state.accomplishments?.accomplishments || []);

//   const handleDownload = async () => {
//     const payload = {
//       personalInfo,
//       education,
//       experiences,
//       projects,
//       skills,
//       certifications,
//       accomplishments,
//     };
//     const response = await fetch("/api/generate-pdf", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (!response.ok) {
//       alert("PDF generation failed.");
//       return;
//     }
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "resume.pdf";
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   return <button onClick={handleDownload}>Download Resume as PDF</button>;
// }

// export default DownloadResumeButton;
// "use client";

// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { useSelector } from "react-redux";
// import { pdfTemplates } from "../pdf-templates";

// export default function DownloadResumeButton({ template }) {
//   const data = {
//     personalInfo: useSelector(s => s.user.personalInfo),
//     education: useSelector(s => s.education.education),
//     experience: useSelector(s => s.experience.experiences),
//     projects: useSelector(s => s.project.projects),
//     techSkills: useSelector(s => s.techskills),
//     accomplishments: useSelector(s => s.accomplishments.accomplishments),
//     certifications: useSelector(s => s.certifications.certifications),
//   };

//   const PDFComponent = pdfTemplates[template] || pdfTemplates.classic;

//   return (
//     <PDFDownloadLink
//       document={<PDFComponent data={data} />}
//       fileName={`${template}-resume.pdf`}
//     >
//       {({ loading }) => loading ? "Generating..." : "Download PDF"}
//     </PDFDownloadLink>
//   );
// }
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
