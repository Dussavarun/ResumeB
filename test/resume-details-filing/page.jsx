// "use client";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function ResumeForm() {
//   // CHANGED: Added pre-steps to the step state (-2 for user type, -1 for template selection)
//   const [step, setStep] = useState(-2);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const router = useRouter();
  
//   // CHANGED: Added userType and selectedTemplate to formData
//   const [formData, setFormData] = useState({
//     userType: "",
//     selectedTemplate: null, 
//     personal: {
//       name: "",
//       email: "",
//       phone: "",
//       linkedin: "",
//       github: "",
//       targetedRole: "",
//     },
//     skills: "",
//     experience: [
//       {
//         jobTitle: "",
//         company: "",
//         location: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ],
//     education: [
//       {
//         degree: "",
//         institution: "",
//         location: "",
//         startDate: "",
//         endDate: "",
//         highlights: "",
//       },
//     ],
//     projects: [
//       { title: "", techStack: "", description: "" },
//     ],
//     certifications: [
//       { name: "", organization: "", year: "", link: "" },
//     ],
//   });

//   const steps = ["Personal", "Skills", "Experience", "Education", "Projects", "Certifications"];

//   const handleStepChange = (newStep) => {
//     if (newStep === step) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setStep(newStep);
//       setIsAnimating(false);
//     }, 200);
//   };

//   const handleChange = (section, field, value, index = null) => {
//     if (index !== null) {
//       const updated = [...formData[section]];
//       updated[index][field] = value;
//       setFormData({ ...formData, [section]: updated });
//     } else {
//       setFormData({
//         ...formData,
//         [section]: { ...formData[section], [field]: value },
//       });
//     }
//   };

//   const handleArrayChange = (section, index, field, value) => {
//     const updated = [...formData[section]];
//     updated[index][field] = value;
//     setFormData({ ...formData, [section]: updated });
//   };

//   const addEntry = (section, template) => {
//     setFormData({ ...formData, [section]: [...formData[section], template] });
//   };

//   const removeEntry = (section, index) => {
//     const updated = [...formData[section]];
//     updated.splice(index, 1);
//     setFormData({ ...formData, [section]: updated });
//   };

//   const generateResume = async () => {
//     // Here you would send the data to your AI backend
//     console.log("Generating resume with data:", formData);
//      try {
//       const response = await axios.post("/api/ai-enhance", { formData });
//       console.log("this is the data given by ai" , response);

//       if (response.data.enhanced) {
//               sessionStorage.setItem(
//           "resumeData",  
//           JSON.stringify(response.data.enhanced)
//           );

//         // ✅ Navigate only after data is stored
//       }
//       router.push("/resume-preview");
//     } catch (err) {
//       console.error(err);
//     } 
//   };

//   // CHANGED: Added function to handle user type selection
//   const handleUserTypeSelect = (type) => {
//     setFormData({ ...formData, userType: type });
//     handleStepChange(-1); // Move to template selection
//   };

//   // CHANGED: Added function to handle template selection
//   const handleTemplateSelect = (templateNumber) => {
//     setFormData({ ...formData, selectedTemplate: templateNumber });
//     handleStepChange(0); // Move to first form step
//   };

//   const renderInput = (label, value, onChange, type = "text", placeholder = "") => (
//     <div className="group mb-6">
//       <label className="block text-gray-200 font-medium mb-2 text-sm tracking-wide">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="w-full border border-white/10 rounded-xl px-4 py-3 text-white bg-white/5 backdrop-blur-md 
//                  focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/50
//                  hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg
//                  placeholder-gray-400"
//       />
//     </div>
//   );

//   const renderTextarea = (label, value, onChange, placeholder = "") => (
//     <div className="group mb-6">
//       <label className="block text-gray-200 font-medium mb-2 text-sm tracking-wide">{label}</label>
//       <textarea
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         rows="4"
//         className="w-full border border-white/10 rounded-xl px-4 py-3 text-white bg-white/5 backdrop-blur-md
//                  focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/50
//                  hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg resize-none
//                  placeholder-gray-400"
//       />
//     </div>
//   );

//   // CHANGED: Added new function to render user type selection step
//   const renderUserTypeStep = () => (
//     <div className="text-center">
//       <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//         Welcome to Resume Builder
//       </h2>
//       <p className="text-gray-300 text-lg mb-12">Let's get started by understanding your background</p>
      
//       <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
//         {/* Professional Option */}
//         <div 
//           onClick={() => handleUserTypeSelect("professional")}
//           className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer
//                    hover:bg-white/10 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl
//                    hover:border-blue-400/30 group"
//         >
//           <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💼</div>
//           <h3 className="text-2xl font-bold text-white mb-4">Working Professional</h3>
//           <p className="text-gray-300">
//             I have work experience and want to create a professional resume
//           </p>
//         </div>

//         {/* Student Option */}
//         <div 
//           onClick={() => handleUserTypeSelect("student")}
//           className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer
//                    hover:bg-white/10 transition-all duration-500 hover:shadow-green-500/20 hover:shadow-2xl
//                    hover:border-green-400/30 group"
//         >
//           <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</div>
//           <h3 className="text-2xl font-bold text-white mb-4">Student</h3>
//           <p className="text-gray-300">
//             I'm a student looking to create my first resume or internship resume
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   // CHANGED: Added new function to render template selection step
//   const renderTemplateStep = () => (
//     <div>
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//           Choose Your Template
//         </h2>
//         <p className="text-gray-300 text-lg">
//           Select a template that best fits your {formData.userType === "professional" ? "professional" : "student"} profile
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {[1, 2, 3, 4, 5, 6].map((templateNum) => (
//           <div
//             key={templateNum}
//             onClick={() => handleTemplateSelect(templateNum)}
//             className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
//                        hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
//                        hover:border-purple-400/30 group aspect-[3/4] flex flex-col items-center justify-center
//                        ${formData.selectedTemplate === templateNum ? 'ring-2 ring-purple-400 bg-purple-500/10' : ''}`}
//           >
//             <div className="text-6xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300 mb-4">
//               {templateNum}
//             </div>
//             <div className="text-center">
//               <h3 className="text-lg font-semibold text-white mb-2">Template {templateNum}</h3>
//               <p className="text-sm text-gray-400">
//                 {templateNum <= 2 && "Classic Design"}
//                 {templateNum >= 3 && templateNum <= 4 && "Modern Design"}
//                 {templateNum >= 5 && "Creative Design"}
//               </p>
//             </div>
//             <div className="mt-4 text-xs text-gray-500">
//               Perfect for {formData.userType === "professional" ? "professionals" : "students"}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Back button for template selection */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() => handleStepChange(-2)}
//           className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
//                    backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
//         >
//           ← Back to User Type
//         </button>
//       </div>
//     </div>
//   );

//   // CHANGED: Modified renderStep to include new pre-steps and updated experience section
//   const renderStep = () => {
//     const stepContent = (() => {
//       // Handle pre-steps
//       if (step === -2) return renderUserTypeStep();
//       if (step === -1) return renderTemplateStep();

//       // Original form steps
//       switch (step) {
//         case 0:
//           return (
//             <>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Personal Information
//               </h2>
//               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
//                             hover:bg-white/10 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl">
//                 {renderInput("Full Name", formData.personal.name, (val) => handleChange("personal", "name", val))}
//                 {renderInput("Email Address", formData.personal.email, (val) => handleChange("personal", "email", val), "email")}
//                 {renderInput("Phone Number", formData.personal.phone, (val) => handleChange("personal", "phone", val), "tel")}
//                 {renderInput("LinkedIn Profile", formData.personal.linkedin, (val) => handleChange("personal", "linkedin", val), "url", "https://linkedin.com/in/username")}
//                 {renderInput("GitHub Profile", formData.personal.github, (val) => handleChange("personal", "github", val), "url", "https://github.com/username")}
//                 {renderInput("Target Role", formData.personal.targetedRole, (val) => handleChange("personal", "targetedRole", val), "text", "Software Engineer, Data Scientist...")}
//               </div>
//             </>
//           );
//         case 1:
//           return (
//             <>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
//                 Skills & Expertise
//               </h2>
//               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
//                             hover:bg-white/10 transition-all duration-500 hover:shadow-green-500/10 hover:shadow-2xl">
//                 {renderTextarea("Skills", formData.skills, (val) => setFormData({ ...formData, skills: val }), "Python, JavaScript, React, Node.js, SQL, Machine Learning...")}
//               </div>
//             </>
//           );
//         case 2:
//           return (
//             <div>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Work Experience
//               </h2>
              
//               {/* CHANGED: Added experience type selection cards for professionals */}
//               {formData.userType === "professional" && formData.experience.length === 1 && !formData.experience[0].jobTitle && (
//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold text-white mb-6 text-center">How would you like to add your experience?</h3>
//                   <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
//                     <div 
//                       onClick={() => {
//                         // Set up for manual entry
//                         setFormData({
//                           ...formData,
//                           experience: [{ jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: "" }]
//                         });
//                       }}
//                       className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
//                                hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
//                                hover:border-purple-400/30 group text-center"
//                     >
//                       <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✍️</div>
//                       <h4 className="text-lg font-semibold text-white mb-2">Manual Entry</h4>
//                       <p className="text-sm text-gray-400">Fill in your experience details step by step</p>
//                     </div>

//                     <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
//                                    hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
//                                    hover:border-purple-400/30 group text-center opacity-50">
//                       <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
//                       <h4 className="text-lg font-semibold text-white mb-2">Upload Resume</h4>
//                       <p className="text-sm text-gray-400">Extract experience from existing resume (Coming Soon)</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {formData.experience.map((exp, idx) => (
//                 <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
//                                         hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/10 hover:shadow-2xl">
//                   {renderInput(
//                     formData.userType === "student" ? "Position/Internship Title" : "Job Title", 
//                     exp.jobTitle, 
//                     (val) => handleArrayChange("experience", idx, "jobTitle", val)
//                   )}
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {renderInput("Company", exp.company, (val) => handleArrayChange("experience", idx, "company", val))}
//                     {renderInput("Location", exp.location, (val) => handleArrayChange("experience", idx, "location", val))}
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {renderInput("Start Date", exp.startDate, (val) => handleArrayChange("experience", idx, "startDate", val), "month")}
//                     {renderInput("End Date", exp.endDate, (val) => handleArrayChange("experience", idx, "endDate", val), "month")}
//                   </div>
//                   {renderTextarea(
//                     formData.userType === "student" ? "Responsibilities & Learning" : "Job Description & Achievements", 
//                     exp.description, 
//                     (val) => handleArrayChange("experience", idx, "description", val)
//                   )}
//                   {idx > 0 && (
//                     <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
//                                      bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
//                             onClick={() => removeEntry("experience", idx)}>
//                       Remove Experience
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => addEntry("experience", { jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: "" })}
//                 className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 
//                          text-white px-6 py-3 rounded-xl border border-blue-400/30 backdrop-blur-md
//                          transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:shadow-xl">
//                 + Add {formData.userType === "student" ? "Internship/Experience" : "Experience"}
//               </button>
//             </div>
//           );
//         case 3:
//           return (
//             <div>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//                 Education
//               </h2>
//               {formData.education.map((edu, idx) => (
//                 <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
//                                         hover:bg-white/10 transition-all duration-500 hover:shadow-orange-500/10 hover:shadow-2xl">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {renderInput("Degree", edu.degree, (val) => handleArrayChange("education", idx, "degree", val))}
//                     {renderInput("Institution", edu.institution, (val) => handleArrayChange("education", idx, "institution", val))}
//                   </div>
//                   {renderInput("Location", edu.location, (val) => handleArrayChange("education", idx, "location", val))}
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {renderInput("Start Date", edu.startDate, (val) => handleArrayChange("education", idx, "startDate", val), "month")}
//                     {renderInput("End Date", edu.endDate, (val) => handleArrayChange("education", idx, "endDate", val), "month")}
//                   </div>
//                   {renderTextarea("Achievements & Highlights", edu.highlights, (val) => handleArrayChange("education", idx, "highlights", val))}
//                   {idx > 0 && (
//                     <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
//                                      bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
//                             onClick={() => removeEntry("education", idx)}>
//                       Remove Education
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => addEntry("education", { degree: "", institution: "", location: "", startDate: "", endDate: "", highlights: "" })}
//                 className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 
//                          text-white px-6 py-3 rounded-xl border border-yellow-400/30 backdrop-blur-md
//                          transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:shadow-xl">
//                 + Add Education
//               </button>
//             </div>
//           );
//         case 4:
//           return (
//             <div>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
//                 Projects
//               </h2>
//               {formData.projects.map((proj, idx) => (
//                 <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
//                                         hover:bg-white/10 transition-all duration-500 hover:shadow-cyan-500/10 hover:shadow-2xl">
//                   {renderInput("Project Title", proj.title, (val) => handleArrayChange("projects", idx, "title", val))}
//                   {renderInput("Tech Stack", proj.techStack, (val) => handleArrayChange("projects", idx, "techStack", val))}
//                   {renderTextarea("Project Description", proj.description, (val) => handleArrayChange("projects", idx, "description", val))}
//                   {idx > 0 && (
//                     <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
//                                      bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
//                             onClick={() => removeEntry("projects", idx)}>
//                       Remove Project
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => addEntry("projects", { title: "", techStack: "", description: "" })}
//                 className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 
//                          text-white px-6 py-3 rounded-xl border border-cyan-400/30 backdrop-blur-md
//                          transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:shadow-xl">
//                 + Add Project
//               </button>
//             </div>
//           );
//         case 5:
//           return (
//             <div>
//               <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
//                 Certifications
//               </h2>
//               {formData.certifications.map((cert, idx) => (
//                 <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
//                                         hover:bg-white/10 transition-all duration-500 hover:shadow-rose-500/10 hover:shadow-2xl">
//                   {renderInput("Certification Name", cert.name, (val) => handleArrayChange("certifications", idx, "name", val))}
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {renderInput("Organization", cert.organization, (val) => handleArrayChange("certifications", idx, "organization", val))}
//                     {renderInput("Year", cert.year, (val) => handleArrayChange("certifications", idx, "year", val))}
//                   </div>
//                   {renderInput("Certificate Link", cert.link, (val) => handleArrayChange("certifications", idx, "link", val), "url")}
//                   {idx > 0 && (
//                     <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
//                                      bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
//                             onClick={() => removeEntry("certifications", idx)}>
//                       Remove Certification
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => addEntry("certifications", { name: "", organization: "", year: "", link: "" })}
//                 className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 hover:from-rose-500/30 hover:to-pink-500/30 
//                          text-white px-6 py-3 rounded-xl border border-rose-400/30 backdrop-blur-md
//                          transition-all duration-300 shadow-lg hover:shadow-rose-500/20 hover:shadow-xl">
//                 + Add Certification
//               </button>
//             </div>
//           );
//         default:
//           return null;
//       }
//     })();

//     return (
//       <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
//         {stepContent}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen w-screen">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {/* CHANGED: Updated Progress Stepper - only show for main form steps (step >= 0) */}
//         {step >= 0 && (
//           <div className="relative mb-6">
//             {/* Background track */}
//             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 rounded-full"></div>
            
//             {/* Progress fill */}
//             <div 
//               className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 -translate-y-1/2 rounded-full transition-all duration-700 ease-out shadow-sm shadow-blue-400/30"
//               style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
//             ></div>
            
//             {/* Step bubbles */}
//             <div className="relative flex justify-between">
//               {steps.map((stepName, i) => (
//                 <div
//                   key={i}
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-500 relative z-10 ${
//                     i === step
//                       ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-400/40 scale-125 ring-2 ring-white/20"
//                       : i < step
//                       ? "bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-lg shadow-emerald-400/30 scale-110"
//                       : "bg-white/10 backdrop-blur-sm text-gray-400 hover:bg-white/20 hover:text-white hover:scale-105"
//                   }`}
//                   onClick={() => handleStepChange(i)}
//                 >
//                   {i < step ? (
//                     <span className="text-xs">✓</span>
//                   ) : i === step ? (
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                   ) : (
//                     i + 1
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step Content */}
//         {renderStep()}

//         {/* CHANGED: Updated Navigation - only show for main form steps */}
//         {step >= 0 && (
//           <div className="flex justify-between items-center mt-8">
//             {step > 0 ? (
//               <button
//                 onClick={() => handleStepChange(step - 1)}
//                 className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
//                          backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
//               >
//                 Previous
//               </button>
//             ) : (
//               /* Back to template selection from first form step */
//               <button
//                 onClick={() => handleStepChange(-1)}
//                 className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
//                          backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
//               >
//                 ← Back to Templates
//               </button>
//             )}
//             <div className="flex gap-4 ml-auto">
//               {step < steps.length - 1 ? (
//                 <button
//                   onClick={() => handleStepChange(step + 1)}
//                   className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 
//                            text-white px-6 py-3 rounded-xl border border-blue-400/30 backdrop-blur-md
//                            transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
//                 >
//                   Next Step
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => generateResume()}
//                   className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 
//                            text-white px-8 py-3 rounded-xl border border-green-400/30 backdrop-blur-md font-semibold
//                            transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:shadow-xl"
//                 >
//                   🚀 Generate Resume
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumeForm() {
  // CHANGED: Added pre-steps to the step state (-2 for user type, -1 for template selection)
  const [step, setStep] = useState(-2);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  
  // UPDATED: Complete form data structure with all required ATS fields
  const [formData, setFormData] = useState({
    userType: "",
    selectedTemplate: null, 
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },
    targeting: {
      desiredJobTitle: "",
      jobDescription: "",
    },
    professionalSummary: "",
    skills: "",
    experience: [
      {
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        technologies: "",
        mainContribution: "",
        impact: "",
      },
    ],
    projects: [
      { 
        name: "", 
        description: "", 
        technologies: "",
        impact: "",
      },
    ],
    education: [
      {
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        gpa: "",
      },
    ],
    certifications: [
      { 
        name: "", 
        organization: "", 
        year: "",
      },
    ],
  });

  const steps = ["Personal", "Targeting", "Summary", "Skills", "Experience", "Projects", "Education", "Certifications"];

  const handleStepChange = (newStep) => {
    if (newStep === step) return;
    setIsAnimating(true);
    setTimeout(() => {
      setStep(newStep);
      setIsAnimating(false);
    }, 200);
  };

  const handleChange = (section, field, value, index = null) => {
    if (index !== null) {
      const updated = [...formData[section]];
      updated[index][field] = value;
      setFormData({ ...formData, [section]: updated });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [field]: value },
      });
    }
  };

  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const addEntry = (section, template) => {
    setFormData({ ...formData, [section]: [...formData[section], template] });
  };

  const removeEntry = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData({ ...formData, [section]: updated });
  };

  const generateResume = async () => {
    // Here you would send the data to your AI backend
    console.log("Generating resume with data:", formData);
     try {
      const response = await axios.post("/api/ai-enhance", { formData });
      console.log("this is the data given by ai" , response);

      if (response.data.enhanced) {
              sessionStorage.setItem(
          "resumeData",  
          JSON.stringify(response.data.enhanced)
          );

        // ✅ Navigate only after data is stored
      }
      router.push("/resume-preview");
    } catch (err) {
      console.error(err);
    } 
  };

  // CHANGED: Added function to handle user type selection
  const handleUserTypeSelect = (type) => {
    setFormData({ ...formData, userType: type });
    handleStepChange(-1); // Move to template selection
  };

  // CHANGED: Added function to handle template selection
  const handleTemplateSelect = (templateNumber) => {
    setFormData({ ...formData, selectedTemplate: templateNumber });
    handleStepChange(0); // Move to first form step
  };

  const renderInput = (label, value, onChange, type = "text", placeholder = "") => (
    <div className="group mb-6">
      <label className="block text-gray-200 font-medium mb-2 text-sm tracking-wide">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-white/10 rounded-xl px-4 py-3 text-white bg-white/5 backdrop-blur-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/50
                 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg
                 placeholder-gray-400"
      />
    </div>
  );

  const renderTextarea = (label, value, onChange, placeholder = "", rows = 4) => (
    <div className="group mb-6">
      <label className="block text-gray-200 font-medium mb-2 text-sm tracking-wide">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full border border-white/10 rounded-xl px-4 py-3 text-white bg-white/5 backdrop-blur-md
                 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/50
                 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg resize-none
                 placeholder-gray-400"
      />
    </div>
  );

  // CHANGED: Added new function to render user type selection step
  const renderUserTypeStep = () => (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Welcome to Resume Builder
      </h2>
      <p className="text-gray-300 text-lg mb-12">Let's get started by understanding your background</p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {/* Professional Option */}
        <div 
          onClick={() => handleUserTypeSelect("professional")}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer
                   hover:bg-white/10 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl
                   hover:border-blue-400/30 group"
        >
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💼</div>
          <h3 className="text-2xl font-bold text-white mb-4">Working Professional</h3>
          <p className="text-gray-300">
            I have work experience and want to create a professional resume
          </p>
        </div>

        {/* Student Option */}
        <div 
          onClick={() => handleUserTypeSelect("student")}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer
                   hover:bg-white/10 transition-all duration-500 hover:shadow-green-500/20 hover:shadow-2xl
                   hover:border-green-400/30 group"
        >
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</div>
          <h3 className="text-2xl font-bold text-white mb-4">Student</h3>
          <p className="text-gray-300">
            I'm a student looking to create my first resume or internship resume
          </p>
        </div>
      </div>
    </div>
  );

  // CHANGED: Added new function to render template selection step
  const renderTemplateStep = () => (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Choose Your Template
        </h2>
        <p className="text-gray-300 text-lg">
          Select a template that best fits your {formData.userType === "professional" ? "professional" : "student"} profile
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((templateNum) => (
          <div
            key={templateNum}
            onClick={() => handleTemplateSelect(templateNum)}
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
                       hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
                       hover:border-purple-400/30 group aspect-[3/4] flex flex-col items-center justify-center
                       ${formData.selectedTemplate === templateNum ? 'ring-2 ring-purple-400 bg-purple-500/10' : ''}`}
          >
            <div className="text-6xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300 mb-4">
              {templateNum}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Template {templateNum}</h3>
              <p className="text-sm text-gray-400">
                {templateNum <= 2 && "Classic Design"}
                {templateNum >= 3 && templateNum <= 4 && "Modern Design"}
                {templateNum >= 5 && "Creative Design"}
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Perfect for {formData.userType === "professional" ? "professionals" : "students"}
            </div>
          </div>
        ))}
      </div>

      {/* Back button for template selection */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handleStepChange(-2)}
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
                   backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
        >
          ← Back to User Type
        </button>
      </div>
    </div>
  );

  // UPDATED: Complete renderStep function with all ATS-optimized fields
  const renderStep = () => {
    const stepContent = (() => {
      // Handle pre-steps
      if (step === -2) return renderUserTypeStep();
      if (step === -1) return renderTemplateStep();

      // Original form steps
      switch (step) {
        case 0: // Personal Information
          return (
            <>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Personal Information
              </h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
                            hover:bg-white/10 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl">
                {renderInput("Full Name", formData.personal.name, (val) => handleChange("personal", "name", val))}
                {renderInput("Email Address", formData.personal.email, (val) => handleChange("personal", "email", val), "email")}
                {renderInput("Phone Number", formData.personal.phone, (val) => handleChange("personal", "phone", val), "tel")}
                {renderInput("Location", formData.personal.location, (val) => handleChange("personal", "location", val), "text", "City, Country")}
                {renderInput("LinkedIn Profile", formData.personal.linkedin, (val) => handleChange("personal", "linkedin", val), "url", "https://linkedin.com/in/username")}
                {renderInput("GitHub Profile", formData.personal.github, (val) => handleChange("personal", "github", val), "url", "https://github.com/username")}
                {renderInput("Portfolio Website", formData.personal.portfolio, (val) => handleChange("personal", "portfolio", val), "url", "https://yourportfolio.com")}
              </div>
            </>
          );

        case 1: // Job Targeting
          return (
            <>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Job Targeting
              </h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
                            hover:bg-white/10 transition-all duration-500 hover:shadow-indigo-500/10 hover:shadow-2xl">
                {renderInput("Desired Job Title", formData.targeting.desiredJobTitle, (val) => handleChange("targeting", "desiredJobTitle", val), "text", "Backend Engineer, Frontend Developer, Data Scientist...")}
                {renderTextarea("Job Description / Keywords (Optional)", formData.targeting.jobDescription, (val) => handleChange("targeting", "jobDescription", val), "Paste job description or key requirements to optimize for ATS (optional but recommended)...", 6)}
                <p className="text-sm text-gray-400 mt-2">💡 Tip: Adding job description helps AI optimize your resume for ATS systems</p>
              </div>
            </>
          );

        case 2: // Professional Summary
          return (
            <>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Professional Summary
              </h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
                            hover:bg-white/10 transition-all duration-500 hover:shadow-emerald-500/10 hover:shadow-2xl">
                {renderTextarea("Professional Summary (Optional)", formData.professionalSummary, (val) => setFormData({ ...formData, professionalSummary: val }), "1-2 sentences about yourself (e.g., 'Backend engineer focused on APIs and cloud infrastructure with 3+ years experience...')", 3)}
                <p className="text-sm text-gray-400 mt-2">💡 Leave blank if you prefer AI to generate this based on your experience</p>
              </div>
            </>
          );

        case 3: // Skills
          return (
            <>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl 
                            hover:bg-white/10 transition-all duration-500 hover:shadow-green-500/10 hover:shadow-2xl">
                {renderTextarea("Technical Skills", formData.skills, (val) => setFormData({ ...formData, skills: val }), "Python, JavaScript, React, Node.js, SQL, Machine Learning, AWS, Docker, Git...", 4)}
                <p className="text-sm text-gray-400 mt-2">💡 List technologies, programming languages, frameworks, tools - AI will organize them properly</p>
              </div>
            </>
          );

        case 4: // Experience
          return (
            <div>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work Experience
              </h2>
              
              {/* Experience type selection for professionals */}
              {formData.userType === "professional" && formData.experience.length === 1 && !formData.experience[0].jobTitle && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">How would you like to add your experience?</h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                    <div 
                      onClick={() => {
                        // Set up for manual entry
                        setFormData({
                          ...formData,
                          experience: [{ jobTitle: "", company: "", location: "", startDate: "", endDate: "", technologies: "", mainContribution: "", impact: "" }]
                        });
                      }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
                               hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
                               hover:border-purple-400/30 group text-center"
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✍️</div>
                      <h4 className="text-lg font-semibold text-white mb-2">Manual Entry</h4>
                      <p className="text-sm text-gray-400">Fill in your experience details step by step</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer
                                   hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl
                                   hover:border-purple-400/30 group text-center opacity-50">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
                      <h4 className="text-lg font-semibold text-white mb-2">Upload Resume</h4>
                      <p className="text-sm text-gray-400">Extract experience from existing resume (Coming Soon)</p>
                    </div>
                  </div>
                </div>
              )}

              {formData.experience.map((exp, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
                                        hover:bg-white/10 transition-all duration-500 hover:shadow-purple-500/10 hover:shadow-2xl">
                  {renderInput(
                    formData.userType === "student" ? "Position/Internship Title" : "Job Title", 
                    exp.jobTitle, 
                    (val) => handleArrayChange("experience", idx, "jobTitle", val)
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    {renderInput("Company", exp.company, (val) => handleArrayChange("experience", idx, "company", val))}
                    {renderInput("Location", exp.location, (val) => handleArrayChange("experience", idx, "location", val), "text", "City, Country (Optional)")}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {renderInput("Start Date", exp.startDate, (val) => handleArrayChange("experience", idx, "startDate", val), "month")}
                    {renderInput("End Date", exp.endDate, (val) => handleArrayChange("experience", idx, "endDate", val), "month")}
                  </div>
                  {renderInput("Technologies/Tools Used", exp.technologies, (val) => handleArrayChange("experience", idx, "technologies", val), "text", "React, Python, AWS, PostgreSQL...")}
                  {renderTextarea("Main Contribution", exp.mainContribution, (val) => handleArrayChange("experience", idx, "mainContribution", val), "Brief description of your main responsibilities (e.g., 'Developed REST APIs for user management system')", 2)}
                  {renderTextarea("Impact/Outcome (Optional)", exp.impact, (val) => handleArrayChange("experience", idx, "impact", val), "Quantified results if possible (e.g., 'Improved system performance by 30%', 'Reduced load time by 2 seconds')", 2)}
                  {idx > 0 && (
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
                                     bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
                            onClick={() => removeEntry("experience", idx)}>
                      Remove Experience
                    </button>
                  )}
                </div>
              ))}
              <button onClick={() => addEntry("experience", { jobTitle: "", company: "", location: "", startDate: "", endDate: "", technologies: "", mainContribution: "", impact: "" })}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 
                         text-white px-6 py-3 rounded-xl border border-blue-400/30 backdrop-blur-md
                         transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:shadow-xl">
                + Add {formData.userType === "student" ? "Internship/Experience" : "Experience"}
              </button>
            </div>
          );

        case 5: // Projects
          return (
            <div>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </h2>
              {formData.projects.map((proj, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
                                        hover:bg-white/10 transition-all duration-500 hover:shadow-cyan-500/10 hover:shadow-2xl">
                  {renderInput("Project Name", proj.name, (val) => handleArrayChange("projects", idx, "name", val))}
                  {renderTextarea("Project Description", proj.description, (val) => handleArrayChange("projects", idx, "description", val), "One line description (e.g., 'Built IoT dashboard in React')", 2)}
                  {renderInput("Technologies Used", proj.technologies, (val) => handleArrayChange("projects", idx, "technologies", val), "text", "React, Node.js, MongoDB, Firebase...")}
                  {renderTextarea("Impact/Outcome (Optional)", proj.impact, (val) => handleArrayChange("projects", idx, "impact", val), "Results or achievements (e.g., 'Used by 500+ students', 'Featured in tech blog')", 2)}
                  {idx > 0 && (
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
                                     bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
                            onClick={() => removeEntry("projects", idx)}>
                      Remove Project
                    </button>
                  )}
                </div>
              ))}
              <button onClick={() => addEntry("projects", { name: "", description: "", technologies: "", impact: "" })}
                className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 
                         text-white px-6 py-3 rounded-xl border border-cyan-400/30 backdrop-blur-md
                         transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:shadow-xl">
                + Add Project
              </button>
            </div>
          );

        case 6: // Education
          return (
            <div>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Education
              </h2>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
                                        hover:bg-white/10 transition-all duration-500 hover:shadow-orange-500/10 hover:shadow-2xl">
                  {renderInput("Degree", edu.degree, (val) => handleArrayChange("education", idx, "degree", val), "text", "B.Tech in Computer Science, MBA, M.S. in Data Science...")}
                  {renderInput("Institution Name", edu.institution, (val) => handleArrayChange("education", idx, "institution", val))}
                  <div className="grid md:grid-cols-2 gap-4">
                    {renderInput("Start Year", edu.startYear, (val) => handleArrayChange("education", idx, "startYear", val), "number", "2020")}
                    {renderInput("End Year", edu.endYear, (val) => handleArrayChange("education", idx, "endYear", val), "number", "2024")}
                  </div>
                  {renderInput("GPA/Additional Notes (Optional)", edu.gpa, (val) => handleArrayChange("education", idx, "gpa", val), "text", "3.8/4.0, Dean's List, Relevant Coursework...")}
                  {idx > 0 && (
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
                                     bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
                            onClick={() => removeEntry("education", idx)}>
                      Remove Education
                    </button>
                  )}
                </div>
              ))}
              <button onClick={() => addEntry("education", { degree: "", institution: "", startYear: "", endYear: "", gpa: "" })}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 
                         text-white px-6 py-3 rounded-xl border border-yellow-400/30 backdrop-blur-md
                         transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:shadow-xl">
                + Add Education
              </button>
            </div>
          );

        case 7: // Certifications
          return (
            <div>
              <h2 className="text-3xl font-bold  mb-8 text-center bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </h2>
              {formData.certifications.map((cert, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 shadow-2xl
                                        hover:bg-white/10 transition-all duration-500 hover:shadow-rose-500/10 hover:shadow-2xl">
                  {renderInput("Certification Name", cert.name, (val) => handleArrayChange("certifications", idx, "name", val), "text", "AWS Certified Developer, Google Cloud Professional...")}
                  <div className="grid md:grid-cols-2 gap-4">
                    {renderInput("Issuing Organization (Optional)", cert.organization, (val) => handleArrayChange("certifications", idx, "organization", val), "text", "Amazon Web Services, Google, Microsoft...")}
                    {renderInput("Year (Optional)", cert.year, (val) => handleArrayChange("certifications", idx, "year", val), "number", "2024")}
                  </div>
                  {idx > 0 && (
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 
                                     bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/20" 
                            onClick={() => removeEntry("certifications", idx)}>
                      Remove Certification
                    </button>
                  )}
                </div>
              ))}
              <button onClick={() => addEntry("certifications", { name: "", organization: "", year: "" })}
                className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 hover:from-rose-500/30 hover:to-pink-500/30 
                         text-white px-6 py-3 rounded-xl border border-rose-400/30 backdrop-blur-md
                         transition-all duration-300 shadow-lg hover:shadow-rose-500/20 hover:shadow-xl">
                + Add Certification
              </button>
            </div>
          );
        default:
          return null;
      }
    })();

    return (
      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {stepContent}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen w-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Stepper - only show for main form steps (step >= 0) */}
        {step >= 0 && (
          <div className="relative mb-6">
            {/* Background track */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 rounded-full"></div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 -translate-y-1/2 rounded-full transition-all duration-700 ease-out shadow-sm shadow-blue-400/30"
              style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {/* Step bubbles */}
            <div className="relative flex justify-between">
              {steps.map((stepName, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-500 relative z-10 ${
                    i === step
                      ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-400/40 scale-125 ring-2 ring-white/20"
                      : i < step
                      ? "bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-lg shadow-emerald-400/30 scale-110"
                      : "bg-white/10 backdrop-blur-sm text-gray-400 hover:bg-white/20 hover:text-white hover:scale-105"
                  }`}
                  onClick={() => handleStepChange(i)}
                >
                  {i < step ? (
                    <span className="text-xs">✓</span>
                  ) : i === step ? (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  ) : (
                    i + 1
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        {renderStep()}

        {/* Navigation - only show for main form steps */}
        {step >= 0 && (
          <div className="flex justify-between items-center mt-8">
            {step > 0 ? (
              <button
                onClick={() => handleStepChange(step - 1)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
                         backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                Previous
              </button>
            ) : (
              /* Back to template selection from first form step */
              <button
                onClick={() => handleStepChange(-1)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 
                         backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                ← Back to Templates
              </button>
            )}
            <div className="flex gap-4 ml-auto">
              {step < steps.length - 1 ? (
                <button
                  onClick={() => handleStepChange(step + 1)}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 
                           text-white px-6 py-3 rounded-xl border border-blue-400/30 backdrop-blur-md
                           transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={() => generateResume()}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 
                           text-white px-8 py-3 rounded-xl border border-green-400/30 backdrop-blur-md font-semibold
                           transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:shadow-xl"
                >
                  🚀 Generate Resume
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}