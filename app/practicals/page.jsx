"use client";
import { useRef } from "react";

export default function PdfPage() {
  const resumeRef = useRef();

  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf()
  .from(resumeRef.current)
  .set({
    margin: 0.5,
    filename: "resume.pdf",
    html2canvas: { scale: 2, backgroundColor: "#ffffff" }, // 👈 solid background
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  })
  .save();

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Your Resume Preview
          </h1>
          <button
            onClick={downloadPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all"
          >
            ⬇ Download as PDF
          </button>
        </div>

        {/* Editable Resume */}
        <div
          ref={resumeRef}
          className="bg-white rounded-lg shadow-2xl p-10 font-sans"
        >
          {/* Header */}
          <div className="text-center border-b pb-6 mb-6">
            <h1
              contentEditable
              suppressContentEditableWarning={true}
              className="text-4xl font-bold"
            >
              John Doe
            </h1>
            <h2
              contentEditable
              suppressContentEditableWarning={true}
              className="text-xl text-gray-600"
            >
              Full Stack Developer
            </h2>
            <div className="mt-3 text-gray-500">
              <p contentEditable suppressContentEditableWarning={true}>
                john.doe@email.com | +91 9876543210
              </p>
              <p contentEditable suppressContentEditableWarning={true}>
                linkedin.com/in/johndoe | github.com/johndoe
              </p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1 mb-2">
              Summary
            </h3>
            <p
              contentEditable
              suppressContentEditableWarning={true}
              className="text-gray-700"
            >
              Passionate developer with 3+ years of experience building scalable
              web apps.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h3>
            <p
              contentEditable
              suppressContentEditableWarning={true}
              className="text-gray-700"
            >
              JavaScript, React, Node.js, MongoDB, Tailwind CSS
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1 mb-4">
              Experience
            </h3>
            <div className="mb-4">
              <h4
                contentEditable
                suppressContentEditableWarning={true}
                className="text-md font-bold"
              >
                Software Engineer – Tech Corp
              </h4>
              <p
                contentEditable
                suppressContentEditableWarning={true}
                className="text-sm text-gray-500 mb-2"
              >
                Jan 2022 – Present | Remote
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li contentEditable suppressContentEditableWarning={true}>
                  Developed full-stack web apps improving performance by 30%.
                </li>
                <li contentEditable suppressContentEditableWarning={true}>
                  Led a team of 3 developers to deliver SaaS platform on time.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold border-b pb-1 mb-4">
              Education
            </h3>
            <div className="mb-2">
              <h4
                contentEditable
                suppressContentEditableWarning={true}
                className="font-bold"
              >
                B.Tech in Computer Science
              </h4>
              <p
                contentEditable
                suppressContentEditableWarning={true}
                className="text-gray-700"
              >
                NIT Jharkhand – 2016 – 2020
              </p>
              <p
                contentEditable
                suppressContentEditableWarning={true}
                className="text-sm text-gray-500"
              >
                Jharkhand, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
