// import { useSelector } from "react-redux";

// const ModernTemplate = () => {
//   const personalInfo = useSelector((s) => s.user?.personalInfo || {});
//   const personalSummary = useSelector((s) => s.personalSummary?.summary || "");

//   const education = useSelector((s) => s.education?.education || []);
//   const experiences = useSelector((s) => s.experience?.experiences || []);
//   const projects = useSelector((s) => s.project?.projects || []);
//   const certifications = useSelector(
//     (s) => s.certifications?.certifications || []
//   );
//   const accomplishments = useSelector(
//     (s) => s.accomplishments?.accomplishments || []
//   );

//   const rawSkills = useSelector((s) => s.techskills || {});
//   const {
//     programmingLanguages = [],
//     frameworks = [],
//     databases = [],
//     developerTools = [],
//     cloudAndDevOps = [],
//   } = rawSkills;

//   /* ================= SECTION FLAGS ================= */
//   const hasSummary = personalSummary.trim().length > 0;
//   const hasEducation = education.length > 0;
//   const hasExperience = experiences.length > 0;
//   const hasProjects = projects.length > 0;
//   const hasCertifications = certifications.length > 0;
//   const hasAccomplishments = accomplishments.length > 0;
//   const hasSkills =
//     programmingLanguages.length ||
//     frameworks.length ||
//     databases.length ||
//     developerTools.length ||
//     cloudAndDevOps.length;

//   return (
//     <div className="bg-white p-8 shadow-lg h-full overflow-auto text-sm">
//       {/* ================= HEADER ================= */}
//       <div className="border-b-4 border-blue-600 pb-4 mb-4">
//         <h1 className="text-3xl font-bold text-gray-900 mb-1">
//           {personalInfo.name || "Your Name"}
//         </h1>

//         <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 mb-2">
//           {personalInfo.email && <span>{personalInfo.email}</span>}
//           {personalInfo.phone && <span>• {personalInfo.phone}</span>}
//           {personalInfo.location && <span>• {personalInfo.location}</span>}
//         </div>

//         {personalInfo.links && (
//           <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-blue-600">
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
//               <a
//                 href={personalInfo.links.codeforces}
//                 className="hover:underline"
//               >
//                 Codeforces
//               </a>
//             )}
//           </div>
//         )}
//       </div>

//       {/* ================= SUMMARY ================= */}
//       {hasSummary && (
//         <Section title="Professional Summary">
//           <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
//             {personalSummary}
//           </p>
//         </Section>
//       )}

//       {/* ================= TECHNICAL SKILLS ================= */}
//       {hasSkills && (
//         <Section title="Technical Skills">
//           <div className="space-y-1 text-xs">
//             {programmingLanguages.length > 0 && (
//               <div>
//                 <b>Languages:</b> {programmingLanguages.join(", ")}
//               </div>
//             )}
//             {frameworks.length > 0 && (
//               <div>
//                 <b>Frameworks:</b> {frameworks.join(", ")}
//               </div>
//             )}
//             {databases.length > 0 && (
//               <div>
//                 <b>Databases:</b> {databases.join(", ")}
//               </div>
//             )}
//             {developerTools.length > 0 && (
//               <div>
//                 <b>Tools:</b> {developerTools.join(", ")}
//               </div>
//             )}
//             {cloudAndDevOps.length > 0 && (
//               <div>
//                 <b>Cloud & DevOps:</b> {cloudAndDevOps.join(", ")}
//               </div>
//             )}
//           </div>
//         </Section>
//       )}

//       {/* ================= EXPERIENCE ================= */}
//       {hasExperience && (
//         <Section title="Experience">
//           {experiences.map((exp, idx) => (
//             <div key={idx} className="mb-3">
//               <div className="flex justify-between items-start mb-1">
//                 <div>
//                   <h4 className="font-bold text-gray-900">{exp.role}</h4>
//                   <div className="text-blue-600">
//                     {exp.company}
//                     {exp.location && ` • ${exp.location}`}
//                   </div>
//                 </div>
//                 {exp.duration && (
//                   <span className="text-xs text-gray-600">
//                     {exp.duration}
//                   </span>
//                 )}
//               </div>

//               {exp.responsibilities?.length > 0 && (
//                 <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5">
//                   {exp.responsibilities.map((r, i) => (
//                     <li key={i}>{r}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* ================= PROJECTS ================= */}
//       {hasProjects && (
//         <Section title="Projects">
//           {projects.map((p, idx) => (
//             <div key={idx} className="mb-2">
//               <div className="flex items-start gap-2">
//                 <h4 className="font-bold text-gray-900">{p.title}</h4>
//                 {p.link && (
//                   <a
//                     href={p.link}
//                     className="text-blue-600 text-xs hover:underline"
//                   >
//                     Link
//                   </a>
//                 )}
//               </div>
//               {p.description && (
//                 <p className="text-xs text-gray-700">{p.description}</p>
//               )}
//               {p.impact && (
//                 <p className="text-xs text-gray-600 italic">{p.impact}</p>
//               )}
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* ================= CERTIFICATIONS ================= */}
//       {hasCertifications && (
//         <Section title="Certifications">
//           {certifications.map((c, idx) => (
//             <div key={idx} className="mb-2 text-xs">
//               <b>{c.title}</b>
//               {c.provider && <span className="ml-1">— {c.provider}</span>}
//               {c.date && <span className="ml-1">({c.date})</span>}
//               {c.credentialUrl && (
//                 <span className="ml-2">
//                   (
//                   <a
//                     href={c.credentialUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     Credential
//                   </a>
//                   )
//                 </span>
//               )}
//             </div>
//           ))}
//         </Section>
//       )}

//       {/* ================= ACCOMPLISHMENTS ================= */}
//       {hasAccomplishments && (
//         <Section title="Accomplishments">
//           <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
//             {accomplishments.map((a, idx) => (
//               <li key={idx}>{a.title || a}</li>
//             ))}
//           </ul>
//         </Section>
//       )}

//       {/* ================= EDUCATION (LAST) ================= */}
//       {hasEducation && (
//         <Section title="Education">
//           {education.map((edu, idx) => (
//             <div key={idx} className="mb-3">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-bold text-gray-900">
//                     {edu.institution}
//                   </h4>
//                   <div className="text-gray-700">{edu.degree}</div>
//                   {edu.gpa && (
//                     <div className="text-gray-600 text-xs">
//                       GPA: {edu.gpa}
//                     </div>
//                   )}
//                 </div>
//                 <div className="text-right text-xs text-gray-600">
//                   {edu.duration && <div>{edu.duration}</div>}
//                   {edu.location && <div>{edu.location}</div>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Section>
//       )}
//     </div>
//   );
// };

// export default ModernTemplate;

// /* ================= REUSABLE SECTION ================= */
// const Section = ({ title, children }) => (
//   <div className="mb-4">
//     <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
//       {title}
//     </h3>
//     {children}
//   </div>
// );
import { useSelector } from "react-redux";

const ModernTemplate = () => {
  const personalInfo = useSelector((s) => s.user?.personalInfo || {});
  const personalSummary = useSelector((s) => s.personalSummary?.summary || "");

  const education = useSelector((s) => s.education?.education || []);
  const experiences = useSelector((s) => s.experience?.experiences || []);
  const projects = useSelector((s) => s.project?.projects || []);
  const certifications = useSelector(
    (s) => s.certifications?.certifications || []
  );
  const accomplishments = useSelector(
    (s) => s.accomplishments?.accomplishments || []
  );

  const rawSkills = useSelector((s) => s.techskills || {});
  const {
    programmingLanguages = [],
    frameworks = [],
    databases = [],
    developerTools = [],
    cloudAndDevOps = [],
  } = rawSkills;

  const hasSummary = personalSummary.trim().length > 0;
  const hasEducation = education.length > 0;
  const hasExperience = experiences.length > 0;
  const hasProjects = projects.length > 0;
  const hasCertifications = certifications.length > 0;
  const hasAccomplishments = accomplishments.length > 0;
  const hasSkills =
    programmingLanguages.length ||
    frameworks.length ||
    databases.length ||
    developerTools.length ||
    cloudAndDevOps.length;

  return (
    <div className="bg-white px-8 py-6 text-[13px] text-gray-800 leading-snug">
      {/* ================= HEADER ================= */}
      <div className="mb-4">
        <h1 className="text-[30px] font-bold leading-tight">
          {personalInfo.name || "Your Name"}
        </h1>

        <div className="text-[12px] text-gray-600 mt-1">
          {[personalInfo.email, personalInfo.phone, personalInfo.location]
            .filter(Boolean)
            .join("  •  ")}
        </div>

        {personalInfo.links && (
          <div className="text-[12px] text-blue-600 mt-1 space-x-4">
            {personalInfo.links.portfolio && (
              <a href={personalInfo.links.portfolio}>Portfolio</a>
            )}
            {personalInfo.links.github && (
              <a href={personalInfo.links.github}>GitHub</a>
            )}
            {personalInfo.links.linkedin && (
              <a href={personalInfo.links.linkedin}>LinkedIn</a>
            )}
            {personalInfo.links.leetcode && (
              <a href={personalInfo.links.leetcode}>LeetCode</a>
            )}
            {personalInfo.links.codeforces && (
              <a href={personalInfo.links.codeforces}>Codeforces</a>
            )}
          </div>
        )}
      </div>

      <Divider />

      {/* ================= SUMMARY ================= */}
      {hasSummary && (
        <Section title="Professional Summary">
          <p className="text-gray-700">{personalSummary}</p>
        </Section>
      )}

      {/* ================= TECHNICAL SKILLS ================= */}
      {hasSkills && (
        <Section title="Technical Skills">
          {programmingLanguages.length > 0 && (
            <Line label="Programming Languages" value={programmingLanguages} />
          )}
          {databases.length > 0 && (
            <Line label="Databases" value={databases} />
          )}
          {frameworks.length > 0 && (
            <Line label="Frameworks" value={frameworks} />
          )}
          {developerTools.length > 0 && (
            <Line label="Developer Tools" value={developerTools} />
          )}
          {cloudAndDevOps.length > 0 && (
            <Line label="Cloud And Dev Ops" value={cloudAndDevOps} />
          )}
        </Section>
      )}

      {/* ================= EXPERIENCE ================= */}
      {hasExperience && (
        <Section title="Experience">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between">
                <div className="font-bold text-[14px]">
                  {exp.role} — {exp.company}
                </div>
                <div className="text-gray-600 text-[12px] leading-tight">
                  {exp.duration}
                </div>
              </div>

              {exp.location && (
                <div className="text-gray-600 text-[12px] leading-tight">
                  {exp.location}
                </div>
              )}

              {exp.responsibilities?.length > 0 && (
                <ul className="list-disc list-inside mt-0.5 space-y-0 leading-tight">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ================= PROJECTS ================= */}
      {hasProjects && (
        <Section title="Projects">
          {projects.map((p, idx) => (
            <div key={idx} className="mb-3">
              <div className="font-bold text-[14px]">
                {p.title}
                {p.link && (
                  <a
                    href={p.link}
                    className="text-blue-600 ml-1 text-[12px]"
                  >
                    (Link)
                  </a>
                )}
              </div>
              <div>{p.description}</div>
              {p.impact && (
                <div className="italic text-gray-600 text-[12px]">
                  {p.impact}
                </div>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ================= CERTIFICATIONS ================= */}
      {hasCertifications && (
        <Section title="Certifications">
          {certifications.map((c, idx) => (
            <div key={idx}>
              <span className="font-bold">{c.title}</span>
              {c.provider && ` — ${c.provider}`}
              {c.date && ` (${c.date})`}
            </div>
          ))}
        </Section>
      )}

      {/* ================= ACCOMPLISHMENTS ================= */}
      {hasAccomplishments && (
        <Section title="Accomplishments">
          <ul className="list-disc list-inside space-y-0.5">
            {accomplishments.map((a, idx) => (
              <li key={idx}>{a.title || a}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* ================= EDUCATION ================= */}
      {hasEducation && (
        <Section title="Education">
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between">
                <div className="font-bold text-[14px]">
                  {edu.institution}
                </div>
                <div className="text-gray-600 text-[12px]">
                  {edu.duration}
                </div>
              </div>
              <div>{edu.degree}</div>
              {edu.gpa && (
                <div className="text-gray-600 text-[12px]">
                  GPA: {edu.gpa}
                </div>
              )}
            </div>
          ))}
        </Section>
      )}
    </div>
  );
};

export default ModernTemplate;

/* ================= HELPERS ================= */

const Divider = () => (
  <div className="border-t-2 border-blue-600 my-3" />
);

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="font-bold text-[16px] uppercase mb-1">
      {title}
    </h3>
    <div className="border-b border-blue-600 mb-2" />
    {children}
  </div>
);

const Line = ({ label, value }) => (
  <div>
    <span className="font-bold">{label}:</span>{" "}
    {value.join(", ")}
  </div>
);
