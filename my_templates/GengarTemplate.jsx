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
    <div className="h-full bg-blue-900 text-white px-5 py-5 space-y-3">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-1">
          <User className="w-8 h-8 text-blue-900" />
        </div>
        <h1 className="text-base font-bold">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-[11px] text-blue-200">
          {personalInfo.title || "Your Title"}
        </p>
      </div>

      {/* Contact */}
      <div className="space-y-0.5 text-[11px]">
        {personalInfo.location && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 shrink-0" />
            {personalInfo.location}
          </div>
        )}
        {personalInfo.phone && (
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 shrink-0" />
            {personalInfo.phone}
          </div>
        )}
        {personalInfo.email && (
          <div className="flex items-center gap-1.5 break-all">
            <Mail className="w-3 h-3 shrink-0" />
            {personalInfo.email}
          </div>
        )}
        {personalInfo.links?.portfolio && (
          <div className="flex items-center gap-1.5 break-all">
            <Globe className="w-3 h-3 shrink-0" />
            {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
          </div>
        )}
        {personalInfo.links?.linkedin && (
          <div className="flex items-center gap-1.5">
            <Link2 className="w-3 h-3 shrink-0" />
            LinkedIn
          </div>
        )}
      </div>

      {/* Skills */}
      {hasSkills && (
        <div>
          <h3 className="text-xs font-bold border-b border-blue-400 pb-0.5 mb-1.5">
            SKILLS
          </h3>

          {programmingLanguages.length > 0 && (
            <p className="text-xs text-blue-200 leading-tight">
              <b className="text-white">Languages:</b>{" "}
              {programmingLanguages.join(", ")}
            </p>
          )}
          {frameworks.length > 0 && (
            <p className="text-xs text-blue-200 leading-tight">
              <b className="text-white">Frameworks:</b>{" "}
              {frameworks.join(", ")}
            </p>
          )}
          {databases.length > 0 && (
            <p className="text-xs text-blue-200 leading-tight">
              <b className="text-white">Databases:</b>{" "}
              {databases.join(", ")}
            </p>
          )}
          {developerTools.length > 0 && (
            <p className="text-xs text-blue-200 leading-tight">
              <b className="text-white">Tools:</b>{" "}
              {developerTools.join(", ")}
            </p>
          )}
          {cloudAndDevOps.length > 0 && (
            <p className="text-xs text-blue-200 leading-tight">
              <b className="text-white">Cloud & DevOps:</b>{" "}
              {cloudAndDevOps.join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h3 className="text-xs font-bold border-b border-blue-400 pb-0.5 mb-1.5">
            CERTIFICATIONS
          </h3>

          {certifications.map((c, i) => (
            <p key={i} className="text-xs text-blue-200 leading-tight mb-1">
              <b className="text-white">{c.title}</b>
              <br />
              {c.provider} ({c.date})
            </p>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h3 className="text-xs font-bold border-b border-blue-400 pb-0.5 mb-1.5">
            EDUCATION
          </h3>

          {education.map((edu, i) => (
            <p key={i} className="text-xs text-blue-200 leading-tight mb-1">
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
    <div className="px-8 py-5 space-y-3 text-gray-800">
      {personalSummary && (
        <Section title="PROFESSIONAL SUMMARY">
          <p className="text-sm leading-tight whitespace-pre-line">
            {personalSummary}
          </p>
        </Section>
      )}

      {experiences.length > 0 && (
        <Section title="EXPERIENCE">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-sm">{exp.role}</h3>
                  <p className="text-xs text-blue-800">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <div className="text-xs">{exp.duration}</div>
              </div>

              {exp.responsibilities?.length > 0 && (
                <ul className="list-disc ml-5 mt-1 text-sm space-y-0.5">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {projects.length > 0 && (
        <Section title="PROJECTS">
          {projects.map((p, i) => (
            <div key={i} className="mb-2">
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

              {Array.isArray(p.description) && (
                <ul className="list-disc ml-5 text-sm space-y-0.5">
                  {p.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}

              {Array.isArray(p.technologies) && p.technologies.length > 0 && (
                <p className="text-xs italic text-gray-600 leading-tight">
                  Tech: {p.technologies.join(", ")}
                </p>
              )}
            </div>
          ))}
        </Section>
      )}

      {accomplishments.length > 0 && (
        <Section title="ACCOMPLISHMENTS">
          <ul className="list-disc ml-5 text-sm space-y-0.5">
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
    <h2 className="text-sm font-bold text-blue-800 border-b-2 border-blue-800 mb-1.5">
      {title}
    </h2>
    {children}
  </section>
);
