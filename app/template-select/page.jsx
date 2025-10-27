// "use client";

// // import Link from "next/link";

// // export default function TemplatesGrid() {
// //   const templates = [
// //     { id: 1, name: "Onyx Template" },
// //     { id: 2, name: "Sapphire Template" },
// //     { id: 3, name: "Emerald Template" },
// //     { id: 4, name: "Ruby Template" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
// //       <h1 className="text-3xl font-semibold mb-8">Choose Your Resume Template</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl">
// //         {templates.map((template) => (
// //           <Link key={template.id} href="/previewpage">
// //             <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-2xl shadow-md border border-gray-700 p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
// //               <div className="w-36 h-48 bg-gradient-to-b from-gray-600 to-gray-800 rounded-md mb-4" />
// //               <h2 className="text-lg font-medium">{template.name}</h2>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';

// const ResumeTemplateSelector = () => {
//   const [currentTemplate, setCurrentTemplate] = useState(0);
//   const [isDarkTheme, setIsDarkTheme] = useState(true);

//   const templates = [
//     {
//       id: 1,
//       name: "Professional Classic",
//       description: "Perfect for corporate and traditional roles",
//       preview: "data:image/svg+xml,%3Csvg width='400' height='520' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='520' fill='%23f5f5f5'/%3E%3Crect width='160' height='520' fill='%236b8cae'/%3E%3Ccircle cx='80' cy='90' r='35' fill='white'/%3E%3Ctext x='80' y='160' text-anchor='middle' fill='white' font-size='18' font-weight='bold'%3ELorna%3C/text%3E%3Ctext x='80' y='180' text-anchor='middle' fill='white' font-size='18' font-weight='bold'%3EAlvarado%3C/text%3E%3Ctext x='80' y='200' text-anchor='middle' fill='white' font-size='11'%3EMarketing Manager%3C/text%3E%3Crect x='20' y='240' width='120' height='2' fill='white'/%3E%3Ctext x='80' y='270' text-anchor='middle' fill='white' font-size='12' font-weight='bold'%3EContact%3C/text%3E%3Crect x='200' y='40' width='180' height='30' fill='%23888'/%3E%3Ctext x='290' y='60' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EEducation%3C/text%3E%3Crect x='200' y='90' width='180' height='80' fill='%23ddd' rx='5'/%3E%3Crect x='200' y='190' width='180' height='80' fill='%23ddd' rx='5'/%3E%3Crect x='200' y='290' width='180' height='30' fill='%23888'/%3E%3Ctext x='290' y='310' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EExperience%3C/text%3E%3Crect x='200' y='340' width='180' height='80' fill='%23ddd' rx='5'/%3E%3C/svg%3E"
//     },
//     {
//       id: 2,
//       name: "Modern Minimal",
//       description: "Clean design for tech and creative professionals",
//       preview: "data:image/svg+xml,%3Csvg width='400' height='520' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='520' fill='white'/%3E%3Ccircle cx='200' cy='50' r='28' fill='%233b82f6'/%3E%3Ctext x='200' y='55' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3ESA%3C/text%3E%3Ctext x='200' y='95' text-anchor='middle' fill='%23111' font-size='18' font-weight='bold'%3ESarah Anderson%3C/text%3E%3Ctext x='200' y='115' text-anchor='middle' fill='%23666' font-size='11'%3ESenior Software Engineer%3C/text%3E%3Crect x='30' y='140' width='340' height='60' fill='%23f0f0f0' rx='5'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%23111' font-size='10' font-weight='bold'%3EProfessional Summary%3C/text%3E%3Crect x='30' y='220' width='340' height='80' fill='%23fafafa' rx='5'/%3E%3Ctext x='40' y='240' fill='%23111' font-size='12' font-weight='bold'%3EWork Experience%3C/text%3E%3Crect x='30' y='320' width='340' height='80' fill='%23fafafa' rx='5'/%3E%3Ctext x='40' y='340' fill='%23111' font-size='12' font-weight='bold'%3EEducation%3C/text%3E%3Crect x='30' y='420' width='160' height='60' fill='%23f0f0f0' rx='5'/%3E%3Ctext x='110' y='440' text-anchor='middle' fill='%23111' font-size='10' font-weight='bold'%3ESkills%3C/text%3E%3Crect x='210' y='420' width='160' height='60' fill='%23f0f0f0' rx='5'/%3E%3Ctext x='290' y='440' text-anchor='middle' fill='%23111' font-size='10' font-weight='bold'%3ETools%3C/text%3E%3C/svg%3E"
//     },
//     {
//       id: 3,
//       name: "Creative Bold",
//       description: "Stand out with vibrant colors and unique layout",
//       preview: "data:image/svg+xml,%3Csvg width='400' height='520' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='520' fill='white'/%3E%3Crect width='400' height='100' fill='%234f46e5'/%3E%3Ctext x='200' y='45' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EMichael Chen%3C/text%3E%3Ctext x='200' y='70' text-anchor='middle' fill='white' font-size='12'%3EProduct Manager %26 UX Strategist%3C/text%3E%3Crect x='30' y='120' width='160' height='380' fill='%23f5f5ff' rx='5'/%3E%3Ctext x='110' y='150' text-anchor='middle' fill='%234f46e5' font-size='14' font-weight='bold'%3ESkills%3C/text%3E%3Crect x='45' y='170' width='130' height='40' fill='white' rx='3'/%3E%3Crect x='45' y='220' width='130' height='40' fill='white' rx='3'/%3E%3Crect x='45' y='270' width='130' height='40' fill='white' rx='3'/%3E%3Ctext x='110' y='350' text-anchor='middle' fill='%234f46e5' font-size='14' font-weight='bold'%3ELanguages%3C/text%3E%3Crect x='210' y='120' width='160' height='380' fill='%23fafafa' rx='5'/%3E%3Ctext x='220' y='150' fill='%23111' font-size='14' font-weight='bold'%3EExperience%3C/text%3E%3Crect x='220' y='170' width='140' height='60' fill='white' rx='3'/%3E%3Crect x='220' y='240' width='140' height='60' fill='white' rx='3'/%3E%3Ctext x='220' y='330' fill='%23111' font-size='14' font-weight='bold'%3EEducation%3C/text%3E%3Crect x='220' y='350' width='140' height='50' fill='white' rx='3'/%3E%3C/svg%3E"
//     },
//     {
//       id: 4,
//       name: "Simple Elegant",
//       description: "Timeless design that works for any industry",
//       preview: "data:image/svg+xml,%3Csvg width='400' height='520' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='520' fill='white'/%3E%3Crect x='30' y='30' width='80' height='100' fill='%23e5e5e5' rx='5'/%3E%3Ctext x='70' y='80' text-anchor='middle' fill='%23999' font-size='10'%3EPhoto%3C/text%3E%3Ctext x='140' y='50' fill='%23111' font-size='18' font-weight='bold'%3EJohn Anderson%3C/text%3E%3Ctext x='140' y='70' fill='%23666' font-size='11'%3ESenior Software Engineer%3C/text%3E%3Crect x='30' y='160' width='340' height='2' fill='%233b82f6'/%3E%3Ctext x='30' y='190' fill='%233b82f6' font-size='12' font-weight='bold'%3EProfessional Summary%3C/text%3E%3Crect x='30' y='210' width='340' height='40' fill='%23f9f9f9' rx='3'/%3E%3Crect x='30' y='270' width='340' height='2' fill='%233b82f6'/%3E%3Ctext x='30' y='300' fill='%233b82f6' font-size='12' font-weight='bold'%3EWork Experience%3C/text%3E%3Crect x='30' y='320' width='340' height='50' fill='%23f9f9f9' rx='3'/%3E%3Crect x='30' y='380' width='340' height='50' fill='%23f9f9f9' rx='3'/%3E%3Crect x='30' y='450' width='340' height='2' fill='%233b82f6'/%3E%3Ctext x='30' y='480' fill='%233b82f6' font-size='12' font-weight='bold'%3EEducation%3C/text%3E%3C/svg%3E"
//     },
//     {
//       id: 5,
//       name: "Designer's Choice",
//       description: "Sophisticated layout for creative professionals",
//       preview: "data:image/svg+xml,%3Csvg width='400' height='520' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='520' fill='white'/%3E%3Crect width='140' height='520' fill='%232563eb'/%3E%3Ccircle cx='70' cy='60' r='30' fill='white'/%3E%3Ctext x='70' y='67' text-anchor='middle' fill='%232563eb' font-size='12'%3EPhoto%3C/text%3E%3Ctext x='70' y='120' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3ESarah Mitchell%3C/text%3E%3Ctext x='70' y='140' text-anchor='middle' fill='white' font-size='9'%3ECreative Designer%3C/text%3E%3Crect x='20' y='170' width='100' height='2' fill='white'/%3E%3Ctext x='70' y='200' text-anchor='middle' fill='white' font-size='11' font-weight='bold'%3ESkills%3C/text%3E%3Crect x='20' y='220' width='100' height='30' fill='%231d4ed8' rx='3'/%3E%3Crect x='20' y='260' width='100' height='30' fill='%231d4ed8' rx='3'/%3E%3Crect x='20' y='300' width='100' height='30' fill='%231d4ed8' rx='3'/%3E%3Crect x='160' y='30' width='220' height='70' fill='%23dbeafe' rx='5'/%3E%3Ctext x='170' y='55' fill='%23111' font-size='10'%3EAbout Me%3C/text%3E%3Crect x='160' y='120' width='220' height='2' fill='%232563eb'/%3E%3Ctext x='170' y='145' fill='%232563eb' font-size='12' font-weight='bold'%3EWork Experience%3C/text%3E%3Crect x='170' y='160' width='200' height='50' fill='%23f9f9f9' rx='3'/%3E%3Crect x='170' y='220' width='200' height='50' fill='%23f9f9f9' rx='3'/%3E%3Crect x='160' y='290' width='220' height='2' fill='%232563eb'/%3E%3Ctext x='170' y='315' fill='%232563eb' font-size='12' font-weight='bold'%3EEducation%3C/text%3E%3Crect x='170' y='330' width='200' height='40' fill='%23f9f9f9' rx='3'/%3E%3C/svg%3E"
//     }
//   ];

//   const nextTemplate = () => {
//     setCurrentTemplate((prev) => (prev + 1) % templates.length);
//   };

//   const prevTemplate = () => {
//     setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length);
//   };

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
//     }`}>
//       {/* Theme Toggle */}
//       <button
//         onClick={toggleTheme}
//         className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
//           isDarkTheme 
//             ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
//             : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
//         }`}
//       >
//         {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
//       </button>

//       <div className="grid lg:grid-cols-2 min-h-screen">
//         {/* Left Side - Hero Section */}
//         <div className="flex items-center justify-center p-8 lg:p-16">
//           <div className="max-w-xl space-y-8">
//             {/* Illustration */}
//             <div className="relative">
//               <div className={`w-64 h-64 mx-auto rounded-full ${
//                 isDarkTheme ? 'bg-gradient-to-br from-purple-600 to-blue-500' : 'bg-gradient-to-br from-purple-400 to-blue-400'
//               } p-1`}>
//                 <div className={`w-full h-full rounded-full ${
//                   isDarkTheme ? 'bg-gray-900' : 'bg-white'
//                 } flex items-center justify-center`}>
//                   <svg
//                     viewBox="0 0 200 200"
//                     className="w-48 h-48"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* Cartoon character illustration */}
//                     <circle cx="100" cy="80" r="35" fill={isDarkTheme ? "#A78BFA" : "#8B5CF6"} />
//                     <circle cx="90" cy="75" r="5" fill={isDarkTheme ? "#1F2937" : "#111827"} />
//                     <circle cx="110" cy="75" r="5" fill={isDarkTheme ? "#1F2937" : "#111827"} />
//                     <path
//                       d="M85 88 Q100 95 115 88"
//                       stroke={isDarkTheme ? "#1F2937" : "#111827"}
//                       strokeWidth="2"
//                       fill="none"
//                       strokeLinecap="round"
//                     />
//                     <rect x="70" y="115" width="60" height="70" rx="5" fill={isDarkTheme ? "#6366F1" : "#4F46E5"} />
//                     <path
//                       d="M70 130 L85 160 L70 160 Z"
//                       fill={isDarkTheme ? "#4F46E5" : "#4338CA"}
//                     />
//                     <path
//                       d="M130 130 L115 160 L130 160 Z"
//                       fill={isDarkTheme ? "#4F46E5" : "#4338CA"}
//                     />
//                     <circle cx="85" cy="140" r="3" fill={isDarkTheme ? "#FCD34D" : "#F59E0B"} />
//                     <circle cx="100" cy="140" r="3" fill={isDarkTheme ? "#FCD34D" : "#F59E0B"} />
//                     <circle cx="115" cy="140" r="3" fill={isDarkTheme ? "#FCD34D" : "#F59E0B"} />
//                     <rect x="85" y="155" width="8" height="15" fill={isDarkTheme ? "#34D399" : "#10B981"} />
//                     <rect x="107" y="155" width="8" height="15" fill={isDarkTheme ? "#34D399" : "#10B981"} />
//                     <path
//                       d="M50 150 Q50 180 100 180"
//                       stroke={isDarkTheme ? "#F472B6" : "#EC4899"}
//                       strokeWidth="3"
//                       fill="none"
//                     />
//                   </svg>
//                 </div>
//               </div>
              
//               {/* Floating elements */}
//               <div className={`absolute top-0 right-0 w-16 h-16 rounded-lg ${
//                 isDarkTheme ? 'bg-purple-600' : 'bg-purple-400'
//               } opacity-20 animate-bounce`} style={{ animationDelay: '0.5s' }} />
//               <div className={`absolute bottom-0 left-0 w-12 h-12 rounded-full ${
//                 isDarkTheme ? 'bg-blue-600' : 'bg-blue-400'
//               } opacity-20 animate-bounce`} style={{ animationDelay: '1s' }} />
//             </div>

//             {/* Text Content */}
//             <div className="space-y-4 text-center">
//               <h1 className={`text-4xl lg:text-5xl font-bold ${
//                 isDarkTheme 
//                   ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
//                   : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
//               }`}>
//                 Begin Shaping Your Career
//               </h1>
//               <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Select your perfect resume template and make your first impression count
//               </p>
//               <div className="flex items-center justify-center gap-2 pt-4">
//                 <div className={`w-2 h-2 rounded-full ${
//                   isDarkTheme ? 'bg-purple-500' : 'bg-purple-600'
//                 } animate-pulse`} />
//                 <div className={`w-2 h-2 rounded-full ${
//                   isDarkTheme ? 'bg-blue-500' : 'bg-blue-600'
//                 } animate-pulse`} style={{ animationDelay: '0.2s' }} />
//                 <div className={`w-2 h-2 rounded-full ${
//                   isDarkTheme ? 'bg-pink-500' : 'bg-pink-600'
//                 } animate-pulse`} style={{ animationDelay: '0.4s' }} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Template Slider */}
//         <div className={`flex items-center justify-center p-8 ${
//           isDarkTheme ? 'bg-gray-800' : 'bg-gray-50'
//         }`}>
//           <div className="max-w-2xl w-full space-y-8">
//             <div className="text-center space-y-2">
//               <h2 className="text-3xl font-bold">Choose Your Template</h2>
//               <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
//                 Browse through our professionally designed templates
//               </p>
//             </div>

//             {/* Template Card */}
//             <div className="relative">
//               <div className={`rounded-2xl overflow-hidden shadow-2xl ${
//                 isDarkTheme ? 'bg-gray-700' : 'bg-white'
//               } transition-transform duration-300`}>
//                 {/* Template Preview */}
//                 <div className="aspect-[3/4] bg-white flex items-center justify-center relative overflow-hidden">
//                   <img 
//                     src={templates[currentTemplate].preview} 
//                     alt={templates[currentTemplate].name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Template Info */}
//                 <div className="p-6 space-y-3">
//                   <h3 className="text-2xl font-bold">{templates[currentTemplate].name}</h3>
//                   <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
//                     {templates[currentTemplate].description}
//                   </p>
//                   <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     isDarkTheme
//                       ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
//                       : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
//                   }`}>
//                     Use This Template
//                   </button>
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prevTemplate}
//                 className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full transition-all duration-300 ${
//                   isDarkTheme
//                     ? 'bg-gray-700 hover:bg-gray-600 text-white'
//                     : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg'
//                 }`}
//               >
//                 <ChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={nextTemplate}
//                 className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full transition-all duration-300 ${
//                   isDarkTheme
//                     ? 'bg-gray-700 hover:bg-gray-600 text-white'
//                     : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg'
//                 }`}
//               >
//                 <ChevronRight size={24} />
//               </button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex justify-center gap-2">
//               {templates.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTemplate(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     currentTemplate === index
//                       ? isDarkTheme
//                         ? 'w-8 bg-purple-500'
//                         : 'w-8 bg-purple-600'
//                       : isDarkTheme
//                       ? 'bg-gray-600'
//                       : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Counter */}
//             <div className="text-center">
//               <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
//                 Template {currentTemplate + 1} of {templates.length}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeTemplateSelector;
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TemplateSelection() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

 const templates = [
  { id: 1, src: "/images/onyx.jpg", name: "Onyx" },
  { id: 2, src: "/images/classic.png", name: "Classic" },
  { id: 3, src: "/images/gengar.jpg", name: "Gengar" },
  { id: 4, src: "/images/pikachu.jpg", name: "Pikachu" },
];


  const handleNavigate = (template) =>{
      router.push(`/previewpage?id=${template.id}&name=${template.name}`);
  }


  return (
    <div
      className={`min-h-screen flex transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Section - Mood Image + Toggle */}
      <div className="w-1/3 flex flex-col items-center justify-center p-8 border-r border-gray-700">
        <Image
          src={darkMode ? "/images/moonlight.png" : "/images/sunlight.png"}
          alt="Mood lighting"
          width={250}
          height={250}
          className="rounded-2xl shadow-lg mb-10 transition-all duration-500"
        />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-full border transition ${
            darkMode
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      

      {/* Right Section - Templates */}
      <div>
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer rounded-xl overflow-hidden shadow-md border ${
              darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-200"
            } transition`}
            onClick={()=>handleNavigate(template)}
          >
            <Image
              src={template.src}
              alt={template.name}
              width={400}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center font-semibold text-lg">{template.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
