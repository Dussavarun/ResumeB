import { useSelector } from "react-redux";

const CheckPointTemplate = () => {
  const personalInfo = useSelector((s) => s.user?.personalInfo || {});
  const experience = useSelector((s) => s.experience?.experiences || []);
  const education = useSelector((s) => s.education?.education || []);
  const projects = useSelector((s) => s.project?.projects || []);
  const certifications = useSelector(
    (s) => s.certifications?.certifications || []
  );
  const skills = useSelector((s) => s.techskills || {});

  return (
    <div className="bg-white px-12 py-10 text-[13px] leading-[1.6] text-gray-900 font-serif">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-8">
        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
          {personalInfo?.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        <h1 className="text-[20px] font-bold tracking-wide">
          {personalInfo?.name || "Your Name"}
        </h1>

        <p className="text-gray-600 text-sm">Software Engineer</p>

        <p className="text-gray-600 text-sm mt-1">
          {[personalInfo.location, personalInfo.phone, personalInfo.email]
            .filter(Boolean)
            .join(" · ")}
        </p>

        <p className="text-gray-600 text-sm">
          GitHub · LinkedIn · Portfolio
        </p>
      </div>

      <Divider />

      {/* ================= WORK EXPERIENCE ================= */}
      {experience.length > 0 && (
        <Section label="Work Experience">
          {experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between">
                <div className="font-bold">
                  {exp.company} — {exp.role}
                </div>
                <div className="text-gray-600">
                  {exp.duration}
                </div>
              </div>

              <div className="text-gray-600 mb-1">
                {exp.location}
              </div>

              <ul className="list-disc list-inside">
                {exp.responsibilities?.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {/* ================= EDUCATION ================= */}
      {education.length > 0 && (
        <Section label="Education">
          {education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between font-bold">
                <div>{edu.institution}</div>
                <div className="text-gray-600">
                  {edu.duration}
                </div>
              </div>

              <div>{edu.degree}</div>

              <div className="text-gray-600">
                {edu.location}
                {edu.gpa && ` · GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </Section>
      )}

      {/* ================= TECHNICAL SKILLS ================= */}
      {Object.keys(skills).length > 0 && (
        <Section label="Technical Skills">
          {Object.entries(skills).map(
            ([key, values]) =>
              values?.length > 0 && (
                <div key={key}>
                  <b>
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (c) => c.toUpperCase())}
                    :
                  </b>{" "}
                  {values.join(", ")}
                </div>
              )
          )}
        </Section>
      )}

      {/* ================= PROJECTS ================= */}
      {projects.length > 0 && (
        <Section label="Notable Projects">
          {projects.map((p, i) => (
            <div key={i} className="mb-4">
              <div className="font-bold">{p.title}</div>
              <div>{p.description}</div>
            </div>
          ))}
        </Section>
      )}

      {/* ================= CERTIFICATIONS ================= */}
      {certifications.length > 0 && (
        <Section label="Certifications">
          {certifications.map((c, i) => (
            <div key={i} className="flex justify-between">
              <div className="font-bold">
                {c.title} — {c.provider}
              </div>
              <div className="text-gray-600">{c.date}</div>
            </div>
          ))}
        </Section>
      )}
    </div>
  );
};

export default CheckPointTemplate;

/* ================= SHARED ================= */

const Section = ({ label, children }) => (
  <div className="flex mb-8">
    <div className="w-[180px] font-bold">{label}</div>
    <div className="flex-1">{children}</div>
  </div>
);

const Divider = () => (
  <div className="h-px bg-gray-200 mb-8" />
);
