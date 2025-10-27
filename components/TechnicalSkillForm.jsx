// "use client";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addSkill, removeSkill } from "../store/slices/techSkillsSlice";

// const categories = [
//   { key: "programminglangs", label: "Programming Languages" },
//   { key: "databases", label: "Databases" },
//   { key: "frameworks", label: "Frameworks" },
//   { key: "developerTools", label: "Tools" },
//   {key : "cloudAndDevops" , label : "Cloud"}
// ];

// export default function TechSkillsForm() {
//   const dispatch = useDispatch();
//   const techSkills = useSelector((state) => state.techskills);
//   const [inputs, setInputs] = useState({
//     programminglangs: "",
//     databases: "",
//     frameworks: "",
//     tools: "",
//     cloud : "",
//   });

//   const handleAdd = (category) => {
//     const skill = inputs[category].trim();
//     if (!skill) return;
//     dispatch(addSkill({ category, skill }));
//     setInputs((prev) => ({ ...prev, [category]: "" }));
//   };

//   const handleRemove = (category, skill) => {
//     dispatch(removeSkill({ category, skill }));
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-xl max-w-2xl mx-auto space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>

//       {categories.map(({ key, label }) => (
//         <div key={key} className="border-b pb-4">
//           <h3 className="font-semibold text-lg mb-2">{label}</h3>

//           <div className="flex gap-2 mb-3">
//             <input
//               type="text"
//               value={inputs[key]}
//               onChange={(e) => setInputs({ ...inputs, [key]: e.target.value })}
//               placeholder={`Add a ${label.slice(0, -1)}`}
//               className="border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={() => handleAdd(key)}
//               className="bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600"
//             >
//               Add
//             </button>
//           </div>

//           {techSkills && techSkills[key]?.length > 0 && (
//             <ul className="flex flex-wrap gap-2">
//               {techSkills[key].map((skill, i) => (
//                 <li
//                   key={i}
//                   className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
//                 >
//                   {skill}
//                   <button
//                     onClick={() => handleRemove(key, skill)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     ✕
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill } from "../store/slices/techSkillsSlice";

const categories = [
  { key: "programmingLanguages", label: "Programming Languages" },
  { key: "databases", label: "Databases" },
  { key: "frameworks", label: "Frameworks" },
  { key: "developerTools", label: "Developer Tools" },
  { key: "cloudAndDevOps", label: "Cloud & DevOps" },
];

export default function TechSkillsForm() {
  const dispatch = useDispatch();
  const techSkills = useSelector((state) => state.techskills);

  const [inputs, setInputs] = useState({
    programmingLanguages: "",
    databases: "",
    frameworks: "",
    developerTools: "",
    cloudAndDevOps: "",
  });

  const handleAdd = (category) => {
    const skill = inputs[category].trim();
    if (!skill) return;
    dispatch(addSkill({ category, skill }));
    setInputs((prev) => ({ ...prev, [category]: "" }));
  };

  const handleRemove = (category, skill) => {
    dispatch(removeSkill({ category, skill }));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>

      {categories.map(({ key, label }) => (
        <div key={key} className="border-b pb-4">
          <h3 className="font-semibold text-lg mb-2">{label}</h3>

          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={inputs[key]}
              onChange={(e) => setInputs({ ...inputs, [key]: e.target.value })}
              placeholder={`Add a ${label.slice(0, -1)}`}
              className="border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleAdd(key)}
              className="bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          {techSkills[key] && techSkills[key].length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {techSkills[key].map((skill, i) => (
                <li
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => handleRemove(key, skill)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
