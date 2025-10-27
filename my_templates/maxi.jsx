"use client";
import React from "react";
import { useSelector } from "react-redux";

const ResumeTemplate = () => {
  const basics = useSelector((state) => state.user?.basics || {});
  const profiles = useSelector(
    (state) => state.user?.profiles || { visible: false, items: [] }
  );
  const skills = useSelector(
    (state) => state.skills || { visible: false, items: [] }
  );
  const experience = useSelector(
    (state) => state.experience || { visible: false, items: [] }
  );
  const projects = useSelector(
    (state) => state.projects || { visible: false, items: [] }
  );
  const education = useSelector(
    (state) => state.education || { visible: false, items: [] }
  );

  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg font-serif">
      <Header basics={basics} profiles={profiles} />
      {skills.visible && <TechnicalSkills section={skills} />}
      {experience.visible && <Experience section={experience} />}
      {projects.visible && <Projects section={projects} />}
      {education.visible && <Education section={education} />}
    </div>
  );
};

const Header = ({ basics = {}, profiles = { items: [] } }) => {
  const {
    name = "Your Name",
    headline = "",
    location = "",
    phone = "",
    email = "",
    url = { href: "", label: "" },
  } = basics;

  return (
    <div className="text-center border-b-2 border-black pb-3 mb-4">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      {headline && <div className="text-lg mb-2">{headline}</div>}

      <div className="text-sm flex items-center justify-center gap-2 flex-wrap">
        {location && <span>{location}</span>}
        {phone && (
          <>
            <span>|</span>
            <a href={`tel:${phone}`} className="underline">
              {phone}
            </a>
          </>
        )}
        {email && (
          <>
            <span>|</span>
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          </>
        )}
        {url?.href && (
          <>
            <span>|</span>
            <a
              href={url.href}
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              {url.label || url.href}
            </a>
          </>
        )}
      </div>

      {profiles.visible && profiles.items.length > 0 && (
        <div className="flex justify-center gap-4 mt-2">
          {profiles.items.map((p) => (
            <a
              key={p.id || p.username}
              href={p.url?.href || "#"}
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              {p.network || p.username || p.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const TechnicalSkills = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">
        {section.name || "Skills"}
      </h2>
      <div className="text-sm flex flex-wrap gap-3">
        {section.items
          .filter((s) => s.visible !== false)
          .map((s) => (
            <div key={s.id} className="text-sm">
              • <span className="font-bold">{s.name}</span>
              {s.level > 0 && (
                <span className="ml-2 text-xs text-gray-700">
                  {Array.from({ length: s.level }).map((_, i) => "•")}
                </span>
              )}
              {s.keywords && s.keywords.length > 0 && (
                <span className="ml-2 text-gray-600">({s.keywords.join(", ")})</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const Experience = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">
        {section.name || "Experience"}
      </h2>
      {section.items
        .filter((it) => it.visible !== false)
        .map((exp) => (
          <div key={exp.id} className="mb-3 text-sm">
            <div className="flex justify-between items-start mb-1">
              <div>
                <div className="font-bold">{exp.organization || exp.company || exp.title}</div>
                {exp.position && <div className="italic">{exp.position}</div>}
                {exp.summary && <div className="mt-1">{exp.summary}</div>}
              </div>
              <div className="text-right">
                <div className="font-bold">
                  {exp.date && (exp.date.start || exp.date.end)
                    ? `${exp.date.start || ""}${exp.date.end ? " - " + exp.date.end : ""}`
                    : exp.startDate
                    ? `${exp.startDate}${exp.endDate ? " - " + exp.endDate : ""}`
                    : ""}
                </div>
                {exp.location && <div className="italic">{exp.location}</div>}
                {exp.url?.href && (
                  <div className="mt-1">
                    <a href={exp.url.href} className="underline" target="_blank" rel="noreferrer">
                      {exp.url.label || exp.url.href}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const Projects = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">
        {section.name || "Projects"}
      </h2>
      {section.items
        .filter((p) => p.visible !== false)
        .map((project) => (
          <div key={project.id} className="mb-3 text-sm">
            <div className="flex justify-between items-start mb-1">
              <div>
                <div className="font-bold">{project.name || project.title}</div>
                {project.description && <div className="mt-1">{project.description}</div>}
              </div>
              <div className="text-right">
                <div className="italic">
                  {project.date && (project.date.start || project.date.end)
                    ? `${project.date.start || ""}${project.date.end ? " - " + project.date.end : ""}`
                    : ""}
                </div>
                {project.url?.href && (
                  <div className="mt-1">
                    <a href={project.url.href} className="underline" target="_blank" rel="noreferrer">
                      {project.url.label || project.url.href}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const Education = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">
        {section.name || "Education"}
      </h2>
      {section.items
        .filter((e) => e.visible !== false)
        .map((edu) => (
          <div key={edu.id} className="mb-3 text-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold">{edu.institution || edu.school}</div>
                <div className="italic">{edu.studyType || edu.degree}</div>
                {edu.area && <div>{edu.area}</div>}
              </div>
              <div className="text-right">
                <div>{edu.location}</div>
                <div className="italic">
                  {edu.date && (edu.date.start || edu.date.end)
                    ? `${edu.date.start || ""}${edu.date.end ? " - " + edu.date.end : ""}`
                    : edu.startYear
                    ? `${edu.startYear}${edu.endYear ? " - " + edu.endYear : ""}`
                    : ""}
                </div>
              </div>
            </div>
            {edu.summary && <div className="mt-2">{edu.summary}</div>}
            {edu.courses && edu.courses.length > 0 && (
              <div className="mt-2">
                <div className="font-bold">Relevant Courses:</div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c, i) => (
                    <span key={i} className="text-sm">
                      {c}
                      {i < edu.courses.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ResumeTemplate;



