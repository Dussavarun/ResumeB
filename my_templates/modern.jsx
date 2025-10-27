"use client";
import React from "react";
import { useSelector } from "react-redux";

const ModernTemplate = () => {
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
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 shadow-2xl font-sans">
      <Header basics={basics} profiles={profiles} />
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          {experience.visible && <Experience section={experience} />}
          {projects.visible && <Projects section={projects} />}
          {education.visible && <Education section={education} />}
        </div>
        <div className="col-span-4 space-y-8">
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
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-3">{name}</h1>
          <h2 className="text-2xl text-blue-100 mb-6">{headline}</h2>

          <div className="grid grid-cols-2 gap-4 text-blue-100">
            {location && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{location}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </div>
            )}
            {url?.href && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <a
                  href={url.href}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {url.label || url.href}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {profiles.visible && profiles.items.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-6">
          {profiles.items.map((p) => (
            <a
              key={p.id || p.username}
              href={p.url?.href || "#"}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium"
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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
        {section.name || "Skills"}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h2>
      <div className="space-y-4">
        {section.items
          .filter((s) => s.visible !== false)
          .map((s) => (
            <div key={s.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{s.name}</span>
                {s.level > 0 && (
                  <span className="text-sm text-gray-600">
                    {s.level}/5
                  </span>
                )}
              </div>
              {s.description && (
                <div className="text-sm text-gray-600">{s.description}</div>
              )}
              {s.level > 0 && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(s.level / 5) * 100}%` }}
                  ></div>
                </div>
              )}
              {s.keywords && s.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {s.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-sm rounded-full"
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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
        {section.name || "Experience"}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h2>
      <div className="space-y-6">
        {section.items
          .filter((it) => it.visible !== false)
          .map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              
              <div className="ml-8 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.organization || exp.company || exp.title}
                    </h3>
                    {exp.position && (
                      <div className="text-lg text-blue-600 font-medium">
                        {exp.position}
                      </div>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
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
                      <div className="text-gray-600 mt-1">{exp.location}</div>
                    )}
                  </div>
                </div>
                {exp.summary && (
                  <div className="text-gray-700 mb-3 leading-relaxed">
                    {exp.summary}
                  </div>
                )}
                {exp.keywords && exp.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                {exp.url?.href && (
                  <div className="mt-3">
                    <a
                      href={exp.url.href}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {exp.url.label || exp.url.href}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Projects = ({ section = { items: [] } }) => {
  if (!section.items || section.items.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
        {section.name || "Projects"}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.items
          .filter((p) => p.visible !== false)
          .map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.name || project.title}
                </h3>
                {project.date && (project.date.start || project.date.end) && (
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.date.start || ""}
                    {project.date.end ? " - " + project.date.end : ""}
                  </span>
                )}
              </div>
              {project.description && (
                <div className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </div>
              )}
              {project.keywords && project.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-gray-700 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
              {project.url?.href && (
                <a
                  href={project.url.href}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  {project.url.label || "View Project"}
                </a>
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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
        {section.name || "Education"}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </h2>
      <div className="space-y-6">
        {section.items
          .filter((e) => e.visible !== false)
          .map((edu) => (
            <div key={edu.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.institution || edu.school}
                  </h3>
                  <div className="text-lg text-purple-600 font-medium">
                    {edu.studyType || edu.degree}
                  </div>
                  {edu.area && (
                    <div className="text-gray-600">{edu.area}</div>
                  )}
                </div>
                <div className="text-right text-sm">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-medium">
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
                    <div className="text-gray-600 mt-1">{edu.location}</div>
                  )}
                </div>
              </div>
              {edu.summary && (
                <div className="text-gray-700 mb-3">{edu.summary}</div>
              )}
              {edu.score && (
                <div className="bg-white px-4 py-2 rounded-lg inline-block">
                  <span className="font-semibold text-purple-600">GPA/Score:</span> 
                  <span className="ml-2 text-gray-700">{edu.score}</span>
                </div>
              )}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-4">
                  <div className="font-semibold text-gray-800 mb-2">
                    Relevant Courses:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 text-sm rounded-full"
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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
        {section.name || "Profiles"}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h2>
      <div className="space-y-3">
        {section.items.map((p) => (
          <a
            key={p.id || p.username}
            href={p.url?.href || "#"}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-200 group"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {(p.network || p.username || p.label || "P").charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
              {p.network || p.username || p.label}
            </span>
            <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModernTemplate;
