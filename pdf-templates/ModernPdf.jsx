// import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

// /* ================= COLORS ================= */
// const COLORS = {
//   primary: "#111827", // near-black
//   accent: "#2563eb", // blue
//   muted: "#4b5563", // gray
// };

// export default function ModernPDF({
//   personalInfo,
//   personalSummary,
//   education,
//   experience,
//   projects,
//   techSkills,
//   accomplishments,
//   certifications,
// }) {
//   return (
//     <Document>
//       <Page
//         size="A4"
//         style={{
//           padding: 32,
//           fontSize: 10,
//           fontFamily: "Times-Roman",
//           lineHeight: 1.4,
//           color: COLORS.primary,
//         }}
//       >
//         {/* ================= HEADER ================= */}
//         <View style={{ marginBottom: 14 }}>
//           {/* NAME */}
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: "bold",
//               lineHeight: 1.3,
//               marginBottom: 4,
//             }}
//           >
//             {personalInfo?.name}
//           </Text>

//           {/* CONTACT */}
//           <Text style={{ color: COLORS.muted, marginBottom: 3 }}>
//             {[personalInfo?.email, personalInfo?.phone, personalInfo?.location]
//               .filter(Boolean)
//               .join("  •  ")}
//           </Text>

//           {/* LINKS (CLICKABLE LABELS) */}
//           <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//             {personalInfo?.links?.portfolio && (
//               <Link src={personalInfo.links.portfolio} style={linkStyle}>
//                 Portfolio
//               </Link>
//             )}

//             {personalInfo?.links?.github && (
//               <Link src={personalInfo.links.github} style={linkStyle}>
//                 GitHub
//               </Link>
//             )}

//             {personalInfo?.links?.linkedin && (
//               <Link src={personalInfo.links.linkedin} style={linkStyle}>
//                 LinkedIn
//               </Link>
//             )}

//             {personalInfo?.links?.leetcode && (
//               <Link src={personalInfo.links.leetcode} style={linkStyle}>
//                 LeetCode
//               </Link>
//             )}

//             {personalInfo?.links?.codeforces && (
//               <Link src={personalInfo.links.codeforces} style={linkStyle}>
//                 Codeforces
//               </Link>
//             )}
//           </View>
//         </View>

//         {/* ================= SUMMARY ================= */}
//         {personalSummary && (
//           <Section title="Professional Summary">
//             <Text>{personalSummary}</Text>
//           </Section>
//         )}

//         {/* ================= TECHNICAL SKILLS ================= */}
//         {techSkills && (
//           <Section title="Technical Skills">
//             {Object.entries(techSkills).map(
//               ([key, values]) =>
//                 values?.length > 0 && (
//                   <Text key={key} style={{ marginBottom: 2 }}>
//                     <Text style={{ fontWeight: "bold" }}>
//                       {formatKey(key)}:
//                     </Text>{" "}
//                     {values.join(", ")}
//                   </Text>
//                 )
//             )}
//           </Section>
//         )}

//         {/* ================= EXPERIENCE ================= */}
//         {experience?.length > 0 && (
//           <Section title="Experience">
//             {experience.map((exp, i) => (
//               <View key={i} style={{ marginBottom: 8 }}>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Text style={{ fontWeight: "bold" }}>
//                     {exp.role}
//                     {exp.company && ` — ${exp.company}`}
//                   </Text>
//                   <Text style={{ color: COLORS.muted }}>
//                     {exp.duration || `${exp.startDate} – ${exp.endDate}`}
//                   </Text>
//                 </View>

//                 <Text style={{ color: COLORS.muted, marginBottom: 3 }}>
//                   {exp.location}
//                 </Text>

//                 {(exp.responsibilities || []).map((r, j) => (
//                   <Text key={j} style={{ marginLeft: 10 }}>
//                     • {r}
//                   </Text>
//                 ))}
//               </View>
//             ))}
//           </Section>
//         )}

//         {/* ================= PROJECTS ================= */}
//         {projects?.length > 0 && (
//           <Section title="Projects">
//             {projects.map((p, i) => (
//               <View key={i} style={{ marginBottom: 6 }}>
//                 <Text style={{ fontWeight: "bold" }}>
//                   {p.title}
//                   {p.link && (
//                     <>
//                       {" "}
//                       <Link
//                         src={p.link}
//                         style={{
//                           color: COLORS.accent,
//                           textDecoration: "underline",
//                         }}
//                       >
//                         (Link)
//                       </Link>
//                     </>
//                   )}
//                 </Text>

//                 <Text>{p.description}</Text>

//                 {p.impact && (
//                   <Text style={{ fontStyle: "italic", color: COLORS.muted }}>
//                     {p.impact}
//                   </Text>
//                 )}
//               </View>
//             ))}
//           </Section>
//         )}

//         {/* ================= CERTIFICATIONS ================= */}
//         {certifications?.length > 0 && (
//           <Section title="Certifications">
//             {certifications.map((c, i) => (
//               <Text key={i} style={{ marginBottom: 2 }}>
//                 {c.title}
//                 {c.provider && ` — ${c.provider}`}
//                 {c.date && ` (${c.date})`}
//               </Text>
//             ))}
//           </Section>
//         )}

//         {/* ================= ACCOMPLISHMENTS ================= */}
//         {accomplishments?.length > 0 && (
//           <Section title="Accomplishments">
//             {accomplishments.map((a, i) => (
//               <Text key={i}>• {a.title || a}</Text>
//             ))}
//           </Section>
//         )}

//         {/* ================= EDUCATION ================= */}
//         {education?.length > 0 && (
//           <Section title="Education">
//             {education.map((e, i) => (
//               <View key={i} style={{ marginBottom: 6 }}>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Text style={{ fontWeight: "bold" }}>{e.institution}</Text>
//                   <Text style={{ color: COLORS.muted }}>{e.duration}</Text>
//                 </View>

//                 <Text>{e.degree}</Text>
//                 <Text style={{ color: COLORS.muted }}>
//                   {e.location}
//                   {e.gpa && ` | GPA: ${e.gpa}`}
//                 </Text>
//               </View>
//             ))}
//           </Section>
//         )}
//       </Page>
//     </Document>
//   );
// }

// /* ================= SECTION ================= */

// const Section = ({ title, children }) => (
//   <View style={{ marginBottom: 12 }}>
//     <Text
//       style={{
//         fontSize: 11,
//         fontWeight: "bold",
//         textTransform: "uppercase",
//         color: COLORS.primary,
//       }}
//     >
//       {title}
//     </Text>

//     <View
//       style={{
//         height: 1,
//         backgroundColor: COLORS.accent,
//         marginVertical: 4,
//       }}
//     />

//     {children}
//   </View>
// );

// /* ================= HELPERS ================= */

// const formatKey = (key) =>
//   key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

// const linkStyle = {
//   color: COLORS.accent,
//   textDecoration: "underline",
//   marginRight: 10,
// };

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
    padding: 36,
    fontFamily: "Times-Roman",
    color: COLORS.primary,
    fontSize: 11,
  },

  /* HEADER */
  header: {
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },

  contact: {
    fontSize: 10,
    color: COLORS.muted,
    marginBottom: 3,
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
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 13.5, // slightly smaller
    fontWeight: "semibold", // 🔥 lighter
    textTransform: "uppercase",
    letterSpacing: 0.5, // cleaner, ATS-safe
    marginBottom: 3,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.accent,
    marginBottom: 6,
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
            marginBottom: 10,
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
              <View key={i} style={{ marginBottom: 5 }}>
                {/* Title */}
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

                {/* Description */}
                <Text style={{ fontSize: 11, lineHeight: 1.2 }}>
                  {p.description}
                </Text>

                {/* Impact */}
                {p.impact && (
                  <Text
                    style={{
                      fontSize: 10,
                      fontStyle: "italic",
                      color: COLORS.muted,
                      lineHeight: 1.15,
                    }}
                  >
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
