"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Link as LinkIcon, Globe } from "lucide-react";

const Header = () => {
  const personalInfo = useSelector((state) => state.user?.personalInfo || {});

  return (
    <div className="bg-blue-600 px-6 pb-7 pt-6 text-white rounded-t-lg">
      <div className="space-y-2.5">
        <div>
          <h2 className="text-2xl font-bold">{personalInfo.name || "Your Name"}</h2>
          <p className="text-blue-100">{personalInfo.title || ""}</p>
        </div>

        <hr className="border-white opacity-50" />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          {personalInfo.email && (
            <>
              <div className="flex items-center gap-x-1.5">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white last:hidden" />
            </>
          )}
          {personalInfo.phone && (
            <>
              <div className="flex items-center gap-x-1.5">
                <Phone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white last:hidden" />
            </>
          )}
          {personalInfo.location && (
            <>
              <div className="flex items-center gap-x-1.5">
                <MapPin className="w-4 h-4" />
                <div>{personalInfo.location}</div>
              </div>
            </>
          )}
        </div>

        {personalInfo.links && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            {personalInfo.links.portfolio && (
              <>
                <a href={personalInfo.links.portfolio} className="flex items-center gap-x-1.5 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
                <div className="w-1 h-1 rounded-full bg-white last:hidden" />
              </>
            )}
            {personalInfo.links.github && (
              <>
                <a href={personalInfo.links.github} className="flex items-center gap-x-1.5 hover:underline">
                  <LinkIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <div className="w-1 h-1 rounded-full bg-white last:hidden" />
              </>
            )}
            {personalInfo.links.linkedin && (
              <>
                <a href={personalInfo.links.linkedin} className="flex items-center gap-x-1.5 hover:underline">
                  <LinkIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <div className="w-1 h-1 rounded-full bg-white last:hidden" />
              </>
            )}
            {personalInfo.links.leetcode && (
              <>
                <a href={personalInfo.links.leetcode} className="flex items-center gap-x-1.5 hover:underline">
                  <LinkIcon className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
                <div className="w-1 h-1 rounded-full bg-white last:hidden" />
              </>
            )}
            {personalInfo.links.codeforces && (
              <a href={personalInfo.links.codeforces} className="flex items-center gap-x-1.5 hover:underline">
                <LinkIcon className="w-4 h-4" />
                <span>Codeforces</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const education = useSelector((state) => state.education?.education);

  if (!education || education.length === 0) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Education
      </h4>
      <div className="space-y-3">
        {education.map((item, index) => (
          <div key={index}>
            <div className="flex items-start justify-between">
              <div className="text-left">
                <div className="font-bold text-gray-900">{item.institution}</div>
                <div className="text-sm text-gray-700">{item.degree}</div>
                {item.gpa && <div className="text-sm text-gray-600">GPA: {item.gpa}</div>}
              </div>
              <div className="shrink-0 text-right text-sm">
                {item.duration && <div className="font-semibold text-gray-900">{item.duration}</div>}
                {item.location && <div className="text-gray-600">{item.location}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = useSelector((state) => state.experience?.experiences);

  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Experience
      </h4>
      <div className="space-y-3">
        {experiences.map((item, index) => (
          <div key={index}>
            <div className="flex items-start justify-between">
              <div className="text-left">
                <div className="font-bold text-gray-900">{item.role}</div>
                <div className="text-sm text-gray-700 italic">
                  {item.company}
                  {item.location && `, ${item.location}`}
                </div>
              </div>
              <div className="shrink-0 text-right">
                {item.duration && <div className="font-semibold text-sm text-gray-900">{item.duration}</div>}
              </div>
            </div>
            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-0.5">
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = useSelector((state) => state.project?.projects);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Projects
      </h4>
      <div className="space-y-3">
        {projects.map((item, index) => (
          <div key={index}>
            <div className="flex items-start justify-between">
              <div className="text-left flex-1">
                <div className="font-bold text-gray-900">{item.title}</div>
                {item.description && (
                  <div className="text-sm text-gray-700 mt-1">{item.description}</div>
                )}
                {item.impact && (
                  <div className="text-sm text-gray-600 italic mt-1">{item.impact}</div>
                )}
              </div>
              {item.link && (
                <div className="shrink-0 ml-4">
                  <a href={item.link} className="text-blue-600 text-sm hover:underline">
                    Link
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = useSelector((state) => state.techskills);

  const hasSkills = skills && (
    skills.programmingLanguages?.length > 0 ||
    skills.frameworks?.length > 0 ||
    skills.databases?.length > 0 ||
    skills.developerTools?.length > 0 ||
    skills.cloudAndDevOps?.length > 0
  );

  if (!hasSkills) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Technical Skills
      </h4>
      <div className="space-y-2 text-sm">
        {skills.programmingLanguages?.length > 0 && (
          <div>
            <span className="font-semibold text-gray-900">Languages: </span>
            <span className="text-gray-700">{skills.programmingLanguages.join(", ")}</span>
          </div>
        )}
        {skills.frameworks?.length > 0 && (
          <div>
            <span className="font-semibold text-gray-900">Frameworks: </span>
            <span className="text-gray-700">{skills.frameworks.join(", ")}</span>
          </div>
        )}
        {skills.databases?.length > 0 && (
          <div>
            <span className="font-semibold text-gray-900">Databases: </span>
            <span className="text-gray-700">{skills.databases.join(", ")}</span>
          </div>
        )}
        {skills.developerTools?.length > 0 && (
          <div>
            <span className="font-semibold text-gray-900">Tools: </span>
            <span className="text-gray-700">{skills.developerTools.join(", ")}</span>
          </div>
        )}
        {skills.cloudAndDevOps?.length > 0 && (
          <div>
            <span className="font-semibold text-gray-900">Cloud & DevOps: </span>
            <span className="text-gray-700">{skills.cloudAndDevOps.join(", ")}</span>
          </div>
        )}
      </div>
    </section>
  );
};

const Certifications = () => {
  const certifications = useSelector((state) => state.certifications?.certifications || []);

  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Certifications
      </h4>
      <div className="space-y-2">
        {certifications.map((item, index) => (
          <div key={index} className="flex items-start justify-between text-sm">
            <div className="text-left">
              <div className="font-semibold text-gray-900">{item.title}</div>
              {item.provider && <div className="text-gray-700">{item.provider}</div>}
            </div>
            <div className="shrink-0 text-right ml-4">
              {item.date && <div className="text-gray-900">{item.date}</div>}
              {item.credentialUrl && (
                <a href={item.credentialUrl} className="text-blue-600 hover:underline">
                  Credential
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Accomplishments = () => {
  const accomplishments = useSelector((state) => state.accomplishments?.accomplishments || []);

  if (!accomplishments || accomplishments.length === 0) return null;

  return (
    <section className="mb-4">
      <h4 className="mb-2 border-b-2 border-blue-600 text-base font-bold text-gray-900 uppercase">
        Accomplishments
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {accomplishments.map((item, index) => (
          <li key={index}>{item.title || item}</li>
        ))}
      </ul>
    </section>
  );
};

export default function PikachuTemplate() {
  return (
    <div className="p-6 bg-white min-h-full">
      {/* Header */}
      <Header />

      {/* Main Content - Single Column */}
      <div className="mt-6 space-y-4">
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Accomplishments />
        <Education />
      </div>
    </div>
  );
}