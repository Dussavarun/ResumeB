import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 36,
    paddingBottom: 36,
    paddingTop: 20,
    fontFamily: "Times-Roman",
    fontSize: 11,
    color: "#000",
  },

  /* HEADER */
  header: {
    textAlign: "center",
    marginBottom: 6,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
  },

  contact: {
    fontSize: 10,
    marginBottom: 4,
  },

  links: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  link: {
    fontSize: 10,
    color: "#2563eb",
    marginHorizontal: 6,
    textDecoration: "underline",
  },

  /* SECTION */
  section: {
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  divider: {
    height: 0.8,
    backgroundColor: "#000",
    marginBottom: 6,
  },

  /* TEXT */
  body: {
    fontSize: 11,
    lineHeight: 1.2,
  },

  bold: {
    fontWeight: "bold",
  },

  muted: {
    fontSize: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    marginBottom: 6,
  },

  bullet: {
    marginLeft: 10,
    fontSize: 11,
    lineHeight: 1.2,
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
              .join(" • ")}
          </Text>

          <View style={styles.links}>
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

        <View style={{ height: 1, backgroundColor: "#000", marginVertical: 6 }} />


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
                )
            )}
          </Section>
        )}

        {/* ================= EXPERIENCE ================= */}
        {experience?.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.row}>
                  <Text style={styles.bold}>
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
              <View key={i} style={styles.item}>
                <Text style={styles.bold}>
                  {p.title}
                  {p.link && (
                    <Link src={p.link} style={styles.link}>
                      {" "}
                      (Link)
                    </Link>
                  )}
                </Text>

                {(Array.isArray(p.description)
                  ? p.description
                  : p.description?.split("\n")
                )?.map((d, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {d}
                  </Text>
                ))}

                {p.impact && (
                  <Text style={[styles.muted, { fontStyle: "italic" }]}>
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
              <Text key={i} style={styles.body}>
                <Text style={styles.bold}>{c.title}</Text>
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
              <Text key={i} style={styles.bullet}>
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
                  <Text style={styles.bold}>{e.institution}</Text>
                  <Text style={styles.muted}>{e.duration}</Text>
                </View>
                <Text style={styles.body}>{e.degree}</Text>
                {e.gpa && <Text style={styles.muted}>GPA: {e.gpa}</Text>}
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
