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
//       technologies: form.technologies.split(",").map((t) => t.trim()),
//     };
//     dispatch(addProject(updated));
//     setForm({ title: "", description: "", technologies: "", link: "" });
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
//       <h2 className="text-xl font-semibold">Projects</h2>

//       <input placeholder="Project Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 rounded w-full" />
//       <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 rounded w-full" />
//       <input placeholder="Technologies (comma-separated)" value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} className="border p-2 rounded w-full" />
//       <input placeholder="Project Link (GitHub/Live)" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} className="border p-2 rounded w-full" />

//       <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Project</button>

//       <ul className="mt-4 space-y-2">
//         {projects.map((proj, i) => (
//           <li key={i} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//             <div>
//               <p className="font-semibold">{proj.title}</p>
//               <p className="text-sm">{proj.description}</p>
//               <p className="text-sm text-gray-600">{proj.technologies?.join(", ")}</p>
//               {proj.link && (
//                 <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
//                   {proj.link}
//                 </a>
//               )}
//             </div>
//             <button onClick={() => dispatch(removeProject(i))} className="text-red-500 hover:text-red-700">✕</button>
//           </li>
//         ))}
//       </ul>
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
    description: "",
    technologies: "",
    link: "",
  });

  const handleAdd = () => {
    if (!form.title.trim()) return;
    const updated = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    dispatch(addProject(updated));
    setForm({ title: "", description: "", technologies: "", link: "" });
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

        {/* Form Inputs */}
        <div className="space-y-5">
          <input
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="input"
          />

          <textarea
            placeholder="Project Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="input h-32 resize-none"
          />

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
            onChange={(e) => setForm({ ...form, link: e.target.value })}
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
  Add Project
</button>


        {/* Project List */}
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
                  <p className="text-sm text-black">{proj.description}</p>
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

