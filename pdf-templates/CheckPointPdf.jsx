// import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

// /* ================= THEME ================= */
// const COLORS = {
//   text: "#111827",
//   muted: "#6b7280",
//   accent: "#2563eb",
//   border: "#e5e7eb",
// };

// /* ================= MAIN ================= */
// export default function ModernPDF({
//   personalInfo,
//   personalSummary,
//   education,
//   experience,
//   projects,
//   techSkills,
//   certifications,
//   accomplishments,
// }) {
//   return (
//     <Document>
//       <Page
//         size="A4"
//         style={{
//           padding: 36,
//           fontFamily: "Times-Roman",
//           fontSize: 10.2,
//           lineHeight: 1.45,
//           color: COLORS.text,
//         }}
//       >
//         {/* ================= HEADER (COMPACT) ================= */}
//         <View style={{ alignItems: "center", marginBottom: 12 }}>
//           {/* AVATAR */}
//           <View
//             style={{
//               width: 36,
//               height: 36,
//               borderRadius: 18,
//               backgroundColor: COLORS.accent,
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: 4,
//             }}
//           >
//             <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
//               {personalInfo?.name
//                 ?.split(" ")
//                 .map((n) => n[0])
//                 .join("")}
//             </Text>
//           </View>

//           {/* NAME */}
//           <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//             {personalInfo?.name}
//           </Text>

//           {/* ROLE */}
//           <Text style={{ color: COLORS.muted, fontSize: 9, marginBottom: 3 }}>
//             Software Engineer
//           </Text>

//           {/* CONTACT + LINKS (SINGLE LINE) */}
//           <Text style={{ color: COLORS.muted, fontSize: 9 }}>
//             {[
//               personalInfo?.location,
//               personalInfo?.phone,
//               personalInfo?.email,
//               "GitHub",
//               "LinkedIn",
//               "Portfolio",
//             ]
//               .filter(Boolean)
//               .join("  •  ")}
//           </Text>
//         </View>

//         <Divider />

//         {/* ================= SUMMARY ================= */}
//         {personalSummary && (
//           <Row label="Professional Summary">
//             <Text>{personalSummary}</Text>
//           </Row>
//         )}

//         {/* ================= EXPERIENCE ================= */}
//         {experience?.length > 0 && (
//           <Row label="Work Experience">
//             {experience.map((exp, i) => (
//               <View key={i} style={{ marginBottom: 10 }}>
//                 <RowHeader
//                   left={`${exp.company} — ${exp.role}`}
//                   right={exp.duration}
//                 />
//                 <Text style={{ color: COLORS.muted }}>{exp.location}</Text>
//                 {(exp.responsibilities || []).map((r, j) => (
//                   <Text key={j}>• {r}</Text>
//                 ))}
//               </View>
//             ))}
//           </Row>
//         )}

//         {/* ================= EDUCATION ================= */}
//         {education?.length > 0 && (
//           <Row label="Education">
//             {education.map((e, i) => (
//               <View key={i} style={{ marginBottom: 8 }}>
//                 <RowHeader left={e.institution} right={e.duration} />
//                 <Text>{e.degree}</Text>
//                 <Text style={{ color: COLORS.muted }}>
//                   {e.location}
//                   {e.gpa && ` • GPA: ${e.gpa}`}
//                 </Text>
//               </View>
//             ))}
//           </Row>
//         )}

//         {/* ================= SKILLS ================= */}
//         {techSkills && (
//           <Row label="Technical Skills">
//             {Object.entries(techSkills).map(
//               ([key, values]) =>
//                 values?.length > 0 && (
//                   <Text key={key}>
//                     <Text style={{ fontWeight: "bold" }}>
//                       {formatKey(key)}:
//                     </Text>{" "}
//                     {values.join(", ")}
//                   </Text>
//                 )
//             )}
//           </Row>
//         )}

//         {/* ================= PROJECTS ================= */}
//         {projects?.length > 0 && (
//           <Row label="Notable Projects">
//             {projects.map((p, i) => (
//               <View key={i} style={{ marginBottom: 8 }}>
//                 <RowHeader left={p.title} right={p.year} />
//                 <Text>{p.description}</Text>
//               </View>
//             ))}
//           </Row>
//         )}

//         {/* ================= CERTIFICATIONS ================= */}
//         {certifications?.length > 0 && (
//           <Row label="Certifications">
//             {certifications.map((c, i) => (
//               <RowHeader
//                 key={i}
//                 left={`${c.title} — ${c.provider}`}
//                 right={c.date}
//               />
//             ))}
//           </Row>
//         )}

//         {/* ================= AWARDS ================= */}
//         {accomplishments?.length > 0 && (
//           <Row label="Awards & Recognition">
//             {accomplishments.map((a, i) => (
//               <Text key={i}>• {a.title || a}</Text>
//             ))}
//           </Row>
//         )}
//       </Page>
//     </Document>
//   );
// }

// /* ================= LAYOUT HELPERS ================= */

// const Row = ({ label, children }) => (
//   <>
//     <View style={{ flexDirection: "row", marginTop: 14 }}>
//       <Text style={{ width: 140, fontWeight: "bold" }}>{label}</Text>
//       <View style={{ flex: 1 }}>{children}</View>
//     </View>
//     <Divider />
//   </>
// );

// const RowHeader = ({ left, right }) => (
//   <View
//     style={{
//       flexDirection: "row",
//       justifyContent: "space-between",
//     }}
//   >
//     <Text style={{ fontWeight: "bold" }}>{left}</Text>
//     {right && <Text style={{ color: COLORS.muted }}>{right}</Text>}
//   </View>
// );

// const Divider = () => (
//   <View
//     style={{
//       height: 1,
//       backgroundColor: COLORS.border,
//       marginTop: 12,
//     }}
//   />
// );

// const linkStyle = {
//   color: COLORS.accent,
//   marginHorizontal: 6,
//   textDecoration: "underline",
// };

// const formatKey = (key) =>
//   key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";

/* ================= THEME ================= */
const COLORS = {
  text: "#111827",
  muted: "#6b7280",
  accent: "#2563eb",
  border: "#e5e7eb",
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
  accomplishments,
}) {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 36,
          fontFamily: "Times-Roman",
          fontSize: 10.2,
          lineHeight: 1.45,
          color: COLORS.text,
        }}
      >
        {/* ================= HEADER (COMPACT FIXED) ================= */}
<View style={{ alignItems: "center", marginBottom: 8 }}>
  {/* AVATAR */}
  <View
    style={{
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: COLORS.accent,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 6,
    }}
  >
    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 9 }}>
      {personalInfo?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")}
    </Text>
  </View>

  {/* NAME */}
  <Text
    style={{
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 4,
    }}
  >
    {personalInfo?.name}
  </Text>

  {/* ROLE */}
  <Text
    style={{
      color: COLORS.muted,
      fontSize: 9,
      marginBottom: 6,
    }}
  >
    Software Engineer
  </Text>

  {/* CONTACT */}
  <Text
    style={{
      color: COLORS.muted,
      fontSize: 9,
      marginTop: 2,
      lineHeight: 1.4,
    }}
  >
    {[
      personalInfo?.location,
      personalInfo?.phone,
      personalInfo?.email,
      "GitHub",
      "LinkedIn",
      "Portfolio",
    ]
      .filter(Boolean)
      .join("  •  ")}
  </Text>
</View>

        {/* ================= EXPERIENCE ================= */}
        {experience?.length > 0 && (
          <Row label="Work Experience">
            {experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <RowHeader
                  left={`${exp.company} — ${exp.role}`}
                  right={exp.duration}
                />
                <Text style={{ color: COLORS.muted }}>{exp.location}</Text>
                {(exp.responsibilities || []).map((r, j) => (
                  <Text key={j}>• {r}</Text>
                ))}
              </View>
            ))}
          </Row>
        )}

        {/* ================= EDUCATION ================= */}
        {education?.length > 0 && (
          <Row label="Education">
            {education.map((e, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <RowHeader left={e.institution} right={e.duration} />
                <Text>{e.degree}</Text>
                <Text style={{ color: COLORS.muted }}>
                  {e.location}
                  {e.gpa && ` • GPA: ${e.gpa}`}
                </Text>
              </View>
            ))}
          </Row>
        )}

        {/* ================= SKILLS ================= */}
        {techSkills && (
          <Row label="Technical Skills">
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
          </Row>
        )}

        {/* ================= PROJECTS ================= */}
        {projects?.length > 0 && (
          <Row label="Notable Projects">
            {projects.map((p, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <RowHeader left={p.title} right={p.year} />
                <Text>{p.description}</Text>
              </View>
            ))}
          </Row>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {certifications?.length > 0 && (
          <Row label="Certifications">
            {certifications.map((c, i) => (
              <RowHeader
                key={i}
                left={`${c.title} — ${c.provider}`}
                right={c.date}
              />
            ))}
          </Row>
        )}

        {/* ================= AWARDS ================= */}
        {accomplishments?.length > 0 && (
          <Row label="Awards & Recognition">
            {accomplishments.map((a, i) => (
              <Text key={i}>• {a.title || a}</Text>
            ))}
          </Row>
        )}
      </Page>
    </Document>
  );
}

/* ================= LAYOUT HELPERS ================= */

const Row = ({ label, children }) => (
  <>
    <View style={{ flexDirection: "row", marginTop: 14 }}>
      <Text style={{ width: 140, fontWeight: "bold" }}>{label}</Text>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
    <Divider />
  </>
);

const RowHeader = ({ left, right }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text style={{ fontWeight: "bold" }}>{left}</Text>
    {right && <Text style={{ color: COLORS.muted }}>{right}</Text>}
  </View>
);

const Divider = () => (
  <View
    style={{
      height: 1,
      backgroundColor: COLORS.border,
      marginTop: 12,
    }}
  />
);

const linkStyle = {
  color: COLORS.accent,
  marginHorizontal: 6,
  textDecoration: "underline",
};

const formatKey = (key) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());