// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function TemplateSelection() {
//   const [darkMode, setDarkMode] = useState(true);
//   const router = useRouter();

//   const templates = [
//     { id: "modern", src: "/images/onyx.jpg", name: "Onyx" },
//     { id: "classic", src: "/images/classic.png", name: "Classic" },
//     { id: "gengar", src: "/images/gengar.jpg", name: "Gengar" },
//     { id: "pikachu", src: "/images/pikachu.jpg", name: "Pikachu" },
//   ];

//   const handleNavigate = (template) => {
//     router.push(`/previewpage?template=${template.id}&name=${template.name}`);
//   };

//   return (
//     <div
//       className={`min-h-screen flex transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Left Section - Mood Image + Toggle */}
//       <div className="w-1/3 flex flex-col items-center justify-center p-8 border-r border-gray-700">
//         <Image
//           src={darkMode ? "/images/moonlight.png" : "/images/sunlight.png"}
//           alt="Mood lighting"
//           width={250}
//           height={250}
//           className="rounded-2xl shadow-lg mb-10 transition-all duration-500"
//         />
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className={`px-5 py-2 rounded-full border transition ${
//             darkMode
//               ? "border-white hover:bg-white hover:text-black"
//               : "border-black hover:bg-black hover:text-white"
//           }`}
//         >
//           Toggle {darkMode ? "Light" : "Dark"} Mode
//         </button>
//       </div>

//       {/* Right Section - Templates */}
//       <div className="w-2/3 p-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           Choose Your Resume Template
//         </h1>
//         <div className="grid grid-cols-2 gap-6">
//           {templates.map((template) => (
//             <div
//               key={template.id}
//               className={`cursor-pointer rounded-xl overflow-hidden shadow-md border ${
//                 darkMode
//                   ? "border-gray-700 hover:bg-gray-800"
//                   : "border-gray-300 hover:bg-gray-200"
//               } transition transform hover:scale-105`}
//               onClick={() => handleNavigate(template)}
//             >
//               <Image
//                 src={template.src}
//                 alt={template.name}
//                 width={400}
//                 height={500}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 text-center font-semibold text-lg">
//                 {template.name}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

export default function TemplateSelection() {
  const [darkMode, setDarkMode] = useState(true);
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const templates = [
    { id: "modern", src: "/images/onyx.jpg", name: "Onyx" },
    { id: "classic", src: "/images/classic.png", name: "Classic" },
    { id: "gengar", src: "/images/gengar.jpg", name: "Gengar" },
    { id: "pikachu", src: "/images/pikachu.jpg", name: "Pikachu" },
  ];

  const handleNavigate = (template) => {
    router.push(`/previewpage?template=${template.id}&name=${template.name}`);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30 ${
          darkMode ? "bg-blue-500/40" : "bg-yellow-300/40"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-30 ${
          darkMode ? "bg-pink-500/30" : "bg-blue-400/30"
        }`}
      ></div>

      {/* Header */}
      <div className="z-10 flex items-center justify-between w-full px-10 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Choose Your <span className="text-blue-500">Resume Template</span>
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full border border-gray-500 hover:scale-110 transition bg-transparent"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-3 bg-black/30 hover:bg-black/50 rounded-full transition z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <motion.div
          key={templates[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex flex-col items-center text-center cursor-pointer select-none"
          onClick={() => handleNavigate(templates[current])}
        >
          <div className="relative w-[400px] h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition">
            <Image
              src={templates[current].src}
              alt={templates[current].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-6 text-2xl font-semibold text-white tracking-wide backdrop-blur-sm">
              {templates[current].name}
            </div>
          </div>
        </motion.div>

        <button
          onClick={nextSlide}
          className="absolute right-0 p-3 bg-black/30 hover:bg-black/50 rounded-full transition z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Template Indicators */}
      <div className="flex mt-10 gap-3">
        {templates.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === current
                ? "bg-blue-500 scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Footer */}
      <p className="absolute bottom-5 text-sm text-gray-400">
        Click the template to preview
      </p>
    </div>
  );
}
