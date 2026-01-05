import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

/* ================= COLORS ================= */
const COLORS = {
  primary: "#111827", // near-black
  accent: "#2563eb", // blue
  muted: "#4b5563", // gray
};

export default function ModernPDF({
  personalInfo,
  personalSummary,
  education,
  experience,
  projects,
  techSkills,
  accomplishments,
  certifications,
}) {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 32,
          fontSize: 10,
          fontFamily: "Times-Roman",
          lineHeight: 1.4,
          color: COLORS.primary,
        }}
      >
        {/* ================= HEADER ================= */}
        <View style={{ marginBottom: 14 }}>
          {/* NAME */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 1.3,
              marginBottom: 4,
            }}
          >
            {personalInfo?.name}
          </Text>

          {/* CONTACT */}
          <Text style={{ color: COLORS.muted, marginBottom: 3 }}>
            {[personalInfo?.email, personalInfo?.phone, personalInfo?.location]
              .filter(Boolean)
              .join("  •  ")}
          </Text>

          {/* LINKS (CLICKABLE LABELS) */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {personalInfo?.links?.portfolio && (
              <Link src={personalInfo.links.portfolio} style={linkStyle}>
                Portfolio
              </Link>
            )}

            {personalInfo?.links?.github && (
              <Link src={personalInfo.links.github} style={linkStyle}>
                GitHub
              </Link>
            )}

            {personalInfo?.links?.linkedin && (
              <Link src={personalInfo.links.linkedin} style={linkStyle}>
                LinkedIn
              </Link>
            )}

            {personalInfo?.links?.leetcode && (
              <Link src={personalInfo.links.leetcode} style={linkStyle}>
                LeetCode
              </Link>
            )}

            {personalInfo?.links?.codeforces && (
              <Link src={personalInfo.links.codeforces} style={linkStyle}>
                Codeforces
              </Link>
            )}
          </View>
        </View>

        {/* ================= SUMMARY ================= */}
        {personalSummary && (
          <Section title="Professional Summary">
            <Text>{personalSummary}</Text>
          </Section>
        )}

        {/* ================= TECHNICAL SKILLS ================= */}
        {techSkills && (
          <Section title="Technical Skills">
            {Object.entries(techSkills).map(
              ([key, values]) =>
                values?.length > 0 && (
                  <Text key={key} style={{ marginBottom: 2 }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {formatKey(key)}:
                    </Text>{" "}
                    {values.join(", ")}
                  </Text>
                )
            )}
          </Section>
        )}

        {/* ================= EXPERIENCE ================= */}
        {experience?.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    {exp.role}
                    {exp.company && ` — ${exp.company}`}
                  </Text>
                  <Text style={{ color: COLORS.muted }}>
                    {exp.duration || `${exp.startDate} – ${exp.endDate}`}
                  </Text>
                </View>

                <Text style={{ color: COLORS.muted, marginBottom: 3 }}>
                  {exp.location}
                </Text>

                {(exp.responsibilities || []).map((r, j) => (
                  <Text key={j} style={{ marginLeft: 10 }}>
                    • {r}
                  </Text>
                ))}
              </View>
            ))}
          </Section>
        )}

        {/* ================= PROJECTS ================= */}
        {projects?.length > 0 && (
          <Section title="Projects">
            {projects.map((p, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {p.title}
                  {p.link && (
                    <>
                      {" "}
                      <Link
                        src={p.link}
                        style={{
                          color: COLORS.accent,
                          textDecoration: "underline",
                        }}
                      >
                        (Link)
                      </Link>
                    </>
                  )}
                </Text>

                <Text>{p.description}</Text>

                {p.impact && (
                  <Text style={{ fontStyle: "italic", color: COLORS.muted }}>
                    {p.impact}
                  </Text>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {certifications?.length > 0 && (
          <Section title="Certifications">
            {certifications.map((c, i) => (
              <Text key={i} style={{ marginBottom: 2 }}>
                {c.title}
                {c.provider && ` — ${c.provider}`}
                {c.date && ` (${c.date})`}
              </Text>
            ))}
          </Section>
        )}

        {/* ================= ACCOMPLISHMENTS ================= */}
        {accomplishments?.length > 0 && (
          <Section title="Accomplishments">
            {accomplishments.map((a, i) => (
              <Text key={i}>• {a.title || a}</Text>
            ))}
          </Section>
        )}

        {/* ================= EDUCATION ================= */}
        {education?.length > 0 && (
          <Section title="Education">
            {education.map((e, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{e.institution}</Text>
                  <Text style={{ color: COLORS.muted }}>{e.duration}</Text>
                </View>

                <Text>{e.degree}</Text>
                <Text style={{ color: COLORS.muted }}>
                  {e.location}
                  {e.gpa && ` | GPA: ${e.gpa}`}
                </Text>
              </View>
            ))}
          </Section>
        )}
      </Page>
    </Document>
  );
}

/* ================= SECTION ================= */

const Section = ({ title, children }) => (
  <View style={{ marginBottom: 12 }}>
    <Text
      style={{
        fontSize: 11,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: COLORS.primary,
      }}
    >
      {title}
    </Text>

    <View
      style={{
        height: 1,
        backgroundColor: COLORS.accent,
        marginVertical: 4,
      }}
    />

    {children}
  </View>
);

/* ================= HELPERS ================= */

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const linkStyle = {
  color: COLORS.accent,
  textDecoration: "underline",
  marginRight: 10,
};
