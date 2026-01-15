"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, ArrowRight } from "lucide-react";

export default function ResumeBTemplates() {
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
      description: "Timeless elegance",
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
    <div className="min-h-screen bg-black text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Name */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="ResumeB Logo"
              width={28}
              height={28}
              className="rounded-full cursor-pointer"
            />
            <div>
              <h1 className="text-lg font-semibold cursor-pointer">ResumeB</h1>
              <p className="text-xs text-white/60">
                Choose your perfect resume template
              </p>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="px-6 pt-20 pb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Select a <span className="text-white/60">Template</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-white/60"
        >
          Select a professionally designed, ATS-optimized template and customize
          it in minutes.
        </motion.p>
      </section>

      {/* ================= GRID ================= */}
      <main className="px-6 pb-24">
        <div className="max-w-[1440px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              onClick={handleNavigate}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

/* ================= TEMPLATE CARD ================= */

function TemplateCard({ template, index, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="break-inside-avoid cursor-pointer"
      onClick={() => onClick(template)}
    >
      <div className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 transition hover:border-white/30 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        {/* IMAGE */}
        <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
          {!imgError ? (
            <Image
              src={template.src}
              alt={template.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
              <FileText className="w-12 h-12 text-white/40" />
              <span className="mt-2 text-sm text-white/50">
                {template.name}
              </span>
            </div>
          )}

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-end">
            <div className="p-5 text-sm font-medium flex items-center gap-2">
              Preview Template <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="p-5">
          <h3 className="text-lg font-semibold">{template.name}</h3>
          <p className="text-sm mt-1 text-white/60">{template.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
