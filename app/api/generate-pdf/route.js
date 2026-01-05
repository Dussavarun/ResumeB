// // import puppeteer from "puppeteer-core";
// // import { NextResponse } from "next/server";

// // export async function POST(req) {
// //   try {
// //     const { html } = await req.json();

// //     // 🧠 Find Chrome executable path (Windows default)
// //     const executablePath =
// //       "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

// //     const browser = await puppeteer.launch({
// //       headless: true,
// //       executablePath,
// //       args: ["--no-sandbox", "--disable-setuid-sandbox"],
// //     });

// //     const page = await browser.newPage();

// //     await page.setContent(html, { waitUntil: "networkidle0" });

// //     const pdfBuffer = await page.pdf({
// //       format: "A4",
// //       printBackground: true,
// //       margin: { top: "20px", bottom: "20px" },
// //     });

// //     await browser.close();

// //     return new NextResponse(pdfBuffer, {
// //       status: 200,
// //       headers: {
// //         "Content-Type": "application/pdf",
// //         "Content-Disposition": "attachment; filename=resume.pdf",
// //       },
// //     });
// //   } catch (error) {
// //     console.error("PDF generation failed:", error);
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }
// import puppeteer from "puppeteer-core";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { html } = await req.json();

//     // 🧠 Path to Chrome (adjust if installed elsewhere)
//     const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

//     const browser = await puppeteer.launch({
//       headless: true,
//       executablePath,
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });

//     const page = await browser.newPage();

//     // ✅ Inject Tailwind from CDN + wrap the HTML
//     const fullHTML = `
//       <html>
//         <head>
//           <meta charset="utf-8" />
//           <title>Resume</title>
//           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
//           <style>
//             body {
//               padding: 20px;
//               font-family: 'Inter', sans-serif;
//               background-color: white;
//             }
//           </style>
//         </head>
//         <body>
//           ${html}
//         </body>
//       </html>
//     `;

//     await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
//     await page.setContent(fullHTML, { waitUntil: "networkidle0" });

//     const pdfBuffer = await page.pdf({
//       format: "A4",
//       printBackground: true,
//       preferCSSPageSize: true,
//       margin: { top: "0.5in", bottom: "0.5in", left: "0.5in", right: "0.5in" },
//     });

//     await browser.close();

//     return new NextResponse(pdfBuffer, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": "attachment; filename=resume.pdf",
//       },
//     });
//   } catch (error) {
//     console.error("PDF generation failed:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req, res) {
//   // if (req.method !== "POST") return res.status(405).end();

//   const {
//     personalInfo,
//     education,
//     experiences,
//     projects,
//     skills,
//     certifications,
//     accomplishments,
//   } = req.body;

//   // Generate LaTeX with your function (paste from step 1)
//   const latexSource = generateLatex({
//     personalInfo,
//     education,
//     experiences,
//     projects,
//     skills,
//     certifications,
//     accomplishments,
//   });

//   const params = new URLSearchParams({ text: latexSource });

//   const response = await fetch("https://latexonline.cc/compile", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: params.toString(),
//   });

//   if (!response.ok) return res.status(500).send("LaTeX API error");
//   const pdfBlob = await response.arrayBuffer();
//   res.setHeader("Content-Type", "application/pdf");
//   res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');
//   res.status(200).send(Buffer.from(pdfBlob));
// }
import { NextResponse } from "next/server";
import generateLatex from "../../../lib/latex-templates/classic";

export async function POST(req) {
  try {
    const {
      personalInfo,
      education,
      experiences,
      projects,
      skills,
      certifications,
      accomplishments,
    } = await req.json();

    const latexSource = generateLatex({
      personalInfo,
      education,
      experiences,
      projects,
      skills,
      certifications,
      accomplishments,
    });

    const params = new URLSearchParams({ text: latexSource });

    const response = await fetch("https://latexonline.cc/compile", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("LaTeX compilation error:", errorText);
      return NextResponse.json({ error: errorText }, { status: 500 });
    }
    const arrayBuffer = await response.arrayBuffer();
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
