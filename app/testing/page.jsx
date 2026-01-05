"use client";

import {
  Document,
  Page,
  Text,
  View,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import { defaultResumeData } from "../../data/defaultData";

/* =========================
   ONE PAGE CLASSIC RESUME
========================= */

const ResumePDF = ({ data }) => (
  <Document>
    <Page
      size="A4"
      style={{
        padding: 26,
        fontSize: 9.4,
        lineHeight: 1.25,
      }}
    >
      {/* HEADER */}
      <View style={{ marginBottom: 6 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          {data.personalInfo?.name || ""}
        </Text>

        <Text>
          {data.personalInfo?.email || ""}
          {data.personalInfo?.phone && ` | ${data.personalInfo.phone}`}
        </Text>

        <Text>{data.personalInfo?.location || ""}</Text>

        <Text>
          {Object.values(data.personalInfo?.links || {})
            .filter(Boolean)
            .join(" | ")}
        </Text>
      </View>

      <Divider />

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <Section title="Education">
          {data.education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 3 }}>
              <Text style={{ fontWeight: "bold" }}>
                {edu.institution}
              </Text>
              <Text>
                {edu.degree} — {edu.duration}
              </Text>
              <Text>
                {edu.location}
                {edu.gpa && ` | GPA: ${edu.gpa}`}
              </Text>
            </View>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <Section title="Experience">
          {data.experience.map((exp, i) => (
            <View key={i} style={{ marginBottom: 4 }}>
              <Text style={{ fontWeight: "bold" }}>
                {exp.company} — {exp.role}
              </Text>
              <Text>
                {exp.location} | {exp.duration}
              </Text>

              {(exp.responsibilities || []).map((r, j) => (
                <Bullet key={j} text={r} />
              ))}
            </View>
          ))}
        </Section>
      )}

      {/* PROJECTS */}
      {data.projects?.length > 0 && (
        <Section title="Projects">
          {data.projects.map((p, i) => (
            <View key={i} style={{ marginBottom: 3 }}>
              <Text style={{ fontWeight: "bold" }}>
                {p.title}
              </Text>
              <Text>{p.description}</Text>
              {p.impact && <Text>Impact: {p.impact}</Text>}
            </View>
          ))}
        </Section>
      )}

      {/* TECHNICAL SKILLS */}
      {data.technicalSkills && (
        <Section title="Technical Skills">
          {Object.entries(data.technicalSkills).map(
            ([key, values], i) =>
              values?.length > 0 && (
                <Text key={i}>
                  <Text style={{ fontWeight: "bold" }}>
                    {formatKey(key)}:{" "}
                  </Text>
                  {values.join(", ")}
                </Text>
              )
          )}
        </Section>
      )}

      {/* HONORS */}
      {data.honorsAndAwards?.length > 0 && (
        <Section title="Honors & Awards">
          {data.honorsAndAwards.map((h, i) => (
            <Text key={i}>
              {h.title} — {h.organization} ({h.year})
            </Text>
          ))}
        </Section>
      )}

      {/* CERTIFICATIONS */}
      {data.certifications?.length > 0 && (
        <Section title="Certifications">
          {data.certifications.map((c, i) => (
            <Text key={i}>
              {c.name} — {c.issuer} ({c.year})
            </Text>
          ))}
        </Section>
      )}

      {/* INTERESTS */}
      {data.interests?.length > 0 && (
        <Section title="Interests">
          <Text>{data.interests.join(", ")}</Text>
        </Section>
      )}
    </Page>
  </Document>
);

/* =========================
   HELPERS
========================= */

const Section = ({ title, children }) => (
  <View style={{ marginBottom: 6 }}>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 10.2,
        marginBottom: 2,
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
    {children}
  </View>
);

const Bullet = ({ text }) => (
  <Text style={{ marginLeft: 8 }}>• {text}</Text>
);

const Divider = () => (
  <View
    style={{
      height: 1,
      backgroundColor: "#000",
      marginVertical: 6,
    }}
  />
);

const formatKey = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase());

/* =========================
   DOWNLOAD PAGE
========================= */

export default function ResumeDownloadPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Classic Resume (One Page)</h1>

      <PDFDownloadLink
        document={<ResumePDF data={defaultResumeData} />}
        fileName="classic-resume-one-page.pdf"
      >
        {({ loading }) =>
          loading ? "Generating PDF..." : "Download Resume PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}
