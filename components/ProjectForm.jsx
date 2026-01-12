// "use client";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProject, removeProject } from "../store/slices/projectSlice";

// export default function ProjectForm() {
//   const dispatch = useDispatch();
//   const projects = useSelector((state) => state.project.projects);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     technologies: "",
//     link: "",
//   });

//   const handleAdd = () => {
//     if (!form.title.trim()) return;
//     const updated = {
//       ...form,
//       technologies: form.technologies
//         .split(",")
//         .map((t) => t.trim())
//         .filter(Boolean),
//     };
//     dispatch(addProject(updated));
//     setForm({ title: "", description: "", technologies: "", link: "" });
//   };

//   return (
//     <div className="min-h-screen bg-white flex justify-center items-start p-8">
//       <div
//         className="w-full max-w-4xl bg-white p-10 rounded-3xl
//         border-[3px] border-black
//         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
//         space-y-8"
//       >
//         <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
//           Projects
//         </h2>

//         {/* Form Inputs */}
//         <div className="space-y-5">
//           <input
//             placeholder="Project Title"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             className="input"
//           />

//           <textarea
//             placeholder="Project Description"
//             value={form.description}
//             onChange={(e) =>
//               setForm({ ...form, description: e.target.value })
//             }
//             className="input h-32 resize-none"
//           />

//           <input
//             placeholder="Technologies (comma-separated)"
//             value={form.technologies}
//             onChange={(e) =>
//               setForm({ ...form, technologies: e.target.value })
//             }
//             className="input"
//           />

//           <input
//             placeholder="Project Link (GitHub / Live)"
//             value={form.link}
//             onChange={(e) => setForm({ ...form, link: e.target.value })}
//             className="input"
//           />
//         </div>

//         {/* Add Button */}
//        <button
//   onClick={handleAdd}
//   className="w-full px-6 py-3
//   !bg-[#fffefe] text-black font-semibold
//   border-2 border-black rounded-xl
//   hover:!bg-[#2ff50e] transition-colors"
// >
//   Add Project
// </button>


//         {/* Project List */}
//         {projects.length > 0 && (
//           <ul className="space-y-4">
//             {projects.map((proj, i) => (
//               <li
//                 key={i}
//                 className="flex justify-between items-start gap-4
//                 bg-white border-2 border-black rounded-xl p-4"
//               >
//                 <div className="space-y-1">
//                   <p className="font-bold text-black">{proj.title}</p>
//                   <p className="text-sm text-black">{proj.description}</p>
//                   <p className="text-sm text-gray-600">
//                     {proj.technologies?.join(", ")}
//                   </p>
//                   {proj.link && (
//                     <a
//                       href={proj.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-black underline text-sm"
//                     >
//                       {proj.link}
//                     </a>
//                   )}
//                 </div>

//                 <button
//                   onClick={() => dispatch(removeProject(i))}
//                   className="text-black font-bold hover:text-red-600"
//                 >
//                   ✕
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, removeProject } from "../store/slices/projectSlice";

export default function ProjectForm() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);

  const [form, setForm] = useState({
    title: "",
    descriptionPoints: [],
    technologies: "",
    link: "",
  });

  const [point, setPoint] = useState("");

  /* ADD DESCRIPTION POINT */
  const addPoint = () => {
    if (!point.trim()) return;
    setForm({
      ...form,
      descriptionPoints: [...form.descriptionPoints, point.trim()],
    });
    setPoint("");
  };

  /* REMOVE DESCRIPTION POINT */
  const removePoint = (idx) => {
    setForm({
      ...form,
      descriptionPoints: form.descriptionPoints.filter(
        (_, i) => i !== idx
      ),
    });
  };

  /* ADD PROJECT */
  const handleAdd = () => {
    if (!form.title.trim()) return;

    const updated = {
      title: form.title,
      description: form.descriptionPoints, // 🔥 ARRAY
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      link: form.link,
    };

    dispatch(addProject(updated));

    setForm({
      title: "",
      descriptionPoints: [],
      technologies: "",
      link: "",
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
          Projects
        </h2>

        {/* PROJECT INFO */}
        <div className="space-y-5">
          <input
            placeholder="Project Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="input"
          />

          {/* DESCRIPTION POINT INPUT */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                placeholder="Add project description point"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="input flex-1"
              />
              <button
                onClick={addPoint}
                className="px-4 py-2 bg-black text-white font-semibold
                border-2 border-black rounded-xl
                hover:bg-white hover:text-black transition-colors"
              >
                Add
              </button>
            </div>

            {form.descriptionPoints.length > 0 && (
              <ul className="space-y-2">
                {form.descriptionPoints.map((p, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-start gap-4
                    bg-white border-2 border-black rounded-xl p-3"
                  >
                    <span className="text-sm text-black">
                      • {p}
                    </span>
                    <button
                      onClick={() => removePoint(i)}
                      className="font-bold text-black hover:text-red-600"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            placeholder="Technologies (comma-separated)"
            value={form.technologies}
            onChange={(e) =>
              setForm({ ...form, technologies: e.target.value })
            }
            className="input"
          />

          <input
            placeholder="Project Link (GitHub / Live)"
            value={form.link}
            onChange={(e) =>
              setForm({ ...form, link: e.target.value })
            }
            className="input"
          />
        </div>

        {/* ADD PROJECT BUTTON */}
        <button
          onClick={handleAdd}
          className="w-full px-6 py-3
          bg-black text-white font-semibold
          border-2 border-black rounded-xl
          hover:bg-white hover:text-black transition-colors"
        >
          Add Project
        </button>

        {/* PROJECT LIST */}
        {projects.length > 0 && (
          <ul className="space-y-4">
            {projects.map((proj, i) => (
              <li
                key={i}
                className="flex justify-between items-start gap-4
                bg-white border-2 border-black rounded-xl p-4"
              >
                <div className="space-y-1">
                  <p className="font-bold text-black">{proj.title}</p>

                  {Array.isArray(proj.description) && (
                    <ul className="list-disc list-inside text-sm text-black">
                      {proj.description.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  )}

                  <p className="text-sm text-gray-600">
                    {proj.technologies?.join(", ")}
                  </p>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline text-sm"
                    >
                      {proj.link}
                    </a>
                  )}
                </div>

                <button
                  onClick={() => dispatch(removeProject(i))}
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
