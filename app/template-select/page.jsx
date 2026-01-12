"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";

export default function TemplateSelection() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const templates = [
    {
      id: "modern",
      src: "/images/modern.png",
      name: "Modern",
      description: "Clean and professional",
    },
    {
      id: "classic",
      src: "/images/classic.png",
      name: "Classic",
      description: "Traditional elegance",
    },
    {
      id: "executive",
      src: "/images/executive.png",
      name: "Executive",
      description: "Senior professional",
    },
    {
      id: "minimal",
      src: "/images/minimal.png",
      name: "Minimal",
      description: "Simple and effective",
    },
    {
      id: "gengar",
      src: "/images/gengar.png",
      name: "Gengar",
      description: "Bold and creative",
    },
  ];

  const handleNavigate = (template) => {
    router.push(`/previewpage?template=${template.id}&name=${template.name}`);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* ================= HEADER ================= */}
      <header
        className={`sticky top-0 z-50 border-b-2 backdrop-blur-lg ${
          darkMode
            ? "bg-black/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                ResumeB
              </h1>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Choose your perfect template
              </p>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-lg border-2 transition ${
              darkMode
                ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="px-6 py-14">
        <div className="max-w-[1600px] mx-auto">
          <h2
            className={`text-5xl font-bold mb-14 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Professional Templates
          </h2>

          {/* ================= PINTEREST GRID ================= */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {templates.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
                darkMode={darkMode}
                onClick={handleNavigate}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= TEMPLATE CARD ================= */

function TemplateCard({ template, index, darkMode, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="break-inside-avoid cursor-pointer"
      onClick={() => onClick(template)}
    >
      <div
        className={`
          group rounded-2xl overflow-hidden border-2
          transition-all duration-300
          hover:-translate-y-2
          ${
            darkMode
              ? "bg-gray-900 border-gray-800 hover:border-green-500"
              : "bg-white border-gray-200 hover:border-green-500"
          }
          shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]
        `}
      >
        {/* IMAGE */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
          {!imgError && (
            <Image
              src={template.src}
              alt={template.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}

          {imgError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
              <FileText className="w-16 h-16 text-gray-400" />
              <span className="mt-2 font-bold text-gray-500">
                {template.name}
              </span>
            </div>
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-6 text-white font-semibold flex items-center gap-2">
              Preview Template <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="p-6">
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {template.name}
          </h3>
          <p
            className={`text-sm mt-2 ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {template.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
