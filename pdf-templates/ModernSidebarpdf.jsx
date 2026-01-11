import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

/* ================= COLORS ================= */
const COLORS = {
  sidebar: "#2563eb",
  white: "#ffffff",
  text: "#0f172a",
  muted: "#475569",
  accent: "#2563eb",
};

/* ================= MAIN ================= */
export default function ModernPDF({
  personalInfo,
  personalSummary,
  education,
  experience,
  projects,
  techSkills,
  certifications,
}) {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          flexDirection: "row",
          fontFamily: "Times-Roman",
          fontSize: 10,
        }}
      >
        {/* ================= LEFT SIDEBAR ================= */}
        <View
          style={{
            width: 200,
            backgroundColor: COLORS.sidebar,
            color: COLORS.white,
            padding: 20,
          }}
        >
          {/* PHOTO PLACEHOLDER */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: COLORS.white,
              marginBottom: 16,
              alignSelf: "center",
            }}
          />

          {/* NAME */}
          <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 2 }}>
            {personalInfo?.name}
          </Text>

          {/* ROLE */}
          <Text style={{ fontSize: 9, marginBottom: 12 }}>
            Software Engineer
          </Text>

          {/* CONTACT */}
          <SidebarItem>{personalInfo?.location}</SidebarItem>
          <SidebarItem>{personalInfo?.phone}</SidebarItem>
          <SidebarItem>{personalInfo?.email}</SidebarItem>

          {/* LINKS */}
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

          {/* SKILLS */}
          <SidebarSection title="Skills">
            {Object.values(techSkills || {})
              .flat()
              .slice(0, 12)
              .map((s, i) => (
                <Text key={i} style={sidebarText}>
                  • {s}
                </Text>
              ))}
          </SidebarSection>
        </View>

        {/* ================= RIGHT CONTENT ================= */}
        <View
          style={{
            flex: 1,
            padding: 24,
            color: COLORS.text,
          }}
        >
          {/* SUMMARY */}
          {personalSummary && (
            <Section title="Summary">
              <Text>{personalSummary}</Text>
            </Section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <Section title="Work Experience">
              {experience.map((exp, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {exp.company}
                  </Text>
                  <Text style={{ color: COLORS.muted }}>
                    {exp.role} • {exp.duration}
                  </Text>
                  {(exp.responsibilities || []).map((r, j) => (
                    <Text key={j}>• {r}</Text>
                  ))}
                </View>
              ))}
            </Section>
          )}

          {/* EDUCATION */}
          {education?.length > 0 && (
            <Section title="Education">
              {education.map((e, i) => (
                <View key={i} style={{ marginBottom: 8 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {e.institution}
                  </Text>
                  <Text>{e.degree}</Text>
                  <Text style={{ color: COLORS.muted }}>
                    {e.duration}
                  </Text>
                </View>
              ))}
            </Section>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <Section title="Featured Projects">
              {projects.map((p, i) => (
                <View key={i} style={{ marginBottom: 8 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {p.title}
                  </Text>
                  <Text>{p.description}</Text>
                </View>
              ))}
            </Section>
          )}

          {/* CERTIFICATIONS */}
          {certifications?.length > 0 && (
            <Section title="Certifications">
              {certifications.map((c, i) => (
                <Text key={i}>
                  {c.title} — {c.provider}
                </Text>
              ))}
            </Section>
          )}
        </View>
      </Page>
    </Document>
  );
}

/* ================= COMPONENTS ================= */

const Section = ({ title, children }) => (
  <View style={{ marginBottom: 16 }}>
    <Text
      style={{
        fontWeight: "bold",
        color: COLORS.accent,
        marginBottom: 4,
      }}
    >
      {title}
    </Text>
    {children}
  </View>
);

const SidebarSection = ({ title, children }) => (
  <View style={{ marginTop: 14 }}>
    <Text style={{ fontWeight: "bold", marginBottom: 6 }}>
      {title}
    </Text>
    {children}
  </View>
);

const SidebarItem = ({ children }) =>
  children ? <Text style={sidebarText}>{children}</Text> : null;

const sidebarText = {
  fontSize: 9,
  marginBottom: 4,
};

const linkStyle = {
  color: "#ffffff",
  fontSize: 9,
  marginBottom: 4,
  textDecoration: "underline",
};
