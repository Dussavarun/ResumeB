// "use client";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Mail, Phone, MapPin, Link2, Globe, User } from "lucide-react";

// /* ===================== SIDEBAR ===================== */
// const Sidebar = () => {
//   const personalInfo = useSelector((s) => s.user?.personalInfo || {});
//   const rawSkills = useSelector((s) => s.techskills || {});

//   const {
//     programmingLanguages = [],
//     frameworks = [],
//     databases = [],
//     developerTools = [],
//     cloudAndDevOps = [],
//   } = rawSkills;

//   const hasSkills =
//     programmingLanguages.length ||
//     frameworks.length ||
//     databases.length ||
//     developerTools.length ||
//     cloudAndDevOps.length;

//   return (
//     <div className="h-full bg-blue-900 text-white px-6 py-8 space-y-6">
//       {/* Profile */}
//       <div className="flex flex-col items-center text-center">
//         <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-3">
//           <User className="w-12 h-12 text-blue-900" />
//         </div>
//         <h1 className="text-xl font-bold">
//           {personalInfo.name || "Your Name"}
//         </h1>
//         <p className="text-sm text-blue-200">
//           {personalInfo.title || "Your Title"}
//         </p>
//       </div>

//       {/* Contact */}
//       <div className="space-y-2 text-sm">
//         {personalInfo.location && (
//           <div className="flex gap-2">
//             <MapPin className="w-4 h-4" />
//             {personalInfo.location}
//           </div>
//         )}
//         {personalInfo.phone && (
//           <div className="flex gap-2">
//             <Phone className="w-4 h-4" />
//             {personalInfo.phone}
//           </div>
//         )}
//         {personalInfo.email && (
//           <div className="flex gap-2 break-all">
//             <Mail className="w-4 h-4" />
//             {personalInfo.email}
//           </div>
//         )}
//         {personalInfo.links?.portfolio && (
//           <div className="flex gap-2 break-all">
//             <Globe className="w-4 h-4" />
//             {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
//           </div>
//         )}
//         {personalInfo.links?.linkedin && (
//           <div className="flex gap-2">
//             <Link2 className="w-4 h-4" />
//             LinkedIn
//           </div>
//         )}
//       </div>

//       {/* Skills */}
//       {hasSkills && (
//         <div>
//           <h3 className="text-sm font-bold border-b border-blue-400 pb-1 mb-3">
//             SKILLS
//           </h3>

//           {programmingLanguages.length > 0 && (
//             <p className="text-sm text-blue-200">
//               <b className="text-white">Languages:</b> {programmingLanguages.join(", ")}
//             </p>
//           )}
//           {frameworks.length > 0 && (
//             <p className="text-sm text-blue-200 mt-2">
//               <b  className="text-white">Frameworks:</b> {frameworks.join(", ")}
//             </p>
//           )}
//           {databases.length > 0 && (
//             <p className="text-sm text-blue-200 mt-2">
//               <b  className="text-white">Databases:</b> {databases.join(", ")}
//             </p>
//           )}
//           {developerTools.length > 0 && (
//             <p className="text-sm text-blue-200 mt-2">
//               <b  className="text-white">Tools:</b> {developerTools.join(", ")}
//             </p>
//           )}
//           {cloudAndDevOps.length > 0 && (
//             <p className="text-sm text-blue-200 mt-2">
//               <b  className="text-white">Cloud & DevOps:</b> {cloudAndDevOps.join(", ")}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// /* ===================== MAIN CONTENT ===================== */
// const MainContent = () => {
//   const personalInfo = useSelector((s) => s.user?.personalInfo || {});
//   const personalSummary = useSelector(
//     (s) => s.personalSummary?.summary || ""
//   );

//   const experiences = useSelector((s) => s.experience?.experiences || []);
//   const education = useSelector((s) => s.education?.education || []);
//   const projects = useSelector((s) => s.project?.projects || []);
//   const certifications = useSelector(
//     (s) => s.certifications?.certifications || []
//   );
//   const accomplishments = useSelector(
//     (s) => s.accomplishments?.accomplishments || []
//   );

//   return (
//     <div className="px-8 py-8 space-y-6 text-gray-800">
//       {/* Summary */}
//       {personalSummary && (
//         <p className="text-sm leading-relaxed whitespace-pre-line">
//           {personalSummary}
//         </p>
//       )}

//       {/* Experience */}
//       {experiences.length > 0 && (
//         <Section title="EXPERIENCE">
//           {experiences.map((exp, i) => (
//             <div key={i} className="mb-4">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="font-bold text-sm">{exp.role}</h3>
//                   <p className="text-sm text-blue-800">
//                     {exp.company}
//                     {exp.location && ` • ${exp.location}`}
//                   </p>
//                 </div>
//                 <div className="text-sm">{exp.duration}</div>
//               </div>

//               {exp.responsibilities?.length > 0 && (
//                 <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
//                   {exp.responsibilities.map((r, idx) => (
//                     <li key={idx}>{r}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* Projects */}
//       {projects.length > 0 && (
//         <Section title="PROJECTS">
//           {projects.map((p, i) => (
//             <div key={i} className="mb-3">
//               <div className="flex items-center gap-2">
//                 <h3 className="font-bold text-sm">{p.title}</h3>
//                 {p.link && (
//                   <a
//                     href={p.link}
//                     className="text-blue-800 text-xs underline"
//                   >
//                     Link
//                   </a>
//                 )}
//               </div>
//               {p.description && (
//                 <p className="text-sm">{p.description}</p>
//               )}
//               {p.impact && (
//                 <p className="text-sm italic text-gray-600">
//                   {p.impact}
//                 </p>
//               )}
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* Certifications */}
//       {certifications.length > 0 && (
//         <Section title="CERTIFICATIONS">
//           {certifications.map((c, i) => (
//             <div key={i} className="text-sm mb-2">
//               <b>{c.title}</b> — {c.provider} ({c.date})
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* Accomplishments */}
//       {accomplishments.length > 0 && (
//         <Section title="ACCOMPLISHMENTS">
//           <ul className="list-disc ml-5 text-sm space-y-1">
//             {accomplishments.map((a, i) => (
//               <li key={i}>{a.title || a}</li>
//             ))}
//           </ul>
//         </Section>
//       )}

//       {/* Education */}
//       {education.length > 0 && (
//         <Section title="EDUCATION">
//           {education.map((edu, i) => (
//             <div key={i} className="mb-3 flex justify-between">
//               <div>
//                 <h3 className="font-bold text-sm">{edu.institution}</h3>
//                 <p className="text-sm">{edu.degree}</p>
//                 {edu.gpa && (
//                   <p className="text-sm text-gray-600">
//                     GPA: {edu.gpa}
//                   </p>
//                 )}
//               </div>
//               <div className="text-sm text-right">
//                 {edu.duration && <div>{edu.duration}</div>}
//                 {edu.location && <div>{edu.location}</div>}
//               </div>
//             </div>
//           ))}
//         </Section>
//       )}
//     </div>
//   );
// };

// /* ===================== TEMPLATE ===================== */
// export default function GengarTemplate() {
//   return (
//     <div className="flex w-full min-h-screen bg-white">
//       <div className="w-[30%]">
//         <Sidebar />
//       </div>
//       <div className="w-[70%]">
//         <MainContent />
//       </div>
//     </div>
//   );
// }

// /* ===================== SECTION ===================== */
// const Section = ({ title, children }) => (
//   <section>
//     <h2 className="text-sm font-bold text-blue-800 border-b-2 border-blue-800 mb-3">
//       {title}
//     </h2>
//     {children}
//   </section>
// );
"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Link2, Globe, User } from "lucide-react";

/* ===================== SIDEBAR ===================== */
const Sidebar = () => {
  const personalInfo = useSelector((s) => s.user?.personalInfo || {});
  const rawSkills = useSelector((s) => s.techskills || {});
  const certifications = useSelector(
    (s) => s.certifications?.certifications || []
  );
  const education = useSelector((s) => s.education?.education || []);

  const {
    programmingLanguages = [],
    frameworks = [],
    databases = [],
    developerTools = [],
    cloudAndDevOps = [],
  } = rawSkills;

  const hasSkills =
    programmingLanguages.length ||
    frameworks.length ||
    databases.length ||
    developerTools.length ||
    cloudAndDevOps.length;

  return (
    <div className="h-full bg-blue-900 text-white px-6 py-8 space-y-6">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-3">
          <User className="w-12 h-12 text-blue-900" />
        </div>
        <h1 className="text-xl font-bold">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-sm text-blue-200">
          {personalInfo.title || "Your Title"}
        </p>
      </div>

      {/* Contact */}
      <div className="space-y-2 text-sm">
        {personalInfo.location && (
          <div className="flex gap-2">
            <MapPin className="w-4 h-4" />
            {personalInfo.location}
          </div>
        )}
        {personalInfo.phone && (
          <div className="flex gap-2">
            <Phone className="w-4 h-4" />
            {personalInfo.phone}
          </div>
        )}
        {personalInfo.email && (
          <div className="flex gap-2 break-all">
            <Mail className="w-4 h-4" />
            {personalInfo.email}
          </div>
        )}
        {personalInfo.links?.portfolio && (
          <div className="flex gap-2 break-all">
            <Globe className="w-4 h-4" />
            {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
          </div>
        )}
        {personalInfo.links?.linkedin && (
          <div className="flex gap-2">
            <Link2 className="w-4 h-4" />
            LinkedIn
          </div>
        )}
      </div>

      {/* Skills */}
      {hasSkills && (
        <div>
          <h3 className="text-sm font-bold border-b border-blue-400 pb-1 mb-3">
            SKILLS
          </h3>

          {programmingLanguages.length > 0 && (
            <p className="text-sm text-blue-200">
              <b className="text-white">Languages:</b>{" "}
              {programmingLanguages.join(", ")}
            </p>
          )}
          {frameworks.length > 0 && (
            <p className="text-sm text-blue-200 mt-2">
              <b className="text-white">Frameworks:</b>{" "}
              {frameworks.join(", ")}
            </p>
          )}
          {databases.length > 0 && (
            <p className="text-sm text-blue-200 mt-2">
              <b className="text-white">Databases:</b>{" "}
              {databases.join(", ")}
            </p>
          )}
          {developerTools.length > 0 && (
            <p className="text-sm text-blue-200 mt-2">
              <b className="text-white">Tools:</b>{" "}
              {developerTools.join(", ")}
            </p>
          )}
          {cloudAndDevOps.length > 0 && (
            <p className="text-sm text-blue-200 mt-2">
              <b className="text-white">Cloud & DevOps:</b>{" "}
              {cloudAndDevOps.join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h3 className="text-sm font-bold border-b border-blue-400 pb-1 mb-3">
            CERTIFICATIONS
          </h3>

          {certifications.map((c, i) => (
            <p key={i} className="text-sm text-blue-200 mb-2">
              <b className="text-white">{c.title}</b>
              <br />
              {c.provider} ({c.date})
            </p>
          ))}
        </div>
      )}

      {/* Education (Moved Here) */}
      {education.length > 0 && (
        <div>
          <h3 className="text-sm font-bold border-b border-blue-400 pb-1 mb-3">
            EDUCATION
          </h3>

          {education.map((edu, i) => (
            <p key={i} className="text-sm text-blue-200 mb-2">
              <b className="text-white">{edu.institution}</b>
              <br />
              {edu.degree}
              {edu.gpa && ` • GPA: ${edu.gpa}`}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

/* ===================== MAIN CONTENT ===================== */
const MainContent = () => {
  const personalSummary = useSelector(
    (s) => s.personalSummary?.summary || ""
  );
  const experiences = useSelector((s) => s.experience?.experiences || []);
  const projects = useSelector((s) => s.project?.projects || []);
  const accomplishments = useSelector(
    (s) => s.accomplishments?.accomplishments || []
  );

  return (
    <div className="px-8 py-8 space-y-6 text-gray-800">
      {/* Professional Summary */}
      {personalSummary && (
        <Section title="PROFESSIONAL SUMMARY">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {personalSummary}
          </p>
        </Section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <Section title="EXPERIENCE">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-sm">{exp.role}</h3>
                  <p className="text-sm text-blue-800">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <div className="text-sm">{exp.duration}</div>
              </div>

              {exp.responsibilities?.length > 0 && (
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <Section title="PROJECTS">
          {projects.map((p, i) => (
            <div key={i} className="mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">{p.title}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    className="text-blue-800 text-xs underline"
                  >
                    Link
                  </a>
                )}
              </div>
              {p.description && (
                <p className="text-sm">{p.description}</p>
              )}
              {p.impact && (
                <p className="text-sm italic text-gray-600">
                  {p.impact}
                </p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Accomplishments */}
      {accomplishments.length > 0 && (
        <Section title="ACCOMPLISHMENTS">
          <ul className="list-disc ml-5 text-sm space-y-1">
            {accomplishments.map((a, i) => (
              <li key={i}>{a.title || a}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
};

/* ===================== TEMPLATE ===================== */
export default function GengarTemplate() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      <div className="w-[30%]">
        <Sidebar />
      </div>
      <div className="w-[70%]">
        <MainContent />
      </div>
    </div>
  );
}

/* ===================== SECTION ===================== */
const Section = ({ title, children }) => (
  <section>
    <h2 className="text-sm font-bold text-blue-800 border-b-2 border-blue-800 mb-3">
      {title}
    </h2>
    {children}
  </section>
);
