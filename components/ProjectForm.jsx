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
      technologies: form.technologies.split(",").map((t) => t.trim()),
    };
    dispatch(addProject(updated));
    setForm({ title: "", description: "", technologies: "", link: "" });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
      <h2 className="text-xl font-semibold">Projects</h2>

      <input placeholder="Project Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 rounded w-full" />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 rounded w-full" />
      <input placeholder="Technologies (comma-separated)" value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} className="border p-2 rounded w-full" />
      <input placeholder="Project Link (GitHub/Live)" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} className="border p-2 rounded w-full" />

      <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Project</button>

      <ul className="mt-4 space-y-2">
        {projects.map((proj, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{proj.title}</p>
              <p className="text-sm">{proj.description}</p>
              <p className="text-sm text-gray-600">{proj.technologies?.join(", ")}</p>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
                  {proj.link}
                </a>
              )}
            </div>
            <button onClick={() => dispatch(removeProject(i))} className="text-red-500 hover:text-red-700">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
