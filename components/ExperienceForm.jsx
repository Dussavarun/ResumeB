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
      responsibilities: form.responsibilities.split(",").map((r) => r.trim()),
    };
    dispatch(addExperience(updated));
    setForm({ company: "", role: "", startDate: "", endDate: "", location: "", responsibilities: "" });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
      <h2 className="text-xl font-semibold">Experience</h2>

      <input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="border p-2 rounded w-full" />
      <input placeholder="Role / Position" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="border p-2 rounded w-full" />
      <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="border p-2 rounded w-full" />
      <textarea placeholder="Responsibilities (comma-separated)" value={form.responsibilities} onChange={(e) => setForm({ ...form, responsibilities: e.target.value })} className="border p-2 rounded w-full" />

      <div className="flex gap-2">
        <input type="month" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="border p-2 rounded w-1/2" />
        <input type="month" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} className="border p-2 rounded w-1/2" />
      </div>

      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Experience</button>

      <ul className="mt-4 space-y-2">
        {experiences.map((exp, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm">{exp.role} ({exp.startDate} - {exp.endDate})</p>
              <p className="text-sm text-gray-600">{exp.location}</p>
            </div>
            <button onClick={() => dispatch(removeExperience(i))} className="text-red-500 hover:text-red-700">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
