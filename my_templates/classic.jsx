// "use client";
// import React from "react";
// import { useSelector } from "react-redux";

// const ClassicTemplate = () => {
//   const personalInfo = useSelector((state) => state.user?.personalInfo || {});
//   const education = useSelector((state) => state.education?.education || []);
//   const experiences = useSelector((state) => state.experience?.experiences || []);
//   const projects = useSelector((state) => state.project?.projects || []);
//   const skills = useSelector((state) => state.techskills || {});
//   const accomplishments = useSelector(
//     (state) => state.accomplishments?.accomplishments || []
//   );
//   const certifications = useSelector(
//     (state) => state.certifications?.certifications || []
//   );

//   const safeText = (val) => {
//     if (!val) return "";
//     if (typeof val === "object") return JSON.stringify(val);
//     return val;
//   };

//   // Add console log to debug
//   console.log("🎨 Template - Skills:", skills);

//   return (
//     <div className="bg-white p-10 font-serif h-full overflow-auto text-sm leading-relaxed border border-gray-300">
//       {/* Header */}
//       <div className="border-b-2 border-gray-700 pb-3 mb-4 text-center">
//         <h1 className="text-3xl font-bold tracking-wide text-gray-900 mb-1">
//           {safeText(personalInfo.name) || "Your Name"}
//         </h1>
//         <div className="text-xs text-gray-700">
//           {[personalInfo.email, personalInfo.phone, personalInfo.location]
//             .filter(Boolean)
//             .join(" | ")}
//         </div>
//         {personalInfo.links && (
//           <div className="flex justify-center gap-3 text-xs mt-1 text-blue-700">
//             {personalInfo.links.portfolio && (
//               <a href={personalInfo.links.portfolio} className="hover:underline">
//                 Portfolio
//               </a>
//             )}
//             {personalInfo.links.github && (
//               <a href={personalInfo.links.github} className="hover:underline">
//                 GitHub
//               </a>
//             )}
//             {personalInfo.links.linkedin && (
//               <a href={personalInfo.links.linkedin} className="hover:underline">
//                 LinkedIn
//               </a>
//             )}
//             {personalInfo.links.leetcode && (
//               <a href={personalInfo.links.leetcode} className="hover:underline">
//                 LeetCode
//               </a>
//             )}
//             {personalInfo.links.codeforces && (
//               <a href={personalInfo.links.codeforces} className="hover:underline">
//                 Codeforces
//               </a>
//             )}
//           </div>
//         )}
//       </div>

//       {/* About */}
//       {personalInfo.about && (
//         <section className="mb-4">
//           <p className="text-xs text-gray-700">{personalInfo.about}</p>
//         </section>
//       )}

//       {/* Education */}
//       {education.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Education
//           </h3>
//           {education.map((edu, idx) => (
//             <div key={idx} className="mb-2">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-bold">{safeText(edu.institution)}</h4>
//                   <p>{safeText(edu.degree)}</p>
//                   {edu.gpa && <p className="text-xs">GPA: {safeText(edu.gpa)}</p>}
//                 </div>
//                 <div className="text-right text-xs text-gray-600">
//                   {edu.duration && <p>{safeText(edu.duration)}</p>}
//                   {edu.location && <p>{safeText(edu.location)}</p>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Experience */}
//       {experiences.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Experience
//           </h3>
//           {experiences.map((exp, idx) => (
//             <div key={idx} className="mb-3">
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="font-bold">{safeText(exp.role)}</h4>
//                   <p className="text-gray-700 italic">
//                     {safeText(exp.company)}
//                     {exp.location && `, ${safeText(exp.location)}`}
//                   </p>
//                 </div>
//                 {exp.duration && (
//                   <p className="text-xs text-gray-600">{safeText(exp.duration)}</p>
//                 )}
//               </div>
//               {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
//                 <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-0.5">
//                   {exp.responsibilities.map((resp, i) => (
//                     <li key={i}>{safeText(resp)}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Projects */}
//       {projects.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Projects
//           </h3>
//           {projects.map((project, idx) => (
//             <div key={idx} className="mb-2">
//               <div className="flex justify-between">
//                 <h4 className="font-bold">{safeText(project.title)}</h4>
//                 {project.link && (
//                   <a
//                     href={project.link}
//                     className="text-blue-700 text-xs hover:underline"
//                   >
//                     Link
//                   </a>
//                 )}
//               </div>
//               {project.description && (
//                 <p className="text-xs text-gray-700">{safeText(project.description)}</p>
//               )}
//               {project.impact && (
//                 <p className="text-xs italic text-gray-600">{safeText(project.impact)}</p>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Technical Skills */}
//       {(skills?.programmingLanguages?.length > 0 ||
//         skills?.frameworks?.length > 0 ||
//         skills?.databases?.length > 0 ||
//         skills?.developerTools?.length > 0 ||
//         skills?.cloudAndDevOps?.length > 0) && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Technical Skills
//           </h3>
//           <div className="text-xs space-y-1">
//             {skills.programmingLanguages?.length > 0 && (
//               <p>
//                 <span className="font-semibold">Languages:</span>{" "}
//                 {skills.programmingLanguages.join(", ")}
//               </p>
//             )}
//             {skills.frameworks?.length > 0 && (
//               <p>
//                 <span className="font-semibold">Frameworks:</span>{" "}
//                 {skills.frameworks.join(", ")}
//               </p>
//             )}
//             {skills.databases?.length > 0 && (
//               <p>
//                 <span className="font-semibold">Databases:</span>{" "}
//                 {skills.databases.join(", ")}
//               </p>
//             )}
//             {skills.developerTools?.length > 0 && (
//               <p>
//                 <span className="font-semibold">Tools:</span>{" "}
//                 {skills.developerTools.join(", ")}
//               </p>
//             )}
//             {skills.cloudAndDevOps?.length > 0 && (
//               <p>
//                 <span className="font-semibold">Cloud & DevOps:</span>{" "}
//                 {skills.cloudAndDevOps.join(", ")}
//               </p>
//             )}
//           </div>
//         </section>
//       )}

//       {/* Certifications */}
//       {certifications.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Certifications
//           </h3>
//           {certifications.map((cert, idx) => (
//             <div key={idx} className="flex justify-between text-xs mb-1">
//               <div>
//                 <p className="font-semibold">{safeText(cert.title)}</p>
//                 {cert.provider && <p>{safeText(cert.provider)}</p>}
//               </div>
//               <div className="text-right">
//                 {cert.date && <p>{safeText(cert.date)}</p>}
//                 {cert.credentialUrl && (
//                   <a
//                     href={cert.credentialUrl}
//                     className="text-blue-700 hover:underline"
//                   >
//                     Credential
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Accomplishments */}
//       {accomplishments.length > 0 && (
//         <section>
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Accomplishments
//           </h3>
//           <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
//             {accomplishments.map((acc, idx) => (
//               <li key={idx}>{safeText(acc.title || acc)}</li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </div>
//   );
// };

// export default ClassicTemplate;

"use client";

import { useSelector } from "react-redux";

export default function ClassicTemplate() {
  const personalInfo = useSelector((s) => s.user.personalInfo);
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
    <div className="p-10 text-sm text-gray-900 font-serif leading-relaxed">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">
          {personalInfo?.name || ""}
        </h1>

        <p className="mt-1">
          {[
            personalInfo?.email,
            personalInfo?.phone,
            personalInfo?.location,
          ]
            .filter(Boolean)
            .join(" | ")}
        </p>

        <p className="mt-1 text-xs">
          {[
            personalInfo?.links?.linkedin,
            personalInfo?.links?.github,
            personalInfo?.links?.portfolio,
          ]
            .filter(Boolean)
            .join(" | ")}
        </p>
      </div>

      <Divider />

      {/* EDUCATION */}
      {education.length > 0 && (
        <Section title="Education">
          {education.map((e, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{e.institution}</p>
              <p>
                {e.degree} — {e.duration}
              </p>
              <p className="text-gray-700">
                {e.location}
                {e.gpa && ` | GPA: ${e.gpa}`}
              </p>
            </div>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <Section title="Experience">
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">
                {exp.company} — {exp.role}
              </p>
              <p className="text-gray-700">
                {exp.location} | {exp.startDate} – {exp.endDate}
              </p>
              <ul className="list-disc ml-5 mt-1">
                {(exp.responsibilities || []).map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <Section title="Projects">
          {projects.map((p, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{p.title}</p>
              <p>{p.description}</p>
              {p.technologies?.length > 0 && (
                <p className="text-gray-700">
                  Tech: {p.technologies.join(", ")}
                </p>
              )}
              {p.link && (
                <p className="text-xs break-all">{p.link}</p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* TECH SKILLS */}
      {Object.values(techSkills).some((v) => v.length > 0) && (
        <Section title="Technical Skills">
          {Object.entries(techSkills).map(
            ([key, values]) =>
              values.length > 0 && (
                <p key={key}>
                  <span className="font-semibold">
                    {formatKey(key)}:
                  </span>{" "}
                  {values.join(", ")}
                </p>
              )
          )}
        </Section>
      )}

      {/* ACCOMPLISHMENTS */}
      {accomplishments.length > 0 && (
        <Section title="Accomplishments">
          <ul className="list-disc ml-5">
            {accomplishments.map((a, i) => (
              <li key={i}>{a.title}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* CERTIFICATIONS */}
      {certifications.length > 0 && (
        <Section title="Certifications">
          {certifications.map((c, i) => (
            <p key={i}>
              {c.title}
              {c.provider && ` — ${c.provider}`}
              {c.date && ` (${c.date})`}
            </p>
          ))}
        </Section>
      )}
    </div>
  );
}

/* ================= HELPERS ================= */

const Section = ({ title, children }) => (
  <section className="mb-4">
    <h2 className="text-sm font-bold uppercase border-b border-gray-400 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

const Divider = () => (
  <hr className="border-gray-400 my-3" />
);

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
