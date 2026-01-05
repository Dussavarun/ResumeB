// function generateLatex({
//   personalInfo,
//   education,
//   experiences,
//   projects,
//   skills,
//   certifications,
//   accomplishments,
// }) {
//   return `
// \\documentclass[10pt,a4paper]{article}
// \\usepackage[utf8]{inputenc}
// \\usepackage{geometry}
// \\geometry{margin=1in}
// \\usepackage{hyperref}
// \\usepackage{xcolor}
// \\begin{document}
// \\begin{center}
//   {\\LARGE\\textbf{${personalInfo.name || "Your Name"}}} \\\\
//   \\vspace{2mm}
//   ${[personalInfo.email, personalInfo.phone, personalInfo.location].filter(Boolean).join(" | ")} \\\\
//   \\vspace{2mm}
//   ${personalInfo.links
//     ? [
//         personalInfo.links.portfolio && `\\href{${personalInfo.links.portfolio}}{Portfolio}`,
//         personalInfo.links.github && `\\href{${personalInfo.links.github}}{GitHub}`,
//         personalInfo.links.linkedin && `\\href{${personalInfo.links.linkedin}}{LinkedIn}`,
//         personalInfo.links.leetcode && `\\href{${personalInfo.links.leetcode}}{LeetCode}`,
//         personalInfo.links.codeforces && `\\href{${personalInfo.links.codeforces}}{Codeforces}`,
//       ]
//         .filter(Boolean)
//         .join(" $\\vert$ ")
//     : ""}
// \\end{center}

// ${personalInfo.about
//   ? `\\section*{About}\\noindent${personalInfo.about}\\vspace{2mm}`
//   : ""}

// ${education.length
//   ? `\\section*{Education}\n${education
//       .map(
//         (edu) =>
//           `\\noindent\\textbf{${edu.institution}} \\hfill {\\footnotesize ${edu.duration ||
//             ""}, ${edu.location || ""}} \\\\
//   ${edu.degree || ""} ${edu.gpa ? `(GPA: ${edu.gpa})` : ""} \\\\
//   \\vspace{1.5mm}`
//       )
//       .join("\n")}`
//   : ""}

// ${experiences.length
//   ? `\\section*{Experience}\n${experiences
//       .map(
//         (exp) =>
//           `\\noindent\\textbf{${exp.role}} @ ${exp.company}${exp.location ? ", " + exp.location : ""} \\hfill {\\footnotesize ${exp.duration || ""}} \\\\
//   ${Array.isArray(exp.responsibilities) ? exp.responsibilities.map((r) => `\\item ${r}`).join("\n") : ""} 
//   \\vspace{1.5mm}`
//       )
//       .join("\n")}`
//   : ""}

// ${projects.length
//   ? `\\section*{Projects}\n${projects
//       .map(
//         (proj) =>
//           `\\noindent\\textbf{${proj.title}} ${proj.link ? `\\href{${proj.link}}{Link}` : ""} \\\\
//   ${proj.description || ""} \\\\
//   ${proj.impact ? `\\textit{${proj.impact}}` : ""}
//   \\vspace{1.5mm}`
//       )
//       .join("\n")}`
//   : ""}

// ${(skills.programmingLanguages?.length ||
//   skills.frameworks?.length ||
//   skills.databases?.length ||
//   skills.developerTools?.length ||
//   skills.cloudAndDevOps?.length)
//   ? `\\section*{Technical Skills}
//   ${
//     skills.programmingLanguages?.length
//       ? `Languages: ${skills.programmingLanguages.join(", ")} \\\\`
//       : ""
//   }
//   ${
//     skills.frameworks?.length
//       ? `Frameworks: ${skills.frameworks.join(", ")} \\\\`
//       : ""
//   }
//   ${
//     skills.databases?.length
//       ? `Databases: ${skills.databases.join(", ")} \\\\`
//       : ""
//   }
//   ${
//     skills.developerTools?.length
//       ? `Tools: ${skills.developerTools.join(", ")} \\\\`
//       : ""
//   }
//   ${
//     skills.cloudAndDevOps?.length
//       ? `Cloud & DevOps: ${skills.cloudAndDevOps.join(", ")} \\\\`
//       : ""
//   }`
//   : ""}

// ${certifications.length
//   ? `\\section*{Certifications}\n${certifications
//       .map(
//         (cert) =>
//           `${cert.title ? `\\textbf{${cert.title}}` : ""} ${cert.provider ? `({\\footnotesize${cert.provider}})` : ""} ${cert.date ? `\\hfill {\\footnotesize ${cert.date}}` : ""} ${cert.credentialUrl ? `\\href{${cert.credentialUrl}}{Credential}` : ""} \\\\`
//       )
//       .join("\n")}`
//   : ""}

// ${accomplishments.length
//   ? `\\section*{Accomplishments}
// \\begin{itemize}
// ${accomplishments
//   .map((acc) =>
//     typeof acc === "string"
//       ? `\\item ${acc}`
//       : `\\item ${acc.title || ""}`)
//   .join("\n")}
// \\end{itemize}`
//   : ""}

// \\end{document}
//   `;
// }

// export default  generateLatex;

function escapeLatex(str) {
  if (!str) return "";
  // Escape common LaTeX special chars
  return String(str)
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/%/g, "\\%")
    .replace(/_/g, "\\_")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/\^/g, "\\^{}")
    .replace(/~/g, "\\~{}")
    .replace(/&/g, "\\&");
}

function generateLatex({
  personalInfo = {},
  education = [],
  experiences = [],
  projects = [],
  skills = {},
  certifications = [],
  accomplishments = [],
}) {
  return `
\\documentclass[10pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{geometry}
\\geometry{margin=1in}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\begin{document}
\\begin{center}
  {\\LARGE\\textbf{${escapeLatex(personalInfo.name) || "Your Name"}}} \\\\
  \\vspace{2mm}
  ${[personalInfo.email, personalInfo.phone, personalInfo.location].filter(Boolean).map(escapeLatex).join(" | ")} \\\\
  \\vspace{2mm}
  ${personalInfo.links
    ? [
        personalInfo.links.portfolio && personalInfo.links.portfolio !== "" && `\\href{${escapeLatex(personalInfo.links.portfolio)}}{Portfolio}`,
        personalInfo.links.github && personalInfo.links.github !== "" && `\\href{${escapeLatex(personalInfo.links.github)}}{GitHub}`,
        personalInfo.links.linkedin && personalInfo.links.linkedin !== "" && `\\href{${escapeLatex(personalInfo.links.linkedin)}}{LinkedIn}`,
        personalInfo.links.leetcode && personalInfo.links.leetcode !== "" && `\\href{${escapeLatex(personalInfo.links.leetcode)}}{LeetCode}`,
        personalInfo.links.codeforces && personalInfo.links.codeforces !== "" && `\\href{${escapeLatex(personalInfo.links.codeforces)}}{Codeforces}`,
      ].filter(Boolean).join(" $\\vert$ ")
    : ""}
\\end{center}

${personalInfo.about && personalInfo.about.trim()
  ? `\\section*{About}\\noindent${escapeLatex(personalInfo.about).replace(/\n/g, " \\\\ ")}\\vspace{2mm}`
  : ""}

${Array.isArray(education) && education.filter(e => e.institution || e.degree).length
  ? `\\section*{Education}
${education
  .filter(e => e.institution || e.degree)
  .map((edu) => {
    const institution = edu.institution ? `\\textbf{${escapeLatex(edu.institution)}` : "";
    const degree = edu.degree ? escapeLatex(edu.degree) : "";
    const duration = edu.duration ? escapeLatex(edu.duration) : "";
    const location = edu.location ? escapeLatex(edu.location) : "";
    const gpa = edu.gpa ? escapeLatex(edu.gpa) : "";
    let line = [];
    if (institution) line.push(institution);
    if (duration || location)
      line.push(
        `\\hfill {\\footnotesize${duration ? ` ${duration}` : ""}${location ? `, ${location}` : ""}}`
      );
    let out = line.length ? line.join(" ") + " \\\\" : "";
    if (degree || gpa) out += `${degree}${gpa ? ` (GPA: ${gpa})` : ""} \\\\`;
    out += " \\vspace{1.5mm}";
    return out;
  }).join("\n")}`
  : ""}

${Array.isArray(experiences) && experiences.filter(e => e.role || e.company).length
  ? `\\section*{Experience}
${experiences
  .filter(e => e.role || e.company)
  .map((exp) => {
    const role = escapeLatex(exp.role);
    const company = escapeLatex(exp.company);
    const location = escapeLatex(exp.location);
    const duration = escapeLatex(exp.duration);
    const responsibilities = (
      Array.isArray(exp.responsibilities) ? exp.responsibilities.filter(Boolean) : []
    );
    let out = [];
    if (role || company)
      out.push(
        `\\noindent\\textbf{${role || ""}}${company ? ` @ ${company}` : ""}${location ? `, ${location}` : ""} \\hfill {\\footnotesize ${duration}} \\\\`
      );
    if (responsibilities.length)
      out.push(
        "\\begin{itemize}\n" +
          responsibilities.map(r => `\\item ${escapeLatex(r)}`).join("\n") +
          "\n\\end{itemize}"
      );
    out.push("\\vspace{1.5mm}");
    return out.join("\n");
  }).join("\n")}`
  : ""}

${Array.isArray(projects) && projects.filter(p => p.title).length
  ? `\\section*{Projects}
${projects
  .filter(p => p.title)
  .map((proj) => {
    const title = escapeLatex(proj.title);
    const link = proj.link && proj.link !== "" ? ` \\href{${escapeLatex(proj.link)}}{Link}` : "";
    const description = escapeLatex(proj.description);
    const impact = escapeLatex(proj.impact);
    let out = `\\noindent\\textbf{${title}}${link} \\\\`;
    if (description) out += `${description} \\\\`;
    if (impact) out += `\\textit{${impact}}`;
    out += " \\vspace{1.5mm}";
    return out;
  }).join("\n")}`
  : ""}

${skills.programmingLanguages?.length ||
skills.frameworks?.length ||
skills.databases?.length ||
skills.developerTools?.length ||
skills.cloudAndDevOps?.length
  ? `\\section*{Technical Skills}
${skills.programmingLanguages?.length ? `Languages: ${skills.programmingLanguages.map(escapeLatex).join(", ")} \\\\` : ""}
${skills.frameworks?.length ? `Frameworks: ${skills.frameworks.map(escapeLatex).join(", ")} \\\\` : ""}
${skills.databases?.length ? `Databases: ${skills.databases.map(escapeLatex).join(", ")} \\\\` : ""}
${skills.developerTools?.length ? `Tools: ${skills.developerTools.map(escapeLatex).join(", ")} \\\\` : ""}
${skills.cloudAndDevOps?.length ? `Cloud & DevOps: ${skills.cloudAndDevOps.map(escapeLatex).join(", ")} \\\\` : ""}`
  : ""}

${Array.isArray(certifications) && certifications.filter(c => c.title).length
  ? `\\section*{Certifications}
${certifications
  .filter(c => c.title)
  .map((cert) => {
    const title = escapeLatex(cert.title);
    const provider = escapeLatex(cert.provider);
    const date = escapeLatex(cert.date);
    const credentialUrl = escapeLatex(cert.credentialUrl);
    let line = `\\textbf{${title}}`;
    if (provider) line += ` ({\\footnotesize${provider}})`;
    if (date) line += ` \\hfill {\\footnotesize ${date}}`;
    if (credentialUrl) line += ` \\href{${credentialUrl}}{Credential}`;
    line += " \\\\";
    return line;
  }).join("\n")}`
  : ""}

${Array.isArray(accomplishments) && accomplishments.length
  ? `\\section*{Accomplishments}
\\begin{itemize}
${accomplishments
  .map((acc) =>
    acc.title ? `\\item ${escapeLatex(acc.title)}` :
    typeof acc === "string" ? `\\item ${escapeLatex(acc)}` : "")
  .filter(Boolean)
  .join("\n")}
\\end{itemize}`
  : ""}

\\end{document}
  `;
}

export default generateLatex;
