import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

/* ================= COLORS ================= */
const COLORS = {
  primary: "#111827",
  accent: "#2563eb",
  muted: "#4b5563",
};

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 28,
    fontFamily: "Times-Roman",
    color: COLORS.primary,
    fontSize: 11,
  },

  /* HEADER */
  header: {
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },

  contact: {
    fontSize: 10,
    color: COLORS.muted,
    marginBottom: 1,
  },

  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  link: {
    fontSize: 10,
    color: COLORS.accent,
    textDecoration: "underline",
    marginRight: 10,
  },

  /* SECTION */
  section: {
    marginBottom: 6,
  },

  sectionTitle: {
    fontSize: 13.5, // slightly smaller
    fontWeight: "semibold", // 🔥 lighter
    textTransform: "uppercase",
    letterSpacing: 0.5, // cleaner, ATS-safe
    marginBottom: 1,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.accent,
    marginBottom: 3,
  },

  /* TEXT */
  body: {
    fontSize: 11,
    lineHeight: 1.2, // 🔥 tighter
  },

  bold: {
    fontWeight: "bold",
  },

  muted: {
    fontSize: 10,
    color: COLORS.muted,
    lineHeight: 1.15,
  },

  item: {
    marginBottom: 6, // 🔥 tighter
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bullet: {
    marginLeft: 10,
    fontSize: 11,
    lineHeight: 1.15, // 🔥 tighter bullets
  },
});

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
      <Page size="A4" style={styles.page}>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo?.name}</Text>

          <Text style={styles.contact}>
            {[personalInfo?.email, personalInfo?.phone, personalInfo?.location]
              .filter(Boolean)
              .join("  •  ")}
          </Text>

          <View style={styles.linksRow}>
            {personalInfo?.links?.portfolio && (
              <Link src={personalInfo.links.portfolio} style={styles.link}>
                Portfolio
              </Link>
            )}
            {personalInfo?.links?.github && (
              <Link src={personalInfo.links.github} style={styles.link}>
                GitHub
              </Link>
            )}
            {personalInfo?.links?.linkedin && (
              <Link src={personalInfo.links.linkedin} style={styles.link}>
                LinkedIn
              </Link>
            )}
            {personalInfo?.links?.leetcode && (
              <Link src={personalInfo.links.leetcode} style={styles.link}>
                LeetCode
              </Link>
            )}
            {personalInfo?.links?.codeforces && (
              <Link src={personalInfo.links.codeforces} style={styles.link}>
                Codeforces
              </Link>
            )}
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.accent,
            marginBottom: 6,
          }}
        />

        {/* ================= SUMMARY ================= */}
        {personalSummary && (
          <Section title="Professional Summary">
            <Text style={styles.body}>{personalSummary}</Text>
          </Section>
        )}

        {/* ================= TECHNICAL SKILLS ================= */}
        {techSkills && (
          <Section title="Technical Skills">
            {Object.entries(techSkills).map(
              ([key, values]) =>
                values?.length > 0 && (
                  <Text key={key} style={styles.body}>
                    <Text style={styles.bold}>{formatKey(key)}:</Text>{" "}
                    {values.join(", ")}
                  </Text>
                ),
            )}
          </Section>
        )}

        {/* ================= EXPERIENCE ================= */}
        {experience?.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.row}>
                  <Text style={[styles.bold, { fontSize: 12 }]}>
                    {exp.role} — {exp.company}
                  </Text>
                  <Text style={styles.muted}>{exp.duration}</Text>
                </View>

                {exp.location && (
                  <Text style={styles.muted}>{exp.location}</Text>
                )}

                {(exp.responsibilities || []).map((r, j) => (
                  <Text key={j} style={styles.bullet}>
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
                {/* Title + Link */}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: 1.15,
                  }}
                >
                  {p.title}
                  {p.link && (
                    <>
                      {" "}
                      <Link src={p.link} style={styles.link}>
                        (Link)
                      </Link>
                    </>
                  )}
                </Text>

                {/* Description bullets */}
                {Array.isArray(p.description) &&
                  p.description.map((d, j) => (
                    <Text
                      key={j}
                      style={{
                        fontSize: 11,
                        lineHeight: 1.2,
                        marginLeft: 8,
                      }}
                    >
                      • {d}
                    </Text>
                  ))}

                {/* Technologies */}
                {Array.isArray(p.technologies) && p.technologies.length > 0 && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: COLORS.muted,
                      lineHeight: 1.15,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Tech:</Text>{" "}
                    {p.technologies.join(", ")}
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
              <Text key={i} style={styles.body}>
                • <Text style={styles.bold}>{c.title}</Text>
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
              <Text key={i} style={styles.body}>
                • {a.title || a}
              </Text>
            ))}
          </Section>
        )}

        {/* ================= EDUCATION ================= */}
        {education?.length > 0 && (
          <Section title="Education">
            {education.map((e, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.row}>
                  <Text style={[styles.bold, { fontSize: 12 }]}>
                    {e.institution}
                  </Text>
                  <Text style={styles.muted}>{e.duration}</Text>
                </View>
                <Text style={styles.body}>{e.degree}</Text>
                <Text style={styles.muted}>
                  {e.location}
                  {e.gpa && ` • GPA: ${e.gpa}`}
                </Text>
              </View>
            ))}
          </Section>
        )}
      </Page>
    </Document>
  );
}

/* ================= HELPERS ================= */

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.divider} />
    {children}
  </View>
);

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
