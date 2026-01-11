import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* ================= THEME ================= */
const COLORS = {
  sidebar: "#1e3a8a", // blue-900
  bg: "#ffffff",
  textDark: "#111827",
  textLight: "#ffffff",
  mutedLight: "#bfdbfe",
  mutedDark: "#374151",
  borderLight: "#93c5fd",
  accent: "#2563eb",
};

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontSize: 9,
    fontFamily: "Helvetica",
  },

  /* LEFT SIDEBAR */

  sidebar: {
    width: 170, // 🔥 fixed
    backgroundColor: COLORS.sidebar,
    paddingTop: 12,
    paddingRight: 6, // minimal
    paddingBottom: 12,
    paddingLeft: 12,
    color: COLORS.textLight,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    alignSelf: "center",
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  title: {
    fontSize: 9,
    textAlign: "center",
    color: COLORS.mutedLight,
    marginBottom: 12,
  },

  sidebarSection: {
    marginBottom: 14,
  },

  sidebarTitle: {
    fontSize: 9,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingBottom: 2,
    marginBottom: 6,
  },

  sidebarText: {
    fontSize: 8.5,
    color: COLORS.mutedLight,
    marginBottom: 3,
  },

  sidebarBold: {
    color: COLORS.textLight,
    fontWeight: "bold",
  },

  link: {
    color: COLORS.mutedLight,
    textDecoration: "underline",
  },

  content: {
    flex: 1, // 🔥 take remaining space
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 8,
    backgroundColor: COLORS.bg,
    color: COLORS.textDark,
  },

  section: {
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.accent,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.accent,
    paddingBottom: 2,
    marginBottom: 6,
  },

  text: {
    fontSize: 9,
    marginBottom: 2,
  },

  muted: {
    color: COLORS.mutedDark,
    fontSize: 8.5,
    marginBottom: 2,
  },

  bold: {
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    marginBottom: 8,
  },

  bullet: {
    marginLeft: 10,
  },
});

/* ================= MAIN ================= */
export default function SidebarBluePDF({
  personalInfo,
  personalSummary,
  techSkills,
  certifications,
  education,
  experience,
  projects,
  accomplishments,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ================= LEFT SIDEBAR ================= */}
        <View style={styles.sidebar}>
          <View style={styles.avatar} />

          <Text style={styles.name}>{personalInfo?.name}</Text>
          <Text style={styles.title}>{personalInfo?.title}</Text>

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>CONTACT</Text>
            {personalInfo?.location && (
              <Text style={styles.sidebarText}>{personalInfo.location}</Text>
            )}
            {personalInfo?.phone && (
              <Text style={styles.sidebarText}>{personalInfo.phone}</Text>
            )}
            {personalInfo?.email && (
              <Text style={styles.sidebarText}>{personalInfo.email}</Text>
            )}
            {personalInfo?.links?.portfolio && (
              <Link src={personalInfo.links.portfolio} style={styles.link}>
                Portfolio
              </Link>
            )}
          </View>

          {techSkills && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>SKILLS</Text>
              {Object.entries(techSkills).map(
                ([key, values]) =>
                  values?.length > 0 && (
                    <Text key={key} style={styles.sidebarText}>
                      <Text style={styles.sidebarBold}>{formatKey(key)}:</Text>{" "}
                      {values.join(", ")}
                    </Text>
                  )
              )}
            </View>
          )}

          {certifications?.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>CERTIFICATIONS</Text>
              {certifications.map((c, i) => (
                <Text key={i} style={styles.sidebarText}>
                  <Text style={styles.sidebarBold}>{c.title}</Text>
                  {"\n"}
                  {c.provider} ({c.date})
                </Text>
              ))}
            </View>
          )}

          {education?.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>EDUCATION</Text>
              {education.map((e, i) => (
                <Text key={i} style={styles.sidebarText}>
                  <Text style={styles.sidebarBold}>{e.institution}</Text>
                  {"\n"}
                  {e.degree}
                  {e.gpa && ` • GPA: ${e.gpa}`}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* ================= RIGHT CONTENT ================= */}
        <View style={styles.content}>
          {personalSummary && (
            <Section title="PROFESSIONAL SUMMARY">
              <Text style={styles.text}>{personalSummary}</Text>
            </Section>
          )}

          {experience?.length > 0 && (
            <Section title="EXPERIENCE">
              {experience.map((exp, i) => (
                <View key={i} style={styles.item}>
                  <View style={styles.row}>
                    <Text style={styles.bold}>
                      {exp.role} — {exp.company}
                    </Text>
                    <Text style={styles.muted}>{exp.duration}</Text>
                  </View>
                  <Text style={styles.muted}>{exp.location}</Text>
                  {(exp.responsibilities || []).map((r, j) => (
                    <Text key={j} style={styles.text}>
                      • {r}
                    </Text>
                  ))}
                </View>
              ))}
            </Section>
          )}

          {projects?.length > 0 && (
            <Section title="PROJECTS">
              {projects.map((p, i) => (
                <View key={i} style={styles.item}>
                  <Text style={styles.bold}>{p.title}</Text>
                  <Text style={styles.text}>{p.description}</Text>
                </View>
              ))}
            </Section>
          )}

          {accomplishments?.length > 0 && (
            <Section title="ACCOMPLISHMENTS">
              {accomplishments.map((a, i) => (
                <Text key={i} style={styles.text}>
                  • {a.title || a}
                </Text>
              ))}
            </Section>
          )}
        </View>
      </Page>
    </Document>
  );
}

/* ================= HELPERS ================= */

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
