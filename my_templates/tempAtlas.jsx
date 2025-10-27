"use client";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function Atlas() {
  const ref = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(ref.current);
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const width = 210;
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Atlas_Resume.pdf");
  };

  return (
    <div className="flex flex-col items-center p-5">
      <button
        onClick={handleDownload}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>

      <div
        ref={ref}
        className="bg-gray-50 w-[210mm] h-[297mm] shadow-lg p-10 text-gray-800"
      >
        <div className="border-l-4 border-blue-600 pl-3">
          <h1 className="text-3xl font-bold text-blue-800">John Doe</h1>
          <p>Frontend Developer | johndoe@gmail.com | +91 98765 43210</p>
        </div>

        <h2 className="font-semibold text-lg mt-5 text-blue-800">Summary</h2>
        <p className="text-sm">
          Creative front-end developer with strong focus on accessibility and
          performance optimization.
        </p>

        <h2 className="font-semibold text-lg mt-3 text-blue-800">Skills</h2>
        <p className="text-sm">
          JavaScript, React, Redux, TailwindCSS, Figma, Webpack
        </p>

        <h2 className="font-semibold text-lg mt-3 text-blue-800">
          Experience
        </h2>
        <p className="text-sm font-bold">Frontend Developer - WebGen</p>
        <p className="text-sm">2020 - Present</p>
        <ul className="text-sm list-disc ml-5">
          <li>Built scalable UI components with reusable patterns.</li>
          <li>Improved Lighthouse performance scores by 25%.</li>
        </ul>

        <h2 className="font-semibold text-lg mt-3 text-blue-800">Education</h2>
        <p className="text-sm">
          B.E. Computer Engineering - NIT Surat (2016 - 2020)
        </p>
      </div>
    </div>
  );
}
