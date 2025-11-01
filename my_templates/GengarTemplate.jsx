// "use client";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Mail, Phone, MapPin, Link as LinkIcon, Globe, User } from "lucide-react";

// const Sidebar = () => {
//   const personalInfo = useSelector((state) => state.user?.personalInfo || {});
//   const skills = useSelector((state) => state.techskills);

//   return (
//     <div className="bg-blue-600 text-white p-6 space-y-6">
//       {/* Profile Photo */}
//       <div className="flex justify-center">
//         <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
//           {/* TODO: Add profile photo URL to personalInfo */}
//           <User className="w-16 h-16 text-blue-600" />
//         </div>
//       </div>

//       {/* Name and Title */}
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-1">
//           {personalInfo.name || "Your Name"}
//         </h1>
//         <p className="text-sm text-blue-100">
//           {personalInfo.title || "Your Title"}
//         </p>
//       </div>

//       {/* Contact Info */}
//       <div className="space-y-2 text-sm">
//         {personalInfo.location && (
//           <div className="flex items-start gap-2">
//             <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
//             <span>{personalInfo.location}</span>
//           </div>
//         )}
//         {personalInfo.phone && (
//           <div className="flex items-start gap-2">
//             <Phone className="w-4 h-4 mt-0.5 shrink-0" />
//             <span>{personalInfo.phone}</span>
//           </div>
//         )}
//         {personalInfo.email && (
//           <div className="flex items-start gap-2">
//             <Mail className="w-4 h-4 mt-0.5 shrink-0" />
//             <span className="break-all">{personalInfo.email}</span>
//           </div>
//         )}
//         {personalInfo.links?.portfolio && (
//           <div className="flex items-start gap-2">
//             <Globe className="w-4 h-4 mt-0.5 shrink-0" />
//             <a href={personalInfo.links.portfolio} className="hover:underline break-all">
//               {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
//             </a>
//           </div>
//         )}
//         {personalInfo.links?.linkedin && (
//           <div className="flex items-start gap-2">
//             <LinkIcon className="w-4 h-4 mt-0.5 shrink-0" />
//             <a href={personalInfo.links.linkedin} className="hover:underline">
//               LinkedIn
//             </a>
//           </div>
//         )}
//         {personalInfo.links?.github && (
//           <div className="flex items-start gap-2">
//             <LinkIcon className="w-4 h-4 mt-0.5 shrink-0" />
//             <a href={personalInfo.links.github} className="hover:underline">
//               GitHub
//             </a>
//           </div>
//         )}
//         {personalInfo.links?.leetcode && (
//           <div className="flex items-start gap-2">
//             <LinkIcon className="w-4 h-4 mt-0.5 shrink-0" />
//             <a href={personalInfo.links.leetcode} className="hover:underline">
//               LeetCode
//             </a>
//           </div>
//         )}
//         {personalInfo.links?.codeforces && (
//           <div className="flex items-start gap-2">
//             <LinkIcon className="w-4 h-4 mt-0.5 shrink-0" />
//             <a href={personalInfo.links.codeforces} className="hover:underline">
//               Codeforces
//             </a>
//           </div>
//         )}
//       </div>

//       {/* Skills */}
//       <div>
//         <h3 className="text-lg font-bold mb-3 border-b border-blue-400 pb-2">
//           Skills
//         </h3>
        
//         {/* TODO: Add Design Tools section to Redux state */}
//         {/* TODO: Add Prototyping section to Redux state */}
//         {/* TODO: Add Frontend section to Redux state */}
//         {/* TODO: Add Languages section to Redux state (spoken languages, not programming) */}
        
//         {skills?.programmingLanguages?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-semibold text-sm mb-2">Languages</h4>
//             <p className="text-sm text-blue-100">
//               {skills.programmingLanguages.join(", ")}
//             </p>
//           </div>
//         )}
        
//         {skills?.frameworks?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-semibold text-sm mb-2">Frameworks</h4>
//             <p className="text-sm text-blue-100">
//               {skills.frameworks.join(", ")}
//             </p>
//           </div>
//         )}
        
//         {skills?.developerTools?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-semibold text-sm mb-2">Developer Tools</h4>
//             <p className="text-sm text-blue-100">
//               {skills.developerTools.join(", ")}
//             </p>
//           </div>
//         )}
        
//         {skills?.databases?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-semibold text-sm mb-2">Databases</h4>
//             <p className="text-sm text-blue-100">
//               {skills.databases.join(", ")}
//             </p>
//           </div>
//         )}
        
//         {skills?.cloudAndDevOps?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-semibold text-sm mb-2">Cloud & DevOps</h4>
//             <p className="text-sm text-blue-100">
//               {skills.cloudAndDevOps.join(", ")}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* TODO: Add Interests section to Redux state */}
//     </div>
//   );
// };

// const MainContent = () => {
//   const personalInfo = useSelector((state) => state.user?.personalInfo || {});
//   const experiences = useSelector((state) => state.experience?.experiences || []);
//   const education = useSelector((state) => state.education?.education || []);
//   const projects = useSelector((state) => state.project?.projects || []);
//   const certifications = useSelector((state) => state.certifications?.certifications || []);
//   const accomplishments = useSelector((state) => state.accomplishments?.accomplishments || []);

//   return (
//     <div className="p-8 space-y-6">
//       {/* About/Summary */}
//       {personalInfo.summary && (
//         <section>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             {personalInfo.summary}
//           </p>
//         </section>
//       )}
//       {/* TODO: Add summary/about field to personalInfo Redux state */}

//       {/* Work Experience */}
//       {experiences.length > 0 && (
//         <section>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-1">
//             Work Experience
//           </h2>
//           <div className="space-y-4">
//             {experiences.map((item, index) => (
//               <div key={index}>
//                 <div className="flex justify-between items-start mb-2">
//                   <div>
//                     <h3 className="font-bold text-gray-900">{item.company}</h3>
//                     <p className="text-sm text-gray-700 italic">{item.role}</p>
//                   </div>
//                   <div className="text-right text-sm text-gray-600">
//                     <div>{item.duration}</div>
//                     <div>{item.location}</div>
//                   </div>
//                 </div>
//                 {item.responsibilities && item.responsibilities.length > 0 && (
//                   <ul className="text-sm text-gray-700 space-y-1">
//                     {item.responsibilities.map((resp, i) => (
//                       <li key={i} className="leading-relaxed">
//                         {resp}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Education */}
//       {education.length > 0 && (
//         <section>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-1">
//             Education
//           </h2>
//           <div className="space-y-4">
//             {education.map((item, index) => (
//               <div key={index}>
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-bold text-gray-900">{item.institution}</h3>
//                     <p className="text-sm text-gray-700">{item.degree}</p>
//                     {item.gpa && (
//                       <p className="text-sm text-gray-600">{item.gpa} GPA</p>
//                     )}
//                   </div>
//                   <div className="text-right text-sm text-gray-600">
//                     <div>{item.duration}</div>
//                     {item.location && <div>{item.location}</div>}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Featured Projects */}
//       {projects.length > 0 && (
//         <section>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-1">
//             Featured Projects
//           </h2>
//           <div className="space-y-4">
//             {projects.map((item, index) => (
//               <div key={index}>
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-bold text-gray-900">{item.title}</h3>
//                   {/* TODO: Add date field to projects Redux state */}
//                   <div className="text-sm text-gray-600">{item.date || ""}</div>
//                 </div>
//                 {item.description && (
//                   <p className="text-sm text-gray-700 mb-1">{item.description}</p>
//                 )}
//                 {item.impact && (
//                   <p className="text-sm text-gray-700 mb-1">{item.impact}</p>
//                 )}
//                 {/* TODO: Add technologies field to projects Redux state */}
//                 {item.link && (
//                   <a
//                     href={item.link}
//                     className="text-sm text-blue-600 hover:underline"
//                   >
//                     View Project
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Certifications */}
//       {certifications.length > 0 && (
//         <section>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-1">
//             Certifications
//           </h2>
//           <div className="space-y-3">
//             {certifications.map((item, index) => (
//               <div key={index} className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
//                   <p className="text-sm text-gray-700">{item.provider}</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-sm text-gray-600">{item.date}</div>
//                   {item.credentialUrl && (
//                     <a
//                       href={item.credentialUrl}
//                       className="text-sm text-blue-600 hover:underline"
//                     >
//                       Credential
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Accomplishments */}
//       {accomplishments.length > 0 && (
//         <section>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-1">
//             Accomplishments
//           </h2>
//           <ul className="text-sm text-gray-700 space-y-1">
//             {accomplishments.map((item, index) => (
//               <li key={index} className="leading-relaxed">
//                 {item.title || item}
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </div>
//   );
// };

// export default function GengarTemplate() {
//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Left Sidebar - 1/3 width */}
//       <div className="w-1/3">
//         <Sidebar />
//       </div>
      
//       {/* Right Main Content - 2/3 width */}
//       <div className="w-2/3">
//         <MainContent />
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Link2, Globe, User } from "lucide-react";

const Sidebar = () => {
  const personalInfo = useSelector((state) => state.user?.personalInfo || {});
  const skills = useSelector((state) => state.techskills);

  return (
    <div className="bg-blue-600 text-white p-4 space-y-4">
      {/* Profile Photo */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
          {/* TODO: Add profile photo URL to personalInfo */}
          <User className="w-12 h-12 text-blue-600" />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h1 className="text-xl font-bold mb-0.5">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-xs text-blue-100">
          {personalInfo.title || "Your Title"}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-1.5 text-xs">
        {personalInfo.location && (
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
        )}
        {personalInfo.phone && (
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{personalInfo.phone}</span>
          </div>
        )}
        {personalInfo.email && (
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-0.5 shrink-0" />
            <span className="break-all">{personalInfo.email}</span>
          </div>
        )}
        {personalInfo.links?.portfolio && (
          <div className="flex items-start gap-2">
            <Globe className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={personalInfo.links.portfolio} className="hover:underline break-all">
              {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
        {personalInfo.links?.linkedin && (
          <div className="flex items-start gap-2">
            <Link2 className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={personalInfo.links.linkedin} className="hover:underline">
              LinkedIn
            </a>
          </div>
        )}
        {personalInfo.links?.github && (
          <div className="flex items-start gap-2">
            <Link2 className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={personalInfo.links.github} className="hover:underline">
              GitHub
            </a>
          </div>
        )}
        {personalInfo.links?.leetcode && (
          <div className="flex items-start gap-2">
            <Link2 className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={personalInfo.links.leetcode} className="hover:underline">
              LeetCode
            </a>
          </div>
        )}
        {personalInfo.links?.codeforces && (
          <div className="flex items-start gap-2">
            <Link2 className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={personalInfo.links.codeforces} className="hover:underline">
              Codeforces
            </a>
          </div>
        )}
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-bold mb-2 border-b border-blue-400 pb-1">
          Skills
        </h3>
        
        {/* TODO: Add Design Tools section to Redux state */}
        {/* TODO: Add Prototyping section to Redux state */}
        {/* TODO: Add Frontend section to Redux state */}
        {/* TODO: Add Languages section to Redux state (spoken languages, not programming) */}
        
        {skills?.programmingLanguages?.length > 0 && (
          <div className="mb-2">
            <h4 className="font-semibold text-xs mb-1">Languages</h4>
            <p className="text-xs text-blue-100 leading-tight">
              {skills.programmingLanguages.join(", ")}
            </p>
          </div>
        )}
        
        {skills?.frameworks?.length > 0 && (
          <div className="mb-2">
            <h4 className="font-semibold text-xs mb-1">Frameworks</h4>
            <p className="text-xs text-blue-100 leading-tight">
              {skills.frameworks.join(", ")}
            </p>
          </div>
        )}
        
        {skills?.developerTools?.length > 0 && (
          <div className="mb-2">
            <h4 className="font-semibold text-xs mb-1">Developer Tools</h4>
            <p className="text-xs text-blue-100 leading-tight">
              {skills.developerTools.join(", ")}
            </p>
          </div>
        )}
        
        {skills?.databases?.length > 0 && (
          <div className="mb-2">
            <h4 className="font-semibold text-xs mb-1">Databases</h4>
            <p className="text-xs text-blue-100 leading-tight">
              {skills.databases.join(", ")}
            </p>
          </div>
        )}
        
        {skills?.cloudAndDevOps?.length > 0 && (
          <div className="mb-2">
            <h4 className="font-semibold text-xs mb-1">Cloud & DevOps</h4>
            <p className="text-xs text-blue-100 leading-tight">
              {skills.cloudAndDevOps.join(", ")}
            </p>
          </div>
        )}
      </div>

      {/* TODO: Add Interests section to Redux state */}
    </div>
  );
};

const MainContent = () => {
  const personalInfo = useSelector((state) => state.user?.personalInfo || {});
  const experiences = useSelector((state) => state.experience?.experiences || []);
  const education = useSelector((state) => state.education?.education || []);
  const projects = useSelector((state) => state.project?.projects || []);
  const certifications = useSelector((state) => state.certifications?.certifications || []);
  const accomplishments = useSelector((state) => state.accomplishments?.accomplishments || []);

  return (
    <div className="p-6 space-y-2.5">
      {/* About/Summary */}
      {personalInfo.summary && (
        <section>
          <p className="text-xs text-gray-700 leading-snug">
            {personalInfo.summary}
          </p>
        </section>
      )}
      {/* TODO: Add summary/about field to personalInfo Redux state */}

      {/* Work Experience */}
      {experiences.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-0.5">
            Work Experience
          </h2>
          <div className="space-y-3">
            {experiences.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">{item.company}</h3>
                    <p className="text-xs text-gray-700 italic">{item.role}</p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <div>{item.duration}</div>
                    <div>{item.location}</div>
                  </div>
                </div>
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-snug">
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-0.5">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">{item.institution}</h3>
                    <p className="text-xs text-gray-700">{item.degree}</p>
                    {item.gpa && (
                      <p className="text-xs text-gray-600">{item.gpa} GPA</p>
                    )}
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <div>{item.duration}</div>
                    {item.location && <div>{item.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-0.5">
            Featured Projects
          </h2>
          <div className="space-y-2">
            {projects.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                  {/* TODO: Add date field to projects Redux state */}
                  <div className="text-xs text-gray-600">{item.date || ""}</div>
                </div>
                {item.description && (
                  <p className="text-xs text-gray-700 mb-0.5 leading-snug">{item.description}</p>
                )}
                {item.impact && (
                  <p className="text-xs text-gray-700 mb-0.5 leading-snug">{item.impact}</p>
                )}
                {/* TODO: Add technologies field to projects Redux state */}
                {item.link && (
                  <a
                    href={item.link}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-0.5">
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xs text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-700">{item.provider}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-600">{item.date}</div>
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Accomplishments */}
      {accomplishments.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-0.5">
            Accomplishments
          </h2>
          <ul className="text-xs text-gray-700 space-y-0.5">
            {accomplishments.map((item, index) => (
              <li key={index} className="leading-snug">
                {item.title || item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default function TwoColumnResumeTemplate() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - 1/3 width */}
      <div className="w-1/3">
        <Sidebar />
      </div>
      
      {/* Right Main Content - 2/3 width */}
      <div className="w-2/3">
        <MainContent />
      </div>
    </div>
  );
}