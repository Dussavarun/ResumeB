// "use client";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addExperience, removeExperience } from "../store/slices/experienceSlice";

// export default function ExperienceForm() {
//   const dispatch = useDispatch();
//   const experiences = useSelector((state) => state.experience.experiences);


//   const [form, setForm] = useState({
//     company: "",
//     role: "",
//     startDate: "",
//     endDate: "",
//     location: "",
//     responsibilities: "",
//   });

//   const handleAdd = () => {
//     if (!form.company.trim() || !form.role.trim()) return;
//     const updated = {
//       ...form,
//       responsibilities: form.responsibilities.split(",").map((r) => r.trim()),
//     };
//     dispatch(addExperience(updated));
//     setForm({ company: "", role: "", startDate: "", endDate: "", location: "", responsibilities: "" });
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
//       <h2 className="text-xl font-semibold">Experience</h2>

//       <input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="border p-2 rounded w-full" />
//       <input placeholder="Role / Position" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="border p-2 rounded w-full" />
//       <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="border p-2 rounded w-full" />
//       <textarea placeholder="Responsibilities (comma-separated)" value={form.responsibilities} onChange={(e) => setForm({ ...form, responsibilities: e.target.value })} className="border p-2 rounded w-full" />

//       <div className="flex gap-2">
//         <input type="month" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="border p-2 rounded w-1/2" />
//         <input type="month" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} className="border p-2 rounded w-1/2" />
//       </div>

//       <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Experience</button>

//       <ul className="mt-4 space-y-2">
//         {experiences.map((exp, i) => (
//           <li key={i} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//             <div>
//               <p className="font-semibold">{exp.company}</p>
//               <p className="text-sm">{exp.role} ({exp.startDate} - {exp.endDate})</p>
//               <p className="text-sm text-gray-600">{exp.location}</p>
//             </div>
//             <button onClick={() => dispatch(removeExperience(i))} className="text-red-500 hover:text-red-700">✕</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, removeExperience } from "../store/slices/experienceSlice";

export default function ExperienceForm() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);

  const [form, setForm] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    location: "",
    responsibilities: "",
  });

  const handleAdd = () => {
    if (!form.company.trim() || !form.role.trim()) return;
    const updated = {
      ...form,
      responsibilities: form.responsibilities
        .split(",")
        .map((r) => r.trim()),
    };
    dispatch(addExperience(updated));
    setForm({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      location: "",
      responsibilities: "",
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
          Experience
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="input"
          />

          <input
            placeholder="Role / Position"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="input"
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="input"
          />

          <div className="grid grid-cols-2 gap-4">
  <input
    type="month"
    value={form.startDate}
    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
    className="input"
  />

  <input
    type="month"
    value={form.endDate}
    onChange={(e) => setForm({ ...form, endDate: e.target.value })}
    className="input"
  />
</div>

        </div>

        <textarea
          placeholder="Responsibilities (comma-separated)"
          value={form.responsibilities}
          onChange={(e) =>
            setForm({ ...form, responsibilities: e.target.value })
          }
          className="input h-32 resize-none"
        />

        <button
          onClick={handleAdd}
          className="w-full px-6 py-3 bg-black text-white font-semibold
          border-2 border-black rounded-xl
          hover:bg-white hover:text-black transition-colors"
        >
          Add Experience
        </button>

        {/* Experience List */}
        {experiences.length > 0 && (
          <ul className="space-y-4">
            {experiences.map((exp, i) => (
              <li
                key={i}
                className="flex justify-between items-start gap-4
                bg-white border-2 border-black rounded-xl p-4"
              >
                <div>
                  <p className="font-bold text-black">{exp.company}</p>
                  <p className="text-sm text-black">
                    {exp.role} ({exp.startDate} – {exp.endDate})
                  </p>
                  <p className="text-sm text-gray-600">{exp.location}</p>
                </div>

                <button
                  onClick={() => dispatch(removeExperience(i))}
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
