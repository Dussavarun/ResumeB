"use client";
import React from "react";
import { useSelector } from "react-redux";

const ClassicTemplate = () => {
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
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-serif">
      <Header basics={basics} profiles={profiles} />
      <div className="grid grid-cols-3 gap-8 mt-6">
        <div className="col-span-2 space-y-6">
          {experience.visible && <Experience section={experience} />}
          {education.visible && <Education section={education} />}
          {projects.visible && <Projects section={projects} />}
        </div>
        <div className="col-span-1 space-y-6">
          {skills.visible && <Skills section={skills} />}
          {profiles.visible && profiles.items.length > 0 && (
            <Profiles section={profiles} />
          )}
        </div>
      </div>
    </div>
  );
};

const Header = ({ basics = {}, profiles = { items: [] } }) => {
  const {
    name = "Your Name",
    headline = "Professional Title",
    location = "",
    phone = "",
    email = "",
    url = { href: "", label: "" },
  } = basics;

  return (
    <div className="text-center border-b-2 border-gray-800 pb-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
      {headline && <h2 className="text-xl text-gray-700 mb-4">{headline}</h2>}

      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
        {location && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{location}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
              {email}
            </a>
          </div>
        )}
        {url?.href && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            <a
              href={url.href}
              className="hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {url.label || url.href}
            </a>
          </div>
        )}
      </div>

      {profiles.visible && profiles.items.length > 0 && (
        <div className="flex justify-center gap-6 mt-4">
          {profiles.items.map((p) => (
            <a
              key={p.id || p.username}
              href={p.url?.href || "#"}
              className="text-blue-600 hover:text-blue-800 transition-colors underline"
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

const Skills = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-4">
        {section.name || "Skills"}
      </h2>
      <div className="space-y-3">
        {section.items
          .filter((s) => s.visible !== false)
          .map((s) => (
            <div key={s.id} className="space-y-1">
              <div className="font-semibold text-gray-800">{s.name}</div>
              {s.description && (
                <div className="text-sm text-gray-600">{s.description}</div>
              )}
              {s.level > 0 && (
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < s.level ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
              {s.keywords && s.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {s.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
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
    <div>
      <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-4">
        {section.name || "Experience"}
      </h2>
      <div className="space-y-4">
        {section.items
          .filter((it) => it.visible !== false)
          .map((exp) => (
            <div key={exp.id} className="border-l-2 border-blue-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {exp.organization || exp.company || exp.title}
                  </h3>
                  {exp.position && (
                    <div className="text-gray-700 italic">{exp.position}</div>
                  )}
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold text-gray-800">
                    {exp.date && (exp.date.start || exp.date.end)
                      ? `${exp.date.start || ""}${
                          exp.date.end ? " - " + exp.date.end : ""
                        }`
                      : exp.startDate
                      ? `${exp.startDate}${
                          exp.endDate ? " - " + exp.endDate : ""
                        }`
                      : ""}
                  </div>
                  {exp.location && (
                    <div className="text-gray-600">{exp.location}</div>
                  )}
                </div>
              </div>
              {exp.summary && (
                <div className="text-gray-700 mb-2">{exp.summary}</div>
              )}
              {exp.keywords && exp.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {exp.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
              {exp.url?.href && (
                <div className="mt-2">
                  <a
                    href={exp.url.href}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {exp.url.label || exp.url.href}
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const Projects = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-4">
        {section.name || "Projects"}
      </h2>
      <div className="space-y-4">
        {section.items
          .filter((p) => p.visible !== false)
          .map((project) => (
            <div key={project.id} className="border-l-2 border-green-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {project.name || project.title}
                  </h3>
                  {project.description && (
                    <div className="text-gray-700">{project.description}</div>
                  )}
                </div>
                <div className="text-right text-sm">
                  {project.date && (project.date.start || project.date.end) && (
                    <div className="font-semibold text-gray-800">
                      {project.date.start || ""}
                      {project.date.end ? " - " + project.date.end : ""}
                    </div>
                  )}
                </div>
              </div>
              {project.keywords && project.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
              {project.url?.href && (
                <div className="mt-2">
                  <a
                    href={project.url.href}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.url.label || project.url.href}
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const Education = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-4">
        {section.name || "Education"}
      </h2>
      <div className="space-y-4">
        {section.items
          .filter((e) => e.visible !== false)
          .map((edu) => (
            <div key={edu.id} className="border-l-2 border-purple-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {edu.institution || edu.school}
                  </h3>
                  <div className="text-gray-700 italic">
                    {edu.studyType || edu.degree}
                  </div>
                  {edu.area && (
                    <div className="text-gray-600">{edu.area}</div>
                  )}
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold text-gray-800">
                    {edu.date && (edu.date.start || edu.date.end)
                      ? `${edu.date.start || ""}${
                          edu.date.end ? " - " + edu.date.end : ""
                        }`
                      : edu.startYear
                      ? `${edu.startYear}${
                          edu.endYear ? " - " + edu.endYear : ""
                        }`
                      : ""}
                  </div>
                  {edu.location && (
                    <div className="text-gray-600">{edu.location}</div>
                  )}
                </div>
              </div>
              {edu.summary && (
                <div className="text-gray-700 mb-2">{edu.summary}</div>
              )}
              {edu.score && (
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">GPA/Score:</span> {edu.score}
                </div>
              )}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-2">
                  <div className="font-semibold text-gray-800 text-sm">
                    Relevant Courses:
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {edu.courses.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const Profiles = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-4">
        {section.name || "Profiles"}
      </h2>
      <div className="space-y-2">
        {section.items.map((p) => (
          <div key={p.id || p.username} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <a
              href={p.url?.href || "#"}
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
              target="_blank"
              rel="noreferrer"
            >
              {p.network || p.username || p.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicTemplate;
