// "use client";
// import React from "react";
// import { useSelector } from "react-redux";

// const ClassicTemplate = () => {
//   const personalInfo = useSelector((state) => state.user?.personalInfo || {});
//   const education = useSelector((state) => state.education?.education);
//   const experiences = useSelector((state) => state.experience?.experiences);
//   const projects = useSelector((state) => state.project?.projects);
//   const skills = useSelector((state) => state.techskills);
//   const accomplishments = useSelector((state) => state.accomplishments?.accomplishments);
//   const certifications = useSelector((state) => state.certifications?.certifications);

//   return (
//     <div className="bg-white p-10 font-serif h-full overflow-auto text-sm leading-relaxed border border-gray-300">
//       {/* Header */}
//       <div className="border-b-2 border-gray-700 pb-3 mb-4 text-center">
//         <h1 className="text-3xl font-bold tracking-wide text-gray-900 mb-1">
//           {personalInfo.name || "Your Name"}
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

//       {/* Education */}
//       {education?.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Education
//           </h3>
//           {education.map((edu, idx) => (
//             <div key={idx} className="mb-2">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-bold">{edu.institution}</h4>
//                   <p>{edu.degree}</p>
//                   {edu.gpa && <p className="text-xs">GPA: {edu.gpa}</p>}
//                 </div>
//                 <div className="text-right text-xs text-gray-600">
//                   {edu.duration && <p>{edu.duration}</p>}
//                   {edu.location && <p>{edu.location}</p>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Experience */}
//       {experiences?.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Experience
//           </h3>
//           {experiences.map((exp, idx) => (
//             <div key={idx} className="mb-3">
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="font-bold">{exp.role}</h4>
//                   <p className="text-gray-700 italic">
//                     {exp.company}
//                     {exp.location && `, ${exp.location}`}
//                   </p>
//                 </div>
//                 {exp.duration && (
//                   <p className="text-xs text-gray-600">{exp.duration}</p>
//                 )}
//               </div>
//               {exp.responsibilities?.length > 0 && (
//                 <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-0.5">
//                   {exp.responsibilities.map((resp, i) => (
//                     <li key={i}>{resp}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Projects */}
//       {projects?.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Projects
//           </h3>
//           {projects.map((project, idx) => (
//             <div key={idx} className="mb-2">
//               <div className="flex justify-between">
//                 <h4 className="font-bold">{project.title}</h4>
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
//                 <p className="text-xs text-gray-700">{project.description}</p>
//               )}
//               {project.impact && (
//                 <p className="text-xs italic text-gray-600">{project.impact}</p>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Technical Skills */}
//       {(skills.programmingLanguages?.length > 0 ||
//         skills.frameworks?.length > 0 ||
//         skills.databases?.length > 0 ||
//         skills.developerTools?.length > 0 ||
//         skills.cloudAndDevOps?.length > 0) && (
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
//       {certifications?.length > 0 && (
//         <section className="mb-4">
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Certifications
//           </h3>
//           {certifications.map((cert, idx) => (
//             <div key={idx} className="flex justify-between text-xs mb-1">
//               <div>
//                 <p className="font-semibold">{cert.title}</p>
//                 {cert.provider && <p>{cert.provider}</p>}
//               </div>
//               <div className="text-right">
//                 {cert.date && <p>{cert.date}</p>}
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
//       {accomplishments?.length > 0 && (
//         <section>
//           <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
//             Accomplishments
//           </h3>
//           <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
//             {accomplishments.map((acc, idx) => (
//               <li key={idx}>{acc.title || acc}</li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </div>
//   );
// };

// export default ClassicTemplate;

"use client";
import React from "react";
import { useSelector } from "react-redux";

const ClassicTemplate = () => {
  const personalInfo = useSelector((state) => state.user?.personalInfo || {});
  const education = useSelector((state) => state.education?.education || []);
  const experiences = useSelector((state) => state.experience?.experiences || []);
  const projects = useSelector((state) => state.project?.projects || []);
  const skills = useSelector((state) => state.techskills || {});
  const accomplishments = useSelector(
    (state) => state.accomplishments?.accomplishments || []
  );
  const certifications = useSelector(
    (state) => state.certifications?.certifications || []
  );

  const safeText = (val) => {
    if (!val) return "";
    if (typeof val === "object") return JSON.stringify(val);
    return val;
  };

  return (
    <div className="bg-white p-10 font-serif h-full overflow-auto text-sm leading-relaxed border border-gray-300">
      {/* Header */}
      <div className="border-b-2 border-gray-700 pb-3 mb-4 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-gray-900 mb-1">
          {safeText(personalInfo.name) || "Your Name"}
        </h1>
        <div className="text-xs text-gray-700">
          {[personalInfo.email, personalInfo.phone, personalInfo.location]
            .filter(Boolean)
            .join(" | ")}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
            Education
          </h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <h4 className="font-bold">{safeText(edu.institution)}</h4>
              <p>{safeText(edu.degree)}</p>
              {edu.gpa && <p className="text-xs">GPA: {safeText(edu.gpa)}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
            Experience
          </h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <h4 className="font-bold">{safeText(exp.role)}</h4>
              <p className="italic">{safeText(exp.company)}</p>
              {Array.isArray(exp.responsibilities) &&
                exp.responsibilities.map((resp, i) => (
                  <p key={i} className="text-xs text-gray-700">
                    • {safeText(resp)}
                  </p>
                ))}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
            Projects
          </h3>
          {projects.map((project, idx) => (
            <div key={idx} className="mb-2">
              <h4 className="font-bold">{safeText(project.title)}</h4>
              {project.description && (
                <p className="text-xs">{safeText(project.description)}</p>
              )}
              {project.impact && (
                <p className="text-xs italic text-gray-600">
                  {safeText(project.impact)}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
            Certifications
          </h3>
          {certifications.map((cert, idx) => (
            <div key={idx} className="text-xs mb-1">
              <p className="font-semibold">{safeText(cert.title)}</p>
              {cert.provider && <p>{safeText(cert.provider)}</p>}
              {cert.date && <p>{safeText(cert.date)}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Accomplishments */}
      {accomplishments.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold border-b border-gray-700 uppercase mb-2">
            Accomplishments
          </h3>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            {accomplishments.map((acc, idx) => (
              <li key={idx}>{safeText(acc.title || acc)}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
