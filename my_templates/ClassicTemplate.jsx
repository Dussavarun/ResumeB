import { useEffect } from "react";
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


  const personalS = useSelector((s) => s.personalSummary?.summary || "");

useEffect(() => {
  console.log("SUMMARY CHANGED:", personalS);
}, [personalSummary]);


  return (
    <div className="bg-white px-8 py-6 text-[13px] text-gray-800 leading-snug">
      {/* ================= HEADER ================= */}
      <div className="mb-4 text-center">
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
          {databases.length > 0 && <Line label="Databases" value={databases} />}
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
                  <a href={p.link} className="text-blue-600 ml-1 text-[12px]">
                    (Link)
                  </a>
                )}
              </div>

              {/* Bullet points like Experience */}
              {p.description && (
                <ul className="list-disc list-inside mt-0.5 space-y-0 leading-tight">
                  {(Array.isArray(p.description)
                    ? p.description
                    : p.description.split("\n")
                  ).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

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
                <div className="font-bold text-[14px]">{edu.institution}</div>
                <div className="text-gray-600 text-[12px]">{edu.duration}</div>
              </div>
              <div>{edu.degree}</div>
              {edu.gpa && (
                <div className="text-gray-600 text-[12px]">GPA: {edu.gpa}</div>
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

const Divider = () => <div className="border-t-2 border-black my-3" />;

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="font-bold text-[16px] uppercase mb-1">{title}</h3>
    <div className="border-b border-black mb-2" />
    {children}
  </div>
);

const Line = ({ label, value }) => (
  <div>
    <span className="font-bold">{label}:</span> {value.join(", ")}
  </div>
);
