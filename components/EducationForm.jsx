"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, removeEducation } from "../store/slices/educationSlice";

export default function EducationForm() {
  const dispatch = useDispatch();
  const education = useSelector((s) => s.education.education ); 
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
    <div className="p-6 bg-white shadow-md rounded-xl space-y-4">
      <h2 className="text-xl font-semibold">Education</h2>

      <input
        placeholder="Institution"
        value={form.institution}
        onChange={(e) => setForm({ ...form, institution: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        placeholder="Degree"
        value={form.degree}
        onChange={(e) => setForm({ ...form, degree: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        placeholder="Duration (e.g. Sep 2018 – June 2022)"
        value={form.duration}
        onChange={(e) => setForm({ ...form, duration: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        placeholder="GPA (e.g. 8.4 / 10)"
        value={form.gpa}
        onChange={(e) => setForm({ ...form, gpa: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Education
      </button>

      <ul className="mt-4 space-y-2">
        {education.map((edu, i) => (
          <li
            key={i}
            className="bg-gray-100 p-3 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-sm">
                {edu.degree} ({edu.duration})
              </p>
              <p className="text-sm text-gray-600">{edu.location}</p>
              <p className="text-sm text-gray-600">{edu.gpa}</p>
            </div>
            <button
              onClick={() => dispatch(removeEducation(i))}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
