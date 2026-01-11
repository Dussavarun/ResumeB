import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

/* ================= COLORS ================= */
const COLORS = {
  primary: "#111827",
  accent: "#2563eb",
  muted: "#4b5563",
};

/* ================= MAIN ================= */
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
          paddingTop: 24,
          paddingHorizontal: 36,
          paddingBottom: 28,
          fontSize: 10,
          fontFamily: "Times-Roman",
          lineHeight: 1.4,
          color: COLORS.primary,
        }}
      >
        {/* ================= HEADER ================= */}
        <View style={{ alignItems: "center", marginBottom: 6 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {personalInfo?.name}
          </Text>

          <Text style={{ marginTop: 2 }}>
            {[personalInfo?.email, personalInfo?.phone, personalInfo?.location]
              .filter(Boolean)
              .join(" | ")}
          </Text>

          <Text style={{ marginTop: 1 }}>
            {personalInfo?.links?.linkedin} |{" "}
            {personalInfo?.links?.github} |{" "}
            {personalInfo?.links?.portfolio}
          </Text>
        </View>

        <Divider />

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
                  <Text key={key}>
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
                <Text style={{ fontWeight: "bold" }}>
                  {exp.company} — {exp.role}
                </Text>

                <Text style={{ color: COLORS.muted }}>
                  {exp.location} |{" "}
                  {exp.duration || `${exp.startDate} – ${exp.endDate}`}
                </Text>

                {(exp.responsibilities || []).map((r, j) => (
                  <Text key={j}>• {r}</Text>
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
                      <Link src={p.link} style={linkStyle}>
                        ({p.link})
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
              <Text key={i}>
                {c.title} — {c.provider}
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
                <Text style={{ fontWeight: "bold" }}>
                  {e.institution}
                </Text>
                <Text>
                  {e.degree} — {e.duration}
                </Text>
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
  <View style={{ marginBottom: 10 }}>
    <Text
      style={{
        fontSize: 11,
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
    <Divider />
    {children}
  </View>
);

const Divider = () => (
  <View
    style={{
      height: 1,
      backgroundColor: COLORS.primary,
      marginVertical: 4,
    }}
  />
);

/* ================= HELPERS ================= */

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const linkStyle = {
  color: COLORS.accent,
  textDecoration: "underline",
};
