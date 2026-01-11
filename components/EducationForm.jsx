// "use client";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addEducation, removeEducation } from "../store/slices/educationSlice";

// export default function EducationForm() {
//   const dispatch = useDispatch();
//   const education = useSelector((s) => s.education.education ); 
//   const [form, setForm] = useState({
//     institution: "",
//     degree: "",
//     gpa: "",
//     location: "",
//     duration: "",
//   });

//   const handleAdd = () => {
//     if (!form.institution.trim() || !form.degree.trim()) return;
//     dispatch(addEducation(form));
//     setForm({
//       institution: "",
//       degree: "",
//       gpa: "",
//       location: "",
//       duration: "",
//     });
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
//       <h2 className="text-xl font-semibold">Education</h2>

//       <input
//         placeholder="Institution"
//         value={form.institution}
//         onChange={(e) => setForm({ ...form, institution: e.target.value })}
//         className="border p-2 rounded w-full"
//       />

//       <input
//         placeholder="Degree"
//         value={form.degree}
//         onChange={(e) => setForm({ ...form, degree: e.target.value })}
//         className="border p-2 rounded w-full"
//       />

//       <input
//         placeholder="Location"
//         value={form.location}
//         onChange={(e) => setForm({ ...form, location: e.target.value })}
//         className="border p-2 rounded w-full"
//       />

//       <input
//         placeholder="Duration (e.g. Sep 2018 – June 2022)"
//         value={form.duration}
//         onChange={(e) => setForm({ ...form, duration: e.target.value })}
//         className="border p-2 rounded w-full"
//       />

//       <input
//         placeholder="GPA (e.g. 8.4 / 10)"
//         value={form.gpa}
//         onChange={(e) => setForm({ ...form, gpa: e.target.value })}
//         className="border p-2 rounded w-full"
//       />

//       <button
//         onClick={handleAdd}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Add Education
//       </button>

//       <ul className="mt-4 space-y-2">
//         {education.map((edu, i) => (
//           <li
//             key={i}
//             className="bg-gray-100 p-3 rounded flex justify-between items-center"
//           >
//             <div>
//               <p className="font-semibold">{edu.institution}</p>
//               <p className="text-sm">
//                 {edu.degree} ({edu.duration})
//               </p>
//               <p className="text-sm text-gray-600">{edu.location}</p>
//               <p className="text-sm text-gray-600">{edu.gpa}</p>
//             </div>
//             <button
//               onClick={() => dispatch(removeEducation(i))}
//               className="text-red-500 hover:text-red-700"
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, removeEducation } from "../store/slices/educationSlice";

export default function EducationForm() {
  const dispatch = useDispatch();
  const education = useSelector((s) => s.education.education);

  const [form, setForm] = useState({
    institution: "",
    degree: "",
    gpa: "",
    location: "",
    duration: "",
  });

  const handleAdd = () => {
    if (!form.institution.trim() || !form.degree.trim()) return;
    dispatch(addEducation(form));
    setForm({
      institution: "",
      degree: "",
      gpa: "",
      location: "",
      duration: "",
    });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-8">
      <div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl
        border-[3px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Education
        </h2>

        {/* Form Inputs */}
        <div className="space-y-5">
          <input
            placeholder="Institution"
            value={form.institution}
            onChange={(e) =>
              setForm({ ...form, institution: e.target.value })
            }
            className="input"
          />

          <input
            placeholder="Degree"
            value={form.degree}
            onChange={(e) => setForm({ ...form, degree: e.target.value })}
            className="input"
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="input"
          />

          <input
            placeholder="Duration (e.g. Sep 2018 – June 2022)"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            className="input"
          />

          <input
            placeholder="GPA (e.g. 8.4 / 10)"
            value={form.gpa}
            onChange={(e) => setForm({ ...form, gpa: e.target.value })}
            className="input"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="w-full px-6 py-3
          !bg-[#fffefe] text-black font-semibold
          border-2 border-black rounded-xl
          hover:!bg-[#2ff50e] transition-colors"
        >
          Add Education
        </button>

        {/* Education List */}
        {education.length > 0 && (
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <li
                key={i}
                className="flex justify-between items-start gap-4
                bg-white border-2 border-black rounded-xl p-4"
              >
                <div className="space-y-1">
                  <p className="font-bold text-black">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-black">
                    {edu.degree}
                  </p>
                  {edu.duration && (
                    <p className="text-sm text-gray-600">
                      {edu.duration}
                    </p>
                  )}
                  {edu.location && (
                    <p className="text-sm text-gray-600">
                      {edu.location}
                    </p>
                  )}
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => dispatch(removeEducation(i))}
                  className="text-black font-bold hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
